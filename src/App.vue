<template>
  <div class="common-layout">
    <el-container>
      <el-header height="100px"><h1><b>ENTRADAS</b></h1></el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12"><EmailList @email-selected="selectEmail" /></el-col>
          <el-col :span="12"><EmailDetails :email="selectedEmail" /></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import EmailList from './components/EmailList.vue';
import EmailDetails from './components/EmailDetails.vue';

export default {
  components: {
    EmailList,
    EmailDetails
  },
  data() {
    return {
      selectedEmail: null
    };
  },
  methods: {
    selectEmail(email) {
      console.log(email)
      this.selectedEmail = email;
    }
  }
};
</script>

<style>
@import './assets/base.css';

.el-header{
  align-self: center;
  font-size: larger;
}
</style>