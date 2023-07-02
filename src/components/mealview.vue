<template>
  <table>
    <thead>
      <tr>
        <th>Meal</th>
        <th>Position</th>
        <th>Contact</th>
        <th>Date Input</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="booking in bookings" :key="booking.id">
        <td>{{ booking.Meal }}</td>
        <td>{{ booking.Position }}</td>
        <td>{{ booking.Contact }}</td>
        <td>{{ booking.DateInput }}</td>
        <td>{{ booking.FirstName }}</td>
        <td>{{ booking.LastName }}</td>
      </tr>
    </tbody>
  </table>
</template>
  
<!-- <script>

import firebase from 'firebase/app';
import 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr2T8Etmq_qcUEJ1LzgpRdrKVwwPeobJA",
  authDomain: "angelhaven-3f27b.firebaseapp.com",
  projectId: "angelhaven-3f27b",
  storageBucket: "angelhaven-3f27b.appspot.com",
  messagingSenderId: "191213082500",
  appId: "1:191213082500:web:9f33f6cc781a939a7cefd1",
  measurementId: "G-39S3CLD151"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a reference to your Firebase database
const db = firebase.database();

export default {
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    // Fetch data from Firebase database
    db.ref('angelhaven-3f27b/booking').on('value', (snapshot) => {
      const bookings = [];
      snapshot.forEach((childSnapshot) => {
        const booking = childSnapshot.val();
        bookings.push(booking);
      });
      this.bookings = bookings;
    });
  }
}


</script> -->
  