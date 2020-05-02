<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
export default {
  name: "app",
  routes
};
</script>

<style>

.app {
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>

