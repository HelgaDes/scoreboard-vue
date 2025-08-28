<script setup>
const props = defineProps({ tabs:Array, modelValue:String })
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="tabs">
    <button v-for="t in tabs" :key="t" class="tab Label"
            :class="{active:t===modelValue}" @click="$emit('update:modelValue', t)">
      {{ t }}
    </button>
  </div>
</template>

<style scoped>
.tabs{display:flex;gap:var(--tab-gap)}
.tab{
  height:var(--tab-height);
  background:var(--tab-bg-inactive);
  color:var(--OnSecondaryContainer);
  padding:var(--tab-padding-y) var(--tab-padding-x);
  border-radius:var(--tab-radius);
  border:var(--tab-border);
  display:inline-flex; align-items:center; justify-content:center;
  font-size:var(--tab-font-size);
  font-weight:var(--tab-font-weight);
  line-height:var(--tab-line-height);
  letter-spacing:var(--tab-letter-spacing);
}
.tab.active{background:var(--tab-bg-active);color:var(--OnSecondary)}
.tab:hover{filter:brightness(1.06)}
</style>
