<template>
  <splitpanes style="height: calc(100vh - 25px); width: 100%; border: none" class="default-theme">
    <pane>
      <splitpanes horizontal>
        <pane id="view-frame"
          ><iframe
            id="view"
            width="100%"
            height="100%"
            src="http://localhost:4000/"
            scrolling="no"
            frameBorder="0"
        /></pane>
        <pane size="20"><view-utils /></pane>
      </splitpanes>
    </pane>
    <pane size="30"></pane>
  </splitpanes>
</template>

<script lang="ts">
import ViewUtils from '@/components/view/ViewUtils.vue';
import { useContextStore } from '@/store/context';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  components: { ViewUtils },
  setup() {
    const context = useContextStore();
    onMounted(() => {
      context.register();
    });
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
