// Framework7 initialization
const app = new Framework7({
    root: '#app',
  });
  
  // Request notification permission
  document.getElementById('request-access-button').addEventListener('click', async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        alert('Notification permission granted.');
        registerServiceWorker();
      } else {
        alert('Notification permission denied.');
      }
    } catch (error) {
      console.error('Permission request failed', error);
    }
  });
  
  // Register Service Worker
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
    }
  };
  
  // Send a test notification
  document.getElementById('send-notification-button').addEventListener('click', () => {
    if (Notification.permission === 'granted' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Test Notification', {
          body: 'This is a test notification!',
          icon: 'https://cdn.framework7.io/placeholder/icon.png',
          actions: [
            { action: 'open', title: 'Open App' },
            { action: 'close', title: 'Close Notification' }
          ]
        });
      });
    } else {
      alert('Permission not granted or Service Worker not supported.');
    }
  });
  