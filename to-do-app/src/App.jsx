import React from 'react';
import './App.css'
import TodoItem from './Components/TodoItem';

export default class App extends React.Component{
    constructor(){
      super()
      this.state={
        input:"",
        todoList:[],
      }
    }

    inputChange=(e)=>{

      //changing the value of input in state
     this.setState({
      input:e.target.value
     })
    }

    updateItem=(newItem,index)=>{
      //created a copy of my todoList
      let arr=this.state.todoList

      //update
      arr.splice(index,1,newItem)

      //change the set

      this.setState({
        todoList:arr
      })
    }

    deleteItem=(index)=>{
      let arr=this.state.todoList;

     //delete the item
      arr.splice(index,1)

     //change the state
      this.setState({
        todoList:arr
      })
    }

    formSubmit=(e)=>{
      e.preventDefault()
      if(this.state.input.length>0){
        this.setState({
          input:"",
          todoList:[...this.state.todoList,this.state.input]
        })
      }
      else{
        alert("No Input")
      }
      
    }

    componentDidUpdate(){
      console.log(this.state)
    }


    render(){
      return<>
       <h1>TODO LIST</h1>
      <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.inputChange} value={this.state.input}/>
        <button>A D D</button>
      </form>
      <p>{this.state.input}</p>

      <div className='todoList'>
        <h2>⬇️👾L I S T👾⬇️</h2>
        {this.state.todoList.map((e,i)=>{
         return <>
        <TodoItem 
        e={e}
        i={i} 
        deleteItem={this.deleteItem} 
        updateItem={this.updateItem}/>
         </>
        })}
      </div>
      </>
    }
}