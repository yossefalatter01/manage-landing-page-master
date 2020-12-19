<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="opinion in opinions" :key="opinion.id">
        <div class="opinion-container">
            <div class="image-container"><img :src="opinion.imageUrl" :alt="opinion.personName" /></div>
            <h6 class="image-caption">{{ opinion.personName }}</h6>
          <p>{{ opinion.text }}</p>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
} from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]);
export default {
  name: "OpinionsSwiper",
  data() {
    return {
      opinions: [
        {
          id: 1,
          imageUrl: require("../../assets/avatar-anisha.png"),
          personName: "Anisha Li",
          text:
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
        },
        {
          id: 2,
          imageUrl: require("../../assets/avatar-ali.png"),
          personName: "Ali Bravo",
          text:
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
        },
        {
          id: 3,
          imageUrl: require("../../assets/avatar-richard.png"),
          personName: "Richard Watts",
          text:
            "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
        },
        {
          id: 4,
          imageUrl: require("../../assets/avatar-shanai.png"),
          personName: "Shanai Gough",
          text:
            "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      //  autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      
      loop: true,
      centeredSlides: true,
      mousewheel: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints:{
        990:{
          slidesPerView: "auto",
        }
      }
    });
    
    setInterval(()=>{
      var mybullets = document.querySelectorAll(".swiper-pagination-bullet");
      mybullets.forEach(el => {
      el.style.backgroundColor = "transparent";
      el.style.border = "1px solid var(--color1)";
      el.style.width = "10px";
      el.style.height = "10px";
      el.style.opacity = "1";
    });
      var activeBullet = document.querySelector(".swiper-pagination-bullet-active");
      activeBullet.style.backgroundColor = "var(--color1)";
    })
  },
};
</script>
<style scoped>
/* .swiper-slide:nth-child(2n) {
      width: 30%;
    }

.swiper-slide:nth-child(3n) {
      width: 40%;
} */
.image-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image-container img {
  width: 80px;
  height: 80px;
}
.image-caption{
  padding-bottom: 20px;
  text-align: center;
  color: var(--color4);
  font-weight: 700;
}
.swiper-slide {
  width: fit-content;
  min-height: 257px;
  overflow: visible !important;
}
.swiper-container{
 overflow: visible !important;
}
.swiper-wrapper{
  overflow: visible !important;
}
.opinion-container {
  max-width: 550px;
  min-height: 221px;
  background-color: var(--color6);
  position: relative;
  padding-top: 67px;
  padding-left: 35px;
  padding-right: 35px;
  margin: auto;
}
.opinion-container p {
  color: var(--color3);
  text-align: center;
  font-size: 0.9em;
  padding: 0 34px;
}
@media screen and (max-width: 990px){
  .swiper-pagination{
    display: block;
    transform: translate3d(0, 62px, 0);
  }
  .swiper-wrapper{
    margin-bottom: 80px;
  }
  .opinion-container{
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .opinion-container p{
    padding: 0;
  }
}
@media screen and (min-width: 990px){
  .swiper-pagination{
    display: none;
  }
}
</style>
