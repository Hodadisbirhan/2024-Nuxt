<template>
  <div class="max-w-7xl mx-auto px-3">
    <header class="flex flex-row justify-between py-3 items-center">
      <h1 class="text-3xl font-extrabold text-blue-900">Header</h1>

      <nav>
        <ul class="flex gap-7 text-sm font-normal text-gray-600">
          <li
            v-for="link in links"
            :key="link.value">
            <NuxtLink
              class="pb-1"
              :to="{ path: link.path }"
              :class="[
                getPath === link.path ? 'border-2 border-blue-700' : '',
              ]">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex gap-4">
        <NuxtLink
          :to="{ path: '/login' }"
          class="border-2 rounded-lg hover:border-blue-600 px-6 py-1 font-medium text-blue-700"
          >Login</NuxtLink
        >
        <NuxtLink
          :to="{ path: '/login' }"
          class="border-2 rounded-lg px-6 py-1 font-medium text-blue-700 hover:border-blue-600"
          >Signup</NuxtLink
        >
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup>
const links = ref([
  { name: "Home", value: "home", path: "/show" },
  { name: "About", value: "about", path: "/about" },
  { name: "Project", value: "project", path: "/project" },
]);

const route = useRoute();

const getPath = computed(() => {
  return route.path;
});
</script>
