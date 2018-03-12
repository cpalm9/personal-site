<template>
  <div id="app">
   <v-app light>
    <v-toolbar fixed class="white">
      <v-btn icon @click="toHome">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="connectDialog = true">Connect</v-btn>
        <v-btn flat href="https://github.com/cpalm9">GitHub</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-dialog v-model="connectDialog" max-width="500px">
        <v-card>
          <v-card-title>
            Connect with Me!
          </v-card-title>
          <v-card-text>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>801-372-2699</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Orem, UT</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>chrispalmer191@gmail.com</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-btn
              v-for="(icon,index) in icons"
              :key="index"
              icon
              :href="icon.url"
              class="mx-3 blue--text text--lighten-2"
              target="_blank"
            >
            <v-icon size="35px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="connectDialog=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-app>
 </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'The Domain of Chris Palmer',
      connectDialog: false,
      icons: [
        {
          icon: 'fab fa-facebook-square',
          url: 'https://www.facebook.com/chris.palmer3'
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/cpalm9'
        },
        {
          icon: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/christian-palmer-127267110'
        }
      ],
    }
  },
  methods: {
    toAbout () {
      this.$router.push({ name: 'About' })
    },
    toHome () {
      this.$router.push({ name: 'Landing' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
