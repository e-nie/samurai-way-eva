import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {

        const onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
        };

        const onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
        };
        return <Dialogs updateNewMessageBody = { onNewMessageChange }
                        sendMessage = { onSendMessageClick }
                        dialogsPage = { store.getState().dialogsPage } />;
    } }
    </StoreContext.Consumer>;
};

export default DialogsContainer;