<template>
  <div class="base">
    <section class="container">
      <section class="choice">
        <template-option
          @click="switchProject('blank')"
          :path="require('@/assets/images/icon-clean.png')"
          :name="t('template.type.blank')"
        />
        <template-option
          @click="switchProject('base')"
          :path="require('@/assets/images/icon-base.png')"
          :name="t('template.type.base')"
        />
        <template-option
          @click="switchProject('demo')"
          :path="require('@/assets/images/icon-demo.png')"
          :name="t('template.type.demo')"
        />
      </section>
      <section class="options">
        <label for="snowpack">{{ t('template.options.name') }}</label>
        <input v-model="data.name" type="text" />
        <label for="snowpack">{{ t('template.options.path') }}</label>
        <section class="path">
          <input class="input" v-model="data.path" type="text" />
          <button @click="openDialog"><font-awesome-icon icon="folder-open" size="lg" /></button>
        </section>
        <section>
          <error-text v-if="error.exists">{{ t('template.error.exists') }}</error-text>
          <error-text v-if="error.create">{{ t('template.error.create') }}</error-text>
        </section>
        <section class="menu">
          <router-link to="/">{{ t('template.menu.initial') }}</router-link>
          <a @click="goView()">{{ t('template.menu.create') }}</a>
        </section>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import TemplateOption from '@/components/template/TemplateOption.vue';
import ErrorText from '@/material/text/ErrorText.vue';
import { defineComponent, reactive, watch } from 'vue';
import { remote } from 'electron';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useTemplate } from '@/use/template';
// @ts-ignore
import { DeleteFolder, PathStorageWrite } from '@/electron/fs';
import { useContextStore } from '@/store/context';

export default defineComponent({
  components: { TemplateOption, ErrorText },
  setup() {
    const { t } = useI18n();
    const context = useContextStore();
    const router = useRouter();
    const data = reactive({
      project: 'blank' as string,
      name: t('template.typeName.blank') as string,
      path: context.project.path as string
    });

    const error = reactive({
      exists: false,
      create: false
    });

    watch(data, (n, _prev) => {
      context.project.path = n.path;
      PathStorageWrite('context', context.$state);
    });

    const switchProject = (project: string) => {
      data.project = project;

      switch (project) {
        case 'blank':
          data.name = t('template.typeName.blank');
          break;
        case 'base':
          data.name = t('template.typeName.base');
          break;
        case 'demo':
          data.name = t('template.typeName.demo');
          break;
      }
    };

    const openDialog = async () => {
      const log = await remote.dialog.showOpenDialog({ properties: ['openDirectory'] });

      if (!log) return;

      data.path = log.filePaths[0];
    };

    const goView = () => {
      const template = useTemplate();

      if (!data.name) return;

      switch (data.project) {
        case 'blank':
          template
            .createBlankTemplate({ path: data.path, directory: data.name })
            .then(() => {
              context.project.name = data.name;
              router.push('/view');
            })
            .catch((e: any) => {
              e.create ? (error.create = true) : (error.create = false);
              e.exists ? (error.exists = true) : (error.exists = false);

              console.error(e);

              if (!e.create && !e.exists) DeleteFolder(data.path);
            });
      }
    };

    return { t, data, error, switchProject, openDialog, goView };
  }
});
</script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: var(--fullb);
  width: 100%;
}

.container {
  background: var(--bg-primary-hover);
  border-radius: 0.5rem;
  box-shadow: 0 0 0px var(--text-primary), 0 0 0px var(--text-primary), 0 0 5px var(--color-1),
    0 0 1px var(--color-1), 0 0 40px var(--color-1), 0 0 2px var(--color-1);
}

.choice {
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem;
}

.options {
  display: flex;
  flex-flow: column nowrap;
}

.options > label {
  font-family: 'Raleway Tiny';
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
}

.options > input {
  font-size: 0.8rem;
  background-color: var(--bg-primary-hover);
  border: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  caret-color: var(--color-1);
  color: var(--text-primary);
}

.path {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary-hover);
}

.path > button {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  margin-right: 0.5rem;
}

.path > button > a {
  background: none;
}

.input {
  font-size: 0.8rem;
  background-color: var(--bg-primary-hover);
  border: none;
  padding: 0.25rem 0.5rem;
  flex-grow: 1;
  caret-color: var(--color-1);
  color: var(--text-primary);
}

input:focus {
  box-shadow: inset 0px 0px 0px 1px var(--text-primary);
}

.options > section > label {
  color: var(--text-primary);
  font-family: 'Raleway Normal';
  margin-right: 0.5rem;
}

.menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem 0 0.5rem 0;
  background-color: var(--color-1);
}

.menu > a {
  background: none;
  border: none;
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 9999px;
  color: var(--text-primary);
  font-family: 'Poppins Light';
  cursor: pointer;
  transition: color 0.15s ease;
  text-decoration: none;
}

.menu > a:hover {
  color: var(--bg-primary);
}
</style>
