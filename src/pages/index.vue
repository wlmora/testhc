<script setup lang="ts">
import logo from '../assets/logo.svg'
const form = ref<VForm | null>(null)
const valid = ref(true)
const email = ref('')
const emailRules = [
  (v: string) => !!v || $t('login.email-rules.required'), // `/hi/${encodeURIComponent(name)}`
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]
const router = useRouter()
const validate = () => {
  form.value?.validate()
  router.push('/home')
}
</script>

<template>
  <v-responsive class="mx-auto" max-width="344">
    <v-container class="text-xs-center">
      <v-img :src="logo" class="my-3" contain height="100" />
      <v-container class="text-xs-center">
        <p class="text-uppercase text-h4">
          THE
          HOSPITALITY
          CENTER
        </p>
      </v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          :label="$t('login.email')"
          required
        />

        <v-text-field
          :label="$t('login.password')"
          type="input"
          hint="Enter your password to access this website"
        />
        <div class="text-center">
          <v-btn
            color="primary"
            class="mr-4 text-white"
            prepend-icon=""
            :disabled="!valid"
            @click="validate"
          >
            {{ $t("login.go") }}
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-responsive>
</template>
