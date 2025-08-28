<script setup>
import UiIcon from './UiIcon.vue'
const props = defineProps({ variant:{type:String,default:'primary'}, size:{type:String,default:'md'}, icon:{type:String,default:''}, iconRight:{type:Boolean,default:false} })
</script>

<template>
  <button :class="['ui-btn', variant, size]">
    <UiIcon v-if="icon && !iconRight" :name="icon" size="16" />
    <slot />
    <UiIcon v-if="icon && iconRight" :name="icon" size="16" />
  </button>
</template>

<style scoped>
.ui-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:var(--btn-primary-radius);font:inherit;cursor:pointer;transition:all .15s ease}
.ui-btn.md{padding:var(--btn-primary-padding-y) var(--btn-primary-padding-x);font-size:var(--btn-primary-font-size)}
.ui-btn.sm{padding:4px 10px;font-size:12px}
.ui-btn.primary{background:var(--btn-primary-bg);color:var(--btn-primary-color);border:0;border-radius:var(--btn-primary-radius)}
.ui-btn.primary:hover{background:var(--btn-primary-bg-hover)}
.ui-btn.ghost{background:var(--btn-ghost-bg);color:var(--btn-ghost-color);border:var(--btn-ghost-border);border-radius:var(--btn-ghost-radius);padding:var(--btn-ghost-padding-y) var(--btn-ghost-padding-x);font-size:var(--btn-ghost-font-size);font-weight:var(--btn-ghost-font-weight)}
.ui-btn.ghost:hover{background:var(--btn-ghost-bg-hover)}
.ui-btn.icon{width:var(--btn-icon-size);height:var(--btn-icon-size);border-radius:var(--btn-icon-radius);border:var(--btn-icon-border);background:var(--btn-icon-bg);color:var(--btn-icon-color);padding:0}
</style>
