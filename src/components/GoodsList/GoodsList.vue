<template>
<transition 
 	name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight">	
	<div id='goodslist'>
		<div class="top">
			<div class="navtit">
				<span @click='back'>	<Icon type="chevron-left" class='back' ></Icon></span>
				<span class="tit">潮鞋潮服</span>
			</div>
			
			<div class="select">
				<div class="se_item">
					<span type="primary" @click="modal1 = true">默认</span>
					<Modal class='modal1'
						:transition-names="tranName"
				        v-model="modal1"
				        title=""
				        :closable='close'
				        @on-ok="ok"
				        @on-cancel="cancel">
				        <ul class="item">
				        	<li>默认排序 <Icon type="checkmark-round"></Icon></li>
				        	<li>价格从低到高</li>
				        	<li>价格从高到底</li>
				        	<li>折扣从高到低</li>
				        </ul>
				      
				    </Modal>
				</div>
				<div class="se_item">
						<span type="primary" @click="modal2 = true">官网</span>
						<Modal class='modal1'
							:transition-names="tranName"
					        v-model="modal2"
					        title=""
					        :closable='close'
					        @on-ok="ok"
					        @on-cancel="cancel">
					        <ul class="item">
					        	<li>NIKE 官网</li>
					        	<li>ADIDAS 官网</li>
					        	<li>MANGO 官网</li>
					        	<li>CALVIN KLEIN 官网</li>
					        	<li>GUCCE 官网</li>
					        </ul>
					      
					    </Modal>
				</div>
				<div class="se_item">
						<span type="primary" @click="modal3 = true">品牌</span>
						<Modal class='modal1'
							:transition-names="tranName"
					        v-model="modal3"
					        title=""
					        :closable='close'
					        @on-ok="ok"
					        @on-cancel="cancel">
					        <ul class="item">
					        	<li>NIKE </li>
					        	<li>ADIDAS </li>
					        	<li>MANGO </li>
					        	<li>CALVIN KLEIN </li>
					        	<li>GUCCE </li>
					        </ul>
					      
					    </Modal>
				</div>
				<div class="se_item">
						<span type="primary" @click="modal4 = true">价格</span>
						<Modal class='modal1'
							:transition-names="tranName"
					        v-model="modal4"
					        title=""
					        :closable='close'
					        @on-ok="ok"
					        @on-cancel="cancel">
					        <ul class="item">
					        	<li>默认排序 </li>
					        	<li>0-100元 </li>
					        	<li>100元-500元 </li>
					        	<li>500元-1000元 </li>
					        	<li>1000元-1500元 </li>
					        	<li>1500元-2000元 </li>
					        	<li>2000元以上 </li>
					        </ul>
					      
					    </Modal>		
				</div>
			</div>
		</div>	
		<div class="goods">
			<div class="data">
				<div>		
			    		<Row type='flex' :gutter='margin' justify="center" >
					        <Col span="12" >
					        	<Row>
					        		<Col span='24' class='list animated' v-if='index % 2 != 0' v-for='(item,index) in goodsData' :key='item.id'>
					        			<img :src="goodsData[index].src" alt="">
							        	<div class="decbox" @click='openDetail'>		        	
								        	<p class="des">{{goodsData[index].tit}}</p>
								        	<p class="price"><span class="cur">￥{{goodsData[index].curPrice}}</span><span class="old">￥{{goodsData[index].oldPrice}}</span></p>
								        	<p class="address">发货方：{{goodsData[index].shopName}}</p>
							        	</div>
					        		</Col>
					  
					        	</Row>
					        	
					        </Col>
					        <Col span="12" >
					        	<Row>
					        		<Col span='24' class='list animated' v-if='index % 2 == 0' v-for='(item,index) in goodsData' :key='item.id'>
					        			<img :src="goodsData[index].src" alt="">
							        	<div class="decbox" @click='openDetail'>		        	
								        	<p class="des">{{goodsData[index].tit}}</p>
								        	<p class="price"><span class="cur">￥{{goodsData[index].curPrice}}</span><span class="old">￥{{goodsData[index].oldPrice}}</span></p>
								        	<p class="address">发货方：{{goodsData[index].shopName}}</p>
							        	</div>
					        		</Col>
					        		

					        	</Row>
					        	
					        </Col>		       
		        		</Row>
		        </div>
		    </div>
		</div>
		<div v-show='favor' class="favor animated fadeInUp">
			<Icon class='item' type="ios-star"></Icon>
			<Icon class='item' type="ios-heart"></Icon>
			<Icon class='item' type="android-cart"></Icon>

		</div>
	</div>
