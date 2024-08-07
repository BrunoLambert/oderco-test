<script setup>
const { specie } = defineProps(["specie"]);
</script>

<template lang="">
    <v-container fluid style="width: 60vw">
    <v-card
      color="primary-darken-1"
      minHeight="380px"
      min-width="380px"
      class="pa-10 character-card"
    >
      <v-card color="background-darken-1" class="character-data-card">
        <v-card-text class="text-left">
          <p>
            Nome: <span>{{ specie.name }}</span>
          </p>
          <p>
            Classificação: <span>{{ specie.classification }}</span>
          </p>
          <p>
            Designação: <span>{{ specie.designation }}</span>
          </p>
          <p>
           Altura média: <span>{{ specie.average_height }}</span>
          </p>
          <p>
            Idioma: <span>{{ specie.language }}</span>
          </p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<style lang="">
</style>