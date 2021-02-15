<template>
  <article>
    <v-container>
      <v-layout column justify-center align-center>
        <h1>{{article.title}}</h1>
        <dl>
          <dd>{{article.date}}</dd>
        </dl>
        <div><img :src="article.image" /></div>
        <div v-for="tag in article.tags" :key="tag">{{tag}}</div>

        <v-flex xs12 sma12 md12 style="width: 100%">
          <div class="ma-4 markdown-body">
            <nuxt-content :document="article" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch()
    return { article }
  }
}
</script>