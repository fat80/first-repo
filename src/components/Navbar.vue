<template>
   <nav>
        <v-card>
            <v-toolbar color="pink accent-4" dark>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Your Dashboard</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text>
                    <span>Exit</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title class="mb-3">
                        <v-tabs-slider color="white"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item.text">
                        {{item.text}}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <v-tabs-items v-model="tab" align-center>
                <v-tab-item>
                    <v-card flat>
                        <schedule></schedule>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <orders></orders>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <contacts></contacts>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>

  <!-- header finished -->
        <v-navigation-drawer  v-model="drawer" dark app class="pink darken-4
">
            <v-layout column align-center>
                <v-flex class="mt-5"> 
                    <v-avatar size="100" color="red lighten-2">                        
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Username</p>
                </v-flex>
                <v-flex class="mt-4 mb-4"></v-flex>
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
import Schedule from '../components/Schedule.vue'
import Orders from '../components/Orders.vue'
import Contacts from '../components/Contacts.vue'
export default {
    name :'navbar',
    components:{
        Schedule,
        Orders,
        Contacts
    },
   data: () => ({
      drawer: true,
      links :[
          {icon: 'dashboard', text:'Dashboard', route: '/dashboard'},
          {icon: 'folder', text:'Projects', route: '/projects'},
          {icon: 'settings', text:'Setting', route: '/setting'}
      ],
      items: [
          {text:'Schedule', route: '/schedule'},
          {text:'Orders', route: '/orders'},
          {text:'Contacts', route: '/contacts'}
        ],
        tab: null,
     
    }),
}
</script>
<style scoped>
.border {
  border-left: 4px solid #ffffff;
}
</style>