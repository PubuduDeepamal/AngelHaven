<template>
  <br><br><br>
    <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px;">Booking Details</h3>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Meal</th>
            <th scope="col">Position</th>
            <th scope="col">Contact</th>
            <th scope="col">Date</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.Meal }}</td>
            <td>{{ item.Position }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.dateInput }}</td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  </template>
  
    
    
    <script>
    import { collection, getDocs } from 'firebase/firestore';
    import db from '../firebase/init.js';
    
    export default {
      data() {
        return {
          items: [],
        };
      },
      mounted() {
        this.fetchData();
      },
      methods: {
        fetchData() {
          getDocs(collection(db, 'booking'))
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                this.items.push(doc.data());
              });
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        },
      },
    };
    </script>
    