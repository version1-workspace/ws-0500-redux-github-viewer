

# Redux Github Viewer

React+ReduxでGithub Viewerを実装しましょう。</br>
実際にGithub REST APIを叩くのは次課題なので、
この課題は**React Router**と**Redux**の利用にフォーカスしましょう。

demo: https://version1-workspace.github.io/ws-0500-redux-github-viewer/

## 課題で身に着けること

- Reduxでの状態管理
- Atomicデザインでのコンポーネント設計
- React Routerでのページ設定とページ遷移
- Eslint + Prettier
- モーダルの実装
- メニューの実装
- Hooks API

## 課題の進め方

### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。

### 1. yarn, create-react-appを利用してReactをインストール

1. reactをインストール
```
yarn create react-app redux-github-viewer
```

### 2. Eslint Prettierのセットアップ

##### 1. 静的解析ツールのeslintとpretteirをセットアップする

- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

##### 2. 使用しているエディタにeslint, prettierのプラグインを導入

```
[使用しているエディタ] eslint or prettier プラグイン
```

で検索してインストールしてみてください。詰まった場合は適宜質問ください。

### 3. 実装に必要な概念を学ぶ

##### Atomic Designによるコンポーネント設計

[Atomic Designとは何か](https://www.codegrid.net/articles/2017-atomic-design-1/)

下記ようなディレクトリ設計にすると、うまくいきやすいです。

```
src - components -+
                  | - atoms/
                  | - molecules/
                  | - organisms/
                  | - templates/
    - pages/
```

##### Redux

主にメインコンセプト部分中心に

- [Redux.js公式](https://redux.js.org/introduction/getting-started)
- [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)]
- [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)

※  [コードサンプル](https://codesandbox.io/p/sandbox/redux-3gjrks?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clwlcw66x00063b6o2wi8tahj%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clwlcw66x00023b6ofb64psh2%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clwlcw66x00033b6o8h6tk5x1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clwlcw66x00053b6oc3y8few5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clwlcw66x00023b6ofb64psh2%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwlcw66w00013b6oe9ol7wbf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clwlcw66x00023b6ofb64psh2%2522%252C%2522activeTabId%2522%253A%2522clwlcw66w00013b6oe9ol7wbf%2522%257D%252C%2522clwlcw66x00053b6oc3y8few5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwlcw66x00043b6o8lv7dtsd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clwlcw66x00053b6oc3y8few5%2522%252C%2522activeTabId%2522%253A%2522clwlcw66x00043b6o8lv7dtsd%2522%257D%252C%2522clwlcw66x00033b6o8h6tk5x1%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clwlcw66x00033b6o8h6tk5x1%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

##### SPA(Single Page Application)

- [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)
- [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)
- [SPA(Single Page Application)の基本](https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)
- [React Router](https://reactrouter.com/en/main)

### 4.デモをみながらGithubViewerを実装

- Pull Reqeustページは仮置きしているのででものようにタイトルだけ書いたページを置いておいてください。

- 一箇所で長時間はまってしまった場合は別の機能を実装するか質問するようお願いします。

##### チェックリスト

- [ ] reactのリポジトリの作成
- [ ] yarnでのパッケージインストール
  - [ ] redux, react-reduxのインストール
  - [ ] redux-devtoolのインストール
  - [ ] react-routerのインストール
  - [ ] styled-componentsのインストール
  - [ ] eslint+prettierのインストール
  - [ ] react-modalのインストール
- [ ] ヘッダーの実装
  - [ ] ヘッダーロゴの実装
  - [ ] ヘッダーリンクの実装
  - [ ] メニューの実装（ライブラリを使わずに実装)
- [ ] topページの実装
  - [ ] タブの実装(react-router等ライブラリは使わずに実装）
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issueフィルタ機能の実装
  - [ ] issue作成(react-modalを使って実装)
  - [ ] issue更新(react-modalを使って実装)
  - [ ] issue削除(全て選択のチェックボックスも実装）
- [ ] プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）
- [ ] レスポンシブ対応

### 5. サイトとして公開

1. gh-pagesモジュールを追加

```
$ yarn add -D gh-pages
```

2. package.jsonのscriptsに下記コマンドを追加

```
"predeploy": "react-scripts build"
"deploy": "gh-pages -d build"
```

3. packcage.jsonにhomepageの属性を追加
```
  "homepage": "https://[アカウントID].github.io/[リポジトリ名]" // Github Pagesで公開するURL
```
4. コマンドを実行

```
$ yarn run deploy
```
