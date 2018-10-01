<template>
  <div class="profile">
    <div class="profilepic">
      <img src="account.profilepic" />
    </div>
      <div class="profileinfo">
        {{ account.name }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    account: Object
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.profile {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profilepic {
  border: 0.2rem solid white;
  padding: 0.2rem;
  width: 8rem;
  height: 8rem;
}

.profileinfo {
  display: flex;
  color: white;
  font-weight: bolder;
  font-size: 2rem;
}
</style>
