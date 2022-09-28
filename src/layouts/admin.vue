<script>
export default {
  data: () => ({
    drawer: null,
  }),
}
</script>

<template>
  <v-app>
    <Sidebar />
    <Header />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Admin Layout]
    </div>
  </v-app>
</template>
