new Vue({
    el: '#box',
    data: {
        editNum:-1,
        inputText: '',
        todosData: [],
        toggleAllChange: true,
        todosData: [
            {
                id:1,
                text:'吃饭',
                completed:false,
            },
            {
                id:2,
                text:'吃饭',
                completed:false,
            },
            {
                id:3,
                text:'吃饭',
                completed:false,
            }
        ],
    },
    methods: {}
})