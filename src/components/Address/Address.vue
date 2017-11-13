<template>
	<div id='address'>
		<div class="navtit">
			<Row>
				<Col span=2><span @click='back'>	<Icon size=20 type="chevron-left" ></Icon></span></Col>
				<Col span=20>选择地址</Col>
				<Col span=2><span class="reg"></span></Col>
			</Row>	
		</div>
		<div class="main">
			<div>
				<div class="list">
					<Row class='item' v-for='item in addressData' :key='item.name'>
						<Col span=20>
							<Col span=12 class='name'>{{item.name}}</Col>
							<Col span=12 class='tel'>{{item.tel}}</Col>
							<Col span=24 class='address'><span class="default" v-if='item.isDefault'>[{{item.isDefault}}]</span><span>{{item.address}}</span></Col>
						</Col>
						<Col span=4 class='checked'>
							<Checkbox v-model="single"></Checkbox>
						</Col>
					</Row>
				</div>
			</div>
		</div>
		<div class='add'>
			<Row>
				<Col span=24><Button type="primary" icon="android-add" @click='addAddress'>新增收货地址</Button></Col>
			</Row>			
		</div>
	</div>
</template>
<script>
	export default{
		name:'address',
		data(){
			return {
				single:false,
				addressData:[{
					name:'Jack',
					tel:'13645635566',
					address:'河南省郑州市金水区未来大道河南省郑州市金水区未来大道河南省郑州市金水区未来大道',
					isDefault:'默认地址'
				},{
					name:'Tome',
					tel:'13645635566',
					address:'河南省郑州市金水区未来大道河南省郑州市金水区未来大道河南省郑州市金水区未来大道',
					isDefault:''
				},{
					name:'Tome',
					tel:'13645635566',
					address:'河南省郑州市金水区未来大道河南省郑州市金水区未来大道河南省郑州市金水区未来大道',
					isDefault:''
				},{
					name:'Tome',
					tel:'13645635566',
					address:'河南省郑州市金水区未来大道河南省郑州市金水区未来大道河南省郑州市金水区未来大道',
					isDefault:''
				},{
					name:'Tome',
					tel:'13645635566',
					address:'河南省郑州市金水区未来大道河南省郑州市金水区未来大道河南省郑州市金水区未来大道',
					isDefault:''
				}]
			}
		},
		methods:{
			addAddress(){
				this.$router.push({path:'/Address/addAddress'})
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.checked { text-align:  right;padding-top:25px}
	.add .ivu-btn{ width: 100%; border-radius: 0; height: 50px; font-size: 16px }
 </style>
<style lang='stylus' scoped>
.navtit
	background #fff
	position fixed
	width 100%
	height 50px 
	line-height 50px
	font-size 18px
	border-bottom 1px solid #dedede
.main
	padding-top 50px
	.item
		padding 10px
		border-bottom 10px solid #dedede
		font-size 16px
		.name
			text-align left
		.tel
			text-align right
		.address
			text-align left
			font-size 14px
			
			line-height 24px
			.default
				font-size 12px
				color #d43737
				margin-right 10px
.add
	width 100%
	position fixed
	bottom 0
</style>