<template>
  <div>
    <h2>Megaminx EP</h2>
    <h3>2つ反転</h3>
    <h4>隣り合った3点交換</h4>
    <b-list-group horizontal>
      <b-list-group-item><div id="EP1"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">{{ caseEP1 }}</b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
import { PNG, Canvas, Type } from "sr-puzzlegen"

export default {
  data: () => ({
    width: 120,
    height: 120,
    strokeWidth: 0.05,
    caseEP1: "U (u2) R U R' F' R U R' U' R' F R2 U' R' U'",
  }),
  mounted() {
    let options = {}
    options.width = this.width
    options.height = this.height
    options.strokeWidth = this.strokeWidth
    options.puzzle = {case: this.caseEP1}
    console.log(options)
    Canvas("#EP1", Type.MEGAMINX_TOP, options);

  }
}
</script>
