<template>
  <p
    v-for="(event, index) in events"
    :key="index"
    :style="{
      color: event.color,
      fontSize: generics.fontSize,
      fontFamily: generics.fontFamily
    }"
  >
    {{ event.content }}
  </p>
</template>

<script lang="ts">
import { useLoggerStore } from '@/store/logger';
import { useViewStore } from '@/store/view';
import { computed, defineComponent, watch } from 'vue';

export default defineComponent({
  setup() {
    const logger = useLoggerStore();
    const view = useViewStore();

    const events = computed(() => logger.list);
    const generics = computed(() => view.generics);

    watch(logger, () => {
      const log = document.querySelector('#logger');
      (log as HTMLElement).scrollTop = (log as HTMLElement).scrollHeight;
    });

    setInterval(() => {
      logger.emit(String(Math.random() * 5));
    }, 1000);

    return { events, view, generics };
  }
});
</script>

<style scoped>
p {
  pointer-events: none;
}
</style>
