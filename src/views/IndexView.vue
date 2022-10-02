<template>
    <div class="h-screen bg-white">
        <form>
            <div>
                <input id="invitationCodeInput" placeholder="Type your code here" v-model="invitationCode" class="h-12 w-8/12 mt-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-center" />
            </div>
            <br />
            <div>
                <button type="button" v-on:click="goToNavigation"
                class="text-white hover:text-secondary-dark focus:ring-4 font-medium text-lg px-5 py-2.5 mr-2 mb-2 bg-primary-dark hover:bg-secondary focus:outline-none focus:ring-secondary-darker">
                    Go To Invite
                </button>
            </div>
        </form>
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