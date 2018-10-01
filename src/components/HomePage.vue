<template>
  <div class="wrapper">
    <Title />
  </div>
</template>

<script>
import Criticize from './Criticize'
import Title from './Title'
export default {
  name: 'MainPage',
  components: {
    Criticize,
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.title {
}
</style>
