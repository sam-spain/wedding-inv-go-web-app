<template>
    <div class="flex h-screen bg-primary">
        <div class="m-auto">
            <form>
                <div class="text-7xl">
                    <input id="invitationCodeInput" placeholder="Your code here" v-model="invitationCode" class="bg-primary-dark placeholder-primary text-primary-darker" />
                </div>
                <br />
                <div>
                    <button type="button" v-on:click="goToNavigation"
                        class="text-secondary hover:text-secondary-dark focus:ring-4 font-medium text-lg px-5 py-2.5 mr-2 mb-2 bg-secondary-dark hover:bg-secondary focus:outline-none focus:ring-secondary-darker" >
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