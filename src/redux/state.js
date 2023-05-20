import { rerenderEntireTree } from '../render';

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;