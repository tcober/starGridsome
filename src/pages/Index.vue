<template>
  <Layout>
    <div class="tech-contain">
      <g-image class="tech" alt="Gridsome" src="@/assets/gridsome.svg" />+
      <g-image class="tech" alt="Airtable" src="@/assets/airtable.svg" />
      <h1>DEMO</h1>
    </div>
    <div class="thumb-contain">
      <template v-for="movie in movies">
        <star-thumb :data="movie" :key="movie.node.id" />
      </template>
    </div>
    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
import StarThumb from "@/components/StarThumb.vue";
export default {
  metaInfo: {
    title: "Star Wars Gridsome"
  },
  components: { StarThumb },
  name: "Home",
  computed: {
    movies() {
      return this.$page.groups.edges;
    }
  }
};
</script>

<page-query>
query Groups{
	groups: allAirtable {
    edges {
      node {
        id
        Name
        Notes
        Attachments { 
        	url
        }
      }
    }
  }
}
</page-query>

<style lang="scss">
.tech-contain {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  font-size: 50px;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0px 50px;
  .tech {
    height: 70px;
    margin: 0px 30px;
    width: 70px;
  }
  h1 {
    text-align: center;
    flex-basis: 100%;
    font-size: 30px;
    margin: 10px 0px;
  }
}

.thumb-contain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home-links {
  display: block;
  margin: 0 auto;
  padding-bottom: 40px;
  font-weight: 900;
  a {
    margin-right: 1rem;
  }
}
</style>
