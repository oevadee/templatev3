<template>
  <div class="quickStart__container">
    <div class="upperText">
      <h2>Simple steps before using Chat bot</h2>
      <p>
        How to use Chat bot is very easy, there are three steps you need to go
        through. Follow step by step for more details.
      </p>
    </div>
    <div class="quickStart">
      <div class="quickStart__circle --active --circle1">
        <p>1</p>
      </div>
      <div class="quickStart__line"></div>
      <div class="quickStart__circle --circle2">
        <p>2</p>
      </div>
      <div class="quickStart__line"></div>
      <div class="quickStart__circle --circle3">
        <p>3</p>
      </div>
    </div>
    <div class="steps">
      <div>
        <h3>Register Account</h3>
        <small>Register your Email to be registered in our system.</small>
      </div>
      <div>
        <h3>Choose Plan</h3>
        <small>Choose the Plan you want. You can use the free plan to try.</small>
      </div>
      <div>
        <h3>Use Chatbot</h3>
        <small>Chat bots are ready for you to use to help your business.</small>
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

  .upperText {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;

    h2 {
      width: 300px;
      font-size: 2rem;
      font-weight: 400;
    }

    p {
      width: 485px;
      color: $off-white;
      letter-spacing: 2px;
    }
  }

  .quickStart {
    width: 85%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .quickStart__circle {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $purple-light-shade;
    p {
      font-size: 2rem;
    }
  }

  .--active {
    background: $orange;
  }

  .quickStart__line {
    width: 200px;
    height: 1px;
    border-top: 1px dashed $white;
  }

  .steps {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 220px;

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: $white;
        margin-bottom: 15px
      }

      small {
        font-size: 1rem;
        color: $grey;
      }
    }
  }
}
</style>