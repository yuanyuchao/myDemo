var vm = new Vue({
    el:'#box',
    data: {
        editing: -1,
        newBookMassage: {
            name: '',
            author: '',
            price: ''
        },
        bookMassage: {
            name: '',
            author: '',
            price: ''
        },
        bookData: [
            {
                id: 1,
                bookName: '红楼梦',
                bookAuthor: '曹雪芹',
                bookPrice: 35
            },{
                id: 2,
                bookName: '西游记',
                bookAuthor: '吴承恩',
                bookPrice: 28
            },{
                id: 3,
                bookName: '水浒传',
                bookAuthor: '施耐庵',
                bookPrice: 31
            }
        ]
    },
    methods: {
        // 获取ID
        getID: function () {
            // 要获取一个唯一的ID  通过随机数获取
            var id = Math.random() * 10;
            for(var i = 0; i < this.bookData.length; i++){
                if(id === this.bookData[i].id){
                    id = this.getID();
                }
            }
            return id;
        },
//            添加书籍
        addBook: function () {
            if(this.bookMassage.name == '' || this.bookMassage.author == '' || this.bookMassage.price == ''){
                alert('请输入完整的内容');
                return;
            }
            this.bookData.push({
                id: this.getID(),
                bookName: this.bookMassage.name,
                bookAuthor: this.bookMassage.author,
                bookPrice: this.bookMassage.price - 0
            });

            this.bookMassage.name = '';
            this.bookMassage.author = '';
            this.bookMassage.price = '';
        },
//            删除
        delBook: function (id) {
            for(var i = 0; i < this.bookData.length; i++){
                if(id === this.bookData[i].id){
                    this.bookData.splice(i,1);
                }
            }
        },
        // 计算价格
        totalPrice: function () {
            var price = 0;
            for(var i = 0; i < this.bookData.length; i++){
                price += this.bookData[i].bookPrice - 0;
            }
            return price;
        },
        // 模态框获取数据
        getBookMassage: function (id) {
            for(var i = 0; i < this.bookData.length; i++){
                if(id === this.bookData[i].id){
                    this.newBookMassage.name = this.bookData[i].bookName;
                    this.newBookMassage.author = this.bookData[i].bookAuthor;
                    this.newBookMassage.price = this.bookData[i].bookPrice;
                    this.editing = i;
                }
            }
        },
        // 保存编辑内容
        saveEditing: function () {
            this.bookData[this.editing].bookName = this.newBookMassage.name;
            this.bookData[this.editing].bookAuthor = this.newBookMassage.author;
            this.bookData[this.editing].bookPrice = this.newBookMassage.price;
        }
    }
})