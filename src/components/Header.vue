<script setup>
import { useTheme } from 'vuetify'
const { t, availableLocales, locale } = useI18n()
const theme = useTheme()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

const selectedItem = 1
const items = ref([
  { text: 'Profile', icon: 'mdi-account', link: '/profile' },
  { text: 'Change Password', icon: 'mdi-key', link: '/changepassword' },
  { text: 'Logout', icon: 'mdi-logout', link: '/' },
])
</script>

<template>
  <v-app-bar app elevate-on-scroll elevation="2">
    <v-app-bar-nav-icon />
    <v-app-bar-title>THE HOSPITALITY CENTER</v-app-bar-title>

    <v-spacer />

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleTheme">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-carbon-language />
    </a>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
          </v-avatar>
        </v-btn>
      </template>

      <!-- v-list width="200" class="py-0" -->
      <!-- v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-divider />
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        < v-list-item v-for="(menu, i) in menus" :key="i" link variant="plain">
          <template #prepend>
            <v-icon :icon="menu.icon" />
          </template>

          <v-list-item-title v-text="menu.title" />
        </v-list-item -->
      <!-- v-list :items="items" / -->
      <!-- /v-list -->
      <v-list width="230" class="py-0">
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
          title="Rodolfo Murillo Gutierrez"
          subtitle="info@thehospitalitycenterus.com"
        />
        <v-divider />
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
          :value="item"
          color="primary"
          rounded="shaped"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>

          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
