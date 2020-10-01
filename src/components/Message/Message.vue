<template>
  <div class="messge">
    <span class="messge__title">{{ messageTitle }}</span>
    <p class="messge__description">{{ messageText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    messageTitle: {
      type: String,
      default: 'Внимание'
    },
    messageText: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.messge {
  max-width: 330px;
  color: #e85757;
  font-variant: small-caps;
  text-transform: lowercase;
  padding-left: 20px;
  padding-bottom: 30px;
  border-left: 1px solid #e85757;
}

.messge__title {
  display: block;
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  padding-bottom: 12px;
  border-bottom: 1px solid #e85757;
  margin-bottom: 12px;
}

.messge__description {
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
}

</style>