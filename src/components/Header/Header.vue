<template>
  <header class="header">
    <div class="container header__container">
      <Navigation class="header__navigation" />
    </div>
  </header>
</template>

<script>

import Navigation from '../../components/Navigation/Navigation';

export default {
  components: { Navigation },
}
</script>

<style>
.container.header__container {
  display: flex;
  max-width: 1600px;
}

.header__navigation {
  margin-left: auto;
}
</style>