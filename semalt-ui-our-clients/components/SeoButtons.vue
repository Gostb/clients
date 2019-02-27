<template>
    <div class="buttons">
        <nuxt-link :to="localePath({ name: 'cases-category', params: { category: item.url }})"
                   class="link"
                   :id="item.id"
                   v-for="(item, id) in $store.state.blog.categories"
                   :key="id">{{ item.name }}</nuxt-link>

    </div>
</template>

<script>

	export default {

		name: "SeoButtons",

        data () {
			return  {
                categories: [],
                result: {},
            }
        },

        mounted(){

			},
	}
</script>

<style lang="less" scoped>
    .buttons {
        max-width: 1368px;
        margin: 35px auto 10px;
        display : flex;
        flex-wrap : wrap;
        .link {
            text-decoration: none;
            color: #4b79bb;
            font-size: 16px;
            line-height: 30px;
            padding: 15px 40px 10px;
            background: #ffffff;
               -webkit-border-radius: 6px;
               -moz-border-radius: 6px;
            border-radius: 6px;
            font-weight: bold;
            margin-right : 15px;
            margin-top : 10px;
        }
        .auto-seo {
            margin-right: 10px;
        }
    }

    @media only screen and (max-width : 640px ) {
        .buttons {
            margin: 20px auto 10px;
            justify-content : center;
        }
    }
</style>