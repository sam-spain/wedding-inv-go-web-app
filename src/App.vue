<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-primary-dark sm:text-center">2022 <a href="https://samspa.in" class="hover:underline">Made by Sam</a>.
    </span>
    <nav class="flex flex-wrap items-center mt-3 text-sm text-secondary-dark sm:mt-0">
        <RouterLink class="mr-4 hover:underline md:mr-6 " to="/">Home</RouterLink>
        <RouterLink class="mr-4 hover:underline md:mr-6" to="/about">About</RouterLink>
      </nav>
</footer>
</template>
