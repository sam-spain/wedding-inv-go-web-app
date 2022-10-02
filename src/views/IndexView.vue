<template>
    <div class="flex h-screen bg-white">
        <div class="m-auto text-4xl">
            <form>
                <div>
                    <input id="invitationCodeInput" placeholder="Type your code here" v-model="invitationCode" class="bg-white placeholder-white-darkest text-primary-dark min-w-fit" />
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