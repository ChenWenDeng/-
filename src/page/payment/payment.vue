<template>
    <div class="payment-container">
        <headerTop/>
        <div class="main-container">
            <header>请输入支付的金额</header>
            <input type="text" v-model="number">
            <button @click="payment" class="btn btn-primary"  :disabled="!number">
                立即支付
            </button>
        </div>
        <Footer/>
    </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop'
import Footer from '../../components/footer/footer'
export default {
    components:{
        headerTop,
        Footer
    },
    data(){
        return{
            number:null,
        }
    },
    methods:{
        payment(){
            if(this.number!=399){
                this.$notify({
                    title: '警告',
                    message: '金额不正确,请重新输入',
                    type: 'warning'    
                });
            }else{
                this.$notify({
                title: '成功',
                message: '支付成功',
                type: 'success'
                });
                this.$router.push({path:'/'});
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.payment-container{
    width: 100%;
    .main-container{
        width: 90%;
        min-height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input{
            width: 300px;
            height:50px;
            border: 2px solid #000;
            padding: 5px 30px;
            margin:30px;
            text-align: center;
        }
    }
}
</style>
