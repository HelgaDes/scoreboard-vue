<script setup>
const props = defineProps({ columns:Array, rows:Array, totals:Object })
</script>

<template>
  <div class="card">
    <div class="toolbar">
      <div class="tabs"><slot name="tabs"/></div>
      <div class="pill Label">Total&nbsp;<b style="margin-left:6px">$3,150,502</b></div>
      <div class="group Label"><slot name="grouping"/></div>
    </div>

    <div class="table">
      <div class="thead">
        <div v-for="c in columns" :key="c.key" class="th Label"
             :style="{width:c.width+'px',textAlign:c.align||'left'}">{{ c.title }}</div>
      </div>

      <div class="tbody">
        <div v-for="(r,i) in rows" :key="i" class="tr">
          <div v-for="c in columns" :key="c.key" class="td BodySmall"
               :style="{width:c.width+'px',textAlign:c.align||'left'}">
            {{ r[c.key] }}
          </div>
        </div>
      </div>

      <div class="tfooter">
        <div v-for="c in columns" :key="c.key" class="tf BodySmall"
             :style="{width:c.width+'px',textAlign:c.align||'left'}">
          {{ totals?.[c.key] ?? '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{height:100%;background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01));border-radius:var(--table-radius);border:var(--table-border);box-shadow:var(--shadow-1);padding:12px;display:grid;grid-template-rows:auto 1fr;gap:10px}
.toolbar{display:flex;align-items:center;gap:12px}
.pill{margin-left:auto;background:rgba(255,255,255,.12);color:var(--OnSurface);padding:8px 14px;border-radius:999px;border:1px solid var(--Outline)}
.group{background:rgba(255,255,255,.08);border:1px solid var(--Outline);color:var(--OnSurfaceContainer);border-radius:12px;padding:8px 12px}
.table{display:grid;grid-template-rows:auto 1fr auto;height:100%;overflow:hidden}
.thead,.tfooter{display:flex;gap:12px;padding:var(--thead-padding-y) var(--thead-padding-x);background:var(--thead-bg);border-radius:12px;border-bottom:var(--thead-border-bottom)}
.th{font-size:var(--thead-font-size);line-height:var(--thead-line-height);font-weight:var(--thead-weight);letter-spacing:var(--thead-letter-spacing);opacity:.95}
.tfooter{background:rgba(255,255,255,.06)}
.tbody{overflow:auto;border-radius:10px}
.tr{display:flex;gap:12px;align-items:center;min-height:var(--table-row-height);padding:var(--table-cell-pad-top) var(--table-cell-pad-right) var(--table-cell-pad-bottom) var(--table-cell-pad-left);border-bottom:1px solid var(--OnSurfaceBlur)}
.tr:nth-child(odd){background:var(--table-row-bg-odd)}
.tr:nth-child(even){background:var(--table-row-bg-even)}
.td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--OnSurface)}
</style>
