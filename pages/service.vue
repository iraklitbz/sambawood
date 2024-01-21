<script setup>
    const list = [
        {  name: 'services.sectionOne.list'},
        {  name: 'services.sectionOne.list2'},
        {  name: 'services.sectionOne.list3'}
    ]
    const services = [
        {  
            headline: 'services.sectionTwo.boxOne.headline',
            image: '1_ucyr4i.jpg',
            list: [
                'services.sectionTwo.boxOne.list',
                'services.sectionTwo.boxOne.list2'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxTwo.headline',
            image: '2_jriqxj.jpg',
            list: [
                'services.sectionTwo.boxTwo.list',
                'services.sectionTwo.boxTwo.list2',
                'services.sectionTwo.boxTwo.list3'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxThree.headline',
            image: '3_tmnkej.jpg',
            list: [
                'services.sectionTwo.boxThree.list',
                'services.sectionTwo.boxThree.list2'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxFour.headline',
            image: '4_nlerb5.jpg',
            list: [
                'services.sectionTwo.boxFour.list',
                'services.sectionTwo.boxFour.list2',
                'services.sectionTwo.boxFour.list3',
                'services.sectionTwo.boxFour.list4',
                'services.sectionTwo.boxFour.list5'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxFive.headline',
            image: '5_vndlde.jpg',
            list: [
                'services.sectionTwo.boxFive.list',
                'services.sectionTwo.boxFive.list2',
                'services.sectionTwo.boxFive.list3'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxSix.headline',
            image: '6_lha6j0.jpg',
            list: [
                'services.sectionTwo.boxSix.list',
                'services.sectionTwo.boxSix.list2',
                'services.sectionTwo.boxSix.list3'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxSeven.headline',
            image: '7_lafzhw.jpg',
            list: [
                'services.sectionTwo.boxSeven.list',
                'services.sectionTwo.boxSeven.list2',
                'services.sectionTwo.boxSeven.list3',
                'services.sectionTwo.boxSeven.list4'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxEight.headline',
            image: '8_rmggom.jpg',
            list: [
                'services.sectionTwo.boxEight.list',
                'services.sectionTwo.boxEight.list2'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxNine.headline',
            image: '9_ayukf9.jpg',
            list: [
                'services.sectionTwo.boxNine.list',
                'services.sectionTwo.boxNine.list2',
                'services.sectionTwo.boxNine.list3'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxTen.headline',
            image: '10_x5umxf.jpg',
            list: [
                'services.sectionTwo.boxTen.list'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxEleven.headline',
            image: '11_dbcluo.jpg',
            list: [
                'services.sectionTwo.boxEleven.list',
                'services.sectionTwo.boxEleven.list2'
            ]
        },
        {  
            headline: 'services.sectionTwo.boxTwelve.headline',
            image: '12_jekome.jpg',
            list: [
                'services.sectionTwo.boxTen.list',
                'services.sectionTwo.boxTwelve.list2'
            ]
        }
    ]
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
                $t('services.headline')
            }}
        </h1>
        <nuxt-img 
            class="w-full h-full object-cover object-center opacity-60"
            src="service_x5ge89.jpg"
            alt="company" />
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
                    src="planing3_ypnjsp_zjcejb.webp"
                    alt="team"
                />
            </figure>
            <div>
                <h2
                    class="text-2xl font-bold text-black"
                >
                    {{
                        $t('services.sectionOne.headline')
                    }}
                </h2>
                <p
                    class="mt-5 text-gray-600"
                >
                    {{
                        $t('services.sectionOne.text')
                    }}
                </p>
                <p
                    class="mt-5 text-gray-600"
                >
                    {{
                        $t('services.sectionOne.text2')
                    }}
                </p>
                <h2
                    class="text-2xl font-bold mt-10 text-black"
                >
                    {{
                        $t('services.sectionOne.headlineTwo')
                    }}
                </h2>
                <ul
                    class="mt-5"
                >
                    <li
                        v-for="(list, index) in list"
                        :key="index"
                        class="py-1 px-2 rounded-md"
                        :class="index % 2 === 0 ? 'bg-black/5' : ''"
                    >
                        {{
                            $t(list.name)
                        }}
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20"
        >
            <div
                v-for="(service, index) in services"
                :key="index"
                class="overflow-hidden shadow-xl rounded-3xl"
            >
                <figure>
                    <nuxt-img 
                        class="w-full h-full object-cover object-center"
                        :src="service.image"
                        alt="wood"
                    />
                </figure>
                <div
                    class="p-5"
                >
                    <h2
                        class="text-xl font-bold mb-5 text-black"
                    >
                        {{
                            $t(service.headline)
                        }}
                    </h2>
                    <ul
                        class="mt-5"
                    >
                        <li
                            v-for="(element, index) in service.list"
                            :key="index"
                            class="py-1 px-2 rounded-md"
                            :class="index % 2 === 0 ? 'bg-black/5' : ''"
                        >
                            {{
                                $t(element)
                            }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
