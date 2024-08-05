<script setup>
const searchText = ref("");
const loadingActive = ref(false);
const charListing = ref({ results: [] });

watch(searchText, async (newText, oldText) => {
  if (newText.length === 0) {
    charListing.value = { results: [] };
  } else if (newText !== oldText) {
    loadingActive.value = true;
    try {
      const resp = await $fetch("api/search", {
        query: { search: newText },
      });
      charListing.value = resp.data;
    } catch (error) {
      await $fetch("api/log/error", {
        method: "POST",
        params: {
          name: "Error on Client Search",
          error,
        },
      });
    }
    loadingActive.value = false;
  }
});
</script>

<template lang="">
    <div class="home-page text-center">
        <h1 class="text-h4">
            Todos os dados de Star Wars que você sempre quis
        </h1>
        <h2 class="text-subtitle-1 text-disabled">
            Planetas, naves espaciais, veículos, pessoas, filmes e espécies
        </h2>
        <HomeSearch v-model:value="searchText" :loadingActive="loadingActive" />
        <HomeListing :characters="charListing.results" />
        <v-container v-if="charListing.count === 0">
            <p class="text-h6 mb-2">Não conseguimos encontrar nenhum personagem com o termo  “{{ searchText }}”</p>
            <p class="text-disabled">Tente novamente com outro termo de pesquisa</p>
        </v-container>
    </div>
</template>

<style lang="css">
.home-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 5% 0 5%;
  gap: 10px;
}
</style>