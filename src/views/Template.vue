<template>
  <div class="base">
    <section class="container">
      <section class="choice">
        <template-option @click="switchProject('blank')" :path="require('@/assets/images/icon-clean.png')" name="Blank Project" />
        <template-option @click="switchProject('base')" :path="require('@/assets/images/icon-base.png')" name="Base Project" />
        <template-option @click="switchProject('demo')" :path="require('@/assets/images/icon-demo.png')" name="Demo Project" />
      </section>
      <section class="options">
        <label for="snowpack">Name</label>
        <input v-model="data.name" type="text" />
        <label for="snowpack">Path for Project</label>
        <section class="path">
          <input class="input" v-model="data.path" type="text" />
          <button @click="openDialog"><font-awesome-icon icon="folder-open" size="lg" /></button>
        </section>
        <section>
          <error-text v-if="error.exists">File path exists!</error-text>
          <error-text v-if="error.create">The directory could not be created!</error-text>
        </section>
        <section class="menu">
          <router-link to="/">Menu Inicial</router-link>
          <a @click="goView()">Criar</a>
        </section>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import TemplateOption from '@/components/template/TemplateOption.vue'
import ErrorText from '@/material/text/ErrorText.vue'
import { defineComponent, reactive } from 'vue'
import { remote } from 'electron'
import { useRouter } from 'vue-router'
import { useTemplate } from '@/use/template'
// @ts-ignore
import { DeleteFolder } from '@/electron/fs'

export default defineComponent({
  components: { TemplateOption, ErrorText },
  setup() {
    const router = useRouter();
    const data = reactive({
      project: "blank" as string,
      name: "blank-template" as string,
      path: "C:/Program Files" as string
    })

    const error = reactive({
      exists: false,
      create: false
    })

    const switchProject = (project: string) => {
      data.project = project;
      // @ts-ignore
      data.name = {
        "blank": "blank-template",
        "base": "simple-template",
        "demo": "rpg-demo-template"
      }[data.project] || ""
    }

    const openDialog = async () => {
      const log = await remote.dialog.showOpenDialog({ properties: [ 'openDirectory' ]})

      if(!log) return;

      data.path = log.filePaths[0];
    }

    const goView = () => {
      const template = useTemplate();

      if(!data.name) return;

      switch(data.project) {
        case 'blank':
          template.createBlankTemplate({ path: data.path, directory: data.name })
          .then(() => {
            router.push('/view');
          })
          .catch((e: any) => {
            e.create ? error.create = true : error.create = false
            e.exists ? error.exists = true : error.exists = false

            if(!e.create && !e.exists) DeleteFolder(data.path)
          })
      }
    }

    return { data, error, switchProject, openDialog, goView }
  },
})
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
  box-shadow: 0 0 0px var(--white), 0 0 0px var(--white), 0 0 5px var(--color-1), 0 0 1px var(--color-1),
    0 0 40px var(--color-1), 0 0 2px var(--color-1);
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
  color: var(--white);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.options > input {
  font-size: 0.8rem;
  background-color: var(--black-hover);
  border: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  caret-color: var(--color-1);
  color: var(--white);
}

.path {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black-hover);
}

.path > button {
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  margin-right: 0.5rem;
}

.path > button > a {
  background: none;
}

.input {
  font-size: 0.8rem;
  background-color: var(--black-hover);
  border: none;
  padding: 0.25rem 0.5rem;
  flex-grow: 1;
  caret-color: var(--color-1);
  color: var(--white);
}

input:focus {
  box-shadow: inset 0px 0px 0px 1px var(--white);
}

.options > section > label {
  color: var(--white);
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
  color: var(--white);
  font-family: 'Poppins Light';
  cursor: pointer;
  transition: color 0.15s ease;
  text-decoration: none;
}

.menu > a:hover {
  color: var(--black);
}

</style>
