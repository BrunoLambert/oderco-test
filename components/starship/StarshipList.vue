<script setup>
const { starships } = defineProps(["starships"]);
</script>

<template lang="">
<v-container fluid style="width: 60vw">
    <v-card color="primary-darken-1" minHeight="380px" min-width="380px" class="pa-10 character-card">
        <v-card color="background-darken-1" class="character-data-card">
            <v-card-text class="text-left">
                <v-expansion-panels class="starships-expansion-panels">
                    <v-expansion-panel v-for="starship in starships" :key="starship.name">
                        <v-expansion-panel-title expand-icon="mdi-menu-down" color="background-darken-1">
                            {{ starship.name }}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg-background-darken-1">
                            <p>
                                Modelo: <span>{{ starship.model }}</span>
                            </p>
                            <p>
                                Fabricante: <span>{{ starship.manufacturer }}</span>
                            </p>
                            <p>
                                Custo em créditos: <span>{{ starship.cost_in_credits }}</span>
                            </p>
                            <p>
                                Classe: <span>{{ starship.starship_class }}</span>
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
.starships-expansion-panels * {
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
