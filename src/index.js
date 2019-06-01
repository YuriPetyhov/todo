import React, { Fragment }   from 'react';
import ReactDOM from 'react-dom';
import Title from './components/header/title';
import SearchPanel from './components/search-panel/search-panel';
import ToDoList from './components/to-do-list/toDo';

 class App extends React.Component {
    state = {
        todoData: [{text: "drink coffe", important: false, id:1},
                   {text: "create awesome App", important: true, id:2},
                   {text: "drink tea", important: false, id:3} ],
        taskValue: null           

        
    }

    OnClickDelete = (id) => {
        let{todoData} = this.state; 
            let newArr = todoData.filter((el) => {
                return el.id !== id
            })
        this.setState(({todoData}) => {
            return {todoData: newArr}
        })

    }

    inputChange = (e) => {
     let{taskValue} = this.state;
    this.setState({
        taskValue: e.target.value
    })
    }
    addItem = () => {
        
        this.setState(({todoData}) => {
            const nextId = todoData.length ?  todoData[todoData.length - 1].id + 1 : 1;
            return {todoData: [...todoData, {text: this.state.taskValue, important: false, id: nextId }]}
         })
    }
    render() {
        let{todoData} = this.state
        return (
             <Fragment>
                 <Title />
                 <SearchPanel /> 
                 <ToDoList inputChangeVal = {this.inputChange} onAdd = {this.addItem} onDeleted={this.OnClickDelete} data={todoData} />   
            </Fragment>
        )
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'))