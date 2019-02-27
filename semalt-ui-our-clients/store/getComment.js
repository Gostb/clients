import axios from 'axios'

export const state = () => ({
	comments: {},
	totalCount: 0
})

export const mutations = {
	SET_COMMENTS(state, data) {
		state.comments = data
	},
	SET_TOTAL_COUNT(state, data) {
		state.totalCount = data
	}
}

export const action = {
	fetch({ commit }, id) {
		axios.get(`/api/v1/get/cases/${this.result.id}/comments/`)
				.then((resp) => {
					if (!resp.data.error) {
						commit('SET_COMMENTS', resp.data.result.comments)
						commit('SET_TOTAL_COUNT', resp.data.result.total_count)
					}
				})
	}
}