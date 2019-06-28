<template>
  <div class="dashboard">
    <show-page v-if="currState==='showPage'"></show-page>
    <log-in :changeState="changeState" v-if="currState==='login'"></log-in>
    <sign-up :changeState="changeState" v-if="currState==='signup'"></sign-up>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowPage from "~/components/DashBoard/ShowPage";
import LogIn from "~/components/DashBoard/LogIn";
import SignUp from "~/components/DashBoard/SignUp";

/**
 * There are 3 state:
 * - login
 * - signup
 * - showpage
 */

const LOG_IN = "login";
const SIGN_UP = "signup";
const SHOW_PAGE = "showPage";

export default {
  name: "DashBoard",
  layout: "dashboard",
  head() {
    // head is used to set information for HTML page
    return {
      title: "Homepage",
      input: ""
    };
  },
  components: { ShowPage, LogIn, SignUp },
  computed: {
    currState: {
      get() {
        return this.$store.state.student.id || LOG_IN;
      },
      set(val) {
        return val;
      }
    }
  },
  methods: {
    changeState(val) {
      currState(val);
    }
  }
};
</script>
