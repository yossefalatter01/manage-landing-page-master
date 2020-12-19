<template>
  <div id="app">
      <div class="bg-app">
        <div class="layer-1">
          <img src="./assets/bg-tablet-pattern.svg" alt="bg-app">
        </div>
        <div class="layer-2">
          <img src="./assets/bg-tablet-pattern.svg" alt="bg-app">
        </div>
      </div>
      <div class="mt-lg-5 mt-4">
        <navbar-sec />
      </div>
      <div>
       <heading-sec />
      </div>
      <div>
        <differentiate-sec />
      </div>
      <div>
        <opinion-sec />
      </div>
      <div>
        <sub-footer-sec />
      </div>
      <div>
        <footer-sec />
      </div>
  </div>
</template>

<script>
import DifferentiateSec from './components/DifferentiateSec/DifferentiateSec.vue'
import FooterSec from './components/FooterSec/FooterSec.vue'
import HeadingSec from './components/HeadSec/HeadingSec.vue'
import NavbarSec from './components/NavbarSec/NavbarSec.vue'
import OpinionSec from './components/OpinionSec/OpinionSec.vue'
import SubFooterSec from './components/SubFooterSec/SubFooterSec.vue'

import $ from 'jquery';

export default {
  components: { NavbarSec, HeadingSec, DifferentiateSec, OpinionSec, SubFooterSec, FooterSec},
  name: 'App',
  mounted(){
    $(document).ready(function(){
      $("html").niceScroll({
      cursorcolor:"var(--color1)",
      cursorwidth:"6px",
      cursorborder: "none",
      zindex: 999
});
});
  }
}
</script>

<style>
#app{
  position: relative;
  overflow: hidden;
}
.bg-app{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.layer-2{
    position: absolute;
    top: -211px;
    right: -118px;
}
@media screen and (min-width: 990px){
  .layer-1{
    position: absolute;
    bottom: 694px;
    left: -488px;
}
}
@media screen and (max-width: 990px){
  .layer-1{
    position: absolute;
    top: 538px;
    right: -685px;
  }
  .layer-1 img{
    width: 40%;
  }
    .layer-2{
    top: -117px;
    right: -410px;
    left: 41px;
}
    .layer-2 img{
      width: 61%;
    }
}
</style>
