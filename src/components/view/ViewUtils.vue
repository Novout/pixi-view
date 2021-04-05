<template>
  <section class="utils">
    <section class="utils__bar">
      <button
        @click="view = 'inventory'"
        :class="[view === 'inventory' ? 'utils__bar--active' : 'utils__bar--inative']"
      >
        {{ t('view.inventory') }}
      </button>
      <button
        @click="view = 'logger'"
        :class="[view === 'logger' ? 'utils__bar--active' : 'utils__bar--inative']"
      >
        {{ t('view.logger') }}
      </button>
    </section>
    <section id="logger" class="utils__content">
      <view-logger v-if="view === 'logger'" />
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ViewLogger from '@/components/view/ViewLogger.vue';

export default defineComponent({
  components: { ViewLogger },
  setup() {
    const view = ref('logger');
    const { t } = useI18n();

    return { t, view };
  }
});
</script>

<style scoped>
.utils {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.utils__bar {
  display: flex;
  align-items: flex-end;
  height: 1rem;
  background: var(--bg-primary-hover);
}

.utils__bar > button {
  padding: 0 0.25rem;
}

.utils__bar--active {
  cursor: pointer;
  background: var(--color-1-opacity);
  color: var(--text-primary);
  border: none;
  font-family: 'Raleway Normal';
  font-size: 0.8rem;
}

.utils__bar--inative {
  cursor: pointer;
  color: var(--text-primary);
  background: var(--bg-primary-hover);
  border: none;
  font-family: 'Raleway Normal';
  font-size: 0.8rem;
}

.utils__content {
  overflow-y: auto;
  margin-left: 0.25rem;
}
</style>
