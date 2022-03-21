
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
		photoSizeList: app.globalData.photoSizeList,
		bannerList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// wx.setNavigationBarTitle({ title: '随心证件照' })
		this.getBannerList()
		console.log(app.globalData.openid); 
	},
	//获取标题图片
	getBannerList(){
		// wx.showLoading({ title: '加载中', })
		const that = this
		const db = wx.cloud.database()
		const imageUtl = {
			'_id': 1111,
			'imgUrl' : '../../images/banner.png'
		}
		this.data.bannerList.push(imageUtl);
		db.collection('bannerList-simple').get().then(res => {
			res.data.forEach(e => {
				e.imgUrl = e.imgUrl.trim()
			});
		  that.setData({
			bannerList:res.data
		  })
		  wx.hideLoading()
		})
		console.log("111",this.data.bannerList)
	},
	// 去选择照片页面
	goNextPage (e) {
		wx.navigateTo({
			// url: '/pages/example/example?index=' + e.currentTarget.dataset.index,
			url: '/pages/preImgEdit/preImgEdit?index=' + e.currentTarget.dataset.index,
		})
	},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
		return {
			title: '免费制作证件照',
			path: '/pages/index/index',
		}
	},
	
	onShow () {
	}
})