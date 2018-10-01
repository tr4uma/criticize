<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";
export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #264348;
  height: 100%;
  width: 100%;
  background-color: #264348;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

html {
  height: 100%;
  width: 100%;
  background-color: orange;
}
</style>
