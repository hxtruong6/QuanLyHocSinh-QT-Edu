<template>
  <div>You don't have permission to view dashboard.</div>
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
