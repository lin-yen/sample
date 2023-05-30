<script lang="ts">
export default {
  name: 'CompositionPage',
};
</script>
<script lang="ts" setup>
import { usePipe } from 'src/composition/pipe';
import { useService } from 'src/composition/service';

const { gold, unit } = usePipe();
const { cookie } = useService();

const now = new Date();
cookie.set('sample-renderTime', now.toString());
</script>
<template lang="pug">
div(class="content") Try Composition
div try gold pipe: {{ gold(12345.6789) }}
div try unit pipe: {{ unit(12345.6789) }}
div try cookie service: {{ cookie.get('sample-renderTime') }}
router-link(to="/") Go home
</template>

<style lang="sass" scoped>
.content
  background-color: rgb(0 255 0)
</style>
