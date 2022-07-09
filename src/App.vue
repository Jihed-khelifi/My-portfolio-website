<template>
    <AppHeader />
    <main class="wrapper">
        <router-view />
    </main>

    <AppFooter />
</template>

<script>
export default {

}
</script>

<style lang="scss" >
#app {
    display: grid;
    place-items: center;
}
</style>