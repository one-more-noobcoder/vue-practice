<template>
  <div
    :class="['navigation', {'navigation_type_hidden' : navigationIsHidden }, {'navigation_position_middle' : isEmptyRoute}]"
  >
    <button class="btn menu__burger" v-on:click="navigationIsHidden = false">
      <BurgerIcon />
    </button>

    <Menu v-on:hide-menu="navigationIsHidden = true" />
  </div>
</template>

<script>

import BurgerIcon from '../../svg-icons/BurgerIcon/BurgerIcon';
import ArrowBack from '../../svg-icons/arrow-back/ArrowBack';
import Menu from './Components/Menu/Menu';

export default {
  components: { ArrowBack, BurgerIcon, Menu },
  data: () => {
    return {
      isEmptyRoute: false,
      navigationIsHidden: false,
    }
  },
  created: function () {
    this.isEmptyRoute = window.location.pathname === '/';
  },
  watch: {
    $route(to, from) {
      this.isEmptyRoute = to.fullPath === '/';
    }
  }
}

</script>

<style>
.menu__burger {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity;
}

.navigation_type_hidden .menu__burger {
  opacity: 1;
  pointer-events: all;
}

.menu__burger:hover .burger__bottom-line,
.menu__burger:focus .burger__bottom-line {
  transform: translateX(-45%);
}
</style>

