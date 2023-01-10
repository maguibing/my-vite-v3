<template>
  <NMessageProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </NMessageProvider>
</template>
