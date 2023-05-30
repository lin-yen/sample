<script setup lang="ts">
export interface Props {
  id?: string;
}

withDefaults(defineProps<Props>(), {
  id: '--',
});
</script>

<script lang="ts">
export default {
  name: 'ParamsPage',
};
</script>

<template lang="pug">
div(class="content") Try Params
div params "id" is {{ id }}.
router-link(to="/") Go home
</template>

<style lang="scss" scoped>
.content {
  background-color: rgb(255 0 0);
}
</style>
