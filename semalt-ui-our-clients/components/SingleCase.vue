<template>
  <div class="single-wrapper">
    <div class="single-content">
      <div class="single-case">
        <!--:id="item.id" v-for="(item, id) in $store.state.blog.articles.case" :key="id"-->
        <div class="content" v-html="single.modified_content"></div>
        <!--<s-manager-->
        <!--ref="manager"-->
        <!--form-name="My name"-->
        <!--form-email="info@example.com"-->
        <!--form-message="Default message"-->
        <!--form-phone="+380500000000"-->
        <!--@success="onSuccess" />-->

        <div class="footer-content">
          <div class="footer-content__img">
            <img src="~assets/img/single-case/arrow-up.png" alt="arrow-up">
          </div>
          <div class="footer-content--slogan">
            <h2 class="slogan" v-html="$t('6565')"></h2>
          </div>
          <div class="footer-content__buttons">
            <s-button element="a"
                      href="https://semalt.com/price"
                      target="_blank"
                      class="pricing"
                      animation="pulse">Pricing
            </s-button>
            <!--<s-button type="primary" class="request" @click="openModal">{{$t('6566')}}</s-button>-->
            <!--<s-dialog-request-->
                   <!--v-model="show"-->
                   <!--ref="dialogRequest"-->
                   <!--:form-name="name"-->
                   <!--:form-email="email"-->
                   <!--:form-phone="phone"-->
                   <!--title=""-->
                   <!--@success="onSuccessRequestForm"-->
                   <!--@error="onErrorRequestForm"/>-->
            <side-bar-dialog
                   className="request"
                   title="Request consultation"/>

          </div>
        </div>
      </div>

      <single-case-footer :footer="single"/>
    </div>

  </div>

</template>

<script>

import SideBarDialog from "~/components/SideBarDialog"

import SingleCaseFooter from '~/components/SingleCaseFooter'

// const API_GET_ARTICLE = 'https://d.semalt.com/api/v1/get/client/cases/'

export default {
	components: {SingleCaseFooter,
                SideBarDialog},
	name: 'SingleCase',
	props: ['single'],
	data() {
		return {
			asd: {},
			header: [
				{label: 'Criteria', value: 'name'},
				{label: 'AutoSEO', value: 'value'},
				{label: 'FullSEO', value: 'value'}
			],
			result: {},
			modified_content: '',
			content: '',
			name: '',
			email: '',
			phone: '',
			show: false,

		}
	},
	created() {
		// this.asd = this.single.case
		// const content = this.single.case.modified_content
		//     .replace(/<link.+rel="stylesheet".+>/g, '')
		//     .replace(/img\/case/g, 'https://semaltcases.com/img/case')
		//
		//   this.$set( this.asd, 'modified_content', content)


		// TODO Remove
		// TODO Props result
		// if (this.$route.params.single === undefined) return
		// this.$axios.$get(API_GET_ARTICLE + this.$route.params.single)
		//   .then(res => {
		//     if (res.error) {
		//       return
		//     }
		//

		//   this.result = res.result.case
		//   this.$set(
		//     this.result,
		//     'modified_content',
		//     res.result.case.modified_content
		//       .replace(/<link.+rel="stylesheet".+>/g, '')
		//       .replace(/img\/case/g, 'https://semaltcases.com/img/case')
		//   )
	},
	mounted() {
		const linkEl = document.createElement('link')
		linkEl.setAttribute('type', 'text/css')
		linkEl.setAttribute('rel', 'stylesheet')
		linkEl.setAttribute('href', 'https://semaltcases.com/css/case-1.css')

		document.querySelector('body').appendChild(linkEl)
	},
	methods: {
		demoFetchData() {
			// Example, wait from API data
			setTimeout(() => {
				this.name = 'My name'
				this.email = 'info@example.com'
				this.phone = '+380500000000'
			}, 1500)
		},
		onSuccessRequestForm(data) {
			// Close form
			this.result = data
			this.$refs.dialogRequest.clear('form-name', 'form-phone', 'form-message')
			console.log('Success')

			setTimeout(() => this.show = false, 2000)
		},
		onErrorRequestForm() {
			console.log('Error')
		},
		openModal() {
			this.result = null
			this.show = true
			this.demoFetchData()
		}
	}

}
</script>

<style lang="less" scoped>

/deep/.blue-bg {
  background: #4b79bb;
  color: #fff;
}

/deep/.request {
  font-weight : bold;
  background   : #00bbc2;
  border-color : #00bbc2;
  color        : #fff;
  font-size : 16px;
}

.text-red {
  background : #f1244a;
  color      : #ffffff;
}

.single-wrapper {
  z-index   : 9999;
  max-width : 1020px;
  width     : 100%;
}

