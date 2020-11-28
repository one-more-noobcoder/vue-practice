<template>
  <SvgIcon class="burger" viewBox="0 0 384.97 384.97" width="50" height="50" iconColor="#302727">
    <g>
      <path
        d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"
      />
      <path
        d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
      />
      <path
        class="burger__bottom-line"
        d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
			c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
      />
    </g>
  </SvgIcon>
</template>

<script>

import SvgIcon from '../../components/SvgIcon/SvgIcon';

export default {
  components: { SvgIcon }
}
</script>

<style>
.burger__bottom-line {
  transform-box: fill-box;
  transition: transform 0.3s;
}
</style>