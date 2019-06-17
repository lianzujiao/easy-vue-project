<template>
  <div class="main">
    <div id="main_menu" class="header navbar-fixed-top">
      <div class="main_menu_bg">
        <div class="container">
          <div class="row">
            <div class="navi-menu">
              <nav class="navbar navbar-default my_navbar">
                <div class="container-fluid">
                 
                  <div class="navbar-header">
                    <button
                      type="button"
                      class="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>

                    <router-link to="/home">
                      <img class="navi-img" alt="Brand" src="../assets/img/wy.png">
                    </router-link>
                  </div>

                  
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                      <li>
                        <router-link to="/heritage">非遗文化</router-link>
                      </li>
                      <li>
                        <router-link to="/festival">节日习俗</router-link>
                      </li>
                      
                    </ul>
                  </div>
                
                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 footter center-block">
          <p>版权所有</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {//控制导航条动画样式
      $(".header").addClass("navbar-scroll");
      $(".navi-menu").css("margin-top", "80px");
      $(".navi-img").css("width", "170px");
      $(".main_menu_bg").addClass("main_menu_bg_scroll");
    } else {
      $(".header").removeClass("navbar-scroll");
      $(".navi-menu").css("margin-top", "50px");
      $(".navi-img").css("width", "200px");
      $(".main_menu_bg").removeClass("main_menu_bg_scroll");
    }
  });
});
export default {
  name: "Navigation",
  data() {
    return {};
  }
};
</script>


<style lang='scss' scoped>
.main {
  font-size: 18px;
  .navbar-default {
    border: 0px;
    background-color: white;
  }
  .navbar-fixed-top {
    top: 0px;
    transition: all 0.5s;
  }
  .navi-img {
    transition: all 0.5s;
  }
  .navi-menu {
    transition: all 0.5s;
  }
  .navbar-scroll {
    top: -70px;
    transition: all 0.5s;
  }
  .main_menu_bg {
    margin-top: 0px;
    background-color: #ffffff;
    height: 155px;
    border-bottom: 1px solid #ddd;
  }
  .main_menu_bg_scroll {
    -moz-box-shadow: 1px 1px 10px #e0dddd;
    -webkit-box-shadow: 1px 1px 10px #e0dddd;
    box-shadow: 1px 1px 10px #e0dddd;
  }
  .navi-menu {
    margin-top: 50px;
  }
  .navbar-brand {
    img {
      margin-top: -20px;
    }
  }
  .main-container {
    margin-top: 155px;
   
    transition: all 1s;
  }
}
.footter{
  height: 100px;
  padding-top: 30px;
  color:#656565;
  background: #bdcdee
}
</style>
