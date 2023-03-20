<template>
  <DataTable :value="emails" paginator :rows="5">
    <Column field="subject">
      <template #header="slotProps">
        <div style="display: block;">
          <h2 style="color: black;margin-bottom: 0px;">TEMAS</h2>
          <div style="display: block;font-weight:normal;font-size: small;">Seleccione una opción de la lista para ver su información</div>
        </div>
      </template>
      <template  #body="{ data }">
        <div @click="selectEmail(data)">
          {{ data.subject }}
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      emails: []
    };
  },
  methods: {
    async getEmails() {
      const response = await axios.get('/list_email.json');
      this.emails = response.data;
    },
    selectEmail(email) {
      this.$emit('email-selected', email);
    }
  },
  created() {
    this.getEmails();
  }
};
</script>