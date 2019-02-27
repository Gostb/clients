<template>
  <div class="footer">
    <div class="footer__medias">
      <!--<social-sharing-->
             <!--:url="followLink"-->
             <!--:title="this.footer.description"-->
             <!--:quote="this.footer.header"-->
             <!--hashtags="#semalt"-->
             <!--:description="this.footer.description"-->
             <!--network-tag="span"-->
             <!--inline-template>-->
        <!--<div class="footer__medias__socials">-->
          <!--<network network="facebook">-->
            <!--<div class="fb social"><i class="fab fa-facebook-f"></i></div>-->
          <!--</network>-->

          <!--<network network="twitter">-->
            <!--<div class="tw social"><i class="fab fa-twitter"></i></div>-->
      <!--</network>-->
          <!--<network network="linkedin">-->
            <!--<div class="in social"><i class="fab fa-linkedin-in"></i></div>-->
          <!--</network>-->
          <!--&lt;!&ndash;<div class="gl social"><i class="fab fa-google-plus-g"></i>0</div>&ndash;&gt;-->
          <!--<network network="pinterest">-->
            <!--<div class="pint social"><i class="fab fa-pinterest-p"></i></div>-->
          <!--</network>-->


        <!--</div>-->
      <!--</social-sharing>-->
      <div class="footer__medias__socials">
        <div class="fb social" @click="openSocial('fb')"><i class="fab fa-facebook-f"></i></div>
        <div class="tw social" @click="openSocial('tw')"><i class="fab fa-twitter"></i></div>
        <div class="in social" @click="openSocial('in')"><i class="fab fa-linkedin-in"></i></div>
        <div class="pint social" @click="openSocial('pi')"><i class="fab fa-pinterest-p"></i></div>
      </div>


      <div class="footer__medias__indicators">
        <!--<div class="shares indicator"><i class="fas fa-external-link-square-alt"></i>0 Shares</div>-->
        <div class="views indicator"><i class="fas fa-eye"></i>2284 Views</div>
        <div class="comments indicator"><i class="fas fa-comments"></i>{{ commCount }} Comments</div>
      </div>
    </div>

    <hr>

    <div class="footer__commentaries">
      <s-comments
         :comments="footer.comments"
         :cb-new-comment="onNewComment"
         :cb-check-auth="onCheckAuth"
         :cb-name="(o) => o.username"
         :cb-date="(o) => o.datetime"
         :cb-comment="(o) => o.comment"
         :title="`${commCount} Comments`" />

      <!--<div class="footer__commentaries&#45;&#45;title">-->
        <!--<h3 class="title">{{ commCount }} Comments</h3>-->
      <!--</div>-->

      <!--<footer-comments :post-id="footer.id" :commentsList="footer.comments" :deep="1" />-->

    </div>

    <!--<div class="footer__add-comment">-->
      <!--&lt;!&ndash;v-if="isLogin"&ndash;&gt;-->
      <!--<div class="footer__add-comment&#45;&#45;title">-->
        <!--<h3 class="title">Add comment:</h3>-->
      <!--</div>-->
      <!--<div class="footer__add-comment__content">-->
        <!--<div class="footer__add-comment__content&#45;&#45;avatar">-->
          <!--&lt;!&ndash;<img src="~assets/img/single-footer/avatar.png" alt="avatar">&ndash;&gt;-->
          <!--<p>You</p>-->
        <!--</div>-->
        <!--<div class="footer__add-comment__content&#45;&#45;input">-->
          <!--<s-textarea @click="areLogin" placeholder="Add comment" v-model="input" rows="3"/>-->
        <!--</div>-->
      <!--</div>-->
      <!--<s-button animation="pulse" @click="postMainComment(0)" class="button">Add comment</s-button>-->
    <!--</div>-->
  </div>
</template>

<script>
import SocialSharing from 'vue-social-sharing';

import axios from 'axios'

const API_POST_COMMENT = '/api/v1/create/cases/'

