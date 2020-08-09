self.addEventListener("install", (e) => {
  console.log("install", e);
  //   会跳过等待直接进入 activave状态
  e.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (e) => {
  console.log("activete", e);
  e.waitUntil(self.clients.claim());
});
// self.addEventListener("fetch", (e) => {
//   console.log("fetch", e);
// });
