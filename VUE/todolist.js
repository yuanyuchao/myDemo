let vm = new Vue({
    el:`#app`,
    data :{
        title:'',
        cur:'',
        todos:[],
        hash:'',
    },
    created(){
        console.log(!this.todos.length);
        console.log(this.todos.length);
        this.todos = JSON.parse(localStorage.getItem('data'))||this.todos;
        this.hash = window.location.hash.slice(2)||'all';
        window.addEventListener('hashchange',()=>{
           this.hash =  this.hash = window.location.hash.slice(2)||'all';
        })
    },
    watch:{
    },
    updated(){
        localStorage.setItem('data',JSON.stringify(this.todos));
    },

    computed:{
      count(){
          return this.todos.filter(item=>!item.isSelected).length;
      },
        filterTodos(){
          if(this.hash=='all'){
              return this.todos;
          }
          if(this.hash=='finish'){
              return this.todos.filter(item=>item.isSelected);
          }
          if(this.hash=='unfinish'){
              return this.todos.filter(item=>!item.isSelected)
          };
              return this.todos;
        },

    },

    methods:{
       add(){
           if(this.title){
               this.todos.push({
                   isSelected:false,
                   title:this.title,
               });
           }else{
              return;
           }
           this.title = '';
          },
        remove(todo){
               this.todos = this.todos.filter(item=>item!==todo);
        },

        remember(todo){
            console.log(todo);
            this.cur = todo;
            console.log(this.cur);
        },
        cancel(){
           this.cur = '';
        },


    },
    directives:{
        focus(el){
            el.focus();
        },
    }
})