<script setup>
    const { locale, locales, setLocale } = useI18n()
    const switchLocalePath = useSwitchLocalePath()
    const localePath = useLocalePath()
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
    function handleLanguage (value) {
        navigateTo(switchLocalePath(value))
    }
</script>
<template>
    <header
        class="bg-white py-4 lg:flex justify-between items-center"
    >
        <nuxt-link
            :to="localePath('/', locale)"
            class="shrink-0 overflow-hidden relative block"
            style="width:160px; height:24px;"
            aria-label="Sambawood"
        >
            <img
                src="~/assets/logo.svg"
                alt="Sambawood"
                class="absolute"
                style="width:160px; top:-14px;"
            />
        </nuxt-link>
        <nav
            class="lg:flex gap-3 items-center navbar mt-4 lg:mt-0"
        >
            <ul
                class="flex gap-3 h-10 lg:h-auto overflow-x-auto lg:overflow-visible w-full relative z-50"
            >
                <li v-for="(item, index) in nav" :key="index" class="uppercase font-bold whitespace-nowrap text-sm">
                    <nuxt-link
                        v-if="item.path !== '/references'"
                        :to="localePath(item.path, locale)"
                    >
                        {{ $t(item.name) }}
                    </nuxt-link>
                    <a
                        v-else
                        :href="localePath(item.path, locale)"
                    >
                        {{ $t(item.name) }}
                    </a>
                </li>
            </ul>
            <ul
                class="flex items-center justify-center lg:justify-end gap-2 ml-4 mt-4 lg:mt-0"
            >
                <li
                    v-for="(localeItem, index) in availableLocales"
                    :key="index"
                >
                    <button
                        type="button"
                        @click="() => handleLanguage(localeItem.value)"
                        class="p-1 rounded-md"
                        :class="{
                            'bg-black text-white font-bold': localeItem.value === locale,
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