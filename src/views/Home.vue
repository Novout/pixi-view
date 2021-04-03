<template>
  <div class="home">
    <font-awesome-icon
      @click="theme === 'dark' ? (theme = 'light') : (theme = 'dark')"
      icon="sun"
      size="2x"
    />
    <section class="lang">
      <p
        @click="switchLanguage('en')"
        :style="{ borderBottom: locale === 'en' ? '1px solid var(--color-1)' : '' }"
      >
        {{ t('home.lang.en') }}
      </p>
      <p
        @click="switchLanguage('pt_BR')"
        :style="{ borderBottom: locale === 'pt_BR' ? '1px solid var(--color-1)' : '' }"
      >
        {{ t('home.lang.pt_BR') }}
      </p>
    </section>
    <img src="../../public/icon.png" alt="Pixi.js Logo" />
    <section>
      <home-to :name="t('home.create')" to="template" icon="plus" />
      <home-to :name="t('home.load')" to="load" icon="file-upload" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '@/store/config';
// @ts-ignore
import { PathStorageWrite, PathStorageRead } from '@/electron/fs';
import HomeTo from '@/components/home/HomeTo.vue';

export default defineComponent({
  components: {
    HomeTo
  },
  name: 'Home',
  setup() {
    let { t, locale } = useI18n();
    const config = useConfigStore();

    const theme = ref(config.theme);

    const switchLanguage = (lang: string) => {
      locale.value = lang;
    };

    const switchTheme = (_theme: string) => {
      _theme === 'dark'
        ? // @ts-ignore
          document.querySelector('#app').classList.add('dark')
        : // @ts-ignore
          document.querySelector('#app').classList.remove('dark');

      config.theme = _theme;
    };

    onMounted(() => {
      switchTheme(theme.value);
    });

    watch(theme, (_theme: string) => {
      switchTheme(_theme);
      PathStorageWrite('config', config.$state);
    });

    return { t, locale, theme, switchLanguage };
  }
});
</script>

<style scoped>
.lang {
  display: flex;
  position: absolute;
  right: 25px;
  top: 25px;
  padding: 1rem;
}

.lang > p {
  margin: 0 1rem;
  color: var(--text-primary);
  font-family: 'Poppins Light';
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: var(--fullb);
  width: 100%;
}

.home > section {
  margin-top: 1rem;
}

.home > img {
  pointer-events: none;
  margin-left: 2rem;
}

.home > svg {
  position: absolute;
  left: 1rem;
  top: calc(2rem + 20px);
  cursor: pointer;
  color: var(--text-primary);
}
</style>
