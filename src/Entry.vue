<template>
  <router-view v-if="isRouterAlive" />
</template>

<script>
export default {
  name: "entry",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style lang="scss">
</style>
