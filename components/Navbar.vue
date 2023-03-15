<template>
  <div
    class="flex justify-between items-center px-[10%] py-8 fixed w-screen top-0 left-0 right-0 text-white dark:bg-slate-600 bg-blue-500 z-20"
  >
    <nuxt-link
      to="/"
      class="text-[1rem] md:text-2xl dark:text-teal-300 text-white"
      >Fathan Mubarok</nuxt-link
    >
    <label
      for="checkbullet"
      class="bg-blue-800 w-20 h-8 rounded-3xl items-center flex relative opacity-0 md:opacity-100"
    >
      <input
        class="opacity-0"
        type="checkbox"
        id="checkbullet"
        name="bullet"
        value="Bike"
      />
      <div id="bullet" class="w-5 h-5 bg-black rounded-3xl"></div>
    </label>
    <div
      class="text-2xl md:text-4xl dark:text-teal-300 text-white flex items-center space-x-2"
    >
      <a href="https://github.com/falonez"><Icon name="mdi:github" /></a>
      <a href="https://www.linkedin.com/in/fathan-mubarok-2597171b5/"
        ><Icon name="mdi:linkedin"
      /></a>
      <a href="https://www.instagram.com/falonez15/"
        ><Icon name="mdi:instagram"
      /></a>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  console.log("Navbar Mounted");
  console.log(document);
  const checkbullet = document.getElementById("checkbullet");
  const html = document.querySelector("html");
  checkbullet.addEventListener("change", () => {
    if (checkbullet.checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  });
});
</script>

<style>
#checkbullet:checked,
#bullet {
  margin-right: 20px;
}
</style>
