import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/*' + props.id;
    return (
        <div className = { s.dialog + " " + s.active }>
            <NavLink to = { path }>{ props.name }</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className = { s.dialogs }>{ props.message }</div>
    );
};
const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Evchen' },
        { id: 2, name: 'Adam' },
        { id: 3, name: 'Kain' },
        { id: 4, name: 'Abel' },
        { id: 5, name: 'Lea' },
    ];
    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How is your day?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Well!' },
        { id: 5, message: 'Fine!' },
    ];


    return (
        <div className = { s.dialogs }>
            <div className = { s.dialogsItems }>
                <DialogItem name = { dialogsData[0].name } id = { dialogsData[0].id } />
                <DialogItem name = { dialogsData[1].name } id = { dialogsData[1].id } />

            </div>
            <div className = { s.messages }>
                <Message message = { messagesData[0].message } />
                <Message message = { messagesData[1].message } />

            </div>
        </div>
    );
};

export default Dialogs;