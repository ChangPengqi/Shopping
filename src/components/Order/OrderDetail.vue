<template>
	<div class="orderdetail">
		<div class="navtit">
			<Row>
				<Col span=2><span @click='back'>	<Icon size=20 type="chevron-left" ></Icon></span></Col>
				<Col span=20>订单详情</Col>
				<Col span=2><span class="reg"></span></Col>
			</Row>	
		</div>
		<div class="main">
			<div>
				
				<div class="detail">
					<Row class='list' v-for='item in orderList' :key='item.tit'>
						<Col class='item' span=24 style='font-size:15px'>
							<Col  span=12  style='text-align:left'>订单号：{{item.order_sn}}</Col>
							<Col span=12 style='text-align:right'>{{item.time}}</Col>
							
						</Col>
						<Col  class='goodsdetail' span=24>
							<Col span=6 ><img :src="item.src" alt=""></Col>
							<Col span=14>
								<Col class='goodsitem' span=24 style='font-size:16px'>{{item.tit}}</Col>
								<Col class='goodsitem' span=24 style='color:#999'><span>颜色：{{item.color}}</span><span>尺码：{{item.size}}</span><span>数量：X {{item.num}}</span></Col>
								<Col class='goodsitem' span=24>￥{{item.price}}（$466.12）</Col>
							</Col>
							<Col span=4 style='font-size:14px; padding-top:40px'>{{item.status}}</Col>
						</Col>
						<Col  class='item' span=24 style='text-align:right'>
							共计{{item.totalnum}}件商品 合计：<span style='color:#d43737; font-size:16px'>￥{{item.totalMoney}}.00</span>
						</Col>
						
					</Row>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		name:'orderdetail',
		data(){
			return {
				orderList:[{
					src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
					order_sn:'1436413156465145',
					time:'207-08-08 14:25:55',
					tit:'Alexander Wang/亚历山大·王',
					color:'黑',
					size:'L',
					price:'56465',
					num:'1',
					status:'运送中',
					totalnum:'1',
					totalMoney:'56465.00',
				},{
					src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
					order_sn:'1436413156465145',
					time:'207-08-08 14:25:55',
					tit:'Alexander Wang/亚历山大·王',
					color:'黑',
					size:'L',
					price:'56465',
					num:'1',
					status:'交易关闭',
					totalnum:'1',
					totalMoney:'56465.00',
				},{
					src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
					order_sn:'1436413156465145',
					time:'207-08-08 14:25:55',
					tit:'Alexander Wang/亚历山大·王',
					color:'黑',
					size:'L',
					price:'56465',
					num:'1',
					status:'代发货',
					totalnum:'1',
					totalMoney:'56465.00',
				},{
					src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
					order_sn:'1436413156465145',
					time:'207-08-08 14:25:55',
					tit:'Alexander Wang/亚历山大·王',
					color:'黑',
					size:'L',
					price:'56465',
					num:'1',
					status:'运送中',
					totalnum:'1',
					totalMoney:'56465.00',
				},{
					src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg',
					order_sn:'1436413156465145',
					time:'207-08-08 14:25:55',
					tit:'Alexander Wang/亚历山大·王',
					color:'黑',
					size:'L',
					price:'56465',
					num:'1',
					status:'发货中',
					totalnum:'1',
					totalMoney:'56465.00',
				}]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
			$('.main').height($(window).height())
			setTimeout(()=>{
				var scrollbox=new BScroll(document.querySelector('.main'), {
                click:true,
                bounceTime:300,
              })
			},200)
		}
	}
</script>
<style lang='stylus' scoped>
.orderdetail
	background #dedede
.navtit
	background #fff
	position fixed
	width 100%
	height 50px 
	line-height 50px
	font-size 18px
	border-bottom 1px solid #dedede
	z-index 100
.detail
	padding-top 50px
	.list
		padding 0 10px
		background #fff
		border-top 10px solid #dedede
		.item
			height 50px
			line-height 50px
			border-bottom 1px solid #dedede
			font-size 14px
		.goodsdetail
			border-bottom 1px solid #dedede
			padding 10px 0 
			img
				max-width 100%
			.goodsitem
				height 30px 
				line-height 30px
				text-align left
				padding 0 10px
				font-size 14px
</style>