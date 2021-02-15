<template>
  <div>
    <div v-for="n in articles" :key="n.slug">
      <nuxt-link :to="'/articles/'+ n.slug">{{n.title}} {{n.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: '記事一覧'
    }
  },
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').limit(15)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>