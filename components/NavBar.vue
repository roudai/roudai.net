<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">roudainet</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="F2L" left>
          <b-dropdown-item to="/f2l/f2l">F2L手順</b-dropdown-item>
          <b-dropdown-item to="/f2l/f2l-advanced">発展形F2L</b-dropdown-item>
          <b-dropdown-item to="/f2l/winter-variation">Winter Variation</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="OLL" left>
          <b-dropdown-item to="#">OLL一覧</b-dropdown-item>
          <b-dropdown-item to="#">OLL手順</b-dropdown-item>
          <b-dropdown-item to="#">CxLL</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="PLL" left>
          <b-dropdown-item to="#">PLL一覧</b-dropdown-item>
          <b-dropdown-item to="#">PLLの確率</b-dropdown-item>
          <b-dropdown-item to="#">PLL手順</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="BLD" left>
          <b-dropdown-item to="#">ルービックキューブを目隠しで揃えるには</b-dropdown-item>
          <b-dropdown-item to="#">ルービックキューブ目隠しの解法</b-dropdown-item>
          <b-dropdown-item to="#">Old Pochmann method (corner)</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Megaminx" left>
          <b-dropdown-item to="#">Megaminx EO</b-dropdown-item>
          <b-dropdown-item to="#">Megaminx CO</b-dropdown-item>
          <b-dropdown-item to="#">Megaminx EP</b-dropdown-item>
          <b-dropdown-item to="#">Megaminx CP</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="FMC" left>
          <b-dropdown-item to="#">ルービックキューブ最少手数競技の紹介</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Tools" left>
          <b-dropdown-item href="https://visualcube.roudai.net">VisualCube Editor</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Other" left>
          <b-dropdown-item to="#">ルービックキューブ各種解法</b-dropdown-item>
          <b-dropdown-item to="#">ルービックキューブの早解きについて知らない方々に知っておいて欲しいこと</b-dropdown-item>
          <b-dropdown-item to="#">社会人がスピードキューブを続ける意味について</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>