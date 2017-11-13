<template>
	<div class='login'>
		
		<div class="navtit">
			<Row>
				<Col span=2><span  @click='back'>	<Icon size=20 type="chevron-left"></Icon></span></Col>
				<Col span=20>注册</Col>
				<Col span=2><span class="reg"></span></Col>
			</Row>	
		</div>
		<div class="loginmsg">
			<Row class='item'>
				<Col span=4><Icon size=30 color='#999' type="android-phone-portrait"></Icon></Icon></Col>
				<Col span=18> <Input v-model="phonenum" placeholder="请输入手机号"></Input></Col>		
			</Row>
			<Row class='item'>
				<Col span=4><Icon size=30 color='#999' type="android-lock"></Icon></Col>
				<Col span=18> <Input v-model="psd" placeholder="请输入密码(包含数字和字符)"></Input></Col>		
			</Row>
			<Row class='item logbtn'>
				<Col span=22 offset=1> <Button style='width:100%' type="primary">注册</Button></Col>			
			</Row>
			
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return {

			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.loginmsg .ivu-input{ border:0; font-size: 14px }
	.loginmsg .ivu-btn-primary{height: 40px; font-size: 14px}
</style>
<style lang='stylus' scoped>
.bg
	position absolute 
	left 0 
	top 0
	max-width 100%
	filter brightness(.2)

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




</style>