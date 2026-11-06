/* 쉼 PWA: 개인 기도 데이터는 캐시에 저장하지 않습니다. */
const CACHE='rest-prayer-shell-v6';
const CORE=['./','./index.html','./offline.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{const r=event.request;if(r.method!=='GET')return;
 if(r.mode==='navigate'){event.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(new URL('./index.html',self.registration.scope),copy))}return res}).catch(()=>caches.match(new URL('./index.html',self.registration.scope)).then(x=>x||caches.match(new URL('./offline.html',self.registration.scope)))));return}
 const u=new URL(r.url);if(u.origin===self.location.origin){event.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy))}return res})));return}
 // 3D 라이브러리는 최초 온라인 로딩 성공 후에만 오프라인 캐시 가능.
 if(u.hostname==='cdn.jsdelivr.net'&&u.pathname.includes('/three@0.160.1/')){event.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy))}return res})));}
});