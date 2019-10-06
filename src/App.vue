<template lang="pug">
  #app
    el-header header
    router-view
    el-footer Footer
</template>

<style lang="scss">
@import "./assets/sass/App";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.c-container {
  background: rgba(pink, 0.5);
}
</style>
