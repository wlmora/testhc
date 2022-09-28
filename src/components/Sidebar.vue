<script setup lang="ts">
import logo from '../assets/logo.svg'

const drawer = ref(true)
const rail = ref(true)
</script>

<template>
  <v-navigation-drawer
    v-model="drawer" app
    permanent
    :rail="rail"
    width="150"
    class="mx-auto"
  >
    <v-list-item
      :prepend-avatar="logo"
      title="The Hospitality Center"
      nav
      height="63"
      @click.stop="rail = !rail"
    />
    <v-divider color="red opacity-5" />

    <v-list density="comfortable" nav>
      <v-list-item prepend-icon="mdi-home-city" :title="$t('home.jobs')" value="jobs" to="/jobs" />
      <v-list-item prepend-icon="mdi-folder-check" :title="$t('home.bookings')" value="bookings" to="/bookings" />
    </v-list>
  </v-navigation-drawer>
</template>

<style>
  .custom-tab-items {
      background-color: rgba(255, 255, 255, 0.842) !important;
  }
  </style>

