<template>
	<div>
		<form @submit.prevent="onsubmit">
			<input v-model="query" />
			<select v-model="genre">
				<option v-for="movieGenre in movieGenres" :key="movieGenre">
					{{ movieGenre[1] }}
				</option>
			</select>
			<select v-model="yearto">
				<option>2015</option>
				<option>2016</option>
				<option>2017</option>
				<option>2018</option>
				<option>2019</option>
				<option>2020</option>
				<option>2021</option>
			</select>
			<select v-model="yearfrom">
				<option>2015</option>
				<option>2016</option>
				<option>2017</option>
				<option>2018</option>
				<option>2019</option>
				<option>2020</option>
				<option>2021</option>
			</select>
			<button type="submit">test!</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			query: '',
			genre: '',
			yearto: '',
			yearfrom: '',
			movieGenres: [
				['드라마', '1'],
				['판타지', '2'],
				['서부', '3'],
				['공포', '4'],
				['로맨스', '5'],
				['모험', '6'],
				['스릴러', '7'],
				['느와르', '8'],
				['컬트', '9'],
				['다큐멘터리', '10'],
				['코미디', '11'],
				['가족', '12'],
				['미스터리', '13'],
				['전쟁', '14'],
				['애니메이션', '15'],
				['범죄', '16'],
				['뮤지컬', '17'],
				['SF', '18'],
				['액션', '19'],
				['무협', '20'],
				['에로', '21'],
				['서스펜스', '22'],
				['서사', '23'],
				['블랙코미디', '24'],
				['실험', '25'],
				['영화카툰', '26'],
				['영화음악', '27'],
				['영화패러디포스터', '28']
			]
		}
	},

	methods: {
		async onsubmit() {
			// const movieSet = {
			// 	query: this.query,
			// 	genre: this.genre,
			// 	yearto: this.yearto,
			// 	yearfrom: this.yearfrom
			// }
			const { data } = await axios.get(
				'https://openapi.naver.com/v1/search/movie.json',
				{
					params: { query: '어벤져스' },
					headers: {
						'X-Naver-Client-Id': '5wLUPTsBYSuIfYEsNQ04',
						'X-Naver-Client-Secret': 'y6D0b3Is0a'
					}
				}
			)
			console.log(data)
		}
	}
}
</script>

<style lang="scss" scoped></style>