export default {
	name: "SingleCaseFooter",
	props: ['footer'],
	data() {
		return {
			input: '',
			result: {},
			comments: {},
      followLink: process.browser ? location.href : '',
		}
	},
	computed: {
		isLogin() {
			return this.$store.state.user.login
		},
    commCount() {
			return Object.keys(this.footer.comments).length
    }

	},

	methods: {
		/**
		 * This function will never been call, when Function in cb-check-auth props return false.
		 *
		 * @param {String} message - from textarea
		 * @param {Object} comment - current object to answer (null - not answer)
		 * @param {Number} parent - answer to comment id (0 - not answer)
		 * @param {Function} done - call function - clear input, close textarea on answer
		 */
		onNewComment(message, comment, parent, done) {
			// console.log(message, comment, parent)

			axios.post(`${API_POST_COMMENT}${this.footer.id}/comments`, {
				comment: message,
				parent
			}, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
				.then(resp => {
					if (resp.data.error) {
						return
					}

					if (parent && !comment.children) {
						this.$set(comment, 'children', {})
					}

					Object.entries(resp.data.result.affected_rows).forEach(([key, val]) => {
						this.$set(parent ? comment.children : this.comments, key, val)
					})

					done()
				})
		},
		onCheckAuth() {
			if (!this.isLogin) {
				this.$store.commit('template/SET_AUTH_DIALOG', true)
				return false
			}

			return true
		},
		openModalWindow(path, popupSize) {
			if (!popupSize) {
				popupSize = {};
			}
			let w = popupSize.w || 650;
			let h = popupSize.h || 500;

			let l = window.screenX + (window.outerWidth - w) / 2;
			let t = window.screenY + (window.outerHeight - h) / 2;
			let winProps = 'width=' + w + ',height=' + h + ',left=' + l + ',top=' + t + ',status=no,resizable=yes,toolbar=no,menubar=no,scrollbars=yes';
			let win = window.open(path, 'sharePopup' + Math.random(), winProps);
			return win;


			// SHARE_LINKS: https://gist.github.com/apisandipas/74d396c7853b93f5f861091a2135d527
		},
		openSocial(social) {
			// const asd = 'https://semalt.com/img/og-logo-big.png'

			let titleVsDescription = encodeURIComponent(this.footer.title + " - " + this.footer.description.substring(0, 155))

			switch (social) {
				case 'fb':
					let fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`
					this.openModalWindow(fbUrl)
					break;
				case 'tw':
					let twUrl = `https://twitter.com/intent/tweet?text=Semalt+Blog&url=${encodeURIComponent(location.href)}`
					this.openModalWindow(twUrl)
					break;

				case 'in':
					let inUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(location.href)}&title=${titleVsDescription}`
					this.openModalWindow(inUrl)
					break;

				case 'pi':
					let piUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(location.href)}&media=${encodeURIComponent(this.footer.logo || this.footer.prew_logo || this.logo)}&description=${titleVsDescription}`
					this.openModalWindow(piUrl)
					break;
			}
		},
		areLogin() {
			if(!this.isLogged) {
				this.$store.commit('template/SET_AUTH_DIALOG', true)
			}
		},
		// postMainComment(id) {
		// 	if (this.isLogin && this.input.trim()) {
		// 		let config = {
		// 			headers: {
		// 				'Content-Type': 'multipart/form-data'
		// 			}
		// 		}
		// 		let data = {
		// 			comment: this.input.trim(),
		// 			parent: id
		// 		}
		// 		axios.post(`${API_POST_COMMENT}${this.footer.id}/comments`, data, config)
		// 			.then((resp) => {
		// 				if (!resp.data.error) {
		// 					console.log(resp.data.result.affected_rows)
		// 					Object.entries(resp.data.result.affected_rows).forEach(([key, val]) => {
		// 						this.$set(this.footer.comments, key, val)
		// 					})
		// 				}
		// 			})
		// 	}
		// },
	},

	mounted() {
		// console.log('footer', this.footer)
	},
}
</script>

