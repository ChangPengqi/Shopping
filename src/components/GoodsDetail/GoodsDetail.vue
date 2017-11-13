<template>
	<div id='GoodsDetail'>
		<div class="top">
			<div class="navtit">
				<span @click='back'>	<Icon type="chevron-left" class='back' ></Icon></span>
				<span class="tit">Alexander Wang/亚历山大·王</span>
				<Icon type="android-cart" class='buy'></Icon>
			</div>
		</div>
		<div class="contentBox">
			<div>
				<div class="carouse">
					<div id="owl-product" class="owl-carousel">
						<p class="item"><img src="./1.jpg" alt=""></p>
						<p class="item"><img src="./2.jpg" alt=""></p>
						<p class="item"><img src="./3.jpg" alt=""></p>
						<p class="item"><img src="./4.jpg" alt=""></p>	
					</div>
				</div>
				<div class="main">
					<div class="topbox">
						<h3 class="tit animated fadeIn">Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS</h3>
						<p class="price animated fadeIn"><span class="cur">￥2499.00</span><span class="old">￥3000.00</span></p>
						<p class="address">
							<img src="./icon6.jpg" alt="" width="20">
							<span>美国亚马逊发货</span>
							<a href="">商品直达链接<Icon style='margin-left:10px' type="chevron-right"></Icon></a>
						</p>
						
					</div>
					<div class="center">
						<h3 class="tit">商品参数</h3>
						<Row class='list'>
							<div class="item">
								<Col span='6'>
									名称：
								</Col>
								<Col span='18'>
									Alexander Wang/亚历山大·王
								</Col>
							</div>
							<div class="item">
								<Col span='6'>
									款式：
								</Col>
								<Col span='18'>
									女式连衣裙
								</Col>
							</div>
							<div class="item">
								<Col span='6'>
									商品编号：
								</Col>
								<Col span='18'>
									20170819
								</Col>
							</div>
							<div class="item">
								<Col span='6'>
									毛重：
								</Col>
								<Col span='18'>
									114g
								</Col>
							</div>
							<div class="item">
								<Col span='6'>
									货号：
								</Col>
								<Col span='18'>
									Q00701900
								</Col>
							</div>
							<div class="item">
								<Col span='24'>
									<Icon type="ios-pricetag"></Icon> Sleeveless panelled cotton poplin dress in black.</br>
								    <Icon type="ios-pricetag"></Icon> Adjustable shoulder straps. V-neck collar. </br>
								    <Icon type="ios-pricetag"></Icon> Flared skirt. Zip closure at back. Tonal stitching.
								</Col>
							</div>

						</Row>
						<h3 class="tit tit2">品牌简介</h3>
						<Row>
							<Col span='8'>
								<img src="https://p1.ssl.qhmsg.com/dr/270_500_/t01e54762ec772d0dcf.jpg?size=268x350" alt="">
							</Col>
							<Col span='16'>
								<p>亚历山大·王 (Alexander Wang) 是出生在旧金山的华裔，18岁时搬去纽约，并在著名的Parsons学院攻读设计专业，亚历山大·王二年级时就在 Marc Jacobs 和 Vogue 实习。亚历山大·王(Alexander Wang) (中文名王大仁)是纽约最红最年轻的华裔设计师，</p>
							</Col>
						</Row>

					</div>
					<div class="bot">
						<h3 class="tit">
							——猜你喜欢——
						</h3>
						<div class="recomand">
						    <div class="list" style='height:230px'>
						    	<div class="data2" >
						    		<div class="wrap">
								    	<div style='display:flex'>
								    		<div  v-for='list in recomand' class="listItem" style='flex:1'>
								    			<img :src='list.src' alt="">
								    			<p class="tit">{{list.des}}</p>
								    			<p class="price">￥{{list.price}}</p>
								    		</div>						    		
								    	</div>
							    	</div>
						    	</div>
						    </div>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<div class="buybottom">
			<Row>
				<Col span='4'>
					<div @click='openCart'>
						<Icon style='font-size:30px' type="android-cart"></Icon>
						 <Badge :count="cartNum" style='top:12px;position:absolute'>
					        <a href="#" class="demo-badge"></a>
					    </Badge>
				    </div>
				</Col>
				<Col span='10'><p class="addCar" @click="addCart">加入购物车</p></Col>
				<Col span='10'><p class="buyIt" @click="buyIt">立即购买</p>
				<!--:styles="{top: '20px'}"  -->
					<Modal class='modebuy'
					  	ok-text='直接购买'
					  	cancel-text=''
				        v-model="modal"
				        @on-ok='toBuy'
				        >
				        <div class="content">
				        	<div class="tit" >
				        		<Row>
				        			<Col span='6'>
				        				<img src="./5.jpg" alt="" width='80'>
				        			</Col>
				        			<Col span='16'>
				        				<div class="t_right">
							        		<p>Alexander Wang/亚历山大·王 连衣裙 </p>
							        		<p class="price"><span class="cur">￥2499.00</span><span class="old">￥3000.00</span></p>
						        		</div>
				        			</Col>
				        		</Row>
				       	
				        		
				        	</div>
				        	<div class="size">
				        		<div>
				        			<p>颜色</p>
				        			<Row>
				        				<Col span='5' v-for='(item,index) in colors' :key='index'>
				        				<Button :type="BtnType" @click='changeBtn1(index)' :class="[item.isactive?'active':'']" >{{item.color}}</Button></Col>
				        			</Row>
				        		</div>
				        		<div>
				        			<p>尺寸</p>
				        			<Row>
				        				<Col span='4' v-for='(item,index) in sizes' :key='index'>
				        				<Button :type="BtnType" @click='changeBtn2(index)' :class="[item.isactive?'active':'']">{{item.size}} </Button></Col>			
				        			</Row>
				        		</div>
				        		
				        	</div>
				        	<div class="num">
				        		
				        			<Row>
				        				<Col span='4' >数量</Col>
				        				<Col span='10'  offset="10">
				        					<Row class='operate'>
				        						<Col span='8'>
				        						<Button type="primary"icon="ios-minus-empty" @click='minus'></Button>
				        						</Col>
				        						<Col span='8'><Input v-model="value" ></Input></Col>
				        						<Col span='8'  >
				        						<Button type="primary"icon="ios-plus-empty" @click='plus'></Button>
				        						</Col>
				        					</Row>
				        				</Col>
				        				
				        			</Row>
				        	</div>
				        </div>
				    </Modal>
				</Col>
			</Row>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
	export default{
		name:'',
		data(){
			return {
				modal:false,
				BtnType:"ghost",
				cartNum:1,
				colors:[
				{color:'Red',isactive:false},
				{color:'Blue',isactive:false},
				{color:'Black',isactive:false},
				{color:'Pink',isactive:false}
				],
				sizes:[
				{size:'S',isactive:false},
				{size:'M',isactive:false},
				{size:'L',isactive:false},
				{size:'XL',isactive:false},
				{size:'XXL',isactive:false}
				],
				value:0,
				recomand:[{
						id:'01',
						src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'999.00'
					},{
						id:'02',
						src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'1999.00'
					},{
						id:'03',
						src:'https://img14.360buyimg.com/n1/jfs/t5668/155/6893309048/148019/bfa2a982/596d91b1N40b7957c.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'3999.00'
					},{
						id:'04',
						src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'999.00'
					},{
						id:'05',
						src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'2999.00'
					},{
						id:'06',
						src:'https://img14.360buyimg.com/n1/jfs/t5668/155/6893309048/148019/bfa2a982/596d91b1N40b7957c.jpg',
						des:'Embroidered relaxed Jeans 2017秋季款',
						price:'1999.00'
				}],
			}
		},
		created:function(){
			
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			openCart(){
				this.$router.push({path:'/Cart'})
			},
			addCart(){
				this.cartNum++
				this.$Message.success('添加购物车成功');
			},
			buyIt(){
				this.modal=true;
				var w_h=$(window).height()				
				setTimeout(()=>{
					var h=$('.modebuy .ivu-modal').height()					
					$('.modebuy .ivu-modal').css('top',(w_h-h-22))
				},100)
				
			},
			toBuy(){
				this.$router.push({path:'/OrderCheck'})
			},
			changeBtn1(index){
				for(var i=0;i<this.colors.length;i++){
					this.colors[i].isactive=false	
				}
				this.colors[index].isactive=!this.colors[index].isactive	
			},
			changeBtn2(index){
				for(var i=0;i<this.sizes.length;i++){
					this.sizes[i].isactive=false	
				}
				this.sizes[index].isactive=!this.sizes[index].isactive	
			},
			minus(){
				if(this.value<=0){
					this.value==0
				}else{
					this.value-=1
				}
			},
			plus(){
				this.value+=1
			},
		},
		mounted:function(){
			$('.wrap').width($(window).width()/3*this.recomand.length)
			
			setTimeout(()=>{
				var scrollbox=new BScroll(document.querySelector('.contentBox'), {
                click:true,
                bounceTime:300,
              })
			},2000)
			
			var scrollfavor=new BScroll(document.querySelector('.data2'), {
                click:true,
                bounceTime:300,
                scrollX:true,
                scrollY:false,
                eventPassthrough: 'vertical'
              })
			
			
			$('#owl-product').owlCarousel({
				items: 1
			});

		}
	}
