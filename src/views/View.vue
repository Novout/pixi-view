<template>
  <splitpanes style="height: calc(100vh - 25px); width: 100%; border: none" class="default-theme">
    <pane>
      <splitpanes horizontal>
        <pane min-size="75">3</pane>
        <pane min-size="10">4</pane>
      </splitpanes>
    </pane>
    <pane min-size="10" max-size="40">5</pane>
  </splitpanes>
</template>

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
