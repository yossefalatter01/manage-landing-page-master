<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="left-side col-12 col-lg-6 text-center text-lg-left">
          <h2 class="mb-4 h2">{{ headText }}</h2>
          <p>{{ subHeadText }}</p>
        </div>
        <div class="right-side col-12 col-lg-6 pr-0">
          <div class="item" v-for="feature in features" :key="feature.id">
            <div class="item-text mb-5">
              <div class="d-flex align-items-center mb-3 my-item-head">
                <div class="item-num mr-3">{{ feature.num }}</div>
                <h5>{{ feature.head }}</h5>
              </div>
              <p class="pr-4">{{ feature.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DifferentiateSec",
  data() {
    return {
      headText: "What’s different about Manage?",
      subHeadText:
        "Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.",
      features: [
        {
          id: 1,
          num: "01",
          head: "Track company-wide progress",
          info:
            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
        {
          id: 2,
          num: "02",
          head: "Advanced built-in reports",
          info:
            "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
          id: 3,
          num: "03",
          head: "Everything you need in one place",
          info:
            "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.left-side {
  padding-right: 148px;
  font: 2.3em;
}
.left-side h2 {
  color: var(--color4);
}
.left-side p {
  color: var(--color3);
}
.item-text h5 {
  color: var(--color4);
}
.item-text p {
  color: var(--color3);
  margin-left: 86px;
  font-size: 0.95em;
}
.item-num {
  border-radius: 100px;
  color: white;
  background-color: var(--color1);
  padding: 7px 0;
  width: 70px;
  text-align: center;
}
@media screen and (max-width: 990px) {
  .left-side {
    padding: 0 10px;
    margin-bottom: 30px;
  }
  .left-side h2 {
    padding: 0 20px;
  }
  .item-text h5 {
    font-size: 1.05em;
  }
  .my-item-head {
    background-color: var(--color5);
    border-radius: 123px 0px 0px 104px;
  }
  .item-text p{
      margin: 0;
  }
}
</style>
