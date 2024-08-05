<script setup>
const loading = defineProps(["loadingActive"]);
const searchValue = defineModel("value");
</script>

<template>
  <v-container class="mt-5 w-50">
    <v-text-field v-model="searchValue" name="search" id="search-field" loading>
      <template v-slot:label>
        <span class="text-body-2">
          Busque por pessoas, planetas, naves espaciais..
        </span>
      </template>
      <template v-slot:prepend-inner>
        <v-icon color="primary" class="opacity-100">mdi-magnify</v-icon>
      </template>

      <template v-slot:append-inner>
        <v-icon color="icon-color" class="opacity-100">mdi-close</v-icon>
      </template>

      <template v-slot:loader>
        <v-progress-linear
          :active="loadingActive"
          color="primary"
          height="1"
          indeterminate
        />
      </template>
    </v-text-field>
  </v-container>
</template>

<style lang="">
</style>
