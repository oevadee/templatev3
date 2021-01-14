<template>
  <div class="feature">
    <div class="feature__left" v-bind:class="{ leftOrder: imageLeft }">
      <img :src="require('@/assets/' + image + '')" alt="videoSection" />
    </div>
    <div class="feature__right">
      <i v-bind:class="icon"></i>
      <h3>{{ header }}</h3>
      <small>{{ description }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature",
  props: {
    id: String,
    image: String,
    icon: String,
    header: String,
    description: String,
    imageLeft: Boolean,
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

.feature {
  border: solid 1px red;
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;

  @media (max-width: $tablet) {
    flex-direction: column;
  }

  .feature__left {
    border: solid 1px blue;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    order: 3;

    img {
      width: 320px;
      height: 320px;
      border-radius: 25px;
      object-fit: cover;
    }
  }

  .leftOrder {
    order: 1;
  }

  .feature__right {
    border: solid 1px yellow;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    order: 2;
    
    @media (max-width: $tablet) {
      order: 3
    }

    i {
      font-size: 2.5rem;
      color: $orange;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 20px;
    }

    small {
      color: $grey;
    }
  }
}
</style>