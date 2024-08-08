<script setup>
// States and Refs
const alert = useState("alert");
const navigationItems = [{ title: "Detalhes", key: "details" }];

const route = useRoute();
const characterID = route.params.id;

const character = ref();
const tab = ref(null);

// SSR Request
try {
  const { data } = await useFetch("/api/character", {
    query: {
      id: characterID,
    },
  });
  character.value = data;

  if (data.value.films.length > 0) {
    navigationItems.push({ title: "Filmes", key: "films" });
  }
  if (data.value.species.length > 0) {
    navigationItems.push({ title: "Espécie", key: "species" });
  }
  if (data.value.vehicles.length > 0) {
    navigationItems.push({
      title: "Veículos",
      key: "vehicles",
    });
  }
  if (data.value.starships.length > 0) {
    navigationItems.push({
      title: "Naves espaciais",
      key: "starships",
    });
  }

  useHead({
    title: `Star Wars - ${data.value.name}`,
  });
} catch (error) {
  await useFetch("api/log/error", {
    method: "POST",
    params: {
      name: "Error on Character Getter",
      error,
    },
  });
  alert.value = true;
}

// Functions
function nextPage() {
  const navigationItemIndex = navigationItems.findIndex(
    (item) => item.key === tab.value
  );
  if (!navigationItems[navigationItemIndex + 1]) {
    tab.value = navigationItems[0].key;
  } else {
    tab.value = navigationItems[navigationItemIndex + 1].key;
  }
}
function prevPage() {
  const navigationItemIndex = navigationItems.findIndex(
    (item) => item.key === tab.value
  );
  if (!navigationItems[navigationItemIndex - 1]) {
    tab.value = navigationItems[navigationItems.length - 1].key;
  } else {
    tab.value = navigationItems[navigationItemIndex - 1].key;
  }
}
function goBack() {
  navigateTo("/");
}
</script>

<template lang="">
  <div class="page page-character text-center">
      <h2 class="text-h4">Detalhes do personagem</h2>
      <h1 class="text-h2 font-weight-bold	mt-10 text-primary">{{ character.value.name }}</h1>

      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
        class="mt-15">
            <v-tab 
              v-for="navigationItem in navigationItems" 
              :key="navigationItem.key"
              :value="navigationItem.key">
                {{ navigationItem.title }}
            </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab" style="position: relative; min-height: 440px; overflow: visible;">

          <v-fab color="background-lighten-1" icon="mdi-arrow-left" class="tab-control left" @click="prevPage" />
          <v-fab color="background-lighten-1" icon="mdi-arrow-right" class="tab-control right" @click="nextPage" />

          <v-tabs-window-item value="details">
            <CharacterDetails :character="character.value" />
          </v-tabs-window-item>
          <v-tabs-window-item value="films">
            <v-container fluid>
              <FilmList :films="character.value.films" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item value="species">
            <v-container fluid>
              <SpecieDetails :specie="character.value.species[0]" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item value="vehicles">
            <v-container fluid>
              <VehicleList :vehicles="character.value.vehicles" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item value="starships">
            <v-container fluid>
              <StarshipList :starships="character.value.starships" />
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>

        <p class="goBackCTA text-primary mb-10" @click="goBack">Voltar aos outros personagens</p>
  </div>
</template>

<style lang="css" scoped>
.tab-control {
  position: absolute;
  z-index: 100 !important;
  top: 50%;
}
.tab-control.left {
  left: calc(50% - 450px);
}
.tab-control.right {
  right: calc(50% - 450px);
}
.goBackCTA {
  text-decoration: underline;
  cursor: pointer;
  align-self: flex-start;
  font-size: 16px;
}
</style>
