import axios from 'axios'

const API_ARTICLES = 'https://d.semalt.com/api/v1/get/client/cases/'

function getPage() {
	return 1
}

export const state = () => ({
	articles: {},
	pagination: {
		current: 1,
		totalPages: 0,
	},
	categories: [],


	// TODO


})

export const mutations = {
	SET_ARTICLES (state, data) {
		state.articles = data
	},
	SET_PAGINATION (state, data) {
		state.pagination = data
	},
	SET_CATEGORIES (state, data) {
		state.categories = data
	},
}

export const actions = {
	async fetchPaginAndArticles ({ commit, state, query }, data)  {

		console.log(data)

		const { data: articles } = await axios.get(API_ARTICLES, { params: data })

		if (typeof(articles) === 'object' && articles !== null) {
			await commit ('SET_CATEGORIES', articles.result.categories)
			await commit('SET_ARTICLES', articles.result.articles)
			await commit('SET_PAGINATION', { ...articles.result.pagination, totalPages: Number(state.total) })
		}
	}
}
