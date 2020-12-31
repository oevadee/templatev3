<template>
  <div class="features">
    <SaucyHeader header="The features that we present" />
    <Feature
      v-for="section in sections"
      :key="section.id"
      v-bind:image="section.image"
      v-bind:header="section.header"
      v-bind:description="section.description"
      v-bind:icon="section.icon"
      v-bind:imageLeft="section.imageLeft"
    />
  </div>
</template>

<script>
import Feature from "../components/Feature";
import SaucyHeader from "../components/SaucyHeader";

export default {
  name: "features",
  components: {
    Feature,
    SaucyHeader
  },
  data() {
    return {
      sections: [
        {
          id: "1",
          image: "section-1.jpg",
          icon: "fas fa-lock",
          header: "Data will be safeguarded",
          description:
            "User data security is one of our priorities. We will keep, secure and protect your data in order to keep it safe and secure.",
          imageLeft: true,
        },
        {
          id: "2",
          image: "section-2.jpg",
          icon: "fas fa-envelope",
          header: "Can be used for various chat platforms",
          description:
            "Chat bot multi platform, can be used for multiple platforms at once. For WhatsApp, Telegram, Email and even Slack though.",
          imageLeft: false,
        },
        {
          id: "3",
          image: "section-3.jpg",
          icon: "fas fa-globe",
          header: "Choose the language you want",
          description:
            "It is available in various languages, so you can change it whenever you want.",
          imageLeft: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

.features {
  width: 100%;
  color: $black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .features__line {
    width: 40px;
    height: 4px;
    border-radius: 25px;
    background: $purple;
  }
}
</style>