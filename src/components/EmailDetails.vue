<template>
  <Card v-if="email">
    <template #title><h2 style="color: black;">{{email.subject}}</h2></template>
    <template #content>
      <p>From: {{ email.from }}</p>
      <p>To: {{ email.to }}</p>
      <p>{{ email.body }}</p>
    </template>
  </Card>
  <Card v-if="!email">
    <template #title><h2>Seleccione un Tema de la Lista</h2></template>
    <template #content>
      <p>La información se detallará en esta sección</p>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    email: Object
  }
};
</script>
