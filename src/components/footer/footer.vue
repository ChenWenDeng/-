<template>
    <div class="footer">
            <div class="header-container">
                <h2>Eend商城</h2>
                <ul>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">招聘信息</a></li>
                    <li><a href="">法律声明</a></li>
                </ul>
            </div>
            <div class="bottom-container">
                <ul>
                    <li>
                        <p>地址：中国经济开发市深圳市福田</p>
                        <p>邮编：105820</p>
                        <p>总机：(8610)17620445033</p>
                    </li>
                    <li>
                        <p><a href="">京ICP证070512号</a></p>
                        <p><a href="">深圳市公安局朝阳分局备案编号：11010502582098</a></p>
                        <p><a href="">信息网络传播视听节目许可证0115826号</a></p>
                        <p><a href="">广播电视节目制作经营许可证（京）字第1587号</a></p>
                    </li>
                    <li>
                        <p>Copyright © 2006-2018 Yoka.com, All rights reserved.</p>
                        <p>Eend商城 版权所有</p>

                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    width:100%;
        background: #000;
        padding: 40px 0 10px 0;
        .header-container{
            width: 80%;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
            color: #fff;
            h2{
                width: 30%;
                padding: 20px;
            }
            ul{
                width: 70%;
                padding: 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li{
                    list-style-type:none;
                    a{
                        text-decoration: none;
                        color: #ccc;
                    }
                    a:hover{
                        color: #fff;
                    }
                }
            }
        }
        .bottom-container{
            width: 80%;
            margin: 0 auto;
            ul{
                width: 100%;
                display: flex;
                justify-content: space-around;
                justify-items: center;
                padding: 0;
                li{
                    width: 33%;
                    list-style-type:none;
                    color: #ccc;
                    padding-left: 15px;
                    p{
                        font-size: 14px;
                        a{
                            text-decoration: none;
                            color: #cccc;
                        }
                        a:hover{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
