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
      U/D色のコーナーとエッジが並んでいるものを「バー」、
      E層エッジの上下に柱の形でU/D色のコーナーが並んでいるものを「カラム」と呼びます。
    </p>
    <p>
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
      EエッジとのカラムをU/Dに2つ作り、それらを同じ層に寄せます。そのとき、U/Dエッジが同じ層になるように注意してください。
      その他のバッドエッジで向きが合っていないコーナーの組み合わせは、数回の移動で上記のいずれかになります。
    </p>
    <p>
      トリガーを学ぶ一番の方法は、独自の方法を考えてみて、少し遊んでみることです。
      最初は2つ目の完成したキューブを使ってDRトリガーを参考にしながら、スクランブルされたキューブに使うことができるかどうか確認します。
      最初のうちは、非常に難しく感じるでしょう。DRを作る理屈を理解するために、いくつか例を見てみましょう。
    </p>
    <div>
      <b-card title="ファーストEO - Example">
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
      NISSを使って、インバーススクランブルを見てみます。z回転をすると、4コーナー1エッジを簡単に見つけることができます（オレンジ-青のエッジはE層にあってはいけません）。
      ここですることは、カラムとバー（オレンジ-青エッジのバーと、白-青エッジのカラム）をセットアップすることです。
    </p>
    <p>
      (R B2 L2 B2) // トリガーへのセットアップ <br>
      R - オレンジのステッカーをL/Rエッジにつなぎ合わせて、セミバーを作る <br>
      B2 - コーナーをEエッジとつなぎ合わせて、セミカラムを作る <br>
      L2 - バー完成 <br>
      B2 - カラム完成 <br>
    </p>
    <p>
      これで、ほとんどの作業は終了です。U/D層(この場合はR/L)の回転と、他の層の180度回転は、コーナーやエッジの数には影響しません。
    </p>
    <p>
      (D’ L2 D’) // DRトリガー <br>
      U F2 Uなど、他のトリガーのバリエーションも考えられます。
      全ての選択肢をチェックすることですが理想ではありますが、公式の競技時間がが1時間しかないことを考えると、
      ブロックが多く残るトリガーや、コーナーが解きやすいトリガーを選びます。
      次にDRの出来方が重要ですが、それについては後で述べます。
      このEOのノーマルスクランブルからDRを作る方法は、あと2つあります。セットアップの考え方は同じです。
    </p>
    <p>
      U’ F //EO <br>
      R2 L2 U2 L // セットアップ <br>
      U L2 U’ // トリガー
    </p>
    <p>
      U’ F //EO <br>
      R’ L B2 R // セットアップ <br>
      D L2 D’ // トリガー
    </p>
    <p>
      これらの例では、180度回転（最初の例ではU2、2つ目はB2）を使って、コーナーのセットアップとバッドエッジの位置移動を同時に行っています。
      この180度回転をする前では、エッジの位置はDRのトリガーをする場所として機能していませんでした。
    </p>

    <div>
      <b-card title="セカンドEO - Example">
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
      DRセットアップには、FとF'のどちらでも構いません。NISSでインバースを見てみましょう。
      F2Lケース(3c,1e)のどれかにセットアップすることを目指します。
      どうすればいいかアイデアを得るために、完成状態からL' U Lしたキューブを用意しましょう。
    </p>

    <p>
      (D’ F2) // セットアップ <br>
      D’ - 黄色のステッカーを動かし、U/Dエッジとセミバーを作ります。 <br>
      F2 - 最後のコーナーを動かし、Eエッジのセミカラムを作ります。
    </p>

    <p>
      (B’ U’ B’) // DRトリガー <br>
      DRができました！
    </p>

    <div class="text-center">
      <nuxt-link to="/fmc/domino-chapter1">グッドEO</nuxt-link> | <nuxt-link to="/fmc/domino-reduction">目次</nuxt-link> | <nuxt-link to="/fmc/domino-chapter2-2">部分的ドミノリダクション</nuxt-link>
    </div>
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
