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

/* Vue splitpanes override */
.splitpanes{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.splitpanes--vertical{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.splitpanes--horizontal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.splitpanes--dragging *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.splitpanes__pane{width:100%;height:100%;overflow:hidden}.splitpanes--vertical .splitpanes__pane{-webkit-transition:width .2s ease-out;transition:width .2s ease-out}.splitpanes--horizontal .splitpanes__pane{-webkit-transition:height .2s ease-out;transition:height .2s ease-out}.splitpanes--dragging .splitpanes__pane{-webkit-transition:none;transition:none}.splitpanes__splitter{-ms-touch-action:none;touch-action:none}.splitpanes--vertical>.splitpanes__splitter{min-width:1px;cursor:col-resize}.splitpanes--horizontal>.splitpanes__splitter{min-height:1px;cursor:row-resize}.splitpanes.default-theme .splitpanes__pane{background-color: var(--black-hover)}.splitpanes.default-theme .splitpanes__splitter{background-color:var(--black-hover);-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-negative:0;flex-shrink:0}.splitpanes.default-theme .splitpanes__splitter:after,.splitpanes.default-theme .splitpanes__splitter:before{content:"";position:absolute;top:50%;left:50%;background-color:rgba(0,0,0,.15);-webkit-transition:background-color .3s;transition:background-color .3s}.splitpanes.default-theme .splitpanes__splitter:hover:after,.splitpanes.default-theme .splitpanes__splitter:hover:before{background-color:rgba(0,0,0,.25)}.splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1}.default-theme.splitpanes--vertical>.splitpanes__splitter,.default-theme .splitpanes--vertical>.splitpanes__splitter{width:4px;border-left:1px solid var(--black-hover);margin-left:-1px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{-webkit-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:30px}.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter,.default-theme .splitpanes--horizontal>.splitpanes__splitter{height:4px;border-top:1px solid var(--black-hover);margin-top:-1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{-webkit-transform:translateX(-50%);transform:translateX(-50%);width:30px;height:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px}
</style>
