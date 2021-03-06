import React from 'react';
import './App.css';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { tasksOnScreen } from '../TodoList/TodoList';
import NavBar from '../NavBar/NavBar';
import Detail from '../Detail/Detail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'Task 1', description: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia laboriosam exercitationem necessitatibus, repellat alias inventore neque ducimus. Ex iusto saepe facilis sint rerum amet nam dolores magnam sunt aliquid, eos eius! Quaerat distinctio ut, maiores quo ratione est magnam vel exercitationem dicta enim eligendi dolore perspiciatis, delectus iure expedita?', priority: 'high', assignee: 'agent 1' },
        { title: 'Task 2', description: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia laboriosam exercitationem necessitatibus, repellat alias inventore neque ducimus. Ex iusto saepe facilis sint rerum amet nam dolores magnam sunt aliquid, eos eius! Quaerat distinctio ut, maiores quo ratione est magnam vel exercitationem dicta enim eligendi dolore perspiciatis, delectus iure expedita?', priority: 'low', assignee: 'agent 2' },
        { title: 'Task 3', description: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia laboriosam exercitationem necessitatibus, repellat alias inventore neque ducimus. Ex iusto saepe facilis sint rerum amet nam dolores magnam sunt aliquid, eos eius! Quaerat distinctio ut, maiores quo ratione est magnam vel exercitationem dicta enim eligendi dolore perspiciatis, delectus iure expedita?', priority: 'normal', assignee: 'agent 3' },
        { title: 'Task 4', description: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia laboriosam exercitationem necessitatibus, repellat alias inventore neque ducimus. Ex iusto saepe facilis sint rerum amet nam dolores magnam sunt aliquid, eos eius! Quaerat distinctio ut, maiores quo ratione est magnam vel exercitationem dicta enim eligendi dolore perspiciatis, delectus iure expedita?', priority: 'high', assignee: 'agent 4' },
      ],
      title: '',
      description: '',
      priority: 'high',
      assignee: 'agent 1',
      rangeTop: 9,
      rangeBottom: 0,
      validation: 'form-control',
      byPriority: 'all',
      byAgent: 'all',
      detail: false,
      detailInfo: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.addToRange = this.addToRange.bind(this);
    this.substractToRange = this.substractToRange.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  onChangeValue(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  onAddItem(event) {
    event.preventDefault();
    if (this.state.title.length === 0 || this.state.description.length === 0) {
      this.setState({
        validation: 'form-control border-danger'
      })
    } else if (this.state.title.length > 25 || this.state.description.length > 380){
      this.setState({
        validation: 'form-control border-danger'
      })
    }else {
      this.setState(state => {
        const todos = [...state.todos,
        {
          title: state.title,
          description: state.description,
          priority: state.priority,
          assignee: state.assignee,
        }];

        return {
          todos, validation: 'form-control'
        }
      })
    }
  }

  addToRange(e) {
    e.preventDefault();
    if (tasksOnScreen > this.state.rangeTop) {
      this.setState({
        rangeTop: this.state.rangeTop + 9,
        rangeBottom: this.state.rangeBottom + 9
      })

    } else {
      return false;
    }
  }
  substractToRange(e) {
    e.preventDefault();
    if (this.state.rangeBottom > 0) {
      this.setState({
        rangeTop: this.state.rangeTop - 9,
        rangeBottom: this.state.rangeBottom - 9,
      });
    } else {
      return false;
    }
  }

  onRemoveItem(index, title) {
    this.setState({
      todos: this.state.todos.filter(e => {
        return index !== e.id || title !== e.title;
      })
    })
  }

  showDetail(title, description, assignee, priority) {
    this.setState({
      detail: !this.state.detail,
      detailInfo: { title: title, description: description, assignee: assignee, priority: priority },
    })
  }

  render() {
    return (
      <div>
        <Detail showDetail={this.state.detail} onClick={this.showDetail} info={this.state.detailInfo} />
        <NavBar counter={this.state.todos.length} page={this.state.rangeTop} onChange={this.onChangeValue} onClick2={this.addToRange} onClick3={this.substractToRange}/>
        <div className="general d-block d-sm-flex mt-5 w-100">
          <div className="row w-100 m-0">
            <div className="col-sm mx-3 mx-sm-0 mt-sm-0 pt-sm-0 pt-5 pb-3 pb-sm-0">
              <TodoForm onChange={this.onChangeValue} onClick={this.onAddItem} todos={this.state.todos} counter={this.state.todos.length} inputStyle={this.state.validation} />
            </div>
            <div className="col-sm-8 mb-4 mb-sm-0 mx-3 mx-sm-0">
              <TodoList todos={this.state.todos} onClick={this.onRemoveItem} rangeTop={this.state.rangeTop} rangeBottom={this.state.rangeBottom} byPriority={this.state.byPriority} byAgent={this.state.byAgent} showDetail={this.showDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
