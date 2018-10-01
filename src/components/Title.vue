<template>
  <div class="title">
    <span class="pagetitle">CRITICIZE!</span>
    <span class="pagesubtitle">THE FIRST GROWTH-ORIENTED NEGATIVE FEEDBACK PLATFORM</span>
  </div>
</template>

<script>
export default {
  name: 'Title'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  font-weight: bolder;
  padding: 1rem;
}

.pagetitle {
  font-size: 4.5rem;
  flex: 1;
}

.pagesubtitle {
  font-size: 1rem;
  flex: 1;
}
</style>
