<template>
   <nav>
       <v-app-bar  color="brown lighten-1" dark app >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase ">
               <span class="font-weight-light">F.E</span>
               <span>PANNEL</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
            <v-btn text>
                <span>Exit</span>
                <v-icon right>exit_to_app</v-icon>
             </v-btn>
       </v-app-bar>
      <v-navigation-drawer  v-model="drawer" dark app class="brown lighten-1">
          <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100" color="red lighten-2">                        
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Username</p>
               </v-flex>
               <v-flex class="mt-4 mb-4">
               </v-flex>
          </v-layout>
          <v-list flat>
              <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                  <v-list-item-action>
                     <v-icon >{{link.icon}}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content >
                      <v-list-item-title >{{link.text}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
   data: () => ({
      drawer: true,
      links :[
          {icon: 'dashboard', text:'Dashboard', route: '/'},
          {icon: 'folder', text:'Projects', route: '/projects'},
          {icon: 'settings', text:'Setting', route: '/setting'}
      ]
     
    }),

   
}
</script>
<style scoped>
.border {
  border-left: 4px solid #ffffff;
}
</style>