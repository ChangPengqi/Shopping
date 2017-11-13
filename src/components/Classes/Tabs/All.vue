<template>
<transition enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">	
<div id='all'>
	<Row>
		<div class="left">
			<div class="data">
				<div  class='leftSide'>
					<div class='list animated fadeInLeft'>
						<div  class='item animated' v-for='item in classArr' :key='item'>
							<p @click='active($event)'>{{item}}</p>
						</div>
						
					</div>
					<div style='height:55px; '></div>
				</div>

			</div>
		</div>
		<div class="right">
			<div class="data">
				
				<div >
					<Row v-for='list in goodsData' class='goodsList' :key='list.title'>
						<Col span='24'>
							<h3 class="tit"><Icon type="trophy" style='margin-right:20px'></Icon>{{list.title}}</h3>
						</Col>
						<Col class='item animated fadeInRight' span='12' v-for='item in list.goodsArr' :key='item.title'>
							<img :src="item.src" alt="">
							<p>{{item.title}}</p>
						</Col>
					</Row>
				</div>
				<div style='height:55px; '></div>
			</div>

		</div>
	</Row>

</div>
</transition>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
			name:'all',
			data(){
				return {
					classArr:['配饰','精选','女装','美妆护肤','彩妆香薰','名物','包袋','艺术品','家居','户外','旅行'],
					goodsData:[
						{
						title:'配饰',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'精选',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'女装',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'美妆护肤',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'彩妆香薰',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'名物',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'包袋',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'艺术品',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'家居',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'户外',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
						{
						title:'旅行',
						goodsArr:[
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
									{title:'施华洛世奇',src:'https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'项链',src:'https://img.alicdn.com/imgextra/i2/1144306081485282941/TB2JPdtAS8mpuFjSZFMXXaxpVXa_!!0-saturn_solar.jpg_220x220.jpg'},
									{title:'手链',src:'https://img12.360buyimg.com/n1/jfs/t5722/69/6925618736/106232/5f157f1e/596d919dN9501d99b.jpg'},
									{title:'手镯',src:'https://img14.360buyimg.com/n1/jfs/t5761/294/6970117419/109238/81df25f0/596d91a8N44c463be.jpg'},
								]
						},
					],
					offsetTop:[],
					scrolltop:0,
				}
			},
			methods:{
				active($event){
					$('.list .item').removeClass('active').removeClass('fadeInLeft')
					$($event.target).parent().addClass('active').addClass('fadeInLeft')

				}
			},
			mounted:function(){
				$('.list .item').eq(0).addClass('active')
				$('.left').height($(window).height()-100)
				$('.right').height($(window).height()-100)
				this.scrollbox=new BScroll(document.querySelector('.left'), {
			        click:true,
			        bounceTime:700,
			        probeType:2
			    })
			    setTimeout(()=>{
			    	this.scrollbox2=new BScroll(document.querySelector('.right'), {
		            click:true,
		            bounceTime:700,
		            probeType:2
			        })
				   
				    for(var i=0;i<$('.goodsList .tit').length;i++){
				    	this.offsetTop.push($('.goodsList .tit').eq(i).offset().top-100)
				    }
				    console.log(this.offsetTop)
				   	var that=this
				    $('.leftSide .list .item').click(function(event) {
				    	var index=$('.leftSide .list .item').index(this)
				    	 that.scrollbox2.scrollToElement($('.goodsList .tit').get(index),1000)
				    });

				    this.scrollbox2.on('scroll',(pos)=>{
				    	this.scrolltop=Math.abs(Math.floor(pos.y))
				    	for(var i=0;i<this.offsetTop.length;i++){
				    		console.log(this.offsetTop[i]+'-------'+this.scrolltop+'--------'+this.offsetTop[i+1])
				    		if(!this.offsetTop[i+1] || (this.scrolltop>=this.offsetTop[i] && this.scrolltop<=this.offsetTop[i+1])){
				    			$('.leftSide .list .item').removeClass('active')
			    				$('.leftSide .list .item').eq(i).addClass('active')
			    				break;
				    		}

				    	}
					
				    });
			    },2000)
			
			
			}
	}
</script>
<style lang='stylus' scoped>
#all
	position relative
	background #EFEFEF
	

.left
	width 33.33%
	float left
	position relative
	overflow hidden
	background #fff

.right
	width 66.67%
	float right
	background #fff
	
.list
	.item
		p
			width 100%
			background #EFEFEF
			padding 30px 0
			font-size 15px
	.item.active
		p
			background #fff
			border-left 5px solid #333
			padding-left -5px
.goodsList
	.tit 
		font-size 16px
		height 50px
		line-height 50px
	.item
		padding 10px 0
		p
			font-size 14px
			height 30px
			line-height 30px
		img
			max-width 100%

</style>