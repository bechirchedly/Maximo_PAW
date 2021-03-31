let cacheData = "appV1";
let urlsToCache = [
    '/static/js/main.chunk.js',
    '/static/js/bundle.js',
    '/static/media/logo.103b5fa1.svg',
    '/static/media/primeicons.3a0d4a58.ttf',
    '/favicon.ico',
    '/static/js/vendors~main.chunk.js',
    '/index.html',
    '/',
    '/Tab',
    '/test',
    '/workorder'
];



this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=> {
            cache.addAll(urlsToCache)
        })
    )
})

this.addEventListener("fetch", (event)=>{
  
  // event.waitUntil(
  //   this.registration.pushNotification("hello bitch",{
  //     body:"You need some help ??!",
  //   })  
  // )
    


    if(!navigator.onLine)
    {
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp)
                {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
    
});

this.addEventListener('activate', event => {
    let cacheWhitelist = ['appV1'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
