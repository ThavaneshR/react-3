import {useState} from 'react';
import React from 'react';
function Colorpicker({colors}){
    const[on,seton]=useState(false);
    const[color,setcolor]=useState("limegreen");
    const pick=()=>{
        seton(!on);
    }
    const handlecolor=(val)=>{
        setcolor(val);
        seton(!on);
    }
   
    return(
        
      <div style={{backgroundColor:'pink',width:650, height:350,borderRadius:10,
      boxShadow:'0px 0px  2px 2px'}}>
        {on&&(<div style={{display:'flex'}}>
            {colors.map((val,ind)=>
            <div key={ind}
            style={{width:25, height:25, backgroundColor:val,marginTop:40,marginInline:3,
            boxShadow:'2px 2px 4px'}}
           onClick={()=>handlecolor(val)}>
        
            </div>)}
        </div>)}
        <button onClick={pick}style={{backgroundColor:color,position:'fixed',
        top:300,color:'white',border:'none',right:'46.3%',padding:6}}>
            Pick a color</button>
      </div>
      
        
    )
}
export default Colorpicker;