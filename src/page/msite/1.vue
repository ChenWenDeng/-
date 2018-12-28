<template>
    <div class="msite-container">
        <!--================== header  ===================-->
        <headerTop/>
         <!--================== header  ===================-->
        <div class="bg-container">
            <div class="bg-img"></div>
        </div>
        <div class="Advertisement">
            <h1 class="title reveal-bottom">
                <span class="reveal-right">Leading</span>
                <span class="reveal-bottom">the</span>
                <span class="reveal-bottom">fashion</span>
                <span class="reveal-left">trend</span>
            </h1>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(swiper, index) in swipers" :key="index">
                        <img class="img-responsive " v-lazy="swiper.urlImg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="jumbotron">
            <h1 class="display-4 reveal-top">Eend商城——全球设计师原创服装平台</h1>
            <p class="lead reveal-right">Eend商城汇聚了全球原创服装设计师作品的设计与展示，是国内新一代设计师原创服装电商平台，集设计师时尚产品销售展示、品牌推广于一体，致力于为都市女性提供高性价比的原创设计服装品牌及个性潮流服装，帮助并引导终端用户找到与自身气质品味相匹配的原创时装</p>
            <hr class="my-4">
            <p class="reveal-bottom">Developed by Eend of the Post-90s Youtht</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg reveal-left" href="#" role="button">Learn more</a>
            </p>
        </div>

        <div class="classification">
            <div class="popular-container">
                <h1 class="Popular-title reveal-top">热门推荐</h1>
                <div class="Popular-text-box">
                    <p class="reveal-right">我不追随时尚，我本身就是时尚</p>
                    <p class="reveal-left">别随大流，不要让时尚左右你，而是自己去决定自己是什么样的，用自己的穿衣风格和生活方式来表达自己。</p>
                </div>
            </div>
            <div class="swiper-container-row">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(popular,index) in dataList" :key="index">
                        <div class="item col-lg-12 col-sm-4 col-xs-6">
                            <div class="dtl31">
                                <router-link tag="a" target="_blank" to="/details">
                                    <img v-lazy="popular.urlImg">
                                    <div class="dtl">
                                        <h3>{{popular.title}}</h3>
                                        <p>Integer sollicitudin lacus libero, in iaculis turpis tristique sit amet. Nullam augue elit, feugiat nec arcu eget, sodales feugiat ligula.</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>


        
<!-- 官方============================================================== -->
        <div class="official-container1">
            <header>
                <span class="reveal-right">官</span>
                <span class="reveal-bottom">方</span>
                <span class="reveal-top">精</span>
                <span class="reveal-left">选</span>
            </header>
            <ul>
                <li class="li-container"  v-for="(official,index) in officials" :key="index" @click="getdetails(official.productId)">
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545673988607&di=8962fc9d9d9cff7acb85fd6681cae8a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa2a5715ffc932f8758c9b594176.gif" alt="">
                    <!-- <router-link tag="a" target="_blank" to="/details" > -->
											<img v-lazy="official.productImage" alt="" :class="'reveal-'+official.direction">
                      <div class="Price-container">
                        <p class="title ellipsis">{{official.productName}}</p>
                        <p class="Price"><span>￥</span>{{official.salePrice}}元</p>
                      </div>
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>

