<template>
	<div class="set">
		<div class="main">
			<div>
				<div class="content animated fadeInLeft">
					<Row>
						<Col span=24>
							<img src="./tx.jpg" alt="" width="100">
							<p><Button type="ghost">修改头像</Button></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="android-person" size='20'></Icon><span>个人信息</span></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="android-lock" size='20'></Icon><span>账户安全</span></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="social-yen" size='20'></Icon><span>支付设置</span></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="chatbox-working" size='20'></Icon><span>通知提醒</span></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="android-upload" size='20'></Icon><span>版本更新</span></p>
						</Col>
						<Col span=24 class='item'>
							<p><Icon type="log-out" size='20'></Icon><span>退出登录</span></p>

						</Col>

					</Row>	
					
				</div>
				
			</div>
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
			setHide(){
				
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		width 50%
		height 100%
		background #fff
		position absolute 
		z-index 1000
		padding 20px 10px
		top 0
		.item
			height 60px 
			line-height 60px
			font-size 15px
			padding 5px 0
			border-bottom 1px solid #dedede
			span
				padding 0 20px
		img
			border-radius 100%
	
</style>