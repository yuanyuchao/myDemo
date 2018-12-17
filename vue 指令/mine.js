var vm = new Vue({
    el: '#box',
    data: {
        editing: '',
        newBookMessage: {
            name: '',
            author: '',
            price: ''
        },
        bookMessage: {
            name: '',
            author: '',
            price: ''
        },
        bookData: [
            {
                id: 1,
                bookName: '红楼梦',
                bookAuthor: '曹雪芹',
                bookPrice: 30
            },
            {
                id: 2,
                bookName: '西游记',
                bookAuthor: '吴承恩',
                bookPrice: 35
            },
            {
                id: 3,
                bookName: '水浒传',
                bookAuthor: '施耐庵',
                bookPrice: 33
            },
            {
                id: 4,
                bookName: '三国',
                bookAuthor: '罗贯中',
                bookPrice: 38
            }
        ]
    },
    methods: {
        // 获取ID
        getID: function () {
            // 要获取一个唯一的ID  通过随机数获取
            var id = Math.random() * 10;

            for (var i = 0; i < this.bookData.length; i++) {
                if (id === this.bookData[i].id) {
                    id = this.getID();
                }
            }
            console.log(id)
            return id;

        },
        //添加书籍

        addBook: function (e) {
            // if (e.keyCode == 13) {
            //     e.preventDefault();
            // }
            e.keyCode == 13 ? e.preventDefault():'';

            if (this.bookMessage.name == '' || this.bookMessage.author == '' || this.bookMessage.price == '') {
                alert('请输入完整内容')
                return;
            }
            this.bookData.push({
                id: this.getID(),
                bookName: this.bookMessage.name,
                bookAuthor: this.bookMessage.author,
                bookPrice: this.bookMessage.price,
            })
            this.bookMessage.name = '',
                this.bookMessage.author = '',
                this.bookMessage.price = ''
            console.log(this.bookData)
        },

        // 删除
        delBook: function (id) {
            for (var i = 0; i < this.bookData.length; i++) {
                if (id === this.bookData[i].id) {
                    this.bookData.splice(i, 1);
                }
            }
        },
        //计算总价格
        totalPrice: function () {
            var price = 0;
            for (var i = 0; i < this.bookData.length; i++) {
                price += this.bookData[i].bookPrice - 0;
            }
            return price;
        },
        // 模态框获取信息
        getBookMessage: function (id) {
            for (var i = 0; i < this.bookData.length; i++) {
                if (id === this.bookData[i].id) {
                    this.newBookMessage.name = this.bookData[i].bookName;
                    this.newBookMessage.author = this.bookData[i].bookAuthor;
                    this.newBookMessage.price = this.bookData[i].bookPrice;
                    this.editing = i;
                    console.log(i)
                }

            }
        },
        //保存修改编辑内容
        saveEditing: function () {
            this.bookData[this.editing].bookName = this.newBookMessage.name;
            this.bookData[this.editing].bookAuthor = this.newBookMessage.author;
            this.bookData[this.editing].bookPrice = this.newBookMessage.price;
        }

    },
})

//虽然有很多个删除和编辑，但每一个删除和编辑都有唯一的ID来区分！！！！