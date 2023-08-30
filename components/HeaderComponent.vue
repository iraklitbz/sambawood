<script setup>
    const { locale, locales, setLocale } = useI18n()
    const nav = [
        { name: 'navbar.home', path: '/' },
        { name: 'navbar.company', path: '/company' },
        { name: 'navbar.service', path: '/service' },
        { name: 'navbar.more', path: '/more' },
        { name: 'navbar.references', path: '/references' },
        // { name: 'navbar.medium', path: '/medium' },
        { name: 'navbar.contact', path: '/contact' }
    ]
    const availableLocales = computed(() => {
        return (locales.value).map((item) => {
            return {
                value: item.code,
                label: item.label,
                name: item.name
            }
        })
    })
</script>
<template>
    <header
        class="bg-white py-4 md:py-8 md:px-8 md:flex justify-between items-center"
    >
        <nuxt-link 
            to="/"
            class="logo uppercase font-bold text-3xl tracking-widest text-center block"
        >
            Sambawood
        </nuxt-link>
        <nav
            class="md:flex gap-4 items-center navbar mt-5 md:mt-0"
        >
            <ul
                class="flex gap-4 h-10 md:h-auto overflow-x-auto w-full relative z-50"
            >
                <li v-for="(item, index) in nav" :key="index" class="uppercase font-bold whitespace-nowrap md:whitespace-normal">
                    <nuxt-link :to="item.path">
                        {{ $t(item.name) }}
                    </nuxt-link>
                </li>
            </ul>
            <ul
                class="flex items-center justify-center md:justify-end gap-2 ml-7 mt-5 md:mt-0"
            >
                <li
                    v-for="(localeItem, index) in availableLocales"
                    :key="index"
                >
                    <button
                        type="button"
                        @click="() => setLocale(localeItem.value)"
                        class="p-1 rounded-md"
                        :class="{
                            'bg-blue-900 text-white font-bold': localeItem.value === locale,
                            'text-gray-500': localeItem.value !== locale
                        }"
                    >
                        {{ localeItem.label }}
                    </button>
                </li>
            </ul>
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