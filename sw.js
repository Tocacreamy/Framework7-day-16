// Service Worker
self.addEventListener('install', function (event) {
    console.log('Service Worker installing.');
    self.skipWaiting(); // Agar segera aktif tanpa menunggu
  });
  
  self.addEventListener('activate', function (event) {
    console.log('Service Worker activating.');
  });
  
  // Listen to notification click event
  self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // Menutup notifikasi
    if (event.action === 'open') {
      clients.openWindow('/'); // Membuka halaman utama
    }
  });
  