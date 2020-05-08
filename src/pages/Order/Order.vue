<template>
    <div>
        <ul class="comList">
            <li>
                <div class="comListTop">
                    <img src="./img/logo.png">
                    <p>海澜之家</p>
                    <p>已发货</p>
                </div>
                <router-link to="/goods" class="comListCon">
                    <div><img src="./img/commodityTop.jpg"></div>
                    <div>
                        <p>HLA海澜之家连帽休闲夹克2017秋季新品舒适透气柔软外套男...</p>
                        <p>颜色：藏青AN， 尺码：185/100A</p>
                    </div>
                    <p>x1</p>
                </router-link>
                <div class="orderPaid">
                    <p>2018-01-10  14:20</p>
                    <p>实付  ¥ 688.00</p>
                </div>
            </li>
            <li>
                <div class="comListTop">
                    <img src="./img/logo.png">
                    <p>海澜之家</p>
                    <p>待付款</p>
                    <p>（剩余付款时间14:23）</p>
                </div>
                <div class="comListCon">
                    <div><img src="./img/commodityTop.jpg"></div>
                    <div>
                        <p>HLA海澜之家连帽休闲夹克2017秋季新品舒适透气柔软外套男...</p>
                        <p>颜色：藏青AN， 尺码：185/100A</p>
                    </div>
                    <p>x1</p>
                </div>
                <div class="orderPaid">
                    <p>2018-01-10  14:20</p>
                    <p>实付  ¥ 688.00</p>
                </div>
            </li>
            <li>
                <div class="comListTop">
                    <img src="./img/logo.png">
                    <p>海澜之家</p>
                    <p class="active">已完成</p>
                    <p></p>
                </div>
                <div class="comListCon">
                    <div><img src="./img/commodityTop.jpg"></div>
                    <div>
                        <p>HLA海澜之家连帽休闲夹克2017秋季新品舒适透气柔软外套男...</p>
                        <p>颜色：藏青AN， 尺码：185/100A</p>
                    </div>
                    <p>x1</p>
                </div>
                <div class="orderPaid">
                    <p>2018-01-10  14:20</p>
                    <p>实付  ¥ 688.00</p>
                </div>
            </li>
        </ul>
        <button class="orderMore">没有更多了~</button>
    </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .comList li{
        border-top:1px solid #d5d9de;
        margin-bottom:0.15rem;
    }
    .comListTop{
        height: 0.66rem;
        background: #fff;
        overflow: hidden;
    }
    .comListTop>img{
        width: 0.44rem;
        height: 0.44rem;
        float: left;
        margin-left:0.2rem;
        margin-top:0.11rem;
    }
    .comListTop>p:nth-of-type(1){
        line-height: 0.66rem;
        margin-left:0.2rem;
        float: left;
        color: #222;
    }
    .comListTop>p:nth-of-type(2){
        line-height: 0.66rem;
        margin-right:0.2rem;
        float: right;
        color: #e7180d;
        font-size: 0.26rem;
        font-weight: bold;
    }
    .comListTop>p:nth-of-type(2).active{
        color: #666;
    }
    .comListTop>p:nth-of-type(3){
        line-height: 0.66rem;
        font-size: 0.2rem;
        margin-right:0.1rem;
        float: right;
        color: #666;
    }
    .orderMore{
        background: #fff;
        border:none;
        border-top:1px solid #d5d9de;
        color: #aaa;
        margin-bottom:1rem;
        margin-top:0.15rem;
        height:0.68rem;
        width: 100%;
    }
    .comListCon{
        display: block;
        overflow: hidden;
        height: 1.48rem;
        cursor: pointer;
        background: #f6f6f6;
    }
    .comListCon >div:nth-of-type(1){
        width: 1.24rem;
        height: 1.24rem;
        border:1px solid #d5d9de;
        float: left;
        margin-top:0.12rem;
        margin-left:0.2rem;
    }
    .comListCon >div:nth-of-type(1) img{
        width: 1.18rem;
        height: 1.18rem;
        margin:0.03rem;
    }
    .comListCon>div:nth-of-type(2){
        width: 4rem;
        float: left;
        margin-left:0.2rem;
    }
    .comListCon>div:nth-of-type(2)>p:nth-of-type(1){
        line-height: 0.26rem;
        margin-top:0.15rem;
    }
    .comListCon>div:nth-of-type(2)>p:nth-of-type(2){
        font-size: 0.2rem;
        color: #666;
        margin-top:0.18rem;
    }
    .comListCon>p{
        float: left;
        margin-top:0.8rem;
        color: #222;
    }
    .orderPaid{
        height: 0.68rem;
        padding:0 0.3rem;
        line-height: 0.68rem;
        background: #fff;
        overflow: hidden;
        color: #222;
    }
    .orderPaid p:nth-of-type(1){
        width: 50%;
        float: left;
        font-size: 0.2rem;
    }
    .orderPaid p:nth-of-type(2){
        width: 50%;
        float: left;
        text-align: right;
    }
</style>