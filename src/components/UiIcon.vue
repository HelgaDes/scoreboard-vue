<script setup>
import { computed } from 'vue'
const props = defineProps({ name:{type:String,required:true}, size:{type:[Number,String],default:20} })
const src = computed(() => new URL(`../assets/icons/Icon-${props.name}.svg`, import.meta.url).href)
</script>

<template>
  <img class="ui-icon" :src="src" :alt="name" :style="{width:size+'px',height:size+'px'}" />
</template>

<style scoped>
.ui-icon{display:inline-block;vertical-align:middle;object-fit:contain}
</style>
