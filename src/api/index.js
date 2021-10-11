import axios from 'axios'

function getMovies() {
	return axios.get(
		'/v1/search/movie.json',
		{
			params: { query: '어벤져스' },
			headers: {
				'X-Naver-Client-Id': '5wLUPTsBYSuIfYEsNQ04',
				'X-Naver-Client-Secret': 'y6D0b3Is0a'
			}
		},
		{ withCredentials: true }
	)
}

export { getMovies }
