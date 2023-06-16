<script setup>
    const { locale } = useI18n()
    const nav = [
        { name: 'navbar.home', path: '/' },
        { name: 'navbar.company', path: '/company' },
        { name: 'navbar.service', path: '/service' },
        { name: 'navbar.more', path: '/more' },
        { name: 'navbar.references', path: '/references' },
        // { name: 'navbar.medium', path: '/medium' },
        { name: 'navbar.contact', path: '/contact' }
    ]
</script>
<template>
    <header
        class="bg-white py-8 px-8 flex justify-between items-center"
    >
        <nuxt-link 
            to="/"
            class="logo uppercase font-bold text-3xl tracking-widest"
        >
            Sambawood
        </nuxt-link>
        <nav
            class="flex gap-4 items-center navbar"
        >
            <ul
                class="flex gap-4"
            >
                <li v-for="(item, index) in nav" :key="index" class="uppercase font-bold">
                    <nuxt-link :to="item.path">
                        {{ $t(item.name) }}
                    </nuxt-link>
                </li>
            </ul>
            <form
                class="bg-blue-900 text-white px-4 py-1 rounded-full"
            >
                <select v-model="locale" class="uppercase bg-transparent outline:border-none focus:border-none active:border-none">
                    <option value="es">es</option>
                    <option value="de">de</option>
                    <option value="en">en</option>
                </select>
            </form>
        </nav>
    </header>
</template>

<style scoped>
    .logo {
        font-family: 'Poppins', sans-serif;
    }
    .navbar {
        font-family: 'Poppins', sans-serif;
    }
    .navbar .router-link-exact-active {
        @apply text-blue-900 font-bold;
    }
</style>