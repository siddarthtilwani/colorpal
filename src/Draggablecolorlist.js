import React from "react";
import Draggablecolorbox from "./Draggablecolorbox";
import {SortableContainer} from 'react-sortable-hoc'

const Draggablecolorlist=SortableContainer(({colors,remove})=>{
return(
    
    <div style={{height:'100%'}}>
        
        {colors.map((clr,index,onSortEnd) => (
                        <Draggablecolorbox 
                        key={clr.name}
                        index={index}
                        delete={()=>(remove(clr.name))}
                        color={clr.color} name={clr.name} />
                    ))}
    </div>
)
})
export default Draggablecolorlist;