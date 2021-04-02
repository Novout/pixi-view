<template>
  <button class="no-drag">{{ name }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['name'],
  setup() {}
});
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}

button:hover {
  color: var(--white);
}
</style>
