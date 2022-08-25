<template>
  <h1>Hello, {{model.enteredName}}</h1>
  <h2>Wonderful story goes here.</h2>
  <h3>Form goes here</h3>
  <div>User {{ $route.params.userAccessToken }}</div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    model: {
      enteredName: "",
      preferredName: ""
    }
  }),
  created() {
    this.getInvitationForm();
  },
  methods: {
    async getInvitationForm() {
      this.model = await (await this.$http.get(`/api/v1/invitee/fromToken/${this.$route.params.userAccessToken}`)).data;
    }
  }
}
</script>