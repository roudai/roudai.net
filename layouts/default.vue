<template>
  <div class="bg-light">
    <b-container>
      <nav-bar />
      <b-container class="entry-container">
        <nuxt />
      </b-container>
    </b-container>
  </div>
</template>

<style>
  .container{
      padding-right: 0px;
      padding-left: 0px;
  }
  .entry-container {
      padding: 20px;
  }
  .list-group-item {
    padding: 0rem 0.5rem;
    display:flex;
    align-items:center;
  }
  h3 {
    margin-top: 1rem;
  }
</style>