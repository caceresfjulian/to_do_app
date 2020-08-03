import React from 'react';
import Todos from '../Todos/Todos';

class TodoList extends React.Component {
    render(){
        return(
            <div className="row align-items-center h-100">
                {
                    this.props.todos.map(todo => {
                        if (this.props.todos.indexOf(todo) < this.props.rangeTop && this.props.todos.indexOf(todo) >= this.props.rangeBottom){    
                        return(
                            <Todos 
                                title={todo.title}
                                description={todo.description}
                                priority={todo.priority}
                                assignee={todo.assignee}
                                key={this.props.todos.indexOf(todo)}
                                id={this.props.todos.indexOf(todo)}
                                onClick={this.props.onClick}
                            />
                        )} else {
                            return false 
                        }
                    })
                }
            </div>
        )
    }
}

export default TodoList;