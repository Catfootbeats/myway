import comp from "C:/Users/Catfootbeats/VSCodeProjects/myway_web/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://catfootbeats.icu/img/myway.png\",\"actions\":[{\"text\":\"加入QQ\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"关于\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"欢迎回来~\",\"details\":\"ヾ(≧▽≦*)o\"}],\"footer\":\"Copyright © 2024-2025 MyWay\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
