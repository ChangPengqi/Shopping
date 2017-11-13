<template>	
	<div id='cart'>
			<div class="navtit">
				<span @click='back'>	<Icon type="chevron-left" class='back' ></Icon></span>
				<span class="tit">购物车</span>
			</div>
			<div class="carList">	
				<div>	
					<Row class='item' v-for='(item,index) in cartData' :key='item.tit'>
						<Col span='2'>
							<Checkbox v-model="checked" @on-change='checkOne'></Checkbox>
						</Col>
						<Col span='22'>
							<Row>
								<Col span='8'><img src="https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg	" alt=""></Col>
								<Col span='16'>
									<Row>
										<Col span='24'>
											<p class="tit">{{item.tit}}</p>
											<p class="des">
												颜色：<span>{{item.color}}</span>
												尺寸：</Icon><span>{{item.size}}</span>
											</p>
											
										</Col>
										<Col span='12'>
											<p class="price">￥{{item.price}}</p>
										</Col>
										<Col span='12'>
											<Row>	
												<Col span='8'><Button type="ghost" shape="circle" icon="ios-plus-empty"></Button></Col>
												<Col span='8'><Input style='text-align:center' v-model="value" placeholder="" 
												 ></Input>	</Col>
												<Col span='8'><Button type="ghost" shape="circle" icon="ios-minus-empty"></Button></Col>
											</Row>
										</Col>
										
									</Row>
									
								</Col>
										
							</Row>
						</Col>
						<Col span='24'>
							<p class="edit">
								<span style='display:inline-block' @click='edit'><Icon style='margin:0 5px; position:relative; top:2px' size=22 type="ios-compose-outline"></Icon>修改</span>
								<span  style='display:inline-block' @click='trash'><Icon style='margin:0 5px;position:relative; top:1px' size=22 type="ios-trash-outline"></Icon>删除</span>
							</p>
						</Col>
					</Row>
					<div style='height:140px'>	</div>
				</div>
			</div>
			<div class="balance">
				<Row>
					<Col span=4 class='all'>
						<Checkbox v-model="checkall" @on-change='checkAll'> 全选</Checkbox>
					</Col>
					<Col span=11 >
						<p class="balanAll">合计：<span class="price">￥3000.00</span>	</p>
						<p class="countAll">总额：<span>￥3000.00</span> 减免：<span>￥50.00</span>	</p>
					</Col>
					<Col span=9>
						<Button type="primary" class='blanBtn'>结算</Button>
					</Col>

				</Row>
			</div>
			<div class="footer">
					<foot></foot>	
			</div>
			<Modal class='delmodal' v-model="modal" width="360">
		        <p slot="header" style="color:#f60;text-align:center">
		            <Icon size='20' type="information-circled"></Icon>
		            <span>删除确认</span>
		        </p>
		        <div style="text-align:center; font-size:14px">
		            <p>删除后，您将会重新购买商品！</p>
		            <p>是否继续删除？</p>
		        </div>
		        <div slot="footer">
		            <Button type="error" size="large" long  @click="del">删除</Button>
		        </div>
		    </Modal>
		    <Modal class='modebuy'
					  	ok-text='确定'
					  	cancel-text=''
				        v-model="modal2"
				        >
				        <div class="content">
				        	<div class="tit" >
				        		<Row>
				        			<Col span='6'>
				        				<img src="https://img.alicdn.com/imgextra/i1/1600206069649709289/TB254CGumFjpuFjSspbXXXagVXa_!!0-saturn_solar.jpg_220x220.jpg" alt="" width='80'>
				        			</Col>
				        			<Col span='16'>
				        				<div class="t_right">
							        		<p>Alexander Wang/亚历山大·王 连衣裙 </p>
							        		<p class="price"><span class="cur">￥2499.00</span><span class="old">￥3000.00</span></p>
						        		</div>
				        			</Col>
				        		</Row>
				       	
				        		
				        	</div>
				        	<div class="size">
				        		<div>
				        			<p>颜色</p>
				        			<Row>
				        				<Col span='5' v-for='(item,index) in colors' :key='index'>
				        				<Button :type="BtnType" @click='changeBtn1(index)' :class="[item.isactive?'active':'']" >{{item.color}}</Button></Col>
				        			</Row>
				        		</div>
				        		<div>
				        			<p>尺寸</p>
				        			<Row>
				        				<Col span='4' v-for='(item,index) in sizes' :key='index'>
				        				<Button :type="BtnType" @click='changeBtn2(index)' :class="[item.isactive?'active':'']">{{item.size}} </Button></Col>			
				        			</Row>
				        		</div>
				        		
				        	</div>
				        	<div class="num">
				        		
				        			<Row>
				        				<Col span='4' >数量</Col>
				        				<Col span='10'  offset="10">
				        					<Row class='operate'>
				        						<Col span='8'>
				        						<Button type="primary"icon="ios-minus-empty" @click='minus'></Button>
				        						</Col>
				        						<Col span='8'><Input v-model="editvalue" ></Input></Col>
				        						<Col span='8'  >
				        						<Button type="primary"icon="ios-plus-empty" @click='plus'></Button>
				        						</Col>
				        					</Row>
				        				</Col>
				        				
				        			</Row>
				        	</div>
				        </div>
			</Modal>	
	</div>
