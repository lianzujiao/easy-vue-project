<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <div class="slid center-block">
            <div class="list">
              <img src="../assets/img/ban1.png" alt class="img-responsive">
              <img src="../assets/img/ban2.png" alt class="img-responsive">
              <img src="../assets/img/ban3.png" alt class="img-responsive">
            </div>
            <div class="pointers">
              <div class="pointer active">1</div>
              <div class="pointer">2</div>
              <div class="pointer">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="head-title text-center">
              <h1>经典流传</h1>
            </div>
            <div class="culture-area">
              <div class="row">
                <div class="col-md-6 wow bounceInLeft">
                  <img src="../assets/img/xiuq.jpg" alt width="550" class="img-responsive">
                </div>
                <div class="col-md-5 col-md-push-1 wow bounceInRight">
                  <div class="culture-content text-left">
                    <h2>壮族绣球</h2>
                    <h4>中国民间工艺品</h4>
                    <div class="separator"></div>
                    <p>
                      绣球一般由彩绣做成，是中国民间常见的吉祥物，尤其在壮族民间广为流传。
                      在中国古代，有些地方有一个风俗，当姑娘到了婚嫁之时，就预定于某一天
                      （这一天一般是正月十五或八月十五）让求婚者集中在绣楼之下，姑娘抛出
                      一个绣球，谁得到这个绣球，谁就可以成为这个姑娘的丈夫。
                    </p>
                    <p>当然，姑娘一般会看准意中人，把绣球抛到他身上，以便他捡到。在很多地方，抬新娘的花轿顶上要结一个绣球，意图吉庆瑞祥。</p>
                    <router-link to="/home/xiuqiu" class="btn btn-default">了解更多</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="culture-area">
              <div class="row">
                <div class="col-md-5 wow bounceInLeft">
                  <div class="culture-content text-left">
                    <h2>壮族山歌</h2>
                    <h4>Fwen raeuz 壮歌</h4>
                    <div class="separator"></div>
                    <p>
                      壮族山歌简称为“Fwen raeuz 壮歌”，又称“壮族民歌”，一般指壮族人民用壮话演唱的民间歌谣。
                      壮歌最早可以追溯到壮族原始社会时代狩猎时的呐喊。真正义意上的壮歌应该是从壮族原始社会中的生产劳动和祭祀活动开始，这从现在少数民族的风俗习惯中可见一斑。
                    </p>
                    <p>
                      广西壮族古老的歌圩集会和绣球一直流传至今。壮族素以“善歌”著称，壮乡素有“歌海”盛誉。
                      壮民善以山歌来表现生活，抒发自己的思想感情。壮族山歌历史悠久，壮民从盘古开天地一直唱到如今，几乎人人能歌善唱，已近“以歌代言”的地步。
                    </p>
                    <router-link to="/home/song" class="btn btn-default">了解更多</router-link>
                  </div>
                </div>
                <div class="col-md-6 col-md-push-1 wow bounceInRight">
                  <img src="../assets/img/duige.png" alt width="550" class="img-responsive">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="work" class="work">
      <div class="container">
        <div class="row">
          <div class="main-work-content text-center">
            <div class="head-title">
              <h2>民族舞蹈</h2>
            </div>
          </div>
          <div class="dance-work">
            <div class="col-md-4 col-sm-4 col-xs-12 text-center dance-content">
              <div class="dance-photo">
                <img src="../assets/img/pf01.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>春堂舞</h4>
                <div class="separator center-block"></div>
                <p>春堂舞是一种源于两广的传统舞蹈，一般是用于春耕播种的庆贺仪式</p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12 text-center dance-content"
              style="top:0px;left:33%;"
            >
              <div class="dance-photo">
                <img src="../assets/img/pf02.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>绣球舞</h4>
                <div class="separator center-block"></div>
                <p>壮族民间舞蹈。主要流行于德保、靖西、田东、田阳、龙州、天等、大新、都安、马山等县。是舞蹈和体育娱乐融为一体的活动形式。</p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12 text-center dance-content"
              style="top:0px;left:66%;"
            >
              <div class="dance-photo">
                <img src="../assets/img/pf03.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>扁担舞</h4>
                <div class="separator center-block"></div>
                <p>壮族的“扁担舞”源于舂米的劳动生活，是从“舂米舞”而发展为用扁担敲打板凳的形式，人们此起彼伏、错落有致的敲打中，表演插秧、收割、打谷、舂米等。</p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12 text-center dance-content"
              style="top:33%;left:66%;"
            >
              <div class="dance-photo">
                <img src="../assets/img/pf4.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>斑鸠舞</h4>
                <div class="separator center-block"></div>
                <p>
                  在南宁市良庆区南晓镇一带，流传着一种有上千年历史、
                  名为《斑鸠舞》的神秘舞蹈。它以模仿斑鸠的生活习性和动作为舞蹈动作，被当地群众称为《莽罗娄》（壮语译音，意为有趣的斑鸠）。
                </p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12 text-center dance-content"
              style="top:52%;left:33%;"
            >
              <div class="dance-photo">
                <img src="../assets/img/pf05.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>采茶舞</h4>
                <div class="separator center-block"></div>
                <p>
                  采茶舞是流传于民间的传统歌舞，如
                  广西玉林市的壮族采茶舞等等。各地的的采茶舞，虽然略有差异，但是总体上都是与采茶密切相关的，而且内容丰富，动作优美。
                </p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-12 text-center dance-content"
              style="top:33%;left:0px;"
            >
              <div class="dance-photo">
                <img src="../assets/img/pf6.jpg" alt class="img-responsive">
              </div>
              <div class="dance-block center-block">
                <h4>采茶舞</h4>
                <div class="separator center-block"></div>
                <p>
                  采茶舞是流传于民间的传统歌舞，如
                  广西玉林市的壮族采茶舞等等。各地的的采茶舞，虽然略有差异，但是总体上都是与采茶密切相关的，而且内容丰富，动作优美。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { WOW } from "wowjs";
