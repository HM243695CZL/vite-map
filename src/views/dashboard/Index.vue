<template>
    <div class='dashboard-container'>
        <div class='content-box'>
            <Left/>
            <div class='center-area flex-center'>
                <div class='circle-box flex-center' :style='circleStyleObj'>
                    <div class='circle-small flex-center'>
                        <div class='lang-fang-shi-top-box'>
                            <img title='三河市' class='san-he-shi' :src="sanHeShiImg" width="100" height="100" border="0" usemap="#SanHeShiMap" />
                            <map name="SanHeShiMap" id="SanHeShiMap">
                                <area class='san-he-shi-area' @click='clickSanHeSHi()' hover='@/assets/img/SanHeShi.png' name='三河市' shape="poly" coords="10,30,15,30,19,26,27,27,37,26,43,28,51,30,60,23,63,20,74,22,79,19,86,21,81,23,82,32,82,40,79,44,74,53,74,62,77,66,82,68,92,69,93,76,82,75,81,78,70,78,60,81,59,66,52,62,44,55,37,45,28,43,26,46,31,50,26,59,14,64,9,57,7,47,7,39,8,32"/>
                            </map>
                            <img title='大厂回族自治县' class='da-chang-hui-zu' src="../../assets/img/big/DaChangHuiZu.png" width="50" height="50" border="0" usemap="#DaChangHuiZuMap" />
                            <map name="DaChangHuiZuMap" id="DaChangHuiZuMap">
                                <area @click='clickDaChangeHuiZu()' hover='../../assets/img/DaChangHuiZu.png' name='大厂回族自治县' shape="poly" coords="3,27,13,26,14,14,15,6,23,11,30,16,33,21,35,24,40,26,45,24,47,21,46,32,44,42,38,42,33,36,24,35,18,37,13,39,6,29,3,29" />
                            </map>
                            <img title='香河县' class='xiang-he-xian' src='../../assets/img/big/XiangHeXian.png' width="60" height="60" border="0" usemap="#XiangHeXianMap" />
                            <map name="XiangHeXianMap" id="XiangHeXianMap">
                                <area @click='clickXiangHeXian()' hover='../../assets/img/XiangHeXian.png' name='香河县' shape="poly" coords="10,6,16,6,22,6,32,12,44,11,51,19,54,24,50,32,50,42,49,51,43,54,26,48,20,49,13,42,4,39,7,27,11,18,8,9,9,7"/>
                            </map>
                        </div>
                        <div class='lang-fang-shi-area-box flex-center'>
                            <!--<div class='point'></div>-->
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
    import sanHeShiHoverImg from '@/assets/img/SanHeShi.png';
    import sanHeShiImg from '@/assets/img/big/SanHeShi.png';
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
                sanHeShiImg,
                sanHeShiHoverImg
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
                clickSanHeSHi: () => {
                    console.log('clickSanHeSHi');
                },
                clickDaChangeHuiZu: () => {
                    console.log('clickDaChangeHuiZu');
                },
                clickXiangHeXian: () => {
                    console.log('clickXiangHeXian');
                }
            });
            onMounted(() => {
                methods.initScale();
                $('.san-he-shi-area').hover(function () {
                    $('.san-he-shi').attr('src', state.sanHeShiHoverImg).attr('class', 'san-he-shi-hover');
                }, function () {
                    $('.san-he-shi-hover').attr('src', state.sanHeShiImg).attr('class', 'san-he-shi');
                })
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
                                width: 80px;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                            .san-he-shi-hover{
                                width: 280px;
                                position: absolute;
                                top: -90px;
                                left: -102px;
                                height: 270px;
                            }
                            .da-chang-hui-zu{
                                width: 42px;
                                position: absolute;
                                top: 28px;
                                left: 9px;
                            }
                            .xiang-he-xian{
                                width: 56px;
                                position: absolute;
                                top: 52px;
                                left: 16px;
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
