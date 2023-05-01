<template>
  <div>
    <h4>Vuetify Coponents 실습</h4>

    <div>
      <h4>Icons</h4>
      <v-icon color="success" icon="mdi-wifi" size="large"></v-icon>
      <v-icon icon="mdi-fruit-citrus" color="warning"></v-icon>
      <hr />

      <h4>Images</h4>
      <v-img
        :width="300"
        aspect-ratio="16/9"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
      <hr />

      <h4>Buttons</h4>
      <v-btn class="mt-2"> Button </v-btn>
      <v-btn block class="mt-2">Block Button</v-btn>
      <hr />

      <h4>Cards</h4>
      <v-card
        width="400"
        loading
        title="Card title"
        subtitle="Subtitle"
        text="Content"
        variant="outlined"
        class="mt-2"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>

      <hr />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
