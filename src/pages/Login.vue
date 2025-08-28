<script setup>
import { useRouter } from 'vue-router'
import UiButton from '@/components/UiButton.vue'
const router = useRouter()
const submit = (e)=>{ e.preventDefault(); router.push('/scoreboard') }
</script>

<template>
  <div class="wrap">
    <div class="brand H2" style="opacity:.75">Sales Scoreboard</div>
    <form class="card" @submit="submit">
      <h1 class="H1" style="text-align:center">Welcome back</h1>
      <label class="input"><input class="BodySmall" placeholder="Login" required /></label>
      <label class="input"><input class="BodySmall" placeholder="Password" type="password" required /></label>
      <label class="input"><input class="BodySmall" placeholder="2FA (if enabled)" /></label>
      <UiButton type="submit" class="Label">Login</UiButton>
    </form>
  </div>
</template>

<style scoped>
.wrap{height:100%;display:grid;grid-template-rows:auto 1fr;gap:12px;padding:14px}
.card{
  justify-self:center; align-self:center; width: var(--login-card-width);
  background: var(--SurfaceContainer); color: var(--OnSurface);
  border:1px solid var(--Outline); border-radius: var(--login-card-radius);
  box-shadow: var(--shadow-1); backdrop-filter: var(--blur-strong);
  padding: var(--login-card-padding); display:grid; gap: var(--login-gap);
}
.input{display:flex;align-items:center;height:var(--login-input-height);padding:0 10px;border:1px solid var(--OnSurfaceBlur);border-radius:var(--login-input-radius);background:var(--login-input-bg)}
.input input{background:transparent;border:0;color:var(--OnSurface);outline:none;width:100%}
.input input::placeholder{color:var(--login-placeholder-color)}
</style>
