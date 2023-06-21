<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h2 class="mb-4">Create User</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" id="name" class="form-control" type="text" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" id="email" class="form-control" type="email" required>
          </div>
          <div class="mb-3">
            <label for="contactNumber" class="form-label">Contact Number</label>
            <input v-model="contactNumber" id="contactNumber" class="form-control" type="number" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" id="message" class="form-control" rows="5" required></textarea>
          </div>
          <button @click="createUser" class="btn btn-primary">Create User</button>
        </form>
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
      name: '',
      email: '',
      contactNumber: '',
      message: '',
    };
  },
  
  methods: {
    async createUser() {
      const colRef = collection(db, 'users');
      const dataObj = {
        name: this.name,
        email: this.email,
        contactNumber: this.contactNumber,
        message: this.message,
      };

      const docRef = await addDoc(colRef, dataObj);
      console.log('Document was created with ID:', docRef.id);
    }
  },
  
  created() {
    // Optional: You can call createUser on component creation if needed.
    // this.createUser();
  },
};
</script>

<style>
/* Additional custom styling can be added here */

.container {
  margin-top: 50px;
}

.form-control {
  border-radius: 0;
}

.btn-primary {
  border-radius: 0;
}
</style>
