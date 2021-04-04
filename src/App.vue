<template>
  <main class="base">
    <nav class="bar drag">
      <img :src="require('@/assets/images/icon-bar.png')" />
      <router-link class="no-drag" to="/">Home</router-link>
      <router-link class="no-drag" to="/view">View</router-link>
      <button-bar @click="windowMinimize" name="-" />
      <button-bar @click="windowClose" name="x" />
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="tbase" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue';
import { remote } from 'electron';
// @ts-ignore
import { PathStorageWrite } from '@/electron/fs';
import ButtonBar from '@/material/ButtonBar.vue';
import { useConfigStore } from '@/store/config';
import { useContextStore } from '@/store/context';

export default defineComponent({
  components: {
    ButtonBar
  },
  setup() {
    const config = useConfigStore();
    const context = useContextStore();

    onBeforeUnmount(async () => {
      await PathStorageWrite('config', config.$state);
      await PathStorageWrite('context', context.$state);
    });

    const win = remote.getCurrentWindow();

    const windowMinimize = () => {
      win.minimize();
    };

    const windowClose = () => {
      PathStorageWrite('config', config.$state);
      PathStorageWrite('context', context.$state);
      win.close();
    };

    return { windowClose, windowMinimize };
  }
});
</script>