.single-content {
  z-index   : 99999;
  max-width : 1020px;
  width     : auto;

  .single-case {
    color                 : #093547;
    height                : auto;
    max-width             : 100%;
    width                 : auto;
    -webkit-border-radius : 20px 20px 0 0;
    -moz-border-radius    : 20px 20px 20px 20px;
    border-radius         : 20px 20px 20px 20px;
    background            : #ffffff;
    margin                : 30px 25px 0;
    z-index               : 100;
    .content {
      padding : 0 25px 45px 25px;
      width   : 100%;
      /deep/ .case {
        width : 100%;
        .article-content {
          width : 100%;
          p {
            width : 100%;
          }
        }
      }
    }
    .footer-content {
      position              : relative;
      display               : flex;
      flex-direction        : column;
      align-items           : center;
      background            : #e8edf6;
      padding               : 100px 20px 0 20px;
      -webkit-border-radius : 0 0 20px 20px;
      -moz-border-radius    : 0 0 20px 20px;
      border-radius         : 0 0 20px 20px;
      margin-top            : 50px;
      &__img {
        position              : absolute;
        top                   : -75px;
        left                  : calc(50% - 75px);
        width                 : 150px;
        height                : 150px;
        background            : #fff;
        -webkit-border-radius : 50%;
        -moz-border-radius    : 50%;
        border-radius         : 50%;
        padding-top           : 40px;
      }
      &--slogan {
        text-align : center;
        .slogan {
          color : #093547;
          font-size : 25px;
          line-height : 40px;
        }
      }
      &__buttons {
        margin-top    : 12px;
        margin-bottom : 45px;
        display : flex;
        .pricing {
          font-weight : bold;
          margin-right : 10px;
          background   : #f1244a;
          border-color : #f1244a;
          color        : #fff;
          font-size : 16px;
        }
        .request {
          font-weight : bold;
          background   : #00bbc2;
          border-color : #00bbc2;
          color        : #fff;
          font-size : 16px;
          line-height : 40px;
        }
      }
    }

    /deep/ img {
      max-width : 100%;
      width     : auto;
    }

    /deep/ .screenshot {
      width   : 100%;
      padding : 0;
      margin  : 0;

      img {
        max-width : 100%;
        width     : auto;
      }
    }

    /deep/ .full-page {
      padding : 0;
      margin  : 0;
    }

    /deep/ .content-article {
      position : relative;

      .article-img {
        position          : absolute;
        height            : 55px;
        width             : 50px;
        left              : 0px;
        top               : 10px;
        background-repeat : no-repeat;
      }

      .article-content {
        h2 {
          margin-left : 50px;
        }

        p {
          a {
            color           : #3ba9cd;
            text-decoration : none;
          }
        }
      }
    }

    /deep/ .case-table {
      width : 100%;
      li {
        display  : flex;
        position : relative;
        li::before {
          position : absolute;
          top      : -2px;
          left     : -25px;
          content  : url("~/assets/img/single-case/prehistory-li.png");

        }

      }
      .col-40 {

      }
    }

    /deep/ .footer-buttons {
      margin-top : 30px;
      text-align : center;
      display    : none;

      .button {
        min-width      : 180px;
        padding        : 18px 35px;
        border-radius  : 4px;
        color          : white;
        line-height    : 54px;
        text-transform : uppercase;
        letter-spacing : -0.3px;
        font-family    : "Ebrima Bold";
      }

      .button-pricing {
        background-color : #2ecc71;
        padding          : 18px 65px;
        text-decoration  : none;
      }

      .button-request {
        background: #f39c12;
        text-decoration  : none;
      }
    }
  }

}

/*from-a-concept-to-a-profit-generating-online-business*/

/*/deep/ .content-article {*/

  /*.article-img {*/
    /*display : none;*/
  /*}*/

  /*.article-content {*/
    /** {*/
      /*font-family : 'Open Sans' !important;*/
    /*}*/
    /*h2 {*/
      /*margin-left : 0 !important;*/
    /*}*/

    /*ol[class='full-page'] {*/
      /*list-style    : none;*/
      /*counter-reset : my-awesome-counter;*/
      /*> li {*/
        /*position          : relative;*/
        /*counter-increment : my-awesome-counter;*/
        /*&::before {*/
          /*position    : absolute;*/
          /*content     : counter(my-awesome-counter) ". ";*/
          /*font-weight : bold;*/
          /*left        : -15px;*/

        /*}*/
      /*}*/
    /*}*/
  /*}*/
/*}*/

