<template>
  <div>
    <h2>第2章 コーナー反転とグッドエッジ</h2>
    <p>
      Once you have found a good EO start (remember there could be none), the next step is the actual domino
      reduction. The best approach to get all 4 good edges and the CO is to try and solve these two problems at the
      same time, saving moves. The are two sets of cases that can occur. If you have to deal with both E-edges and
      corners we call these Domino Reduction Triggers. If you have to deal with just corners or E-edges or you
      have both but EO is missing, we call these Partial Domino Reduction.
    </p>
    <h3>2.1 DRトリガー</h3>
    <p>
      Let’s look at the most simple one: Take a solved cube and apply R U2 R’. If you look at the cube you can see
      that you have 4 misoriented corners and only 1 bad edge. From this position, you can complete the DR in various
      ways, but the shortest ones are:
    </p>
    <p class="text-center">
      R U2 R or R U2 R'
      L F2 L or L F2 L'
    </p>
    <p>
      You can easily remember this case by looking at the position of the U/D stickers: the ones near the U/D edge
      form a “bar”, the ones near the E-layer edge form a “column”. Here are all of the most useful triggers we know
      of, assuming the EO is done on F/B with white on top.
    </p>
    <div>
      <b-card title="2 Corners, 1 Edge - WV">
        <b-card-text>
          <div>L' U' R U L R'</div>
          <div>L R U' R' U L</div>
          <div>Other Variations</div>
        </b-card-text>
      </b-card>
    </div>
    <p>
      These kinds of triggers are very difficult to spot and setup in few moves. When you find yourself in a 2c1e case
      you may want to execute some moves to get to another case.
    </p>
    <div>
      <b-card title="3 corners, 1 edge - F2L">
        <b-card-text>
          <div>R U R or R U R'</div>
          <div>R U’ R or R U’ R'</div>
          <div>L' U L or L' U L'</div>
          <div>L' U’ L or L' U’ L'</div>
        </b-card-text>
      </b-card>
    </div>
    <p>
      These can be seen as simple F2L cases.
    </p>
    <div>
      <b-card title="4 corners, 1 edge - Column & bar">
        <b-card-text>
          <div>L'U2 L or L'U2 L'</div>
          <div>R'F2 R or R'F2 R'</div>
          <div>R U2 R or R U2 R'</div>
          <div>L F2 L or L F2 L'</div>
        </b-card-text>
      </b-card>
    </div>
    <p>
      These are the ones from the example. To set them up, focus on making the bar in front and the column on top
      at the same time.
    </p>
    <div>
      <b-card title="4 corners, 2 edges - Conjugate and Solver">
        <b-card-text>
          <div>R or R'</div>
          <div>L or L'</div>
        </b-card-text>
      </b-card>
    </div>
    <p>
      If you have all the pieces in the correct position on the same face, DR can be achieved with a single move. Focus
      on making two columns with the E edges on U/D and bring them on the same layer. Pay attention to U/D edges
      to be on the same layer too!
      All the other combinations of number of bad edges and misoriented corners lead to one of the above with a few
      moves.
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
        <b-card-text>
          <div>U' F <span class="text-muted">// EO (F/B) (2/2)</span></div>
          <div>(R B2 L2 B2) <span class="text-muted">// setup to trigger (4/6)</span></div>
          <div>(D' L2 D' ) <span class="text-muted">// DR trigger (3/9)</span></div>
        </b-card-text>
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
        <b-card-text>
          <div>B' R' D' L' <span class="text-muted">// EO (R/L) (4/4)</span></div>
          <div>F or F' <span class="text-muted">// 4c2e -> 3c1e (1/5)</span></div>
          <div>(D'F2) <span class="text-muted">// setup (2/7)</span></div>
          <div>(B'U'B') <span class="text-muted">// DR trigger (3/10)</span></div>
        </b-card-text>
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