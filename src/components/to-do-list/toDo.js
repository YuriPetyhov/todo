import React from 'react';
import ToDoItem from './item/list-item';
import style from './toDo.module.scss';

const ToDoList = ({data, onDeleted, onAdd, inputChangeVal}) => {
    return <React.Fragment>
                <ul className='list-group'>
                    {data.map((item) => {
                        const{id, ...rest} = item;
                        return (
                                <li key={id} className={`list-group-item ${style.listitem}`}> 
                                    <ToDoItem  data={data}  
                                    onDeleted={() => onDeleted(id)}
                                    {...rest}   /> 
                                </li>
                            )
                        })}
                </ul>
            <input onChange={inputChangeVal} type="text" placeholder='добавить задачу'  />
            <button onClick={onAdd}> добавить </button>            
        </React.Fragment>
}
 
export default ToDoList;