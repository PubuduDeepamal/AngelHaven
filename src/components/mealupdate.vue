<template>
    <br><br><br><br><br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="mb-3">
            <label for="Date1" class="form-label">Date</label>
            <input v-model="Date1" id="Date1" class="form-control" placeholder="Enter Date" required>
          </div>
          <div class="mb-3">
            <label for="Meal" class="form-label">Meal</label>
            <input v-model="Meal" id="Meal" class="form-control" placeholder="Enter Meal" required>
          </div>
          <div class="mb-3">
            <label for="Portion" class="form-label">Portion</label>
            <input v-model="Portion" id="Portion" class="form-control" placeholder="Enter Portion" required>
          </div>

          <button @click="createUser" class="btn btn-primary" style="margin-top: 20px; margin-bottom: 30px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Submit</b></button>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { collection, addDoc } from "firebase/firestore";
  import db from '../firebase/init.js';
  
  export default {
    data() {
      return {
        Date1: '',
        Meal: '',
        Portion: '',
        userCreated: false,
        userData: {}
      };
    },
  
    methods: {
      async createUser() {
        const colRef = collection(db, 'meal');
        const dataObj = {
          Date1: this.Date1,
          Meal: this.Meal,
          Portion: this.Portion
        };
  
        const docRef = await addDoc(colRef, dataObj);
        console.log('Document was created with ID:', docRef.id);
  
        this.userCreated = true;
        this.userData = dataObj;
      }
    },
  
    created() {
      // Optional: You can call createUser on component creation if needed.
      // this.createUser();
    }
  };
  </script>
  
  
  
  