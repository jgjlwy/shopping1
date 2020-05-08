<template>
    <div>
        <ul class="personList">
            <li><p>收货地址</p></li>
            <li><p>抵用券</p></li>
            <li><p>退款/售后</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Personal"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .personList li{
        height: 0.75rem;
        line-height: 0.75rem;
        background: #fff;
        padding:0 0.3rem;
        margin-bottom:0.15rem;
        text-indent: 0.6rem;
        cursor: pointer;
    }
    .personList li:nth-of-type(1) p{
        background: url("./img/perAddress.jpg") no-repeat 0 50%/0.35rem 0.35rem,url("./img/arrowRight.jpg") no-repeat 100% 50%/0.15rem 0.25rem;
    }
    .personList li:nth-of-type(2) p{
        background: url("./img/perPage.jpg") no-repeat 0 50%/0.35rem 0.35rem,url("./img/arrowRight.jpg") no-repeat 100% 50%/0.15rem 0.25rem;
    }
    .personList li:nth-of-type(3) p{
        background: url("./img/perShe.jpg") no-repeat 0 50%/0.35rem 0.35rem,url("./img/arrowRight.jpg") no-repeat 100% 50%/0.15rem 0.25rem;
    }
</style>