<style lang="less" scoped>
.footer {
  margin : 80px 30px 30px;
  &__medias {
    display         : flex;
    justify-content : space-between;
    &__socials {
      display   : flex;
      flex-wrap : wrap;
      /deep/ .social {
        text-align            : center;
        margin                : 5px 10px;
        padding               : 5px 10px;
        -webkit-border-radius : 4px;
        -moz-border-radius    : 4px;
        border-radius         : 4px;
        background            : blue;
        width                 : 55px;
        color                 : #ffffff;
        cursor                : pointer;
        i {
          margin-right : 5px;
        }
      }
      /deep/ .fb {
        background : #3b5998;
      }
      /deep/ .tw {
        background : #39b2f7;
      }
      /deep/ .gl {
        background : #dd493b;
      }
      /deep/ .in {
        background : #1c71b5;
      }
      /deep/ .pint {
        background : #b7081b;
      }
    }

    &__indicators {
      display     : flex;
      align-items : flex-end;
      flex-wrap   : wrap;
      .indicator {
        margin-left : 30px;
        font-size   : 14px;
        line-height : 30px;
        color       : #b0b5c0;
        font-family : "Open Sans";
        i {
          color        : #3d4a6b;
          font-size    : 12px;
          margin-right : 15px;
        }
      }
    }

  }

  hr {
    border        : none;
    border-bottom : 2px solid #d9e1ee;
  }

  &__commentaries {
    /*&--title {*/
      /*text-align : center;*/
      /*margin     : 35px 0 30px;*/
      /*h3 {*/
        /*font-size      : 18px;*/
        /*line-height    : 26px;*/
        /*letter-spacing : 0.03em;*/
        /*color          : #5174b1;*/
        /*margin         : 0;*/
        /*font-family    : "Open Sans";*/
      /*}*/
    /*}*/

    /*&__item {*/
      /*background            : #ffffff;*/
      /*color                 : #093547;*/
      /*padding               : 25px 20px 40px 20px;*/
      /*-webkit-border-radius : 20px;*/
      /*-moz-border-radius    : 20px;*/
      /*border-radius         : 20px;*/
      /*margin-bottom         : 12px;*/
      /*&__top {*/
        /*display         : flex;*/
        /*justify-content : flex-start;*/
        /*align-items     : center;*/
        /*flex-wrap       : wrap;*/
        /*.avatar, .name, .date {*/
          /*margin-right : 20px;*/
        /*}*/
        /*.name {*/
          /*h4 {*/
            /*font-size   : 14px;*/
            /*line-height : 30px;*/
            /*font-weight : bold;*/
          /*}*/
        /*}*/
        /*.date {*/
          /*h4 {*/
            /*font-size   : 14px;*/
            /*line-height : 24px;*/
            /*color       : #b0b5c0;*/
            /*font-weight : 400;*/
          /*}*/
        /*}*/
      /*}*/
      /*&__main {*/
        /*display         : flex;*/
        /*justify-content : flex-end;*/
        /*align-items     : flex-end;*/
        /*flex-wrap       : wrap;*/
        /*.main--text, .main--button {*/
          /*margin-left : 50px;*/
        /*}*/
        /*.main--text {*/
          /*font-size   : 14px;*/
          /*line-height : 24px;*/
        /*}*/
        /*.main--button {*/
          /*a {*/
            /*font-size             : 14px;*/
            /*line-height           : 40px;*/
            /*background            : #ecf0f6;*/
            /*-webkit-border-radius : 5px;*/
            /*-moz-border-radius    : 5px;*/
            /*border-radius         : 10px;*/
            /*padding               : 10px 30px;*/
            /*text-decoration       : none;*/
            /*color                 : #093547;*/
            /*font-weight           : bold;*/
          /*}*/
        /*}*/

      /*}*/
    /*}*/
  }

  /*&__add-comment {*/
    /*margin-top     : 60px;*/
    /*margin-bottom  : 60px;*/
    /*color          : #093547;*/
    /*display        : flex;*/
    /*flex-direction : column;*/
    /*align-items    : center;*/
    /*&--title {*/
      /*text-align    : center;*/
      /*margin-bottom : 10px;*/
      /*.title {*/
        /*font-size   : 18px;*/
        /*line-height : 26px;*/
      /*}*/
    /*}*/

    /*&__content {*/
      /*display         : flex;*/
      /*justify-content : center;*/
      /*width           : 80%;*/
      /*&--avatar {*/
        /*margin-right        : 30px;*/
        /*min-width           : 50px;*/
        /*width               : 50px;*/
        /*height              : 50px;*/
        /*border-radius       : 50%;*/
        /*text-align          : center;*/
        /*background-image    : url("~assets/img/single-footer/avatar.png");*/
        /*background-repeat   : no-repeat;*/
        /*background-position : center center;*/
        /*background-size     : cover;*/
        /*p {*/
          /*margin-top : 60px;*/
        /*}*/
      /*}*/
      /*&--input {*/
        /*max-width : 560px;*/
        /*width     : 100%;*/
        /*.s-textarea {*/
          /*background    : #ffffff;*/
          /*margin-bottom : 20px;*/
          /*resize        : none;*/
        /*}*/
      /*}*/
    /*}*/
    /*.button {*/
      /*background-color : #4b79bb;*/
      /*border-color     : #4b79bb;*/
      /*color            : #fff;*/
    /*}*/
  /*}*/
}

