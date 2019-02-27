<template>
    <div id="rating" class="rating">
        <div class="rating--button">
            <div class="button minus plus">
                <span class="decrement sign"><i class="fas fa-minus"></i></span>
                <span class="increment sign"><i class="fas fa-plus"></i></span>
                <!--v-on:click="decrementValue"-->
                <!--v-on:click="incrementValue"-->
                <div class="counter">{{ obj.votes }}</div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "sCounter",
		props: {
			obj: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				counter: 0,
			}
		},
		methods: {
			// incrementValue() {
			// 	this.obj++;
			// },
			// decrementValue() {
			// 	this.obj--;
			// },
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
    .rating {
        .rating--button {
            width    : 120px;
            position : relative;
            .button {
                width           : 120px;
                display         : flex;
                justify-content : space-between;
                padding         : 10px 10px;
                background      : #e8edf6;
                border-radius   : 16px;
                span {
                    i {
                        font-weight              : bold;
                        font-size                : 15px;
                        cursor                   : pointer;
                        color                    : #668bc3;
                    }
                }
                .counter {
                    width         : 60px;
                    height        : 60px;
                    background    : #1e3447;
                    color         : #ffffff;
                    border-radius : 50%;
                    line-height   : 60px;
                    text-align    : center;
                    position      : absolute;
                    left          : calc(50% - 30px);
                    top           : calc(50% - 30px);
                    font-weight   : bold;
                    font-size     : 22px;
                    font-family : 'Open Sans';
                }
            }
        }
    }

    @media only screen and (max-width: 480px ) {
        .rating {
            margin-top : 25px;
        }
    }
</style>