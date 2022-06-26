import React from 'react'
import './App.css'

class ToDoList extends React.Component {
constructor() {
    super();
    const date = new Date();
    const toDoCounter = 1;
    this.state = {
    list: [
        {
        id: toDoCounter,
        createdAt: date,
        }, 
    ],
    toDoCounter: toDoCounter,
    };
}
addToEnd() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
        ...this.state.list,
        {id: nextId, createdAt: date},
    ];
    this.setState({
        list: newList,
        toDoCounter: nextId,
    });
    }
    addToStart() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
        {id: nextId, createdAt: date},
        ...this.state.list,
    ];
    this.setState({
        list: newList,
        toDoCounter: nextId,
    });
    }
render() {
    return (
    <div className='App'>
        <h1><code>key=id</code></h1>
        <br />
        <button onClick={this.addToStart.bind(this)}>
        Add New to Start
        </button>
        <button onClick={this.addToEnd.bind(this)}>
        Add New to End
        </button>

        <table>
        <tr>
            <th>ID</th>
            <th />
            <th>created at</th>
        </tr>
        {this.state.list.map((todo) => (
            <ToDo key={todo.id} {...todo} />
        ))}
        </table>
    </div>
    );
}
}


export default ToDoList;


const ToDo = (props) => (
<tr>
    <td>
    <label>{props.id}</label>
    </td>
    <td>
    <input />
    </td>
    <td>
    <label>{props.createdAt.toTimeString()}</label>
    </td>
</tr>
);