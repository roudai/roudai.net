<template>
  <div>
    <h2>F2L手順</h2>
    <b-list-group horizontal v-for="(item, index) in f2l" :key="item">
      <b-list-group-item>{{ index }}</b-list-group-item>
      <b-list-group-item><div :id="'f2l_' + index"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">{{ item[0] }}<br/>{{ item[1] }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    mask: "f2l",
    viewportRotations: [ [ 1, 30 ], [ 0, -34 ], [ 2, 0 ] ],
    width: 80,
    height: 80,
    f2l: {
      case01: ["U R U' R'"],
      case02: ["F R' F' R", "y' U' R' U R"],
      case03: ["F' U' F", "y' R' U'R"],
      case04: ["R U R'"],
      case05: ["U' R U R' U2 R U' R'"],
      case06: ["U' Rw U' R' U R U Rw'", "y' U R' U' R U2 R' U R"],
      case07: ["U' R U2 R' U2 R U' R'"],
      case08: ["Rw' U2 R2 U R2' U Rw", "y' U R' U2 R U2 R' U R"],
      caes09: ["F R U R' U' F' R U' R'", "y' U R' U' R U' R' U' R"],
      case10: ["U' R U R' U R U R'"],
      case11: ["U' R U2 R' U F' U' F", "y' R' U R U' R' U R U'2 R' U R"],
      case12: ["R U' R' U R U' R' U2 R U' R'"],
      case13: ["M' U' R U R' U2 R U' Rw'", "y' U R' U R U' R' U' R"],
      case14: ["U' R U' R' U R U R'"],
      case15: ["R U2 R' U R U R' U R U' R'"],
      case16: ["U R F R U R' U' F' R'"],
      case17: ["R U2 R' U' R U R'"],
      case18: ["R' F R F' R U' R' U R U' R'", "y' R' U2 R U R' U' R"],
      case19: ["U R U2 R' U R U' R'"],
      case20: ["U' R U R' U Rw U' Rw' U2 Rw U Rw'", "y' U' R' U2 R U' R' U R"],
      case21: ["R U' R' U2 R U R'"],
      case22: ["F' L' U2 L F", "y' U2 R' U' R U' R' U R"],
      case23: ["U R U' R' U' R U' R' U R U' R'"],
      case24: ["F U R U' R' F' R U' R'"],
      case25: ["U' R' F R F' R U R'"],
      case26: ["U R U' R' U' F' U F"],
      case27: ["R U' R' U R U' R'"],
      case28: ["R U R' U' F R' F' R", "y' R' U R U' R' U R"],
      case29: ["R' F R F' R' F R F'", "y' R' U' R U R' U' R"],
      case30: ["R U R' U' R U R'"],
      case31: ["U' R' F R F' R U' R'"],
      case32: ["R U R' U' R U R' U' R U R'"],
      case33: ["U' R U' R' U2 R U' R'"],
      case34: ["U' R U2' R' U R U R'", "y' U R' U R U2' R' U R"],
      case35: ["U2 R U R' F R' F' R", "U' R U R' U y' R' U' R"],
      case36: ["U2 R' F R F' U2 R U R'"],
      case37: ["R2 U2 F R2 F' U2 R' U R'", "R U' R' U y' R' U2 R U2' R' U R"],
      case38: ["R U R' U' R U2 R' U' R U R'"],
      case39: ["R U R' U2 R U' R' U R U R'"],
      case40: ["R U' R' F R U R' U' F' R U' R'"],
      case41: ["R U F RU R' U' F' R'"],
    }
  }),
  mounted() {
    let paramter = []
    for(let key in this.f2l) {
      paramter[key] = {}
      paramter[key].mask = this.mask
      paramter[key].viewportRotations = this.viewportRotations
      paramter[key].width = this.width
      paramter[key].height = this.height
      paramter[key].case = this.f2l[key][0]
      SRVisualizer.cubePNG(document.getElementById('f2l_' + key), paramter[key])
    }
  },
}
</script>

<style scoped>
  .list-group-item {
    padding: 0rem 1rem;
  }
</style>