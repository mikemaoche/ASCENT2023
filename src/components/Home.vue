<template>
  <!-- body -->
  <div class="animate-fog" ></div>
  <div class="wrapper">
    <section class="parallax">
      <img class="ices-stock" src="../images/ice-stocks.png" alt="">
      <img class="aperol" src="../images/aperol-spritz.png" alt="">
      <!-- <img class="ice-cubes" src="../images/ice-cubes.png" alt=""> -->
    </section>

    <!-- home  -->
    <div id="home-page" class="font-serif dark:text-slate-800 ">
        <!-- navbar -->
        <Menu />
        <div class="flex min-h-screen">
          <!-- title -->
          <div class="md:relative md:w-8/12 md:m-auto p-4 border border-gray-900 border-t-0 border-b-[12px] border-l-0 border-r-0 ">
            <div class=" md:w-5/12 absolute bottom-[1%] md:bottom-0 right-0">
              <img src="../images/bartender.gif" alt="">
            </div>
            <div class="bg-white border border-2 p-4 md:w-1/2 mx-auto">
              <p class="sm:text-sm md:text-xl lg:text-5xl font-bold text-center m-2">Front-End Developer👋</p>
              <div class="flex justify-center">
                <div class="w-11/12 text-center">
                  <p class="logo dark:text-slate-400">Hi, I am Mike. A developer that comes with hospitality experience based in New Zealand, Auckland.</p>
                </div>
              </div>
              <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mt-4">
                <!-- Github -->
                  <a href="https://github.com/mikemaoche" class="border border-2 p-2 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-110" target="_blank" role="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mx-auto h-7 w-7"
                        fill="currentColor"
                        style="color: #333"
                        viewBox="0 0 24 24">
                        <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
    
                <!-- Linkedin -->
                <a href="https://github.com/mikemaoche" class="border border-2 p-2 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-110" target="_blank" role="button">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mx-auto h-7 w-7"
                          fill="currentColor"
                          style="color: #0077b5"
                          viewBox="0 0 24 24">
                          <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                  </a>
                </div>
              </div>
          </div>
      </div>
    </div>
    <Experience />
    <Projects />
    <Contact margin="my-3" />
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components : {
    Menu,
    Experience,
    Projects,
    Contact,
  },
}
</script>



<style scoped>
@media (min-width: 1024px) {
}
</style>
