

# Redux Github Viewer

React+ReduxでGithub Viewerを実装しましょう。</br>
実際にGithub REST APIを叩くのは次課題なので、
この課題は**React Router**と**Redux**の利用にフォーカスしましょう。

demo: https://version-1.github.io/redux-github-viewer/


## 課題で身に着けること

- Reduxでの状態管理
- React Routerでのページ設定とページ遷移
- Eslint + Prettier
- モーダルの実装
- メニューの実装
- Hooks API

## 課題の進め方

#### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。

#### 1. yarn, create-react-appを利用してReactをインストール

1. reactをインストール
```
yarn create react-app redux-github-viewer
```

#### 2. Eslint Prettierのセットアップ

##### 1. 静的解析ツールのeslintとpretteirをセットアップする

[ESLintとPrettierを導入する](https://qiita.com/kobayashi-m42/items/ea2588686a477d083926)

※ yarnに読み替えてセットアップしてください

##### 2. 使用しているエディタにeslint, prettierのプラグインを導入

```
[使用しているエディタ] eslint or prettier プラグイン
```

で検索してインストールしてみてください。詰まった場合は適宜質問ください。

#### 2. Reduxの概念を学ぶ

主にメインコンセプト部分中心に

- [Redux.js公式](https://redux.js.org/introduction/getting-started)
- [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)]
- [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)

##### サンプル

[Redux Todo List](https://jsfiddle.net/version1/u4y0j1qv/latest)

#### 3. SPA(Single Page Application)の概念を学ぶ

- [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)
- [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)
- [SPA(Single Page Application)の基本](https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [ささっと学ぶReact Router v4](https://the2g.com/2789)

#### 4.デモをみながらGithubViewerを実装

- Pull Reqeustページは仮置きしているのででものようにタイトルだけ書いたページを置いておいてください。

- 一箇所で長時間はまってしまった場合は別の機能を実装するか質問するようお願いします。

### チェックリスト

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

##### 4. サイトとして公開

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
