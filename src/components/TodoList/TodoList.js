import React from 'react';
import Todos from '../Todos/Todos';


class TodoList extends React.Component {
    render(){
        return(
            <div className="row">
                {
                    this.props.todos.map(todo =>{
                        return( 
                            <Todos 
                                title={todo.title}
                                description={todo.description}
                                priority={todo.priority}
                                assignee={todo.assignee}
                                key={this.props.todos.indexOf(todo)}
                                onClick={this.props.onClick}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList;