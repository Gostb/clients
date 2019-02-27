<template>
    <div class="header--bg">
        <div class="container">
            <div class="header">
                <div class="header__content-left">
                    <div class="header__content-left--title">
                        <h1 class="title">{{ $t('6357') }}</h1>
                    </div>
                    <div class="header__content-left--description">
                        <p v-html="$t('4097')"></p>
                    </div>
                    <div class="header__content-left--button">
                        <!--<a href="https://semalt.com/testimonials" target="_blank" class="button">Our Testimonials</a>-->
                        <s-button element="a" href="https://semalt.com/testimonials" target="_blank" class="button">Our Testimonials</s-button>
                    </div>
                </div>
                <div class="header__content-right">
                    <div class="header__content__right--img">
                        <img src="~assets/img/cases-header/cases-header-right-img.png" alt="cases-right">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "CasesHeader"
	}
</script>

<style lang="less" scoped>
    
    /deep/.blue-bg {
        background: #4b79bb;
        color: #ffffff;
    }
    
    .header--bg {
        max-width: 1920px;
        margin: 0 auto;
        background: #ffffff;
        .header {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            flex-wrap: wrap;
            color: #093547;
            &__content-left {
                padding-bottom: 45px;
                flex-basis: 65%;
                &--title {
                    .title {
                        font-size: 52px;
                        letter-spacing: 0.06em;
                        margin: 0;
                    }
                }
                &--description {
                    p {
                        font-size: 25px;
                        line-height: 40px;
                    }
                }
                &--button {
                    max-width: 245px;
                    position: relative;
                    &:after {
                        content: '';
                        background: url("~assets/img/cases-header/arrow.png") no-repeat;
                        position: absolute;
                        right : -50px;
                        top: -20px;
                        width: 40px;
                        height: 60px;
                    }
                    .button {
                        height : 40px;
                        font-size : 16px;
                        line-height : 30px;
                        text-decoration: none;
                        background: #00bbc2;
                        color: #ffffff;
                    }
                }
            }
            &__content-right {
                padding-bottom: 25px;
            }
        }
    }

    @media only screen and (max-width: 992px) {
        .header--bg {
            .header {
                padding: 10px;
                &__content-left {
                    flex-basis: 100%;
                    text-align: justify;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &--title {
                        .title {
                            font-size: 42px;
                        }
                    }

                    &--description {
                        p {
                            font-size: 18px;
                            line-height: 32px;
                        }
                    }
                    &--button {
                        &:after {
                            right: -50px;
                        }
                    }
                }
                &__content-right {
                    display: none;
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .header--bg {
            .header {
                &__content-left {
                    &--title {
                        .title {
                            font-size : 36px;
                            letter-spacing : 60;
                        }
                    }
                    &--description {
                        text-align : left;
                    }
                }
            }
        }
    }
</style>