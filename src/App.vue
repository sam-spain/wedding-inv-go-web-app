<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IndexView from './views/IndexView.vue';
</script>

<template>
<IndexView />
<RouterView />
  <footer>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>
