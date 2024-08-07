<script setup>
const { films } = defineProps(["films"]);
</script>

<template lang="">
<v-container fluid style="width: 60vw">
    <v-card color="primary-darken-1" minHeight="380px" min-width="380px" class="pa-10 character-card">
        <v-card color="background-darken-1" class="character-data-card">
            <v-card-text class="text-left">
                <v-expansion-panels class="films-expansion-panels">
                    <v-expansion-panel v-for="film in films" :key="film.title">
                        <v-expansion-panel-title expand-icon="mdi-menu-down" color="background-darken-1">
                            {{ film.title }}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg-background-darken-1">
                            <p>
                                ID do episódio: <span>{{ film.episode_id }}</span>
                            </p>
                            <p>
                                Diretor: <span>{{ film.director }}</span>
                            </p>
                            <p>
                                Produtor: <span>{{ film.producer }}</span>
                            </p>
                            <p>
                                Data de lançamento: <span>{{ film.release_date }}</span>
                            </p>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
    </v-card>
</v-container>
</template>

<style lang="css" scoped>
.films-expansion-panels * {
  background-color: transparent !important;
}

p {
  margin: 10px 0;
  font-size: 18px;
  color: var(--v-theme-primary) !important;
}

p span {
  color: rgb(var(--v-theme-primary));
  margin-left: 20px;
  font-size: 18px;
  text-transform: capitalize;
}
</style>
