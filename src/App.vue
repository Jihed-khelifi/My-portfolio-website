<template>
    <AppHeader />
    <main class="wrapper">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </main>

    <AppFooter />
</template> 

<script setup>

</script>

<style lang="scss" >
#app {
    display: grid;
    place-items: center;
}

.wrapper {
    display: grid;
    place-items: center;
    width: 100%;

}
</style>