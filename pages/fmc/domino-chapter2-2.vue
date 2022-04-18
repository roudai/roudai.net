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
    <h4>1つのバッドエッジ</h4>
    <p>
      この場合、対処法は2つあります。1つは、ソルブの途中、または完全なスケルトンができた時点で、コミュテータを挿入することです。
      エッジコミュテータはDRを作っているときよりもそのあとにインサートしたほうが大きなキャンセルが期待できます。
      それでもなお、DRを作るまでの間にコミュテータをインサートすることに決めたのならば、どのエッジをサイクルするか注意する必要があります。
      3サイクルの場合、選択肢は以下2つです。
    </p>
    <p>
      バットエッジ → U/D層のEエッジ → グッドエッジ <br>
      バッドエッジ → U/Dエッジ → U/D層のEエッジ
    </p>
    <p>
      もう一つの選択肢は、最後のEエッジのバッドエッジと2つのU/Dエッジまたは2つのグッドエッジの
      スライス交換をインサートすることです。ここでは、Sebastiano Trontoによる例を紹介します。
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

    <h4>2つのバッドエッジ</h4>
    <div>
      <b-card title="Break & Solve">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R' E2 R or R E2 R’</div>
              <div>等</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example2"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      Eエッジのカラムとバッドエッジのカラムを対面に作り、それをR' E2 Rなどの手順で交換します。
      前のケースと同じように、2つのEエッジとバッドエッジを交換するスライスをインサートすることができます。
      R' U2 D2 L = R' E2 R は、シングルライスにセットアップできる最も簡単なケースです。
    </p>

    <h4>3または4つのバッドエッジ</h4>
    <p>
      これはあまり良いケースとは言えませんが、いくつか検討できる選択肢があります。
      - バッドエッジとEエッジのスライス交換を2回インサートする
      - 4c1eか4c2eのどちらかのケースに一手で移行する
      - このままコーナーを先に解いて、フルスケルトンにしてからエッジをインサートする
    </p>
    <p>
      どれもうまくいかないようであれば、別のDRを検討すべきです。
    </p>

    <h3>2.2.3 EレイヤーとEOができたPDR</h3>
    <h4>2つのバッドエッジ</h4>
    <div>
      <b-card title="フェイクスワップ">
        <b-row>
          <b-col sm="8">
            <b-card-text>
              <div>R U' L2 U R'</div>
              <div>等</div>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="example3"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <h4>3つのバッドエッジ</h4>
    <p>
      suneや3コーナーのコミュテータをインサートできます。suneもエッジの3サイクルであることを覚えておいてください。
      どのエッジにサイクルを適用させるかは、「1つのバッドエッジ」で説明したのと同様です。
    </p>
    <p>
      セットアップの段階でコミュテータをインサートすることにした場合、典型的な8手のインサート（ピュアインサート）を選ぶとよいでしょう。
      PDRで解き続け、完全なスケルトンができてからコーナーを挿入することにした場合は、
      より多くの手をキャンセルする可能性のある「DRならではの」アルゴリズムについて5.1で説明します。
    </p>

    <h4>4または8つのバッドエッジ</h4>
    <p>
      別のDRを探しましょう。
    </p>
    
    <h3>2.2.3 COとE層ができたPDR</h3>
    <h4>0コーナーまたは0エッジ</h4>
    <p>
      In this particular case you already have 4 good edges and all the corners oriented but you don’t have EO. To
      achieve DR you need to orient the edges using the S and M slices like in the second to last step of the Roux method
      M' U M、M' U M'など、RouxっぽいEOを使うことができます。<br>
      このケースでは、グッドエッジが4つありすべてのコーナー向きが合っていますが、EOはできていません。
      DRを作るためには、Rouxメソッドの最後から2番目のステップのように、SとMのスライスを使ってエッジ向きを揃える必要があります。
    </p>
    <p>
      Alexadree Composが、多くのコーナーPDRとDRの解法を集めた素晴らしいドキュメントを持っています
      （<a href="https://docs.google.com/document/d/1oZwr2aSllFBL5lhbLTiWKQWplfk4i0LN0wA0uskeLJs/edit">こちら！</a>）
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
