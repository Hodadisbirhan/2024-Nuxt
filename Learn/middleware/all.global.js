export default defineNuxtRouteMiddleware((to, from) => {
  console.log("first Globale is Moved Fordw");
  console.log(to.name);
  console.log(from.name);
  if (to.name === "s") {
    if (from.name === "index") {
      return true;
    } else {
      return navigateTo({ name: "index" });
    }
  }
});
