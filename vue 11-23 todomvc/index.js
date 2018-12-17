new Vue({
    el: '#box',
    data: {
        editNum:-1,
        inputText: '',
        todosData: [],
        toggleAllChange: true,
    },
    created:function () {
      //获取用户本地数据
        this.todosData=localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
    },
    updated:function () {
        //保存用户修改过的数据
        localStorage.setItem('todos',JSON.stringify(this.todosData));
    },
    methods: {
        //获取id
        getID: function () {
            // 要获取一个唯一的Id，通过随机数来获取
            var id = Math.random() * 10;

            for (var i = 0; i < this.todosData.length; i++) {
                if (id === this.todosData[i].id) {
                    id = this.getID()
                }
            }

            return id;
        },
        //添加
        add: function () {
            if (!this.inputText) return;//如果输入框为空直接return
            //this.inputText 用户输入的内容
            this.todosData.push({
                id: this.getID(),
                text: this.inputText,
                completed: false,
            });
            this.inputText = '';
        },
        //删除
        del: function (id) {
            for (var i = 0; i < this.todosData.length; i++) {
                if (id === this.todosData[i].id) {
                    this.todosData.splice(i, 1);
                }
            }

        },
        //全选
        toggleAll: function () {
            for (var i = 0; i < this.todosData.length; i++) {
                this.todosData[i].completed = this.toggleAllChange;
            }
            this.toggleAllChange = !this.toggleAllChange;
        },
        //clear completed显示隐藏
        show: function () {
            for (var i = 0; i < this.todosData.length; i++) {
                if (this.todosData[i].completed) {
                    return true;
                }
            }
            return false;
        },
        //清除选中的项
        clearCompleted: function () {
            //arr用来保存未被选中的项
            var arr = [];
            for (var i = 0; i < this.todosData.length; i++) {
                if (!this.todosData[i].completed) {
                    arr.push(this.todosData[i]);
                }
            }
            this.todosData = arr;
        },
        // 编辑状态
        editing:function (id) {
            this.editNum=id;
        },
        //保存修改的内容
        saveEdit:function () {
            this.editNum=-1;
        }
    }
});