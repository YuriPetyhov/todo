 import React from 'react';
 const Control = (props) => {
     return (
         <div>
            <button type='button' className="btn btn-outline-success btn-sm" onClick = {props.onImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
            <button type='button' className="btn btn-outline-danger btn-sm" onClick = {props.onDeleted}>
                    <i className="fa fa-trash-o" ></i>
            </button>
         </div>
     )
 }

 export default Control;