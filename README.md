# Komorebi

写真と言葉で、暮らしの輪郭を残すSNS。

Komorebi は、日々の小さな気づきや創作、学びの記録を静かに共有するためのソーシャルアプリです。派手な拡散よりも、落ち着いた世界観と読みやすい投稿体験を大切にしています。

## Concept

ターゲットは、20-30代の暮らし好き・創作好き・学び続ける人です。

一般的なSNSのように情報量を詰め込むのではなく、写真の余白、深緑とアイボリーの配色、丸みのあるカードUIで「静かな居場所」らしさを表現しました。ログイン前の画面ではコンセプトがすぐ伝わるように、フリー素材の写真とコピーを大きく配置しています。

## Features

- メールアドレスとパスワードによる新規登録・ログイン
- Supabase Auth を使ったログイン状態の復元
- 投稿の作成、一覧表示、削除
- 投稿一覧のページネーション
- ログイン中ユーザーのプロフィール表示
- PC / スマートフォンに対応したレスポンシブレイアウト
- Komorebi の世界観に合わせた favicon とブランドUI

## Design Highlights

- `Komorebi` の名前に合わせて、木漏れ日を想起させる写真・色・余白を採用
- 認証画面はサービスの入口として、ターゲットと利用シーンが伝わるヒーローレイアウトに設計
- 投稿画面は入力欄、投稿カード、プロフィールカードを分離し、読みやすさを優先
- 写真素材は Unsplash のフリー素材を使用し、画面内にクレジットを表示

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Supabase Auth
- Supabase Database
- ESLint

## Architecture

画面・UI・状態管理・データアクセスの責務が混ざらないように整理しています。

```txt
src
├── components
│   ├── auth       # ログイン・登録画面の共通UI
│   ├── feed       # 投稿入力、投稿カード、ページネーション
│   ├── layout     # ヘッダー、ホームのヒーロー
│   └── profile    # プロフィールサイドバー
├── constants      # アプリ名、写真URL、クレジット
├── hooks          # 投稿フィードの状態管理
├── pages          # ルーティング単位の画面
├── repositories   # Supabase との通信処理
└── lib            # Supabase client
```

## Getting Started

### 1. Install

```bash
npm install
```

### 2. Environment Variables

`.env` を作成し、Supabase の接続情報を設定します。

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_API_KEY=your_supabase_anon_key
```

### 3. Development

```bash
npm run dev
```

### 4. Build

```bash
npm run build
```

### 5. Lint

```bash
npm run lint
```

## Portfolio Notes

このアプリでは、単にSNS機能を実装するだけでなく、以下を意識しています。

- プロダクトのターゲットとコンセプトをUIに反映すること
- テンプレート感を減らし、ブランドとして印象に残る見た目にすること
- ページコンポーネントを薄く保ち、再利用可能なUIとhooksに分離すること
- Supabase との通信を repository に集約し、データアクセスの責務を明確にすること

## Photo Credit

Hero image: Photo by Sarlote Laura Jevdokimova on Unsplash

https://unsplash.com/photos/sunlight-illuminates-a-path-through-a-forest-Y5p_0LW1xQg
