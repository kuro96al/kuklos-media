<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <!-- <logo /> -->
        <!-- <vuetify-logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <nuxt-link to="/news">お知らせ</nuxt-link>
          <nuxt-link to="/articles">記事</nuxt-link>
          <!-- <img src="~/assets/images/sample_03.jpg"> -->
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer />
          <v-btn color="warning" nuxt to="/articles">
            Continue
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  head() {
    return {
      title: 'index'
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
  }
}
</script>
