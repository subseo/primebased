<script lang="ts" setup>
import Button from "primevue/button";
import preset from "./presets/default"
import {PropType} from "vue";

type TSize = "small" | "large" | undefined

defineOptions({
  inheritAttrs: false
});

defineProps(
    {
      label: {type: String, required: true},
      size: {type: String as PropType<TSize>, required: false}
    }
);
</script>

<template>
  <Button :label=label :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" :size=size
          v-bind="$attrs"/>
</template>