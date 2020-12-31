<template>
  <button :disabled="isDisabled" class="btn" :class="[uiType, state]">
    <p
      class="btn__text"
      :class="{ secondary__text__active: uiType === 'secondary' }"
    >
      {{ title }}
    </p>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: "Click",
    },
    uiType: {
      type: String,
      default: "secondary",
    },
    state: {
      type: String,
      default: "default",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "../__variables.scss";

.btn {
  width: 160px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  outline: none;
  transition: $transition;
}

.secondary {
  background: transparent;
  border: 1px solid $white;
  font-weight: 600;
}

.default {
  &:hover {
    background: $white;

    .secondary__text__active {
      color: $purple;
    }
  }
}

.sent {
  background: $green;
  transition: $transition;
  border: solid 1px $green;

  &:hover {
    background: $green;
    border: solid 1px $green;
  }

  .btn__text {
    color: $white;
    transition: $transition;

    &:hover {
      color: #fff;
    }
  }
}

.invalidEmail {
  border: solid 3px $red;
  transition: $transition;

  .btn__text {
    color: $red;
    font-weight: bold; 
  }
}

.primary {
  background: $orange;
  border: none;

  &:hover {
    background: $orange-lighter;

    .btn__text {
      color: $white;
    }
  }
}

.btn__text {
  font-size: 0.9rem;
  color: $off-white;
  letter-spacing: 1px;
}
</style>