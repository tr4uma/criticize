<template>
  <div class="wrapper">
    <div class="left"></div>
    <div class="middle">
      <router-view />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.left {
  flex: 1;
  background-color: #ffa400;
}

.middle {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.right {
  flex: 1;
  background-color: #ffa400;
}
</style>
