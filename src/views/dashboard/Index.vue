<template>
    <div class='dashboard-container'>
        <div class='content-box'>
            <Left :title='title'/>
            <div class='center-area flex-center'>
                <div class='circle-box flex-center' :style='circleStyleObj'>
                    <div class='circle-small flex-center'>
                        <div class='lang-fang-shi-top-box'>
                            <img title='三河市' :class='imgObj.SanHeShi.status === "normal" ? "san-he-shi" : "san-he-shi-click"' :src="imgObj.SanHeShi[imgObj.SanHeShi.status]" usemap="#SanHeShiMap" />
                            <map name="SanHeShiMap" id="SanHeShiMap">
                                <area name='三河市' data-click='SanHeShi' shape="poly" coords="16,49,26,49,27,44,38,41,41,45,51,41,56,43,63,44,68,44,82,50,101,33,114,37,129,31,136,32,141,38,128,38,133,63,122,81,117,90,122,105,138,112,145,111,149,122,133,121,122,127,110,124,98,131,92,118,96,107,86,100,75,98,73,90,63,85,65,74,50,67,42,73,50,81,43,86,43,93,41,100,27,100,22,104,17,99,18,79,11,75,15,65,15,52"/>
                            </map>
                            <img title='大厂回族自治县' :class='imgObj.DaChangHuiZu.status === "normal" ? "da-chang-hui-zu" : "da-chang-hui-zu-click"' :src="imgObj.DaChangHuiZu[imgObj.DaChangHuiZu.status]" usemap="#DaChangHuiZuMap" />
                            <map name="DaChangHuiZuMap" id="DaChangHuiZuMap">
                                <area name='大厂回族自治县' data-click='DaChangHuiZu' shape="poly" coords="17,41,18,35,21,34,20,29,26,26,24,17,19,16,21,12,26,13,30,11,38,11,46,28,49,37,60,42,69,47,64,55,64,62,56,62,56,56,46,55,36,53,24,58,14,54,9,47,6,40,14,40" />
                            </map>
                            <img title='香河县' :class='imgObj.XiangHeXian.status === "normal" ? "xiang-he-xian" : "xiang-he-xian-click"' :src='imgObj.XiangHeXian[imgObj.XiangHeXian.status]' usemap="#XiangHeXianMap" />
                            <map name="XiangHeXianMap" id="XiangHeXianMap">
                                <area name='香河县' data-click='XiangHeXian' shape="poly" coords="17,14,24,10,30,9,33,14,37,11,46,19,57,21,59,27,71,26,81,20,87,22,88,30,94,31,93,37,102,44,94,50,88,50,88,55,86,60,90,59,91,68,89,82,89,87,92,89,92,93,86,93,85,99,76,99,63,92,47,87,40,90,33,92,30,88,29,80,26,74,23,66,17,66,16,72,10,72,7,65,12,58,15,54,13,44,17,40,26,36,17,16" />
                            </map>
                        </div>
                        <div class='lang-fang-shi-area-box flex-center'>
                            <div class='point'></div>
                            <img title='固安县' class='gu-an-xian' src='../../assets/img/big/GuAnXian.png' alt=''>
                            <img title='永清县' class='yong-qing-xian' src='../../assets/img/big/YongQingXian.png' alt=''>
                            <img title='广阳区' class='guang-yang-qu' src='../../assets/img/big/GuangYangQu.png' alt=''>
                            <img title='安次区' class='an-ci-qu' src='../../assets/img/big/AnCiQu.png' alt=''>
                            <img title='霸州市' class='ba-zhou-shi' src='../../assets/img/big/BaZhouShi.png' alt=''>
                            <img title='文安县' class='wen-an-xian' src='../../assets/img/big/WenAnXian.png' alt=''>
                            <img title='大城县' class='da-cheng-xian' src='../../assets/img/big/DaChengXian.png' alt=''>
                        </div>
                    </div>
                </div>
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
                title: '无',
            });
            const methods = reactive({
                initScale: () => {
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    const circleValue = w / state.o_w < h / state.o_h ? w / state.o_w : h / state.o_h;
                    console.log(circleValue);
                    state.circleStyleObj = {
                        transform: `scale(${circleValue})`,
                        transformOrigin: 'center center'
                    }
                },
                bindClick: () => {
                    $('.lang-fang-shi-top-box area').on('click', function () {
                        console.log($(this).attr('name'));
                        state.title = $(this).attr('name');
                        Object.keys(state.imgObj).map(item => {
                            state.imgObj[item].status = 'normal';
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
        width: 100%;
        height: 100%;
        background: #031765;
        color: #fff;
        .content-box{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .center-area{
                flex: 1;
                .circle-box{
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    border: 1px dashed rgba(255, 255, 255, .3);
                    .circle-small{
                        width: 500px;
                        height: 500px;
                        border-radius: 50%;
                        border: 1px dashed rgba(255, 255, 255, .1);
                        position: relative;
                        img, area{
                            cursor: pointer;
                        }
                        .lang-fang-shi-top-box{
                            position: absolute;
                            top: -50px;
                            left: 300px;
                            .san-he-shi{
                                width: 130px;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                            .san-he-shi-click{
                                width: 483px;
                                position: absolute;
                                top: -178px;
                                left: -176px;
                                z-index: -1;
                            }
                            .da-chang-hui-zu{
                                width: 60px;
                                position: absolute;
                                top: 47px;
                                left: 20px;
                            }
                            .da-chang-hui-zu-click{
                                width: 444px;
                                position: absolute;
                                top: -147px;
                                left: -172px;
                                z-index: -1;
                            }
                            .xiang-he-xian{
                                width: 84px;
                                position: absolute;
                                top: 83px;
                                left: 30px;
                            }
                            .xiang-he-xian-click{
                                width: 444px;
                                position: absolute;
                                top: -98px;
                                left: -150px;
                                z-index: -1;
                            }
                        }
                        .lang-fang-shi-area-box{
                            width: 350px;
                            height: 350px;
                            position: relative;
                            .point{
                                width: 2px;
                                height: 2px;
                                border-radius: 50%;
                                background: #fff;
                            }
                            .gu-an-xian{
                                width: 105px;
                                position: absolute;
                                top: 42px;
                                left: 37px;
                            }
                            .yong-qing-xian{
                                width: 105px;
                                position: absolute;
                                top: 46px;
                                left: 89px;
                            }
                            .guang-yang-qu{
                                width: 103px;
                                position: absolute;
                                top: -16px;
                                left: 101px;
                            }
                            .an-ci-qu{
                                width: 114px;
                                position: absolute;
                                top: 30px;
                                left: 122px;
                            }
                            .ba-zhou-shi{
                                width: 147px;
                                position: absolute;
                                top: 78px;
                                left: 75px;
                            }
                            .wen-an-xian{
                                width: 120px;
                                position: absolute;
                                top: 142px;
                                left: 66px;
                            }
                            .da-cheng-xian{
                                width: 103px;
                                position: absolute;
                                top: 205px;
                                left: 93px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
