<script setup>
const route = useRoute();
const characterID = route.params.id;

const character = ref();

const { data } = await useFetch("/api/character", {
  query: { id: characterID },
});
character.value = data;
</script>

<template lang="">
    <div>
        {{ JSON.stringify(character) }}
    </div>
</template>


<style lang="">
</style>