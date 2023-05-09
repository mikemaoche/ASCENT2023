<script>
export default {
    name: "ExperiencePage",
    data() {
        return { 
            history:[
                { 
                    id:1,
                    link:"cegep",
                    web:"https://www.cvm.qc.ca/",
                    year:2016, 
                    description:"Graduated student in Computer Science in Montreal, Canada.",
                    readmore:{duration:3, place:"Cegep du Vieux Montreal" ,description:"During my time there, I faced several challenges as a student but also, as an individual that just left his nest. I arrived in 2013 when I just turned out 18. Programming was new to me. The life there too. From the start, everything was a hardship. However, with all of these experiences, I learnt to be more independent and resourceful.", 
                    otherActivity:"Acquired fundamentals of OOP, data structures, sorting algorithms, basics of encrypting and decrypting data, patterns, and Web Development."}
                },
                {
                    id:2,
                    link:"dominion",
                    web:"https://www.languagecourse.net/school-dominion-english-schools-auckland.php3",
                    year:2019,
                    description:"English student in Auckland CBD, New Zealand.",
                    readmore:{duration:1, place:"Dominion School", description:"One of the most enjoyable years that happen to me, it was a year where I improved my English by far and grew more as a person. Networking with different people from different cultures was a unique and unforgettable experience.", otherActivity:"Passed the IELTS academic exam and scored 6.5 overall"}
                },
                {
                    id:3,
                    link:"tasman",
                    web:"https://www.tasman.ac.nz/",
                    year:2021, 
                    description:"Graduated student in ICT in Auckland CBD, New Zealand.",
                    readmore:{duration:1, place:"Tasman Academy", 
                    description:"This year was a real challenge for me because I had to adapt and learn as much as I can in a fast pace environment. Computing network was not my predilection field so I didn't feel comfortable. Although when I've finally done with it, I feel more aware on how to resolve incidents, protect data in cybersecurity, administrate permissions to users, solve network issues that may arise, and analyze and report network traffics.", 
                    otherActivity:"Obtained Barista Certification at The Barista Acadamy NZ "}
                },
                {
                    id:4,
                    link:"scottphs",
                    web:"https://www.scottphs.com/",
                    year:2022, 
                    description:"JS developer Independent Contractor at ScottPHS",
                    readmore:{duration:"half", place: "Scott PHS", description:"Focus on palletising system solution using web technologies such as PUG and ExpressJS. Follow the nz standards pallet protocols. Enhance the UI/UX experience. Query and serve the data to the clients. Implement functionalities to read conventional barcodes.", 
                    otherActivity:"Move to another a workplace called Portofino."}
                },
                {
                    id:5,
                    link:"portofino",
                    web:"https://www.portofino.co.nz/viaduct-auckland/",
                    year:"now", 
                    description:"Bartender/Barista position in Auckland CBD, New Zealand.",
                    readmore:{duration:1, place: "Portofino Viaduct", description:"Working in an Italian restaurant. I team up with front house staff to prepare and deliver a large panel of beverages, serve and look after customers' satisfaction, follow safety protocols according to the liquor act, inventory management, and handle money transactions.", 
                    otherActivity:"N/A"}
                },
            ],
            index:0,
            readMoreActive:false,
        }
    },
    methods: {
        handleClick (e) {
           this.index = e.target.id - 1;
           this.readMoreActive = false;
        },
        handleReadMore(e) {
            if(e.target.value) this.readMoreActive = true;
        }
    },
    mounted () {
        this.index = this.history.length - 1 // Get the last item of the history
    },

    unmounted () {
    },
}
</script>

<template>
    <div id="experience-page" class="relative z-[99] bg-gradient-to-b from-sky-400 to-white text-white min-h-screen">
        <img class="mojito" src="../images/mojito.png" alt="">
        <!-- layout experience -->
        <div class="md:w-10/12 md:mx-auto md:p-10 p-2 text-center md:text-left">
            <p class="text-4xl">About Me</p>
            <p class="dark:text-slate-200">Tired of reading? Take a glance at my story in a visual way!</p>
            <!-- step bar -->
            <div class="md:w-3/4 md:mx-auto md:mt-2 md:p-4">
                <!-- container to center the step bar -->
                <!-- child represents one dot on the step bar -->
                <div class="flex justify-center items-center m-2 p-2"> 
                    <template v-for="(item,i) in history" v-bind:key="item.id">
                        <div v-if="i !== 0 " :class="index >= i ? 'bg-green-200' : 'bg-slate-200'" class="w-1/6 rounded-full h-2 mb-6 mx-1"></div>
                        <div class="flex flex-col">
                            <div :id="item.id" @click.stop="(e) => handleClick(e)" :class="index == i ? 'animate-pulse bg-green-100' : index >  i ? 'bg-green-300' : 'bg-slate-300'" 
                                 class="w-7 h-7 mx-auto rounded-full hover:cursor-pointer">
                            </div>
                            <p class="text-center">{{ item.year }}</p>
                        </div>
                    </template>
                </div>
                <!-- history layout skills -->
                <div class="flex flex-col lg:flex-row justify-center">
                    <template v-if="history && history.length > 0">
                        <div :class="readMoreActive ? 'grow card-exp transition-all' : 'w-full'" class="md:m-4">
                            <div class="">
                                <img class="w-full" :src="require(`../images/${history[index].link}.png`)" alt="">
                                <div class="p-2 text-center text-black bg-white">
                                    <p class="text-xl font-bold uppercase">{{ history[index].year }}</p>
                                    <p>{{ history[index].description }}</p>
                                    <button 
                                        @click.stop="(e) => handleReadMore(e)"
                                        value="read"
                                        :class="readMoreActive ? 'bg-gray-200 focus:bg-gray-200 cursor-not-allowed ' : 'bg-red-800 hover:bg-red-700'"
                                        class="inline-block rounded w-full md:w-32 h-12 uppercase text-white text-lg lg:m-2 p-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div id="container-readmore" :class="readMoreActive ? 'flex scale-in' : ' hidden'" class=" lg:w-1/3 m-4 items-stretch" 
                        >
                        <div class="p-2 text-black bg-white w-full">
                            <p class="text-xl font-bold uppercase text-red-600 bg-slate-200 p-2 m-2">more about {{ history[index].year }}</p>
                            <div class="flex flex-col m-2 p-2 space-x-1">
                                <p class="font-bold">Duration:</p>
                                <p>{{ history[index].readmore.duration }} year(s)</p>
                            </div>
                            <div class="flex flex-col m-2 p-2">
                                <p class="font-bold">Business/Establishment:</p>
                                <a :href="`${history[index].web}`" class="text-green-500 hover:text-green-400" target="_blank">{{ history[index].readmore.place }}</a>
                            </div>
                            <div class="flex flex-col m-2 p-2">
                                <p class="font-bold">Description</p>
                                <p>{{ history[index == -1 ? history.length-1 : index].readmore.description }}</p>
                            </div>
                            <div class="flex flex-col m-2 p-2">
                                <p class="font-bold">Other</p>
                                <p>{{ history[index].readmore.otherActivity }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>