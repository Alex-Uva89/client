<template>
    <div>
        <HeaderDefault title="Login"/>
        <div class="login-container">
            <div class="login-card">
                <h1>Login</h1>
                <form class="login-form">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                
                    <button type="submit">Login</button>
                </form>
            </div>
          </div>
      </div>
</template>
  
  <script setup>
  import HeaderDefault from '~/components/HeaderDefault.vue';
  </script>
  
  <style scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--label);
    padding: 20px;
  }
  
  .login-card {
    background: var(--background);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin-top: 2rem;
  }
  
  h1 {
    color: var(--text);
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  input {
    padding: 12px;
    border: 2px solid var(--background);
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: var(--primary);
    background: var(--banner)
  }
  
  button {
    background-color: var(--primary);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: var(--banner);
  }
  
  @media (max-width: 480px) {
    .login-card {
      padding: 1.5rem;
    }
  }
  </style>
  