$(function() {
  slidPointer();

  function slidPointer() {
    var pointers = $(".pointer");

    for (let i = 0; i < pointers.length; i++) {
      pointers[i].onclick = function() {
        var imgWidth = -$(".list img").width(); //获取当前屏幕尺寸下的图片尺寸大小

        /**
         * 给每个pointer绑定点击事件，在点击之后，先将所有的pointer都移除类 active;
         * 然后再给当前点中的 this 添加类 active;
         */
        $(".pointer").removeClass("active");
        $(".list").animate({ left: i * imgWidth + "px" });
        $(this).addClass("active");
      };
    }
  }
});
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.slid {
  position: relative;

  overflow-x: hidden;
  .list {
    position: absolute;

    img {
      float: left;
    }
  }

  .pointers {
    position: absolute;

    .pointer {
      background-color: rgb(75, 74, 74);
      font-size: 0px;

      transform: rotate(45deg);
      cursor: pointer;
    }
    .pointer:hover {
      background-color: rgba(134, 145, 247, 0.5);
    }
    .active {
      background-color: white;
    }
  }
}
// 经典文化部分
.section {
  background-color: #f9f9f9;
  padding-top: 60px;
}
.head-title {
  margin-bottom: 60px;
}
.separator {
  width: 60px;
  height: 2px;
  background-color: black;
  margin: 20px 0 20px;
}

.culture-content {
  margin-bottom: 90px;
  h4 {
    line-height: 40px;
  }
  p {
    line-height: 30px;
    margin-bottom: 25px;
    color: #656565;
    text-indent: 40px;
  }
  a {
    text-decoration: none;
    display: block;
    border: 0.5px solid #ccc;
    border-radius: 45px;
    color: #656565;
    background-color: #fff;
  }
  a:hover {
    border-color: rgba(134, 145, 247, 0.5);
  }
  .btn {
    font-size: 20px;

    width: 40%;
    letter-spacing: 5px;
  }
}
//民族舞蹈部分
.work {
  padding-top: 60px;
}
.dance-work {
  position: relative;
  .dance-content {
    position: absolute;
  }

  .dance-photo {
    margin-bottom: 30px;
    img.img-responsive {
      filter: grayscale(60%);
      -webkit-filter: grayscale(60%);
    }
  }
  .dance-block {
    background: rgba(134, 145, 247, 0.8);
    width: 80%;
    height: 80%;
    left: 10%;
    top: 5%;
    position: absolute;
    padding-top: 15%;
    opacity: 0;
    transition: all 0.6s;
    z-index: 5;
    color: white;
    .separator {
      margin: 5% 40%;
      background-color: white;
    }
  }
}
.dance-content:hover .dance-block {
  opacity: 1;
}
//媒体查询部分
@media screen and(min-width: 1200px) {
  .slid {
    width: 1170px;
    height: 570px;
    .list {
      width: 3510px;
      height: 570px;
      img {
        width: 1170px;
        height: 570px;
      }
    }
    .pointers {
      right: 10px;
      top: 250px;
      .pointer {
        width: 10px;
        height: 10px;
        margin: 10px;
      }
    }
  }
  .dance-work {
    height: 1167px;
  }
}
@media screen and(max-width:1219px) and(min-width: 960px) {
  .slid {
    width: 800px;
    height: 376px;
    .list {
      width: 2400px;
      height: 376px;
      img {
        width: 800px;
        height: 376px;
      }
    }
    .pointers {
      right: 8px;
      top: 150px;
      .pointer {
        width: 8px;
        height: 8px;
        margin: 8px;
      }
    }
  }
  .dance-work {
    height: 960px;
  }
}
@media screen and(max-width:959px) and(min-width:768px) {
  .slid {
    width: 750px;
    height: 352px;
    .list {
      width: 2250px;
      height: 352px;
      img {
        width: 750px;
        height: 352px;
      }
    }
    .pointers {
      right: 7px;
      top: 120px;
      .pointer {
        width: 7px;
        height: 7px;
        margin: 7px;
      }
    }
  }
  .dance-work {
    height: 768px;
  }
}
@media screen and(max-width:767px) and(min-width:377px) {
  .slid {
    width: 370px;
    height: 172px;
    .list {
      width: 1110px;
      height: 172px;
      img {
        width: 370px;
        height: 172px;
      }
    }
    .pointers {
      right: 7px;
      top: 80px;
      .pointer {
        width: 7px;
        height: 7px;
        margin: 7px;
      }
    }
  }
  .dance-work {
    .dance-content {
      position: relative;
      left: 0px !important;
    }
    img {
      width: 100%;
    }
  }
}
@media screen and(max-width:376px) {
  .slid {
    width: 340px;
    height: 158px;
    .list {
      width: 1020px;
      height: 158px;
      img {
        width: 340px;
        height: 158px;
      }
    }
    .pointers {
      right: 1px;
      top: 50px;
      .pointer {
        width: 7px;
        height: 7px;
        margin: 7px;
      }
    }
  }
  .dance-work {
    .dance-content {
      position: relative;
      left: 0px !important;
    }
    img {
      width: 100%;
    }
  }
}
</style>