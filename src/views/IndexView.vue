<template>
    <form>
        <label for="invitationCodeInput">Enter your invitation code here:</label>
        <input id="invitationCodeInput" v-model="invitationCode"/>
        <button v-on:click="goToNavigation">Go to invitation</button>
    </form>
</template>

<script>
export default {
    name: "IndexView",
    data: () => ({
        invitationCode: ""
    }),
    methods: {
        goToNavigation() {
            this.$router.push({ path: `/invitation/${this.invitationCode}` });
        }
    }
}
</script>