<template>
  <div class="bg-light">
    <b-container>
      <nav-bar />
      <b-container class="entry-container">
        <nuxt />
      </b-container>
      <Footer />
    </b-container>
  </div>
</template>

<style>
  .container-xl{
      padding-right: 0px;
      padding-left: 0px;
      max-width: 720px;
  }
  .entry-container {
      padding: 20px;
  }
  .list-group-item {
    padding: 0rem 0.5rem;
    display:grid;
    align-items:center;
  }
  h3 {
    margin-top: 1rem;
  }
</style>