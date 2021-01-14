<template>
  <div class="homeSection">
    <div class="header">
      <i class="fas fa-comment-dots"></i>
      <Nav />
      <Button title="Request Demo" />
    </div>
    <div class="heroSection">
      <h1>Communicating in different languages becomes easier</h1>
      <p class="heroSection__description">
        Communicating is easier and simpler with a chat bot, choose the language
        you want and send a message right away.
      </p>
      <form class="heroSection__form" @submit.prevent="handleSubmit">
        <div
          class="inputContainer"
          :class="{ inputContainer__invalid: formState === 'invalidEmail' }"
        >
          <input
            placeholder="Enter your email here"
            type="email"
            v-model="email"
            :disabled="inputIsDisabled"
          />
          <p
            class="inputContainer__errMessage"
            v-if="formState === 'userExist'"
          >
            What's the point of signing twice?
          </p>
          <p
            class="inputContainer__errMessageInvalid"
            v-else-if="formState === 'invalidEmail'"
          >
            That's not a valid email adress
          </p>
        </div>
        <Button
          :title="buttonTitle"
          :state="formState"
          :isDisabled="buttonIsDisabled"
        />
      </form>
    </div>
    <div class="videoSection">
      <img src="../assets/videoSection.jpg" alt="video Section" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// Components
import Button from "../components/Button";
import Nav from "../components/Nav";

export default {
  name: "app",
  components: {
    Button,
    Nav,
  },
  data() {
    return {
      email: "",
      formState: "default",
      buttonTitle: "Submit",
      buttonIsDisabled: null,
      inputIsDisabled: null,
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:8000/subscribe", {
          email: this.email,
        })
        // .post("https://templatev3glo.herokuapp.com/subscribe", {
        //   email: this.email,
        // })
        .then((res) => {
          console.log(res.status);
          this.formState = "sent";
          this.buttonTitle = "Signed up";
          this.buttonIsDisabled = true;
          this.inputIsDisabled = true;
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data === "Member already exist") {
            this.formState = "userExist";
            this.buttonIsDisabled = true;
            setTimeout(() => {
              this.buttonIsDisabled = false;
              this.formState = "default";
              this.email = "";
            }, 3000);
          } else if (err.response.data === "Invalid email address") {
            this.formState = "invalidEmail";
            this.buttonTitle = "Invalid email";
            this.buttonIsDisabled = true;
          }
        });
    },
  },
  watch: {
    email(newEmail, oldEmail) {
      const emailRegex = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
      if (emailRegex.test(newEmail.toLowerCase()) && oldEmail !== newEmail) {
        this.buttonIsDisabled = false;
        this.buttonTitle = "Submit";
        this.formState = "default";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

.homeSection {
  width: calc(100% - 30px);
  margin: 15px;
  background: $purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 225px;
}

.header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  margin-bottom: 20px;

  i {
    font-size: 2rem;
    transform: scaleX(-1);
  }
}

.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 250px;
  margin-bottom: 250px;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    width: 800px;
    text-align: center;
    margin-bottom: 10px;
  }

  p.heroSection__description {
    color: $off-white;
    width: 600px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 1rem;
  }
}

.heroSection__form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 600px;

  .inputContainer {
    border: solid 1px $black;
    padding: 13px 20px;
    background: $white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 350px;
    border-radius: 50px;
    overflow: hidden;

    .inputContainer__errMessage {
      margin-top: 5px;
      color: $orange;
    }

    .inputContainer__errMessageInvalid {
      margin-top: 5px;
      color: $red;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }

  .inputContainer__invalid {
    border: solid 3px $red;
  }
}

.videoSection {
  width: 700px;
  height: 400px;
  padding: 10px;
  background-color: $white;
  border-radius: 25px;
  position: absolute;
  top: 430px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
}
</style>