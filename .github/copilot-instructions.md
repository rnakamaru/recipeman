# GitHub Copilot Instructions: Vue 3 + Vite SPA (献立提案アプリ) Project Setup

この指示書に基づき、シンプルな Vue 3 + Vite を使用した SPA のプロジェクト構造と初期ファイルを構築してください。

## 🎯 プロジェクト概要

* **プロジェクト名:** `menu-suggestion-app`
* **機能:** 画像アップロードUIを持ち、アップロード操作後に**モック（スタブ）データ**に基づいた献立の結果と作り方を表示する単一ページアプリケーション。
* **技術:** Vue 3 (Composition API, <script setup>), Vite, TypeScript (最小限), Vue Router
* **制約:** APIアクセスは一切行わず、すべてのデータはフロントエンドのモックデータとして扱います。

---

## 📁 作成すべきファイルと内容

### 1. `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`

* 前回の指示通り、標準的な Vue 3 + Vite + TypeScript プロジェクトの初期設定ファイルを作成してください。
* `vite.config.ts`は最小限の設定で構いません。

### 2. `src/router/index.ts` (ルーター設定)

* Vue Router の設定ファイルを作成します。
* ルートは**`/` (UploadPage.vue)** のみとし、SPAとして単一のビューのみを使用します。

### 3. `src/main.ts` (エントリーポイント)

* `createApp` でアプリケーションインスタンスを作成し、ルーターを設定し、`#app` にマウントします。

### 4. `src/App.vue` (ルートコンポーネント)

* `<script setup>` を使用します。
* メインレイアウトとして機能し、**`<router-view>`** を含めます。
* 基本的なヘッダーとスタイルを設定します。

### 5. `src/views/UploadPage.vue` (メインビュー)

これがアプリケーションの主要なコンポーネントです。

* **`<script setup>`** と Composition API を使用します。
* **状態管理:**
    * `isLoading: ref<boolean>`: データ処理中を示すフラグ (モック用途)。
    * `mealData: ref<MealData | null>`: 献立の結果を保持するリアクティブな変数。
* **UI要素:**
    * 画像をアップロードするための **`<input type="file">`** 要素と、操作を実行するための **`<button>`** を含めます。
    * `isLoading` が `true` の場合に表示するローディングメッセージ（例: "画像を解析中です..."）を準備します。
* **ロジック (モック実装):**
    * ボタンクリックまたはファイル選択時に呼び出される `handleUpload()` メソッドを作成します。
    * このメソッド内で、APIコールの代わりに **3秒間** `isLoading` を `true` に設定する `setTimeout` を使用して遅延をシミュレートします。
    * 遅延後、**`mockMealData`** を `mealData` に代入し、`isLoading` を `false` に戻します。

### 6. `src/types/meal.ts` (TypeScript型定義)

* 献立の結果を表す TypeScript の型定義ファイルを作成します。

```typescript
export interface RecipeStep {
  step: number;
  instruction: string;
}

export interface MealData {
  title: string;
  ingredients: string[];
  description: string;
  cookingTime: string;
  steps: RecipeStep[];
}