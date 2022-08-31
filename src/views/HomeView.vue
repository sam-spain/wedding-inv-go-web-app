<template>
  <h1>Hello, {{ model.enteredName }}</h1>
  <h2>You are invited to stuff!</h2>
  <form>
    <div>
      <label for="preferredNameInput">Preferred Name</label>
      <input id="preferredNameInput" v-model="model.preferredName" />
    </div>
    <div>
      <label for="contactNumberInput">Contact Number</label>
      <input id="contactNumberInput" v-model="model.contactNumber" />
    </div>
    <div>
      <label for="contactEmailInput">Contact Email</label>
      <input id="contactEmailInput" v-model="model.contactEmail" />
    </div>
    <div>
      <label for="preferredContactInput">Preferred Contact</label>
      <select id="preferredContactInput" v-model="model.preferredContact">
        <option value="Email">Email</option>
        <option value="Number">Number</option>
        <option value="Facebook">Facebook</option>
      </select>
    </div>
    <div>
      <label for="attendingCeremonyInput">Attending Ceremony</label>
      <input type="checkbox" id="attendingCeremonyInput" v-model="model.attendingCeremony" />
    </div>
    <div>
      <label for="attendingReceptionInput">Attending Reception</label>
      <input type="checkbox" id="attendingReceptionInput" v-model="model.attendingReception" />
    </div>
    <div>
      <label for="dietaryNotesInput">Dietary Notes</label>
      <textarea rows="10" cols="40" id="dietaryNotesInput" v-model="model.dietaryNotes" />
    </div>
    <div>
      <label for="additionalNotesInput">Additional Notes</label>
      <textarea rows="10" cols="40" id="additionalNotesInput" v-model="model.additionalNotes" />
    </div>
    <div>
      You have {{ model.additionalGuestAvailable }} guests you can invite!
    </div>
    <div>
      <button v-if="moreGuestsAvailable" v-on:click="createAdditionalGuest" type="button">Add Additional Guest</button>
    </div>
    <div>
      <span v-for="(guest, index) in model.additionalGuests">
        <div>
          <p>Guest {{index + 1}}</p>
          <div>
            <label>Preferred Name</label>
            <input v-model="guest.preferredName" />
          </div>
          <div>
            <label>Dietary Notes</label>
            <input v-model="guest.dietaryNotes" />
          </div>
          <div>
            <label>Additional Name</label>
            <input v-model="guest.additionalNotes" />
          </div>
          <button v-on:click="removeAdditionalGuest(index)" type="button">Delete</button>
        </div>
      </span>
    </div>
    <div>
      <button v-on:click="updateInvitee" type="button">Update
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    model: {
      enteredName: "",
      preferredName: "",
      contactNumber: "",
      contactEmail: "",
      preferredContact: "",
      invitedToCeremony: "",
      attendingCeremony: "",
      invitedToReception: "",
      attendingReception: "",
      additionalGuestAvailable: 0,
      additionalGuests: [],
      dietaryNotes: "",
      additionalNotes: ""
    }
  }),
  created() {
    this.getInvitationForm();
  },
  methods: {
    async getInvitationForm() {
      this.model = await (await this.$http.get(`/api/v1/invitee/fromToken/${this.$route.params.userAccessToken}`)).data;
    },
    async updateInvitee() {
      await this.$http.put(`/api/v1/invitee/fromToken/${this.$route.params.userAccessToken}`, this.model);
    },
    createAdditionalGuest() {
      console.log("Creating new guest");
      this.model.additionalGuests.push({});
    },
    removeAdditionalGuest(index) {
      this.model.additionalGuests.splice(index, 1);
    }
  },
  computed: { 
    moreGuestsAvailable() {
      return this.model.additionalGuests.length < this.model.additionalGuestAvailable;
    }
  }
}
</script>