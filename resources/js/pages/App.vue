<template>
    <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import useDefaults from "../composable/defaults";

const { setTheme } = useDefaults();

onMounted(() => {
    setTheme();
});
</script>
