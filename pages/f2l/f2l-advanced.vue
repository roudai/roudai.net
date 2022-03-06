<template>
  <div>
    <h2>発展系F2L</h2>
    <h3>両手手順</h3>
    <b-list-group horizontal v-for="(item, index) in advancedF2lth" :key="index">
      <b-list-group-item>{{ index }}</b-list-group-item>
      <b-list-group-item><div :id="'advancedF2lth' + index"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">
        <div>{{ item[0] }}</div>
      </b-list-group-item>
    </b-list-group>
    <h3>片手手順</h3>
    <b-list-group horizontal v-for="(item, index) in advancedF2loh" :key="index">
      <b-list-group-item>{{ index }}</b-list-group-item>
      <b-list-group-item><div :id="'advancedF2loh' + index"></div></b-list-group-item>
      <b-list-group-item class="flex-fill">
        <div>{{ item[0] }}</div>
      </b-list-group-item>
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
    advancedF2lth: {
      "1": ["Fw R Fw'"],
      "2": ["Fw R' Fw'"],
      "3": ["U R' F R F' R' U' R"],
      "4": ["U R2 U' R' U R U' R"],
      "5": ["U2 L2 U2 L U L' U L2"],
    },
    advancedF2loh: {
      "6": ["R U' R U2 R2 U' R2 U' R2"],
    }
  }),
  mounted() {
    if(window.innerWidth >= 768) this.width = 80; this.height = 80;
    let paramter = []
    for(let key in this.advancedF2lth) {
      paramter[key] = {}
      paramter[key].mask = this.mask
      paramter[key].viewportRotations = this.viewportRotations
      paramter[key].width = this.width
      paramter[key].height = this.height
      paramter[key].case = this.advancedF2lth[key][0]
      SRVisualizer.cubePNG(document.getElementById('advancedF2lth' + key), paramter[key])
    }

    for(let key in this.advancedF2loh) {
      paramter[key] = {}
      paramter[key].mask = this.mask
      paramter[key].viewportRotations = this.viewportRotations
      paramter[key].width = this.width
      paramter[key].height = this.height
      paramter[key].case = this.advancedF2loh[key][0]
      SRVisualizer.cubePNG(document.getElementById('advancedF2loh' + key), paramter[key])
    }
  },
}
</script>
