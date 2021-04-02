<template>
  <splitpanes style="height: calc(100vh - 25px); width: 100%; border: none" class="default-theme">
    <pane>
      <splitpanes horizontal>
        <pane min-size="75" id="view-frame"
          ><iframe
            @change="test"
            id="view"
            width="100%"
            height="100%"
            src="http://localhost:4000/"
            scrolling="no"
            frameBorder="0"
        /></pane>
        <pane min-size="10">4</pane>
      </splitpanes>
    </pane>
    <pane min-size="10" max-size="40"><router-link to="/">Home</router-link></pane>
  </splitpanes>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const test = () => {
      const iframe = document.getElementById('view') as HTMLIFrameElement;
      iframe.src = iframe.src;
    };

    return { test };
  }
});
</script>

<style scoped>
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
  background-color: var(--bg-primary) !important;
  border: none;
}
</style>
