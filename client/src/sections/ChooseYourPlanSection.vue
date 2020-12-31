<template>
  <div class="chooseContainer">
    <SaucyHeader header="Choose Your Plan" />
    <div class="cardContainer">
      <Card icon="fas fa-recycle" typeOfPlan="Free Plan" :price="0" />
      <Card :purpleTheme='true' icon="fas fa-mountain" typeOfPlan="Premium Plan" :price="5" />
      <Card icon="fas fa-briefcase" typeOfPlan="Businnes Plan" :price="20" />
    </div>
  </div>
</template>

<script>
import SaucyHeader from "../components/SaucyHeader";
import Card from "../components/Card";

export default {
  name: "ChooseYourPlanSection",
  components: {
    SaucyHeader,
    Card,
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";
.chooseContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $black;
  text-align: center;
  margin-bottom: 100px;
}

.cardContainer {
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>