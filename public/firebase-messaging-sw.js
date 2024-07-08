self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log('Push event!! ', data);
  const title = data.notification.title;
  const options = {
    body: data.notification.body,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

