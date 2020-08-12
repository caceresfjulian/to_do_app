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
                    showDetail={this.props.showDetail}
                />
            )} else {
                return false 
            }
    }
    showByPriority(todo, displayValue){
        if (todo){
        if (todo.priority === displayValue){
            return todo 
        } else if (displayValue === 'all') {
            return todo
        } else {
            return false
        } 
        }else{
            return false
        }        
    }

    showByAgent(todo, agentValue){
        if (todo){
            todo.id = this.props.todos.indexOf(todo);
            if ( agentValue === 'all'){
                todo.id = count;
                count += 1;
                return todo
            } else if ( todo.assignee === agentValue ){
                todo.id = count;
                count += 1;
                return todo
            } else {
                return false
            }
        } else {
            return false
        }       
    }

    componentDidUpdate(){
        count = 0;
    }

    componentDidMount(){
        count = 0;
    }

    render(){
        return(
            <div className="row align-items-center h-100 justify-content-center mr-sm-1 mr-md-0">
                {
                    this.props.todos.map(todo => 
                    this.showByIndex(this.showByAgent(this.showByPriority(todo, this.props.byPriority), this.props.byAgent))
                    )
                }
            </div>
        )
    }
}

export default TodoList;