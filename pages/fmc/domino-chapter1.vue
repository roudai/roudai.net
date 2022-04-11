<template>
  <div>
    <h2>第1章 グッドEO</h2>
    <p>
      DRの最初のステップは、「グッド」なEOを見つけることです。
      グッドなEOとは、どのようなものだと思いますか？
      「4手以下でできる」「ペアやブロックがある」などが考えられますが、DRの場合、グッドEOとは次のようなものです。
    </p>
    <p>
      『コーナー向きができるだけ多く合っていて（またはその1手前で）、いくつかのEエッジがE層に入っている。』
    </p>
    <p>
      2つの簡単な例を見てみましょう。:
    </p>

    <div>
      <b-card title="EOの例 その1">
        <b-card-text>
          スクランブル：{{ eo_example1 }}
        </b-card-text>
        <b-row>
          <b-col sm="8">
            <b-card-text>
              U' F <span class="text-muted">// EO (F/B) (2/2)</span>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="eo_example1"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      F/BのEOをしたあとに、U/D面とR/L面でのコーナー反転を確認します。
      このスクランブルをz回転すると（EOは変わらない）4つの向きの合ったコーナーと、3つのグッドエッジがあります。
      これは、Domino Reductionのスタートとして優秀です。
    </p>
    <p>
      F/BのEOのあとz回転をしない場合だと、2つの向きの合ったコーナーと、2つのグッドエッジになります。
      EOをしたあとには、このように2つのキューブ向きを確認することがとても重要です。
      DRはU/D、R/L、F/Bの3軸で可能なので、それぞれのEOで向き違いの2つを確認することができます。
      これを覚えておかないと、6つのうち3つを見逃すことになってしまいます（50%はあまりに大きすぎる！）。
    </p>

    <div>
      <b-card title="EOの例 その2">
        <b-card-text>
          スクランブル：{{ eo_example2 }}
        </b-card-text>
        <b-row>
          <b-col sm="8">
            <b-card-text>
              B' R' D' L' <span class="text-muted">// EO (R/L) (4/4)</span>
            </b-card-text>
          </b-col>
          <b-col sm="4">
            <div id="eo_example2"></div>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <p>
      U/D面に4つの向きの合ったコーナーと2つのバッドエッジがありますが、あと1手でとても優秀なケースになります。
      それはFとF'で、バッドエッジが2つから1つになり、向きの合ったコーナーが4つから5つ(4-1+2)になります。
    </p>
    <p>
      ここであげた2つの例をスタートとして、そこから数手ですべてのコーナー向きを合わせ、4/4のグッドエッジにすることができるか、試してみてください。
      ヒントなしでは難しいと確認したら、次の章に進みましょう。
    </p>
    <div class="text-center">
      <nuxt-link to="domino-first">はじめに</nuxt-link> | <nuxt-link to="domino-reduction">目次</nuxt-link> | <nuxt-link to="domino-chapter2-1">コーナー反転とグッドエッジ</nuxt-link>
    </div>
  </div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  data: () => ({
    colorScheme: { "0": "#ffffff", "1": "#ee0000", "2": "#00d800", "3": "#fefe00", "4": "#ffa100", "5": "#0000f2" },
    eo_example1: "R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F",
    eo_example2: "R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F"
  }),
  mounted() {
    let parameter = {}
    parameter.colorScheme = this.colorScheme
    parameter.algorithm = this.eo_example1
    SRVisualizer.cubePNG(document.getElementById('eo_example1'), parameter)
    parameter.algorithm = this.eo_example2
    SRVisualizer.cubePNG(document.getElementById('eo_example2'), parameter)
  }
}
</script>