</transition>	
</template>

<script>
import Bottom from '../Bottom/Bottom'
import BScroll from 'better-scroll'
	export default{
		name:'goodslist',
		components:{
		'foot':Bottom
		},
		data(){
			return {
				tranName:['linear', 'fade'],
				modal1: false,
				modal2:false,
				modal3:false,
				modal4:false,
				close:false,
				margin:6,
				favor:false,
				goodsData:[{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i4/1089858056/TB2hKkcbbH9F1JjSZFAXXba3VXa_!!1089858056.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i4/1089858056/TB2hKkcbbH9F1JjSZFAXXba3VXa_!!1089858056.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i4/1089858056/TB2hKkcbbH9F1JjSZFAXXba3VXa_!!1089858056.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				},{
					id:'2424',
					src:'https://img.alicdn.com/imgextra/i4/1089858056/TB2hKkcbbH9F1JjSZFAXXba3VXa_!!1089858056.jpg',
					tit:'BOY LONDON纯棉卫衣',
					curPrice:'999.00',
					oldPrice:'1000.00',
					shopName:'美国亚马逊'
				}]
			}
		},
		created:function(){
			
			

		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			openDetail(){
				this.$router.push({path:'/GoodsList/GoodsDetail'})
			},
			ok () {
                
            },
            cancel () {
                
            }
		},
		mounted:function(){
			var scroll;
			var that=this
			setTimeout(()=>{
				that.scroll=new BScroll(document.querySelector('.data'), {
	                click:true,
	                bounceTime:300,             
	              })
				that.scroll.on('scrollStart',function(){
					if(that.favor){
						that.favor=false
					}
				})
				
			},200)
			
			
			touch.on('.list','hold',function(){
				if(that.favor){
					that.favor=false
				}else{
					that.favor=true
				}
					
			})

			for(var i=0;i<$('.list').length;i++){
				$('.list').eq(i).addClass('fadeInUp')		
			}	

			
			
			
			

		
		

	}
	}
</script>
<style>
	#goodslist  .ivu-select-dropdown{
		margin:10px 0;
	}
	#goodslist .ivu-dropdown-item{
		font-size:14px !important
	}
	.modal1 .ivu-modal{
		margin:0;
		top: 85px
	}
    .modal1 .ivu-modal-mask{
		top: 85px
	}
	.modal1 .ivu-modal-content{
		border-radius: 0
	}
	.modal1 .ivu-modal-body{
		padding: 0
	}
	.modal1 .ivu-modal-body .item li{
		height: 40px;
		padding:0 16px;
		line-height:  40px;
		font-size: 14px;
		border-bottom: 1px solid #dedede
	}
	.modal1 .ivu-modal-footer{
		padding: 0;
		text-align: left;
	}
	.modal1 .ivu-modal-footer button{
		width:50%;
		margin-left:0;
		border-radius: 0;
		padding: 10px 0;
		float: left;
		background: #fff
		
	}
	.modal1 .ivu-modal-footer button + button{
		margin-left: 0;
		width:50%;
		background:  #333
	}
	

	
</style>
<style scoped lang="stylus">
@import "../../common/index.styl"
.top
	position fixed
	width 100%
	z-index 100
.navtit
	height 50px
	line-height 50px
	text-align center
	border-bottom 1px solid #ccc
	width 100%
	background #fff
	.tit
		font-size 17px
	.back
		position absolute
		left 10px
		font-size 20px
		top 15px
.select
	z-index 99
	height 35px
	line-height 15px
	padding 10px 0
	display flex
	border-bottom 1px solid #ccc
	width 100%
	background #fff
	.se_item
		flex 1
		font-size 15px
		border-right 1px solid #dedede

.goods
	
	width 100%
	.data
		position absolute
		top 85px
		left 0
		right 0
		bottom 0
		height 100%
		overflow hidden
		background #EAEAEA
	.list
		margin-bottom 6px
		background #fff
		margin-bottom 6px
		img
			max-width 100%
	.decbox
		background #fff
		padding 5px

	.des
		font-size 15px
		font-weight bold
		text-align left
	.price
		height 40px
		line-height 40px
		text-align left
		.cur
			color #d43737
			font-size 18px
			font-weight bold
			margin-right 10px
		.old
			text-decoration line-through
			font-size 14px
	.address
		text-align left
		color #ccc
		font-size 12px
.favor
	height 50px
	line-height 50px
	position fixed
	display flex
	bottom 0
	background #fff
	width 100%
	border-top 1px solid #eee
	.item
		flex 1
		font-size 30px
		margin-top 10px		


</style>
