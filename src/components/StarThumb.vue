<template>
  <div class="star-contain">
    <div class="star-image" :style="{ backgroundImage: 'url(' + movie.Attachments[0].url + ')' }"></div>
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
  margin-bottom: 90px;
  flex-grow: 1;
  flex-basis: 25%;
  padding: 0px 40px;

  .text-contain {
    flex-basis: 33%;
  }

  h1 {
    font-size: 23px;
  }

  .star-image {
    width: 100%;
    height: 250px;
    display: block;
    margin: 0 auto;
    background-size: cover;
    background-position: center;
  }
}
</style>