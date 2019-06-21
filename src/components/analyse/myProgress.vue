<template>
	<div class="wrap">
		<div class="progressBar" id="progressBar">
			<div class="realProgress" v-bind:style="{ 'width' : leftData +'px'}"></div>
		</div>
		<span class="score_txt">{{nowDataNew}}%</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props: {
			nowData:'',
			max:''
		},
		data(){
			return{
				leftData:''
			}
		},
		computed:{
			nowDataNew(){
				return this.nowData
			}
		},
		mounted(){
			let progressBarId = document.getElementById('progressBar');
			let progressBarWidth = progressBarId.offsetWidth || progressBarId.clientWidth;
			this.leftData = (this.nowDataNew/this.max)*progressBarWidth;
		},
		methods:{

		}
	}
</script>
<style lang="less" scoped>
	.wrap{
		width:100%;
		display: -webkit-flex;
		display: flex;
	}
	.progressBar{
		position: relative;
		width:calc(100% - 60px);
		height:15px;
		background-color:rgba(215, 215, 215, 1);
		margin-left:3%;
	}
	.realProgress{
		position: absolute;
		background-color:rgb(255,102,0);
		left:0;
		top:0;
		height:15px;
		transition: all 0.3;
	}
	.score_txt{
		width:60px;
		color:#fff;
		font-size:0.8vw;
		height: 15px;
    	line-height: 15px;
	}
</style>