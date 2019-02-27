<!--<template>-->
  <!--<div>-->
    <!--<div class="test">-->
    <!--<div class="test__top">-->
      <!--<div class="avatar">-->
        <!--<img src="~assets/img/cases-list/default-avatar.png" alt="avatar">-->
      <!--</div>-->
      <!--<div class="name">-->
        <!--<h4><strong>{{obj.username}}</strong></h4>-->
      <!--</div>-->
      <!--<div class="date">-->
        <!--<h4>{{obj.datetime}}</h4>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="test__main">-->
      <!--<div class="main&#45;&#45;text">-->
        <!--<p>{{obj.comment}}</p>-->
      <!--</div>-->
      <!--<div class="main&#45;&#45;button" >-->
        <!--<a href="javascript:;" @click="openTextareaComment">Reply</a>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
    <!--<transition name="fade" class="fade">-->
      <!--<div v-if="textareaopen" :class="['textarea-comment', { textareaopen }]">-->
        <!--<s-textarea v-model="input" rows="3" />-->
        <!--<div class="post-as-block flex flex-end">-->


          <!--<s-button v-if="isLogin" @click="postComment(obj.id)" animation="pulse" class="reply-btn s-background_grey s-color_sapphire">-->
            <!--Post as {{obj.username}}-->
          <!--</s-button>-->

          <!--<s-button v-else @click="showModalReg" animation="pulse" class="reply-btn s-background_grey s-color_sapphire">-->
            <!--Post-->
          <!--</s-button>-->


        <!--</div>-->
      <!--</div>-->
    <!--</transition>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import axios from 'axios'-->


<!--const API_POST_COMMENT = '/api/v1/create/cases/'-->

<!--export default {-->
	<!--name: "FooterCommentsStyles",-->
  <!--props: ['obj', "postId" ],-->
  <!--data() {-->
		<!--return {-->
			<!--textareaopen: false,-->
      <!--input:'',-->
    <!--}-->
  <!--},-->
	<!--computed: {-->
		<!--isLogin() {-->
			<!--return this.$store.state.user.login-->
		<!--}-->
	<!--},-->
  <!--methods: {-->
	  <!--reply(id, user) {-->
		  <!--this.$emit('choose', id, user)-->
	  <!--},-->
	  <!--openTextareaComment() {-->
		  <!--this.textareaopen = !this.textareaopen-->
		  <!--console.log(this.textareaopen)-->
	  <!--},-->
	  <!--postComment(parentId){-->
		  <!--if (this.input.trim()){-->
			  <!--console.log(parentId)-->
			  <!--let config = {-->
				  <!--headers: {-->
					  <!--'Content-Type': 'multipart/form-data'-->
				  <!--}-->
			  <!--}-->

			  <!--let data = {-->
				  <!--comment: this.input.trim(),-->
				  <!--parent: parentId-->
			  <!--}-->
        <!--console.log(this.postId)-->
			  <!--axios.post(`${API_POST_COMMENT}${this.postId}/comments`, data, config).then((resp) => {-->
				  <!--if (!resp.data.error){-->
					  <!--console.log('comment success')-->
					  <!--this.textareaopen = false-->
					  <!--this.$store.dispatch('getComment/fetch')-->
				  <!--}else{-->

				  <!--}-->
			  <!--})-->
		  <!--}-->
	  <!--},-->
	  <!--showModalReg() {-->
		  <!--this.$store.commit('template/SET_AUTH_DIALOG', true)-->
	  <!--},-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->

<!--.test {-->
  <!--background            : #ffffff;-->
  <!--color                 : #093547;-->
  <!--padding               : 25px 20px 40px 20px;-->
  <!-- -webkit-border-radius : 20px;-->
  <!-- -moz-border-radius    : 20px;-->
  <!--border-radius         : 20px;-->
  <!--margin-bottom         : 12px;-->
  <!--&__top {-->
    <!--display         : flex;-->
    <!--justify-content : flex-start;-->
    <!--align-items     : center;-->
    <!--flex-wrap       : wrap;-->
    <!--.avatar, .name, .date {-->
      <!--margin-right : 20px;-->
    <!--}-->
    <!--.avatar {-->
      <!--img {-->
        <!--min-width  : 70px;-->
        <!--min-height : 70px;-->
        <!--width  : 70px;-->
        <!--height : 70px;-->
        <!-- -webkit-border-radius : 50%;-->
        <!-- -moz-border-radius    : 50%;-->
        <!--border-radius         : 50%;-->
      <!--}-->
    <!--}-->
    <!--.name {-->
      <!--h4 {-->
        <!--font-size   : 14px;-->
        <!--line-height : 30px;-->
        <!--font-weight : bold;-->
      <!--}-->
    <!--}-->
    <!--.date {-->
      <!--h4 {-->
        <!--font-size   : 14px;-->
        <!--line-height : 24px;-->
        <!--color       : #b0b5c0;-->
        <!--font-weight : 400;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--&__main {-->
    <!--display         : flex;-->
    <!--flex-direction : column;-->
    <!--justify-content : space-between;-->
    <!--align-items     : flex-start;-->

    <!--.main&#45;&#45;text {-->
      <!--font-size   : 14px;-->
      <!--line-height : 24px;-->
      <!--text-align : left;-->
      <!--width : 75%;-->
      <!--margin-left : 50px;-->
    <!--}-->
    <!--.main&#45;&#45;button {-->
      <!--align-self : flex-end;-->
      <!--min-width : 100px;-->
      <!--margin-left : 50px;-->
      <!--a {-->
        <!--font-size             : 14px;-->
        <!--line-height           : 40px;-->
        <!--background            : #ecf0f6;-->
        <!-- -webkit-border-radius : 5px;-->
        <!-- -moz-border-radius    : 5px;-->
        <!--border-radius         : 10px;-->
        <!--padding               : 10px 30px;-->
        <!--text-decoration       : none;-->
        <!--color                 : #093547;-->
        <!--font-weight           : bold;-->
      <!--}-->
    <!--}-->

  <!--}-->
<!--}-->
<!--.fade-enter-active, .fade-leave-active {-->
  <!--transition: opacity .5s;-->
<!--}-->
<!--.fade-enter, .fade-leave-to{-->
  <!--opacity: 0;-->
<!--}-->
<!--.textarea-comment {-->
  <!--margin-left : 10%;-->
  <!--margin-top : 10px;-->
<!--}-->
<!--</style>-->