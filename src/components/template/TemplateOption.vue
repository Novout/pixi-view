<template>
  <div>
    <img :src="props.path" alt="A template project for choice" width="100" loading="lazy" />
    <h2>{{ props.name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['path', 'name'],
  setup(props) {
    return { props };
  }
});
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
  cursor: pointer;
}

div:hover {
  background-color: var(--color-1-opacity);
}

div > img {
  object-fit: cover;
}

div > h2 {
  color: var(--text-primary);
  font-family: 'Raleway Tiny';
  margin-top: 1rem;
}
</style>
