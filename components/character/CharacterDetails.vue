<script setup>
const { character } = defineProps(["character"]);
</script>

<template>
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
            Altura: <span>{{ character.height }}</span>
          </p>
          <p>
            Peso: <span>{{ character.mass }}</span>
          </p>
          <p>
            Cor do cabelo: <span>{{ character.hair_color }}</span>
          </p>
          <p>
            Cor da pele: <span>{{ character.skin_color }}</span>
          </p>
          <p>
            Cor dos olhos: <span>{{ character.eye_color }}</span>
          </p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<style lang="css">
.character-card {
  position: relative;
  border-radius: 24px !important;
  overflow: visible !important;
  width: 70%;
}

.character-card:before {
  content: "";
  position: absolute;
  width: 320px;
  height: 140px;
  top: calc(50% - 80px);
  left: -25px;
  z-index: 10;
  background: url("/img/starwars_logo.png") no-repeat top center;
  background-size: 320px;
  transform: rotate(-90deg);
}

.character-data-card {
  border-radius: 16px !important;
  position: absolute;
  left: 240px;
  background-color: #151515 !important;
  padding: 10px !important;
}

p {
  margin: 10px 0;
  font-size: 24px;
  color: var(--v-theme-primary) !important;
}

p span {
  color: rgb(var(--v-theme-primary));
  margin-left: 20px;
  font-size: 32px;
  text-transform: capitalize;
}
</style>
