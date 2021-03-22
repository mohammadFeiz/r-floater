# r-floater
### Props
prop             | type                                                              | default   | description
---------------- | ----------------------------------------------------------------- | --------- | -----------
items            | Array Of Objects                                                  | Required  | List Of Floated HTMLs 
relations        | Object                                                            | Optional  | List Of Items Relations 
zoom             | Number(int)                                                       | 1         | Zoom Value Of Scene
screen           | Array (2 int Number)                                              | [0,0]     | Coordinates Of Screen Focus
snap             | Array (3 member)                                                  | [0,0,'']  | Set Snap Grid [horizontal dimension , vertical dimension , color]
selectedStyle    | Css Object                                                        | Optional  | Set selected item style
onPan            | function (get changed screen prop)                                | Optional  | Callback for panning screen
onZoom           | function (get changed zoom prop)                                  | Optional  | Callback for zooming scene
onChange         | function (get changed items array,get coords of all items object) | Optional  | send changes of items coords to parent for info 
getMousePosition | function (get mouse coords on scene as array)                     | Optional  | send mouse coords to parent for info
connectType      | Number (1 or 2 or 3)                                              | 1         | set relation lines type
simpleConnect    | Boolean                                                           | true      | set relation lines(apart or not)
lineWidth        | Number(int +)                                                     | 1         | set relation lines width
lineDash         | Array(2 int number +)(ex:[3, 2])                                  | Optional  | set relation lines dash style
lineColor        | String(color)                                                     | '#6f8ea7' | set relation lines color
fontColor        | String(color)                                                     | '#6f8ea7' | set relations font color
fontSize         | Number                                                            | 10        | set relations text font size
textTop          | Number                                                            | -5        | set relations text vertical offset
textLeft         | Number                                                            | 0         | set relations text horizontal offset
arrowSize        | Array (2 number from 0 to up) (ex:[20, 10])                       | [10,12]   | set relations arrow size

### items prop
#### each item (object)
property         | type                                                              | default   | description
---------------- | ----------------------------------------------------------------- | --------- | -----------
left             | Number                                                            | 0         | left coordinate of item 
top              | Number                                                            | 0         | top coordinate of item 
id               | String                                                            | Required  | id of item (unique)
template         | HTML                                                              | Required  | content of item
show             | Boolean                                                           | true      | set item visible or hidden
move             | Boolean                                                           | true      | Set item movable or not

#### Example
``` javascript
<RFloater 
  items={[
    {template:<Panel number={1}>,id:'panel1',left:120,top:40},
    {template:<Panel number={2}>,id: 'panel2',left:260,top:0},
    {template:<Panel number={3}>,id: 'panel3',left:0,top:240},
    {template:<Panel number={4}>,id: 'panel4',left:120,top:240},
    {template:<Panel number={5}>,id: 'panel5',left:240,top:240},
    {template:<Panel number={6}>,id: 'panel6',left:360,top:240},
    {template:<Panel number={7}>,id: 'panel7',left:620,top:0},
    {template:<Panel number={8}>,id: 'panel8',left:620,top:80},
    {template:<Panel number={9}>,id: 'panel9',left:620,top:160},
    {template:<Panel number={10}>,id: 'panel10',left:620,top:240}, 
    {template:<Panel number={11}>,id: 'panel11',left:620,top:320},
  ]}
/>

```
[![alt text](/images/1-1.jpg)]()

#### Panel Component
``` javascript
class Panel extends Component{
  render(){
    var {text,number} = this.props;
    return(
      <div 
        className="box" 
        style={{
          width:'120px',
          height:'60px',
          display:'flex',
          background:'#fff',
          border:'1px solid #6f8ea7',
          color:'#6f8ea7',
          alignItems:'center',
          justifyContent:'center',
          userSelect: 'none'
        }}
      >{number}</div>
    )
  }
}
```
### relations props
#### Example
``` javascript
<RFloater 
  ...
  relations={{
    'panel1':[
      {to:'panel2',text:'5.2%'},
      {to:'panel3',text:'13%'},
      {to:'panel4',text:'33.3%'},
      {to:'panel5',text:'33.3%'},
      {to:'panel6',text:'33.3%'},
    ],
    'panel2':[
      {to:'panel7',text:'5.2%'},
      {to:'panel8',text:'13%'},
      {to:'panel9',text:'33.3%'},
      {to:'panel10',text:'33.3%'},
      {to:'panel11',text:'33.3%'},
    ]
  }}
  ...
/>
```


### zoom props
#### Example
``` javascript
<RFloater 
  ...
  zoom={0.4}
  ...
/>
```
