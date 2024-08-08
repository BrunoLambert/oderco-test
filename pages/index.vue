<script setup>
// States
let alert = useState("alert");

// Refs
const searchText = ref("");
const loadingActive = ref(false);
const charListing = ref({ results: [] });
const page = ref(1);
const totalPages = ref(1);

// Functions
function debounce(func, timeout = 2000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
async function getCharacters(search, page) {
  const resp = await $fetch("api/search", {
    query: { search, page },
  });
  totalPages.value = Math.ceil(resp.data.count / 10);
  charListing.value = resp.data;
  loadingActive.value = false;
  return resp;
}

// Watchers
watch(searchText, async (newText, oldText) => {
  if (newText.length === 0) {
    charListing.value = { results: [] };
    totalPages.value = 1;
    page.value = 1;
  } else if (newText !== oldText) {
    loadingActive.value = true;
    try {
      page.value = 1;
      debounce(getCharacters(newText, page.value));
    } catch (error) {
      await $fetch("api/log/error", {
        method: "POST",
        params: {
          name: "Error on Client Search",
          error,
        },
      });
      alert.value = true;
      loadingActive.value = false;
    }
  }
});
watch(page, async (newPage, oldPage) => {
  loadingActive.value = true;
  if (newPage !== oldPage) {
    try {
      debounce(getCharacters(searchText.value, newPage));
    } catch (error) {
      await $fetch("api/log/error", {
        method: "POST",
        params: {
          name: "Error on Client Pagination",
          error,
        },
      });
      alert.value = true;
      loadingActive.value = false;
    }
  }
});
</script>

<template lang="">
    <div class="page text-center">
        <h1 class="text-h4 font-weight-bold">
            Todos os dados de Star Wars que você sempre quis
        </h1>
        <h2 class="text-subtitle-1 text-disabled">
            Planetas, naves espaciais, veículos, pessoas, filmes e espécies
        </h2>

        <HomeSearch v-model:value="searchText" :loadingActive="loadingActive" />

        <v-progress-circular v-if="loadingActive" model-value="20" :size="75" :width="10" indeterminate class="mb-10" />
        <HomeListing v-else :characters="charListing.results" />

        <v-container v-if="charListing.count === 0">
            <p class="text-h6 mb-2">Não conseguimos encontrar nenhum personagem com o termo  “{{ searchText }}”</p>
            <p class="text-disabled">Tente novamente com outro termo de pesquisa</p>
        </v-container>

        <v-container v-if="totalPages > 1">
          <v-pagination :diabled="loadingActive" :length="totalPages" v-model="page" :total-visible="totalPages" color="primary" variant="outlined" />
        </v-container>
    </div>
</template>

<style lang="">
</style>