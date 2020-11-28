<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :view-box.camel="viewBox"
    :aria-labelledby="iconName"
    role="icon"
    v-on:click="getClickEvent"
  >
    <title :id="iconName" lang="en">{{hint}}</title>
    <g :fill="iconColor" class="svg__body">
      <!-- импорт самой иконки -->
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    iconName: {
      type: String,
      default: 'icon'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: '#A4A4A4'
    },
    hint: {
      type: String,
      default: ''
    },
    clickEvent: {
      type: String,
      default: 'no-event'
    },
  },
  computed: {
    getClickEvent() {
      return () => {
        if (this.clickEvent !== 'no-event') {
          this.$emit(this.clickEvent)
        }
      }
    }
  }
}

</script>