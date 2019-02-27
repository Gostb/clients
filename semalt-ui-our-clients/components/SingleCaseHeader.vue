<template>
  <div class="wrapper">
    <nuxt-link :to="localePath({ name: 'index'})"><i class="fas fa-long-arrow-alt-left"></i> Back to Cases</nuxt-link>
    <div class="header__content">
      <div class="header__content--title">
        <h1 class="s-basic title">{{ header.title }}</h1>
      </div>
      <div class="header__content__info">
        <div class="header__content__info--avatar">
          <img src="~assets/img/single-header/avatar.png" alt="avatar">
          <p class="name">Bogdan Govdia</p>
          <nuxt-link :to="localePath({ name: 'cases-category', params: { category: header.category.url }})"
                     class="link">{{ header.category.name }}
          </nuxt-link>
        </div>
        <div class="header__content__info__description">
          <ul class="list" >
            <li class="item" v-for="(obj, index) in this.header.case_top" :key="index">
              <i v-if="obj.icon != null" :class="'fas ' + obj.icon"></i>
              <i v-else class="custom-icon fab fa-intercom" ></i>
              <strong>{{ obj.title }}</strong>
              <span class="text-grey" v-html="obj.text">{{ obj.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'SingleCaseHeader',
    props: ['header'],

    data() {
      return {
        result: {},
        category: {},
        case_top: []
      }
    },

    mounted() {
      // TODO Remove
      // TODO Props result
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    padding: 50px 30px 0 30px;
    max-width: 1265px;
    margin: 0 auto;
    position: relative;

    .nuxt-link-active {
      color: #4b79bb;
      font-size: 14px;
      line-height: 40px;

      i {
        margin-right: 15px;
      }
    }

    .header__content {
      color: #093547;

      &--title {
        .title {
          font-size: 36px;
          letter-spacing: 0.06em;
          position: relative;
          padding-left: 25px;

          &:before {
            font-family: "Font Awesome 5 free";
            content: "\F04B";
            color: #f1244a;
            position: absolute;
            top: 0;
            left: 0;
            font-size: 15px;
          }
        }
      }

      &__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        &--avatar {
          text-align: center;

          img {

          }

          .name {
            font-size: 16px;
            line-height: 30px;
            font-weight: bold;
          }

          .link {
            font-size: 14px;
            line-height: 30px;
            color: #4b79bb;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
            margin-bottom : 15px;
          }
        }

        &__description {
          width: 80%;

          .list {
            list-style-type: none;
            margin: 0;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background: #ffffff;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            padding: 25px 25px 10px 25px;
            -webkit-box-shadow: 0 0 20px 5px #f2f4fa;
            -moz-box-shadow: 0 0 20px 5px #f2f4fa;
            box-shadow: 0 0 20px 5px #f2f4fa;

            .item {
              margin-bottom: 15px;
              font-size: 16px;
              flex: 1 1 47%;
              white-space: nowrap;
              margin-right: 20px;
              margin-left: auto;

              i {
                color: #f1244a;
                background: #f2f4fa;
                padding: 10px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                margin-right: 30px;
              }

              .text-grey {
                color: #b0b5c0;
                margin-left: 15px;
                white-space : normal;

                a {
                  color: #4b79bb;
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .wrapper {
      .header__content {
        &--title {
          .title {
            font-size: 30px;
          }
        }

        &__info {
          flex-direction: column;

          &--avatar {
            text-align: center;
            display: flex;
            justify-content: space-around;
            width: 100%;
            align-items: flex-end;
            margin-bottom: 25px;

            img {

            }

            .name {
              font-size: 16px;
              line-height: 30px;
              font-weight: bold;
            }

            .full {
              font-size: 14px;
              line-height: 30px;
              color: #4b79bb;
              font-weight: bold;
            }
          }

          &__description {
            width: 100%;

            .list {
              list-style-type: none;
              margin: 0;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              background: #ffffff;
              -webkit-border-radius: 20px;
              -moz-border-radius: 20px;
              border-radius: 20px;
              padding: 25px 25px 10px 25px;
              -webkit-box-shadow: 0 0 20px 5px #f2f4fa;
              -moz-box-shadow: 0 0 20px 5px #f2f4fa;
              box-shadow: 0 0 20px 5px #f2f4fa;

              .item {
                margin-bottom: 15px;
                font-size: 16px;
                flex: 1 1 49%;
                white-space: nowrap;
                margin-right: 1%;

                i {
                  color: #f1244a;
                  background: #f2f4fa;
                  padding: 10px;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  margin-right: 30px;
                }

                .text-grey {
                  color: #b0b5c0;
                  margin-left: 15px;

                  a {
                    color: #4b79bb;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .wrapper {
      .header__content {
        &__info {
          &--avatar {
            img {
              /*display : none;*/
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .wrapper {
      .header__content {
        &--title {

          .title {
            font-size: 24px;
            line-height: 30px;
            padding-left: 25px;
          }
        }

        &__info {
          flex-direction: column;

          &--avatar {
            text-align: center;
            display: flex;
            flex-direction : column;
            width: 100%;
            align-items: center;
            margin-bottom: 25px;

            .name {
              font-size: 16px;
              line-height: 30px;
              font-weight: bold;
              margin-right: 5px;
            }

            .full {
              font-size: 14px;
              line-height: 30px;
              color: #4b79bb;
              font-weight: bold;
              margin-right: 5px;
            }
          }

          &__description {
            width: 100%;

            .list {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 20px 0;

              .item {
                margin-bottom: 35px;
                font-size: 16px;
                white-space: normal;
                margin-right: 1%;
                margin-left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                i {
                  color: #f1244a;
                  background: #f2f4fa;
                  padding: 10px;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  margin-right: 0;
                  margin-bottom: 15px;
                }

                .text-grey {
                  color: #b0b5c0;
                  margin-left: 0;
                  margin-bottom: 5px;
                  text-align : center;

                  a {
                    color: #4b79bb;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
