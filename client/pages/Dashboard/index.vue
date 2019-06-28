<template>
  <div class="dashboard">
    <show-page></show-page>
    <log-in></log-in>
    <sign-up></sign-up>
  </div>
</template>

<script>
import ShowPage from "~/components/DashBoard/ShowPage";
import LogIn from "~/components/DashBoard/LogIn";
import SignUp from "~/components/DashBoard/SignUp";

export default {
  name: "DashBoard",
  components: { ShowPage, LogIn, SignUp },
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
