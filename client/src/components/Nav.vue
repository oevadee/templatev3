<template>
  <nav class="navbar">
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
  </nav>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style lang="scss">
@import "../__variables.scss";

.navbar {
  display: flex;
  width: 550px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}

.navbar__link {
  list-style: none;

  a {
    text-decoration: none;
    color: $grey;
    transition: $transition;

    &:hover {
      color: $white;
    }
  }
}

.--active {
  a {
    color: $white;
  }
}
</style>