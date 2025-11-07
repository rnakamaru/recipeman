<script setup lang="ts">
</script>

<template>
  <div id="app-container">
    <header>
      <h1>献立提案アプリ</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
