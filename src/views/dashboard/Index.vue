<template>
    <div class='dashboard-container flex-center'>
        <div class='content-box'>
            <Left :title='title'/>
            <div class='center-area flex-center'>
                <div class='hover-self'>
                    <img v-show='currentLv === "first"' :src='imgObj[title].click' alt=''>
                </div>
                <div class='back' @click='currentLv = "first"'>
                    <img v-show='currentLv === "second"' src='../../assets/img/fanhui.png' alt=''>
                </div>
                <div class='map-img'>
                    <img v-show='currentLv === "first"' src='../../assets/img/group-6.png' alt='' usemap='#LangFangMap'>
                    <img v-show='currentLv === "second" && currentImg === "SanHeShi"' src='../../assets/img/big/SanHeShi.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "DaChangHuiZu"' src='../../assets/img/big/DaChangHuiZu.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "XiangHeXian"' src='../../assets/img/big/XiangHeXian.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "GuAnXian"' src='../../assets/img/big/GuAnXian.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "YongQingXian"' src='../../assets/img/big/YongQingXian.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "AnCiQu"' src='../../assets/img/big/AnCiQu.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "BaZhouShi"' src='../../assets/img/big/BaZhouShi.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "WenAnXian"' src='../../assets/img/big/WenAnXian.png' alt=''>
                    <img v-show='currentLv === "second" && currentImg === "DaChengXian"' src='../../assets/img/big/DaChengXian.png' alt=''>
                </div>
                <map name="LangFangMap" id="LangFangMap">
                    <area name='三河市' data-click='SanHeShi' shape="poly" coords="466,74,467,67,474,58,472,49,474,37,491,38,492,31,505,24,509,30,528,26,532,29,534,26,544,30,549,26,553,35,560,32,567,39,577,38,589,25,604,13,625,19,635,14,644,14,655,13,659,17,643,24,646,40,650,57,640,65,641,72,633,75,631,81,632,85,628,92,623,95,632,102,627,107,631,120,640,124,661,133,669,128,674,136,672,143,656,144,652,139,647,140,646,144,635,146,629,143,614,147,613,152,593,153,587,146,589,137,592,129,595,124,594,116,581,112,576,107,565,103,560,94,551,88,550,77,547,69,544,64,532,67,520,65,517,72,523,81,518,90,513,97,509,105,500,108,488,108,484,114,475,110,476,89,468,77,465,74,467,74,464,74,466,67,467,68"/>
                    <area name='大厂回族自治县' data-click='DaChangHuiZu' shape="poly" coords="485,115,494,125,499,130,509,135,519,139,526,145,525,138,533,134,548,132,552,138,553,140,567,144,578,144,585,146,590,138,593,126,594,121,587,113,577,111,565,103,558,93,552,85,547,71,541,66,530,68,520,68,522,80,524,89,519,97,516,103,508,107,496,107,488,108,486,114" />
                    <area name='香河县' data-click='XiangHeXian' shape="poly"  coords="535,141,541,157,545,167,549,175,537,175,537,182,529,184,531,198,526,203,519,207,524,221,526,224,533,214,548,214,544,222,548,231,550,238,551,243,556,245,559,250,574,243,591,248,608,253,619,261,630,259,633,252,642,249,634,237,638,221,639,210,631,198,637,192,647,188,653,184,645,170,636,165,635,155,620,156,610,158,597,160,590,155,589,151,576,150,574,143,561,136,542,135,537,139"/>
                    <area name='固安县' data-click='GuAnXian' shape="poly" coords="165,328,165,321,167,317,171,294,178,272,187,268,203,250,206,250,209,254,215,247,221,250,222,255,230,256,233,261,243,260,249,267,250,273,256,280,266,279,285,281,297,286,304,281,308,281,309,300,315,302,317,309,312,314,302,318,293,326,288,331,279,337,273,348,277,358,280,370,277,380,275,388,277,401,275,407,265,403,261,409,251,414,241,422,239,430,238,441,229,446,206,441,202,433,202,411,193,406,197,388,202,382,200,368,203,356,202,344,195,330,189,333,179,332,169,331,166,329" />
                    <area name='永清县' data-click='YongQingXian' shape="poly" coords="315,281,321,275,328,274,338,272,345,268,351,270,357,270,360,277,371,278,373,284,386,295,398,310,402,319,402,336,404,346,407,356,406,371,405,383,409,392,416,397,424,402,433,403,433,406,430,411,421,416,409,419,405,425,397,431,385,432,371,434,368,446,352,446,342,441,331,431,323,421,318,415,305,414,296,410,287,406,280,404,279,396,277,386,279,374,281,363,280,351,277,346,281,338,287,338,293,331,300,326,310,318,318,313,319,305,313,298,310,289,312,283" />
                    <area name='广阳区' data-click='GuangYangQu' shape="poly" coords="292,260,295,256,295,248,289,245,294,240,301,249,305,247,302,239,311,240,317,235,321,231,316,227,331,228,333,220,339,214,338,203,346,205,355,199,356,191,366,192,371,187,377,194,377,199,385,200,391,201,394,198,409,202,413,207,423,206,419,198,413,192,420,188,425,191,435,191,441,195,444,207,450,202,450,195,458,193,459,199,454,203,457,213,447,228,455,238,462,238,464,244,460,248,459,253,461,261,452,267,443,268,434,258,423,250,410,242,397,236,389,231,379,231,374,234,378,238,389,245,396,252,397,257,382,252,375,261,374,266,369,270,359,270,350,265,343,267,338,270,327,270,318,272,307,276,305,264,301,263,296,259" />
                    <area name='安次区' data-click='AnCiQu' shape="poly" coords="374,277,374,269,381,264,381,255,392,259,398,262,401,254,395,248,386,242,379,237,381,233,390,233,398,240,405,244,416,251,429,259,436,265,443,269,451,273,455,284,465,282,468,288,480,288,487,292,479,301,472,302,474,317,465,323,470,328,467,340,479,340,488,333,487,339,493,342,494,352,491,357,484,360,486,367,488,392,495,395,496,399,489,398,487,404,481,404,481,411,484,416,484,436,470,438,464,432,458,438,448,436,440,431,429,427,428,417,437,408,434,399,425,398,416,394,410,383,411,371,412,357,408,346,412,340,412,336,406,336,406,327,405,321,406,311,392,297,378,287,376,277" />
                    <area name='霸州市' data-click='BaZhouShi' shape="poly" coords="229,451,236,465,249,476,253,498,255,504,245,509,243,515,246,523,253,523,257,527,271,515,274,509,261,507,261,502,278,499,286,488,287,498,293,498,297,493,305,499,310,495,325,499,332,507,346,508,353,515,361,516,369,516,370,508,363,493,373,495,380,499,389,499,395,499,393,506,396,513,405,512,408,503,421,503,424,505,433,503,436,494,443,493,446,489,456,494,468,496,484,493,483,483,493,472,500,464,506,459,505,451,500,441,491,439,473,441,467,442,458,439,456,445,442,440,435,435,425,431,421,423,408,426,404,433,389,436,369,437,370,448,370,454,351,451,342,447,336,441,328,437,323,427,316,420,300,419,293,415,279,412,272,409,264,409,258,413,251,418,242,427,242,444,232,450" />
                    <area name='文安县' data-click='WenAnXian' shape="poly" coords="201,571,209,565,214,564,212,557,218,550,218,560,237,552,240,543,242,538,249,542,255,534,261,527,270,516,274,507,265,504,275,500,286,492,284,500,292,500,296,499,305,501,311,497,325,506,332,514,345,515,352,518,360,519,373,512,368,498,378,500,389,506,396,516,403,517,408,508,424,508,436,507,432,530,421,543,414,556,413,575,420,577,421,598,412,603,405,593,393,592,388,599,385,610,381,621,370,632,361,640,352,648,344,656,332,657,320,655,302,649,293,642,282,637,268,628,249,623,236,620,230,608,223,602,220,593,216,591,205,588,202,574" />
                    <area name='大城县' data-click='DaChengXian' shape="poly" coords="301,655,308,655,315,655,326,661,340,663,349,660,358,647,368,644,375,631,386,623,386,609,391,600,393,595,402,595,410,605,413,607,417,605,430,605,429,615,427,627,427,640,433,644,428,654,437,656,437,664,438,674,431,680,439,685,442,701,439,716,426,717,427,726,418,731,412,724,404,729,407,734,399,738,395,743,398,747,386,753,391,757,398,763,396,772,392,780,380,779,375,782,382,786,375,793,378,801,365,793,359,800,354,798,356,788,347,786,338,788,334,793,315,792,310,783,309,767,301,767,300,760,308,757,308,751,310,744,299,741,297,735,279,726,274,704,272,689,291,682,297,674,302,665,301,655"  />
                </map>
            </div>
            <Right/>
        </div>
    </div>
