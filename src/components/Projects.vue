<script>
export default {
    name:"ProjectsPage",
    data() {
        return {
            projects:[
                { 
                    name:"feijoa", 
                    problem:"I am a huge fan of the roguelike genre and hunger to look out for more games like this to fulfil my craving, but none of them was picking up my interest. So, I decided to create my own. It was the biggest project I have ever invested my time learning about game development aspects.",
                    challenges:"I remember one of the most difficult challenges I faced was to create an enemy AI to track down the player in their field of view, attack them using a specific frame rate, and destroy them. However, the final boss is the crux of the matter because I have to code multiple attacks that trigger between intervals and regarding the player's distance. Another challenge is Pixel Arts. I need to represent a 3D object in a 2D environment. I even made my boss soundtrack that involves creativity and coherence challenges.",
                    solution:"To satisfy my thrive for the roguelike genre,  I added all the desired elements to my game without reinventing the wheel. Also, I adjust the difficulty as the belligerent gamer I am.", 
                    video: { title:"2D Roguelike Platformer" , source:"project-feijoa" ,download:"https://drive.google.com/file/d/1xsi5Ing6R0DnXkL6WoqnMjplTMqlhoCP/view?usp=share_link"},
                    technologies: ["Unity","Visual Studio Code", "Gimp","Soundtrap","Git","Microsoft To Do"],
                },
                { 
                    name:"magicbox", 
                    problem:"Do you know \"Spin The Wheel \" ? This website suggests to users what activities to do by spinning the wheel. My problem with this app is the fact there is no ounce of adrenalin when you use it because you can see all outcomes and do not feel any excitement when you get an activity to do.",
                    challenges:"",
                    solution:"So, to remediate this issue, I put a little twist by creating a magic box inspired by \"Magic Ball 8\", a touch of a slot machine and \"Super Mario\". As a result, when you use this mysterious box, you will not know any outcomes in advance. Also, when the user earns a prize, this one feels rewarded whether the result is positive or negative.", 
                    video:{ title:"The Magic Box - don't know what to do ? spin that little box" , source:"project-feijoa", download:"" },
                    technologies: ["React","NextJS", "HTML5","CSS3", "Visual Studio Code","Git","Microsoft To Do"],
                },
                { 
                    name:"easyorder", 
                    problem:"At my workplace, I noticed new staff are always confused when it is time to take orders because the system is not friendly to users. So, I decided to tackle down this issue.",
                    challenges:"The data structure was the most challenging task of this project because it has many different data types. For example, drinks can be served with ice, without alcohol, in a bottle or glass, etc. Then come to set the environment, I needed to be able to run both the MongoDB serverless and the VUE app together. Also, the process of thinking how to simplify the user experience at its edge. Lastly, create a PDF that takes the table HTML when you print the invoice.",
                    solution:"To address this issue, I remove most of the complexity when ordering to build a more friendly user environment. Also, add more visual elements to guide the user. Moreover, I change the order when you send an order. For instance, on their system, it requires to choose a table number first and then order. In my designing app, you can order first, then send it and vice versa.", 
                    video:{ title:"EasyOrder" , source:"project-feijoa", download:"https://github.com/mikemaoche/easyorder" },
                    technologies: ["React","NextJS", "MongoDB", "HTML5","CSS3","TailwindCSS", "Visual Studio Code","Git","Microsoft To Do"],
                }
            ],
            index:0,
            previousIndex:0,
            url: '',
            loading: false,
            isClick: false
        }
    },
    methods: {
        handleClick (e) {
            this.index = e.target.id - 1;
            if(e.target.id - 1 !== this.previousIndex) {
                this.loading = true;
                this.UpdateVideoLink()
                const video = document.getElementById('videos')
                let duration = video.duration;
                const loadingBar = document.getElementById("loading-bar");
                loadingBar.style.width = "0%";
                let progress = 0;
                let buffer = 0;
                const uploading = setInterval(() => {
                    if (video.buffered.length > 0) { buffer = video.buffered.end(0) }
                    progress = (buffer / duration) * 100;
                    console.log(progress);
                    if (progress >= 1) { // 1% of data ready then show
                        loadingBar.style.width = "100%"; 
                        setTimeout(() => {
                            this.loading = false;
                        },1500)
                        clearInterval(uploading)
                    } else {
                        loadingBar.style.width = progress + "%"; 
                    }
                }, 100);
            }
            this.previousIndex = this.index;
        },
        UpdateVideoLink() {
            this.url = require(`../videos/${this.projects[this.index].video.source}.mp4`)
        }
    },
    mounted() {
        this.UpdateVideoLink();
    }
}
</script>

