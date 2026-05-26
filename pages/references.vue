<script setup>
    import { table } from '~/helper/table.ts';
    const reverseTable = table.reverse()

    const openYears = ref({})

    function toggleYear(index) {
        openYears.value[index] = !openYears.value[index]
    }
</script>
<template>
    <div>
        <section
            class="bg-green-950 h-96 overflow-hidden relative"
            >
                <h1
                        class="text-6xl uppercase font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                    {{
                        $t('references.headline')
                    }}
                </h1>
                <nuxt-img
                    class="w-full h-full object-cover object-center opacity-60"
                    src="reference_cqh6le.jpg"
                    alt="company" />
            </section>
            <section
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
                <p class="text-gray-600">
                    {{
                        $t('references.sectionOne.text')
                    }}
                </p>
                    <ClientOnly>
                        <div
                            v-for="(row, index) in reverseTable"
                            :key="index"
                            class="mt-10"
                        >
                            <h2
                                class="font-bold mb-2 text-base md:text-xl transition-colors duration-200 p-1 px-2 rounded-md flex justify-between items-center cursor-pointer select-none"
                                :class="openYears[index] ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-black hover:bg-blue-200'"
                                @click="toggleYear(index)"
                            >
                                <span>{{ $t(row.list[0].year) }}</span>
                                <svg
                                    class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                                    :class="{ 'rotate-180': openYears[index] }"
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
                                <div v-if="openYears[index]">
                                    <div
                                        v-for="(item, key) in row.list"
                                        :key="item.year"
                                        class="flex gap-5 mb-2 text-sm md:text-lg px-2 py-1 rounded-md justify-between items-center"
                                    >
                                        <div class="font-bold flex-1">{{ $t(item.city) }}</div>
                                        <div class="text-left flex-1">{{ $t(item.country) }}</div>
                                        <div class="text-left flex-1">{{ $t(item.work) }}</div>
                                        <div class="text-left flex-1">{{ $t(item.proyect) }}</div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </ClientOnly>
            </section>
    </div>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: 800px;
    overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
