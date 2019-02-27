<template>
  <div class="container-fluid no-gutter">
    <!--{{ $route.params }}-->
    <cases-header />
    <div class="for-link">
      <nuxt-link :to="localePath({ name: 'index'})"><i class="fas fa-long-arrow-alt-left"></i> Back to All Cases</nuxt-link>
    </div>
    <cases-background />
  </div>
</template>

<script>
import CasesHeader from '../../components/CasesHeader'
import CasesBackground from '../../components/CasesBackground'

export default {
  components: {
    CasesHeader,
    CasesBackground
  },
  layout: 'landing',
  head: {
    title: 'Category'
  },
  async asyncData({ store, query, params }) {

    // TODO query to params
    // Pagination on init
    //

    // TODO Replace categories from params.category
	  const page = query.page || 1
	  await store.dispatch('blog/fetchPaginAndArticles', { page, categories: params.category })
	  return {
		  page
	  }
  }
}
</script>

<style lang="less" scoped>
  .for-link {
    max-width : 1400px;
    width : auto;
    margin : 0 auto;
    .nuxt-link-active {
      color: #4b79bb;
      font-size: 14px;
      line-height: 40px;
      margin-left: 35px;

      i {
        margin-right: 10px;
      }
    }
  }

</style>