<!-- 品牌============================================================== -->

        <div class="brand-container1">
            <header>
                <span class="reveal-left">品</span>
                <span class="reveal-top">牌</span>
                <span class="reveal-right">精</span>
                <span class="reveal-bottom">选</span>
            </header>
            <ul>
                <li class="li-container reveal-right libox">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-bottom">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-top">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-left">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-bottom">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-left">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-top">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
                <li class="li-container reveal-left">
                    <router-link tag="a" target="_blank" to="/details">
                        <img onmouseover='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99-1.jpg"' onmouseout='src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg"' src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg" alt="">
                        <div class="Price-container">
                            <p class="title ellipsis">秋冬女款萝莉风复古麻花毛球宽松毛衣</p>
                            <p class="Price"><span>￥</span>122元</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 女装============================================================== -->

        <div class="female-container">
            <header class="header-container">
                <span class="reveal-right">潮</span>
                <span class="reveal-bottom">流</span>
                <span class="reveal-top">女</span>
                <span class="reveal-left">装</span>
            </header>
            <ul>
                <li class="li-container li-box" v-for="(female,index) in females" :key="index">
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545679602822&di=3c4d368e00495cfa30868f858ea89878&imgtype=0&src=http%3A%2F%2Fimg.mukewang.com%2F55ac9c550001b5f004000220.gif" alt="">
                    <router-link target="_blank" to="/details">
                        <img v-lazy="female.urlImg" alt="" :class="'reveal-'+female.direction">
                        <div class="Price-container">
                            <p class="title ellipsis">{{female.title}}</p>
                            <p class="Price"><span>￥</span>{{female.Price}}元</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>


    <!--  男装=========================================================  -->
        <div class="male-container">
            <header class="header-container">
                <span class="reveal-right">潮</span>
                <span class="reveal-bottom">流</span>
                <span class="reveal-top">男</span>
                <span class="reveal-left">装</span>
            </header>
            <ul>
                <li class="li-container li-box"  v-for="(male, index) in males" :key="index">
										<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545678090464&di=f1f01b61d4ac2661faa607454e6fe8c2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce7f5b34f5aba80120b959da4bab.gif" alt="">
                    <router-link target="_blank" to="/details" >
                        <img :src="male.urlImg" alt="" :class="'reveal-'+male.direction">
                        <div class="Price-container">
                            <p class="title ellipsis">{{male.title}}</p>
                            <p class="Price"><span>￥</span>{{male.Price}}元</p>
                        </div>
                    </router-link >
                </li>
            </ul>
        </div>
        <!--- ========================  footer  ============================-->
        <Footer/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import scrollReveal from 'scrollreveal'
