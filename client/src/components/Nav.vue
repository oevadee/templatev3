<template>
  <nav>
    <ul class="navbar" :class="{ __open: mobileNavOpen === true }">
      <li class="navbar__link --active">
        <a href="#">Home</a>
      </li>
      <li class="navbar__link">
        <a href="#">Products</a>
      </li>
      <li class="navbar__link">
        <a href="#">Partnership</a>
      </li>
      <li class="navbar__link">
        <a href="#">Blog</a>
      </li>
      <li class="navbar__link">
        <a href="#">Company</a>
      </li>
    </ul>
    <i :class="mobileIconClass" @click="openMobileNav"></i>
  </nav>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      mobileNavOpen: false,
      mobileIconClass: "fas fa-bars",
    };
  },
  methods: {
    openMobileNav() {
      console.log("click", this.mobileNavOpen);
      this.mobileNavOpen = !this.mobileNavOpen;
      this.mobileIconClass === "fas fa-bars"
        ? (this.mobileIconClass = "fas fa-times")
        : (this.mobileIconClass = "fas fa-bars");
    },
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

nav > i {
  display: none !important;

  @media (max-width: $tablet) {
    display: flex !important;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
}

.navbar {
  display: flex;
  width: 550px;
  height: 50px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $tablet) {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 40px);
    height: 450px;
    z-index: 1;
    background: $purple;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.__open {
  display: flex !important;
}

.navbar__link {
  list-style: none;
  text-align: center;

  a {
    width: 100%;
    text-decoration: none;
    color: $grey;
    transition: $transition;

    &:hover {
      color: $white;
    }

    @media (max-width: $tablet) {
      font-size: 1.5rem;
    }
  }
}

.--active {
  a {
    color: $white;
  }
}
</style>