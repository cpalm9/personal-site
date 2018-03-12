<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="text-xs-center">
        <v-avatar size="125px">
          <img
            class="img-circle elevation-7 mb-1"
            src=""
          >
        </v-avatar>
        <div class="headline">Chris <span style="font-weight:bold">Palmer</span></div>
        <div class="subheading text-xs-center grey--text pt-1 pb-3">Learn a little about me</div>
        <div class="headline text-xs-left">School</div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      workDialog: false,
      educationDialog: false,
      funDialog: false,
      resume: {

      }
    }
  }
}
</script>
