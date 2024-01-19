<template>
    <div>
        <h2
            class="font-bold text-black mb-2 text-base md:text-xl bg-blue-100 p-1 px-2 rounded-md"
        >
        {{
            2004
        }}
        </h2>
        <div
            class="flex gap-5 mb-2 text-sm md:text-lg px-2 py-1 rounded-md justify-between items-center"
        >
            <div class="font-bold flex-1">
                {{
                    $t('references.sectionOne.table.year')
                }}
            </div>
            <div class="text-left flex-1">
                {{
                    $t('references.sectionOne.table.city')
                }}
            </div>
            <div class="text-left flex-1">
                {{
                    $t('references.sectionOne.table.county')
                }}
            </div>
            <div class="text-left flex-1">
                {{
                    $t('references.sectionOne.table.work')
                }}
            </div>
            <div class="text-left flex-1">
                {{
                    $t('references.sectionOne.table.proyect')
                }}
            </div>
        </div>
    </div>
</template>