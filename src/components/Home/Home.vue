<template >
	<transition  
	>
		<div id='Home'>		
	        <div class="nav">
				<Row>
			        <Col span="22" offset="1">
			        <Input v-model="value4" icon="ios-search" placeholder="搜索最热品牌和商家" @on-click='search' ></Input>
			        </Col>  
		        </Row>
			</div>
		    
			<div class="main">
				<div>
					<div class="banner">
						 <Carousel autoplay v-model="value2" >
						    <Carousel-item>
					            <div class="demo-carousel"><img src="./3.jpg" alt=""></div>
					        </Carousel-item>
						    <Carousel-item>
					            <div class="demo-carousel"><img src="./2.jpg" alt=""></div>
					        </Carousel-item>
					        <Carousel-item>
					            <div class="demo-carousel"><img src="./4.jpg" alt=""></div>
					        </Carousel-item>
					        <Carousel-item>
					            <div class="demo-carousel"><img src="./ad1.jpg" alt=""></div>
					        </Carousel-item>			        
					    </Carousel>
					</div>
					<div class="classify">
						<Row>
					        <Col span="4"><img src="./icon1.jpg" alt="" width="35">
								<p>数码</p>
					        </Col>
					        <Col span="4"><img src="./icon2.jpg" alt="" width="35">
								<p>箱包</p></Col>
					        <Col span="4"><img src="./icon3.jpg" alt="" width="35">
								<p>美妆</p></Col>
					        <Col span="4"><img src="./icon4.jpg" alt="" width="35">
								<p>配饰</p></Col>
					        <Col span="4"><img src="./icon5.jpg" alt="" width="35">
								<p>服饰</p></Col>
					        <Col span="4"><img src="./icon6.jpg" alt="" width="35">
								<p>家居</p></Col>
					        
					    </Row>
					</div>

					<div class="branch">
						<Row>
							<Col span='8' class='b_l'>
								<h3 class="tit">MANGO新品</h3>
								<div>
									<img src="./5.jpg" alt="">
								</div>

							</Col>
							<Col span='16' class='b_r'>
								<Row>
									<Col span='24' class='b_r_t'>
										<Row>
											<Col span='10'>
												<h3>每日精选</h3>
											</Col>
											<Col span='14'>
												<img class="img-res" src="./6.jpg" alt="" >
											</Col>
										</Row>
									</Col>
									<Col span='24' class='b_r_b'>
										<Row>
											<Col span='12' style='border-right:1px solid #dddee1'>
												<h3>手工达人</h3>
												<div><img src="./7.jpg" alt="" width="80"></div>
											</Col>
											<Col span='12'>
												<h3>精选男表</h3>
												<div><img src="./8.jpg" alt="" width="75"></div>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
						</Row>		
					</div>
					<div class="tab">
						<Tabs value="hot">
					        <Tab-pane label="最热" name="hot">
					        	<Row>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./9.jpg" alt="">
					        			</div>
					        			<p>配饰</p>
					        			<p class="destit">Accessories</p>
					        		</Col>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./10.jpg" alt="">
					        			</div>
					        			<p>鞋靴</p>
					        			<p class="destit">Boot&Shoos</p>
					        		</Col>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./11.jpg" alt="">
					        			</div>
					        			<p>箱包</p>
					        			<p class="destit">Suitcases</p>
					        		</Col>
					        	</Row>


					        </Tab-pane>
					        <Tab-pane label="折扣" name="sale">
								<Row>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./9.jpg" alt="">
					        			</div>
					        			<p>配饰</p>
					        			<p class="destit">Accessories</p>
					        		</Col>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./10.jpg" alt="">
					        			</div>
					        			<p>鞋靴</p>
					        			<p class="destit">Boot&Shoos</p>
					        		</Col>
					        		<Col span="8">
					        			<div class="item">
					        				<img src="./11.jpg" alt="">
					        			</div>
					        			<p>箱包</p>
					        			<p class="destit">Suitcases</p>
					        		</Col>
					        	</Row>

					        </Tab-pane>  
					    </Tabs>
					</div>
					<div class="recomand">
						<Row>
					    	<Col span='24'>
					    		<img class="img-res" src="./1.jpg" alt="">
					    	</Col>
					    </Row>
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
					<div class="recomand">
						<Row>
					    	<Col span='24'>
					    		<img class="img-res" src="./ad2.jpg" alt="">
					    	</Col>
					    </Row>
					    <div class="list" style='height:300px'>
					    	<div class="data">
					    		<div class="wrap">
					    			<div style='display:flex'>
							    		<div v-for='list in recomand2' class="listItem" style='flex:1'>
							    			<img :src='list.src' alt="" style='max-width:130px'>
							    			<p class="tit">{{list.des}}</p>
							    			<p class="price">￥{{list.price}}</p>
							    		</div>
						    		</div>
					    		</div>
					    	</div>
					    </div>
					</div>
					<div class="special">
						<h3 class="tit">—— 每日精选 ——</h3>
						<div class="list">
							<Row class='item' v-for='item in specialData' :key='item.title'>
								<Col span='8'>
									<img src="./16.jpg" alt="">
								</Col>
								<Col span='16'>
									<h3>{{item.title}}</h3>
									<p>{{item.des}}</p>
									<p class="mark">标签： {{item.tag}}</p>
								</Col>
							</Row>		
						</div>
					</div>
					<div style='height:55px'>	</div>
				</div>

			</div>
			<div class="footer">
				<foot></foot>	
			</div> 
		</div>
	</transition>
