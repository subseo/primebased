<script lang="ts" setup>
import Card from "primevue/card";
import preset from "./presets/default"
import {useSlots} from "vue";

const slots = useSlots()

defineOptions({
  inheritAttrs: false
});

</script>

<template>
  <Card :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs">
    <template v-if="slots.title" #title>
      <slot name="title"/>
    </template>
    <template v-if="slots.subtitle" #subtitle>
      <slot name="subtitle"/>
    </template>
    <template v-if="slots.content" #content>
      <slot name="content"/>
    </template>
    <template v-if="slots.footer" #footer>
      <slot name="footer"/>
    </template>
  </Card>
</template>