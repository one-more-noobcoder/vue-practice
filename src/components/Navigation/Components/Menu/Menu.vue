<template>
  <div class="menu">
    <div class="menu__head">
      <span class="menu__title">menu</span>
      <button class="btn btn_type_default menu__hide-btn" type="button" v-on:click="$emit('hide-menu')">Hide</button>
    </div>

    <div class="menu__body">
      <div class="menu__section">
        <span class="menu__section-head">Pages</span>

        <div class="menu__section-links">
          <router-link
            class="btn btn_type_default menu__section-link"
            to="/secret-meaning"
          >text secret meaning</router-link>
          <router-link class="btn btn_type_default menu__section-link" to="/catch-the-cube">Catch the cube</router-link>
          <router-link class="btn btn_type_default menu__section-link" to="/">To main page</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: {}
}
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  right: 80px;
  bottom: 0;
  max-width: 380px;
  width: 100%;
  background: linear-gradient(
      183.83deg,
      #252525 0.31%,
      rgba(255, 255, 255, 0) 100.94%
    ),
    #302727;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.6s, right 0.6s;
  z-index: 100;
}

.navigation_type_hidden .menu {
  transform: translateX(calc(100% + 100px));
}

.navigation_position_middle .menu {
  right: 50%;
  transform: translateX(50%);
}

/* menu-head */
.menu__head {
  display: flex;
  padding: 33px 40px 53px 33px;
  background: url("img/menu__head-fon.svg") no-repeat center/cover;
  margin-bottom: 60px;
}

/* menu-title */

.menu__title {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  text-transform: uppercase;
}

.menu__title::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background: url("img/menu__border.svg") no-repeat center/contain;
  margin-top: 2px;
}

/* hide-btn */

.menu__hide-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 7px 14px;
  font-size: 15px;
  line-height: 15px;
}

.navigation_position_middle .menu__hide-btn {
  opacity: 0;
  pointer-events: none;
}

.menu__body {
  padding: 0 33px;
  margin: 0 auto;
}

/* menu__section */

.menu__section {
  max-width: 284px;
  margin: 0 auto;
}

.menu__section-head {
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  font-variant: small-caps;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.menu__section-head::after {
  content: "";
  flex: 1 1 auto;
  height: 1px;
  background: #ffffff;
  border-radius: 10px;
  margin-left: 26px;
}

.menu__section-link {
  position: relative;
  width: 100%;
}

.router-link-exact-active.menu__section-link {
  background: #e85757;
  color: #fff;
}

.menu__section-link:not(:last-child) {
  margin-bottom: 4px;
}

.menu__section-link:not(:last-child)::after {
  content: "";
  position: absolute;
  bottom: -8px;
  width: 12px;
  height: 12px;
  background: #302727;
  border-radius: 50%;
  z-index: 100;
}

.menu__section-link:not(:last-child):nth-child(2n + 1)::after {
  left: 20px;
}

.menu__section-link:not(:last-child):nth-child(2n)::after {
  right: 20px;
}
</style>


