<script setup lang="ts">
import { pocketBaseSymbol } from '../symbols/injectionSymbols'

// Inject the PocketBase client
const $pb = inject(pocketBaseSymbol)
const organizations = $ref({})
const error = $ref('')

onBeforeMount(async () => {
  try {
    const data = await $pb.records.getFullList('organizations', 200, {
      filter: 'country = \'r0megy7ca0q431n\'',
    })
    if (data)
      organizations = data
  }
  catch (e) {
    error = e
  }
})
console.log(JSON.stringify(organizations))
</script>

<template>
  <main>home </main>

  <p v-if="error">
    {{ error }}
  </p>
  <p v-else>
    <v-list-item
      v-for="(item, id) in organizations"
      :key="id"
      link
      :value="item"
    >
      <v-list-item-title v-text="item.name" />
    </v-list-item>

    Raw: {{ organizations }}
  </p>
</template>

<route lang="yaml">
meta:
  layout: admin
  </route>
