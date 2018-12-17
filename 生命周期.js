
//使用该组件就会触发钩子函数

var Test = {
    template:'<div>我是test组件{{msg}}<button @click="msg = msg+1">更新</button></div>',
    data:function () {
        return {
            msg:'hello world',
        }
    },

    beforeCreate:function () {//这里不能操作数据，只是初始化了事件等
        console.log('beforeCreate:'+document.body.innerHTML);
        console.log('beforeCreate:'+this.$el);
        console.log('beforeCreate:'+this.$data);
    },
    created:function () {//created可以操作数据，可以实现vue--->页面的影响，比如在这里可以发起ajax请求。
        console.log('created:'+document.body.innerHTML);
        console.log('created:'+this.$el);
        console.log('created:'+this.$data);//data数据已生成
    },

    beforeMount:function () {//只有原dom，<div id="app"></div>。vue启动前的dom；
        console.log('beforeMount:'+document.body.innerHTML);
        console.log('beforeMount:'+this.$el);
    },
    mounted:function () {//挂载之后就是vue作用以后的dom。只执行一次。这里才能首次获取到dom；
        console.log('mounted:'+document.body.innerHTML);
        console.log('mounted:'+this.$el);//已挂载
    },
    // //beforeUpdate和updated基于数据改变影响页面才会触发。
    // //beforeUpdate可以获取原dom
    // //updated可以获取更新后的dom
    // beforeUpdate:function () {
    //     console.log(document.body.innerHTML);
    // },
    // updated:function () {
    //     console.log(document.body.innerHTML);
    // },

    //对应父组件，v-if=false 就销毁当前组件
    // beforeDestroy:function () {//最终都是做一些其他功能的释放，比如：讲数据保存到本地。
    //     console.log('beforeDestroy');
    //     console.log(this.msg);
    // },
    // destroyed:function () {
    //     console.log('destroyed');
    //     console.log(this.msg);
    // },
    // activated:function () {
    //     console.log('组件被激活了');
    // },
    // deactivated:function () {
    //     console.log('组件被停用了')
    // },
    //created和activated都是v-if=true子组件的状态
    //不同点，created没有被keep-alive标签包裹，而activated被包裹了
}
var App = {
    components:{
        test:Test,
    },
    data:function () {
        return {
            isExist:true,
        }
    },
    //keep-alive只能和v-if配合使用
    template:`<div>

<test v-if="isExist"></test>


<button @click="isExist = !isExist">事关组件生死</button></div>`,


};
new Vue({
    el:'#app',
    components:{
        app:App,
    },
    template:'<app/>',
    beforeMount:function () {//只有原dom，<div id="app"></div>。vue启动前的dom；
        console.log('beforeMount:'+document.body.innerHTML);
        console.log('beforeMount:'+this.$el);//标签元素未生成
    },
});

