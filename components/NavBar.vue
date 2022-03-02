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
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>