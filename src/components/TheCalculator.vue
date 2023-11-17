<template>
    <div>
      <input class="" type="number" v-model.number="inputHours" placeholder="Enter credit hours">
      <p>Estimated cost for {{ inputHours }} credit hours:</p>
      <p><strong>{{ formattedTotalCost }}</strong></p>
    </div>
  </template>
  
  <script>
import { dollarAmount } from '../filters.js';

  export default {
    props: {
      pricePerHour: Number,
    },
    data() {
      return {
        inputHours: 0,
      };
    },
    computed: {
      totalCost() {
        return this.inputHours * this.pricePerHour;
      },
      formattedTotalCost() {
        return dollarAmount(this.totalCost);
      }
    }
  }
  </script>