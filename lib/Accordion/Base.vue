<script setup>
import Accordion from "primevue/accordion";
import preset from "./presets/default";

defineOptions({
  inheritAttrs: false
});

</script>

<template>
  <Accordion :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs">
    <template v-for="(slot, index) of Object.keys($slots)" :key="index" v-slot:[slot]>
      <slot :name="slot"></slot>
    </template>
  </Accordion>
</template>