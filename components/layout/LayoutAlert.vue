<script setup>
// Componente criado e importado direto no Layout para informar possíveis error, sucessos ou avisos.ddd
// Para esse caso, só está sendo usado uma variavel para poder abrir e fechar o componente.
// Porém daria para implementar mais coisas, como texto customizado pela chamada, bem como a cor.

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