</template>
<script>
import Bottom from '../Bottom/Bottom'
import BScroll from 'better-scroll'
export default{
	name:'Home',
	components:{

		'foot':Bottom
	},
	data(){
		return {
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
			recomand2:[{
				id:'213',
				src:'https://img.alicdn.com/imgextra/i3/2999119381/TB28qHaXM28F1Jjy0FfXXa6sFXa_!!2999119381.jpg_430x430q90.jpg',
				des:'Embroidered relaxed Jeans 2017秋季款',
				price:'3999.00'
			},{
				id:'12',
				src:'https://img.alicdn.com/bao/uploaded/i3/TB1vkysPpXXXXbSXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
				des:'Skinny Elektra Jeans 2017夏季新款',
				price:'1999.00'
			},{
				id:'345',
				src:'https://img.alicdn.com/bao/uploaded/i2/TB1Xv1xPXXXXXaZXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
				des:'Embroidered relaxed Jeans 2017秋季款',
				price:'4999.00'
			},{
				id:'1223',
				src:'https://img.alicdn.com/imgextra/i3/2999119381/TB28qHaXM28F1Jjy0FfXXa6sFXa_!!2999119381.jpg_430x430q90.jpg',
				des:'Embroidered relaxed Jeans 2017秋季款',
				price:'3999.00'
			},{
				id:'678',
				src:'https://img.alicdn.com/bao/uploaded/i3/TB1vkysPpXXXXbSXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
				des:'Skinny Elektra Jeans 2017夏季新款',
				price:'1999.00'
			},{
				id:'789',
				src:'https://img.alicdn.com/bao/uploaded/i2/TB1Xv1xPXXXXXaZXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
				des:'Embroidered relaxed Jeans 2017秋季款',
				price:'4999.00'
			}],
			specialData:[
							{title:'Adidas Original Tubular X 小叶子上脚美图',src:'',des:'Adidas 2017春季最新款小叶子定制',tag:'科技 极客'},
							{title:'Adidas Original Tubular X 小叶子上脚美图',src:'',des:'Adidas 2017春季最新款小叶子定制',tag:'科技 极客'},
							{title:'Adidas Original Tubular X 小叶子上脚美图',src:'',des:'Adidas 2017春季最新款小叶子定制',tag:'科技 极客'},
							{title:'Adidas Original Tubular X 小叶子上脚美图',src:'',des:'Adidas 2017春季最新款小叶子定制',tag:'科技 极客'},
						]

		}
	},
	created:function(){
		


		/*console.log($('.wrap').width())*/
	},
	computed:{
		/*styleObj:function(){
			return 'width:'+137*this.recomand.length+'px'
		}*/
	},
	methods:{
		search(){
			this.$router.push({path:'/GoodsList'})
		}
	},
	mounted:function(){
		$('.wrap').width($(window).width()/3*this.recomand.length)
		setTimeout(()=>{
			this.scroll1=new BScroll(document.querySelector('.main'), {
                click:true,
                bounceTime:300,             
              })	
		},20)
		
		this.scroll2=new BScroll(document.querySelector('.data'), {
                click:true,
                bounceTime:300,
                scrollX:true,
                scrollY:false,
                eventPassthrough: 'vertical'
              })
		this.scroll3=new BScroll(document.querySelector('.data2'), {
                click:true,
                bounceTime:300,
                scrollX:true,
                scrollY:false,
                eventPassthrough: 'vertical'
              })

	}
}
</script>
<style>
	.nav .ivu-input{ border-radius: 16px; text-align: center; background:#EFEFEF;}
	.tab .ivu-tabs-nav{ left: 50%; margin-left: -44px}
	.tab .ivu-tabs-nav .ivu-tabs-tab{ padding: 8px 0px; font-size: 15px }


</style>
<style scoped lang="stylus">
@import "../../common/index.styl"
.nav 
	height 50px
	padding 9px 0
	border-bottom 1px solid #dddee1
	background #fff
	position fixed
	top 0
	width 100%
	z-index 100
.main
	position absolute
	top 50px
	left 0
	right 0
	bottom 0
	width 100%
	overflow hidden
.banner
	img
		max-width 100%
.classify
	padding 10px 0
	border-bottom 1px solid #dddee1
	box-shadow 0 3px 5px #dddee1
.branch
	border-top 8px solid #F1F1F1
	border-bottom 8px solid #F1F1F1
	.b_l
		height 200px
		overflow hidden
		border-right 1px solid #dddee1
		h3
			font-size 15px
			padding 10px 0
	.b_r
		height 200px
		overflow hidden
		.b_r_t
			height 100px
			border-bottom 1px solid #dddee1
			h3
				font-size 15px
				line-height 100px
		.b_r_b
			height 100px
			h3
				margin 10px 20%
				background #333
				color #fff
	.img-res
		max-width 125px
.tab
	border-bottom 8px solid #F1F1F1
	p
		font-size 14px
	.destit
		color #bdbdbd
		font-size 12px
		padding-bottom 10px
	.item
		width 80px
		height 80px
		background #F7F7F7
		border-radius 50%
		margin 10px auto
		margin-top 0
		img
			margin-top 10px
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
.special

	h3.tit
		text-align center
		height 60px
		line-height 60px
		font-size 17px
	.item
		padding 10px
		border-bottom 1px solid #F1F1F1
		img
			max-width 100%
		h3
			text-align left
			padding 0 10px
			font-size 15px
			line-height 24px
		p
			text-align left
			padding 3px 10px
			font-size 14px
			color #949494
		p.mark
			color #CECECE
			font-size 13px
	

	
	
	

</style>