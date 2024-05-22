<script lang="ts" setup>
import Chips from "primevue/chips";
import preset from "./presets/default"

defineOptions({
  inheritAttrs: false
});

</script>

<template>
  <div class="max-w-64">
    <Chips :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs"/>
  </div>
</template>