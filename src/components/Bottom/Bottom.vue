<template>
	<div id="footer">
			<div class="list">
				<div  class='item'>
					<router-link to='/Home'><img src="./icon7.jpg" alt=""></router-link>
				</div>
				<div  class='item'>
					<router-link to='/Classes'><img src="./icon9.jpg" alt=""></router-link>
				</div>
				<div  class='item'>
					<router-link to='/Around'><img src="./icon8.jpg" alt=""></router-link>
				</div>
				<div  class='item'>
					<router-link to='/Cart'><img src="./icon11.jpg" alt=""></router-link>
				</div>
				<div  class='item'>
					<router-link to='/Center'><img src="./icon10.jpg" alt=""></router-link>
				</div>
			</div>
	</div>
</template>
<script>
	export default{
		name:'footer',
		data(){
			return {}
		}
	}
</script>
<style scoped lang="stylus">
@import "../../common/index.styl"
#footer
	position fixed
	bottom 0
	background #fff
	width 100%
	border-top 1px solid #eee
	z-index  100
	.list
		display flex 
	.item
		padding 5px 0
		width 20%
		flex 1
		img
			width 35%

</style>