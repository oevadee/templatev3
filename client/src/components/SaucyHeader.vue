<template>
  <h2>{{ header }}</h2>
  <div class="line"></div>
</template>

<script>
export default {
  name: "Saucy",
  props: {
    header: String,
  },
};
</script>

<style lang='scss'>
@import "../__variables.scss";

h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 10px;
}

.line {
  width: 40px;
  height: 4px;
  border-radius: 25px;
  background: $purple;
  margin-bottom: 40px;
}
</style>