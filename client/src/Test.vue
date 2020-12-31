<template>
  <ChooseYourPlanSection />
</template>

<script>
// Sections
import ChooseYourPlanSection from "./sections/ChooseYourPlanSection";

export default {
  name: "app",
  components: {
    ChooseYourPlanSection
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
