<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand mr-0" href="#">
        <img src="./../../assets/logo.svg" alt="logo">
    </a>
    <div class="navbar-toggler" style="border:none;outline:none" id="botnav" >
    <img src="./../../assets/icon-hamburger.svg" alt="hamburger" class="ham">
  </div>
    <div class="collapse navbar-collapse" id="">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item mr-3 h6 p-0" v-for="link in links" :key="links.indexOf(link)">
          <a class="nav-link pb-0" href="#">{{ link }}</a>
        </li>
      </ul>
        <button class="mybtn" type="submit">{{ navbutton }}</button>
    </div>
  </div>
</nav>
<div class="mynav" id="dropnav">
      <ul class="">
        <li class="pb-3" v-for="link in links" :key="links.indexOf(link)">
          <a class="" href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: "NavbarSec",
  data() {
    return {
      links: ["Pricing", "Product", "About Us", "Careers", "Community"],
      navbutton: "Get Started",
    };
  },
  mounted(){
      $(document).ready(function(){
        var count = 4 ;
        $("#botnav").click(()=>{
          $("#dropnav").slideToggle(1000);
          if(count%2 == 0){
            $("body").css({
            height: "100vh",
            overflow: "hidden",
          });
          var source1 = require("./../../assets/icon-close.svg");
          $(".ham").attr("src",source1);
          }else{
           $("body").css({
            height: "fit-content",
            overflow: "visible",
          }); 
          var source2 = require("./../../assets/icon-hamburger.svg")
          $(".ham").attr("src",source2);
          }
          count++
        })
});
  }
};
</script>
<style scoped>
.navbar-light .navbar-nav .nav-link {
    color: var(--color4);
}
.navbar-light .navbar-nav .nav-link:hover {
    transition: 0.3s;
    color: var(--color3);
}
.navbar-light .navbar-nav .nav-link:focus {
    transition: 0.3s;
    color: var(--color3);
}
#dropnav{
  display: none;
}
@media screen and (min-width: 990px){
  #dropnav{
  display: none !important;
}
}
@media screen and (max-width: 990px){
    .mynav{
      position: absolute;
      top: 100px;
      right: 0;
      left: 0;
      height: 95vh;
      background-image: linear-gradient(to bottom , transparent , black);
      z-index: 999;
    }
    .mynav ul {
      list-style: none;
      text-align: center;
      background-color: white;
      margin: auto;
      width: 90%;
      border-radius: 10px;
      padding: 20px;
    }
    .mynav ul li a{
      text-decoration: none;
      color: var(--color4);
      font-weight: 700;
    }
    .mynav ul li a:hover{
      transition: 0.3s;
      color: var(--color3);
    }
}
</style>