</script>
<style>
	#owl-product {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
	}
	#owl-product .item {
	    display: block;
	}
	#owl-product img {
	    display: block;
	    margin: 0 10%;
	    max-width: 80%;
	}
	.buybottom .ivu-badge-count{
		background: #ed3f14
	}
	
	.owl-theme .owl-controls .owl-page span{
		width:8px;
		height: 8px;
		background: #333
	}
	.modebuy .ivu-modal{
		margin:0;
		
		
	}
	.modebuy .ivu-modal-mask{
		top:0;
	}
	.modebuy .ivu-modal-content{
		width: 100%;
		border-radius: 0;
		
	}
	.modebuy .ivu-modal-footer{
		padding: 0
	}
	.modebuy .ivu-modal-footer button{
		display: none
	}
	.modebuy .ivu-modal-footer button + button{
		width:100%;
		display: block;
		padding:15px 16px;
		margin-left: 0;
		border-radius: 0;
		font-size:  16px
	}
	.modebuy .ivu-modal-close{
		z-index: 99
	}
	.modebuy .ivu-modal-footer{
		display: block;
	}
	.ivu-btn.active{
		background: #000;
		color:#fff;
	}
</style>
<style scoped lang='stylus'>
@import "../../common/index.styl"
.top
	position fixed
	width 100%
	z-index 100
