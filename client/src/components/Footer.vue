<template>
  <footer>
    <div class="descripion">
      <i class="fas fa-comment-dots"></i>
      <small
        >Chat bot is a company focused on creating solutions for the wider
        community with technology.</small
      >
    </div>
    <div class="options">
      <ul class="options__set">
        <li>
          <a class="set--active" href="#">Company</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Investor site</a>
        </li>
        <li>
          <a href="#">Partnership</a>
        </li>
      </ul>
      <ul class="options__set">
        <li>
          <a class="set--active" href="#">Site Map</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Bug reports</a>
        </li>
      </ul>
      <ul class="options__set">
        <li>
          <a class="set--active" href="#">General</a>
        </li>
        <li>
          <a href="#">Cookies policy</a>
        </li>
        <li>
          <a href="#">Email Desclaimer</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../__variables.scss";

footer {
  height: 230px;
  width: 100%;
  background: $black;
  border-top-right-radius: 100px;
  display: flex;
  align-items: flex-end;
}

.descripion {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 80px 30px 80px;

  i {
    font-size: 2rem;
    color: $white;
    margin-bottom: 30px;
  }

  small {
    width: 300px;
    font-size: 0.9rem;
  }
}

.options {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  padding-right: 150px;


  .options__set {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 170px;
    width: 150px;
    list-style: none;

    a {
      text-decoration: none;
      color: $grey;
      font-size: 0.7rem;

      &:hover {
        color: $white;
      }
    }

    .set--active {
      font-size: 0.9rem;
      font-weight: "600";
      color: $white;
    }
  }
}
</style>