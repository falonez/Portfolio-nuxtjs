<template>
  <!-- <div
    class="bg-slate-600 mb-[20vh] px-[10%] py-[1.6rem] text-[2rem] flex justify-between"
  >
    <i class="devicon-javascript-plain colored"> Javascript</i>
    <i class="devicon-nuxtjs-plain colored"> Nuxt Js</i>
    <i class="devicon-nextjs-original colored"> Next Js</i>
    <i class="devicon-react-original colored"> React</i>
  </div> -->
  <div class="slider m-auto overflow-hidden relative shadow-lg">
    <div class="slide-track bg-slate-600 p-2 md:p-6">
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-typescript-plain colored text-xl md:text-3xl">
          TypeScript</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-nuxtjs-plain colored text-xl md:text-3xl"> Nuxt Js</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-nextjs-original colored text-xl md:text-3xl">
          Next js</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-react-original colored text-xl md:text-3xl">
          React Js</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-html5-plain colored text-xl md:text-3xl"> HTML</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-css3-plain-wordmark colored text-xl md:text-3xl">
          CSS</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-php-plain colored text-xl md:text-3xl"> PHP</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-nodejs-plain colored text-xl md:text-3xl"> Node Js</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-tailwindcss-plain colored text-xl md:text-3xl">
          Tailwind</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-sass-original colored text-xl md:text-3xl">SASS</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-typescript-plain colored text-xl md:text-3xl">
          TypeScript</i
        >
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-mysql-plain colored text-xl md:text-3xl"> Mysql</i>
      </div>
      <div class="w-[150px] md:w-[250px]">
        <i class="devicon-postgresql-plain colored text-xl md:text-3xl">
          Postgre</i
        >
      </div>
    </div>
  </div>
</template>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
</style>