.navtit
	height 50px
	line-height 50px
	text-align center
	width 100%
	background rgba(255,255,255,1)
	.tit
		font-size 17px
	.back
		position absolute
		left 10px
		font-size 20px
		top 15px
	.buy
		position relative
		float right
		font-size 20px
		top 15px
		right 10px
.contentBox
	position absolute
	height 100%
	top 50px
	left 0
	right 0
	bottom 0
	overflow hidden
	
.main
	width 100%
	overflow hidden
	.topbox
		padding 10px
		.tit
			font-size 15px
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
			height 40px
			line-height 40px
			font-size 14px
			border-top  1px solid #dedede
			img
				display block
				width 20px
				float left
				margin-top 10px
				margin-right 10px
				font-weight bold
			a
				color #ccc
				float right
				font-size 12px
				margin-right 10px
	.center
		border-top 10px solid #EAEAEA
		border-bottom 10px solid #EAEAEA
		.tit
			height 40px
			line-height 40px
			text-align left
			font-size 15px
			padding 0 10px
			border-bottom 1px solid #dedede
		.tit2
			height 60px
			line-height 60px
			border-top 10px solid #EAEAEA
		img
			max-width 100%
			padding 3px 10px
		.list
			padding 0 10px
			.item
				height 30px 
				line-height 30px
				text-align left
				font-size 13px
		p
			text-align left
			line-height 24px
	.bot
		padding-bottom 100px
		h3.tit
			font-size 16px
			height 50px
			line-height 50px
		.recomand
			border-bottom 8px solid #F1F1F1
			.img-res
				max-width 100%
			.list
				position relative
				.data
					position absolute
					top 0
					left 0
					right 0
					bottom 0
					height 100%
					overflow hidden
				img
					padding 10px 0
					max-width 80px
				.tit
					font-size 15px
					text-align left 
					padding 0 10px
				.price
					font-size 16px
					text-align left
					padding 10px
					font-weight 600
.buybottom
	position fixed
	bottom 0
	width 100%
	height 50px
	line-height 50px
	font-size 18px
	background #fff
	border-top 1px solid #646464
	.addCar
		background #646464
		color #fff
	.buyIt
		background #333
		color #fff
.content
	.tit
		border-bottom 1px solid #e9eaec
		img
			margin-top -30px
			border-radius 5px
			display block 
			float left
			margin-right 20px
		.t_right
			float right
			p
				font-size 14px
				
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
	.size
		padding-bottom 10px
		border-bottom 1px solid #e9eaec
		p
			font-size 14px
			height 40px
			line-height 40px
	.num
		font-size 14px
		height 80px
		line-height 80px
		.operate
			text-align center
			


</style>