---
title: React 學習之路
date: "2023-01-19T10:00:00.169Z"
template: "post"
draft: false
slug: "/posts/react-learning"
category: "React"
tags:
  - "React"
  - "Web Development"
description: "主要學習React基礎項目，從環境建置、開立專案到到執行。當中包含主要React JSX基本觀念介紹，以及主要基礎概念認識。"
socialImage: "./media/42-line-bible.jpg"
---

- [專案環境建置及介紹](#專案環境建置及介紹)
  - [React是什麼?](#react是什麼)
  - [React環境安裝](#react環境安裝)
  - [React Developer Tools](#react-developer-tools)
  - [React編譯相關指令](#react編譯相關指令)
  - [專案基礎結構介紹](#專案基礎結構介紹)
- [JSX介紹](#jsx介紹)
  - [JSX是什麼?](#jsx是什麼)
  - [JSX語法與React Element(元素)](#jsx語法與react-element元素)
  - [React Component(元件)語法](#react-component元件語法)
- [主要概念](#主要概念)
  - [Components 與 Props](#components-與-props)
  - [Component 與 State](#component-與-state)
  - [事件處理](#事件處理)
  - [條件 Render](#條件-render)
  - [列表與 Key](#列表與-key)
  - [React Function Component 比較](#react-function-component-比較)
  - [React 元件生命週期](#react-元件生命週期)


## 專案環境建置及介紹
### React是什麼?
![react-logo.jpg](/media/react-logo.jpg)

React（也稱為React.js或ReactJS），是由facebook所開發的一個陳述式、高效且具有彈性的 `JavaScript 函式庫`，用以建立使用者介面。
React 讓你使用小巧而獨立的component，來建立複雜的 UI，且可讓開發者重複利用元件，在維護體驗上可以更好體驗，實質來說它`並非一個框架`。

React有以下幾個特色：
1. 使用JS在前端產生HTML，完全由JS操作UI，使他可以跟後端分離，達到即使互動效果
2. 採用Virtual DOM概念，提升元件`重新渲染`的效率
3. 每個component 都可以控制自己的`state(狀態)`，也能透過`props`傳遞資料給子元件

### React環境安裝
1. 一個較新的版本的[Node.js](https://nodejs.org/en/)建議14.0.0版以上

<!-- ![node.jpg](/media/node.jpg) -->
2. 開發環境工具採用[VsCode](https://code.visualstudio.com/)進行開發。也可採用官方推薦的工具[Next.js]('https://nextjs.org/)，它是一個輕量的開源 Web 開發框架，採用 Node.js 作為伺服器環境，支援React的Web應用程式功能，例如靜態網站生成和伺服器端渲染

3. VsCode 相關延伸套件，React Snippets 和指令的基本集合，快速方便進行語法套用
     - [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

4. 採用Scss做為開發的話需安裝套件，讓你在使用指令建置檔案時產生對應sass檔案
  ```bash
  npm i node-sass
  ```



### React Developer Tools
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-TW)用於開發階段可查看對應組件間的結構關係及元件傳遞的值。
首次安裝可能會有無法使用的情形，透過安裝擴充的功能進行設定，並把`允許存取檔案網址`啟用，才能進行網頁的分析。
![chrome-tool.jpg](/media/chrome-tool.jpg)

使用情境下主要有以下三個狀態：
   - 正式發布
   - 開發中
   - 無法啟用

以下為開發工具人員F12可查看對應畫面
![console.jpg](/media/console.jpg)



### React編譯相關指令
React 相關編輯指令、建置專案及快速建立元件指令如下：
```bash
// 創建專案
npx create-react-app my-app
// 創建元件
npx generate-react-cli component MyComponent
// 需先下載
npm install generate-react-cli (可選)
// 啟動專案
npm run start
// 打包專案
npm build
```
**特別注意**，第一次使用創建元件會出現初始元件創建選項填答，依照專案需求選擇Yes/No進行預設。創建成功後，專案內會多了一個`generate-react-cli.json檔案`，按照自己選擇的條件所建立的，後續需要調整可在此進行修改。
```json
{
  "usesTypeScript": false,  // 是否使用typeScript
  "usesCssModule": false,   // 是否使用CssModucle
  "cssPreprocessor": "scss", // css 預設處理器
  "testLibrary": "None",    // 測試檔案
  "component": {
    "default": {  // 預設創建元件的設定
      "path": "src/components",  // 創建元件預設路徑
      "withStyle": true,    // 建立style檔案
      "withTest": false,    // 建立測試檔案
      "withStory": false,   // 建立store檔案
      "withLazy": false     // 建立lazy檔案
    }
  }
}
```
除了預設(default)元件創建設定，也可以再新增其它預設路徑並透過type來進行切換，相關指令可參考[generate-react-cli](https://www.npmjs.com/package/generate-react-cli)。
```bash
npx generate-react-cli component HomePage --type=page
```
如果在執行npm run start 出現了port已被佔據，又不想每次都做確認時，可在package.json檔案的scripts區塊自訂指令，自動將設置的port轉換為預設啟用。
```json
  "scripts": {
    "start": "react-scripts start", // 原始預設3000
    "start-pc": "set PORT=3001&& react-scripts start" // 設置3001
  },
```


<!-- [Npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)它是一個 npm 5.2+ 附帶的 package 執行器 -->

### 專案基礎結構介紹
<figure style="width: 240px">
	<img src="/media/project-structure.jpg" alt="專案結構圖片">
	<figcaption>專案結構</figcaption>
</figure>

1. node_modules：下載套件/函式庫(package/library)在 local 的存放位置
2. public：公開的檔案資料夾，可以放入不會被編譯的檔案，起始index.html也放置於其中
3. src：主要開發環境的檔案，放置 js、css、圖片等等
4. package.json：運行環境所使用的安裝套件管理
5. package-lock.json：鎖定所有套件具體來源和版本號，包括主模組和所有套件子模組
6. **jsconfig.json**：`自定義jsconfig`，用來設定js檔案相關設定檔。舉例來說，我們想要可以autoimport檔案路徑

```json
{
    "compilerOptions": {
        "baseUrl": "./src",
        "checkJs": true,
        "jsx": "react"
    }
}
```


## JSX介紹

### JSX是什麼?

1. 大部分 React 的開發者會使用一種特殊的語法，被稱為`JSX`，因為它讓這些結構寫起來更容易。

2. [JSX](https://ithelp.ithome.com.tw/articles/10277126) 就跟 JavaScript 一樣強大。可以在 JSX 中的括號中放入任何JavaScript的表達式。每個React element都是一個 JavaScript 的 object，你可以把它存在一個變數中或在程式中互相傳遞。

3. JSX的X代表的是XML語法的意思

### JSX語法與React Element(元素)
React Element(元素)是一個React用於描述虛擬DOM元素的物件，它只有單純用於描述的屬性值，其中沒有帶有方法。
![sample2.jpg](/media/sample2.jpg)


1. type： 一個字串，代表任何合法的HTML元素類型名稱，例如h1、div，或是參照到React程式碼中定義的的元件類別
2. props：對應到元素的屬性值的屬性
3. key： React用來識別元素的屬性，尤其是在同樣類型的元素間要用這個屬性來區分
4. [ref](https://blog.errorbaker.tw/posts/lavi/react-ref-reference/)： React用來存取對應的實體(真實)DOM用的屬性
5. **JSX語法是`React.createElement的簡寫語法`**，可透過線上[babel](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.20.11&externalPlugins=&assumptions=%7B%7D)編譯器進行查看

```js
// 簡寫寫法
<div className="shopping-list">
  <h1>Shopping List for {props.name}</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
    <li>Oculus</li>
  </ul>
</div>
// 原始編譯寫法
React.createElement("div", {
  className: "shopping-list"
},
React.createElement("h1", null, "Shopping List for ", props.name),
React.createElement("ul", null,
    React.createElement("li", null, "Instagram"),
    React.createElement("li", null, "WhatsApp"),
    React.createElement("li", null, "Oculus")
  )
);
```

### React Component(元件)語法
React Component(元件)則是裡面可以封裝多個React Element(元素)或封裝其他元件，也可以帶有`狀態(state)`，以及各種`事件處理的方法`，主要有分為以下三種方式。
- ES6+的類別定義方式(建構式樣式)
![component1.jpg](/media/component1.jpg)
- ES5的語法(工廠樣式)
![component2.jpg](/media/component2.jpg)
- 函式定義樣式
![component3.jpg](/media/component3.jpg)

***

## 主要概念

### Components 與 Props
- 當 React 看到由使用者定義 component 的 element 時，它將 JSX 屬性和 children 作為 single object 傳遞給該 component。我們稱這個 object 為「props」。
- Component的字首須為`大寫字母`。 React 會將小寫字母開頭的組件視為原始 DOM 標籤，舉例來說，<div/> 就會被視為是 HTML 的 div 標籤，但是 <Welcome /> 則是一個 component，而且需要在作用域中使用 Welcome。
- Props 是`唯讀的`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

function Welcome(props) {
    return (
      <h1>Hello,{props.name}</h1>
    );
  }
// 進入點
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome name="brook" />);
```


### Component 與 State
State 類似於 prop，但它是私有(Locale)且由 component 完全控制的，在component 才有此屬性。

1. 唯一可初始指定在contructor , ex: this.state.xxx = ‘xxx’;
2. <font color=#FF0000>不能直接修改State，而是採用setState()，否則不會render畫面</font>
3. State 的更新將會被 Merge
4. State 的更新可能是非同步的
    - <font color=#00FF00>this.props 和 this.state 可能是非同步的被更新</font>

![case2.jpg](/media/case2.jpg)

### 事件處理

[事件](https://zh-hant.reactjs.org/docs/handling-events.html)的名稱在 React 中都是 `camelCase`，而在 HTML DOM 中則是`小寫`，事件的值在 JSX 中是一個 function，而在 HTML DOM 中則是一個 string。
1. React 方法不能使用return false; 來避免預設行為，必須採用e.preventDefault()
2. this 在 JSX callback 中的意義
    - JavaScript 中，class 的方法在預設上是沒有被綁定的
    - 採用public class field 來正確的綁定 callback
    - 建議避免() => this.handleClick() arrow 寫法，後續當作參數傳遞會發生多餘的render，單純的按鈕元件

![case3.jpg](/media/case3.jpg)


### 條件 Render

React 中的[條件](https://zh-hant.reactjs.org/docs/conditional-rendering.html
) rendering 跟 JavaScript 一致。使用 JavaScript 中的運算子如 if 或者 三元運算子 來建立表示目前 state 的 element，然後讓 React 根據它們來更新 UI。

1. Inline If 與 && 邏輯運算子
2. Inline If-Else 與三元運算子
3. 防止 Component Render
    - 隱藏元件，不希望顯示

![case4.jpg](/media/case4.jpg)

### 列表與 Key
1. [Key](https://zh-hant.reactjs.org/docs/lists-and-keys.html) 幫助 React 分辨哪些項目被改變、增加或刪除。在 array 裡面的每個 element 都應該要有一個 key，如此才能給予每個 element 一個固定的身份。
    - 列表元件沒有key，會收到一個關於你應該提供 key 給每一個列表項目的警告
    ![case5-warn.jpg](/media/case5-warn.jpg)
    - <font color=#FF0000>不要用[流水號](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)當作key 來使用</font>
    - Key 必須在 Sibling(同層) 中是唯一的
2. 在 JSX 中嵌入 map()，參考NumberList2


### React Function Component 比較
![compare-func.jpg](/media/compare-func.jpg)

### React 元件生命週期
![life-cycle.jpg](/media/life-cycle.jpg)
[完整生命週期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
1. mounting階段
    - constructor ：初始化
    - static getDerivedStateFromProps
    - componentWillMount（即將廢棄)
    - render ：渲染
    - componentDidMount： DOM掛載完成

2. updating階段
    - componentWillReceiveProps ：props改變時才觸發(即將廢棄)
    - static getDerivedStateFromProps :當props、state改變就會觸發
    - shouldComponentUpdate
    - componentWillUpdate(即將廢棄)
    - render
    - getSnapshotBeforeUpdate ：component更新前執行
    - componentDidUpdate ：component已經更新完畢

3. Unmount 銷毀
    - componentWillUnmount : component即將銷毀


