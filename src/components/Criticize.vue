<template>
  <div class="criticize">
    <Title />
    <Profile :account="target"/>
    <Shitpost />
  </div>
</template>

<script>
import Profile from './Profile';
import Shitpost from './Shitpost';
import Title from './Title';
export default {
  name: 'Criticize',
  components: {
    Title,
    Profile,
    Shitpost
  },
  data() {
    return {
      target: {}
    };
  },
  mounted() {
    console.log(this.$route.params);

    // TODO: Fetch from server
    this.target = {
      name: 'Deloitte',
      profilepic: 'www.google.com'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.criticize {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
