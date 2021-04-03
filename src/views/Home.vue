<template>
  <div>
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
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import HomeTo from '@/components/home/HomeTo.vue';

export default defineComponent({
  components: {
    HomeTo
  },
  name: 'Home',
  setup() {
    let { t, locale } = useI18n();

    const switchLanguage = (lang: string) => {
      locale.value = lang;
    };

    return { t, locale, switchLanguage };
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
  color: var(--white);
  font-family: 'Poppins Light';
  cursor: pointer;
  font-size: 0.9rem;
}

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
