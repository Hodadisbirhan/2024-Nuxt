<script setup>
definePageMeta({
  layout: "custom",
});
const { data, error } = useFetch("http://localhost:8080/show", {
  method: "get",
});
</script>

<template>
  <section class="flex bg-slate-100 my-4 rounded-3xl relative">
    <div
      class="absolute right-[10%] top-1/2 rounded-full bg-blue-900 w-5 h-4"></div>

    <div
      class="absolute left-[40%] bottom-7 rounded-full bg-blue-200 w-5 h-4"></div>
    <div class="flex">
      <div class="basis-1/2 relative pl-20 pt-24">
        {{ data }}
        <h1
          class="font-bold text-blue-700 text-6xl leading-[1.15] relative animate-slideDown duration-700">
          Join the world<br />
          Largest Startup <br />

          Community

          <div
            class="absolute right-0 -top-0 rounded-full bg-blue-500/50 w-5 h-4"></div>
        </h1>
        <p class="font-medium text-gray-600 mt-3 text-xl">
          Experience The Startup Ecosystem Investment
        </p>
        <p class="font-medium text-gray-600 mt-3 text-xl">
          Get Started the Home with This like
        </p>
        <div class="mt-16">
          <NuxtLink
            :to="{ path: '/login' }"
            class="rounded-full font-medium px-7 py-4 border border-blue-600 hover:text-white hover:border-blue-900 hover:bg-blue-900">
            Get Start
          </NuxtLink>
        </div>
      </div>
      <div
        class="flex absolute right-0 top-[60%] hover:scale-110 duration-300 z-40 cursor-pointer p-2 items-center rounded-full gap-2 bg-white h-fit">
        <div class="p-2 h-11 w-11 bg-gradient-to-br from-red-100">
          <img
            src="/heart.png"
            alt="heart icon" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="random User"
          class="w-14 h-14 rounded-full" />
        <p class="text-lg w-full font-medium text-gray-600 mx-4">
          <span class="font-bold text-blue-600">Micky </span> has Liked <br />
          this community
        </p>
      </div>
      <div class="basis-1/2 overflow-hidden relative lg:block">
        <img
          src="/hod.png"
          class="h-full object-cover"
          alt="My Image" />
      </div>
    </div>
  </section>
</template>
