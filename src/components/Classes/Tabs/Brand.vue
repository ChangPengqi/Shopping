<template>
<transition enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
<div id='brand'>
	<div class="mainbrand">
		<div>
			<div>
				<div class="top">
					<div class="banner animated fadeIn">
						<img  src="./3.jpg" alt="">
					</div>
					<div class="top_item animated fadeIn" v-for='item in recomData'>
						<img :src="item.src" alt="">
					</div>
					
				</div>
				<div class="more">
					<div span='24'><h3>品 牌 </h3></div>
					<div class="more_item animated fadeIn" v-for='item in imgBrandData' span='8'><img :src="item.src" alt=""></div>
					<div class="more_item" span='8'><router-link to='/Classes/Brand/BrandMore'><Icon style='font-size:100px' type="ios-plus-empty"></Icon></router-link></div>
				</div>
				
				<div style='height:55px'></div>	
			</div>
		</div>
	</div>
</div>
</transition>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		name:'brand',
		data(){
			return{
				value:'1',
				accord:false,
				recomData:[
							{src:'http://res.calvinklein.cn/resources/2017/4/26/14931909215547529_213X282.JPG'},
							{src:'http://res.calvinklein.cn/resources/2017/8/8/15021769984646270_213X282.jpg'},
							{src:'http://res.calvinklein.cn/resources/2017/1/22/14850772448295397_213X282.jpg'},
						],
				imgBrandData:[
							{src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB182bwRVXXXXcRaXXXXXXXXXXX'},
							{src:'https://img.alicdn.com/bao/uploaded/TB1kCa2KVXXXXbFXXXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
							{src:'https://img.alicdn.com/bao/uploaded/TB182bwRVXXXXcRaXXXXXXXXXXX'},
							
						]

			}
		},
		methods:{
			reload(){
				
			}
		},
		mounted:function(){
			$('.mainbrand').height($(window).height()-100)
			
			setTimeout(()=>{
				this.scrollbox=new BScroll(document.querySelector('.mainbrand'), {
                click:true,
                bounceTime:300,
              })
			
			},2000)
		}
	}
</script>
<style>
	.ivu-collapse-header{ text-align: left; font-size: 15px }
	.ivu-collapse-content > .ivu-collapse-content-box{ text-align: left; padding: 0 }
	.ivu-collapse-content-box p{ height: 40px; line-height: 40px; font-size: 14px; border-bottom: 1px solid #dedede }
				
</style>
<style lang='stylus' scoped>
	.main
		.top
			width 100%
			.top_item
				width 33.3333%
				float left
		img
			max-width 100%
		.more
			clear both
			width 100%
			height 320px
			.more_item
				width 33.3333%
				float left
			h3
				font-size 16px
				height 40px
				line-height 40px
			img
				padding 20px
				border 1px solid #dedede
		.more_collapse
			clear both



</style>