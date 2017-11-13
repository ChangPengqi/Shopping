<template>
<transition enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
<div class="hot">
	<div>
		
		<div class="list">
			<Row class='item animated fadeInUp' v-for='list in hotData' :key='list.tit'>
				<Col span='24'><Badge class='tag' :count="list.tagTop"></Badge></Col>
				<Col span='24'><img :src="list.src" alt=""></Col>
				<Col span='24'><h3>{{list.tit}}</h3></Col>
				<Col span='8'><p class="tagbot">标签：{{list.tagBot}}</p></Col>
				<Col span='10' offset='6' ><p class="tagbot"><Icon type="clock"></Icon><span>{{list.time}}</span><Icon type="heart"></Icon><span>关注</span></p></Col>
			</Row>
			<div style='height:55px'></div>
		</div>
	</div>
	<div v-show='loadShow' class="load" style=''>
			<div class="loader" style='width:50%; float:left; text-align:right'>
		        <div class="loader-inner line-scale-pulse-out-rapid">
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		        </div>
		    </div>
      		<p style='width:50%; float:left; text-align:left; padding-left:10px'>松开刷新</p>
    </div>
</div>
</transition>
</template>
<script>

import BScroll from 'better-scroll'
	export default{
		name:'',
		
		data(){
			return {
				hotData:[
							{
								tagTop:'经典设计',
								src:'http://img.zcool.cn/community/01f6c6596c6657a8012193a346e0ff.jpg',
								tit:'亚历山大·王(Alexander Wang) (中文名王大仁)是纽约最红最年轻的华裔设计师',
								tagBot:'经典 设计 ',
								time:'2017-08-08'
							},
							{
								tagTop:'运动潮流',
								src:'http://img.zcool.cn/community/017cd3596c74a4a8012193a30e42ee.jpg@1280w_1l_2o_100sh.jpg',
								tit:'亚历山大·王(Alexander Wang) (中文名王大仁)是纽约最红最年轻的华裔设计师',
								tagBot:'经典 设计 运动 科幻 ',
								time:'2017-08-08'
							},
							{
								tagTop:'时尚炫酷',
								src:'http://img.zcool.cn/community/018e0f554babb6000001bf7223e758.jpg',
								tit:'亚历山大·王(Alexander Wang) (中文名王大仁)是纽约最红最年轻的华裔设计师',
								tagBot:'经典 设计 ',
								time:'2017-08-08'
							},
							{
								tagTop:'轻奢出众',
								src:'http://img.zcool.cn/community/01b852553748cc000000a35ac35568jpg@1280w_1l_2o_100sh.jpg',
								tit:'亚历山大·王(Alexander Wang) (中文名王大仁)是纽约最红最年轻的华裔设计师',
								tagBot:'经典 设计 ',
								time:'2017-08-08'
							},
						],
				loadShow:false
			}
		},
		mounted:function(){
			$('.hot').height($(window).height()-100)
			this.scrollBox=new BScroll(document.querySelector('.hot'), {
                click:true,
                bounceTime:300,
                probeType:3
            })
            var that=this
            that.scrollBox.on('scroll',function(pos){
            	console.log(pos.y)
            	if(pos.y>30){
            		that.loadShow=true
            	}else{
            		that.loadShow=false
            	}
            })
		}
	}
</script>
<style>
	.hot .ivu-badge-count{
		height:  30px;
		line-height:  30px;
		padding-left: 30px;
		background: #333;
		box-shadow:none;
		

	}
	.line-scale-pulse-out-rapid > div{
		background: #333;
		height: 20px;
		width:2px;

	}

</style>
<style lang='stylus' scoped>
.hot
	background #efefef
	.list
		
		.item
			background #fff
			position relative
			
		img
			max-width 100%
		h3
			line-height 30px
			font-size 15px
			padding 0 10px
			text-align left
		.tag
			position absolute
			left -25px
			top 15px
		.tagbot

			height 50px
			line-height 50px
			font-size 14px
			color #9E9E9E
			font-weight normal
			span
				padding 5px
.load
	height:50px
	line-height:50px
	font-size:14px
	position: absolute
	width:100%
	z-index: 100
	top 0

</style>