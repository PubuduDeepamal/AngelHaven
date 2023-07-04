<script setup>
import heder3 from '@/components/heder3.vue'
import adminhome12 from '@/components/adminhome12.vue'
import footersection from '@/components/footersection.vue'
</script>

<template>
  <main>
    <heder3/>
    <adminhome12/>
    <footersection/>
  </main>
</template>

<!-- <template>
  <div id="app">
    <add-product @product-added="addProduct"></add-product>
    <product-list :products="products"></product-list>
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    AddProduct,
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
  },
};
</script>

<style>
/* Add custom styles as needed */
</style> -->
