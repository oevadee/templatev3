<template>
  <div class="quickStart__container">
    <div class="upperText">
      <h2>Simple steps before using Chat bot</h2>
      <p>
        How to use Chat bot is very easy, there are three steps you need to go
        through. Follow step by step for more details.
      </p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step__circle --active">
          <p>1</p>
        </div>
        <span>
          <h3>Register Account</h3>
          <small>Register your Email to be registered in our system.</small>
        </span>
      </div>
      <div class="step">
        <div class="step__circle">
          <p>2</p>
        </div>
        <span>
          <h3>Choose Plan</h3>
          <small
            >Choose the Plan you want. You can use the free plan to try.</small
          >
        </span>
      </div>
      <div class="step">
        <div class="step__circle">
          <p>3</p>
        </div>
        <span>
          <h3>Use Chatbot</h3>
          <small
            >Chat bots are ready for you to use to help your business.</small
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickStart",
};
</script>

<style lang="scss">
@import "../__variables.scss";

.quickStart__container {
  width: calc(100% - 80px);
  height: 500px;
  margin: 40px;
  padding: 60px 80px;
  border-radius: 25px;
  background: $purple;

  @media (max-width: $pc) {
    padding: 40px;
    height: 450px;
  }

  @media (max-width: $tablet) {
    height: 800px;
  }

  .upperText {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;

    @media (max-width: $tablet) {
      flex-direction: column;
      text-align: center;
    }

    h2 {
      width: 300px;
      font-size: 2rem;
      font-weight: 400;

      @media (max-width: $tablet) {
        width: 100%;
        margin-bottom: 20px;
      }
    }

    p {
      width: 485px;
      color: $off-white;
      letter-spacing: 2px;

      @media (max-width: $pc) {
        width: 50%;
      }

      @media (max-width: $tablet) {
        width: 90%;
      }
    }
  }

  .steps {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $tablet) {
      flex-direction: column;
      height: 500px;
    }

    .step {
      width: 250px;
      height: 100%;

      @media (max-width: $tablet) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 40px;
      }
    }

    .step__circle {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $purple-light-shade;
      margin-bottom: 20px;

      @media (max-width: $tablet) {
        margin: 0 40px 0 0;
      }

      p {
        font-size: 2rem;
      }
    }

    .--active {
      background: $orange;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      color: $white;
      margin-bottom: 15px;
    }

    small {
      font-size: 1rem;
      color: $grey;
    }
  }
}
</style>