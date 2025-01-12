<template>
    <footer class="footer">
      <div class="footer-container">
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        <p class="copyright">
          &copy; 2025 My Vue App. All rights reserved.
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterNav',
  };
  </script>
  
  <style>
  .footer {
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    padding: 1rem 2rem;
    text-align: center;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .footer-links li {
    font-size: 0.9rem;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #007aff;
  }
  
  .copyright {
    font-size: 0.8rem;
    color: #666;
  }
  </style>
  