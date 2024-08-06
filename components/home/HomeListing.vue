<template lang="">
<v-container>
    <v-row>
        <v-col v-for="character in characters" cols="3">
            <v-card :title="character.name" variant="outlined" class="pa-5 text-left">
                <v-card-text>
                    <p class="text-disabled">
                        Altura: {{ character.height }}
                        <br />
                        Peso: {{ character.mass }}
                    </p>
                    <p class="mt-2 text-decoration-underline text-primary cursor-pointer" @click="() => { openCharacterPage(character.id) }">
                        Ver todos os detalhes
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  props: {
    characters: Object,
  },
  methods: {
    openCharacterPage(id) {
      navigateTo(`/character/${id}`)
    },
  },
};
</script>

<style lang=""></style>
