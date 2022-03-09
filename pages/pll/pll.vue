<template>
  <div>
    <h2>PLL手順</h2>
    <h3>U.a Permutation</h3>
    <div id="pll1"></div>
    <h3>U.b Permutation</h3>
    <div id="pll2"></div>
    <h3>A.a Permutation</h3>
    <div id="pll3"></div>
    <h3>A.b Permutation</h3>
    <div id="pll4"></div>
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
  }),
  mounted() {
    let parameter = {}
    parameter.view = this.view
    parameter.width = this.width
    parameter.height = this.height
    parameter.case = "R2 U R U R' U' R' U' R' U R'"
    parameter.arrows = "U3U5-s7-red,U5U7-s7-red,U7U3-s7-red"
    SRVisualizer.cubePNG(document.getElementById('pll1'), parameter)
    parameter.case = "R U' R U R U R U' R' U' R2"
    parameter.arrows = "U5U3-s7-red,U7U5-s7-red,U3U7-s7-red"
    SRVisualizer.cubePNG(document.getElementById('pll2'), parameter)
    parameter.case = "x' R U' R D2 R' U R D2 R2 x"
    parameter.arrows = "U2U6-s8-red,U6U8-s8-red,U8U2-s8-red"
    SRVisualizer.cubePNG(document.getElementById('pll3'), parameter)
    parameter.case = "x' R2 D2 R' U' R D2 R' U R' x"
    parameter.arrows = "U6U2-s8-red,U8U6-s8-red,U2U8-s8-red"
    SRVisualizer.cubePNG(document.getElementById('pll4'), parameter)
  },
}
</script>