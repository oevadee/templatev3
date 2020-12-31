<template>
  <div class="card" v-bind:class="{ purple: purpleTheme }">
    <i v-bind:class="icon"></i>
    <h2>{{ typeOfPlan }}</h2>
    <h3 class="card__price">${{ price }}<span>/month</span></h3>
    <div class="card__line"></div>
    <div class="card__aboutContainer">
      <div class="card__about">
        <div class="circle">
          <i class="fas fa-check"></i>
        </div>
        <p>Choose 20 language</p>
      </div>
      <div class="card__about">
        <div class="circle">
          <i class="fas fa-check"></i>
        </div>
        <p>See dashboard analytics</p>
      </div>
      <div class="card__about">
        <div class="circle">
          <i class="fas fa-check"></i>
        </div>
        <p>Unlimited chat</p>
      </div>
    </div>
    <Button uiType="primary" title="Request Demo" class="card__button" />
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    typeOfPlan: {
      type: String,
    },
    price: {
      type: Number,
    },
    purpleTheme: {
      type: Boolean,
    }
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

.card {
  width: 320px;
  height: 420px;
  background: $white;
  padding: 40px;
  text-align: left;
  color: $black;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  i.fa-recycle,
  i.fa-mountain,
  i.fa-briefcase {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: $orange;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .card__price {
    font-size: 2rem;
    margin-bottom: 20px;

    span {
      font-weight: 400;
    }
  }

  .card__line {
    width: 100%;
    height: 1px;
    background: $purple-light-shade;
    margin-bottom: 20px;
  }

  .card__aboutContainer {
    flex: 1;
  }

  .card__about {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .circle {
    width: 25px;
    height: 25px;
    background: $green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;

    i {
      font-size: 0.9rem;
    }
  }

  .card__button {
    width: 100%;
  }
}

.purple {
  background: $purple;
  color: $off-white;
  width: 320px;
  height: 460px;

  i.fa-recycle,
  i.fa-mountain,
  i.fa-briefcase {
    color: $off-white;
  }
}
</style>