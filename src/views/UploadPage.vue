<script setup lang="ts">
import { ref } from 'vue'
import type { MealData } from '../types/meal'
import { fetchMealSuggestion } from '../services/mealService'

const isLoading = ref<boolean>(false)
const mealData = ref<MealData | null>(null)
const selectedFile = ref<File | null>(null)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
  }
}

const handleUpload = async () => {
  if (!selectedFile.value) {
    alert('画像を選択してください')
    return
  }

  isLoading.value = true
  mealData.value = null

  try {
    // サービスモジュールを使用してデータを取得
    mealData.value = await fetchMealSuggestion(selectedFile.value)
  } catch (error) {
    console.error('献立の取得に失敗しました:', error)
    alert('献立の取得に失敗しました。もう一度お試しください。')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="upload-page">
    <div class="upload-section">
      <h2>冷蔵庫の画像をアップロード</h2>
      <p class="description">冷蔵庫の中身の写真をアップロードすると、おすすめの献立を提案します。</p>
      
      <div class="upload-box">
        <input 
          type="file" 
          accept="image/*"
          @change="handleFileChange"
          id="file-input"
          class="file-input"
        />
        <label for="file-input" class="file-label">
          <span v-if="selectedFile">{{ selectedFile.name }}</span>
          <span v-else>📷 画像を選択</span>
        </label>
        <button 
          @click="handleUpload" 
          :disabled="!selectedFile || isLoading"
          class="upload-button"
        >
          {{ isLoading ? '解析中...' : '献立を提案してもらう' }}
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="loading-section">
      <div class="spinner"></div>
      <p>画像を解析中です...</p>
    </div>

    <div v-if="mealData && !isLoading" class="result-section">
      <h2>📋 提案された献立</h2>
      
      <div class="meal-card">
        <h3>{{ mealData.title }}</h3>
        <p class="description">{{ mealData.description }}</p>
        <p class="cooking-time">⏱️ 調理時間: {{ mealData.cookingTime }}</p>

        <div class="ingredients">
          <h4>🥕 材料</h4>
          <ul>
            <li v-for="(ingredient, index) in mealData.ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div class="steps">
          <h4>👨‍🍳 作り方</h4>
          <ol>
            <li v-for="step in mealData.steps" :key="step.step">
              {{ step.instruction }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-page {
  max-width: 800px;
  margin: 0 auto;
}

.upload-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.upload-section h2 {
  margin-bottom: 0.5rem;
  color: #333;
}

.description {
  color: #666;
  margin-bottom: 1.5rem;
}

.upload-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.file-input {
  display: none;
}

.file-label {
  display: inline-block;
  padding: 1rem 2rem;
  background: #f0f0f0;
  border: 2px dashed #999;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  text-align: center;
  font-size: 1rem;
}

.file-label:hover {
  background: #e8e8e8;
  border-color: #667eea;
}

.upload-button {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.upload-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.upload-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-section {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.result-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.result-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.meal-card {
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.meal-card h3 {
  color: #667eea;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cooking-time {
  color: #666;
  margin: 1rem 0;
  font-weight: 500;
}

.ingredients,
.steps {
  margin-top: 1.5rem;
}

.ingredients h4,
.steps h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.ingredients ul,
.steps ol {
  padding-left: 1.5rem;
}

.ingredients li,
.steps li {
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.6;
}

@media (prefers-color-scheme: light) {
  .upload-section,
  .loading-section,
  .result-section {
    background: white;
  }
  
  .meal-card {
    background: #f9f9f9;
  }
}
</style>
