<template>
  <b-row>
    <b-col cols="3">PLL01,02</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL03,04</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL1"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/01_U-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL2"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/02_A-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL05</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL06</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL3"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/03_Z-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL4"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/04_H-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL07</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL08</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL5"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/05_E-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL6"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/06_T-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL09</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL10</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL7"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/07_V-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL8"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/08_F-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL11,12</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL13,14</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL9"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/09_R-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL10"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/10_J-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL15</b-col>
    <b-col cols="3">U-Perm</b-col>
    <b-col cols="3">PLL16-19</b-col>
    <b-col cols="3">A-Perm</b-col>
    <b-col cols="3"><div id="PLL11"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/11_Y-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"><div id="PLL12"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/12_G-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3">PLL20,21</b-col>
    <b-col cols="3">N-Perm</b-col>
    <b-col cols="3"></b-col>
    <b-col cols="3"></b-col>
    <b-col cols="3"><div id="PLL13"></div></b-col>
    <b-col cols="3"><img src="~/assets/images/pll/13_N-Perm.gif" :width="width" :height="height"></b-col>
    <b-col cols="3"></b-col>
    <b-col cols="3"></b-col>
  </b-row>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    mask: "oll",
    view: 'plan',
    width: 70,
    height: 70,
    colorScheme:  { "0": "#ffffff", "1": "#ee0000", "2": "#00d800", "3": "#fefe00", "4": "#ffa100", "5": "#0000f2" },
    pllArrow:{
      "1": "U3U5-s7-red,U5U7-s7-red,U7U3-s7-red",
      "2": "U2U6-s8-red,U6U8-s8-red,U8U2-s8-red",
      "3": "U1U3-red,U3U1-red,U5U7-red,U7U5-red",
      "4": "U1U7-red,U7U1-red,U3U5-red,U5U3-red",
      "5": "U0U6-red,U6U0-red,U2U8-red,U8U2-red",
      "6": "U2U8-red,U8U2-red,U3U5-s8-red,U5U3-s8-red",
      "7": "U0U8-red,U8U0-red,U1U5-red,U5U1-red",
      "8": "U1U7-red,U7U1-red,U2U8-red,U8U2-red",
      "9": "U0U2-red,U2U0-red,U5U7-red,U7U5-red",
      "10": "U2U8-red,U8U2-red,U5U7-s8-red,U7U5-s8-red",
      "11": "U0U8-red,U8U0-red,U1U3-red,U3U1-red",
      "12": "U0U2-s8-red,U2U6-s8-red,U6U0-s8-red,U1U3-s6-blue,U3U7-s6-blue,U7U1-s6-blue",
      "13": "U2U6-red,U6U2-red,U3U5-red,U5U3-red",
    },
  }),
  mounted() {
    let parameter = {}
    parameter.mask = this.mask
    parameter.view = this.view
    parameter.width = this.width
    parameter.height = this.height
    parameter.colorScheme = this.colorScheme
    for(let key in this.pllArrow){
      parameter.arrows = this.pllArrow[key];
      SRVisualizer.cubePNG(document.getElementById('PLL' + key), parameter)
      console.log('PLL'+ key);
    }
  },
  methods: {
    makeCase: function(alg) {
      return alg.substr(alg.indexOf('：')+1)
    }
  }
}
</script>