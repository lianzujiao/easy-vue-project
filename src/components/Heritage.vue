<template>

    <div>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 ">
                     <img src="../assets/img/fy-img.png" alt="" class="img-responsive center-block" width='1170'>
                </div>
               
            </div>
            <div class="row heri-main-content">
                <div class=" center-block  col-md-8 col-md-offset-2 col-md-push-2 ">
                    <h2>非物质文化遗产</h2>
                    <p class='text-content'>非物质文化遗产又称口头或无形文化遗产，它包括各种类型的民族传统和民间知识，
                        各种语言，口头文学，风俗习惯，民族民间的手工艺、传统医学以及其他艺术。
                        广西贯彻“保护为主、抢救第一、合理利用、传承发展”的方针，目前广西已列入自治区级非物质文化遗产名录共有58项目。
                        其中，28个项目入选国家级第一、第二批非物质文化遗产名录。</p>
                </div>  
            </div>
        </div>
        <div class="container">
                <div class="row" style="margin:80px;">
                    <div class="col-md-8 col-md-pull-2 col-md-push-2 center-block">
                        <video id="my-player" class="video-js vjs-big-play-centered "    controls    preload="auto"        data-setup='{}' >
                        <source src="../assets/video/video.mp4" type="video/mp4" ></source>
                     </video>
                </div>
            </div>
        </div>
        <div class="container" style="height: 1100px;">
            <div class="row">
                 <h2 style="margin:50px;">广西非遗旅游</h2>
                <div class="col-md-12 traval-part">
                  <div class="separator separator1 wow bounceInUp"></div>
                     <div class="separator separator2 wow bounceInUp"></div>
                      <div class="separator separator3 wow bounceInUp"></div>
                       <div class="separator separator4 wow bounceInUp"></div>
                       <div class="ly-part col-md-6 wow bounceInLeft " data-wow-delay='0.8s'>
                           <div class="ly-part-title ly-part-same "style=' top: 50px;left: 8%;'>
                            <h4>三江侗族自治县</h4>
                           <p class="ly-part-content">三江侗族自治县拥有着楼桥、纺纱、百家宴、歌舞等丰富多彩、独具特色的非遗资源优势。</p>
                           </div>
                           
                           <div class="ly-part-img ly-part-same" style="right:0px;">
                            <img src="../assets/img/ly_1.png" alt="" class="img-responsive center-block">
                           </div>
                       </div>
                       <div class="ly-part col-md-6 wow bounceInRight " style="top:180px;" data-wow-delay='0.8s'>
                            <div class="ly-part-img ly-part-same" style="left:0px;" >
                            <img src="../assets/img/ly_2.png" alt="" class="img-responsive center-block" width="191">
                           </div>
                           <div class="ly-part-title ly-part-same" style="left:45%;top: 30px;">
                            <h4>钦州烟霞山</h4>
                           <p class="ly-part-content">其地貌是由红色砂岩构成（形成于6000万年前的河、湖中），经过百千年的流水塑造形成巍峨独特的地形，地理学称为丹霞地貌。</p>
                           </div>
                           
                          
                       </div>
                      <div class="ly-part col-md-6 wow bounceInLeft " style="top:350px;" data-wow-delay='0.8s'>
                           <div class="ly-part-title ly-part-same "style=' top: 50px;left: 8%;'>
                            <h4>风情马山</h4>
                           <p class="ly-part-content">游世界名洞金伦洞，看广西非物质文化遗产瑶乡打榔舞，拍石林奇景，赏书画奇石</p>
                           </div>
                           
                           <div class="ly-part-img ly-part-same " style="right:0px;">
                            <img src="../assets/img/ly_3.png" alt="" class="img-responsive center-block" width="191">
                           </div>
                       </div>
                        <div class="ly-part col-md-6 wow bounceInRight" style="top:545px;" data-wow-delay='0.8s'>
                            <div class="ly-part-img ly-part-same" style="left:0px;" >
                            <img src="../assets/img/ly_4.png" alt="" class="img-responsive center-block" width="191">
                           </div>
                           <div class="ly-part-title ly-part-same" style="left:45%;top: 30px;">
                            <h4>宾阳炮龙节</h4>
                           <p class="ly-part-content">传统炮龙年年舞，年年传统舞炮龙。宾阳炮龙节至今已有上千年的悠久历史，2008年6月宾阳炮龙节入选第二批国家非物质文化遗产名录。</p>
                           </div>
                           
                          
                       </div>
                      <div class="ly-part col-md-6 wow bounceInLeft " style="top:710px;">
                           <div class="ly-part-title ly-part-same  "style=' top: 50px;left: 8%;'>
                            <h4>田州古城</h4>
                           <p class="ly-part-content">以壮族文化为特色的广西田阳县田州古城，正逐渐成为壮族“非遗”文化展示景区，田州古城展示了“麽乜”等壮族非物质文化遗产。</p>
                           </div>
                           
                           <div class="ly-part-img ly-part-same " style="right:0px;">
                            <img src="../assets/img/ly_5.png" alt="" class="img-responsive center-block" width="191">
                           </div>
                       </div>

                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
 import {WOW} from 'wowjs'  
 



export default {
    data(){
        return{

        }
    },
    components:{
        
    },
    
}
</script>
<style lang="scss" scoped>

.video-js{
    margin: 0 auto;
}
.heri-main-content{
   background-color: #f7f4f4;
   h2{
       line-height: 65px;
   }
   .text-content{
       color: #656565;
       line-height: 35px;
       text-align: left;
           text-indent: 40px;

   }
}
.traval-part{
    position: relative;
   
    .separator{
        width:2px;
        height:250px;
        background: #656565;
        transform: rotate(30deg);
        transition: height 0.4s;
        position: absolute;
        left:50%;
    }
    .separator2 {
        transform: rotate(-30deg);
        top:215px;
    }
    
    .separator3{
        top:430px;
    }
    .separator4{
         transform: rotate(-30deg);
        top:645px;
    }
    h4{
        font-weight: bolder;
    }
    .ly-part-title{
        width: 50%;
        position: absolute;
        
    }
    .ly-part-img{
        position:absolute;
       
       
    }
}

//媒体查询部分
@media screen and(min-width: 1200px){

}
@media screen and(max-width:1219px) and(min-width: 960px){

}
@media screen and(max-width:959px) and(min-width:768px){
    .separator{
        display: none;
    }
}
@media screen and(max-width:767px) and(min-width:377px){
    .separator{
        display: none;
    }
}
@media screen and(max-width:376px){
    .separator{
        display: none;
    }
}
</style>