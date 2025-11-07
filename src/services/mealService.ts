import type { MealData } from '../types/meal'
import { mockMealData } from '../data/mockData'

/**
 * 画像から献立を取得する（モック実装）
 * @param file アップロードされた画像ファイル
 * @returns 献立データ
 */
export const fetchMealSuggestion = async (file: File): Promise<MealData> => {
  // 将来的にここで実際のAPI呼び出しを行う
  // 現在はモックデータを返す
  
  // 3秒間の遅延をシミュレート
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  // 実際のAPI実装例（コメントアウト）:
  // const formData = new FormData()
  // formData.append('image', file)
  // const response = await fetch('/api/meal-suggestion', {
  //   method: 'POST',
  //   body: formData
  // })
  // return await response.json()
  
  return mockMealData
}
