const CACHE_NAME = 'cleaning-site-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/images/cleaning-team-hero.jpg',
  '/images/cleaning-professional.png',
  '/images/about-team.png',
  '/images/service-cleaning.png',
  '/images/service-moving.png',
  '/images/service-maintenance.png'
];

// تثبيت Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.log('Cache failed:', error);
      })
  );
});

// تفعيل Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// اعتراض طلبات الشبكة
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // تجاهل طلبات POST
  if (request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // إرجاع النسخة المخزنة مؤقتاً
          return cachedResponse;
        }
        
        // إذا لم تكن مخزنة، احصل عليها من الشبكة
        return fetch(request)
          .then((response) => {
            // تحقق من أن الاستجابة صالحة
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // نسخ الاستجابة للتخزين المؤقت
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // في حالة فشل الشبكة، حاول إرجاع صفحة offline
            if (request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});
