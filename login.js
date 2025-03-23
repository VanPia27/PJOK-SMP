// Fungsi login
function login() {
    const username = document.getElementById('username').value;
    const errorMessage = document.getElementById('errorMessage');
    if (username.trim() === "") {
      
        errorMessage.classList.remove('hidden');
    } else {
       
        errorMessage.classList.add('hidden');
    
        localStorage.setItem('username', username);
     
        window.location.href = "dashboard.html"; 
    }
}
