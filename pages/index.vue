<script setup>
    const boxes = [
        { 
            img: 'grafik_l2npuh.jpg', 
            headline: 'home.sectionTwo.boxOne.headline',
            text: 'home.sectionTwo.boxOne.text',
        },
        { 
            img: 'planing_vu13mo.jpg', 
            headline: 'home.sectionTwo.boxTwo.headline',
            text: 'home.sectionTwo.boxTwo.text',
            list: [
                'home.sectionTwo.boxTwo.list',
                'home.sectionTwo.boxTwo.list2',
                'home.sectionTwo.boxTwo.list3',
                'home.sectionTwo.boxTwo.list4',
                'home.sectionTwo.boxTwo.list5',
                'home.sectionTwo.boxTwo.list6',
                'home.sectionTwo.boxTwo.list7',
                'home.sectionTwo.boxTwo.list8',
                'home.sectionTwo.boxTwo.list9',
                'home.sectionTwo.boxTwo.list10',
                'home.sectionTwo.boxTwo.list11'
            ]
        },
        { 
            img: 'planing2_squdxd.jpg', 
            headline: 'home.sectionTwo.boxThree.headline',
            text: 'home.sectionTwo.boxThree.text' 
        },
    ]
</script>
<template>
    <section>
        <HeroComponent />
    </section>
    <section
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
        <div
        class="grid grid-cols-[100%] md:grid-cols-[60%,40%] gap-10"
        >
            <figure
                class="overflow-hidden shadow-xl rounded-3xl mb-10 md:mb-0"
            >
                <nuxt-img 
                    class="w-full h-full object-cover object-center"
                    src="group_pc69i6.jpg"
                    alt="team"
                />
            </figure>
            <div>
                <h2
                    class="text-xl md:text-2xl font-bold text-blue-900"
                >
                    {{
                        $t('home.sectionOne.headline')
                    }}
                </h2>
                <p
                    class="mt-5 text-gray-600"
                >
                    {{
                        $t('home.sectionOne.text')
                    }}
                </p>
                <p
                    class="mt-5 text-gray-600"
                >
                    {{
                        $t('home.sectionOne.text2')
                    }}
                </p>
                <p
                    class="mt-5 text-gray-600"
                >
                    {{
                        $t('home.sectionOne.text3')
                    }}
                </p>
            </div>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20"
        >
            <div
                v-for="(box, index) in boxes"
                :key="index"
                class="overflow-hidden shadow-xl rounded-3xl"
            >
                <figure>
                    <nuxt-img 
                        class="w-full h-full object-cover object-center"
                        :src="box.img"
                        alt="wood"
                    />
                </figure>
                <div
                    class="p-5"
                >
                    <h2
                        class="text-xl font-bold mb-5 text-blue-900"
                    >
                        {{
                            $t(box.headline)
                        }}
                    </h2>
                    <p class="text-gray-600">
                        {{
                            $t(box.text)
                        }}
                    </p>
                    <ul
                        v-if="box.list"
                        class="mt-5"
                    >
                        <li
                            v-for="(list, index) in box.list"
                            :key="index"
                            class="py-1 px-2 rounded-md"
                            :class="index % 2 === 0 ? 'bg-black/5' : ''"
                        >
                            {{
                                $t(list)
                            }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
