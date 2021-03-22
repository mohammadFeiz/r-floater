# r-floater
### Props
prop      | type                                                              | default   | description
--------- | ----------------------------------------------------------------- | --------- | -----------
items     | Array Of Objects                                                  | Required  | List Of Floated HTMLs 
relations | Object                                                            | Optional  | List Of Items Relations 
zoom      | Number(int)                                                       | 1         | Zoom Value Of Scene
screen    | Array (2 int Number)                                              | [0,0]     | Coordinates Of Screen Focus
snap      | Array (3 member)                                                  | [0,0,'']  | Set Snap Grid [horizontal dimension , vertival dimension , color]
onPan     | function (get changed screen prop)                                | Optional  | Callback for panning screen
onZoom    | function (get changed zoom prop)                                  | Optional  | Callback for zooming scene
onChange  | function (get changed items array,get coords of all items object) | Optional  | send changes of items coords to parent for info 
