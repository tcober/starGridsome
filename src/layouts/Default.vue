<template>
  <div class="layout">
    <header class="header">
      <g-image alt="Star Wars logo" src="@/assets/star_wars.png" width="535" />
    </header>
    <slot />
  </div>
</template>

<style lang="scss">
body {
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: $gray;
  color: #fff;
}

p {
  line-height: 24px;
  font-size: 16px;
}

.layout {
  max-width: 95%;
  margin: 30px auto 0px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.header {
  margin-bottom: 20px;
  height: auto;
  flex-basis: 100%;
  padding: 0px 20px;

  img {
    display: block;
    margin: 0 auto;
  }
}

.nav__link {
  margin-left: 20px;
}

a {
  color: #fff;
  &:hover {
    color: rgb(213, 216, 44);
  }
}
</style>
