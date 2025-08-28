<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const SCALE_W = 960, SCALE_H = 540
const scale = ref(1)
const updateScale = ()=>{ scale.value = Math.min(innerWidth/SCALE_W, innerHeight/SCALE_H) }
onMounted(()=>{ updateScale(); addEventListener('resize', updateScale) })
onBeforeUnmount(()=> removeEventListener('resize', updateScale))
</script>

<template>
  <div class="viewport">
    <div class="canvas" :style="{ width:'960px', height:'540px', transform:`scale(${scale})` }">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
.viewport{width:100vw;height:100dvh;display:grid;place-items:center;overflow:hidden}
.canvas{
  transform-origin:center;
  background: var(--SurfaceContainer);
  border: 1px solid var(--Outline);
  border-radius: 22px;
  color: var(--OnSurface);
  box-shadow: var(--shadow-1);
  backdrop-filter: var(--blur-strong);
  overflow:hidden;
}
</style>
