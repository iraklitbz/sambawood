<script setup>
    const team = [
        { 
            name: 'company.director.name',
            image: 'jimmy.jpg',
            ocupation: 'company.director.ocupation',
            lang: [
                'ge', 'de', 'es', 'en', 'ru'
            ],
            social: [
                {
                    name: 'facebook',
                    link: 'https://www.facebook.com/jgorgiladze1/'
                },
                {
                    name: 'instagram',
                    link: 'https://www.instagram.com/innovatioindesign/'
                },
                {
                    name: 'gmail',
                    link: 'mailto:gorgiladze@yahoo.de'
                }
            ]
        }
    ]
</script>
<template>
    <section
    class="bg-green-950 h-96 overflow-hidden relative"
    >
        <h1
                class="text-6xl uppercase font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
            {{
                $t('media.headline')
            }}
        </h1>
        <nuxt-img 
            class="w-full h-full object-cover object-center opacity-60"
            src="more.jpg"
            alt="company" />
    </section>
    <section
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
        <div
            class="grid grid-cols-[100%] md:grid-cols-[40%,60%] gap-10"
        >
            <div>
                <div
                    v-for="(member, index) in team"
                    :key="index"
                >
                    <figure
                        class="overflow-hidden shadow-xl rounded-3xl mb-5"
                    >
                        <nuxt-img 
                            class="w-full h-full object-cover object-center"
                            :src="member.image"
                            alt="team"
                        />
                    </figure>
                    <h5
                        class="text-xl font-bold"
                    >
                        {{
                            $t(member.name)
                        }}
                    </h5>
                    <h2
                        class="text-3xl font-bold text-blue-900"
                    >
                        {{
                            $t(member.ocupation)
                        }}
                    </h2>
                    <ul
                        v-if="member.social"
                        class="flex gap-3 mt-5"
                    >
                        <li
                            v-for="social in member.social"
                            :key="social"
                        >
                            <a
                                :href="social.link"
                                target="_blank"
                                class="text-black"
                            >
                                <nuxt-icon 
                                    :name="social.name"
                                    size="20px"
                                    class="icon text-3xl dark:text-white"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p
                    class="mt-5"
                >
                    {{
                        $t('company.text')
                    }}
                </p>
                <p
                    class="mt-5"
                >
                    {{
                        $t('company.text2')
                    }}
                </p>
            </div>
        </div>
    </section>
</template>
