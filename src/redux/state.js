let state = {

    profilePage : {
        posts: [
            {id: 1, message: "Hi, How are you?", likes: 12},
            {id: 1, message: "It's my first post", likes: 11},
            {id: 1, message: "Bla bla", likes: 1},
            {id: 1, message: "Da da", likes: 10},
        ]
    },

    dialogsPage : {

        dialogsData: [
            {id: 1, name: "Ivan"},
            {id: 2, name: "Ilya"},
            {id: 3, name: "Luda"},
            {id: 4, name: "Evgen"},
            {id: 5, name: "Masha"},
            {id: 6, name: "Ibragim"},
        ],

        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you doing?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ],
    },

    sidebar : {

    }

};

export let addPost = (postMessage) => {

    let newPost = {id: 5, message: postMessage, likes: 11};

    state.profilePage.posts.push(newPost);
}

export default state;
