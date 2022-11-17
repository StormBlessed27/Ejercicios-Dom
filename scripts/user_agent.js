const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $userdeviceDiv = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      iOS: () => ua.match(/iphone|ipad|ipod/i),
      any: function () {
        return this.android() || this.iOS();
      },
    },
    isDeskptop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.windows() || this.mac() || this.linux();
      },
    },
    isBrowser = {};
  console.log(ua);
  isMobile.android();
}
