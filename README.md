

# Redux Github Viewer

React+ReduxでGithub Viewerを実装しましょう。

demo: https://version-1.github.io/redux-github-viewer/


### チェックリスト

- [ ] reactのリポジトリの作成
- [ ] yarnでのパッケージインストール
  - [ ] redux, react-reduxtのインストール
  - [ ] react-routerのインストール
  - [ ] styled-componentsのインストール
  - [ ] Eslint+Prettierのインストール
  - [ ] react-modalのインストール
- [ ]ヘッダーの実装
  - [ ]ヘッダーリンクの実装
  - [ ]メニューの実装
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issue作成
  - [ ] issue更新
  - [ ] issue削除



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

- [React.js公式](https://redux.js.org/introduction/getting-started)

##### 3.デモをみながらGithubViewerを実装

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
