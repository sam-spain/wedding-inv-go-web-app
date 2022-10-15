<template>
  <div>
    <h1 class=" bg-primary-darkest text-8xl leading-none text-white md:text-5xl lg:text-6xl">Maayong Adlaw, {{ model.enteredName
    }}</h1>
    <h1 class="bg-primary-darkest text-6xl leading-none text-white md:text-4xl lg:text-6xl">We would like you to join in
      our story...</h1>
    <div class="bg-primary-darkest h-12"></div>
    <div class="text-4xl col-start-2 col-span-4">Karen and Sam's first date - March 2018</div>
    <div class="bg-white grid grid-cols-3 md:grid-cols-9 grid-flow-row">
      <img class="col-span-3" src="@/assets/IMG_20180308_181618.jpg" alt="Sam and Karen">
      <iframe class="col-span-3 w-full h-full"
        referrerpolicy="no-referrer-when-downgrade" 
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBkgrMtxoRns1F2oyRmcfvQJIgDqB2uvPw&center=53.744014145893225, -0.3390485200832282&zoom=19&maptype=satellite">
      </iframe>
      <div class="col-span-3">
        <p>We met for the first in person in March 2018 for our very first date. The magic first began in an open and safe spot in Queen Victoria Square.</p>
      </div>
    </div>
    <div class="bg-white-dark h-80">First holiday in the Philippines</div>
    <div class="bg-white h-80">Proposal</div>
    <div class="bg-white-dark h-80">Sofia Joinning The Family</div>
    <div class="bg-white h-80">Our Next Experience Together</div>
    <div class="bg-white-dark">
      <h2 class="text-5xl text-primary-darkest mb-4">Please enter your details below</h2>
      <form>
        <div v-if="model.invitedToCeremony" class="mb-4 px-2">
          <label for="attendingCeremonyInput" class="text-3xl font-medium text-gray-900 dark:text-gray-300">I would like
            to attend the ceremony section of the wedding</label>
          <br />
          <input type="checkbox" id="attendingCeremonyInput"
            class="w-12 h-12 mt-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="model.attendingCeremony" />

        </div>
        <div v-if="model.invitedToReception" class="mb-4 px-2">
          <label for="attendingReceptionInput" class="text-3xl mb-10 font-medium text-gray-900 dark:text-gray-300">I
            would like to attend the reception section of the wedding</label>
          <br />
          <input type="checkbox" id="attendingReceptionInput"
            class="w-12 h-12 mt-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="model.attendingReception" />

        </div>
        <div class="mb-4 px-2">
          <label for="preferredNameInput"
            class="block mb-2 text-2xl font-medium text-primary-darkest dark:text-gray-300">Preferred Name</label>
          <input id="preferredNameInput"
            class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5"
            v-model="model.preferredName" />
        </div>
        <div class="mb-4 px-2">
          <label for="contactNumberInput"
            class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Contact Number</label>
          <input id="contactNumberInput"
            class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5"
            v-model="model.contactNumber" />
        </div>
        <div class="mb-4 px-2">
          <label for="contactEmailInput"
            class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Contact Email</label>
          <input id="contactEmailInput"
            class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5"
            v-model="model.contactEmail" />
        </div>
        <div class="mb-4 px-2">
          <label for="preferredContactInput"
            class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Preferred Contact</label>
          <select id="preferredContactInput"
            class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5"
            v-model="model.preferredContact">
            <option value="Email">Email</option>
            <option value="Number">Number</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>
        <div class="mb-4 px-2">
          <label for="dietaryNotesInput"
            class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Dietary Notes</label>
          <textarea rows="10" cols="40" id="dietaryNotesInput" v-model="model.dietaryNotes" />
        </div>
        <div class="mb-4 px-2">
          <label for="additionalNotesInput"
            class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Additional Notes</label>
          <textarea rows="10" cols="40" id="additionalNotesInput" v-model="model.additionalNotes" />
        </div>
        <div v-if="model.additionalGuestAvailable">
          You have {{ model.additionalGuestAvailable }} guests you can invite!
        </div>
        <div>
          <button v-if="moreGuestsAvailable" v-on:click="createAdditionalGuest" type="button"
            class="text-white hover:text-secondary-dark focus:ring-4 font-medium text-lg px-5 py-2.5 mr-2 mb-2 bg-primary-dark hover:bg-secondary focus:outline-none focus:ring-secondary-darker">Add
            Additional
            Guest</button>
        </div>
        <div class="mb-4 px-2">
          <span v-for="(guest, index) in model.additionalGuests">
            <div class="mb-4 px-2">
              <p>Guest {{ index + 1 }}</p>
              <div class="mb-4 px-2">
                <label class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Preferred
                  Name</label>
                <input v-model="guest.preferredName"
                  class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5" />
              </div>
              <div class="mb-4 px-2">
                <label class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Dietary
                  Notes</label>
                <input v-model="guest.dietaryNotes"
                  class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5" />
              </div>
              <div class="mb-4 px-2">
                <label class="block mb-2 text-2xl  font-medium text-primary-darkest dark:text-gray-300">Additional
                  Notes</label>
                <input v-model="guest.additionalNotes"
                  class="bg-white border border-white-darkest text-primary-darkest text-sm rounded-lg focus:ring-primary focus:border-primary max-w-md w-full p-2.5" />
              </div>
              <button v-on:click="removeAdditionalGuest(index)" type="button"
                class="text-white hover:text-error-dark focus:ring-4 font-medium text-lg px-5 py-2.5 mr-2 mb-2 bg-error hover:bg-secondary focus:outline-none focus:ring-secondary-darker">Delete</button>
            </div>
          </span>
        </div>
        <div>
          <button v-on:click="updateInvitee" type="button"
            class="text-white hover:text-secondary-dark focus:ring-4 font-medium text-lg px-5 py-2.5 mr-2 mb-2 bg-primary-dark hover:bg-secondary focus:outline-none focus:ring-secondary-darker">Update
          </button>
        </div>
      </form>
    </div>
  </div>
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