<template>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <p class="copyright text-muted text-center" v-html="`${copy} 2012-${now} ${copyright}`"></p>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      copy: '&copy;',
      now: '',
      copyright: 'roudai.net'
    };
  },
  created () {
    const d = new Date()
    this.now = d.getFullYear()
  }
}
</script>
