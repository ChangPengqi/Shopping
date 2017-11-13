import{Hello,Set,Login,Home,Register,Bind,Address,addAddress,GoodsList,GoodsDetail,OrderCheck,OrderDetail,Classes,All,Brand,Hot,BrandMore,Around,Cart,Center} from './asynComponents.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes=[
	{path:'/',component:Home},
	{path:'/Login',component:Login},
	{path:'/Home',component:Home},
	{path:'/Address',component:Address},
	{path:'/Address/addAddress',component:addAddress},
	{path:'/Register',component:Register},
	{path:'/Register/Bind',component:Bind},
	{path:'/Around',component:Around},
	{path:'/Cart',component:Cart},
	{path:'/Center',component:Center},
	{path:'/Center/Set',component:Set},
	{path:'/OrderCheck',component:OrderCheck},
	{path:'/OrderDetail',component:OrderDetail},
	{path:'/GoodsList',component:GoodsList},
	{path:'/GoodsList/GoodsDetail',component:GoodsDetail},
	{
		path:'/Classes',component:Classes,
		children:[
			{path:'',component:All},
			{path:'All',component:All},
			{path:'Brand',component:Brand},
			{path:'Brand/BrandMore',component:BrandMore},
			{path:'Hot',component:Hot},
		],

	},
	]
export default new VueRouter({routes});
