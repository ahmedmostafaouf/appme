import React,{Component} from 'react';
import './AddItems.css'
class AddItems extends Component{
    state = { 
        id: Math.random(),
        name :'',
        age :''
    }
    handelGhange = (e) =>{
        this.setState({
        [e.target.id]:e.target.value
        })
    }
    onSubmit  = (e) => {
        if(e.target.name.value ===''){
            e.preventDefault()
            return false;
        }else{
            e.preventDefault()
            this.props.AddItems(this.state)
            this.setState({
                id :Math.random(),
                name :'',
                age : ''
            })
    
        }
            }
    render(){
        return(
            <div className="add"> 
            <form onSubmit={this.onSubmit}> 
                <input type="text" onChange={this.handelGhange} id="name" value={this.state.name} />
                <input type="number" onChange={this.handelGhange} id="age" value={this.state.age} />
                <input type="submit" value="Add" />
                </form>
             </div>
        )
    }
}
export default AddItems;