<template>
    <div id="projects-page" class="relative z-[98] bg-gradient-to-b from-white via-purple-200 to-white text-center md:text-left  min-h-screen">
        <!-- container -->
        <div class="md:w-10/12 md:mx-auto md:p-10 p-2">
            <p class="text-4xl bold">Projects</p>
            <p class="text-slate-400">Why not giving a shot and test out my projects ? 😉</p>
            <!-- list of projects -->
            <div>
                <ul class="grid grid-cols-2 md:flex md:flex-row leading-relaxed justify-center ...">
                    <li>
                        <button id="1" @click.stop="(e) => handleClick(e)" class="bg-white block border border-2 m-4 p-4 text-center focus:animate-slowbounce hover:text-pink-400 hover:border-pink-400">
                            <img class="pointer-events-none w-32 h-32" src="../images/feijoa.png" alt="" > Feijoa
                        </button>
                    </li>
                    <li>
                        <button id="2" @click.stop="(e) => handleClick(e)" class="bg-white block border border-2 m-4 p-4 text-center focus:animate-slowbounce hover:text-pink-400 hover:border-pink-400">
                            <img class="pointer-events-none w-32 h-32" src="../images/laptop.png" alt=""> MagicBox
                        </button>
                    </li>
                    <li>
                        <button id="3" @click.stop="(e) => handleClick(e)" class="bg-white block border border-2 m-4 p-4 text-center focus:animate-slowbounce hover:text-pink-400 hover:border-pink-400">
                            <img class="pointer-events-none w-32 h-32" src="../images/tequila-sunrise.png" alt=""> EasyOrder
                        </button>
                    </li>
                </ul>
                <!-- project details -->
                <div class="md:w-4/6 bg-white mx-auto my-4 border border-2 ">
                    <div>
                        <p class="text-xl font-bold uppercase m-2 p-2">{{ projects[index].video.title }}</p>
                        <video id="videos" v-show="!loading" :key="url" class="w-full p-1" controls>
                            <source :src="url" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div v-show="loading" class="w-4/12 mx-auto">
                            <p class="text-center">loading ... </p>
                            <div class="w-full h-4 bg-gray-200">
                                <div id="loading-bar" class="h-full bg-green-500 transition-all duration-500"></div>
                            </div>
                        </div>
                        <div class="m-2 p-2">
                            <p class="text-xl font-bold">Problem Encounter</p>
                            <p>{{ projects[index].problem }}</p>
                        </div>
                        <div class="m-2 p-2">
                            <p class="text-xl font-bold">What Challenges I Faced During The Development?</p>
                            <p>{{ projects[index].challenges }}</p>
                        </div>
                        <div class="m-2 p-2">
                            <p class="text-xl font-bold">Solution</p>
                            <p>{{ projects[index].solution }}</p>
                        </div>
                        <div class="m-2 p-2">
                            <p class="text-xl font-bold">Technologies used</p>
                            <ul class="border p-2">
                                <template v-for="(item) in projects[index].technologies" v-bind:key="item.id">
                                    <li>{{ item }}</li>
                                </template>
                            </ul>
                        </div>
                        <!-- download button -->
                        <div class="max-w-full m-2 p-2">
                            <a :href="`${projects[index].video.download}`" class="block md:w-3/12 p-2 text-center border border-2 border-pink-100 bg-pink-600 text-white uppercase hover:bg-pink-400" target="_blank" role="button">download</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="bg-white my-4 p-2 border border-2 border-pink-400">
                <p class="text-lg font-bold">Favourite Tech Stacks</p>
                <div class="grid grid-cols-4 md:flex space-x-1">
                    <img class="w-16" src="../images/js-logo.png" alt="JavaScript logo">
                    <img class="w-16" src="../images/html-logo.png" alt="HTML logo">
                    <img class="w-16" src="../images/css-logo.png" alt="CSS3 logo">
                    <img class="w-16" src="../images/sql-logo.png" alt="SQL logo">
                    <img class="w-16" src="../images/react-logo.png" alt="React logo">
                    <img class="w-16" src="../images/csharp-logo.png" alt="C# logo">
                    <img class="w-16" src="../images/php-logo.png" alt="PHP logo">
                    <img class="w-16" src="../images/node-logo.png" alt="NodeJS logo">
                </div>
            </div>
            <div class="text-center md:text-left">
                    <p class="text-slate-400">Find more source codes via</p>
                    <div class="flex justify-center md:justify-start space-x-4 mt-2">
                        <a class="flex text-xl hover:border-pink-400 space-x-2 border border-2 p-2" href="https://github.com/mikemaoche" role="button" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                fill="currentColor"
                                style="color: #333"
                                viewBox="0 0 24 24">
                                <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <p> GitHub </p>
                        </a>
                    </div>
                </div>
        </div>
    </div>
</template>