<template>
    <div>
        <section
            class="bg-green-950 h-96 overflow-hidden relative"
        >
            <h1
                    class="text-6xl uppercase font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                {{
                    $t('more.headline')
                }}
            </h1>
            <nuxt-img 
                class="w-full h-full object-cover object-center opacity-60"
                src="more_faeyjo.jpg"
                alt="company" />
        </section>
        <section
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
            <div>
                <h2
                    class="text-2xl font-bold text-center mb-10 text-black"
                >
                    {{
                        $t('more.sectionOne.headline')
                    }}
                </h2>
            </div>
            <div
                class="mb-10"
            >
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/4pbJlpyp5ng?enablejsapi=1&version=3&playerapiid=ytplayer"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div
                class="mb-10"
            >
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/E6Obo5W17bY?enablejsapi=1&version=3&playerapiid=ytplayer"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div
                class="mb-10"
            >
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TFMIukClWmU?enablejsapi=1&version=3&playerapiid=ytplayer"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div>
                <p
                    class="mt-40 mb-10 text-gray-600"
                >
                    {{
                        $t('more.sectionOne.text')
                    }}
                </p>
            </div>
            <div
                class="mb-10"
            >
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/EA9q_LLqI4A?enablejsapi=1&version=3&playerapiid=ytplayer"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div
                class="mb-10"
            >
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/SreMQfipczA?enablejsapi=1&version=3&playerapiid=ytplayer"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div>
                <h2
                    class="text-2xl font-bold text-center mb-5 text-black"
                >
                    {{
                        $t('more.sectionTwo.headline')
                    }}
                </h2>
                <p
                    class="mb-10 text-gray-600"
                >
                    {{
                        $t('more.sectionTwo.text')
                    }}
                </p>
            </div>
        </section>
    </div>
</template>
