/*路由配置*/

import Vue from 'vue';
import VueRouter from "vue-router";
import Shopping from "../pages/Shopping/Shopping.vue";
import Order from "../pages/Order/Order.vue";
import Personal from "../pages/Personal/Personal.vue";

import Goods from "../components/Goods/Goods.vue";

//声明使用插件
Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            path:"/shopping",
            component:Shopping,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/personal",
            component:Personal,
            meta:{
                showFooter:true
            }
        },{
            path:"/order",
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/goods",
            component:Goods
        },
        {
            path:"/",
            redirect:Goods
        }
    ]
})