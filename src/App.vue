<template>
  <main class="base">
    <nav class="bar drag">
      <h1 class="title">Pixi View v6</h1>
      <button-bar @click="windowMinimize" name="-"/>
      <button-bar @click="windowClose" name="x"/>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="tbase" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { remote } from 'electron';
import ButtonBar from '@/material/ButtonBar.vue';

export default defineComponent({
  components: {
    ButtonBar,
  },
  setup() {
    const win = remote.getCurrentWindow();

    const windowMinimize = () => {
      win.minimize();
    };

    const windowClose = () => {
      win.close();
    };

    return { windowClose, windowMinimize };
  },
});
</script>

<style>
:root {
  --bg-primary: #141414;
  --bg-primary-hover: #1c1c1c;
  --color-1: #e91e63;
  --color-1-opacity: rgba(233, 30, 99, 0.15);
  --black: #000;
  --black-hover: #333;
  --white: #fff;
  --fullh: 100vh;
  --fullb: calc(100vh - 25px);
  --bar: 25px;
}

.bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: var(--bar);
  background: var(--color-1);
}

.drag {
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}

.base {
  min-height: var(--fullh);
  background: var(--bg-primary);
}

.title {
  flex-grow: 1;
  margin-left: 1rem;
  font-family: 'Raleway Normal';
  font-size: 0.8rem;
}

.tbase-enter-active,
.tbase-leave-active {
  transition: opacity 0.3s ease;
}


.tbase-enter-from,
.tbase-leave-to {
  opacity: 0;
}
</style>
