<template>
    <div>
        <section
    class="bg-green-950 h-96 overflow-hidden relative"
    >
        <h1
                class="text-6xl uppercase font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
            {{
                $t('contact.headline')
            }}
        </h1>
        <nuxt-img 
            class="w-full h-full object-cover object-center opacity-60"
            src="contact_bim7gy.jpg"
            alt="company" />
    </section>
    <section
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
    <h5
        class="text-xl md:text-4xl font-bold text-black text-center mb-10"
    >
        {{
            $t('contact.smallheadline')
        }}
    </h5>
        <div
            class="grid grid-cols-[100%] md:grid-cols-[40%,60%] gap-10"
        >
            <div>
                <ul>
                    <li>
                        <b>Sambawood S.L.</b> – ESB-19311422
                    </li>
                    <li
                        class="flex items-center"
                    >
                        <b>
                            {{
                                $t('contact.manager')+ ': '
                            }}
                        </b>
                        <span
                            class="ml-2"
                        >
                            Jemal Gorgiladze (Jimmy)
                        </span>
                    </li>
                    <li
                        class="flex items-center"
                    >
                        <b>
                            Tel:
                        </b>
                        <span
                            class="ml-2"
                        >
                            <a class="text-blue-700" href="tel:+491721577536">+49 172 1577536</a>
                        </span>
                    </li>
                    <li
                        class="flex items-center"
                    >
                        <b>
                            Email:
                        </b>
                        <span
                            class="ml-2"
                        >
                            <a class="text-blue-700" href="mailto:jimmy.gorgiladze@sambawood.com">jimmy.gorgiladze@sambawood.com</a>
                    
                        </span>
                    </li>
                    <li
                        class="mt-4 mb-2"
                    >
                        <b>
                            {{
                                $t('contact.company')
                            }}
                        </b>
                    </li>
                    <li>
                        Calle Cantaperdiz 38
                    </li>
                    <li>
                        19240 Jadraque (Guadalajara)
                    </li>
                    <li>
                        {{
                            $t('contact.spain')
                        }}
                    </li>
                    <li
                        class="mt-4 mb-2"
                    >
                        <b>
                            {{
                                $t('contact.office')
                            }}
                        </b>
                    </li>
                    <li>
                        Herforderstraße 109
                    </li>
                    <li>
                        33602 Bielefeld
                    </li>
                    <li>
                        {{
                                $t('contact.germany')
                            }}
                    </li>
                </ul>
                <ul
                    class="mt-10"
                >
                    <li
                            class="mt-4 mb-2"
                        >
                        <b>
                            {{
                                $t('contact.contactperson')
                            }}
                        </b>
                    </li>
                    <li>
                        Mandy Etzelsdörfer
                    </li>
                    <li>
                        {{ $t('contact.managment') }}
                    </li>
                    <li>
                        Tel: <a class="text-blue-700" href="tel:+4916091221273">+49 160 91221273</a>
                    </li>
                    <li>
                        Email: <a class="text-blue-700" href="mailto:info@sambawood.com">info@sambawood.com</a>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    </section>
    </div>
</template>
