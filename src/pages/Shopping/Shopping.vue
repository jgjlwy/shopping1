<template>
    <div>
        <ul class="storeList">
            <li>
                <p>海澜之家（北京西路门店）</p>
                <p>上海徐汇区北京西路路980号</p>
            </li>
            <li>
                <p>海澜之家（北京西路门店）</p>
                <p>上海徐汇区北京西路路980号</p>
            </li>
            <li>
                <p>海澜之家（北京西路门店）</p>
                <p>上海徐汇区北京西路路980号</p>
            </li>
        </ul>
        <button class="orderMore">更多门店...</button>
    </div>
</template>

<script>
    export default {
        name: "Shopping",

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .storeList
        >li
            height: 1.4rem;
            background: #fff;
            padding:0 0.3rem;
            color: #333;
            overflow: hidden;
            margin-top:0.15rem;
            &:nth-of-type(1)
                margin:0;
            p:nth-of-type(1)
                font-size:0.28rem;
                margin:0.3rem 0 0.24rem;

    .orderMore
        background: #fff;
        border:none;
        border-top:1px solid #d5d9de;
        color: #aaa;
        margin-bottom:1rem;
        margin-top:0.15rem;
        height:0.68rem;
        width: 100%;



</style>