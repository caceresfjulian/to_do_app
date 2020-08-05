import React from 'react';
import Todos from '../Todos/Todos';
let count = 0;
export let tasksOnScreen = 0;

class TodoList extends React.Component {
    showByIndex(todo){
        tasksOnScreen = todo.id + 1;
        if (todo.id < this.props.rangeTop && todo.id >= this.props.rangeBottom){
            return(
                <Todos 
                    title={todo.title}
                    description={todo.description}
                    priority={todo.priority}
                    assignee={todo.assignee}
                    key={this.props.todos.indexOf(todo)}
                    id={todo.id}
                    onClick={this.props.onClick}
                />
            )} else {
                return false 
            }
    }
    showByPriority(todo, displayValue){
        todo.id = this.props.todos.indexOf(todo);
        if (todo.priority === displayValue){
            todo.id = count;
            count += 1;
            return todo 
        } else if (displayValue === 'all') {
            return todo
        } else {
            return false
        } 
    }

    componentDidUpdate(){
        count = 0;
    }

    render(){
        return(
            <div className="row align-items-center h-100 justify-content-center">
                {
                    this.props.todos.map(todo => 
                    this.showByIndex(this.showByPriority(todo, this.props.display))
                    )
                }
            </div>
        )
    }
}

export default TodoList;