<script setup>
    const footerMenus = [
        { name: 'footer.legal', path: '/imprint' },
        { name: 'footer.privacy', path: '/privacy-policy' }
    ]
</script>
<template>
    <footer
        class="bg-black text-white py-10"
    >
        <ul
            class="flex gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <li
                class="text-white/50"
            >
                Sambawood 2020
            </li>
            <li
                v-for="(menu, index) in footerMenus"
                :key="index"
            >
                <nuxt-link :to="menu.path">
                    {{ $t(menu.name) }}
                </nuxt-link>
            </li>
        </ul>
    </footer>
</template>