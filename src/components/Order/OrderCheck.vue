<template>
	<div class="checkorder">
		<div>
			<div class="navtit">
				<Row>
					<Col span=2><span @click='back'>	<Icon size=20 type="chevron-left" ></Icon></span></Col>
					<Col span=20>核对订单</Col>
					<Col span=2><span class="reg"></span></Col>
				</Row>	
			</div>
			<div class="orderOne">
				<Row class='person'>
					<Col class='item' span=24>收货人：Joker</Col>
					<Col class='item' span=24>身份证：14654643466654556</Col>
					<Col class='item' span=24><router-link to='/Address' tag='div'>收货地址：河南省郑州市金水区123号 <Icon style='float:right; padding-top:5px' size=20 type="chevron-right"></Icon></router-link></Col>
				</Row>
				<Row class='goodsDetail'>
					<Col class='tit' span=24>美国亚马逊发货   跨境电商</Col>
					<Row class='detail'>
						<Col span=6><img src="https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg" alt=""></Col>
						<Col span=18>
							<Row>
								<Col class='goodstit' span=24>Alexander Wang/亚历山大·王 女装 女式连衣裙 </Col>
								<Col class='goodsitem' span=24>重量：1.15kg</Col>
								<Col class='goodsitem' span=24>
									<Row>
										<Col span=18><span class='price'>￥1568.00</span>（$150）</Col>
										<Col span=6>数量：X 1</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
					<Col class='item' span=24>
						<Col span=12>保险：</Col>
						<Col span=12 style='text-align:right'>￥20  <Checkbox v-model="single"></Checkbox></Col>
					</Col>
					<Col class='item' span=24>
						<Col span=12>加固：</Col>
						<Col span=12 style='text-align:right'>￥8  <Checkbox v-model="single"></Checkbox></Col>
					</Col>
					<Col class='item area'>
						<Input v-model="value5" type="textarea" placeholder="备注"></Input>
					</Col>
					<Col class='item' span=24>
						<Col span=12>商品总额：</Col>
						<Col span=12 style='text-align:right'>￥1899 </Col>
					</Col>
					<Col class='item' span=24>
						<Col span=12>官网运费：</Col>
						<Col span=12 style='text-align:right'>￥1899 </Col>
					</Col>
					<Col class='item' span=24>
						<Col span=12>转运费：</Col>
						<Col span=12 style='text-align:right'>￥1899 </Col>
					</Col>
					<Col class='item' span=24>
						<Col span=12>关税：</Col>
						<Col span=12 style='text-align:right'>￥1899 </Col>
					</Col>
				</Row>
			</div>
			<div class="bot">
				<Row>
					<Col span=16>
						<Col class='item' span=24>共<span class="price">1</span>件，应付款：<span class="price">￥12545.00</span></Col>
						<Col class='item' span=24><span>我同意《服务协议》</span></Col>
					</Col>
					<Col span=8>
						<Button style='width:100%' type="primary" @click='subOrder'>提交订单</Button>
					</Col>
				</Row>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'checkorder',
		data(){
			return {
				single:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			subOrder(){
				this.$Message.success('订单提交成功');
				setTimeout(()=>{
					this.$router.push({path:'/OrderDetail'})
				},2000)
				
			}
		}
	}
</script>
<style>
	.orderOne textarea.ivu-input{ background: #f1f1f1 }
	.bot .ivu-btn.ivu-btn-primary{
		height: 60px;
		border-radius: 0;
		font-size:  18px
	}
</style>
<style lang='stylus' scoped>
.checkorder
	font-weight bold
.navtit
	background #fff
	position fixed
	width 100%
	height 50px 
	line-height 50px
	font-size 18px
	border-bottom 1px solid #dedede
.orderOne 
	padding-top 50px
.person
	border-bottom 10px solid #dedede
	padding 0 10px
	.item
		height 35px
		line-height 35px
		font-size 15px
		text-align left
.goodsDetail
	padding 0 10px
	text-align left
	border-bottom 10px solid #dedede
	.tit
		height 50px
		line-height 50px
		font-size 16px
		text-align left
		border-bottom 1px solid #dedede
	.detail
		font-weight bold
		border-bottom 1px solid #dedede
		img
			max-width 100%
			padding-right 10px
			margin-top 10px
		.goodstit
			font-size 16px
			text-align left
			margin-top 10px
		.goodsitem
			height 30px
			line-height 30px
			font-size 14px
			.price
				Color #d43737
				font-size 16px
	.item
		clear both
		font-size 15px
		height 40px
		line-height 40px
		border-bottom 1px solid #dedede
	.area
		height 70px
		padding 10px 0

.bot
	position fixed
	bottom 0
	height 60px
	border-top 1px solid #dedede
	background #fff
	.item
		height 30px
		line-height 30px
		font-size 15px
		text-align left
		padding 0 10px
		.price
			Color #d43737
			font-size 16px


</style>