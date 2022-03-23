<template>
  <div>
    <h2>PLL 2側面判断</h2>
    <p>
      PLLの2側面判断は、下記の4つを判断基準とします。
    </p>
    <ol>
      <li>3-BAR：1面に同じ色が3つ並んでいる</li>
      <li>LIGHTS：1面の両コーナーが同じ色（車のヘッドライト）</li>
      <li>2-BAR：1面に同じ色が2つ並んでいる</li>
      <li>BOOKEND：2側面を見たとき、左面の左端と右面の右端が同じ色（本立てが本の両サイドを挟んでいるイメージ）</li>
    </ol>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="outline-primary">
            3-BAR<br>（左に3-BAR）<br>
            <img src="~/assets/images/two-sided/3-BAR.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div class="p-1">
                <img src="~/assets/images/two-sided/3-BAR_1.png" :width="iwidth" :height="iheight"><br>
                headlights = U
                <b-row>
                  <b-col><div id="pll_3BAR0"></div></b-col>
                  <b-col><div id="pll_3BAR1"></div></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/3-BAR_2.png" :width="iwidth" :height="iheight"><br>
                2-bar = J
                <b-row>
                  <b-col><div id="pll_3BAR2"></div></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/3-BAR_3.png" :width="iwidth" :height="iheight"><br>
                2-bar = J
                <b-row>
                  <b-col><div id="pll_3BAR3"></div></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/3-BAR_4.png" :width="iwidth" :height="iheight"><br>
                4 Colors = F
                <b-row>
                  <b-col><div id="pll_3BAR4"></div></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="outline-primary">
            DOUBLE LIGHTS<br>（LIGHTSが2つ）<br>
            <img src="~/assets/images/two-sided/Double_lights.png" :width="iwidth" :height="iheight"
          ></b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <div class="p-1">
                <img src="~/assets/images/two-sided/Double_lights_1.png" :width="iwidth" :height="iheight"><br>
                2-color 6-checker = Z
                <b-row>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/Double_lights_2.png" :width="iwidth" :height="iheight"><br>
                adj edges & 4 colors = Z
                <b-row>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/Double_lights_3.png" :width="iwidth" :height="iheight"><br>
                opp edges = H
                <b-row>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
              <div class="p-1">
                <img src="~/assets/images/two-sided/Double_lights_4.png" :width="iwidth" :height="iheight"><br>
                2:1 pattern & 3 colors = U
                <b-row>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                  <b-col></b-col>
                </b-row>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="outline-primary">
            LIGHTS + 2-BAR<br>（左にLIGHTS、右に2-BAR）<br>
            <img src="~/assets/images/two-sided/Lights_2-BAR_A.png" :width="iwidth" :height="iheight"><br>
            <img src="~/assets/images/two-sided/Lights_2-BAR_B.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Lights_2-BAR_1.png" :width="iwidth" :height="iheight"><br>
              inside bar & 3 colors = T
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lights_2-BAR_2.png" :width="iwidth" :height="iheight"><br>
              inside bar & 4 colors = R
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lights_2-BAR_3.png" :width="iwidth" :height="iheight"><br>
              outer bar & 3 colors = A
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lights_2-BAR_4.png" :width="iwidth" :height="iheight"><br>
              outer bar & 4 color = Ga/c
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="outline-primary">
            LONE LIGHTS<br>（左にLIGHTSのみ）<br>
            <img src="~/assets/images/two-sided/Lone_lights.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Lone_lights_1.png" :width="iwidth" :height="iheight"><br>
              5-checker = R
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lone_lights_2.png" :width="iwidth" :height="iheight"><br>
              4-checker = Ga/c
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lone_lights_3.png" :width="iwidth" :height="iheight"><br>
              lights enclose opp = Gb/d
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Lone_lights_4.png" :width="iwidth" :height="iheight"><br>
              lights enclose adj (but no checker) = A
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="outline-primary">
            DOUBLE 2-BAR<br>（2-BARが2つ）<br>
            <img src="~/assets/images/two-sided/Double_2-BAR_A.png" :width="iwidth" :height="iheight"><br>
            <img src="~/assets/images/two-sided/Double_2-BAR_B.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Double_2-BAR_1.png" :width="iwidth" :height="iheight"><br>
              both outside = Y
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Double_2-BAR_2.png" :width="iwidth" :height="iheight"><br>
              both inside & bookends = A
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Double_2-BAR_3.png" :width="iwidth" :height="iheight"><br>
              inside & no bookends = V
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Double_2-BAR_4.png" :width="iwidth" :height="iheight"><br>
              same side & bookend = J
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Double_2-BAR_5.png" :width="iwidth" :height="iheight"><br>
              same side & no bookend = N
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-6 variant="outline-primary">
            OUTSIDE 2-BAR<br>（左外側に2-BAR）<br>
            <img src="~/assets/images/two-sided/Outside_2-BAR.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Outside_2-BAR_1.png" :width="iwidth" :height="iheight"><br>
              no bookend = V
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Outside_2-BAR_2.png" :width="iwidth" :height="iheight"><br>
              adj appears twice = R
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Outside_2-BAR_3.png" :width="iwidth" :height="iheight"><br>
              opp appears twice = Gb/d
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Outside_2-BAR_4.png" :width="iwidth" :height="iheight"><br>
              adj by bar & 4 colors = T
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Outside_2-BAR_5.png" :width="iwidth" :height="iheight"><br>
              opp by bar & 4 colors = A
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-7 variant="outline-primary">
            INSIDE 2-BAR<br>（左内側に2-BAR）<br>
            <img src="~/assets/images/two-sided/Inside_2-BAR.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Inside_2-BAR_1.png" :width="iwidth" :height="iheight"><br>
              bookends adj color = Ga/c
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Inside_2-BAR_2.png" :width="iwidth" :height="iheight"><br>
              bookends opp col = Gb/d
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Inside_2-BAR_3.png" :width="iwidth" :height="iheight"><br>
              no bookends = Y
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-8 variant="outline-primary">
            BOOKENDS NO BAR<br>（BOOKENDSかつBARなし）<br>
            <img src="~/assets/images/two-sided/Bookends_NoBAR.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/Bookends_NoBAR_1.png" :width="iwidth" :height="iheight"><br>
              enclosed 4-checker = F
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Bookends_NoBAR_2.png" :width="iwidth" :height="iheight"><br>
              adj appears twice = R
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/Bookends_NoBAR_3.png" :width="iwidth" :height="iheight"><br>
              opp appears twice = Ga/c
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-9 variant="outline-primary">
            NO BOOKENDS<br>（BOOKENDS無しかつBARなし）<br>
            <img src="~/assets/images/two-sided/No_bookends.png" :width="iwidth" :height="iheight">
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <img src="~/assets/images/two-sided/No_bookends_1.png" :width="iwidth" :height="iheight"><br>
              inner 4-checker = V
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/No_bookends_2.png" :width="iwidth" :height="iheight"><br>
              outer 4-checker = Y
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <img src="~/assets/images/two-sided/No_bookends_3.png" :width="iwidth" :height="iheight"><br>
              5-checker w/ opp middle = E
              <b-row>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    iwidth: 120,
    iheight: 21,
    width: 100,
    height: 100,
    mask: "ll",
    pll_3BAR:[
      "R2 U R U R' U' R' U' R' U R' y2",
      "R U' R U R U R U' R' U' R2 y2",
      "y2 R' U L' U2 R U' R' U2 L R U'",
      "y' R U R' F' R U R' U' R' F R2 U' R' U' y'",
      "y' R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R y'",
    ],
    pll_3BAR_arrow:[
      "U1U3-s8,U3U5-s8,U5U1-s8",
      "U3U1-s8,U5U3-s8,U1U5-s8",
      "U0U2,U2U0,U1U3-s8,U3U1-s8",
      "U0U2,U2U0,U1U5-s8,U5U1-s8",
      "U0U2,U2U0,U3U5,U5U3"
    ]
  }),
  mounted() {
    let parameter = {}
    parameter.width = this.width
    parameter.height = this.height
    parameter.mask = this.mask
    for(let key in this.pll_3BAR){
      parameter.algorithm = this.pll_3BAR[key]
      parameter.arrows = this.pll_3BAR_arrow[key]
      SRVisualizer.cubePNG(document.getElementById('pll_3BAR' + key), parameter)
    }
  },
}
</script>
