<template>
  <div>
    <h2>第2章 コーナー反転とグッドエッジ</h2>
    <p>
      グッドEOなスタートが見つかったら（ない場合があることを忘れずに）、次のステップは、実際のドミノリダクションになります。
      手数を節約して4つのグッドエッジとCOを作るのに最良の方法は、この2つを同時に行うことです。
      発生しうるケースは2つあります。
      Eエッジとコーナーを同時に処理することを、ドミノリダクショントリガーと呼びます。
      コーナーだけ、E-エッジだけ、または両方できているがEOが揃っていない場合は、部分的ドミノリダクションと呼びます。
    </p>
    <h3>2.1 DRトリガー</h3>
    <p>
      最もシンプルな例を見てみましょう。完成状態のキューブからR U2 R'を回します。
      この状態を見ると、4つの向きが合っていないコーナーと1つのバッドエッジがあることが分かります。
      この状態からDRを完成させる方法はいくつかありますが、最短の手順は以下のものです。
    </p>
    <p class="text-center">
      R U2 R or R U2 R' <br>
      L F2 L or L F2 L'
    </p>
    <p>
      このケースは、U/Dのステッカー位置を見ることで簡単に覚えることができます。
      U/Dエッジ周りの色の並びを「バー」、E層エッジの周りの色の並びを「カラム」と呼びます。
      ここでは、私たちが知ってる有用なトリガーを全て紹介します。
      以下では白を上面として、EOがF/Bで終わっているものとします。
    </p>
    <div>
      <b-card title="2 コーナー, 1 Eエッジ - WV">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>L' U' R U L R'</div>
              <div>L R U' R' U L</div>
              <div>その他バリエーション</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example1"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <p>
      この種のトリガーは、少ない手数のセットアップを見つけるのが非常に難しいことが多いです。
      2c1eケースを見つけたときには、他のケースを探したくなるかもしれません。
    </p>
    <div>
      <b-card title="3 corners, 1 edge - F2L">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R U R or R U R'</div>
              <div>R U’ R or R U’ R'</div>
              <div>L' U L or L' U L'</div>
              <div>L' U’ L or L' U’ L'</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example2"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <p>
      これは単純なF2Lケースです。
    </p>
    <div>
      <b-card title="4 corners, 1 edge - Column & bar">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>L'U2 L or L'U2 L'</div>
              <div>R'F2 R or R'F2 R'</div>
              <div>R U2 R or R U2 R'</div>
              <div>L F2 L or L F2 L'</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example3"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <p>
      最初に上げた例のものです。セットアップするためには、手前のバーと上のカラムを同時に作ること着目します。
    </p>
    <div>
      <b-card title="4 corners, 2 edges - Conjugate and Solver">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R or R'</div>
              <div>L or L'</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example4"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <p>
      同じ面の正しい位置にすべてのピースがあるのであれば、DRは1つの回転で作ることができます。
      U/DにEエッジのカラムを2つ作ることに着目し、それらを同じ層に寄せます。
      そして、U/Dエッジが同じ層になるように注意してください。その他のバッドエッジで向きが合っていないコーナーの組み合わせは、
      数回の移動で上記のいずれかになります。
    </p>
    <p>
      The best way to learn the triggers is to figure out a personal way to recognize them and play around with
      them a little bit. During your first tries, take a second solved cube and use it to take some DR triggers as
      reference and see if you can find the way to set them up on your scrambled one.
      At first you could find this very hard. Here are some examples to help you figure out the reasoning behind
      achieving DR.
    </p>
    <div>
      <b-card title="First EO - Example">
        <b-card-text>
          スクランブル：R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F
        </b-card-text>
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>U' F <span class="text-muted">// EO (F/B) (2/2)</span></div>
              <div>(R B2 L2 B2) <span class="text-muted">// setup to trigger (4/6)</span></div>
              <div>(D' L2 D' ) <span class="text-muted">// DR trigger (3/9)</span></div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example5"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      U’ F // EO (F/B) <br>
      Use NISS and look at the inverse scramble. With a z rotation you can easily see you are in a 4 corners 1 edge
      case (the orange-blue edge should not be in the E layer). Your aim is to set-up the Column & Bar case: the bar
      with the orange-blue edge, the column with the white-blue edge.
    </p>
    <p>
      (R B2 L2 B2) // setup to trigger <br>
      R - joins an orange sticker with the L/R edge forming a semi-bar <br>
      B2 - joins a corner with the E edge to form a semi-column <br>
      L2 - completes the bar <br>
      B2 - completes the column <br>
    </p>
    <p>
      Now most of the work is done. Notice how moves of the U/D layers (in this case R/L) and double moves of
      the other layers don’t affect the number of oriented corners or of good edges
    </p>
    <p>
      (D’ L2 D’) // DR trigger <br>
      We could have used a variation of the trigger, e.g. U F2 U. <br>
      Ideally you should check every option but considering you only have one hour in official attempts, you should
      choose the trigger that leaves you with the most blocks or with easy to solve corners. The second one is crucial in
      DR finishes, but we’ll get to that later. There are two other ways of achieving DR from that EO on the normal
      scramble that use the same concept of this setup.
    </p>

    <p>
      U’ F //EO <br>
      R2 L2 U2 L // setup <br>
      U L2 U’ // trigger
    </p>
    <p>
      U’ F //EO <br>
      R’ L B2 R // setup <br>
      D L2 D’ // trigger
    </p>

    <p>
      These examples make use of a double move (U2 in the first one and B2 in the second one) to both setup some
      corners and move the bad edge in the correct position. Before this double move, the position of the edge would
      not have worked with the corners to trigger the DR.
    </p>

    <div>
      <b-card title="Second EO - Example">
        <b-card-text>
          スクランブル：R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F
        </b-card-text>
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>B' R' D' L' <span class="text-muted">// EO (R/L) (4/4)</span></div>
              <div>F or F' <span class="text-muted">// 4c2e -> 3c1e (1/5)</span></div>
              <div>(D'F2) <span class="text-muted">// setup (2/7)</span></div>
              <div>(B'U'B') <span class="text-muted">// DR trigger (3/10)</span></div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example6"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      B’ R’ D’ L’ // EO <br>
      F / F’ // 4c2e to 3c1e
    </p>

    <p>
      Both F and F’ end up working for our DR setup. Look at the inverse with NISS. Your aim is now to try
      and setup one of the F2L cases (3c,1e). To get a better idea of what you are going for, apply L’ U L on a solved
      cube.
    </p>

    <p>
      (D’ F2) // setup <br>
      D’ - moves a yellow sticker to form a semi-bar with U/D edge <br>
      F2 - moves the last corner to form a semi-column with E edge
    </p>

    <p>
      (B’ U’ B’) // DR trigger <br>
      DR is done!
    </p>
  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    colorScheme: { "0": "#ffffff", "1": "#ee0000", "2": "#00d800", "3": "#fefe00", "4": "#ffa100", "5": "#0000f2" },
    example1: ["n", "n", "n", "n", "n", "n", "n", "b", "f", "r", "n", "n", "r", "n", "n", "n", "n", "n", "n", "r", "d", "n", "n", "d", "b", "n", "n"],
    example2: ["n", "n", "n", "n", "n", "n", "b", "b", "l", "f", "n", "n", "f", "n", "n", "d", "n", "n", "r", "r", "d", "n", "n", "d", "n", "n", "b"], 
    example3: ["b", "n", "n", "b", "n", "n", "b", "n", "b", "l", "n", "n", "l", "n", "n", "l", "n", "n", "d", "n", "d", "n", "n", "d", "n", "n", "d"],
    example4: ["n", "n", "f", "n", "n", "f", "n", "n", "f", "r", "r", "r", "r", "n", "r", "r", "r", "r", "n", "n", "d", "n", "n", "d", "n", "n", "d"],
    example5: "R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F",
    example6: "R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F",
  }),
  mounted() {
    let parameter = {}
    parameter.facelets = this.example1
    SRVisualizer.cubePNG(document.getElementById('example1'), parameter)
    parameter.facelets = this.example2
    SRVisualizer.cubePNG(document.getElementById('example2'), parameter)
    parameter.facelets = this.example3
    SRVisualizer.cubePNG(document.getElementById('example3'), parameter)
    parameter.facelets = this.example4
    SRVisualizer.cubePNG(document.getElementById('example4'), parameter)

    parameter = {}
    parameter.colorScheme = this.colorScheme
    parameter.algorithm = this.example5
    SRVisualizer.cubePNG(document.getElementById('example5'), parameter)
    parameter.algorithm = this.example6
    SRVisualizer.cubePNG(document.getElementById('example6'), parameter)
  }
}
</script>
