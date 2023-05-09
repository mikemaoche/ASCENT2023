<script>
export default {
    name:"ContactPage"
}
</script>

<template>
    <!-- main layout -->
    <div id="contact-page" class="relative z-[99] bg-slate-700 text-white p-2 ...">
        <!-- sub layouts -->
        <div class="">
            <div class="">
                <div class="text-center p-2 m-2">
                    <p class="text-xl">Thanks for your time,</p>
                    <p>Feel free to hit me up via</p>
                </div>
                <!-- social media -->
                <div class="p-2 m-2">
                    <!-- phone -->
                    <div class="flex flex-row space-x-2 justify-center">
                        <a href="tel:64-021-078-7288">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="color: #22c55e" class="w-7 h-7 hover:stroke-green-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </a>
                        <a class="hover:text-green-500"  href="tel:64-021-078-7288">(+64) 021 078 7288</a>
                    </div>
                    <!-- email -->
                    <div class="flex flex-row space-x-2 justify-center">
                        <a href="mailto: mike.maoche@outlook.com">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="color: #ef4444" class="w-7 h-7 hover:stroke-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <a class="hover:text-green-500" href="mailto: mike.maoche@outlook.com">mike.maoche@outlook.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>