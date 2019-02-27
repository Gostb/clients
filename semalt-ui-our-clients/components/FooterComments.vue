<!--<template>-->
  <!--<div :class="['comentaries', `deep_${deep}`]">-->
    <!--<div class="commentaries__item" v-for="(obj, index) in commentsList" :key="index">-->
      <!--<FooterCommentsStyles :obj="obj" :postId="postId" />-->
      <!--<div class="commentaries__item&#45;&#45;child" v-if="obj.children">-->
        <!--<footer-comments :postId="postId" :commentsList="obj.children" :deep="deep + 1" />-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import FooterCommentsStyles from '~/components/FooterCommentsStyles'-->

<!--export default {-->
	<!--name: "FooterComments",-->
  <!--props: ['commentsList', "deep", "postId"],-->
  <!--components: {FooterCommentsStyles},-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.commentaries {-->
  <!--&__item {-->
    <!--&&#45;&#45;child{-->
      <!--width : 80%;-->
      <!--margin-top : 10px;-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</style>-->