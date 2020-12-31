<template>
  <div class="opinions">
    <SaucyHeader header="What people say" />
    <div class="opinionsContainer">
      <div class="opinions__image">
        <div class="opinions__image__circle">
          <i class="fas fa-quote-left"></i>
        </div>
        <img src="../assets/section-2.jpg" alt="#" />
      </div>
      <div class="opinions__text">
        <p>
          "I really like using Chat bots, solutuins to all probles about
          language differences, so I don't need to think about it anymore"
        </p>
        <h2>Alexandra Manopo</h2>
        <small>CEO of madding.inc</small>
        <div class="opinions__text__stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SaucyHeader from "../components/SaucyHeader";

export default {
  name: "WhatPeopleSaySection",
  components: {
    SaucyHeader,
  },
};
</script>

<style lang='scss'>
@import "../__variables.scss";
.opinions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $black;
  margin-bottom: 100px;
}

.opinionsContainer {
  width: 90%;
  height: 400px;
  background: $purple;
  border-radius: 25px;
  margin-top: 150px;
  display: flex;
  padding: 40px 80px;

  .opinions__image {
    flex: 0.35;
    width: 350px;
    height: 470px;
    border-radius: 25px;
    position: relative;
    bottom: 140px;

    .opinions__image__circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: $orange;
      position: absolute;
      top: -20px;
      left: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    i {
      color: $white;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 25px;
      object-fit: cover;
    }
  }

  .opinions__text {
    flex: 0.65;
    padding: 40px;
    color: $white;

    p {
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 40px;
    }

    h2 {
      font-size: 1.2rem
    }

    small {
      font-weight: 300;
      font-size: 0.9rem;
      color: $off-white;
    }

    .opinions__text__stars {
      margin-top: 40px;

      i {
        font-size: 1.5rem;
        letter-spacing: 2px;
      }
    }
  }
}
</style>