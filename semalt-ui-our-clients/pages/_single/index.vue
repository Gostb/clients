<template>
  <div class="case">
    <div class="container-fluid top no-gutter">
      <img src="~assets/img/single-header/mount-left.png" class="bg1" alt="mountain">
      <img src="~assets/img/single-header/cloud.png" class="bg2" alt="cloud">
      <img src="~assets/img/single-header/tilds.png" class="bg3" alt="background">
      <img src="~assets/img/single-header/man-cup.png" class="bg4" alt="man-with-cup">
      <div class="bg"></div>
      <single-case-header :header="result"/>
    </div>
    <div class="container-fluid blue">
      <div class="case__content">
        <single-case :single="result"/>
        <side-bar/>
      </div>
    </div>

  </div>
</template>

<script>

const API_GET_ARTICLE = 'https://d.semalt.com/api/v1/get/client/cases/'

import axios from 'axios'

import SingleCaseHeader from '~/components/SingleCaseHeader'
import SideBar from '~/components/SideBar'
import SingleCase from '~/components/SingleCase'

export default {
	name: 'case-single',
	layout: 'landing',
	head: {
		title: 'Case-Single'
	},
	components: {
		SingleCaseHeader,
		SideBar,
		SingleCase
	},
	head() {
		return {
			title: this.result.title.substring(0, 155) || this.result.meta_desc.substring(0, 155),
			meta: [
				{charset: 'utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				// {hid: 'og:description', property: 'og:description', name: 'og:description', content: this.result.description.substring(0, 155)},
				{hid: 'og:title', name: 'og:title', property: 'og:title', content: this.result.title},
				{ hid: 'description', name: 'description', content: this.result.description.substring(0, 155) },
			]
		}
	},

	data() {
		return {
			result: {},
		}
	},

	async asyncData({store, query, params}) {
		let res

		res = await axios.get(API_GET_ARTICLE + params.single)
		// console.log(API_GET_ARTICLE + params.single);


		// TODO Validation
		// TODO $nuxt => go to page error

		res.data.result.case.modified_content = res.data.result.case.modified_content
			.replace(/<link.+rel="stylesheet".+>/g, '')
			.replace(/img\/case/g, 'https://semaltcases.com/img/case')
			.replace(/\/https/g, 'https')


		// console.dir(res.result.case);
		return {result: res.data.result.case}
	},

	mounted () {
		window.onscroll = function () {
			localStorage.setItem('value', window.pageYOffset);
		};
		localStorage.getItem('value') && window.scrollTo(0, localStorage.getItem('value'));
  }

}
</script>

<style lang="less" scoped>

.case__content {
  display             : flex;
  justify-content     : center;
  max-width           : 1920px;
  margin              : 0 auto;
  background          : url("~assets/img/cases-backround/bottom-bg.png") no-repeat;
  background-position : 100% 100%;
}

.container-fluid.blue {
  background : #f2f4fa;
}

/*.case {*/
/*max-width: 1920px;*/
/*width: auto;*/
.container-fluid {
  background : #ffffff;
  position   : relative;
  z-index    : 100;

  img {
    display : none;
  }

  .bg {
    background : #f2f4fa;
    height     : 160px;
    bottom     : 0;
    width      : 100%;
    position   : absolute;
    z-index    : -1;
  }

}

/*.case__content {*/
/*max-width: 1920px;*/
/*width: auto;*/
/*background: #f2f4fa;*/
/*display: flex;*/
/*justify-content: center;*/
/*}*/
/*}*/

@media only screen and (min-width : 1920px) {
  .container-fluid {
    img {
      display  : block;
      position : absolute;
    }

    .bg1 {
      bottom : 150px;
      left   : 0;
    }

    .bg2 {
      left : 5%;
    }

    .bg4 {
      left   : 10%;
      bottom : 70px;
    }
  }
}

@media only screen and (max-width : 1024px) {
  .case__content {
    background : none;
  }
}

@media only screen and (max-width : 480px) {
  .container-fluid.blue {
    padding : 0;

    .case__content {
      background : none;
    }
  }
}
</style>