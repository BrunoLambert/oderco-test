<script setup>
const navigationItems = [{ title: "Detalhes", value: 0, key: "name" }];

const route = useRoute();
const characterID = route.params.id;

const character = ref();
const tab = ref(null);

const { data } = await useFetch("/api/character", {
  query: {
    id: characterID,
  },
});
character.value = data;

if (data.value.films.length > 0) {
  navigationItems.push({ title: "Filmes", value: 1, key: "films" });
}
if (data.value.species.length > 0) {
  navigationItems.push({ title: "Espécie", value: 2, key: "species" });
}
if (data.value.vehicles.length > 0) {
  navigationItems.push({ title: "Veículos", value: 3, key: "vehicles" });
}
if (data.value.starships.length > 0) {
  navigationItems.push({
    title: "Naves espaciais",
    value: 4,
    key: "starships",
  });
}
</script>

<template lang="">
  <div class="page text-center">
      <h2 class="text-h4">Detalhes do personagem</h2>
      <h1 class="text-h2 font-weight-bold	mt-10 text-primary">{{ character.value.name }}</h1>

      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
        class="mt-15">
            <v-tab 
              v-for="navigationItem in navigationItems" 
              :key="navigationItem.value"
              :value="navigationItem.value">
                {{ navigationItem.title }}
            </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item :key="0" :value="0">
            <CharacterDetails :character="character.value" />
          </v-tabs-window-item>
          <v-tabs-window-item :key="1" :value="1">
            <v-container fluid>
              <FilmList :films="character.value.films" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item :key="2" :value="2">
            <v-container fluid>
              <SpecieDetails :specie="character.value.species[0]" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item :key="3" :value="3">
            <v-container fluid>
              <VehicleList :vehicles="character.value.vehicles" />
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item :key="4" :value="4">
            <v-container fluid>
              <StarshipList :starships="character.value.starships" />
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
  </div>
</template>

<style lang="">
</style>
