

# Redux Github Viewer

JavaScriptで実装した○×ゲームと同様のゲームをReactで実装してください。

demo: https://version-1.github.io/redux-github-viewer/

## 課題で身に着けること

- Reduxでの状態管理
- モーダルの実装
- Hooks API
- SPAのためのルーティング(React Router)

## 課題の進め方

#### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。

#### 1. yarn, create-react-appを利用してReactをインストール

1. reactをインストール
```
yarn create react-app .
```

2. reactを動かしてみる
```
yarn start
```

ブラウザが起動してReactのロゴが表示されれば完了です。


#### 2. Reactの公式ドキュメントを読む

主にメインコンセプト部分中心に

- [React.js公式](https://ja.reactjs.org/docs/hello-world.html)
- [12 React Best Practices You Need to Follow in 2020](https://www.codeinwp.com/blog/react-best-practices/)

jsFiddleのようなブラウザで動作を確認できるものを使いながら読むと理解が深まるかと思います。

[jsFiddle](https://jsfiddle.net/boilerplate/react-jsx)


##### 3. ○×ゲームを実装

[js課題](https://github.com/version-1/js-tic-tac-toe)で実装した○×ゲームと同様のものを実装して、
JavaScriptでの実装とReactでの実装の違いを学ぶ。


###### styled-component をインストールしてstyled-componentを使ってスタイルする

下記手順を参考にstyled-componentをインストールして使用する。
[styled-components install](https://styled-components.com/docs/basics#installation)

##### 5. サイトとして公開

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
