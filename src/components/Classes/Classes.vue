<template>
	<div id='Classes'>
		 <div class="nav">
			<Row style='height:50px; line-height:50px; border-bottom:1px solid #efefef'>
		        <Col span="20" offset="1">
		        <Input v-show='searchMsg' class='inp animated fadeInLeft' v-model="value4" icon="ios-search" placeholder="搜索最热品牌和商家" @on-focus='showHistory'></Input>
		        	<p v-show='!searchMsg' class="animated fadeInLeft" style='font-size:18px'>分类{{computedIndex}}</p>
		        	 <Modal class='history'
				        v-model="history"
				        title=""
				        ok-text=''
				        cancel-text=''
				   		>
				        <Row v-for='list in hisArry' :key='list.tit'>
				        	<Col span='24' class='tit'>{{list.tit}}</Col>
				        	<Col class='item' span='6' v-for='(item,index) in list.arr'  :key='index'><Button type="ghost" @click='changeBg($event)'>{{item}}</Button></Col>
				        	
				        </Row>				
				    </Modal>
		        </Col>
		        <Col span="3" > 
		            <Button v-show='!searchMsg' @click='showSearch'  class='search animated fadeInRight' type="primary"  icon="ios-search-strong"></Button>
		            <p v-show='searchMsg' class="animated fadeInRight" style='font-size:16px; margin-top:5px; color:#ccc' @click='showSearch'>取消</p>
		        </Col>
		        <div class="tabs">
		        	<router-link to='/Classes/All'>分类</router-link>
					<router-link to='/Classes/Brand'>品牌</router-link>
					<router-link to='/Classes/Hot'>最热</router-link>
		        </div> 
	        </Row>
	       

		</div>
		
		<div class="data">
			<div class="main">
				<router-view></router-view>
			</div>
		</div>
		<div class="footer">
			<foot></foot>	
		</div>
		
		
	</div>
</template>
<script>
import Bottom from '../Bottom/Bottom'

	export default{
		name:'Classes',
		components:{
			'foot':Bottom
		},
		data(){
			return {
				hisArry:[
				{tit:'热门',arr:['运动','美妆','箱包鞋靴','夏日精选','时尚潮流','护发精品','热门彩妆','欧美轻奢']},
				{tit:'商城',arr:['美亚','日亚','6PM','ESCENTUAL','Clinique','Zappos','Ashford','拉夫劳伦','ESCENTUAL','Zappos']},
				{tit:'猜你喜欢',arr:['运动','美妆','箱包鞋靴','夏日精选','时尚潮流','护发精品','热门彩妆','欧美轻奢']},
				],
				oktxt:' adad',
				cantxt:'adad ',
				history:false,				
				searchMsg:false,
				

			}
		},
		created:function(){

		},
		computed:{
			
		},
		methods:{
			showSearch(){
				this.searchMsg=!this.searchMsg
				
			},
			showHistory(){
				this.history=true
			},
			changeBg($event){
				$('.item').children('.ivu-btn').removeClass('active')
				$($event.target).parent('.ivu-btn').addClass('active')
			}
		},
		mounted:function(){
			setTimeout(()=>{
				this.$router.push({path:"/Classes/All"})
			},0)
			

		  
			
		}

	}
</script>
<style>
	.nav .ivu-input{ border-radius: 16px; text-align: center; background:#EFEFEF;}
	.nav .inp .ivu-input-icon{ left: 20%; line-height: 50px }
	.history .ivu-modal-mask{ top: 100px }
	.history .ivu-modal{ margin:0; }
	.history .ivu-modal-content{ border-radius: 0; padding: 50px 0; padding-top: 10px}
	.history .tit{ height: 40px; line-height: 40px; text-align: center;font-size: 16px; font-weight: bold;}
	.history .hot{margin-top:15px; }
	.history .item{ margin: 5px 0 }
	.history .item .ivu-btn{ border:0; font-size: 14px; color:#9E9E9E; }
	.history .item .ivu-btn.active{ background: #333; color: #fff}
	.history .ivu-modal-footer{ display: none }
	.history .ivu-modal-close{ z-index: 100 }

</style>
<style lang='stylus' scoped>
@import "../../common/index.styl"
.nav 
	position fixed
	width 100%
	z-index 100
	height 100px
	background #fff	
	.search
		position relative
		float right
		font-size 30px
		top 4px
		right 15px
		background #fff
		color #000
		border 0
		padding 0 
.tabs
	position absolute
	top 50px
	width 100%
	height 50px
	line-height 50px
	border-bottom 1px solid #EFEFEF
	
	a
		color #9E9E9E
		font-size 15px
		margin 0 10px
		padding 15px 0
	a.router-link-active
		color #333
		border-bottom: 2px solid #333
		
	
.data
	position absolute
	width 100%
	top 100px
	z-index 1

</style>