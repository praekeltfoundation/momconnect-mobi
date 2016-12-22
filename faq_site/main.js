// First checks if service worker is available in browser
// Then attempts to register service worker, using promises


if ('serviceWorker' in navigator) {

    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/sw.js')
    .then(function(reg) {
        console.log("Service Worker successfully registered", reg);
    })
    .catch(function(error) {
        console.log("Service Worker failed to register", error);
    });
}
else{
  console.log('Service Worker is not supported');
}
