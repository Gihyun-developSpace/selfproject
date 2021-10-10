<template>
	<div>hi</div>
</template>

<script>
import axios from 'axios'

export default {
	methods: {
		async home() {
			const res = await axios.get('/api/v1/search/movie.json', {
				params: { query: `page`, display: 20 },
				headers: {
					'X-Naver-Client-Id': '5wLUPTsBYSuIfYEsNQ04',
					'X-Naver-Client-Secret': 'y6D0b3Is0a'
				}
			})

			console.log(res)
		}
	},

	created() {
		this.home()
	}
}
</script>

<style lang="scss" scoped></style>
