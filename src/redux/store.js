import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                {
                    id: 2, message: "It's my first post", likesCount: 20
                },
                { id: 3, message: "Hi there!", likesCount: 20 },
                { id: 4, message: "Yo!", likesCount: 20 },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Evchen' },
                { id: 2, name: 'Adam' }, { id: 3, name: 'Kain' },
                { id: 4, name: 'Abel' },
                { id: 5, name: 'Lea' },
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How is your day?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Well!' },
                { id: 5, message: 'Fine!' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        // debugger
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, // don't change State

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};




export default store;
window.state = store;