@media only screen and (max-width : 768px) {
  .footer {
    margin : 80px 0;
  }
}

@media only screen and (max-width : 640px) {
  .footer {
    /*&__add-comment {*/
      /*&__content {*/
        /*&--avatar {*/
          /*background : none;*/
        /*}*/
      /*}*/
    /*}*/
  }
}

@media only screen and (max-width : 480px) {
  .footer {
    margin : 80px 10px;
    &__medias {
      flex-direction : column;
      &__socials {
        justify-content : space-around;
        order           : 2;
        margin-bottom   : 20px;
        .social {
          margin : 5px 5px;
          i {
            margin-right : 5px;
          }
        }
      }
      &__indicators {
        justify-content : space-around;
        margin-bottom   : 15px;
        .indicator {
          font-size   : 12px;
          line-height : 20px;
          margin-left : 0;
          i {
            color        : #3d4a6b;
            font-size    : 12px;
            margin-right : 5px;
          }
        }
      }

    }

    hr {
      border        : none;
      border-bottom : 2px solid #d9e1ee;
    }

    &__commentaries {
      /*&__item {*/
        /*background            : #ffffff;*/
        /*color                 : #093547;*/
        /*padding               : 25px 10px 40px 10px;*/
        /*-webkit-border-radius : 20px;*/
        /*-moz-border-radius    : 20px;*/
        /*border-radius         : 20px;*/
        /*margin-bottom         : 12px;*/
        /*&__top {*/
          /*display        : flex;*/
          /*flex-direction : column;*/
          /*.avatar, .name, .date {*/
            /*margin-right : 10px;*/
          /*}*/
          /*.name {*/
            /*h4 {*/
              /*font-size     : 12px;*/
              /*line-height   : 15px;*/
              /*margin-bottom : 0;*/
            /*}*/
          /*}*/
          /*.date {*/
            /*h4 {*/
              /*font-size   : 12px;*/
              /*line-height : 12px;*/
              /*color       : #b0b5c0;*/
              /*font-weight : 400;*/
            /*}*/
          /*}*/
        /*}*/
        /*&__main {*/
          /*flex-direction : column;*/
          /*align-items    : center;*/
          /*.main--text, .main--button {*/
            /*margin-left : 0;*/
          /*}*/
          /*.main--text {*/
            /*text-align : justify;*/
          /*}*/
          /*.main--button {*/
            /*flex : 1 1 100%;*/
          /*}*/

        /*}*/
      /*}*/
    }

    /*&__add-comment {*/
      /*margin-top    : 30px;*/
      /*margin-bottom : 0px;*/
      /*color         : #093547;*/

      /*&__content {*/
        /*flex-direction : column;*/
        /*display        : flex;*/
        /*align-items    : center;*/

        /*&--avatar {*/
          /*margin-right : 0;*/
          /*p {*/
            /*margin-top : 0;*/
          /*}*/
        /*}*/
        /*&--input {*/
          /*max-width : 560px;*/
          /*width     : 100%;*/
          /*.s-textarea {*/
            /*background    : #ffffff;*/
            /*margin-bottom : 20px;*/
          /*}*/
        /*}*/
      /*}*/
      /*.button {*/
        /*a {*/
          /*text-decoration       : none;*/
          /*color                 : #ffffff;*/
          /*padding               : 10px 25px;*/
          /*font-size             : 14px;*/
          /*line-height           : 40px;*/
          /*background            : #4b79bb;*/
          /*-webkit-border-radius : 6px;*/
          /*-moz-border-radius    : 6px;*/
          /*border-radius         : 6px;*/
          /*max-width             : 150px;*/
          /*width                 : auto;*/
          /*margin-left           : calc(50% - 75px);*/
        /*}*/
      /*}*/
    /*}*/

  }
}
</style>