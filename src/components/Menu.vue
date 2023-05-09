<template>
    <div :class="isScrolling ? 'fixed md:text-xl bg-slate-700 text-white px-2' : 'relative md:text-2xl bg-slate-100 py-4'" 
        class="z-[100] transition-all duration-300 ease-in top-0  text-4xl w-full font-medium leading-relaxed md:flex md:items-center justify-between ..." >
        <!-- logo -->
        <div class="flex items-center justify-between space-x-2 m-2 md:m-0">
            <span class="p-2 transition-all duration-500 ease-in hover:text-green-500 uppercase font-bold text-xl">
                <a class="flex" href="#">
                    <img src="../images/logo.png">code shaker
                </a>
            </span>
            <span :class="windowWidth < 624 ? 'hidden' : 'block'" class=" cursor-default">|</span>
            <span :class="windowWidth < 624 ? 'hidden' : 'block'" class=" cursor-default"><p class="text-sm md:text-xl dark:text-slate-400">By codewithmiky</p></span>
            <!-- hamburger icon -->
            <div id="burger" @click.stop="(e) => toggleMenu(e)" :class="windowWidth < 624 ? 'block' : 'hidden'" class="hamburger flex flex-col items-center justify-center space-y-1 p-4" role="button">
                <span class="block rounded-full w-8 h-1 bg-gray-400"></span>
                <span class="block rounded-full w-8 h-1 bg-gray-400"></span>
                <span class="block rounded-full w-8 h-1 bg-gray-400"></span>
            </div>
        </div>
        <!-- menu items -->
        <ul class="list-none">
            <template :class="this.toggle ? 'flex' : windowWidth < 624 ? 'hidden' : 'flex'">
                <div class="flex flex-col md:flex-row w-full text-right m-2 p-2">
                    <li><a href="#" class="m-2 p-2 hover:text-green-500">Home</a></li>
                    <li><a href="#experience-page" class="m-2 p-2 hover:text-green-500">About</a></li>
                    <li><a href="#projects-page" class="m-2 p-2 hover:text-green-500">Work</a></li>
                    <li><a href="#contact-page" class="m-2 p-2 hover:text-green-500">Contact</a></li>
                </div>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name:"MenuPage",
    data() {
        return {
            offsetTop: 0,
            isScrolling: false,
            toggle:false,
            windowWidth: window.innerWidth
        }
    },
    methods: {
        handleScroll () {
            this.isScrolling = window.scrollY > 0;
        },
        onResize() {
            this.windowWidth = window.innerWidth
        },
        toggleMenu(e) {
            if(e.target.id == 'burger'|| (e.target.tagName === 'SPAN' && e.target.parentNode.id == 'burger')) {
                const hamburger = document.querySelector('.hamburger');
                hamburger.classList.toggle('transform');
                this.toggle = !this.toggle;
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.toggleMenu);
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', this.toggleMenu);
        window.removeEventListener('resize', this.onResize); 
    }
}
</script>