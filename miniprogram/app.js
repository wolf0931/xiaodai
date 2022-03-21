//app.js
import './tools/dateFormatter'
App({
	onLaunch: function () {
		// 初始化云开发
		wx.cloud.init({
			resourceEnv: 'cloud1-7g0ah4fw07899a82',
			traceUser: true
		})
		// 新用户入库
		this.addUser()
	},

	// 新用户入库
	addUser() {
		wx.cloud.callFunction({
			name: 'addUser',
			success: res => {
				this.globalData.openid = res.result.openid
			},
			fail(err) {
				wx.showToast({
					title: '请求失败，请重试',
					icon: 'none'
				})
			}
		})
	},
	// 初始化全局数据
	globalData: {
		openid: null,
		photoSizeList: [{
				name: '一寸',
				px: '295×413 px',
				size: '25 × 35 mm',
				width: 295,
				height: 413,
				discription: '教师资格证、简历、会计职称考试、健康证等。'
			},
			{
				name: '小一寸',
				px: '260×378 px',
				size: '22 × 32 mm',
				width: 260,
				height: 378,
				discription: '驾驶证、驾照、英语AB级等。'
			},
			{
				name: '大一寸',
				px: '390×567 px',
				size: '33 × 48 mm',
				width: 390,
				height: 567,
				discription: '计算机等级、中国护照、英语四六级考试等。'
			},
			{
				name: '二寸',
				px: '413×579 px',
				size: '35 × 49 mm',
				width: 413,
				height: 579,
				discription: '养老护理员、医疗、职业药师资格证等。'
			},
			{
				name: '小二寸',
				px: '413×531 px',
				size: '33 × 45 mm',
				width: 413,
				height: 531,
				discription: '国考、国家公务员、护士资格证考试、主管护师等。'
			},
			{
				name: '大二寸',
				px: '413×626 px',
				size: '35 × 53 mm',
				width: 413,
				height: 626,
				discription: ''
			},
			// {
			// 	name: '结婚证',
			// 	px: '626x413 px',
			// 	size: '53 × 35 mm',
			// 	width: 626,
			// 	height: 413,
			// 	discription: '结婚证大二寸双人证件照。'
			// },
			// {
			// 	name: '一寸半身照',
			// 	px: '295×413 px',
			// 	size: '25 × 35 mm',
			// 	width: 295,
			// 	height: 413,
			// 	discription: ''
			// },
			// {
			// 	name: '二寸半身照',
			// 	px: '413×579 px',
			// 	size: '35 × 49 mm',
			// 	width: 413,
			// 	height: 579,
			// 	discription: ''
			// },
			// {
			// 	name: '教师资格证',
			// 	px: '295×413 px',
			// 	size: '25 × 35 mm',
			// 	width: 295,
			// 	height: 413,
			// 	discription: '教师资格证'
			// },
			// {
			// 	name: '三寸',
			// 	px: '649×991 px',
			// 	size: '55 × 84 mm',
			// 	width: 413,
			// 	height: 626,
			// 	discription: ''
			// },
			// {
			// 	name: '四寸',
			// 	px: '898×1205 px',
			// 	size: '76 × 102 mm',
			// 	width: 413,
			// 	height: 626,
			// 	discription: ''
			// },
			// {
			// 	name: '五寸',
			// 	px: '1050×1499 px',
			// 	size: '89 × 127 mm',
			// 	width: 413,
			// 	height: 626,
			// 	discription: ''
			// },
			// {
			// 	name: '简历',
			// 	px: '295×413 px',
			// 	size: '25 × 35 mm',
			// 	width: 295,
			// 	height: 413,
			// 	discription: '简历'
			// },
			// {
			// 	name: '健康证',
			// 	px: '295×413 px',
			// 	size: '25 × 35 mm',
			// 	width: 295,
			// 	height: 413,
			// 	discription: '健康证'
			// },
			
		]
	}
})