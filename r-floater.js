import React, { Component,createRef } from 'react';
import $ from 'jquery';
import './index.css';
export default class RPGraph extends Component {
  constructor(props) {
    super(props);
    this.touch = 'ontouchstart' in document.documentElement;
    var {items} = this.props;
    this.dom = createRef();
    this.state = {
      coords:this.getCoords(items),
      selected:false
    };
  }
  eventHandler(selector, event, action,type = 'bind'){
    var me = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }; 
    event = this.touch ? me[event] : event;
    var element = typeof selector === "string"?(selector === "window"?$(window):$(selector)):selector; 
    element.unbind(event, action); 
    if(type === 'bind'){element.bind(event, action)}
  }
  getClient(e){
    return this.touch?{x: e.changedTouches[0].clientX,y:e.changedTouches[0].clientY }:{x:e.clientX,y:e.clientY}
  }
  
  getCoord({left = 0, top = 0},init){
    var {snap} = this.props;
    if(init){left *= snap[0]; top *= snap[1];}
    return [this.getSnapedCoord(0,left),this.getSnapedCoord(1,top)]
  }
  isVisible(item){
    var show = typeof item.show === 'function'?item.show({...this.props,...this.state}):item.show;
    return show !== false;
  }
  getCoords(items){
    var coords = {};
    for (var i = 0; i < items.length; i++){
      if(!this.isVisible(items[i])){continue;}
      var {id} = items[i];

      coords[id] = this.getCoord(items[i],true).concat(items[i]);
    }
    return coords;
  }
  getIndexById(id){var {items} = this.props;for(var i = 0; i < items.length; i++){if(items[i].id === id){return i;}}}
  getRelations(model,relations = []){
    var {coords} = this.state;
    var {text:Text,line:Line,arrowSize} = this.props;
    var r = [];
    for(var i = 0; i < relations.length; i++){
      var rel = relations[i];
      if(!coords[rel.from] || !coords[rel.to]){continue}
      var line = $.extend({},Line,rel.line || {});
      var text = $.extend({},Text,rel.text || {});
      r.push({
        fromId:rel.from,toId:rel.to,
        line:{dash:line.dash || [5,0],width:line.width || 1,color:line.color || '#666'},
        text:{color:text.color || '#666',value:text.value  || '',position:text.position},
        arrowSize:rel.arrowSize || arrowSize,
      });
    }
    return r; 
  }
  getArea(id){
    var {coords} = this.state;
    var {screen} = this.props;
    var element = $('#' + id),width = element.width(),height = element.height();
    var coord = coords[id],left = coord[0] + screen[0],top = coord[1] + screen[1];
    return {
      left,top,right:left + width,bottom:top + height,
      center:{x:left + width / 2,y: top + height / 2}
    };
  }
  update(){
    var {items} = this.props;
    var relations = this.getRelations(items,this.props.relations);
    var lines = '';
    for(var i = 0; i < relations.length; i++){
      var {fromId,toId,text={},arrowSize,line={}} = relations[i];
      var fromArea = this.getArea(fromId),toArea = this.getArea(toId);
      if(!fromArea || !toArea){continue;}
      var x1,y1,x2,y2;
      if(fromArea.left < toArea.right && fromArea.right > toArea.left){
        x1 = fromArea.center.x; x2 = toArea.center.x;
        if(fromArea.top < toArea.top){y1 = fromArea.bottom; y2 = toArea.top;}
        else{y1 = fromArea.top; y2 = toArea.bottom;}
      }
      else{
        y1 = fromArea.center.y; y2 = toArea.center.y;
        if(fromArea.left < toArea.left){x1 = fromArea.right; x2 = toArea.left;}
        else{x1 = fromArea.left; x2 = toArea.right;}
      }
      lines += this.getLine({x1,x2,y1,y2,line,arrowSize});
      lines += this.getArrow({x1,y1,x2,y2,line,arrowSize});
      lines += this.getText({x1,y1,x2,y2,text,line});
    }
    $('.r-floater svg').html(lines);
  }
  componentDidUpdate(){this.update();}
  componentDidMount(){
    var {getMousePosition} = this.props;
    if(getMousePosition){
      this.eventHandler('window','mousemove',(e)=>getMousePosition(this.getMousePosition(e)));
    }
    this.update();
  } 
  dragOver(e){
    var {onDragOver} = this.props;
    if(onDragOver){onDragOver(e,this.getMousePosition(e))}
  }
  drop(e){
    var {onDrop} = this.props;
    if(onDrop){onDrop(e,this.getMousePosition(e))}
  }
  getMousePosition(e){
    var client = this.getClient(e);
    var {screen,zoom} = this.props;
    var dom = $(this.dom.current);
    var offset = dom.offset()
    var x = Math.round((client.x - offset.left) / zoom - screen[0])
    var y = Math.round((client.y - offset.top) / zoom - screen[1])
    return [x,y];
  }
  
  getText({x1,y1,x2,y2,text,line}){ 
    var x = (x1+x2)/2,y = (y1+y2)/2;
    var radian = this.getRadian({x1,y1,x2,y2});
    radian = radian < 270 && radian > 90?180 + radian:radian;
    var value = typeof text.value === 'function'?text.value():text.value;
    return '<text x="'+x+'" y="'+y+'" fill="'+(text.color || line.color || '#000')+'" transform="rotate('+(radian*-1)+' '+x+','+y+') translate(0 '+(text.position === undefined? (line.width / -2 - 3):text.position)+')" style="font-size:'+(text.size || 10)+'px;-webkit-user-select:none; user-select:none;" text-anchor="middle">'+ (value === undefined?'':value) +'</text>';
  }
  getArrowLength(arrowSize){return arrowSize[1] * Math.cos(arrowSize[0] * Math.PI / 180)}
  getLine({x1,y1,x2,y2,line,arrowSize}){
    var length = this.getLength({x1,y1,x2,y2}) - this.getArrowLength(arrowSize);
    var l = this.getLineBySMR({x:x1,y:y1},length < 0 ? 0:length,this.getRadian({x1,y1,x2,y2}));
    return '<line x1="'+x1+'" y1="'+y1+'" x2="'+l.x2+'" y2="'+l.y2+'" stroke="'+line.color+'" stroke-width="'+line.width+'" stroke-dasharray="'+(line.dash)+'" />'
  }
  getArrow({x1,y1,x2,y2,line,arrowSize}){
    var radian = this.getRadian({x1,y1,x2,y2});
    var line1 = this.getLineBySMR({x:x2,y:y2},-arrowSize[1],radian - arrowSize[0]);
    var line2 = this.getLineBySMR({x:x2,y:y2},-arrowSize[1],radian + arrowSize[0]);
    return '<path d="M'+x2+','+y2+' L'+line1.x2+','+line1.y2+' L'+line2.x2+','+line2.y2+' Z" fill="'+line.color+'"/>';
  }
  getRadian({x1,x2,y1,y2}) {
    var radian = (Math.atan((y2 - y1) / (x1 - x2)) / Math.PI * 180);
    if (x2 < x1) {if (y1 - y2 !== 0) { radian = 180 + radian; }else {radian = 180;}} else if (x1 < x2) {if (y2 < y1) { }else if (y1 < y2) { radian = 360 + radian; }else {radian = 0;}} else {if (y2 < y1) { radian = 90; } else if (y1 < y2) { radian = 270; }else {radian = 0;}}return radian;
  }
  getLength({x1,y1,x2,y2}){return Math.sqrt(Math.pow(x1 - x2,2) + Math.pow(y1 - y2,2));}
  getLineBySMR(start,measure,radian){
    var deltaX = Math.cos(radian * Math.PI / 180) * measure,
    deltaY = Math.sin(radian * -1 * Math.PI / 180) * measure;
    return {x1:start.x,y1:start.y,x2:start.x+deltaX,y2:start.y + deltaY}; 
  }
  getOffset(e,[x,y],[startX,startY]){
    var {zoom} = this.props; 
    var client = this.getClient(e);
    return [(client.x - x) / zoom + startX,(client.y - y) / zoom + startY ];
  }
  svgMouseDown(e){
    console.log(e.button);
    var {screen,moveHandleClassName} = this.props;
    this.svgMoved = false;
    e.preventDefault();
    if(!moveHandleClassName){return;}
    this.isDown = true;
    var client = this.getClient(e);
    this.so = {x:client.x,y:client.y,screen:[screen[0],screen[1]]};
    this.eventHandler('window','mousemove',$.proxy(this.svgMouseMove,this))
    this.eventHandler('window','mouseup',$.proxy(this.svgMouseUp,this))
  }
  svgMouseMove(e){
    var {onPan} = this.props;
    if(!onPan){return;}
    this.svgMoved = true;
    var {x,y,screen} = this.so;
    onPan(this.getOffset(e,[x,y],screen));
  }
  svgMouseUp(){
    this.eventHandler('window','mousemove',this.svgMouseMove,'unbind')
    this.eventHandler('window','mouseup',this.svgMouseUp,'unbind')
    if(this.svgMoved === false){
      var {selected} = this.state;
      if(selected !== false){this.setState({selected:false})}
    }
  }
  
  getItemById(id){
    var {items} = this.props;
    for(let i = 0; i < items.length; i++){
      if(items[i].id === id){return items[i]}
    }
  }
  itemMouseDown(e,item,id,index){
    if(!this.touch && e.button === 1){this.svgMouseDown(e); return;}
    var {moveHandleClassName} = this.props,{coords} = this.state;
    if(!moveHandleClassName){return;}  
    var target = $(e.target);
    if(!target.hasClass(moveHandleClassName) && target.parents('.' + moveHandleClassName).length === 0){return;}  
    var ids = [id].concat(this.getSiblings(item));
    this.setState({selected:id})
    $('.r-floater-item').css({zIndex:1});
    $(e.currentTarget).css({zIndex:10});
    var client = this.getClient(e);
    this.so = {x:client.x,y:client.y,items:[]};
    for(var i = 0; i < ids.length; i++){
      var coord = coords[ids[i]];
      let itm = this.getItemById(ids[i])
      this.so.items.push({coord,left:coord[0],top:coord[1],id:ids[i],item:itm});
      
    }
    this.eventHandler('window','mousemove',$.proxy(this.itemMouseMove,this))
    this.eventHandler('window','mouseup',$.proxy(this.itemMouseUp,this))
  }
  getSiblings(item){
    if(!item.group){return []}
    var {items} = this.props;
    var result = [];
    for(var i = 0; i < items.length; i++){
      if(!this.isVisible(items[i])){continue;}
      if(items[i].id === item.id){continue}
      if(items[i].group === item.group){
        result.push(items[i].id)
      }
    }
    return result;

  }
  getAllChilds(id){
    this.childs = [];
    this.getAllChildsRecursive(id);
    console.log(this.childs);
  }
  getAllChildsRecursive(id){
    var {relations} = this.props;
    for(var i = 0; i < relations.length; i++){
      var {from,to} = relations[i];
      if(from === id && this.childs.indexOf(to) === -1){
        this.childs.push(to);
        this.getAllChildsRecursive(to);
      }
    } 
  }
  itemMouseMove(e){
    var {coords} = this.state,{x,y,items} = this.so;
    for(var i = 0; i < items.length; i++){
      var {coord,left,top} = items[i];
      var offset = this.getOffset(e,[x,y],[left,top]);
      coord[0] = offset[0];
      coord[1] = offset[1];
    }
    this.setState({coords});
  }
  itemMouseUp(){
    this.eventHandler('window','mousemove',this.itemMouseMove,'unbind');
    this.eventHandler('window','mouseup',this.itemMouseUp,'unbind');
    $('.r-floater-item').css({transition:'.1s'});
    this.fixCoords();

    $('.r-floater-item').css({transition:'0s'});
  }
  fixCoords(){
    var {items} = this.so;
    var {coords} = this.state;
    var changes = [];
    for(var i = 0; i < items.length; i++){
      let {coord,id,item} = items[i];
      let fixedCoord = this.getCoord({left:coord[0],top:coord[1]});
      coord[0] = fixedCoord[0];
      coord[1] = fixedCoord[1];
      changes.push({item,id,left:coord[0],top:coord[1]})
    }
    this.setState({coords})
    if(this.props.onChange){this.props.onChange(changes,coords)}
  }
  
  getContainerStyle(){
    var {zoom} = this.props;
    return {
      position:'absolute',left:0,top:0,width:'calc(100% / ' + zoom + ')',height:'calc(100% / ' + zoom + ')',transform:'scale('+zoom+')',transformOrigin:'0% 0%',overflow:'hidden'
    }
  }
  zoom(sign){
    var {onZoom,zoom} = this.props;
    if(!onZoom){return;}
    var offset = sign * 0.1;
    var newZoom = parseFloat((zoom + offset).toFixed(1));
    if(newZoom < 0.1){newZoom = 0.1;} else if(newZoom > 3){newZoom = 3;}
    onZoom(newZoom);
  }
  getSnapedCoord(index,value){
    var {snap} = this.props;
    return Math.round(value / snap[index]) * snap[index];
  }
  wheel(e){this.zoom(e.deltaY === 100?-1:1)}
  arrow(code){
    var {selected,coords} = this.state;
    var {snap,screen} = this.props;
    var sign,index = code === 37 || code === 39?0:1;
    var id = selected;
    if(id !== undefined){
      let item = this.getItemById(id);
      sign = code === 37 || code === 38?-1:1;
      coords[id][index] += snap[index] * sign;
      this.setState({coords});
      if(this.props.onChange){this.props.onChange([{item,id,left:coords[id][0],top:coords[id][1]}],coords)}
    }
    else{
      sign = code === 37 || code === 38?1:-1;
      screen[index] += 5 * sign;
      this.setState({screen});
    }
  }
  keyDown(e){
    console.log(e.keyCode);
    var code = e.keyCode;
    if([37,38,39,40].indexOf(code) !== -1){this.arrow(code)}
    else if(code === 17){//ctrl

    }
    else if(code === 16){//shift
      $(window).bind('keyup',$.proxy(this.shiftUp,this));
      this.groupMove = true;
    }
  }
  shiftUp(){
    $(window).unbind('keyup',this.shiftUp);
    this.groupMove = false;
  }
  getStyle(){
    var {zoom} = this.props;
    return {...{ 
      position:'absolute',left:0,top:0,
      width:'calc(100% / ' + zoom + ')',
      height:'calc(100% / ' + zoom + ')',
      transform:'scale('+zoom+')',
      transformOrigin:'0% 0%',
      overflow:'hidden',
    },...this.getBackground()}
  }
  getBackground() { 
    var {snap,zoom} = this.props;
    var [x,y,color] = snap;
    if(!color){return;}
    var {screen } = this.props;
    var a = 100 * zoom;
    var b = x  + "px";
    var c = y  + "px";
    var h1 = `linear-gradient(${color} 0px,transparent 0px)`;
    var v1 = `linear-gradient(90deg,${color} 0px, transparent 0px)`;
    var h2 = `linear-gradient(${color} 1px, transparent 1px)`;
    var v2 = `linear-gradient(90deg,${color} 1px, transparent 1px)`;
    return {
      backgroundImage: `${h1},${v1},${h2},${v2}`,
      backgroundSize: `${a}px ${a}px,${a}px ${a}px,${b} ${c},${b} ${c}`,
      backgroundPosition:screen[0] + 'px ' + screen[1] + 'px'
    };
  }
  render() { 
    var {items,events = {},screen,getCoords = ()=>{},id,className,style} = this.props;
    var {coords,selected} = this.state;
    getCoords(coords);
    var Items = items.filter((item)=>this.isVisible(item)).map((item,i)=>{  
      let {id} = item;
      coords[id] = coords[id] || this.getCoord(item,true).concat(item); 
      let coord = coords[id];
      let props = {
        key:i,className:'r-floater-item' + (id === selected?' selected':''),id:item.id,
        onMouseDown:(e)=>this.itemMouseDown(e,item,id,i),
        onTouchStart:(e)=>this.itemMouseDown(e,item,id,i),
        style:{left:coord[0] + screen[0],top:coord[1] + screen[1]},
        draggable:false,
      }
      return <div {...props}>{item.template}</div>;
    });
    var eventProps = {};
    for(var prop in events){eventProps[prop] = events[prop]}
    return (
      <div 
        ref={this.dom} className={"r-floater" + (className?' ' + className:'')} style={style} tabIndex={0} 
        onWheel={this.wheel.bind(this)} 
        onKeyDown={this.keyDown.bind(this)} {...eventProps} id={id}
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}
      >    
        <div className='r-floater-container' style={this.getStyle()}>
          <svg className='r-floater-svg' onMouseDown={this.svgMouseDown.bind(this)} onTouchStart={this.svgMouseDown.bind(this)}></svg>
          {Items}
        </div>
      </div>
    );
  }
}
RPGraph.defaultProps = {arrowSize:[10,20],text:{},line:{},screen:[0,0],snap:[1,1],zoom:1};