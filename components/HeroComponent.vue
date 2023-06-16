<template>
    <Hero
        class="bg-white text-white py-32 px-8 flex flex-col justify-center items-center relative bg-[url('https://res.cloudinary.com/dmb4l3zfo/image/upload/v1686914083/sambawood/hero_n6iaqb.jpg')] bg-no-repeat bg-center bg-cover"
    >
        <h1
            class="text-3xl md:text-6xl font-bold uppercase bg-blue-900 p-2"
        >
            {{ $t('home.hero.bigHeadline') }}
        </h1>
        <h5
            class="text-3xl md:text-6xl uppercase text-center bg-blue-900/70 p-2"
        >
            {{ $t('home.hero.smallHeadline') }}
        </h5>
        <h2
            class="text-3xl md:text-6xl font-bold uppercase bg-blue-900/40 p-2"
        >
            {{ $t('home.hero.subHeadline') }}
        </h2>
    </Hero>
</template>
