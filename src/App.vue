<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Scoreboard from './components/Scoreboard.vue'

const SCALE_W = 960
const SCALE_H = 540
const scale = ref(1)

function updateScale() {
  const w = window.innerWidth
  const h = window.innerHeight
  const s = Math.min(w / SCALE_W, h / SCALE_H)
  scale.value = s
  document.documentElement.style.setProperty('--scale', String(s))
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale, { passive: true })
  window.addEventListener('orientationchange', updateScale, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScale)
  window.removeEventListener('orientationchange', updateScale)
})
</script>

<template>
  <div class="viewport">
    <div class="canvas pixel-snap" :style="{
      width: SCALE_W + 'px',
      height: SCALE_H + 'px',
      transform: `scale(${scale})`
    }">
      <Scoreboard />
    </div>
  </div>
</template>

<style scoped>
.viewport {
  width: 100vw;
  height: 100dvh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.canvas {
  transform-origin: center center;
  /* Optional soft shadow to make the canvas pop */
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
}
</style>
