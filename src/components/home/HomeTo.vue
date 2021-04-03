<template>
  <p @click.prevent="routeTo"><font-awesome-icon :icon="props.icon" size="lg" />{{ props.name }}</p>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['name', 'to', 'icon'],
  setup(props) {
    const router = useRouter();

    const routeTo = () => {
      router.push(`/${props.to}`);
    };

    return { props, routeTo };
  }
});
</script>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  color: var(--text-primary);
  border: 3px solid var(--color-1);
  cursor: pointer;
  width: 25vw;
  margin: 1.5rem 0;
  border-radius: 9999px;
  transition: background 0.2s ease;
  text-shadow: 1px 1px 10px var(--text-shadow);
}

p:hover {
  background: var(--color-1-opacity);
}
</style>
