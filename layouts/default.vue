<template>
    <div>
        <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <HeaderComponent />
        </div>
        <slot />
        <FooterComponent />
    </div>
  </template>
<style>
    body {
        font-family: 'Roboto Mono', sans-serif;
    }
</style>