export default {
    name:'msite',
    components:{
        headerTop,
        Footer,
    },
    data(){
        return{
						officials:[], //
            isMask: true,//
						detailss:[],//详情页数据
            scrollReveal: scrollReveal(),
						/*****  轮播广告   ******/
            swipers:[
                {
                        id: 1,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1425900/201811271817539788.jpg'
                },
                {
                        id: 2,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1417957/201811271759202476.jpg'
                },
                {
                        id: 3,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1362147/201811271757561033.jpg'
                },
                {
                        id: 4,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/379/201811271755466475.jpg'
                },
                {
                        id: 5,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811271753487916.jpg'
                }
            ],
						/*****  热门推荐   ******/
            dataList:[
                    {
                        id: 1,
                        title: '冬季软糯舒适手感棒棒的女式蝙蝠袖毛衣',
                        Price:234,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811281509149046.jpg'
                    },
                    {
                        id: 2,
                        title: '法兰绒格拼接凸面刺绣宽松套头卫衣"',
                        Price:212,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1082/201809131609457860.jpg'
                    },
                    {
                        id: 3,
                        title: 'ESPRIT 羽绒服潮男LNBR原创潮牌2018新款连帽男士学生羽绒服大码oversize',
                        Price:321,
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1361487/201810251659444798.jpg'
                    },
                    {
                        id: 4,
                        Price:543,
                        title: '自觉2018新款人字斜纹仿牛仔双面呢大衣女冬中长款手工连帽全羊毛',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/379/201811221701302092.jpg'
                    },
                    {
                        id: 5,
                        Price:667,
                        title: 'ESPRIT TOGETHERLIMITED国潮设计 文字标语 街头潮牌休闲双面穿套头卫衣',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1425536/201811211337511445.jpg'
                    }
            ],
						/*****  官方精选   ******/
//             officials:[
//                     {
//                         id: 1,
//                         title: '粉红缇花针织夹克外套',
//                         Price:453,
// 												direction: 'top',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1426686/201811201514384322.jpg'
//                     },
//                     {
//                         id: 2,
//                         title: '2018冬季新款大翻领连帽过膝中长款羊毛呢外套 格子复古加厚大衣"',
//                         Price:212,
// 												direction: 'bottom',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1362837/201811261706295673.jpg'
//                     },
//                     {
//                         id: 3,
//                         title: '条纹衬衫女2018秋装新款港味chic长袖衬衣宽松时尚刺绣显瘦气质',
//                         Price:321,
// 												direction: 'top',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/704/201809111150203138.jpg'
//                     },
//                     {
//                         id: 4,
//                         Price:543,
// 												direction: 'left',
//                         title: '冬款加绒加厚保暖刺绣字母连帽卫衣裙连衣裙',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811281518297307.jpg'
//                     },
//                     {
//                         id: 5,
//                         Price:670,
// 												direction: 'right',
//                         title: 'HOWL设计师品牌 灰色曲线门襟短款连帽羽绒服DJ1404',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/31/201811091416578390.jpg'
//                     },
//                     {
//                         id: 6,
//                         title: '女款常青藤复古学院风格格子衬衫流苏衬衣',
//                         Price:657,
// 												direction: 'top',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811242023526858.jpg'
//                     },
//                     {
//                         id: 7,
//                         title: '冬季女款真毛领外套加厚棉服短款棉衣连帽大毛领棉袄',
//                         Price:755,
// 												direction: 'right',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811251406155590.jpg'
//                     },
//                     {
//                         id: 8,
//                         title: '绿领带酒红色针织外套',
//                         Price:645,
// 												direction: 'left',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1426686/201811201508473547.jpg'
//                     },
//                     {
//                         id: 9,
//                         Price:865,
// 												direction: 'top',
//                         title: 'TOGETHERLIMITED国潮设计 街头复古燕子图案刺绣燕尾拼接新款卫衣',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1425536/201811151436314841.jpg'
//                     },
//                     {
//                         id: 10,
//                         Price:787,
// 												direction: 'bottom',
//                         title: '冬季新款宽松棉服女白蓝拼接连帽面包服连帽外套加厚学生外套',
//                         urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1362837/201811261749195372.jpg'
//                     }
//             ],
						/*****  女装   ******/
            females:[
                    {
                        id: 1,
                        title: 'HOWL设计师品牌 螺纹翻领毛呢格纹大衣外套BZ1529',
                        Price:674,
												direction: 'top',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/31/201811091325411725.jpg'
                    },
                    {
                        id: 2,
                        title: '秋冬女式中长款宽松百搭连帽格子衬衫外套衬衣',
                        Price:252,
												direction: 'left',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811291118523086.jpg'
                    },
                    {
                        id: 3,
                        title: '冬季复古格子校园风格细格子呢子大衣毛呢外套',
                        Price:321,
												direction: 'right',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811281317135800.jpg'
                    },
                    {
                        id: 4,
                        Price:598,
                        title: '安妮陈秋冬女装宽松束口袖针织衫',
												direction: 'bottom',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/421/201811291711140533.jpg'
                    },
                    {
                        id: 5,
                        Price:460,
                        title: 'THUSA',
												direction: 'right',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1414553/201806051037184394.jpg'
                    },
                    {
                        id: 6,
                        title: '女款常青藤复古学院风格格子衬衫流苏衬衣',
                        Price:657,
												direction: 'top',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1381199/201811242023526858.jpg'
                    },
                    {
                        id: 7,
                        title: '流线蜻蜓黑色高领长版毛衣',
                        Price:755,
												direction: 'left',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1426686/201811201506151138.jpg',
                    },
                    {
                        id: 8,
                        title: '大蝴蝶结浅灰色针织外套',
                        Price:645,
												direction: 'bottom',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1426686/201811201502310814.jpg'
                    } 
            ],
						/*****  男装   ******/
            males:[
                {
                        id: 1,
                        title: 'HOWL设计师品牌 橘色曲线纹衬衫羽绒服DJ1496',
                        Price:674,
												direction: 'bottom',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/31/201811091201239185.jpg'
                    },
                    {
                        id: 2,
                        title: '编织罗纹黑色毛衣',
                        Price:252,
												direction: 'right',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1426686/201811201511173709.jpg'
                    },
                    {
                        id: 3,
                        title: '冬季新款棉服女透明口袋宽松面包服连帽外套潮粉色学生外套',
                        Price:321,
												direction: 'top',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/1362837/201811261808379894.jpg'
                    },
                    {
                        id: 4,
                        Price:598,
												direction: 'left',
                        title: '潮流印花卫衣',
                        urlImg: 'http://back.zhayanwang.com/yingwangkeji/studio_src/421/201811291711140533.jpg'
                    },
                    {
                        id: 5,
                        Price:460,
												direction: 'top',
                        title: '宝蓝菱格纹系带开衫',
                        urlImg: 'http://images.iwinking.com/imgs/studio/434/201511251456501403.jpg'
                    },
                    {
                        id: 6,
                        title: '黑色长裙',
                        Price:657,
												direction: 'right',
                        urlImg: 'http://images.iwinking.com/imgs/upload/201505111222193374.jpg'
                    },
                    {
                        id: 7,
                        title: '2015秋冬预售拼接撞色大衣',
                        Price:755,
												direction: 'top',
                        urlImg: 'http://images.iwinking.com/imgs/upload/201506041700112821.jpg'
                    },
                    {
                        id: 8,
                        title: '长款修身双排扣露肩女收腰外套大衣风衣',
                        Price:645,
												direction: 'bottom',
                        urlImg: 'http://images.iwinking.com/imgs/studio/1360568/201611021726345848.jpg'
                    } 
            ]
            
        }
    },
    methods:{
        displayMask(index){
                this.isMask = !this.isMask
        },
				animations(direc,direction){
					this.scrollReveal.reveal(direc,{
							// 动画的时长
							duration: 500,
							// 延迟时间
							delay: 500,
							// 动画开始的位置，'bottom', 'left', 'top', 'right'
							origin: direction,
							// 回滚的时候是否再次触发动画
							reset: false,
							// 在移动端是否使用动画
							mobile: false,
							// 滚动的距离，单位可以用%，rem等
							distance: '200px',
							// 其他可用的动画效果
							opacity: 0.001,
							easing: 'linear',
							scale: 0.9,
					});
				},
				getdetails(index){
					console.log(index)
					var param = {
						detailsId:index
					}
					console.log(param)
					
					//跳转
					const {href} = this.$router.resolve({
						path: '/details',
						query: {
							productId:index
						}
					})
					window.open(href, '_blank')
					
					//发请求
					axios.get('/goods',{
						params:param
					}).then((response) =>{
// 							//返回的一条指定数据
// 							let res = response.data;
// 							this.detailss = res.result.list;
// 							console.log(this.detailss)
// 							//跳转详情页并打开新窗口
// 							 const {href} = this.$router.resolve({
// 									path: '/details',
// 									query: {
// 										details: JSON.stringify(this.details)
// 									}
// 								})
// 								window.open(href, '_blank')
							const {href} = this.$router.resolve({
								path: '/details',
								params: {   
										key: 'value', // orderNum : this.searchData.orderNo
								},
								query: {
									details: JSON.stringify(this.details)
								}
							})
							window.open(href, '_blank')
					})
				}
    },
    mounted(){
				axios.get('/goods').then((response) =>{
					let res = response.data;
					if(res.status == '0'){
						this.officials = res.result.list;
					}else{
						this.officials = []
					}
				})
// 			axios.get('/goods').then((response) =>{
// 				let res = response.data;
// 				if(res.status == '0'){
// 					this.officials = res.result.list;
// 					console.log('失败')
// 				}else{
// 					this.officials = []
// 				}
// 			})
			
        this.$nextTick(function(){
           var mySwiper = new Swiper('.swiper-container',{
                loop: true,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                },
                autoplay: {
                    delay: 2000,//1秒切换一次
                    disableOnInteraction: false,
                },
            });
            var mySwiper1 = new Swiper('.swiper-container-row',{
                slidesPerView : 3,
                spaceBetween : 20,
                loop: true, // 循环模式选项
                //spaceBetween : '10%',按container的百分比
                autoplay: {
                    delay: 1000,//1秒切换一次
                    disableOnInteraction: false,//用户操作后也自动轮播
                },
            })
        })
				this.animations('.reveal-top','top')
				this.animations('.reveal-bottom','bottom')
				this.animations('.reveal-left','left')
				this.animations('.reveal-right','right') 
    }
}
</script>

