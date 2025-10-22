document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Dwight Full Fuel Naturals!");
  
  // Initialize copy-to-clipboard functionality
  initializeCopyButtons();
});

function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const feedback = document.getElementById('feedback');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.getAttribute('data-code');
      const buttonText = button.textContent.trim();
      
      try {
        await navigator.clipboard.writeText(code);
        showFeedback(`✅ Copied: ${buttonText}`, 'success');
        console.log('Copied to clipboard:', code);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        showFeedback(`✅ Copied: ${buttonText}`, 'success');
        console.log('Copied to clipboard (fallback):', code);
      }
    });
  });
}

function showFeedback(message, type = 'info') {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
  
  // Clear feedback after 3 seconds
  setTimeout(() => {
    feedback.textContent = '';
    feedback.className = 'feedback';
  }, 3000);
}

function fuelUp() {
  alert("Thanks for choosing Dwight Full Fuel Naturals!");
}

<script src="script.js"></script>