import React, {Component} from 'react'
import FormComponent from './FormComponent'  //Acceso al Formulario 
import TodoItem from './TodoItem'   //Acceso al Proyecto TODO's
import TodosData from './TodosData' //Acceso al Proyecto TODO's

//***Descomentar lo comentatdo para el Proyecto de TODO's */
//** Y comentar el resto: constructor() y handleChange(event)  */
class Form extends Component {

/*state={
    todos: TodosData
}  

handleChange = (id) => {
  this.setState(prev => {
    const updateTodos = prev.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    return {
      todos: updateTodos
    } 
  })
}
*/
constructor() {
    super()
    this.state= {      
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
      this.setState({
         [name]: checked 
      })   
    :
    this.setState({      
      [name]: value
    })
  }

  //***Descomentar la constante y el <div className="todo-li" > para el Proyecto de TODO's */
  //** Y comentar el resto: <FormComponent .../>  */
  render(){
    //const todoItems = this.state.todos.map(item => <TodoItem key={item.id} 
    //  item={item} handleChange={this.handleChange}/>)
   return(
   /* <div className="todo-li" >
      {todoItems}
    </div>*/
        <FormComponent
            handleChange={this.handleChange}
            data={this.state}
        />
    )
}
}

export default Form 