<style lang="scss" scoped>
.msite-container{
    .navbar{
        padding-top: 20px;
        padding-bottom: 20px; 
        background: #000!important;
        color: #fff!important;
    }
    .bg-container{
        .bg-img{
            z-index: -1;
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            //background-image: url(http://p0.meituan.net/dpdeal/535e6f3eeec64e782f4eb2bac3426eac1375188.jpg);
            background-image: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1432676133,1440846621&fm=26&gp=0.jpg);
            background-size: 100% 100%;
        }
    }
    .Advertisement{
        margin: 3.125rem 0;
        text-align: center;
        .title{
            margin: 1.875rem 0;
            color: #fff;
            font-size: 2.5rem;
            span{
                display: inline-block;
            }
        }
        .swiper-container {
            width: 95%;
            height: 300px;
            
            .swiper-slide{
                // width: 25rem;
                width: 33%;
                // height: 18.75rem;
                height: 100%;
                background: none;
                img{
                    // width: 25rem;
                    width: 100%;
                    // height: 18.75rem;
                    height: 100%;
                }
            }
        }  
    }
    .jumbotron{
        width: 90%;
        margin: 3.125rem auto;
        opacity: .8;
        box-shadow:0px 0px  15px 5px #000;
    }
    .classification{
        width: 100%;
        display: flex;
        //flex-wrap:wrap;
        //justify-content: space-around;
        padding: 20px;
        background: #000;
        .popular-container{
            display: flex;
            justify-content: center;
            width: 30%;
            padding: 20px;
            .Popular-title{
                margin-left: 5%;
                color: #fff !important;
                //font-size: 20px;
            }
            .Popular-text-box{
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                p{
                    color: #fff;
                }
            }
        }
        .swiper-container-row {
            width: 70%;
            overflow: hidden;
            .swiper-slide{
                width: 40%;
                .item{
                    width: 100%;
                    .dtl31 {
                        width: 100%;
                        background: green;
                        position: relative;
                        overflow: hidden;
                        -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
                        &.dtl31:hover img {
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            -o-transform: scale(1.1);
                            //transform: scale(1.1);
                                transition: all .3s;
                        }
                        &.dtl31:hover .dtl {
                            visibility: visible;
                            opacity: 1;
                            transform:translateY(-100%);
                        }
                        img {
                            position: relative;
                            width: 100%;
                            height: 450px;
                            top: 0;
                            left: 0;
                            -webkit-transition: all 0.3s;
                            -moz-transition: all 0.3s;
                            -o-transition: all 0.3s;
                            transition: all 0.3s;
                        }
                        .dtl {
                            background: rgba(51, 51, 51, 0.5);
                            width: 100%;
                            position: absolute;
                            height: 100%;
                            bottom: -100%;
                            left: 0;
                            opacity: 0;
                            padding-top: 50%; 
                            visibility: hidden;
                            -webkit-transition: all 0.3s;
                            -moz-transition: all 0.3s;
                            -o-transition: all 0.3s;
                            transition: all 0.3s;
                            h3 {
                                opacity: .5;
                                padding: 10px 15px;
                                width: 100%;
                                background: #333;
                                color: #fff;
                                font-size: 16px;
                                font-weight: normal;
                                margin-top: 20px;
                                margin-bottom: 10px;
                                text-decoration: underline;
                            }
                            p {
                                padding: 0 15px;
                                font-size: 14px;
                                margin-bottom: 10px;
                                line-height: 1.2;
                                color: #fff;
                                text-indent: 10px;
                            }
                            a {
                                margin-right: 15px;
                                background: #fff;
                                border: 1px solid #ccc;
                                border-radius: 2px;
                                color: #333;
                                float: right;
                                font-size: 13px;
                                padding: 2px 5px;
                                text-align: center;
                                text-decoration: none;
                                &.a:hover {
                                    background: #e6e6e6;
                                    border: 1px solid #adadad;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .official-container1,.female-container,.male-container{
        width: 100%;
        padding: 50px;
        background: #0e3342;
        margin-top: 20px;
        overflow: hidden;
        span{
            display: inline-block;
        }
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #ccc;
            font-size: 30px;
        }
        ul{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            padding: 10px;
            li{
								position:relative; 
                float:left; 
                margin:2px; 
                width:20%; 
                min-height: 400px;
                margin:0; 
                padding:0; 
                list-style:none;
                img{ 
                    width:100%; 
                    height:400px;
                    position:absolute; 
                    top:0; 
                    left:0; 
                    display:block; 
                    transition:all 400ms ease; 
                    -moz-transition:all 400ms ease; 
                    -webkit-transition:all 400ms ease; 
                    -o-transition:all 400ms ease}
                    
                &.li-container img:hover{
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .5s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa; 
                    z-index:9999999
                    
                }
								&.li-container a{
									display: block; 
									width: 100%; 
									height:100%;
								}
                .Price-container{
                    position: absolute;
                    z-index: 1111;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    padding: 10px;
                    background: rgba(51, 51, 51, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .title{
                        width: 200px;
                        height: 20px;
                        color: #fff;
                        font-size: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .Price{
                        font-size: 18px;
                        font-weight: bold;
                        margin: 0;
                        color: #fff;
                        span{
                            font-size: 12px;
                        }
                    }
                }
                &.li-container:hover{
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .5s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa; 
                    z-index:9999999;
										cursor:pointer
                }
            }
        }
    }
    .brand-container1{
        width: 100%;
        padding: 50px;
        background: #333;
        margin-top: 20px;
        overflow: hidden;
        span{
            display: inline-block;
        }
        header{
            width: 100%;
            padding-bottom: 30px;
            color: #ccc;
            font-size: 30px;
        }
        ul{
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            padding:0;
            li{
                float:left; 
                position:relative; 
                margin:2px; 
                position:relative; 
                width:25%; 
                min-height: 400px;
                margin:0; 
                padding:0; 
                list-style:none;
                img{ 
                    width:100%; 
                    height:100%;
                    position:absolute; 
                    top:0; 
                    left:0; 
                    display:block; 
                    transition:all 400ms ease; 
                    -moz-transition:all 400ms ease; 
                    -webkit-transition:all 400ms ease; 
                    -o-transition:all 400ms ease}
                &.li-container img:hover{
                    -webkit-transform: scale(0.6.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    transition: all .8s;
                    border: 3px solid #aaa;
                    box-shadow:0px 0px  10px 5px #aaa;
                    z-index:9999999
                }
                .Price-container{
                    position: absolute;
                    z-index: 1111;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    padding: 10px;
                    background: rgba(51, 51, 51, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .title{
                        width: 200px;
                        height: 20px;
                        color: #fff;
                        font-size: 16px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .Price{
                        font-size: 18px;
                        font-weight: bold;
                        margin: 0;
                        color: #fff;
                        span{
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    
    .female-container{
        width: 100%;
        background: #000;
        .header-container{
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
            padding: 2px;
            border: 2px solid #fff;
            margin: 30px auto;
            color: #fff;
        }
        ul{
            display: flex;
            justify-content: center;
            background: #fff;
            .li-box{
                width: 20%;
                height: 100%;
                margin: 15px;
                &.li-box:nth-child(2){
                    margin-top:50px;
                }
                &.li-box:nth-child(5){
                    margin-top:50px;
                }
                &.li-box:nth-child(8){
                    margin-top:50px;
                }
                &.li-box:nth-child(4){
                    margin-top:50px;
                }
                &.li-box:nth-child(10){
                    margin-top:50px;
                }
                &.li-box:nth-child(11){
                    margin-top:50px;
                }
                &.li-box:hover{
                    box-shadow:none;
                }
                &.li-box img:hover{
                    box-shadow:none;
                }
            }
        }
    } 
    .male-container{
        background: #fff;
        .header-container{
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            padding: 2px;
            border: 2px solid #000;
            margin: 30px auto;
            color: #000;
        }
        ul{
            display: flex;
            justify-content: center;
            background: #000;
            .li-box{
                width: 20%;
                height: 100%;
                margin: 15px;
                &.li-box:nth-child(1){
                    margin-top:50px;
                }
                &.li-box:nth-child(3){
                    margin-top:50px;
                }
                &.li-box:nth-child(6){
                    margin-top:50px;
                }
                &.li-box:nth-child(8){
                    margin-top:50px;
                }
                &.li-box:nth-child(9){
                    margin-top:50px;
                }
                &.li-box:nth-child(12){
                    margin-top:50px;
                }
                &.li-box:hover{
                    box-shadow:none;
                }
                &.li-box img:hover{
                    box-shadow:none;
                }
            }
        }
    }
}
    
</style>
