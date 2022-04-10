<template>
  <div>
    <h2>第1章 グッドEO</h2>
    <p>
      DRの最初のステップは、「グッド」なEOを見つけることです。
      グッドなEOとは、どのようなものだと思いますか？
      「4手以下でできる」「ペアやブロックがある」などが考えられますが、DRの場合、グッドEOとは次のようなものです。
    </p>
    <p>
      『ほとんどのコーナー向きが合っていて（またはその1手前で）、いくつかのEエッジがE層に入っている。』
    </p>
    <p>
      2つの簡単な例を見てみましょう。:
    </p>

    <div>
      <b-card title="EOの例 その1">
        <b-card-text>
          スクランブル：R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F
        </b-card-text>
        <b-card-text>U' F <span class="text-muted">// EO (F/B) (2/2)</span></b-card-text>
      </b-card>
    </div>

    <p>
      An F/B EO can lead to a DR with oriented corners on U/D or R/L. If you do a z rotation (this preserves EO),
      you will see that you already have 4 oriented corners and 3 good edges. This is a promising start for a domino
      reduction.
    </p>
    <p>
      If you look at the F/B EO without the z rotation, you only have 2 oriented corners and 2 good edges.
      It’s very important that you check both possible orientations of the cube after the EO. Although there are only
      3 possible DRs: U/D, R/L, F/B you can get to each one of them from two different EO’s. Keep this in mind or
      you’ll miss 3 starts out of the possible 6 (50% is a lot!)
    </p>

    <div>
      <b-card title="EOの例 その2">
        <b-card-text>
          スクランブル：R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F
        </b-card-text>
        <b-card-text>B' R' D' L' <span class="text-muted">// EO (R/L) (4/4)</span></b-card-text>
      </b-card>
    </div>

    <p>
      Even though there are only 4 oriented corners on U/D and two bad edges, we are 1 move away from a very
      promising case. With F or F’ we go from 2 bad edges to 1 and from 4 oriented corners to 5 (4-1+2)
    </p>
    <p>
      Try to play around with these two starts and see if you can orient all corners or get 4/4 good edges in a few
      moves. Once you’re convinced it is a difficult task without a hint, you can move on to the next part.
    </p>
  </div>
</template>