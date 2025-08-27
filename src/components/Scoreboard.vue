<script setup>
import { ref } from 'vue'
const home = ref(0)
const away = ref(0)
</script>

<template>
  <div class="wrap">
    <header class="row">
      <h1>Scoreboard</h1>
      <span class="hint">960×540 canvas → scales to fit any screen</span>
    </header>

    <main class="board">
      <section class="team">
        <h2>Home</h2>
        <div class="value">{{ home }}</div>
        <div class="controls">
          <button @click="home++">+1</button>
          <button @click="home = Math.max(0, home - 1)">−1</button>
        </div>
      </section>

      <section class="team">
        <h2>Away</h2>
        <div class="value">{{ away }}</div>
        <div class="controls">
          <button @click="away++">+1</button>
          <button @click="away = Math.max(0, away - 1)">−1</button>
        </div>
      </section>
    </main>

    <footer class="row">
      <span class="foot">Designed @ 960×540 • Scales via CSS transform</span>
    </footer>
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: 0.2px;
}

.hint, .foot {
  font-size: 14px;
  opacity: 0.75;
}

.board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100%;
}

.team {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
  padding: 16px;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 10px;
}

h2 {
  margin: 0;
  font-size: 20px;
}

.value {
  align-self: center;
  justify-self: center;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
}

.controls {
  display: flex;
  gap: 8px;
}

button {
  font: inherit;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.1);
  background: white;
  cursor: pointer;
}

button:hover { filter: brightness(0.98); }
button:active { transform: translateY(1px); }
</style>

