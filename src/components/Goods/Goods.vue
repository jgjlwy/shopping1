<template>
    <div>
        <div class="commodityTop">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./img/commodityTop.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="./img/commodityTop.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="./img/commodityTop.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="./img/commodityTop.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="./img/commodityTop.jpg" alt=""></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
            </div>
        </div>
        <div class="commodityTitle">
            <p>HLA海澜之家连帽休闲夹克2017秋季新品舒适透气柔软外套男HWJAJ3V512A 藏青AN 藏青AN 185/100A</p>
            <p>￥<span>688.00</span></p>
        </div>
        <!--<div class="mySelect">
            <p><span>已选&nbsp;&nbsp;&nbsp;&nbsp;</span>藏青AN，185/100A，1件</p>
        </div>-->
        <div class="commodityContent">
            <p>图片详情</p>
            <div>
                <img src="./img/commodityTop.jpg">
                <img src="./img/commodityTop.jpg">
                <img src="./img/commodityTop.jpg">
                <img src="./img/commodityTop.jpg">
                <img src="./img/commodityTop.jpg">
            </div>
        </div>
        <div class="commodityDetail">
            <p>单品信息</p>
            <p>格子衬衫。修身直筒。格子衬衫。修身直筒。格子衬衫。修身直筒。格子衬衫。修身直筒。格子衬衫。修身直筒。格子衬衫。修身直筒。格子衬衫。修身直筒。</p>
            <p><span>模特身高：</span>180cm</p>
        </div>
        <button class="immediate ">立即抢购</button>
        <div class="specifications">
            <div>
                <div class="choose">
                    <img src="./img/commodityTop.jpg">
                    <p><span>￥688.00</span> <br><span>请选择颜色，尺码</span></p>
                </div>
                <!--<div class="distribution">
                    <p>配送方式</p>
                    <ul>
                        <li class="active">骑手配送</li>
                        <li>快递配送</li>
                    </ul>
                </div>
                <div class="store">
                    <p>配送门店&nbsp;&nbsp;&nbsp;&nbsp; <span>请选择></span></p>
                </div>-->
                <div class="distribution color">
                    <p>颜色</p>
                    <ul>
                        <li class="active">红色12</li>
                        <li>牛仔蓝</li>
                        <li>象牙白</li>
                        <li>黑色96</li>
                    </ul>
                </div>
                <div class="distribution size">
                    <p>尺码</p>
                    <ul>
                        <li class="active">165/84Y</li>
                        <li>175/84Y</li>
                        <li>185/84Y</li>
                        <li>185/100Y</li>
                    </ul>
                </div>
                <div class="number" datamax="20">
                    <p>数量</p>
                    <ul>
                        <li>-</li>
                        <li>1</li>
                        <li>+</li>
                    </ul>
                </div>
                <button class="confirm">确定</button>
                <button class="cancel"></button>
            </div>

        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    export default {
        name: "Goods",
        mounted() {
            //滚动
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                continuous:false
            });
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>