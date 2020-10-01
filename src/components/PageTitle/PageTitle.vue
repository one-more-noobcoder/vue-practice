<template>
  <div class="page-title">
    <h1 v-if="combinedTitle" class="page-title__title page-title__title_type_combined">
      <span class="page-title__title-main">{{ titleText }}</span>
      <span class="page-title__title-extra">{{ extraText }}</span>
    </h1>

    <h1 v-else class="page-title__title">{{ titleText }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    combinedTitle: {
      type: Boolean,
      default: false
    },
    titleText: {
      type: String,
      default: 'Title'
    },
    extraText: {
      type: String
    }
  }
}
</script>

<style>
.page-title {
  max-width: 700px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e85757;
  margin-bottom: 60px;
}
.page-title__title {
  color: #e85757;
  text-transform: uppercase;
  font-weight: 600;
}
.page-title__title_type_combined {
  display: flex;
  align-items: center;
}
.page-title__title-main {
  font-size: 110px;
  line-height: 130px;
  margin-right: 30px;
}
.page-title__title-extra {
  flex: 0 1 200px;
  font-size: 40px;
  line-height: 48px;
}

@media screen and (max-width: 870px) {
  .page-title {
    margin: 0 auto 60px auto;
  }
  .page-title__title_type_combined {
    flex-direction: column;
  }
  .page-title__title-main {
    margin-right: 0;
  }
  .page-title__title-extra {
    flex: 1 1 auto;
    text-align: center;
  }
}

@media screen and (max-width: 400px) {
  .page-title__title-main {
    font-size: 90px;
    line-height: 100px;
  }
  .page-title__title-extra {
    font-size: 30px;
    line-height: 38px;
  }
}
</style>

