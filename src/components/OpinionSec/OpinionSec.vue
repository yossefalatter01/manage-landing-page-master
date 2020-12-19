<template>
  <div class="opinion-sec">
    <div class="container-fluid p-0">
      <div class="heading">
        <h2 class="text-center">{{ headText }}</h2>
      </div>
      <div class="opinions-container px-3">
          <opinions-swiper />
      </div>
      <div class="text-center mt-3">
        <button class="mybtn">{{ opinionsButton }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import OpinionsSwiper from './OpinionsSwiper.vue';

export default {
  components: { OpinionsSwiper },
  name: "OpinionSec",
  data() {
    return {
      headText: "What they’ve said",
      opinionsButton: "Get Started",
    };
  },
};
</script>
<style scoped>
.opinion-sec{
  padding-top: 92px;
  padding-bottom: 132px;
  overflow: hidden;
}
.heading{
  padding-bottom: 95px;
}
@media screen and (max-width: 990px){
.opinion-sec{
  padding-top: 50px;
  padding-bottom: 50px;
}
}
</style>
