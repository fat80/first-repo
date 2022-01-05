<template>
<v-card>
<v-toolbar color="deep-orange accent-1" dark>
    <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title class="mb-3" >
                        <v-tabs-slider color="white"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item.text">
                        {{item.text}}
                        </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>
                <v-tabs-items v-model="tab" align-center>
                    <v-tab-item>
                        <v-card >
                            <schedule></schedule>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card >
                            <orders></orders>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card >
                            <contacts></contacts>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
</v-card>
</template>
<script>
import Schedule from '../components/Schedule.vue'
import Orders from '../components/Orders.vue'
import Contacts from '../components/Contacts.vue'
  export default {
    name :'dash',
    components:{
        Schedule,
        Orders,
        Contacts
    },

    data: () => ({
        items: [
          {text:'Schedule', route: '/schedule'},
          {text:'Orders', route: '/orders'},
          {text:'Contacts', route: '/contacts'}
        ],
        tab: null,
    }),
  }
</script>
