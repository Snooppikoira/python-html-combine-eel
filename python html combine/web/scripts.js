async function kirjaudu() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let vastaus = await eel.kirjaudu(username, password)();

    if (vastaus === "Kirjautuminen onnistui!") {
        showNotification('success', 'Login successful!');
    } else {
        showNotification('error', 'Invalid username or password!');
    }
}

function showNotification(type, message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const icon = notification.querySelector('i');

    notificationText.textContent = message;

    if (type === 'success') {
        notification.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
        icon.className = 'fas fa-check-circle';
        icon.style.color = '#4CAF50';
    } else if (type === 'error') {
        notification.style.backgroundColor = 'rgba(244, 67, 54, 0.2)';
        icon.className = 'fas fa-exclamation-circle';
        icon.style.color = '#F44336';
    }

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
