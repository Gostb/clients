<template>
  <div class="container-fluid no-gutter tilds">
    <cases-header />
    <cases-background />
  </div>
</template>

<script>
import CasesHeader from '../components/CasesHeader'
import CasesBackground from '../components/CasesBackground'

export default {
  layout: 'landing',
  components: {
    CasesHeader,
    CasesBackground
  },
  // data() {
  //   return {}
  // },
  async asyncData({ store, query, params }) {
    // console.log('--->', query, params)

    // store.commit('blog/CLEAR_ALL_DATA')
    // const page = query.page || 1
    // await store.dispatch('blog/fetchPaginAndArticles', { page })
    // return {
    // 	page
    // }
	  await store.dispatch('blog/fetchPaginAndArticles', { page: query.page || 1 })
    return {}
  }
  // mounted() {
  // console.log(this.$store.state.blog.articles)
  // },
  // methods: {
  // 	fetchPage() {
  // 		this.$store.dispatch('blog/fetchPaginAndArticles', this.page)
  // 	}
  // },
}
</script>

<style lang="less" scoped>
.tilds {
  background: url("~assets/img/cases-backround/tilds.png") repeat;
}
</style>
