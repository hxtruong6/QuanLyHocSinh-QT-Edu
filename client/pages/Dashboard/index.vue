<template>
  <div class="dashboard">
    <show-page v-if="currState==='showPage'"></show-page>
    <log-in :changeState="changeState" v-if="currState==='login'"></log-in>
    <!-- <sign-up :changeState="changeState" v-if="currState==='signup'"></sign-up> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowPage from "~/components/DashBoard/ShowPage";
import LogIn from "~/components/DashBoard/LogIn";
import SignUp from "~/components/DashBoard/SignUp";
import { LOGIN, SHOW_PAGE } from "~/utils/currState";
/**
 * There are 3 state:
 * - login
 * - signup
 * - showpage
 */
export default {
  name: "DashBoard",
  layout: "dashboard",
  head() {
    // head is used to set information for HTML page
    return {
      title: "Trang chủ"
    };
  },
  components: { ShowPage, LogIn, SignUp },
  data() {
    return {
      currState: this.$store.state.student.isLogined ? SHOW_PAGE : LOGIN
    };
  },
  methods: {
    changeState(val) {
      this.currState = val;
    }
  }
};
</script>
