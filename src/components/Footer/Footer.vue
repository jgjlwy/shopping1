<template>
    <ul class="orderBot">
        <li :class="{active:'/shopping'===$route.path}" @click="goto('/shopping')">店铺</li>
        <li :class="{active:'/order'===$route.path}" @click="goto('/order')">订单</li>
        <li :class="{active:'/personal'===$route.path}" @click="goto('/personal')">我的</li>
    </ul>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            goto(path) {
                this.$router.replace(path);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.orderBot
    width: 100%;
    height: 0.86rem;
    background: #fff;
    border-top:1px solid #d5d9de;
    position: fixed;
    bottom:0;
    >li
        float: left;
        width: 33%;
        text-align: center;
        color: #aaa;
        height: 100%;
        line-height: 1.3rem;
        cursor: pointer;
        &:nth-of-type(1)
            background: url("./img/shop.png") no-repeat 50% 10%/0.4rem auto;
        &:nth-of-type(1).active
            background: url("./img/shopActive.png") no-repeat 50% 10%/0.4rem auto;
            color: #081762;
        &:nth-of-type(2)
            background: url("./img/order.png") no-repeat 50% 10%/0.4rem auto;
        &:nth-of-type(2).active
            background: url("./img/orderActive.png") no-repeat 50% 10%/0.4rem auto;
            color: #081762;
        &:nth-of-type(3)
            background: url("./img/work.png") no-repeat 50% 10%/0.4rem auto;
        &:nth-of-type(3).active
            background: url("./img/workActive.png") no-repeat 50% 10%/0.4rem auto;
            color: #081762;
</style>