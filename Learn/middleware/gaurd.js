export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.name);
  console.log(from.name);
  if (to.name === "admin") {
    if (from.name === "index") {
      return true;
    } else {
      return navigateTo({ name: "index" });
    }
  }
});
