<script setup>
    import { table } from '~/helper/table.ts';
    const { locale } = useI18n()
    const reverseTable = table.reverse()
    watch(locale, () => {
        reverseTable.value = table.reverse()
    })
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
                    <div>
                        <div
                            v-for="(row, index) in reverseTable"
                            :key="index"
                            class="mt-10"
                        >
                            <h2
                                class="font-bold text-black mb-2 text-base md:text-xl bg-blue-100 p-1 px-2 rounded-md"
                            >
                                {{
                                    $t(row.list[0].year)
                                }}
                            </h2>
                            <div
                                v-for="(item, key) in row.list"
                                :key="item.year"
                                class="flex gap-5 mb-2 text-sm md:text-lg px-2 py-1 rounded-md justify-between items-center"
                            >
                                <div
                                    class="font-bold flex-1"
                                >
                                    {{
                                        $t(item.city)
                                    }}
                                </div>
                                <div
                                    class="text-left flex-1"
                                >
                                    {{
                                        $t(item.country)
                                    }}
                                </div>
                                <div
                                    class="text-left flex-1"
                                >
                                    {{
                                        $t(item.work)
                                    }}
                                </div>
                                <div
                                    class="text-left flex-1"
                                >
                                    {{
                                        $t(item.proyect)
                                    }}
                                </div>
                            </div>
                           
                        </div>
                    </div>
            </section>
    </div>
</template>
