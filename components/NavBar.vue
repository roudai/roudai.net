<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">roudai.net</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="F2L" left>
            <b-dropdown-item to="/f2l/f2l">F2L手順</b-dropdown-item>
            <b-dropdown-item to="/f2l/f2l-advanced">発展形F2L</b-dropdown-item>
            <b-dropdown-item to="/f2l/winter-variation">Winter Variation</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="OLL" left>
            <b-dropdown-item to="/oll/oll-view">OLL一覧</b-dropdown-item>
            <b-dropdown-item to="/oll/oll">OLL手順</b-dropdown-item>
            <b-dropdown-item to="/oll/coll">COLL</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="PLL" left>
            <b-dropdown-item to="/pll/pll-view">PLL一覧</b-dropdown-item>
            <b-dropdown-item to="/pll/pll-chances">PLLの確率</b-dropdown-item>
            <b-dropdown-item to="/pll/pll">PLL手順</b-dropdown-item>
            <b-dropdown-item to="/pll/two-sided-pll">2側面判断</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="BLD" left>
            <b-dropdown-item to="/bld/bld-introduction">ルービックキューブを目隠しで揃えるには</b-dropdown-item>
            <b-dropdown-item to="/bld/bld-method">ルービックキューブ目隠しの解法</b-dropdown-item>
            <b-dropdown-item to="/bld/old-pochmann-corner">Old Pochmann method (corner)</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Megaminx" left>
            <b-dropdown-item to="/megaminx/megaminx-eo">Megaminx EO</b-dropdown-item>
            <b-dropdown-item to="/megaminx/megaminx-co">Megaminx CO</b-dropdown-item>
            <b-dropdown-item to="/megaminx/megaminx-ep">Megaminx EP</b-dropdown-item>
            <b-dropdown-item to="/megaminx/megaminx-cp">Megaminx CP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="FMC" left>
            <b-dropdown-item to="/fmc/intro-fmc">最少手数競技の紹介</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Other" left>
            <b-dropdown-item to="/other/3x3x3-method">各種解法</b-dropdown-item>
            <b-dropdown-item to="/other/for-non-cubers">知っておいて欲しいこと</b-dropdown-item>
            <b-dropdown-item to="/other/advent-calendar2014">続ける意味について</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item-dropdown text="Tools" left>
            <b-dropdown-item href="https://visualcube.roudai.net">VisualCube Editor</b-dropdown-item>
            <b-dropdown-item href="https://roudai.github.io/MegaminxImageEditor/">Megaminx Image Editor</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <a href="https://github.com/roudai/roudai.net">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>