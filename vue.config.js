module.exports = {
	devServer: {
		overlay: false,
		proxy: {
			'/api': {
				target: 'https://openapi.naver.com'
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/scss/common.scss";`
			}
		}
	}
}
