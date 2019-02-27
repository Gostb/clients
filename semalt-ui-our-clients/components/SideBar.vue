<template>
    <s-sidebar-blog>
        <s-sidebar-blog-item class="question" :title="$t('4144')" icon="fas fa-question">
            <div class="question__content">
                <div class="question__content--img">
                    <img src="~assets/img/cases-list/default-avatar.png" style="height: 100px;width: 100px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;" alt="default-avatar">
                </div>
                <div class="question__content--name">
                    <h5 class="name">Andrew Timchenko</h5>
                </div>
                <div class="question__content--positions">
                    <p class="position-one">Head Custumer</p>
                    <p class="position-two">Success Department</p>
                </div>
                <div class="question__content--request">
                    <side-bar-dialog/>
                </div>
            </div>
        </s-sidebar-blog-item>
        <s-sidebar-blog-subscribe href="/" />
        <s-sidebar-blog-item title="Social networks" icon="fas fa-external-link-square-alt">
            Custom content
        </s-sidebar-blog-item>
    </s-sidebar-blog>
</template>

<script>

    import SideBarDialog from '~/components/SideBarDialog'

	export default {

    	components: {SideBarDialog},

		name: "SideBar",

		data() {
			return {
				search: '',
				activeCategory: 10
			}
		}
	}
</script>

<style lang="less" scoped>
    .s-sidebar-blog {
        margin: 30px;
        .question {
            .question__content{
                .question__content--img {
                    display : flex;
                    justify-content : center;
                }
                .question__content--name {
                    text-align : center;
                    .name {
                        color : #0b192e;
                        font-size : 18px;
                        line-height : 30px;
                        font-weight : bold;
                        margin : 15px 0 ;
                    }
                }
                .question__content--positions {
                    display : flex;
                    flex-direction : column;
                    align-items : center;
                    text-align : center;
                    p {
                        margin : 0;
                        color : #b0b5c0;
                        font-size : 14px;
                        line-height : 20px;
                    }
                }
                &--request {
                    margin-top : 15px;
                    display : flex;
                    justify-content : center;
                }
            }
        }
    }

    /deep/ .s-sidebar-blog-icon {
        background: #f2f4fa;
    }

    @media only screen and (max-width: 992px) {
        .s-sidebar-blog {
            display : none;
        }
    }
</style>