/deep/ .case-footer {
  display          : none;
  /*flex*/
  /*display: flex;*/
  align-items      : flex-end;
  justify-content  : center;

  /*position*/
  position         : relative;

  padding-bottom   : 40px;
  padding-top      : 70px;
  margin-top       : 100px;
  margin-left      : -25px;
  margin-bottom    : -25px;

  /*sizes*/
  /*height: 300px;*/
  width            : calc(100% + 50px);
  /*looks*/
  background-color : #e8edf6;
  border-radius    : 0px 0px 21px 21px;

  &::before {
    /*position*/
    position              : absolute;
    top                   : -83px;
    /*sizes*/
    height                : 165px;
    width                 : 165px;
    /*looks*/
    -webkit-border-radius : 50%;
    -moz-border-radius    : 50%;
    border-radius         : 50%;
    display               : flex;
    align-items           : flex-end;

    background-color      : #fff;
    content               : url("~/assets/img/cases-backround/arrow.png");
    /*background-repeat: no-repeat;*/
    /*background-position: center 100%;*/
  }
  /deep/ .case-footer__text {
    /*font*/
    font-family    : Raleway;
    font-weight    : 700;
    font-size      : 25px;
    /*position*/
    padding-left   : 85px;
    padding-right  : 85px;
    padding-bottom : 20px;
    /deep/ span {
      display          : inline-block;
      position         : relative;
      z-index          : 2;
      text-decoration  : none;
      background-color : #4b79bb;
      color            : #fff;
      padding          : 6px 10px;

    }
  }
  /deep/ .footer-buttons {
    /*position*/

    /deep/ .s-btn {
      /*looks*/
      display        : inline-block;

      font-family    : Raleway !important;
      letter-spacing : normal !important;
      font-size      : 16px;
      font-weight    : 700;
      /*position*/
      margin-bottom  : 20px;
      padding-top    : 10px;
      padding-bottom : 10px;
      /*sizes*/
      /*width: 155px;*/

    }
    /deep/ .s-btn:nth-child(3) {
      margin-left      : 15px;
      border-color     : #00bbc2;
      background-color : #00bbc2;
    }
  }
}

/*media*/
@media only screen and (max-width : 786px) {

  /deep/ .footer-buttons {
    display : block !important;
  }
}

/*end*/
@media only screen and (max-width : 1200px) {
  .single-wrapper {
    .single-content {
      .single-case {
        margin : 30px 10px;

        .single-case--item {
          .single-case--item__content {
            .single-case--title {
              .title {

              }

              &--img {
                margin-left           : 0;
                background            : none;
                -webkit-border-radius : 0;
                -moz-border-radius    : 0;
                border-radius         : 0;
                height                : auto;
                width                 : auto;

                img {

                }
              }
            }
          }
        }
      }

      .first {
        .first__description {
          .first__pictures {
            display         : flex;
            align-items     : center;
            justify-content : space-between;
            flex-wrap       : wrap;
            flex            : 1 1 100%;

            img {
              width : 100%;
            }

            .img-description {
              display     : flex;
              align-items : center;
              flex        : 1 1 40%;

              i {
                display : none;
              }

              .description {
                background            : #f2f4fa;
                padding               : 45px;
                -webkit-border-radius : 16px;
                -moz-border-radius    : 16px;
                border-radius         : 16px;
                position              : relative;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 786px) {
  .single-wrapper {
    .single-content {
      .single-case {
        margin : 30px 10px;

        .single-case--item {
          .single-case--item__content {
            .single-case--title {
              .title {

              }

              &--img {
                margin-left           : 0;
                background            : none;
                -webkit-border-radius : 0;
                -moz-border-radius    : 0;
                border-radius         : 0;
                height                : auto;
                width                 : auto;

                img {

                }
              }
            }
          }
        }

        /deep/ .footer-buttons {
          display        : flex;
          flex-direction : column;
          align-items    : center;

          .button {
            min-width      : 180px;
            padding        : 0px 25px;
            border-radius  : 4px;
            color          : white;
            line-height    : 54px;
            text-transform : uppercase;
            letter-spacing : -0.3px;
            font-family    : "Ebrima Bold";
          }

          .button-pricing {
            background-color : #2ecc71;
            padding          : 0 25px;
            text-decoration  : none;
          }

          .button-request {
            margin-top : 40px;
          }
        }
      }
    }
  }
  /deep/ .full-page {
    padding : 0;
    margin  : 0;
    li {
      display : flex;
      flex-direction : column;
      align-items : center;
      width : 100%;
      .case-table {
        li {
          .col {
            width : 100%;
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 480px) {
  .single-wrapper {
    .single-content {
      .single-case {
        margin : 30px 10px;

        .single-case--item {
          .single-case--item__content {
            padding : 10px;

            .single-case--title {
              flex-direction : column;
              text-align     : center;

              .title {

              }

              &--img {
                margin-left           : 0;
                background            : none;
                -webkit-border-radius : 0;
                -moz-border-radius    : 0;
                border-radius         : 0;
                height                : auto;
                width                 : auto;
                margin-right          : 0;

                img {
                  height : 60px;
                }
              }
            }

            .single-case--description {
              text-align : justify;
              z-index    : 9999;

              .description {
                font-size : 16px;
                z-index   : 9999;
              }
            }
          }
        }
        .footer-content {
          &__buttons {
            display : flex;
            flex-direction : column;
            align-items : center;
            .pricing {
              margin-right : 0;
              margin-bottom : 15px;
            }
          }
        }
      }
    }
  }

}

</style>
