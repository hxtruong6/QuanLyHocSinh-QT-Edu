<template>
  <!-- <container :show-page-header="false">
    <dashboard-container v-if="hasPermission('dashboard')"/>
    <p v-else>
      You don't have permission to view dashboard.
    </p>
  </container>-->
  <div>
    <!-- <el-input placeholder="Please input password" v-model="input" show-password></el-input> -->
  </div>
</template>

<script>
// import Container from '~/components/Layout/Container'
// import DashboardContainer from '@/components/Dashboard'

export default {
  layout: "dashboard",
  head() {
    return {
      title: "Homepage",
      input: ""
    };
  }
  // components: { DashboardContainer, Container },
};
</script>