</template>
<script>
import Bottom from '../Bottom/Bottom'
import BScroll from 'better-scroll'
		export default{
			name:'cart',
			components:{
				'foot':Bottom
			},
			data(){
				return {
					checked:false,
					checkall:false,
					value:1,
					modal:false,
					modal2:false,
					BtnType:'ghost',
					colors:[
								{color:'Red',isactive:false},
								{color:'Blue',isactive:false},
								{color:'Black',isactive:false},
								{color:'Pink',isactive:false}
							],
					sizes:[
								{size:'S',isactive:false},
								{size:'M',isactive:false},
								{size:'L',isactive:false},
								{size:'XL',isactive:false},
								{size:'XXL',isactive:false}
							],
					editvalue:1,
					cartData:[
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
								{
									tit:'Alexander Wang/亚历山大·王 女装 女式连衣裙 Q00701900 One Color US 2 = XS',
									color:'RED',
									size:'XL',
									price:'1299.00',
									num:1

								},
							]
				}
			},
			methods:{
				back(){
					this.$router.go(-1)
				},
				trash(){
					this.modal=true
				},
				del(){
					this.modal=false
				},
				edit(){
					this.modal2=true
					var w_h=$(window).height()				
					setTimeout(()=>{
						var h=$('.modebuy  .ivu-modal').height()					
						$('.modebuy .ivu-modal').css('top',(w_h-h-22))
					},100)
				},
				minus(){
					if(this.editvalue<=0){
						this.editvalue==0
					}else{
						this.editvalue-=1
					}
				},
				plus(){
					this.editvalue++
				},
				changeBtn1(index){
					for(var i=0;i<this.colors.length;i++){
						this.colors[i].isactive=false	
					}
					this.colors[index].isactive=!this.colors[index].isactive
				},
				changeBtn2(index){
					for(var i=0;i<this.sizes.length;i++){
						this.sizes[i].isactive=false	
					}
					this.sizes[index].isactive=!this.sizes[index].isactive
				},
				checkOne(index){
					console.log(this.checked)

				},
				checkAll(){
					if(this.checkall){	
						this.checked=true
					}else{
						this.checked=false
					}
					
				}
			},
			mounted:function(){
				$('.carList').height($(window).height()-100)
				setTimeout(()=>{
					this.scrollbox=new BScroll(document.querySelector('.carList'), {
				        click:true,
				        bounceTime:700,
				        probeType:2
			    	})	
				},200)
			}
		}	
</script>
<style>
	.modebuy .ivu-modal{
		margin:0;
		
		
	}
	.modebuy .ivu-modal-mask{
		top:0;
	}
	.modebuy .ivu-modal-content{
		width: 100%;
		border-radius: 0;
		
	}
	.modebuy .ivu-modal-footer{
		padding: 0
	}
	.modebuy .ivu-modal-footer button{
		display: none
	}
	.modebuy .ivu-modal-footer button + button{
		width:100%;
		display: block;
		padding:15px 16px;
		margin-left: 0;
		border-radius: 0;
		font-size:  16px
	}
	.modebuy .ivu-modal-close{
		z-index: 99
	}
	.ivu-btn.active{
		background: #000;
		color:#fff;
	}	
	.all  .ivu-checkbox-wrapper{
		font-size:  14px;

	}
	.delmodal .ivu-modal{margin-top: 30%}
	.delmodal .ivu-modal-mask{ top:0;}
	.delmodal .ivu-modal-footer{ display: block }
</style>
<style lang='stylus' scoped>
.navtit
	position fixed
	width 100%
	height 50px
	line-height 50px
	text-align center
	border-bottom 1px solid #ccc
	background #fff
	z-index 100
	.tit
		font-size 17px

	.back
		position absolute
		left 10px
		font-size 20px
		top 15px
.carList
	padding 50px 0
	background #f1f1f1
	.item
		padding 10px
		background #fff
		border-bottom 1px solid #dedede
		margin-bottom 10px
		img 
			max-width 100%
		.tit
			font-size 15px
			text-align left
		.des
			color #ccc
			text-align left
			height 30px
			line-height 30px
			span
				padding 0 15px

		.price
			font-size 18px
			color #d43737 
			text-align left
			height 32px
			line-height 32px
		.all
			label
				font-size 14px
		.edit
			border-top 1px solid #efefef
			height 20px 
			line-height 20px
			text-align right
			padding-right 10px
			margin-top 10px
			padding-top 5px
			margin-bottom 5px
			color #999
.balance
	position fixed
	bottom 43px
	background #fbfbfb
	height 55px
	line-height 55px
	width 100%
	.balanAll
		height 30px
		line-height 30px
		font-size 16px
		text-align left
		.price
			color #d43737 
	.countAll	
		height 25px
		line-height 25px
		text-align left
	.blanBtn
			width 100%
			height 55px
			
			border-radius 0
			font-size 16px
			padding 0
					
.content
	.tit
		border-bottom 1px solid #e9eaec
		img
			margin-top -30px
			border-radius 5px
			display block 
			float left
			margin-right 20px
		.t_right
			float right
			p
				font-size 14px
				
			.price
				height 40px
				line-height 40px
				text-align left
				.cur
					color #d43737
					font-size 18px
					font-weight bold
					margin-right 10px
				.old
					text-decoration line-through
					font-size 14px
	.size
		padding-bottom 10px
		border-bottom 1px solid #e9eaec
		p
			font-size 14px
			height 40px
			line-height 40px
	.num
		font-size 14px
		height 80px
		line-height 80px
		.operate
			text-align center
</style>