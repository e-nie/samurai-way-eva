import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name = { d.name } key={d.id} id = { d.id } />);
    let messagesElements = state.messages.map(m => <Message id = { m.id } key={m.id} message = { m.message } />);
    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className = { s.dialogs }>
            <div className = { s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className = { s.messages }>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value = { newMessageBody }
                                   onChange = { onNewMessageChange }
                                   placeholder = 'Enter your message'></textarea></div>
                    <div>
                        <button onClick = { onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;