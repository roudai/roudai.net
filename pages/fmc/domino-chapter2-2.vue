<template>
  <div>
    <h2>部分的ドミノリダクション</h2>
    <p>
      DRのステップが完了した後に、PDR（Partial Domino Reduction：部分的ドミノリダクション）と呼ばれるものが発生することがあります。
      これはDRに必要な3つのステップ、CO、E-Layer、EOのうち、2つだけができていることから、「部分的」とつきます。
      この章では、そのすべての場合について説明します。
    </p>
    <p>
      PDRの有効な解決法は、DRができたかのように進め、最後にインサーションで修正することだということを覚えておいてください。
    </p>

    <h3>2.2.1 COとEOができたPDF</h3>
    <h4>1バッドエッジ</h4>
    <p>
      There are two ways to deal with this case. The first one is to insert a commutator, either during the solve or
      at the end when you have a full skeleton. Edge commutators may cancel more than average in DR solves so
      it would be better to leave this at the end. Nonetheless, if you decide to insert the commutator while setting
      up the trigger, then you must pay attention to what edges you are cycling. For a 3 cycle the only valid options are:
    </p>
    <p>
      Bad edge → E-edge in the U/D layer → Good edge <br>
      Bad edge → U/D edge → E-edge in the U/D layer
    </p>
    <p>
      The other option is to insert a slice that swaps the bad edge with the last E-edge and either two U/D edges
      or two good edges. Here is an example of this by Sebastiano Tronto:
    </p>
    <div>
      <b-card title="First PDR Example">
        <b-card-text>
          スクランブル：{{ example1 }}
        </b-card-text>
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>F U D' R <span class="text-muted">// EO (4/4)</span></div>
              <div>F <span class="text-muted">// 3e1c (1/5)</span></div>
              <div>L2 U' * B U' B' <span class="text-muted">/1e (5/10)</span></div>
              <div>* = U' M2 U (3/13) <span class="text-muted">// DR</span></div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example1"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <h4>2 bad edges</h4>
    <div>
      <b-card title="Break & Solve">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R' E2 R or R E2 R’'</div>
              <div>Other Variations</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example2"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      Your goal is to form a column with the E edges on the opposite face as the 2 bad edges and then swap them with
      R’ E2 R and variations. As in the previous case, you can insert a slice move in your solve that swaps the 2 bad
      edges with the two E-edges. R’ U2 D2 L = R’ E2 R is in fact the easiest case of setup to a single slice.
    </p>

    <h4>3 or 4 bad edges</h4>
    <p>
      This is not a very good case but you have a few options to consider: <br>
      -You could insert two slices that swap the bad edges with E-edges. <br>
      -You could perform a single move that takes you either to a 4c1e case or to a 4c2e case. <br>
      -You could keep on going with your corners first solve and insert the edges when you have a full skeleton. <br>
    </p>
    <p>
      If none of these seem to have good continuations, you should start looking for a different DR
    </p>

    <h3>2.2.3 PDR in which you already have E-layer and EO</h3>
    <h4>2 bad corners</h4>
    <div>
      <b-card title="Fake Swap">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R U' L2 U R'</div>
              <div>Other Variations</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example3"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <h4>3 bad corners</h4>
    <p>
      You can insert a sune or a 3-corner commutator. Keep in mind that the sune does a 3 cycle of edges as well, so
      the same rules that were explained in the ”1 bad edge” section for which edges can be cycled apply here.
    </p>
    <p>
      If you decide to insert a commutator during the setup phase, you should go for the classic 8movers (pure). If you
      decide to keep on solving with PDR and insert the corners after you have a full skeleton, in section 5.1 we will
      talk about ”DR special” algorithms that may cancel more moves.
    </p>

    <h4>4 to 8 bad corners</h4>
    <p>
      It’s better to look for another DR
    </p>
    
    <h3>2.2.3 PDR in which you already have CO and E-layer</h3>
    <h4>0 corners and 0 edges</h4>
    <p>
      You can use M’ U M, M’ U M’ and other Roux-like EO’s. <br>
      In this particular case you already have 4 good edges and all the corners oriented but you don’t have EO. To
      achieve DR you need to orient the edges using the S and M slices like in the second to last step of the Roux method
    </p>
    <p>
      Alexandre Campos has a nice document (click here!) that collects a lot of corner-PDR and DR solves
    </p>
  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    colorScheme: { "0": "#ffffff", "1": "#ee0000", "2": "#00d800", "3": "#fefe00", "4": "#ffa100", "5": "#0000f2" },
    example1: "R' U' F U' F2 U' F2 L2 U' B2 D2 F U2 B' D' B D' F2 R' U' L' B U2 R' U' F",
    example2: ["n", "n", "d", "n", "n", "b", "n", "n", "d", "r", "l", "r", "r", "n", "r", "r", "l", "r", "n", "n", "b", "d", "n", "b", "n", "n", "b"],
    example3: ["n", "n", "n", "n", "n", "n", "n", "n", "l", "b", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "u", "n", "n", "n", "r", "n", "n"],
  }),
  mounted() {
    let parameter = {}
    parameter.colorScheme = this.colorScheme
    parameter.algorithm = this.example1
    SRVisualizer.cubePNG(document.getElementById('example1'), parameter)

    parameter = {}
    parameter.facelets = this.example2
    SRVisualizer.cubePNG(document.getElementById('example2'), parameter)
    parameter.facelets = this.example3
    SRVisualizer.cubePNG(document.getElementById('example3'), parameter)
  }
}
</script>
