<template>

  <br><br><br><br>

<div class="section-title">
    <h3 class="faqsection" style="font-size: 45.8px;">Contact Us</h3>
 </div>

  <!-- Wrapper container -->
<div class="container py-4">

<!-- Bootstrap 5 starter form -->
<form id="contactForm">

  <!-- Name input -->
  <div class="mb-3">
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" type="text" placeholder="Name" />
  </div>

  <!-- Email address input -->
  <div class="mb-3">
    <label class="form-label" for="emailAddress">Email Address</label>
    <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
  </div>

  <!-- Message input -->
  <div class="mb-3">
    <label class="form-label" for="message">Message</label>
    <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
  </div>

  <!-- Form submit button -->
  <div class="d-grid">
    <button class="btn btn-primary btn-lg" type="submit">Submit</button>
  </div>

</form>

</div>
<br>
  </template>
  
  <script>
  export default {
    name: 'Homecontact',
    data() {
      return {
        isSignedIn: true
      }
    }
  }
  </script>


<style scoped>

.coupon {
  border: 2px solid #f0d8b6;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
 
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
  text-align: center;
}

p {
    text-align: center;
    font-family: emoji;
}

#textfont{
    font-family: cursive;
    margin-top: 8px;
}

h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
    text-align: center;
    font-family: emoji;
}

#containertop{

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

#containerbootom{
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

}
h2, .h2 {
    text-align: center;
}

.goolesinin{
  background: #f0d8b6;
    color: black;
    border: 0;
    text-transform: uppercase;
    transition: all 0.3s;
    border-radius: 6px; 
    margin-top: -18px;
    margin-bottom: 20px;
    padding: 10px;
}

.btn-lg, .btn-group-lg > .btn {
    --bs-btn-padding-y: 0.5rem;
    --bs-btn-padding-x: 1rem;
    --bs-btn-font-size: 1.25rem;
      background-color: #f0d8b6;
      color: black;
      border: #f0d8b6;
}

@media (min-width: 1200px){
.container[data-v-62fd17b5] {
    padding: 11px 228px;
} 

.faqsection {
    text-align: center;
    padding-bottom: 10px;
}
  
}

</style>