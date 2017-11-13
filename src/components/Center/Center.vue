<template>
	<div id='center'>
		
		<div class="navtit">
				<p class="tit">
				<span>个人中心</span> 
				<b style='float:right; padding-right:10px; padding-top:5px' @click='set'>	<Icon  size=30 color='#fff' type="ios-gear-outline"></Icon></b>
				</p>
				<Row class="tx">
					<Col span='6'><img src="./tx.jpg" alt="" width="60"></Col>
					<Col span='6'><span style='font-size:16px; color:#fff; line-height:60px'>Machike</span></Col>
					<Col span='6' offset=6>
						<p class="tag"><Icon size='20' type="ios-heart-outline"></Icon> <span>10</span></p>
						<p class="tag"><Icon size='25' type="ios-star-outline"></Icon><span>30</span></p>
					</Col>
				</Row>
				<img class="bg" src="http://img.zcool.cn/community/01851e572f42066ac725a4fbf5f35f.jpg@1280w_1l_2o_100sh.jpg" alt="">
		</div>
		<div class="main">
			<div>
				<div class="order">
					<Row>
						<Col class='item' span='6'>
							<router-link to='/OrderDetail' tag='div'>
								<img src="./icon1.jpg" alt="" width='40'>
								<p>待发货</p>
								 <Badge count="3">
							        <a href="#" class="demo-badge"></a>
							    </Badge>
							</router-link>
						</Col>
						<Col class='item' span='6'>
							<router-link to='/OrderDetail' tag='div'>
								<img src="./icon2.jpg" alt="" width='40'>
								<p>待收货</p>
								<Badge count="5">
							        <a href="#" class="demo-badge"></a>
							    </Badge>
							</router-link>
						</Col>
						<Col class='item' span='6'>
							<img src="./icon3.jpg" alt="" width='40'>
							<p>退款售后</p>
							<Badge count="2">
						        <a href="#" class="demo-badge"></a>
						    </Badge>
						</Col>
						<Col class='item' span='6'>
							<router-link to='/OrderDetail' tag='div'>	
								<img src="./icon4.jpg" alt="" width='40'>
								<p>全部订单</p>
								<Badge count="8">
							        <a href="#" class="demo-badge"></a>
							    </Badge>
						    </router-link>
						</Col>
					</Row>
				</div>
				<div class="set">
					<div style='border-bottom:10px solid #dedede'>
						<Row class='item'>
							<Col span='2'><img src="./icon5.jpg" alt="" width="30"></Col>
							<Col span='6'>我的积分</Col>
							<Col span='3' offset='12'><span>600</span></Col>
							<Col span='1' ><Icon type="chevron-right"></Icon></Col>
						</Row>
						<Row class='item'>
								
								<Col span='2'><img src="./icon6.jpg" alt="" width="30"></Col>
								<Col span='6'>收货地址</Col>
								<Col span='1' offset='15'><router-link to='/Address' tag='div' ><Icon type="chevron-right"></Icon></router-link></Col>
							
						</Row>
						<Row class='item'>
							<Col span='2'><img src="./icon7.jpg" alt="" width="30"></Col>
							<Col span='6'>在线客服</Col>
							<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
						</Row>
						<Row class='item'>
							<Col span='2'><img src="./icon8.jpg" alt="" width="30"></Col>
							<Col span='6'>我的尺码</Col>
							<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
						</Row>
					</div>
					<div style='border-bottom:10px solid #dedede'>
					<Row class='item'>
						<Col span='2'><Icon size='30' color='#646464' type="ios-information-outline"></Icon></Col>
						<Col span='6'>关于我们</Col>
						<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
					</Row>
					<Row class='item'>
						<Col span='2'><Icon size='30' color='#646464' type="ios-email-outline"></Icon></Icon></Col>
						<Col span='6'>意见反馈</Col>
						<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
					</Row>
					<Row class='item'>
						<Col span='2'><Icon size='30' color='#646464' type="ios-help-outline"></Icon></Icon></Icon></Col>
						<Col span='6'>帮助中心</Col>
						<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
					</Row>
					<Row class='item'>
						<Col span='2'><Icon size=30 color='#646464' type="ios-gear-outline"></Icon></Col>
						<Col span='6'>设置</Col>
						<Col span='1' offset='15'><Icon type="chevron-right"></Icon></Col>
					</Row>
					</div>
					
				</div>
			</div>
		</div>
		
		<div class="footer">
			<foot></foot>	
		</div>
		<div v-show='setShow' class="mark animated fadeIn" @click='setHide'></div>
		<div class="set" v-show='setShow'>
			<set></set>
		</div>
	</div>
</template>
<script>
import Set from '../Set/Set'
import Bottom from '../Bottom/Bottom'
import BScroll from 'better-scroll'
	export default{
		name:'center',
		components:{
				'foot':Bottom,
				'set':Set
			},
		data(){
			return {
				setShow:false

			}
		},
		methods:{
			set(){
				this.setShow=true
			},
			setHide(){
				this.setShow=false
			}
		},
		mounted:function(){
			$('.main').height($(window).height()-200)
			this.scrollbox=new BScroll(document.querySelector('.main'), {
		        click:true,
		        bounceTime:700,
		        probeType:3
	    	})
	    	this.scrollbox.on('scroll',function(pos){


	    	})
		}
	}
</script>
<style>
	.order .ivu-badge-count{
		position:  absolute; 
		top:-80px;
		left:0px;
	}
</style>
<style lang='stylus' scoped>
.mark
	position fixed
	background rgba(0,0,0,0.5)
	width 100%
	height 100%
	top 0
	bottom 0
	left 0
	right 0
	z-index 999
.navtit
	width 100%
	height 50px
	text-align center
	background url()
	z-index 100
	height 200px
	overflow hidden
	position relative
	.bg
		max-width 100%
		filter brightness(.2)
		position relative
		top -165px
		left 0
		z-index -1
	.tit
		height 50px
		line-height 50px
		font-size 17px
		color #fff
		position fixed
		width 100%	
	.tx
		margin-top 100px
		img
			border-radius 100%
	.tag
		color #fff
		font-size 18px
		span
			margin 0 10px
.order
	border-bottom 10px solid #dedede
	background #fff
	.item
		padding 20px 0
		font-size 14px
	img
		max-width 100%
	.demo-badge
		position absolute
		top 0
.set
	background #fff
	.item
		text-align left
		clear both
		padding 0 10px
		height 40px 
		line-height 40px
		font-size 15px
		border-bottom 1px solid #f1f1f1
		img
			max-width 100%
			padding-top 5px
		i
			padding-top 5px



</style>	