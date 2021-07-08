const vm=new Vue({
			el:'#app',
			data:{
				books:[
					{
						id:1,
						name:'HTML5权威指南',
						time:'2014-01-01',
						price:129.00,
						count:1
					},
					{
						id:2,
						name:'CSS权威指南（第四版）',
						time:'2019-05-01',
						price:198.00,
						count:1
					},
					{
						id:3,
						name:'CSS速查手册（第五版）',
						time:'2019-10-01',
						price:58.00,
						count:1
					},
					{
						id:4,
						name:'JavaScript权威指南（第七版）',
						time:'2021-04-01',
						price:139.00,
						count:1
					},
					{
						id:5,
						name:'JavaScript高级程序设计（第四版）',
						time:'2020-09-01',
						price:129.00,
						count:1
					},
					{
						id:6,
						name:'你不知道的JavaScript（上、中、下）',
						time:'2019-06-01',
						price:207.00,
						count:1
					},
					{
						id:7,
						name:'JavaScript DOM编程艺术（第二版）',
						time:'2020-12-01',
						price:69.00,
						count:1
					},
					{
						id:8,
						name:'深入浅出Vue.js',
						time:'2019-03-01',
						price:79.00,
						count:1
					},
					{
						id:9,
						name:'Vue.js权威指南',
						time:'2016-09-01',
						price:99.00,
						count:1
					},
					{
						id:10,
						name:'React学习手册（第二版）',
						time:'2021-06-01',
						price:98.00,
						count:1
					},
					{
						id:11,
						name:'深入浅出Node.js',
						time:'2013-12-01',
						price:69.00,
						count:1
					},
					{
						id:12,
						name:'Http权威指南',
						time:'2012-09-01',
						price:149.8,
						count:1
					}
				],
				page:1
			},
			methods:{
				 subtract(index){
					 this.books[index].count--
				 },
				 add(index){
					 this.books[index].count++
				 },
				 removeBook(index){
					 this.books.splice(index,1)
					 console.log(this.books)
				 }
			},
			filters:{
				translate(price){
					return '￥'+price.toFixed(2)
				}
			},
			computed:{
				sumPrice(){
					let sum=0;
					for(let item of this.books){
						sum+=item.price*item.count
					}
					return sum
				}
			}
		})
