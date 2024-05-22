<script setup>
import Checkbox from "primevue/checkbox";
import preset from "./presets/default";

defineOptions({
  inheritAttrs: false
});

defineProps(
    {
      label: {type: String, required: false},
      inputId: {type: String, required: false},
    }
);

</script>

<template>
  <Checkbox :inputId="inputId" :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }"
            class="w-14rem" v-bind="$attrs"/>
  <label v-if="label" :for="inputId" class="ml-2 select-none"> With label prop </label>
</template>