<template>
  <div>
    <HomeSection />
    <FeaturesSection />
    <QuickStartBox />
    <ChooseYourPlanSection />
    <WhatPeopleSaySection />
    <!-- <Questions /> -->
    <Footer />
  </div>
</template>

<script>
// Sections
import HomeSection from "./sections/HomeSection";
import FeaturesSection from "./sections/FeaturesSection";
import ChooseYourPlanSection from "./sections/ChooseYourPlanSection";
import WhatPeopleSaySection from "./sections/WhatPeopleSaySection";
// import Questions from "./sections/Questions";

// Components
import QuickStartBox from "./components/QuickStartBox";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    HomeSection,
    FeaturesSection,
    QuickStartBox,
    ChooseYourPlanSection,
    WhatPeopleSaySection,
    Footer,
    // Questions
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap");
@import "./__variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 17px;
}

body {
  background: $white;
  color: $white;
}
</style>
