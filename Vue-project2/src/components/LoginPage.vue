<template>
    <div class="login-container">
      <form class="login-form" action="#">
        <label for="email">Email</label>
        <input type="text" id="email" class="input-field" v-on:input="validationInputs($event, 'email')" placeholder="Unesite svoj email" />
  
        <label for="password">Password</label>
        <input type="password" id="password" class="input-field" v-on:input="validationInputs($event, 'password')" placeholder="Unesite svoju lozinku" />
  
        <BaseButton type="success" text="Log in" />
      </form>
    </div>
  </template>
  
  <script>
  import BaseButton from '@/Base/Base-button.vue';

  export default {
    data: () => {
     errorMessage = ''
    },
    name: 'LoginPage',
    components: {
      BaseButton,
    },
    methods: {
      validationInputs(event, field){
        const value = event.target.value;
        if(value.length === 0){
          console.log('input polje ne moze biti prazno')
        } else{
          console.log(`vrijednost ${field}`, value)
        }
      }
    }
  };
  </script>
  
  <style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
  }
  
  .login-form {
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .login-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
  }
  
  .input-field:focus {
    border-color: #42b983;
    outline: none;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
  }
  
  .btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-success {
    background-color: #42b983;
    color: #fff;
  }
  
  .btn-success:hover {
    background-color: #369c6e;
  }
  </style>