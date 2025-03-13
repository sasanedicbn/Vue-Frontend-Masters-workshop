<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        class="input-field"
        v-model=
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        class="input-field"
        v-model="form.password"
        @input="validationInputs($event, 'password')"
        placeholder="Unesite svoju lozinku"
      />
      <p v-if="error.passwordError" class="error-message">{{ error.passwordError }}</p>

      <BaseButton type="success" text="Log in" />
    </form>
  </div>
</template>

<script>
import BaseButton from '@/Base/Base-button.vue';

export default {
  name: 'LoginPage',
  components: {
    BaseButton,
  },
  data() {
    return {
      form:{
      email: '',
      password: '',
    },
    error:{
      emailError: '',
      passwordError: '',
    }
    };
  },
  methods: {
    validationInputs(event, field) {
      const value = event.target.value;

      if (field === 'email') {
        if (value.length === 0) {
          this.error.emailError = 'Email polje ne može biti prazno.';
        } else if (!this.validateEmail(value)) {
          this.error.emailError = 'Unesite ispravan email.';
        } else {
          this.error.emailError = '';
        }
      }

      if (field === 'password') {
        if (value.length === 0) {
          this.error.passwordError = 'Lozinka ne može biti prazna.';
        } else if (value.length < 6) {
          this.error.passwordError = 'Lozinka mora imati najmanje 6 karaktera.';
        } else {
          this.error.passwordError = '';
        }
      }
    },
    validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    handleSubmit() {
      this.validationInputs({ target: { value: this.form.email } }, 'email');
      this.validationInputs({ target: { value: this.form.password } }, 'password');

      if (!this.error.emailError && !this.error.passwordError) {
        console.log('Forma je uspješno validirana.');
  
      } else {
        console.log('Forma nije validna. Popravite greške.');
      }
    },
  },
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
  width: 400px;
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

.error-message {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
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