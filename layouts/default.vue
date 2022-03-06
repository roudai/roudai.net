<template>
  <div>
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
  }
  h3 {
    margin-top: 1rem;
  }
</style>