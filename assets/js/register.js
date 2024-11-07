if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/assets/js/service-worker.js')
            .then(registration => {
                console.log('Service Worker terdaftar dengan sukses:', registration);
            })
            .catch(error => {
                console.log('Pendaftaran Service Worker gagal:', error);
            });
    });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
});
