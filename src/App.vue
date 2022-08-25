<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
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
