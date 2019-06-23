<script>
const currPath = localStorage.getItem("currPath") || "dashboard";

export default {
  fetch({ redirect }) {
    redirect(`/${currPath}`);
  }
};
</script>
