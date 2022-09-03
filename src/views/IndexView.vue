<template>
    <div class="flex h-screen bg-blue-100">
        <div class="m-auto">
            <form>
                <div class="text-7xl">
                    <label for="invitationCodeInput">Invitation Code:</label>
                    <input id="invitationCodeInput" placeholder="Your code here" v-model="invitationCode" />
                </div>
                <div>
                    <button type="button" v-on:click="goToNavigation"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-800">Go
                        To Invite</button>
                </div>
            </form>
        </div>
    </div>
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


<style>
div {
    text-align: center;
}
</style>