<script setup>
const props = defineProps({ open:Boolean, title:String, width:{type:Number,default:0} })
const emit = defineEmits(['update:open'])
const close = ()=> emit('update:open', false)
</script>

<template>
  <teleport to="body">
    <div v-if="open" class="backdrop" @click.self="close">
      <div class="modal" :style="width?{width:width+'px'}:{}">
        <div class="head"><h2 class="H1">{{ title }}</h2></div>
        <div class="content"><slot/></div>
        <div class="foot"><slot name="footer"/></div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.backdrop{position:fixed;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.45);z-index:50;backdrop-filter:var(--modal-backdrop-blur)}
.modal{width:var(--modal-width);background:var(--modal-bg);color:var(--OnSurface);border:var(--modal-border);border-radius:var(--modal-radius);box-shadow:var(--modal-shadow);padding:var(--modal-content-padding);max-height:85vh;display:grid;gap:12px}
.head{padding:var(--modal-header-padding)}
.head .H1{font-size:var(--modal-header-font-size);line-height:var(--modal-header-line-height);font-weight:var(--modal-header-weight);letter-spacing:var(--modal-header-letter-spacing);text-align:center}
.content{overflow:auto}
.foot{display:flex;justify-content:center;gap:8px;padding:var(--modal-footer-padding)}
</style>
