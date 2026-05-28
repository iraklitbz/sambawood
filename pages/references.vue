<script setup>
import { table } from '~/helper/table.ts'

const { t, locale } = useI18n()

const reverseTable = [...table].reverse()
const selectedCountries = ref([])
const openYears = ref({})

watch(locale, () => {
    selectedCountries.value = []
})

const flagMap = {
    'germany': '🇩🇪', 'deutschland': '🇩🇪', 'alemania': '🇩🇪',
    'spain': '🇪🇸', 'spanien': '🇪🇸', 'españa': '🇪🇸',
    'portugal': '🇵🇹',
    'italy': '🇮🇹', 'italien': '🇮🇹', 'italia': '🇮🇹',
    'switzerland': '🇨🇭', 'schweiz': '🇨🇭', 'suiza': '🇨🇭',
    'belgium': '🇧🇪', 'belgien': '🇧🇪', 'bélgica': '🇧🇪', 'belgica': '🇧🇪',
    'denmark': '🇩🇰', 'dänemark': '🇩🇰', 'dinamarca': '🇩🇰',
    'austria': '🇦🇹', 'österreich': '🇦🇹',
    'netherlands': '🇳🇱', 'niederlande': '🇳🇱', 'nederland': '🇳🇱',
    'holanda': '🇳🇱', 'países bajos': '🇳🇱', 'paises bajos': '🇳🇱',
    'kuwait': '🇰🇼',
    'czech republic': '🇨🇿', 'tschechien': '🇨🇿', 'república checa': '🇨🇿',
    'republica checa': '🇨🇿', 'tschechische republik': '🇨🇿',
}

const getFlag = (name) => flagMap[name.toLowerCase()] || '🏳️'

const uniqueCountries = computed(() => {
    const seen = new Set()
    const countries = []
    for (const row of table) {
        for (const item of row.list) {
            const name = t(item.country)
            if (!seen.has(name)) {
                seen.add(name)
                countries.push({ name, flag: getFlag(name) })
            }
        }
    }
    return countries.sort((a, b) => a.name.localeCompare(b.name))
})

const filteredTable = computed(() => {
    if (selectedCountries.value.length === 0) return reverseTable
    return reverseTable
        .map(row => ({
            ...row,
            list: row.list.filter(item => selectedCountries.value.includes(t(item.country)))
        }))
        .filter(row => row.list.length > 0)
})

function toggleCountry(name) {
    const idx = selectedCountries.value.indexOf(name)
    if (idx === -1) selectedCountries.value.push(name)
    else selectedCountries.value.splice(idx, 1)
}

function toggleYear(yearKey) {
    openYears.value[yearKey] = !openYears.value[yearKey]
}
</script>

<template>
    <div>
        <section class="bg-green-950 h-96 overflow-hidden relative">
            <h1 class="text-6xl uppercase font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {{ $t('references.headline') }}
            </h1>
            <nuxt-img
                class="w-full h-full object-cover object-center opacity-60"
                src="reference_cqh6le.jpg"
                alt="company" />
        </section>

        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <p class="text-gray-600 mb-10">
                {{ $t('references.sectionOne.text') }}
            </p>

            <ClientOnly>
                <!-- Country filter pills -->
                <div class="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div class="flex flex-wrap gap-2">
                        <button
                            @click="selectedCountries = []"
                            :class="selectedCountries.length === 0
                                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600 ring-offset-1'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'"
                            class="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                        >
                            {{ $t('references.filter.all') }}
                        </button>

                        <button
                            v-for="country in uniqueCountries"
                            :key="country.name"
                            @click="toggleCountry(country.name)"
                            :class="selectedCountries.includes(country.name)
                                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600 ring-offset-1'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'"
                            class="px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5"
                        >
                            <span class="text-base leading-none">{{ country.flag }}</span>
                            <span>{{ country.name }}</span>
                        </button>
                    </div>

                    <!-- Active filters summary -->
                    <div v-if="selectedCountries.length > 0" class="mt-3 flex items-center gap-2 text-xs text-gray-500">
                        <span class="text-blue-600 font-semibold">{{ selectedCountries.join(' · ') }}</span>
                        <button class="text-gray-400 hover:text-gray-700 font-bold leading-none" @click="selectedCountries = []">✕</button>
                    </div>
                </div>

                <!-- Year groups -->
                <div
                    v-for="row in filteredTable"
                    :key="row.list[0].year"
                    class="mt-6"
                >
                    <h2
                        class="font-bold mb-2 text-base md:text-xl transition-colors duration-200 p-1 px-2 rounded-md flex justify-between items-center cursor-pointer select-none"
                        :class="openYears[row.list[0].year] ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-black hover:bg-blue-200'"
                        @click="toggleYear(row.list[0].year)"
                    >
                        <span>{{ $t(row.list[0].year) }}</span>
                        <svg
                            class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                            :class="{ 'rotate-180': openYears[row.list[0].year] }"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </h2>

                    <Transition name="collapse">
                        <div v-if="openYears[row.list[0].year]">
                            <div
                                v-for="(item, key) in row.list"
                                :key="key"
                                class="flex gap-5 mb-2 text-sm md:text-lg px-2 py-1 rounded-md justify-between items-center"
                            >
                                <div class="font-bold flex-1">{{ $t(item.city) }}</div>
                                <div class="text-left flex-1 flex items-center gap-1.5">
                                    <span class="text-base leading-none">{{ getFlag($t(item.country)) }}</span>
                                    <span>{{ $t(item.country) }}</span>
                                </div>
                                <div class="text-left flex-1">{{ $t(item.work) }}</div>
                                <div class="text-left flex-1">{{ $t(item.proyect) }}</div>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- Empty state -->
                <div v-if="filteredTable.length === 0" class="text-center py-16 text-gray-400">
                    <div class="text-4xl mb-3">🔍</div>
                    <p class="text-lg font-medium">No results found</p>
                </div>
            </ClientOnly>
        </section>
    </div>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.35s ease, opacity 0.3s ease;
    max-height: 1000px;
    overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
