<template>
	<div id='addAddress'>
		<div class="navtit">
			<Row>
				<Col span=2><span @click='back'>	<Icon size=20 type="chevron-left" ></Icon></span></Col>
				<Col span=20>新增收货地址</Col>
				<Col span=2><span class="reg"></span></Col>
			</Row>	
		</div>
		<div class="formAddress">
			<form action="">
				<Row>
					<Col span=24 class='item'> <Input v-model="user" placeholder="收货人姓名" ></Input></Col>
					<Col span=24 class='item'> <Input v-model="tel" placeholder="手机号码" ></Input></Col>
					<Col span=24 class='item'>
						<Col span=8>
							<Select v-model="model1"  placeholder='省'>
						        <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
					    </Col>
					    <Col span=8>
							<Select v-model="model1"  placeholder='市'>
						        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
					    </Col>
					    <Col span=8>
							<Select v-model="model1"  placeholder='县区'>
						        <Option v-for="item in areaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						    </Select>
					    </Col>
					</Col>
					<Col span=24 class='item'>
						<Select v-model="model2"  placeholder='街道'>
					        <Option v-for="item in streetList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					    </Select>
					</Col>
					<Col span=24 class='item'><Input v-model="email" placeholder="邮政编码" ></Input></Col>
					<Col span=24 class='item'>
						<Input v-model="value6" type="textarea" :rows="4" placeholder="详细地址"></Input>
					</Col>
					<Col span=24 class='item btn'><Button type="primary">保存</Button></Col>
					
				</Row>
			</form>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'addAddress',
		data(){
			return {
				provinceList: [
		                    {
		                        value: 'beijing',
		                        label: '北京市'
		                    },
		                    {
		                        value: 'shanghai',
		                        label: '上海市'
		                    },
		                    {
		                        value: 'shenzhen',
		                        label: '深圳市'
		                    },
		                    {
		                        value: 'hangzhou',
		                        label: '杭州市'
		                    },
		                    {
		                        value: 'nanjing',
		                        label: '南京市'
		                    },
		                    {
		                        value: 'chongqing',
		                        label: '重庆市'
		                    }
		                ],
		        cityList: [
		                    {
		                        value: 'beijing',
		                        label: '郑州市'
		                    },
		                    {
		                        value: 'shanghai',
		                        label: '杭州市'
		                    },
		                    {
		                        value: 'shenzhen',
		                        label: '石家庄市'
		                    },
		                    {
		                        value: 'hangzhou',
		                        label: '济南市'
		                    },
		                    {
		                        value: 'nanjing',
		                        label: '长春市'
		                    },
		                    {
		                        value: 'chongqing',
		                        label: '武汉市'
		                    }
		                ],
		        areaList: [
		                    {
		                        value: 'beijing',
		                        label: '金水区'
		                    },
		                    {
		                        value: 'shanghai',
		                        label: '中原区'
		                    },
		                    {
		                        value: 'shenzhen',
		                        label: '惠济区'
		                    },
		                    {
		                        value: 'hangzhou',
		                        label: '郑东新区'
		                    },
		                    {
		                        value: 'nanjing',
		                        label: '高新区'
		                    },
		                    {
		                        value: 'chongqing',
		                        label: '管城区'
		                    }
		                ],
		        streetList: [
		                    {
		                        value: 'beijing',
		                        label: '金水路未来路'
		                    },
		                    {
		                        value: 'shanghai',
		                        label: '玉凤路'
		                    },
		                    {
		                        value: 'shenzhen',
		                        label: '花园路'
		                    },
		                    {
		                        value: 'hangzhou',
		                        label: '二七路'
		                    },
		                    {
		                        value: 'nanjing',
		                        label: '文化路'
		                    },
		                    {
		                        value: 'chongqing',
		                        label: '东风路'
		                    }
		                ],
                model1: '',
                model2:''
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
	.formAddress .ivu-input{ border:0; }
	.formAddress .ivu-select-selection{ border:0; text-align: left; }
	.item .ivu-btn { width:100%; border-radius: 0;height:  50px; font-size:16px; }
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
.formAddress
	padding-top 60px
	.item
		padding 10px
		border-bottom 1px solid #efefef
	.btn
		border-bottom 0


	
</style>