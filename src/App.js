import React ,{Component} from "react";
import TodoItems from "./components/todoitems/TodoItems"
import AddItems from "./components/additems/AddItems";
class App extends Component{
  state = {
    items :[
      { id:1, name : "ahmed" ,age: 20 },
      { id:2,  name : "ahm" ,age: 20 },
      { id:3 , name : "ah" ,age: 20 }

    ]
  }
  deleteItem = (id) => {
    /////////////////////////////// way /////////////////////////
       /*let items=this.state.items;
       let i = items.findIndex(item => item.id === id ); // لو الي دوست عليه == الي جايلي ده  
       items.splice(i,1); // لو بيساوي امسحه 
       this.setState({items}); // اعمل ابديت*/
       ///////////////////////// another way ///////////////////////////////////
       let items = this.state.items.filter( item => {
         return item.id !==id
       });
       this.setState({items});

  }
  AddItems = (item)=>{
    let items = this.state.items; 
    items.push(item);
    this.setState({items})
  }

  render(){
    return(
      <div className="App container">
             <h1 className="text-center"> Todo List </h1>
     <TodoItems items = {this.state.items} deleteItem ={this.deleteItem} />
     <AddItems AddItems={this.AddItems}/>
     </div>
    )
  
}
}


export default App;
