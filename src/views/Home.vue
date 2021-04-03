<template>
  <div>
    <img src="../../public/icon.png" alt="Pixi.js Logo" />
    <section>
      <home-to :name="t('home.create')" to="template" icon="plus" />
      <home-to :name="t('home.load')" to="load" icon="file-upload" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import HomeTo from '@/components/home/HomeTo.vue';

export default defineComponent({
  components: {
    HomeTo
  },
  name: 'Home',
  setup() {
    const { t } = useI18n();
    return { t };
  }
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: var(--fullb);
  width: 100%;
}

div > section {
  margin-top: 1rem;
}

div > img {
  margin-left: 2rem;
}
</style>
