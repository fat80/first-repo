<template>
<v-cards>
     <h1 align="center" class="mt-10">These Are Your Recent Orders</h1>
    <v-row class=" mt-10 ml-5 mr-5 mb-15">
  <v-card
    class="mx-auto deep-orange lighten-4"
    max-width="300"
  >
    <v-img
      src="https://luxtehran.com/wp-content/uploads/2017/03/%D8%A7%D9%85%DA%AF%D8%A7-%D8%A7%D8%B3%D9%BE%DB%8C%D8%AF-%D9%85%D8%B3%D8%AA%D8%B1-Omega-Speedmaster--1000x563.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Wirst Watch
    </v-card-title>

    <v-card-subtitle>
      500$
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="red"
        text
      >
        Unpaid
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-spacer></v-spacer>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            details for watch : 
          <br>
          brand : Casio
          <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-spacer></v-spacer>
  <!--2-->
  <v-card
    class="mx-auto deep-orange lighten-4"
    max-width="300"
  >
    <v-img
      src="https://www.rd.com/wp-content/uploads/2019/06/shutterstock_677222o.jpg?fit=700,1024"
      height="200px"
    ></v-img>

    <v-card-title>
      Book Series
    </v-card-title>

    <v-card-subtitle>
      10$
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        text
      >
        Paid
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        details for books : 
          <br>
          pages number : 200
          <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-spacer></v-spacer>
  <!--3-->
  <v-card
    class="mx-auto deep-orange lighten-4"
    max-width="300"
  >
    <v-img
      src="https://www.loginbrands.com/images/Article/100606-hp-laptop-5.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Laptop
    </v-card-title>

    <v-card-subtitle>
      2,535$
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        text
      >
        Paid
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          details for laptop : 
          <br>
          RAM : 16
          <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-row>
</v-cards>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>