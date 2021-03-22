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
