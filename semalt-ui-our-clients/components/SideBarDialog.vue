<template>
  <div>
    <!--<template v-if="result">-->
    <!--{{ result }}-->
    <!--<br><br>-->
    <!--</template>-->
    <s-button type="primary" @click="openModal" :class="className" animation="pulse">{{ title? title : $t('4099') }}</s-button>
    <s-dialog-request
           v-model="show"
           ref="dialogRequest"
           v-bind="attrs"
           @success="onSuccessRequestForm"
           @error="onErrorRequestForm"/>
  </div>
</template>

<script>

import axios from 'axios'

export default {

	name: "SideBarDialog",

	props: ['title',
		'className'],

	data() {
		return {
			show: false,
			userData: {},
			img: require('@semalt/frontend/public/img/people/andrew_timchenko.png'),

		}
	},
	methods: {
		onSuccessRequestForm(obj) {
			// Close form
			console.log(obj);
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			};

			axios.post('/api/v1/create/messages/default', obj, config).then((resp) => {

				if (resp.error) return false;
				// this.showSuccess = true;
				CleverJump.hit('click', 'our-clients-form-button')

			});

			setTimeout(() => this.show = false, 2000)
		},
		onErrorRequestForm() {
			console.log('Error')
		},
		openModal() {
			this.show = true
		}
	},
	computed: {
		attrs() {
			const result = {}

			if (this.user) {
				result['form-name'] = this.user.username
				result['form-email'] = this.user.email
				result['form-phone'] = this.user.tel
			}

			if (!!this.manager.name) {
				result.name = this.manager.name
				result.position = this.manager.position

				if (this.manager.img) {
					result.image = 'https://semalt.com/' + this.manager.img
				} else {
					result.image = this.img
        }

				if (this.contacts.length) {
					result.contacts = this.contacts
				}
			} else {
				result.image = this.img
			}

			return result
		},
		user() {
			// return {"id":1676437,"email":"starenchenko@semalt.com","tel":"+380956770517","username":"Maksym"}
			return this.$store.state.user.userData
		},
		manager() {
			// return {"id":120,"name":"Sabina Smith","email":"sabina@semalt.com","img":"\/img\/org\/051528_smith.png","phone":"","skype":"sabina@semalt.com","category":"sal","position":"Customer Support Manager"}
			return this.$store.state.user.manager
		},
		contacts() {
			const arr = []

			if (this.manager.skype) {
				arr.push({
					icon: 'fab fa-skype',
					value: this.manager.skype,
					link: 'skype:' + this.manager.skype,
					external: true
				})
			}

			if (this.manager.phone) {
				arr.push({
					icon: 'fas fa-phone',
					value: this.manager.phone,
					link: 'tel:' + this.manager.phone,
					external: true
				})
			}

			if (this.manager.email) {
				arr.push({
					icon: 'fas fa-envelope',
					value: this.manager.email,
					link: 'mailto:' + this.manager.email,
					external: true
				})
			}

			return arr
		}
	},

}
</script>


<style lang="less" scoped>

</style>