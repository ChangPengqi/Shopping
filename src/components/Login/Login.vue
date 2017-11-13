<template>
	<div class='login'>
		<img src="./bg.jpg" class="bg" alt="">
		<Row class='top'>
			<Col span=24><Icon color='#fff'size='120' type="android-globe"></Icon></Col>
			<Col span=9 offset=8><img src="./icon3.png" alt=""></Col>
		</Row>
		<Row class='login'>
			<Col span=16 offset=4 class='item'>
				<Row>
					<Col span=4><Icon size=34 color="#fff" type="android-person"></Icon></Col>
					<Col span=20><Input v-model="user" placeholder="请输入手机号"></Input></Col>
				</Row>
			</Col>
			<Col span=16 offset=4 class='item'>
				<Row>
					<Col span=4><Icon size=34 color="#fff" type="android-lock"></Icon></Col>
					<Col span=20><Input v-model="pwd" type='password' placeholder="请输入密码"></Input></Col>
				</Row>
			</Col>
			<Col span=16 offset=4 class='item btn'>
				<Row>
					<Col span=24><Button type="ghost" @click='login'>登录</Button></Col>
					<p v-show='msg' class="message animated fadeIn"><Icon type="ios-close-outline"></Icon> 用户名或密码错误 ，请重新填写</p>
				</Row>
			</Col>
			  
		</Row>

	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return {
				user:'',
				pwd:'',
				msg:false
			}
		},
		methods:{
			login(){
				if(this.user=='15290421816' && this.pwd=='cpq19900320'){
					this.$router.push({path:'/Home'})
				}else{
					this.msg=true;
					setTimeout(()=>{
						this.user='',
						this.pwd='',
						this.msg=false
					},2000)
				}
			}
		}
	}
</script>
<style>
	.login .ivu-input{ border:0; font-size: 16px; background: none; font-size: 15px; color: #fff; height: 40px; line-height: 40px }
	.login .ivu-btn-ghost{height: 40px; font-size: 14px; width:100%; color: #fff}
</style>
<style lang='stylus' scoped>
.bg
	position absolute 
	left 0 
	top 0
	max-width 100%
	filter brightness(.2) blur(1px)

.navtit
	background #fff
	position fixed
	width 100%
	height 50px 
	line-height 50px
	font-size 18px
	border-bottom 1px solid #dedede
.loginmsg
	padding 0px 10px
	padding-top 100px
	.item
		border-bottom 1px solid #dedede
		clear both
		height 50px
		line-height 50px
		i
			margin-top 10px
	.logbtn
		border-bottom 0
		margin-top 30px
.otherlog
	margin-top 150px
.top
	margin-top 15%
	img
		max-width 100%
.login
	.item
		height 80px
		line-height 80px
		border-bottom 1px solid #fff
		i
			padding-top 20px
	.btn
		border 0
		margin-top 30px
	.message
		color #fff
		text-align left
		font-size 14px
		font-weight normal




</style>