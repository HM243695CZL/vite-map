<template>
    <div class='dashboard-container flex-center'>
        <div class='content-box'>
            <Left :title='title'/>
            <div class='center-area flex-center'>
                <div class='hover-self'>
                    <img :src='imgObj[title].click' alt=''>
                </div>
                <div class='map-img'>
                    <img src='../../assets/img/group-6.png' alt='' usemap='#LangFangMap'>
                </div>
                <map name="LangFangMap" id="LangFangMap">
                    <area name='三河市' data-click='SanHeShi' shape="poly" coords="466,74,467,67,474,58,472,49,474,37,491,38,492,31,505,24,509,30,528,26,532,29,534,26,544,30,549,26,553,35,560,32,567,39,577,38,589,25,604,13,625,19,635,14,644,14,655,13,659,17,643,24,646,40,650,57,640,65,641,72,633,75,631,81,632,85,628,92,623,95,632,102,627,107,631,120,640,124,661,133,669,128,674,136,672,143,656,144,652,139,647,140,646,144,635,146,629,143,614,147,613,152,593,153,587,146,589,137,592,129,595,124,594,116,581,112,576,107,565,103,560,94,551,88,550,77,547,69,544,64,532,67,520,65,517,72,523,81,518,90,513,97,509,105,500,108,488,108,484,114,475,110,476,89,468,77,465,74,467,74,464,74,466,67,467,68"/>
                    <area name='大厂回族自治县' data-click='DaChangHuiZu' shape="poly" coords="485,115,494,125,499,130,509,135,519,139,526,145,525,138,533,134,548,132,552,138,553,140,567,144,578,144,585,146,590,138,593,126,594,121,587,113,577,111,565,103,558,93,552,85,547,71,541,66,530,68,520,68,522,80,524,89,519,97,516,103,508,107,496,107,488,108,486,114" />
                    <area name='香河县' shape="poly" data-click='XiangHeXian' coords="535,141,541,157,545,167,549,175,537,175,537,182,529,184,531,198,526,203,519,207,524,221,526,224,533,214,548,214,544,222,548,231,550,238,551,243,556,245,559,250,574,243,591,248,608,253,619,261,630,259,633,252,642,249,634,237,638,221,639,210,631,198,637,192,647,188,653,184,645,170,636,165,635,155,620,156,610,158,597,160,590,155,589,151,576,150,574,143,561,136,542,135,537,139"/>
                </map>
            </div>
            <Right/>
        </div>
    </div>
</template>

<script lang='ts'>
    import { defineComponent, onMounted, toRefs, reactive } from 'vue';
    import SanHeShiImg from '@/assets/img/big/SanHeShi.png';
    import DaChangHuiZuImg from '@/assets/img/big/DaChangHuiZu.png';
    import XiangHeXianImg from '@/assets/img/big/XiangHeXian.png';
    import SanHeShiClickImg from '@/assets/img/SanHeShi.png';
    import DaChangHuiZuClickImg from '@/assets/img/DaChangHuiZu.png';
    import XiangHeXianClickImg from '@/assets/img/XiangHeXian.png';
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
                    SanHeShi: {
                        normal: SanHeShiImg,
                        click: SanHeShiClickImg,
                        status: 'normal'
                    },
                    DaChangHuiZu: {
                        normal: DaChangHuiZuImg,
                        click: DaChangHuiZuClickImg,
                        status: 'normal'
                    },
                    XiangHeXian: {
                        normal: XiangHeXianImg,
                        click: XiangHeXianClickImg,
                        status: 'normal'
                    }
                },
                title: 'SanHeShi',
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
                bindClick: () => {
                    $('.center-area area').on('click', function () {
                        state.title = $(this).attr('data-click');
                        Object.keys(state.imgObj).map(item => {
                            state.imgObj[item].staus = 'normal';
                        });
                        state.imgObj[$(this).attr('data-click')].status = 'click';
                    })
                }
            });
            onMounted(() => {
                methods.initScale();
                methods.bindClick();
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
                .map-img{
                    position: absolute;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
