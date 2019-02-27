<template>
    <div class="cases__list">
        <div class="cases__list--item" :id="item.id" v-for="(item, id) in $store.state.blog.articles" :key="id">
            <div class="item--title">
                <nuxt-link tag="h2"
                           class="s-basic title"
                           :to="localePath({ name: 'single', params: { single: item.url } })"
                >{{ item.title }}
                </nuxt-link>
            </div>
            <div class="item__content">
                <div class="item__content--top">
                    <div class="person">
                        <div class="avatar">
                            <img v-if="item.editor[0].avatar"
                                 :src="'https://blog.semalt.com/public/img/avatars/'+item.editor[0].avatar"
                                 :alt="item.editor.name">
                            <img v-else src="~assets/img/cases-list/default-avatar.png" alt="avatar">
                        </div>
                        <p class="name">{{ item.editor[0].name }}</p>
                        <i class="fas fa-circle"></i>
                        <!--TODO Remove query-->
                        <!--TODO { name: params }-->
                        <nuxt-link :to="localePath({ name: 'cases-category', params: { category: item.category.url }})"
                                   class="link">{{item.category.name }}
                        </nuxt-link>
                    </div>
                    <div class="plus">
                        <s-counter :obj="item"/>
                    </div>
                </div>
                <div class="item__content--text">
                    <p class="text">{{ item.description }}</p>
                </div>
                <div class="item__content__indicators">
                    <div class="indicators--icons">
                        <div class="icon">
                            <i class="far fa-eye"></i>
                            {{ item.views }} Views
                        </div>
                        <div class="icon icon-2">
                            <i class="fas fa-comments"></i>{{ item.comments_count }} Comments
                        </div>
                    </div>
                    <div class="indicators--button">
                        <nuxt-link :to="localePath({ name: 'single', params: { single: item.url } })">Read More
                        </nuxt-link>
                        <!--{{ item.url }}-->
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <s-pagination v-model="page" :total="totalPages" :per-page="1"/>
        </div>
    </div>
</template>

<script>

	import sCounter from "~/components/sCounter";

	export default {
		components: {sCounter},
		name: "CasesList",

		data() {
			return {
				page: this.$store.state.blog.pagination.page,
				totalPages: this.$store.state.blog.pagination.total,
				editor: [],
			}
		},
		watch: {

			async page(val) {
				// console.log('PAGE', this.$route)

				await this.$store.dispatch('blog/fetchPaginAndArticles', {page: val, ...this.$route.params})
				// this.$router.push(this.localePath({
				// 	name: this.$route.name,
				// 	params: this.$route.params,
				// 	query: {
				// 		...this.$route.query,
				// 		page: val
				// 	}
				// }))
                if (page > 1) {
                    this.$router.push(this.localePath({
                        name: this.$route.name.split('___')[0],
                        query: { page },
                        params: { ...this.$route.params }
                    }))
                } else {
                    this.$router.push(this.localePath({
                        name: this.$route.name.split('___')[0],
                        params: { ...this.$route.params }
                    }))
                }
				window.scrollTo(0, 0)
			}
		},
	}
</script>

