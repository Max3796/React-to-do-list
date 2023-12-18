import React from 'react';
export default class TodoItem extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log("props",this.props)
        let {e,i,updateItem,deleteItem}= this.props
        return <>
         <div key={i} id='edit'>
          <input type="text" value={e} onChange={(event)=>{
            updateItem(event.target.value,i)
          }}/>
          <button style={{
            backgroundColor:"black",
            borderRadius: "6px",
            width: "120px",
            fontSize: "15px",
          }} onClick={()=>{
            deleteItem(i)
          }}>D E L E T E</button>
         </div>
        </>
    }
}