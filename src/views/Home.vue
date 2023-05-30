<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<template>
  <div class="content">Home</div>
  <router-link to="/params/666id">Go to try params</router-link>
  <br />
  <router-link to="/composition">Go to try composition</router-link>
</template>
<style scoped>
.content {
  background-color: #00f;
}
</style>
