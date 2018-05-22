<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <section class="hero is-fullheight">
    <nav class="navbar hero-head is-dark is-fixed-top kubot-navbar">
        <div class="navbar-brand">
            <a class="navbar-item brand-item" href="/">
                <SettingsBox class="site-icon" /><span>kuBot</span>
            </a>
            <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
            <div class="navbar-start">
                <router-link :to="{ name: 'Hello' }" class="navbar-item">Home</router-link>
                <router-link to="/test" class="navbar-item">test</router-link>
                <a class="navbar-item" href="/guildconfig">
                    Guild configuration generator
                </a>
            </div>
        </div>
    </nav>

    <div class="hero-body" style="background-color:turquoise;">
        <article class="container">
            <h1 class="title">
                kuBot Guild configuration website
            </h1>
            <h2 class="subtitle">
                Helping discord guild administrators to configure kuBot for their server
            </h2>
            <router-view></router-view>
        </article>

    </div>

    <footer class="hero-foot footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    kuBot guild configuration helper
                </p>
            </div>
        </div>
    </footer>
</section>
</template>

<script lang="ts" src="./index.ts" />