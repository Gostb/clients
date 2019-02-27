<template>
    <div class="container-fluid">
        <seo-buttons/>
        <div class="main--bg">
            <cases-list/>
            <side-bar/>
        </div>
    </div>
</template>

<script>

	import SideBar     from "~/components/SideBar"
	import CasesList     from "~/components/CasesList"
    import SeoButtons     from "~/components/SeoButtons"

	export default {
        components: {
        	SeoButtons,
            SideBar,
            CasesList,
        },

		name: "CasesBackground"
	}
</script>

<style lang="less" scoped>
    .main--bg {
        max-width: 1920px;
        min-height: 800px;
        margin: 0 auto;
        background-color: #f2f4fa;
        height: auto;
        display: flex;
        justify-content: center;
        background: url("~assets/img/cases-backround/bottom-bg.png") no-repeat;
        background-position: 100% 100%;
        padding-bottom: 250px;
    }

    @media only screen and (max-width: 1024px) {
        .main--bg {
            background : none;
        }
    }

    @media only screen and (max-width: 480px) {
        .container-fluid {
            padding: 0 10px;
            .main--bg {
                background : none;
                padding : 0;
            }
        }
    }
</style>