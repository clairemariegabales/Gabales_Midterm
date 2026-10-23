<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">

                <div class="flex items-center space-x-3">
                    <a href="#hero" class="flex items-center space-x-3 group" @click="closeMobileMenu">
                        <!-- Direct path to public/assets/cpu_logo.jpg -->
                        <img src="/assets/cpu_logo.jpg" alt="Central Philippine University Logo"
                            class="w-12 h-12 object-contain rounded-full border-2 border-amber-500/30 group-hover:scale-105 transition-transform duration-300" />
                        <div class="flex flex-col">
                            <span class="font-extrabold text-lg tracking-wide text-white group-hover:text-amber-400 transition-colors">
                                CPU CCS
                            </span>
                            <span class="text-xs text-amber-400/90 font-medium tracking-wider">
                                COLLEGE OF COMPUTER STUDIES
                            </span>
                        </div>
                    </a>
                </div>

                <!-- Navigation Links using standard href for smooth scroll -->
                <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
                    <a href="#hero"
                        class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-all">
                        Home</a>
                    <a href="#programs"
                        class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-all">
                        Programs Offered</a>
                    <a href="#faculty"
                        class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-all">
                        Faculty & Staff</a>
                    <a href="#partnerships"
                        class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-all">
                        Partnerships</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleMobileMenu" type="button"
                        class="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </nav>
</template>