<style lang="less" scoped>
    .cases__list {
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        max-width             : 1020px;
        width : 100%;
        &--item {

            width                 : auto;
            color                 : #093547;
            height                : auto;
            -webkit-border-radius : 20px;
            -moz-border-radius    : 20px;
            border-radius         : 20px;
            background            : #ffffff;
            padding               : 45px 35px 20px 40px;
            margin                : 30px 25px 30px 0;
            z-index               : 100;

            .item--title {
                position     : relative;
                .s-basic {
                    font-size    : 22px;
                    margin-top   : 0;
                    padding-left : 25px;
                    &:before {
                        font-family : "Font Awesome\ 5 free";
                        content     : "\F04B";
                        color       : #f1244a;
                        position    : absolute;
                        top         : 0;
                        left        : 0;
                        font-size   : 10px;
                    }
                }
            }
            
            .item__content {
                
                .item__content--text {
                    .text {
                        font-family : "Open Sans";
                        font-size : 14px;
                        color : #093547;
                    }
                }
                
                .item__content--top {
                    display         : flex;
                    justify-content : space-between;
                    align-items     : center;
                    .person {
                        display         : flex;
                        justify-content : space-between;
                        align-items     : center;
                        img {
                            margin-right          : 15px;
                            height                : 100px;
                            width                 : 100px;
                            -webkit-border-radius : 50%;
                            -moz-border-radius    : 50%;
                            border-radius         : 50%;
                        }
                        .name {
                            margin-right : 15px;
                            font-size    : 16px;
                            line-height  : 30px;
                        }

                        i {
                            margin-right : 15px;
                            color        : #4b79bb;
                            font-size    : 8px;
                        }
                        .link {
                            margin-right    : 15px;
                            font-size       : 14px;
                            line-height     : 30px;
                            color           : #4b79bb;
                            font-weight     : bold;
                            text-decoration : none;
                            cursor          : pointer;
                        }
                    }
                }

                .item__content__indicators {
                    display         : flex;
                    justify-content : space-between;
                    flex-wrap       : wrap;
                    .indicators--icons {
                        display         : flex;
                        justify-content : space-between;
                        flex-wrap       : wrap;
                        font-size       : 14px;
                        line-height     : 30px;
                        color           : #b0b5c0;
                        font-family     : 'Open Sans';
                        .icon {
                            margin-right : 15px;
                            font-family  : 'Open Sans';
                            i {
                                margin : 0 10px;
                                cursor : pointer;
                                color  : #3d4a6b;
                                &:first-child {
                                    margin-left : 0;
                                }
                            }
                        }
                    }
                    .indicators--button {
                        a {
                            text-decoration       : none;
                            font-size             : 14px;
                            line-height           : 40px;
                            color                 : #ffffff;
                            padding               : 10px 20px;
                            background            : #4b79bb;
                            -webkit-border-radius : 6px;
                            -moz-border-radius    : 6px;
                            border-radius         : 6px;
                            font-weight           : bold;
                        }
                    }
                }
            }
            
        }
        .pagination {
            margin : 30px auto 50px;
        }
    }

    @media only screen and (max-width : 768px ) {
        .cases__list {
            &--item {
                margin-right : 0;
                .item__content {
                    .item__content--top {
                        flex-direction : column;
                        align-items    : center;
                        .person {
                            order           : 2;
                            justify-content : center;
                            margin-top      : 30px;
                        }
                    }

                    .item__content__indicators {
                        flex-direction : column;
                        .indicators--icons {
                            margin-top      : 20px;
                            display         : flex;
                            justify-content : space-between;
                            flex-wrap       : wrap;
                            .icon {
                                margin-right : 15px;
                                i {
                                    margin : 0 15px;
                                    cursor : pointer;
                                    &:first-child {
                                        margin-left : 0;
                                    }
                                }
                            }
                        }
                        .indicators--button {
                            max-width  : 150px;
                            align-self : center;
                            margin-top : 30px;
                            a {
                                text-decoration       : none;
                                font-size             : 14px;
                                line-height           : 40px;
                                color                 : #ffffff;
                                padding               : 10px 20px;
                                background            : #4b79bb;
                                -webkit-border-radius : 6px;
                                -moz-border-radius    : 6px;
                                border-radius         : 6px;
                            }
                        }
                    }
                }
            }
        }

    }

    @media only screen and (max-width : 480px ) {
        .container-fluid {
            padding : 0 10px;
        }

        .cases__list {
            &--item {
                margin-right : 0;
                padding      : 45px 15px 20px 15px;

                .item--title {
                    text-align : center;
                    .s-basic {
                        font-size    : 25px;
                        line-height  : 30px;
                        margin-top   : 0;
                        position     : relative;
                        padding-left : 0;
                        &:before {
                            display : none;
                        }
                    }
                }

                .item__content {
                    .item__content--top {
                        flex-direction : column;
                        align-items    : center;
                        .person {
                            order          : 2;
                            flex-direction : column;
                            margin-top     : 30px;
                            img {
                                margin-right : 0;
                            }
                            .name {
                                margin: 10px 0;
                            }
                            .full {
                                margin-right :0;
                            }
                            i {
                                margin-right : 0;
                            }
                            .link {
                                margin: 10px 0 0 0;
                            }
                        }
                    }

                    .item__content--text {
                        text-align : left;
                        .text {

                        }
                    }

                    .item__content__indicators {
                        flex-direction : column;
                        .indicators--icons {
                            margin-top      : 20px;
                            display         : flex;
                            justify-content : space-between;
                            flex-wrap       : wrap;
                            .icon {
                                margin-right : 15px;
                                i {
                                    margin : 0 15px;
                                    cursor : pointer;
                                    &:first-child {
                                        margin-left : 0;
                                    }
                                }
                            }
                        }
                        .indicators--button {
                            max-width  : 150px;
                            align-self : center;
                            margin-top : 30px;
                        }
                    }
                }
            }
        }
    }

</style>