</template>

<script lang='ts'>
    import { defineComponent, onMounted, toRefs, reactive } from 'vue';
    import SanHeShi from '@/assets/img/SanHeShi.png';
    import DaChangHuiZu from '@/assets/img/DaChangHuiZu.png';
    import XiangHeXian from '@/assets/img/XiangHeXian.png';
    import GuAnXian from '@/assets/img/GuAnXian.png';
    import YongQingXian from '@/assets/img/YongQingXian.png';
    import GuangYangQu from '@/assets/img/GuangYangQu.png';
    import AnCiQu from '@/assets/img/AnCiQu.png';
    import BaZhouShi from '@/assets/img/BaZhouShi.png';
    import WenAnXian from '@/assets/img/WenAnXian.png';
    import DaChengXian from '@/assets/img/DaChengXian.png';
    import $ from 'jquery';
    import Left from '@/components/Left/Index.vue'
    import Right from '@/components/Right/Index.vue'
    export default defineComponent({
        name: "Dashboard",
        components: {
            Left, Right
        },
        setup(){
            const state = reactive({
                o_w: 1366,
                o_h: 768,
                containerStyleObj: {},
                circleStyleObj: {},
                imgObj: {
                    none: {
                        click: '',
                        status: 'normal'
                    },
                    SanHeShi: {
                        click: SanHeShi,
                        status: 'normal'
                    },
                    DaChangHuiZu: {
                        click: DaChangHuiZu,
                        status: 'normal'
                    },
                    XiangHeXian: {
                        click: XiangHeXian,
                        status: 'normal'
                    },
                    GuAnXian: {
                        click: GuAnXian,
                        status: 'normal'
                    },
                    YongQingXian: {
                        click: YongQingXian,
                        status: 'normal'
                    },
                    GuangYangQu: {
                        click: GuangYangQu,
                        status: 'normal'
                    },
                    AnCiQu: {
                        click: AnCiQu,
                        status: 'normal'
                    },
                    BaZhouShi: {
                        click: BaZhouShi,
                        status: 'normal'
                    },
                    WenAnXian: {
                        click: WenAnXian,
                        status: 'normal'
                    },
                    DaChengXian: {
                        click: DaChengXian,
                        status: 'normal'
                    }
                },
                currentLv: 'first',
                currentImg: '',
                title: 'none',
            });
            const methods = reactive({
                initScale: () => {
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    const circleValue = w / state.o_w < h / state.o_h ? w / state.o_w : h / state.o_h;
                    console.log(circleValue);
                    state.circleStyleObj = {
                        // transform: `scale(${circleValue})`,
                        // transformOrigin: 'center center'
                    }
                },
                bindAreaClick: () => {
                    $('.center-area area').on('click', function () {
                        state.title = $(this).attr('data-click');
                        state.imgObj[$(this).attr('data-click')].status = 'click';
                    })
                },
                bindAreaDblClick: () => {
                    $('.center-area #LangFangMap area').on('dblclick', function () {
                        state.currentLv = 'second';
                        state.currentImg = $(this).attr('data-click');
                    })
                }
            });
            onMounted(() => {
                methods.initScale();
                methods.bindAreaClick();
                methods.bindAreaDblClick();
            });
            return {
                ...toRefs(state),
                ...toRefs(methods)
            }
        }
    })
</script>

<style scoped lang='less'>
    .dashboard-container{
        min-width: 1920px;
        height: 100%;
        background-image: url("../../assets/bg.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
        .content-box{
            width: 1720px;
            overflow: hidden;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            .center-area{
                width: 840px;
                height: 810px;
                text-align: center;
                background: url("../../assets/img/zhms/map.png");
                background-size: cover;
                position: relative;
                .hover-self{
                    position: absolute;
                }
                .back{
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    cursor: pointer;
                    z-index: 1;
                }
                .map-img{
                    position: absolute;
                    img{
                        width: 100%;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
