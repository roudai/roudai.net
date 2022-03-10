<template>
  <div>
    <h2>PLL手順</h2>
    <h3 v-text="pllName['name1']"></h3>
    <b-list-group horizontal>
      <b-list-group-item><div id="pll1"></div></b-list-group-item>
      <b-list-group-item class="flex-fill"><div v-for="item in pll[1]" :key="item">{{ item }}</div></b-list-group-item>
    </b-list-group>
    <!-- <h3 v-text="pllName['name2']"></h3>
    <b-list-group horizontal>
      <b-list-group-item><div id="pll2"></div></b-list-group-item>
      <b-list-group-item class="flex-fill"><div v-for="item in pll[2]" :key="item">{{ item }}</div></b-list-group-item>
    </b-list-group>
    <h3 v-text="pllName['name3']"></h3>
    <b-list-group horizontal>
      <b-list-group-item><div id="pll3"></div></b-list-group-item>
      <b-list-group-item class="flex-fill"><div v-for="item in pll[3]" :key="item">{{ item }}</div></b-list-group-item>
    </b-list-group>
    <h3 v-text="pllName['name4']"></h3>
    <b-list-group horizontal>
      <b-list-group-item><div id="pll4"></div></b-list-group-item>
      <b-list-group-item class="flex-fill"><div v-for="item in pll[4]" :key="item">{{ item }}</div></b-list-group-item>
    </b-list-group> -->

    <div v-for="n of 10" :key="n">
      <h3 v-text="pllName['name' + n]"></h3>
      <b-list-group horizontal>
        <b-list-group-item><div :id="'pll' + n"></div></b-list-group-item>
        <b-list-group-item class="flex-fill"><div v-for="item in pll[n]" :key="item">{{ item }}</div></b-list-group-item>
      </b-list-group>
    </div>

  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    mask: "pll",
    view: "plan",
    width: 120,
    height: 120,
    pll:{
     "1": [
      "両手：R2 U R U R' U' R' U' R' U R'",
      "両手：R' U R' U' R' U' R' U R U R2",
      "片手：z U' R U' R' U' R' U' R U R U'2",
      "片手：z U2 R U R U' R' U' R' U' R U'",
      "最少：F2 U M' U2 M U F2（9手）",
     ],
     "2": [
      "両手、片手：R U' R U R U R U' R' U' R2",
      "両手、片手：R2 U' R' U' R U R U R U' R",
      "最少：F2 U' M' U2 M U' F2（9手）",
     ],
     "3": [
      "両手、片手、最少：x' R U' R D2 R' U R D2 R2 x（9手）",
      "両手：x R2′ D2 R U R' D2 R U' R",
     ],
     "4": [
      "両手、片手、最少：x' R2 D2 R' U' R D2 R' U R' x（9手）",
      "両手：R U R' F' Rw U R' U' Rw' F R2 U' R'",
      "両手：x R' U R' D2 R U' R' D2 R2",
     ],
     "5": [
      "両手、片手：U R' U' R U' R U R U' R' U R U R2 U' R' U",
      "両手：U' M' U M'2 U M'2 U M' U2 M'2",
      "最少：M2 U' x M2 U2 M2 U2 x' U M2（12手）",
     ],
     "6": [
      "両手：M'2 U M'2 U2 M'2 U M2",
      "片手、多分割：R2 U2 R U2 R2 U2 R2 U2 R U2 R2",
      "最少：L R U2 L' R' F' B' U2 F B（10手）",
     ],
     "7": [
      "両手、片手：x' R U' R' D R U R' D' R U R' D R U' R' D' x",
      "多分割：R2 U R' U' y R U R' U' R U R' U' R U R' F U' F2",
      "最少：R' U L' D2 L U' R L' U R' D2 R U' L（14手）",
     ],
     "8": [
      "両手、片手：R U R' U' R' F R2 U' R' U' R U R' F'",
      "両手：L' U' L U Rw U' Rw'2 F Rw U L' U' Rw U",
      "両手、最少：	z U2 R' U2 R U2 x U2 R U2 Rw' U2 Rw（11手）",
     ],
     "9": [
      "両手、最少：R' U R' U' y R' F' R2 U' R' U R' F R F（14手）",
      "両手：L' U L' U' y' R' F' R2 U' R' U R' F R F",
      "片手：y R U'2 R' U'2 L' U R U' L U' L' U R' U' L",
     ],
     "10": [
      "両手：R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      "両手：R' U2 R' U' y R' F' R2 U' R' U R' F R U' F",
      "片手：x R2 U R U' R' y R' U' R U x U'2 R U' R' U R",
      "最少：L B2 F' D2 B R' B' D2 F2 L' F' L B2 L'（14手）",
     ] },
    pllArrow:{
      arrow1: "U3U5-s7-red,U5U7-s7-red,U7U3-s7-red",
      arrow2: "U5U3-s7-red,U7U5-s7-red,U3U7-s7-red",
      arrow3: "U2U6-s8-red,U6U8-s8-red,U8U2-s8-red",
      arrow4: "U6U2-s8-red,U8U6-s8-red,U2U8-s8-red",
      arrow5: "",
      arrow6: "",
      arrow7: "",
      arrow8: "",
      arrow9: "",
      arrow10: "",
    },
    pllName:{
      name1: "U.a Permutation",
      name2: "U.b Permutation",
      name3: "A.a Permutation",
      name4: "A.b Permutation",
      name5: "Z Permutation",
      name6: "H Permutation",
      name7: "E Permutation",
      name8: "T Permutation",
      name9: "V Permutation",
      name10: "F Permutation",
    }
  }),
  mounted() {
    let parameter = {}
    parameter.view = this.view
    parameter.width = this.width
    parameter.height = this.height
    for(let key in this.pll){
      parameter.case = this.makeCase(this.pll[key][0])
      parameter.arrows = this.pllArrow['arrow' + key];
      SRVisualizer.cubePNG(document.getElementById('pll' + key), parameter)
    }
  },
  methods: {
    makeCase: function(alg) {
      return alg.substr(alg.indexOf('：')+1)
    }
  }
}
</script>