

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

#### 2. Reduxの概念を学ぶ

主にメインコンセプト部分中心に

- [Redux.js公式](https://redux.js.org/introduction/getting-started)
- [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)

##### サンプル

[redux todo list] (https://jsfiddle.net/version1/u4y0j1qv/)

#### 3. SAP(Single Page Application)の概念を学ぶ

- [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)
- [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)
- [SPA(Single Page Application)の基本] (https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [ささっと学ぶReact Router v4](https://the2g.com/2789)

##### 3.デモをみながらGithubViewerを実装

### チェックリスト

- [ ] reactのリポジトリの作成
- [ ] yarnでのパッケージインストール
  - [ ] redux, react-reduxtのインストール
  - [ ] react-routerのインストール
  - [ ] styled-componentsのインストール
  - [ ] Eslint+Prettierのインストール
  - [ ] react-modalのインストール
- [ ] ヘッダーの実装
  - [ ] ヘッダーロゴの実装
  - [ ] ヘッダーリンクの実装
  - [ ] メニューの実装（ライブラリを使わずに実装)
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issue作成
  - [ ] issue更新
  - [ ] issue削除
- [ ] プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）
- [ ] レスポンシブ対応


###### modalの実装にはreact-modalを利用する

###### styled-component をインストールしてstyled-componentを使ってスタイルする

下記手順を参考にstyled-componentをインストールして使用する。
[styled-components install](https://styled-components.com/docs/basics#installation)

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

3. コマンドを実行

```
$ yarn run deploy
```
