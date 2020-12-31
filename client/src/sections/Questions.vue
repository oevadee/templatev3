<template>
  <div class="questions">
    <SaucyHeader header="Frequently Asked Questions (FAQs)" />

  </div>
</template>

<script>
import SaucyHeader from "../components/SaucyHeader";
export default {
  name: "Questions",
  components: {
    SaucyHeader,
  },
};
</script>

<style lang='scss'>
@import '../__variables.scss';

.questions {
  margin: 80px 0 40px;
  color: $black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>