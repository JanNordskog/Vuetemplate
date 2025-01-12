<template>
    <header class="header">
      <div class="header-container">
        <h1 class="logo">My Vue App</h1>
        <nav class="nav-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderNav',
  };
  </script>
  
  <style>
  .header {
    background-color: #f8f8f8;
    border-bottom: 1px solid #e0e0e0;
    padding: 1rem 2rem;
  }
  
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
  }
  
  .nav-menu ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
  
  .nav-menu li {
    font-size: 1rem;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
  }
  
  .nav-menu a:hover {
    color: #007aff; /* Apple's blue link hover color */
  }
  
  .nav-menu a.router-link-active {
    font-weight: bold;
    color: #007aff;
  }
  </style>
  