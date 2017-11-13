<template>
	<div class="brandMore">
		
		<div>
			<div class="list animated fadeInUp" v-for='list in brandData' :key='list.tit'>
				<div class="tit"><h3>{{list.tit}}</h3></div>
				<div class="item">
					<div v-for='item in list.data' :key='item.title' class="">
						<Row>
							<Col span='20'>
								<span>{{item.title}}</span>
							</Col>
							<Col span='4'  >
								<span><img :src="item.src" alt=""></span>
							</Col>
						</Row>	
				    </div>
				</div>
			</div>
			<div style='height:55px'></div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		name:'',
		data(){
			return {
				brandData:[
				{
					tit:'A',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'B',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'C',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'D',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'E',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'F',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				},{
					tit:'G',data:[
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Aline',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},
					{title:'Adidas',src:'https://img.alicdn.com/bao/uploaded/TB10tACIVXXXXXWaXXXSutbFXXX.jpg'},
					{title:'Athena ProcopiouAthena',src:'https://img.alicdn.com/bao/uploaded/TB1CnnfJpXXXXcPXpXXSutbFXXX.jpg'},
					{title:'Artesano',src:'https://img.alicdn.com/bao/uploaded/TB1PhHOKXXXXXccXFXXSutbFXXX.jpg'},]
				}]
			}
		},
		mounted:function(){
			$('.brandMore').height($(window).height()-100)
			this.scrollBox=new BScroll(document.querySelector('.brandMore'), {
                click:true,
                bounceTime:300,
            })
		}
	}
</script>
<style lang='stylus' scoped>
	.brandMore
		
		.tit
			height 50px 
			line-height 50px
			font-size 18px
			background #efefef
			h3
				padding 0 20px
				text-align left
		.item 
			div
				height 40px
				line-height 40px
				text-align left
				padding 0 10px
				font-size 14px
				border-bottom 1px solid #efefef
				img
					max-width 100%

</style>