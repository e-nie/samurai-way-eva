const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        // debugger
        return this._state;
    },
    subscribe(observer) {
        this._calSubscriber = observer;
    }, // don't change State

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._calSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._calSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default store;
window.state = store;