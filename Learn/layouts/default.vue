<template>
  <div :class="[$colorMode.preference === 'dark' ? 'dark' : '']">
    <NuxtLoadingIndicator />
    <slot></slot>
  </div>
</template>

<script setup>
let theme = ref("light" | "dark");
const setThemePereference = (newTheme) => {
  useColorMode().preference = newTheme;
};
useHead({
  title: "2024 Learning",
  meta: [{ content: "All Ethiopian Job In One Place", name: "description" }],
  link: [{ rel: "icon", href: "/favicon.svg" }],
});
</script>
