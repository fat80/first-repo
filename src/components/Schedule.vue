<template>
  <v-row align="center" class="mt-4 ml-4">
    <v-col cols="12" sm="6" class="my-2 px-1">
    <v-date-picker header-color="red accent-1"
      ref="picker"
      :picker-date.sync="pickerDate"
      v-model="picker"
      :landscape="landscape"
    ></v-date-picker>
    </v-col>
    <v-col cols="12"
      sm="4" class="my-2 px-1">
      <div class="text-h6">
        Month Events ({{ pickerDate || 'change month...' }})
      </div>
      <div class="subheading">
        You Have To Do These Things In This Month :
      </div>
      <ul class="pa-30 red accent-1 rounded-lg mr-15">
        <li
          v-for="note in notes"
          :key="note"
          contenteditable="true"
        >
          {{ note }}
        </li>
      </ul>
    </v-col>
    <v-card color="orange lighten-4" class="pa-30 rounded-lg mb-15 mr-12" light>
      <v-card-title>
        Your Grade
      </v-card-title>
      <v-rating full-icon="mdi-heart" empty-icon="mdi-heart-outline" background-color="grey" contenteditable="false" 
      color="red accent-2">
      </v-rating>
    </v-card>
    
    <v-expansion-panels style="width: 70%" class="mb-15">
    <v-expansion-panel class="deep-orange accent-1">
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Your Next Trip name
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter a name for the trip
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Location
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span
                v-if="open"
                key="0"
              >
                Select trip destination
              </span>
              <span
                v-else
                key="1"
              >
                {{ trip.location }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="trip.location"
              :items="locations"
              chips
              flat
              solo
            ></v-select>
          </v-col>

          <v-divider
            vertical
            class="mx-4"
          ></v-divider>

          <v-col cols="3">
            Select your destination of choice
            <br>
            <a href="#">Learn more</a>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="secondary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Start and end dates
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span v-if="open">When do you want to travel?</span>
              <v-row
                v-else
                no-gutters
                style="width: 100%"
              >
                <v-col cols="6">
                  Start date: {{ trip.start || 'Not set' }}
                </v-col>
                <v-col cols="6">
                  End date: {{ trip.end || 'Not set' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row
          justify="space-around"
          no-gutters
        >
          <v-col cols="3">
            <v-menu
              ref="startMenu"
              :close-on-content-click="false"
              :return-value.sync="trip.start"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="trip.start"
                  label="Start date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="3">
            <v-menu
              ref="endMenu"
              :close-on-content-click="false"
              :return-value.sync="trip.end"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="trip.end"
                  label="End date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.endMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.endMenu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        pickerDate: null,
        landscape: true,
        notes: [],
        allNotes: [
        'meeting',
        'birthday party',
        'join to the company group',
        'learn English',
        'go to the gym',
      ],
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
      }
    },
    watch: {
      pickerDate (val) {
        this.notes = [
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
        ].filter((value, index, self) => self.indexOf(value) === index)
      },
    },
  }
</script>