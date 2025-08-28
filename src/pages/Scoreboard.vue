<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import UiTabs from '@/components/UiTabs.vue'
import UiModal from '@/components/UiModal.vue'
import ScoreTable from '@/components/ScoreTable.vue'
import UiIcon from '@/components/UiIcon.vue'
import UiButton from '@/components/UiButton.vue'
import { columns, rowsByTab, totals } from '@/config/scoreboard.js'

const tabs = ['Sales','Retention']

const route = useRoute()
const router = useRouter()

const initialTab = tabs.includes(route.query.tab) ? route.query.tab : 'Sales'
const active = ref(initialTab)

onMounted(() => {
  if (!route.query.tab) {
    router.replace({ query: { ...route.query, tab: active.value } })
  }
})

watch(active, (t) => {
  router.replace({ query: { ...route.query, tab: t } })
})

watch(() => route.query.tab, (t) => {
  if (tabs.includes(t) && t !== active.value) active.value = t
})

const rows = computed(() => rowsByTab[active.value])

const openMelody = ref(false)
const openGrouping = ref(false)

const melodies = ['fanfare.wav','herecomes.mp3','pimp.mp3']
const pickedMelody = ref('herecomes.mp3')
const testMelody = ()=> new Audio('/melodies/herecomes.mp3').play()

const groupingOn = ref(true)
</script>

<template>
  <div class="wrap">
    <header class="top">
      <div class="H2" style="opacity:.75">Sales Scoreboard</div>
      <div class="icons">
        <UiButton variant="icon" @click="openMelody=true" aria-label="Select Melody"><UiIcon name="sound" size="18"/></UiButton>
        <UiButton variant="icon" aria-label="Volume"><UiIcon name="volume-up" size="18"/></UiButton>
        <UiButton variant="icon" aria-label="Logout"><UiIcon name="logout" size="18"/></UiButton>
      </div>
    </header>

    <ScoreTable :columns="columns" :rows="rows" :totals="totals">
      <template #tabs><UiTabs :tabs="tabs" v-model="active" /></template>
      <template #grouping>
        <UiButton variant="ghost" class="grp Label" type="button" @click="openGrouping=true">
          <UiIcon :name="groupingOn ? 'grouping-on' : 'grouping-off'" size="18" />
          <span>Grouping</span>
        </UiButton>
      </template>
    </ScoreTable>

    <UiModal v-model:open="openMelody" title="Select Melody">
      <div class="list">
        <label v-for="m in melodies" :key="m" class="row BodySmall">
          <input type="radio" name="mel" :value="m" v-model="pickedMelody" />
          <span>{{ m }}</span>
          <UiIcon v-if="pickedMelody===m" name="check" size="16"/>
        </label>
      </div>
      <template #footer>
        <UiButton variant="ghost" class="Label" @click="testMelody">Test Melody</UiButton>
        <UiButton class="Label" @click="openMelody=false">Close</UiButton>
      </template>
    </UiModal>

    <UiModal v-model:open="openGrouping" title="Grouping agents">
      <p class="BodySmall" style="opacity:.55">Jeff Johnson, Freya Admin, Pine Apple</p>
      <div class="input">
        <input class="BodySmall" placeholder="Name group" />
        <UiButton variant="ghost" class="close Label" aria-label="Clear"><UiIcon name="close" size="14"/></UiButton>
      </div>
      <hr class="sep" />
      <div style="display:grid;place-items:center">
        <UiButton class="Label" icon="add">Add Group</UiButton>
      </div>
      <template #footer>
        <UiButton variant="ghost" class="Label" @click="openGrouping=false">Close</UiButton>
      </template>
    </UiModal>
  </div>
</template>

<style scoped>
.wrap{display:grid;grid-template-rows:auto 1fr;gap:12px;height:100%;padding:14px}
.top{display:flex;justify-content:space-between;align-items:center}
.icons{display:flex;gap:8px}
.grp{display:flex;align-items:center;gap:6px}
.list{display:grid;gap:8px}
.row{display:flex;gap:8px;align-items:center;padding:8px 10px;border:1px solid var(--OnSurfaceBlur);border-radius:12px;background:rgba(255,255,255,.03)}
.input{display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid var(--OnSurfaceBlur);border-radius:12px;background:rgba(255,255,255,.03)}
.input input{flex:1;background:transparent;border:0;color:var(--OnSurface);outline:none}
.sep{border:none;border-top:1px solid var(--OnSurfaceBlur);margin:10px 0}
</style>
