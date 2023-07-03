<template>
  <div class="container">
    <div class="section-title">
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px;">Contact Us</h3>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="firstName" id="firstName" class="form-control" placeholder="Enter First Name" required>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="lastName" id="lastName" class="form-control" placeholder="Enter Last Name" required>
        </div>
        <div class="mb-3">
          <label for="contact" class="form-label">Contact Number</label>
          <input v-model="contact" type="number" id="contact" class="form-control" placeholder="Enter Contact Number" required>
        </div>
        <div class="mb-3">
          <label for="Message" class="form-label">Message</label>
          <textarea v-model="Message" id="Message" class="form-control" rows="3" placeholder="Message" required></textarea>
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
      firstName: '',
      lastName: '',
      contact: '',
      Message: '',
      userCreated: false,
      userData: {}
    };
  },

  methods: {
    async createUser() {
      const colRef = collection(db, 'users');
      const dataObj = {
        firstName: this.firstName,
        lastName: this.lastName,
        contact: this.contact,
        Message: this.Message
      };

      const docRef = await addDoc(colRef, dataObj);
      console.log('Document was created with ID:', docRef.id);

      this.userCreated = true;
      this.userData = dataObj;

      alert('Form submitted successfully!'); // Display the alert message
    }
  }
};
</script>




