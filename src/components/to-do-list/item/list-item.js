import React from 'react';
import style from './item.module.scss';
import Control from '../../list-control/list-control';

class ToDoItem extends React.Component {
    state = {
        done: false,
        important: false 
    }

    onClickDone = () => {
        this.setState(prevState => ({
            done: !prevState.done
        }));
    }

    OnClickImportant = () => { 
        this.setState(prevState => ({
            important: !prevState.important
        }));
    }
 

    render() {
        const{text, onDeleted, id} = this.props; 
        const{done, important} = this.state;
        return (
            <span>
                <span className = {`${important ? style.item : null} 
                                  ${done ? style.done : null  }`} 
                    onClick={this.onClickDone} > 
                    {text} 
                </span>
               <Control onDeleted={onDeleted} onImportant={this.OnClickImportant}/> 
            </span>
        )
    }
}

export default ToDoItem 