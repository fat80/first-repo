<template>
<v-col justify="center">
  <v-row justify="center">
  <v-expansion-panels focusable>
    <v-expansion-panel class="deep-orange accent-1"
      v-for="item in items" :key="item.number">
      <v-expansion-panel-header>Project number {{item.number}} : {{item.title}} 
        <v-spacer></v-spacer>
        <v-icon class="right">mdi-pencil</v-icon>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card>
          <p class="mt-10 ml-10">
            {{item.text}}
          <br>
          </p>
          <v-bottom-navigation>
            <v-btn color="red accent-4" text>
              <span>Dislike</span>
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
            <v-btn color="red accent-4" text>
              <span>Like</span>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-row>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color="red lighten-3" dark v-on="on" width="100%" class="mt-10"> <v-icon>mdi-plus</v-icon> Add new project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Project</span>
        </v-card-title>
         <v-form class="px-3" ref="form">
        <v-card-text>
           
                <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                <v-col cols="12" lg="6">
                 <v-menu 
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="event"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
        </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="green" text outlined @click="submit">Save</v-btn>
        </v-card-actions>
         </v-form>
      </v-card>
    </v-dialog>
  </v-row>
  <!---->
  <v-row width="100%" class="mt-10">
    <v-card color="orange lighten-4" class="pa-30 rounded-lg " width="100%" light>
      <ul justify="center" class="ml-5 mt-5">
        <h1> What do you need to know?!</h1>
        <br>
        <li>
          <v-btn width="400px">
            <v-icon left>mdi-account</v-icon>
            <router-link :to="{name: 'AboutMe'}">About Me</router-link>
          </v-btn>
        </li>
        <br>
        <li>
          <v-btn width="400px">
            <v-icon>mdi-history</v-icon>
            <router-link :to="{name: 'RecentAct'}">My Recent Actions</router-link>
          </v-btn>
        </li>
      </ul>
      <br>
      <router-view class="ml-5"></router-view>
    </v-card>
  </v-row>
</v-col>
</template>

<script>
export default {
    data: vm => ({
      items: [
          {text:'This project is about colculate some integer numbers', number:'1', title:'calculator'},
          {text:'I wrote this project for my computer class', number:'2' , title:'class Practic'},
          {text:'You can find every word that you search', number:'3' , title:'dictionary'},
          {text:'This is for an online shop', number:'4' ,title:'onlineShop'},
          {text:'its about html & css rules', number:'5', title:'tutorial Example'},
          {text:'in this project H wrote a game for kids', number:'6', title:'game'},
        ],
      dialog: false,
      title:'',
      content:'',
      due:null,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      inputRules: [
          v => v.length >= 3 || 'Minimum lenght is 3 charachters' 
      ]
      
    }),
    methods: {
         formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${year}/${month}/${day}`
      },
      parseDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },


}
</script>