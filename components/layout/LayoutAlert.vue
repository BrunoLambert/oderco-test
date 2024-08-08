<script setup>
// States
const alert = useState("alert", () => false);
</script>

<template lang="">
    <v-snackbar
      v-model="alert"
      color="primary"
      multi-line
    >
      <b>Tivemos um problema! Por favor, tente novamente.</b>

      <template v-slot:actions>
        <v-btn
          color="black"
          variant="text"
          @click="alert = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
</template>

<style lang="css" scoped>
</style>