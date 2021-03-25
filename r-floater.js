import React, { Component,createRef } from 'react';
import $ from 'jquery';
import './index.css';
export default class RPGraph extends Component {
  constructor(props) {
    super(props);
    this.touch = 'ontouchstart' in document.documentElement;
    var {items} = this.props;
    this.dom = createRef();
    this.isDown = false;
    this.state = {
      coords:this.getCoords(items),
      selected:false,
      zoomScreen:[0,0]
    };
  }
  svgMouseDownTouch(e){
    var {selected} = this.state;
    if(selected !== false){this.setState({selected:false})}
  }
  touchMouseDown(e){
    this.touchOffset = false; // در موو این مقدار پر می شود و در اند اعمال می شود. پس در هر استارتی باید ریست شود
    if(this.isDown){//اگر انگشت دوم داره تاچ می کنه
      //اگر روی آیتمی تاچ شده تاچ اندش رو اجرا کن
      if(this.itemDown){this.itemMouseUp();}
      this.eventHandler('window','mousemove',$.proxy(this.touchMouseMove,this));
      this.mousePosition = this.getMousePosition(e);
      var {zoom,screen,moveHandleClassName} = this.props;
      if(!moveHandleClassName){return;}
      let x = e.changedTouches[0].clientX;
      let y = e.changedTouches[0].clientY;
      let touchId = e.changedTouches[0].identifier;
      this.distance = false;
      this.newZoom = zoom;
      if(e.changedTouches[1]){
        let X = e.changedTouches[1].clientX;
        let Y = e.changedTouches[1].clientY;
        distance = Math.round(Math.sqrt(Math.pow(x - X,2) + Math.pow(y - Y,2)));
      }
      this.so = {zoom,touchId,x,y,screen:[screen[0],screen[1]]};
    }
    else{
      this.isDown = true;
    }
    this.eventHandler('window','mouseup',$.proxy(this.touchMouseUp,this));
  }
  touchMouseMove(e){
    var {onPan} = this.props;
    if(!onPan){return;}
    var {x,y,screen,touchId,zoom} = this.so;
    let touch1,touch2;
    if(e.changedTouches[0]){
      if(e.changedTouches[0].identifier === touchId){touch1 = e.changedTouches[0];}
      else{touch2 = e.changedTouches[0];}
    }
    if(e.changedTouches[1]){
      if(e.changedTouches[1].identifier === touchId){touch1 = e.changedTouches[1];}
      else{touch2 = e.changedTouches[1];}
    }
    
    if(touch1){
      let X = touch1.clientX;
      let Y = touch1.clientY;
      let offsetX = X - x;
      let offsetY = Y - y;
      this.touchOffset = [(X - x) / zoom + screen[0],(Y - y) / zoom + screen[1]];
      $(this.dom.current).find('line,path,.r-floater-item,text').css('transform',`translate(${offsetX/zoom}px,${offsetY/zoom}px)`);
      if(touch2){
        let X1 = touch2.clientX;
        let Y1 = touch2.clientY;
        let distance = Math.round(Math.sqrt(Math.pow(X1 - X,2) + Math.pow(Y1 - Y,2)));
        if(this.distance === false){this.distance = distance;}
        let delta = Math.floor((distance - this.distance) / 40) / 10;
        let newZoom = parseFloat((zoom + delta).toFixed(1));
        if(newZoom < 0.1){newZoom = 0.1}
        else if(newZoom > 8){newZoom = 8}
        if(this.newZoom !== newZoom){
          this.newZoom = newZoom;
          this.zoom(newZoom,true);
        }
      }
    }
  }
  touchMouseUp(){
    this.isDown = false;
    this.distance = false;
    if(this.touchOffset !== false){
      $(this.dom.current).find('line,path,.r-floater-item,text').css('transform','unset')
      this.props.onPan(this.touchOffset);
      this.touchOffset = false;
    }
    this.eventHandler('window','mousemove',this.touchMouseMove,'unbind');
    this.eventHandler('window','mouseup',this.touchMouseUp,'unbind');
  }
  getClient(e){
    if(this.touch){
      let {changedTouches = []} = e;
      if(!changedTouches[0]){return false;}
      return {x:changedTouches[0].clientX,y:changedTouches[0].clientY}
    }
    return {x:e.clientX,y:e.clientY}
  }
  getOffset(e,[x,y],[startX,startY]){
    var {zoom} = this.props; 
    var client = this.getClient(e);
    return [(client.x - x) / zoom + startX,(client.y - y) / zoom + startY ];
  }
  svgMouseDown(e){
    this.mousePosition = this.getMousePosition(e);
    this.offset = false;
    var {screen,moveHandleClassName} = this.props;
    this.svgMoved = false;
    e.preventDefault();
    if(!moveHandleClassName){return;}
    var client = this.getClient(e);
    this.so = {x:client.x,y:client.y,screen:[screen[0],screen[1]]};
    this.eventHandler('window','mousemove',$.proxy(this.svgMouseMove,this))
    this.eventHandler('window','mouseup',$.proxy(this.svgMouseUp,this))
  }
  itemMouseDown(e,item,id){
    if(this.itemDown){return;}
    this.mousePosition = this.getMousePosition(e);
    if(e.button === 1){this.svgMouseDown(e); return;}
    var {moveHandleClassName} = this.props,{coords} = this.state;
    if(!moveHandleClassName){return;}  
    var target = $(e.target);
    if(!target.hasClass(moveHandleClassName) && target.parents('.' + moveHandleClassName) && target.parents('.' + moveHandleClassName).length === 0){return;}  
    var ids = [id].concat(this.getSiblings(item));
    this.setState({selected:id})
    $('.r-floater-item').css({zIndex:1});
    $(e.currentTarget).css({zIndex:10});
    this.so = {items:[],mx:this.mousePosition[0],my:this.mousePosition[1]}; 
    let container = $(this.dom.current);
    for(var i = 0; i < ids.length; i++){
      var coord = coords[ids[i]];
      let itm = this.getItemById(ids[i])
      let dom = container.find('#' + ids[i]);
      let cssLeft = parseInt(dom.css('left'));
      let cssTop = parseInt(dom.css('top'));
      this.so.items.push({left:coord[0],top:coord[1],id:ids[i],item:itm,cssLeft,cssTop});
    }
    this.itemDown = true;
    this.eventHandler('window','mousemove',$.proxy(this.itemMouseMove,this))
    this.eventHandler('window','mouseup',$.proxy(this.itemMouseUp,this))
  }
  svgMouseMove(e){
    var {onPan,zoom} = this.props;
    if(!onPan){return;}
    this.svgMoved = true;
    var {x,y,screen} = this.so;
    let client = this.getClient(e);
    let offsetX = client.x - x;
    let offsetY = client.y - y;
    this.offset = this.getOffset(e,[x,y],screen);
    $(this.dom.current).find('line,path,.r-floater-item,text').css('transform',`translate(${offsetX/zoom}px,${offsetY/zoom}px)`)
  }
  svgMouseUp(){
    this.eventHandler('window','mousemove',this.svgMouseMove,'unbind')
    this.eventHandler('window','mouseup',this.svgMouseUp,'unbind')
    if(this.offset !== false){
      $(this.dom.current).find('line,path,.r-floater-item,text').css('transform','unset')
      this.props.onPan(this.offset)
      this.offset = false;
    }
    if(this.svgMoved === false){
      var {selected} = this.state;
      if(selected !== false){this.setState({selected:false})}
    }
  }
  itemMouseMove(e){
    var {move,liveChange} = this.props;
    var {coords} = this.state;
    if(move === false){return;}
    var {items,mx,my} = this.so;
    var container = $(this.dom.current);
    this.mousePosition = this.getMousePosition(e);
    for(var i = 0; i < items.length; i++){
      var {left,top,item,id,cssLeft,cssTop} = items[i];
      if(item.move === false){continue;}
      var offsetX = this.mousePosition[0] - mx,offsetY = this.mousePosition[1] - my;
      let coord = coords[id];
      coord[0] = offsetX + left; coord[1] = offsetY + top;

      if(!liveChange){container.find('#' + id).css({left:cssLeft + offsetX,top:cssTop + offsetY})}
    }
    if(liveChange){this.setState({coords})}
  }
  itemMouseUp(){
    this.itemDown = false;
    this.eventHandler('window','mousemove',this.itemMouseMove,'unbind');
    this.eventHandler('window','mouseup',this.itemMouseUp,'unbind');
    $('.r-floater-item').css({transition:'.1s'});
    this.fixCoords();
    $('.r-floater-item').css({transition:'0s'});
  }
  fixCoords(){
    if(!this.so || !this.so.items){return;}
    var {liveChange} = this.props;
    var {items} = this.so;
    var {coords} = this.state;
    var screen = this.getScreen();
    var container = $(this.dom.current);
    var changes = [];
    for(var i = 0; i < items.length; i++){
      let {id,item} = items[i],coord = coords[id];
      coord[0] = this.getSnapedCoord(0,coord[0]);
      coord[1] = this.getSnapedCoord(1,coord[1]);
      let dom = container.find('#' + id);
      dom.css({left:coord[0] + screen[0],top:coord[1] + screen[1]})
      changes.push({item,id,left:coord[0],top:coord[1]})
    }
    this.setState({coords})
    if(this.props.onChange){this.props.onChange(changes,coords)}
  }
  eventHandler(selector, event, action,type = 'bind'){
    var me = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }; 
    event = this.touch ? me[event] : event;
    var element = typeof selector === "string"?(selector === "window"?$(window):$(selector)):selector; 
    element.unbind(event, action); 
    if(type === 'bind'){element.bind(event, action)}
  }
  getCoord({left = 0, top = 0}){
    return [this.getSnapedCoord(0,left),this.getSnapedCoord(1,top)]
  }
  isVisible(item){return (typeof item.show === 'function'?item.show({...this.props,...this.state}):item.show) !== false;}
  getCoords(items){
    var coords = {};
    for (var i = 0; i < items.length; i++){
      if(!this.isVisible(items[i])){continue;}
      var {id} = items[i];
      coords[id] = this.getCoord(items[i],true).concat(items[i]);
    }
    return coords;
  }
  
  getArea(id){
    var {coords} = this.state,screen = this.getScreen(),element = $('#' + id),width = element.width(),height = element.height();
    var coord = coords[id],left = coord[0] + screen[0],top = coord[1] + screen[1];
    return {
      left,top,right:left + width,bottom:top + height,width,height,
      center:{x:left + width / 2,y: top + height / 2}
    };
  }
  getSortedIndex(arr,value){for(var i = 0; i < arr.length; i++){if(arr[i][0] === value){return i}}}
  addAndSort(arr,[index,pos]){
    if(arr.length === 0){arr.push([index,pos]); return;}
    for(var i = 0; i < arr.length; i++){
      if(pos <= arr[i][1]){arr.splice(i,0,[index,pos]); return;}
    }
    arr.push([index,pos]);
  }
  toBottom({dict,from,to,fromArea,toArea,i}){
    this.addAndSort(dict[from].bottoms,[i,toArea.left]);
    this.addAndSort(dict[to].tops,[i,fromArea.left]);
    return () => {return {
      x1:fromArea.left + ((this.getSortedIndex(dict[from].bottoms,i) + 1)  / (dict[from].bottoms.length + 1)) * fromArea.width,
      x2:toArea.left + ((this.getSortedIndex(dict[to].tops,i) + 1)  / (dict[to].tops.length + 1)) * toArea.width,
      y1:fromArea.bottom,y2:toArea.top,direction:'bottom',index:i,from,to
    }}
  }
  toBottomSimple({dict,from,to,fromArea,toArea,i}){
    return () => {return {
      x1:fromArea.center.x,x2:toArea.center.x,
      y1:fromArea.bottom,y2:toArea.top,direction:'bottom',type:1,index:i,from,to
    }}
  }
  toTop({dict,from,to,fromArea,toArea,i}){
    this.addAndSort(dict[from].tops,[i,toArea.left]);
    this.addAndSort(dict[to].bottoms,[i,fromArea.left]);
    return () => {return {
      x1:fromArea.left + ((this.getSortedIndex(dict[from].tops,i) + 1)  / (dict[from].tops.length + 1)) * fromArea.width,
      x2:toArea.left + ((this.getSortedIndex(dict[to].bottoms,i) + 1)  / (dict[to].bottoms.length + 1)) * toArea.width,
      y1:fromArea.top,y2:toArea.bottom,direction:'top',index:i,from,to
    }}
  }
  toTopSimple({dict,from,to,fromArea,toArea,i}){
    return () => {return {
      x1:fromArea.center.x,x2:toArea.center.x,
      y1:fromArea.top,y2:toArea.bottom,direction:'top',index:i,from,to
    }}
  }
  toRight({dict,from,to,fromArea,toArea,i}){
    this.addAndSort(dict[from].rights,[i,toArea.top]);
    this.addAndSort(dict[to].lefts,[i,fromArea.top]);
    return () => { return {
      y1:fromArea.top + ((this.getSortedIndex(dict[from].rights,i) + 1)  / (dict[from].rights.length + 1)) * fromArea.height,
      y2:toArea.top + ((this.getSortedIndex(dict[to].lefts,i) + 1)  / (dict[to].lefts.length + 1)) * toArea.height,
      x1:fromArea.right,x2:toArea.left,direction:'right',index:i,from,to
    }}
  }
  toRightSimple({dict,from,to,fromArea,toArea,i}){
    return () => { return {
      y1:fromArea.center.y,y2:toArea.center.y,
      x1:fromArea.right,x2:toArea.left,direction:'right',index:i,from,to
    }}
  }
  toLeft({dict,from,to,fromArea,toArea,i}){
    this.addAndSort(dict[from].lefts,[i,toArea.top]);
    this.addAndSort(dict[to].rights,[i,fromArea.top]);
    return () => { return {
      y1:fromArea.top + ((this.getSortedIndex(dict[from].lefts,i) + 1)  / (dict[from].lefts.length + 1)) * fromArea.height,
      y2:toArea.top + ((this.getSortedIndex(dict[to].rights,i) + 1)  / (dict[to].rights.length + 1)) * toArea.height,
      x1:fromArea.left,x2:toArea.right,direction:'left',index:i,from,to
    }}
  }
  toLeftSimple({dict,from,to,fromArea,toArea,i}){
    return () => { return {
      y1:fromArea.center.y,y2:toArea.center.y,
      x1:fromArea.left,x2:toArea.right,direction:'left',index:i,from,to
    }}
  }
  getRelationsCoords(){
    var {relations,simpleConnect} = this.props,{coords} = this.state,dict = {},Relations = [];
    var a,b = simpleConnect === true?'Simple':'';
    for(let from in relations){
      for(let i = 0; i < relations[from].length; i++){
        let relation = relations[from][i],{to,type} = relation;
        if(!coords[from] || !coords[to]){continue}
        let fromArea = this.getArea(from),toArea = this.getArea(to);
        if(!fromArea || !toArea){continue;}
        dict[from] = dict[from] || {lefts:[],rights:[],tops:[],bottoms:[]};
        dict[to] = dict[to] || {lefts:[],rights:[],tops:[],bottoms:[]};  
        let obj = {dict,from,to,fromArea,toArea,i};
        if(type){a = type;}
        else if((fromArea.left < toArea.right && fromArea.right > toArea.left)){
          if(fromArea.top < toArea.top){a = 'toBottom';}
          else{a = 'toTop';}
        }
        else{
          if(fromArea.left < toArea.left){a = 'toRight';}
          else{a = 'toLeft';}
        }
        Relations.push(this[a + b](obj));
      }
    }
    return Relations;
  }
  renderRelation(id,index,ext = {}){
    let obj = {...this.relations[id][index],...ext};
    return this.getLine(obj) + this.getArrow(obj);
  }
  update(){
    var relationsCoords = this.getRelationsCoords();
    var {relations} = this.props;
    let svg;
    this.relations = {};
    for(var i = 0; i < relationsCoords.length; i++){
      let props = relationsCoords[i]();
      let relation = relations[props.from][props.index];
      let {
        lineWidth = this.props.lineWidth,
        lineColor = this.props.lineColor,
        lineDash = this.props.lineDash,
        fontColor = this.props.fontColor,
        arrowSize = this.props.arrowSize,
        fontSize = this.props.fontSize,
        textTop = this.props.textTop,
        textLeft = this.props.textLeft,
        text = '',
      } = relation;
      let obj = {...props,lineWidth,lineColor,lineDash,fontColor,arrowSize,fontSize,text,textTop,textLeft};
      this.relations[props.from] = this.relations[props.from] || [];
      this.relations[props.from][props.index] = obj;
      svg += this.renderRelation(props.from,props.index);
    }
    $('.r-floater svg').html(svg);
  }
  getLine(obj){return this['getLine' + this.props.connectType](obj);} 
  getArrow(obj){return this['getArrow' + this.props.connectType](obj);}
  getLine1({x1,y1,x2,y2,arrowSize,fontSize,lineDash,lineColor,lineWidth,fontColor,text,textTop,textLeft}){
    var length = this.getLength({x1,y1,x2,y2}) - arrowSize[1] * Math.cos(arrowSize[0] * Math.PI / 180);
    var l = this.getLineBySMR({x:x1,y:y1},length < 0 ? 0:length,this.getRadian({x1,y1,x2,y2}));
    var str = '<line x1="'+x1+'" y1="'+y1+'" x2="'+l.x2+'" y2="'+l.y2+'" stroke="'+lineColor+'" stroke-width="'+lineWidth+'" stroke-dasharray="'+(lineDash)+'" />'
    var x = (x1+x2)/2,y = (y1+y2)/2;
    var radian = this.getRadian({x1,y1,x2,y2});
    radian = radian < 270 && radian > 90?180 + radian:radian;
    var value = typeof text === 'function'?text():text;
    str += `<text x="${x}" y="${y}" fill="${fontColor || lineColor || '#000'}" transform="rotate(${radian*-1} ${x},${y}) translate(${textLeft} ${textTop === undefined? (lineWidth / -2 - 3):textTop})" style="font-size:${fontSize || 10}px;-webkit-user-select:none; user-select:none;" text-anchor="middle">${value === undefined?'':value}</text>`;
    return str;
  }
  getLine2({x1,y1,x2,y2,direction,fontSize,lineDash,lineColor,lineWidth,fontColor,text,textTop,textLeft,arrowSize}){
    var cx = (x1 + x2) / 2,cy = (y1 + y2) / 2;
    var start = `<line stroke="${lineColor}" stroke-width="${lineWidth}" stroke-dasharray="${lineDash}" `
    var str = '',tx,ty;
    if(direction === 'bottom'){
      str += `${start}x1="${x1}" y1="${y1}" x2="${x1}" y2="${cy}" />`
      str += `${start}x1="${x1}" y1="${cy}" x2="${x2}" y2="${cy}" />`
      str += `${start}x1="${x2}" y1="${cy}" x2="${x2}" y2="${y2 - arrowSize[0]}" />`
      tx = x2; ty = cy;
    }
    else if(direction === 'top'){
      str += `${start}x1="${x1}" y1="${y1}" x2="${x1}" y2="${cy}" />`
      str += `${start}x1="${x1}" y1="${cy}" x2="${x2}" y2="${cy}" />`
      str += `${start}x1="${x2}" y1="${cy}" x2="${x2}" y2="${y2 + arrowSize[0]}" />`
      tx = x2; ty = cy;
    }
    else if(direction === 'right'){
      str += `${start}x1="${x1}" y1="${y1}" x2="${cx}" y2="${y1}" />`
      str += `${start}x1="${cx}" y1="${y1}" x2="${cx}" y2="${y2}" />`
      str += `${start}x1="${cx}" y1="${y2}" x2="${x2 - arrowSize[1]}" y2="${y2}" />`
      tx = cx; ty = y2;
    }
    else{
      str += `${start}x1="${x1}" y1="${y1}" x2="${cx}" y2="${y1}" />`
      str += `${start}x1="${cx}" y1="${y1}" x2="${cx}" y2="${y2}" />`
      str += `${start}x1="${cx}" y1="${y2}" x2="${x2 + arrowSize[1]}" y2="${y2}" />`
      tx = cx; ty = y2;
    }
    var value = typeof text === 'function'?text():text;
    str += `<text x="${tx}" y="${ty}" fill="${fontColor || lineColor || '#000'}" transform="translate(${textLeft} ${textTop})" style="font-size:${fontSize || 10}px;-webkit-user-select:none; user-select:none;" text-anchor="middle">${value === undefined?'':value}</text>`;
    return str
  }
  getLine3({x1,y1,x2,y2,arrowSize,direction,fontSize,textTop,textLeft,lineDash,lineColor,lineWidth,fontColor,text}){
    var start = `<path fill="transparent" stroke="${lineColor}" stroke-width="${lineWidth}" stroke-dasharray="${lineDash}" `
    var str = '';
    var cx = (x1 + x2) / 2,cy = (y1 + y2) / 2,dest1,dest2,q1,q2;
    if(direction === 'bottom'){
      y2 = y2 - arrowSize[0]; 
      dest1 = [cx - x1,cy - y1]; dest2 = [x2 - cx,y2 - cy]; q1 = [0,(cy - y1) / 2]; q2 = [x2 - cx,(y2 - cy) / 2];
      str += `${start}d="M${x1},${y1} q${q1[0]},${q1[1]},${dest1[0]},${dest1[1]} q${q2[0]},${q2[1]},${dest2[0]},${dest2[1]}" />`
    }
    else if(direction === 'top'){
      y2 = y2 + arrowSize[0]; dest1 = [cx - x1,cy - y1]; dest2 = [x2 - cx,y2 - cy]; q1 = [0,(cy - y1) / 2]; q2 = [x2 - cx,(y2 - cy) / 2];
      str += `${start}d="M${x1},${y1} q${q1[0]},${q1[1]},${dest1[0]},${dest1[1]} q${q2[0]},${q2[1]},${dest2[0]},${dest2[1]}" />`;
    }
    else if(direction === 'right'){
      x2 = x2 - arrowSize[1]; dest1 = [cx - x1,cy - y1]; dest2 = [x2 - cx,y2 - cy]; q1 = [(cx - x1) / 2,0]; q2 = [(x2 - cx) / 2,y2 - cy];
      str += `${start}d="M${x1},${y1} q${q1[0]},${q1[1]},${dest1[0]},${dest1[1]} q${q2[0]},${q2[1]},${dest2[0]},${dest2[1]}" />`
    }
    else {
      x2 = x2 + arrowSize[1]; dest1 = [cx - x1,cy - y1]; dest2 = [x2 - cx,y2 - cy]; q1 = [(cx - x1) / 2,0]; q2 = [(x2 - cx) / 2,y2 - cy];
      str += `${start}d="M${x1},${y1} q${q1[0]},${q1[1]},${dest1[0]},${dest1[1]} q${q2[0]},${q2[1]},${dest2[0]},${dest2[1]}" />`
    }
    var radian = this.getRadian({x1:x1 + q1[0],y1:y1 + q1[1],x2:cx + q2[0],y2:cy + q2[1]});
    radian = radian < 270 && radian > 90?180 + radian:radian;
    var value = typeof text === 'function'?text():text;
    str += `
      <text 
        x="${cx}" y="${cy}" fill="${fontColor || lineColor || '#000'}" 
        transform="rotate(${radian*-1} ${cx},${cy}) translate(${textLeft} ${textTop === undefined? (lineWidth / -2 - 3):textTop})" 
        style="font-size:${fontSize || 10}px;-webkit-user-select:none; user-select:none;" text-anchor="middle"
      >${value === undefined?'':value}</text>
    `;
    return str
  }
  getArrow1({x1,y1,x2,y2,lineColor,arrowSize}){
    var radian = this.getRadian({x1,y1,x2,y2});
    var line1 = this.getLineBySMR({x:x2,y:y2},-arrowSize[1] * 2,radian - arrowSize[0]);
    var line2 = this.getLineBySMR({x:x2,y:y2},-arrowSize[1] * 2,radian + arrowSize[0]);
    return '<path d="M'+x2+','+y2+' L'+line1.x2+','+line1.y2+' L'+line2.x2+','+line2.y2+' Z" fill="'+lineColor+'"/>';
  }
  getArrow2({x2,y2,arrowSize,lineColor,direction}){
      if(direction === 'top'){//top
        return `<path d="M${x2},${y2} L${x2 - arrowSize[0] / 2},${y2 + arrowSize[1]} L${x2 + arrowSize[0] / 2},${y2 + arrowSize[1]} Z" fill="${lineColor}"/>`;
      }
      else if(direction === 'bottom'){//bottom
        return `<path d="M${x2},${y2} L${x2 - arrowSize[0] / 2},${y2 - arrowSize[1]} L${x2 + arrowSize[0] / 2},${y2 - arrowSize[1]} Z" fill="${lineColor}"/>`;
      }
      else if(direction === 'left'){//left
        return `<path d="M${x2},${y2} L${x2 + arrowSize[1]},${y2 - arrowSize[0] / 2} L${x2 + arrowSize[1]},${y2 + arrowSize[0] / 2} Z" fill="${lineColor}"/>`;
      }
      else{//right
        return `<path d="M${x2},${y2} L${x2 - arrowSize[1]},${y2 - arrowSize[0] / 2} L${x2 - arrowSize[1]},${y2 + arrowSize[0] / 2} Z" fill="${lineColor}"/>`;
      }
  }
  getArrow3(obj){return this.getArrow2(obj)}
  componentDidUpdate(){this.update();}
  componentDidMount(){
    if(this.touch){
      this.eventHandler('.r-floater-container','mousedown',$.proxy(this.touchMouseDown,this));
    }
    this.update();
    $(this.dom.current).focus();
  } 
  dragOver(e){if(this.props.onDragOver){this.props.onDragOver(e,this.getMousePosition(e))}}
  drop(e){if(this.props.onDrop){this.props.onDrop(e,this.getMousePosition(e))}}
  getMousePosition(e){
    var client = this.getClient(e),{zoom} = this.props,screen = this.getScreen(),dom = $(this.dom.current);
    if(dom.length === 0 || client === false){return;}
    var offset = dom.offset()
    var x = Math.round((client.x - offset.left) / zoom - screen[0])
    var y = Math.round((client.y - offset.top) / zoom - screen[1])
    this.mousePosition = [x,y];
    if(this.props.getMousePosition){this.props.getMousePosition([x,y])}
    return [x,y];
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
  getItemById(id){
    var {items} = this.props;
    for(let i = 0; i < items.length; i++){
      if(items[i].id === id){return items[i]}
    }
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
  zoom(sign,abs){
    var {onZoom,zoom} = this.props;
    if(!onZoom){return;}
    var newZoom;
    if(abs){newZoom = sign;}
    else{
      var offset = sign * 0.1;
      newZoom = parseFloat((zoom + offset).toFixed(1));
    }
    if(newZoom < 0.2){newZoom = 0.2;} else if(newZoom > 8){newZoom = 8;}
    var dom = $(this.dom.current);
    var width = dom.width();
    var height = dom.height();
    var zoomScreen = [(((1 - newZoom) * width) / newZoom / 2),(((1 - newZoom) * height) / newZoom / 2)]
    onZoom(newZoom);
    this.setState({zoomScreen})
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
    if(id !== false){
      let item = this.getItemById(id);
      sign = code === 37 || code === 38?-1:1;
      coords[id][index] += snap[index] * sign;
      this.setState({coords});
      if(this.props.onChange){this.props.onChange([{item,id,left:coords[id][0],top:coords[id][1]}],coords)}
    }
    else{
      sign = code === 37 || code === 38?1:-1;
      screen[index] += 5 * sign;
      if(this.props.onPan){this.props.onPan(screen)}
    }
  }
  keyDown(e){
    var code = e.keyCode;
    var {keyCodes = []} = this.props;
    if(code === 27){this.setState({seleced:false})}
    if([37,38,39,40].indexOf(code) !== -1){this.arrow(code)}
    else if(code === 16){
      $(window).bind('keyup',$.proxy(this.shiftUp,this));
      this.groupMove = true;
    }
    else if(code === 187){this.zoom(1);}
    else if(code === 189){this.zoom(-1);}
    else if(code === 36){this.zoom(1,true);}
    else if(keyCodes[code]){
      keyCodes[code]({...this.props,...this.state})
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
      transform:`scale(${zoom})`,
      transformOrigin:'0% 0%',
      overflow:'hidden',
    },...this.getBackground()}
  }
  getScreen(){
    var {screen} = this.props;
    var {zoomScreen } = this.state;
    var x = Math.round(screen[0] + zoomScreen[0]);
    var y = Math.round(screen[1] + zoomScreen[1]);
    return [x,y]
  }
  getBackground() { 
    var {snap,zoom} = this.props;
    var [x,y,color] = snap;
    if(!color){return;}
    var screen = this.getScreen();
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
    var {items,events = {},getCoords = ()=>{},id,className,style,selectedColor} = this.props;
    var {coords,selected} = this.state,screen = this.getScreen();
    getCoords(coords);
    var Items = items.filter((item)=>this.isVisible(item)).map((item,i)=>{  
      let {id} = item;
      coords[id] = coords[id] || this.getCoord(item,true).concat(item); 
      let coord = coords[id],left = coord[0] + screen[0],top = coord[1] + screen[1];
      let props = {
        key:i,className:'r-floater-item' + (id === selected?' selected':''),id:item.id,
        [this.touch?'onTouchStart':'onMouseDown']:(e)=>this.itemMouseDown(e,item,id,i),
        style:{left,top,boxShadow:id === selected?'0 0 8px 2px ' +selectedColor:undefined},
        draggable:false,
      }
      return <div {...props}>{item.template}</div>;
    });
    var eventProps = {};
    for(var prop in events){eventProps[prop] = events[prop]}
    var svgProps = {className:'r-floater-svg'}
    if(this.touch){svgProps.onTouchStart = this.svgMouseDownTouch.bind(this)}
    else{svgProps.onMouseDown = this.svgMouseDown.bind(this)}
    return (
      <div 
        ref={this.dom} className={"r-floater" + (className?' ' + className:'')} style={style} tabIndex={0} 
        onWheel={this.wheel.bind(this)} 
        onKeyDown={this.keyDown.bind(this)} {...eventProps} id={id}
        onDragOver={this.dragOver.bind(this)}
        onDrop={this.drop.bind(this)}
      >    
        <div className='r-floater-container' style={this.getStyle()}>
          <svg {...svgProps}></svg>
          {Items}
        </div>
      </div>
    );
  }
}
RPGraph.defaultProps = {
  screen:[0,0],snap:[1,1],zoom:1,connectType:3,simpleConnect:true,
  lineWidth:1,lineColor:'#6f8ea7',lineDash:[5,0],fontColor:'#6f8ea7',arrowSize:[10,12],fontSize:10,textTop:-5,textLeft:0,liveChange:false,selectedColor:'#6f8ea7'
};