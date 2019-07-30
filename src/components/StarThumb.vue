<template>
  <div class="star-contain">
    <g-image class="star-image" :src="movie.Attachments[0].url" />
    <div class="text-contain">
      <h1>{{movie.Name}}</h1>
      <p>{{movie.Notes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarThumb",
  props: {
    data: null
  },
  computed: {
    movie() {
      return this.data.node;
    }
  }
};
</script>

<style lang="scss" scoped>
.star-contain {
  margin-bottom: 60px;
  flex-grow: 1;
  flex-basis: 28%;
  padding: 0px 30px;

  .text-contain {
    flex-basis: 33%;
  }

  h1 {
    font-size: 23px;
  }

  .star-image {
    height: 250px;
    display: block;
    margin: 0 auto;
  }
}
</style>