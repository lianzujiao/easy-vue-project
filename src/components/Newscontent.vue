<template>
    <div>
        <div v-for="(item,key) in msg">
            <div v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:[]
        }
    },
    methods:{
        getDate(value){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+value
            this.axios.get(api).then((respon)=>{
                
                this.msg=respon.data.result
            },(error)=>{

            })
        }
    },
    mounted(){
        var aid=this.$route.params.aid;
        this.getDate(aid)
    }
}
</script>