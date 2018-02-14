export default ({ app }) => {
  app.$axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";
};
