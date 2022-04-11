import { createApp } from "vue";
import App from "./App.vue";

window.addEventListener('DOMContentLoaded', async () => {
 console.log("DOMContentLoadedイベントが実行されました。");
});


console.log("hello contents script1")
  
  console.log("hello contents script")
  const el = document.querySelector('.js-header-wrapper ')
  console.log(el)
  if (el) {
    console.log(el)
    el.insertAdjacentHTML(
      'afterend',
      '<div id="app">hello</div>',
    );
    const app = createApp(App)
    app.mount('#app')
  }
