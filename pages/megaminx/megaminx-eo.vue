<template>
  <div>
    <h2>Megaminx EO</h2>
    <h3>2つ反転</h3>
    <h4>隣り合った2つ反転</h4>
    <b-list-group horizontal>
      <b-list-group-item><div id="EO1"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">{{ caseEO1 }}</b-list-group-item>
    </b-list-group>
    
    <h4>離れた2つ反転</h4>
    <b-list-group horizontal>
      <b-list-group-item><div id="EO2"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">{{ caseEO2 }}</b-list-group-item>
    </b-list-group>

    <h3>4つ反転</h3>
    <b-list-group horizontal>
      <b-list-group-item><div id="EO3"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">{{ caseEO3 }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { PNG, Canvas, Type } from "sr-puzzlegen"

export default {
  data: () => ({
    width: 120,
    height: 120,
    stroke: 0.01,
    maskOLL: {
      "F": [0,1,2,3,4,5,6,7,8,9,10],
      "R": [0,1,2,3,4,5,6,7,8,9,10],
      "L": [0,1,2,3,4,5,6,7,8,9,10],
      "BR": [0,1,2,3,4,5,6,7,8,9,10],
      "BL": [0,1,2,3,4,5,6,7,8,9,10],
      "d": [0,1,2,3,4,5,6,7,8,9,10],
      "b": [0,1,2,3,4,5,6,7,8,9,10],
      "dl": [0,1,2,3,4,5,6,7,8,9,10],
      "dr": [0,1,2,3,4,5,6,7,8,9,10],
      "bl": [0,1,2,3,4,5,6,7,8,9,10],
      "br": [0,1,2,3,4,5,6,7,8,9,10]
    },
    caseEO1: "R' U' F' U F R",
    caseEO2: "F R U R' U' F'",
    caseEO3: "R BR BL U BL' U BR' U'2 R'",
  }),
  mounted() {
    let options = {}
    options.width = this.width
    options.height = this.height
    options.stroke = this.stroke
    options.puzzle = {case: this.caseEO1, mask: this.maskOLL}
    Canvas("#EO1", Type.MEGAMINX_TOP, options);

    options.puzzle = {case: this.caseEO2, mask: this.maskOLL}
    Canvas("#EO2", Type.MEGAMINX_TOP, options);

    options.puzzle = {case: this.caseEO3, mask: this.maskOLL}
    Canvas("#EO3", Type.MEGAMINX_TOP, options);
  }
}
</script>
