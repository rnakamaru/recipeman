import type { MealData } from '../types/meal'

export const mockMealData: MealData = {
  title: 'カレーライス（400人前）',
  ingredients: [
    'ご飯 80kg（1人200g）',
    '牛肉（または豚肉） 40kg',
    'じゃがいも 40kg',
    '玉ねぎ 30kg',
    'にんじん 20kg',
    'カレールー 8kg（市販の箱 約80箱分）',
    'サラダ油 2L',
    '水 120L',
    'にんにく（みじん切り） 800g',
    '生姜（みじん切り） 800g'
  ],
  description: '本格カレーライス。野菜と肉の旨味がたっぷり溶け込んだ、みんなが大好きな定番メニューです。',
  cookingTime: '約4時間（仕込み・調理込み）',
  steps: [
    {
      step: 1,
      instruction: 'じゃがいも、にんじんを一口大に切り、玉ねぎは薄切りにします。肉も適度な大きさにカットします。'
    },
    {
      step: 2,
      instruction: '鍋にサラダ油を熱し、にんにくと生姜を炒めて香りを出します。'
    },
    {
      step: 3,
      instruction: '肉を加えて表面に焼き色がつくまで炒めます。'
    },
    {
      step: 4,
      instruction: '玉ねぎを加えてしんなりするまで炒め、にんじんとじゃがいもも加えて軽く炒めます。'
    },
    {
      step: 5,
      instruction: '水を加えて沸騰させ、アクを取り除きながら野菜が柔らかくなるまで煮込みます（約40分）。'
    },
    {
      step: 6,
      instruction: '一旦火を止めてカレールーを溶かし入れ、再び弱火で煮込みます（約20分）。'
    },
    {
      step: 7,
      instruction: '味を調整し、炊き上がったご飯に盛り付けて完成です。'
    }
  ]
}
