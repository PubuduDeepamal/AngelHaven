<template>
    <div class="container">
      <div class="section-title">
        <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px; text-align: center;">Contact Us</h3>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input v-model="productName" id="productName" class="form-control" placeholder="Enter Product Name" required>
            <span v-if="errors.productName" class="text-danger">{{ errors.productName }}</span>
          </div>
        </div>
        <div class="col-md-6 offset-md-3">
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input v-model="quantity" type="number" id="quantity" class="form-control" placeholder="Enter Quantity" required>
            <span v-if="errors.quantity" class="text-danger">{{ errors.quantity }}</span>
          </div>
        </div>
        <div class="col-md-6 offset-md-3">
          <button @click="createUser" class="btn btn-primary" style="margin-top: 20px; margin-bottom: 30px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Submit</b></button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { collection, addDoc } from "firebase/firestore";
  import db from '../firebase/init.js';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        productName: '',
        quantity: '',
        userCreated: false,
        userData: {},
        errors: {}
      };
    },
  
    methods: {
      validateForm() {
        this.errors = {};
  
        if (!this.productName) {
          this.errors.productName = 'Product Name is required';
        }
  
        if (!this.quantity) {
          this.errors.quantity = 'Quantity is required';
        }
  
        return Object.keys(this.errors).length === 0;
      },
  
      async createUser() {
        if (this.validateForm()) {
          const colRef = collection(db, 'users');
          const dataObj = {
            productName: this.productName,
            quantity: this.quantity
          };
  
          const docRef = await addDoc(colRef, dataObj);
          console.log('Document was created with ID:', docRef.id);
  
          this.userCreated = true;
          this.userData = dataObj;
  
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Form submitted successfully!'
          });
  
          // Clear text boxes
          this.productName = '';
          this.quantity = '';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .text-danger {
    color: red;
  }
  </style>
  