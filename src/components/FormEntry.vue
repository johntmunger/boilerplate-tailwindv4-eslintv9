<script setup>
import { friendStore } from "../stores/friendsStore";
import { ref } from "vue";

const friends = friendStore();
let newFriend = ref("");

function addFriend() {
  console.log("Adding friend:", newFriend.value);
  friends.addFriend(newFriend.value);
  newFriend.value = "";
}
</script>

<template>
  <form id="entry-form" class="entry-form">
    <textarea placeholder="Who is your friend?" v-model="newFriend" name="fname" required>
></textarea
    >
    <div class="entry-form-footer">
      <span
        >You have
        <span v-if="friends.names.length === 0">no friends</span>
        <span v-else-if="friends.names.length === 1">{{ friends.names.length }} friend!</span>
        <span v-else> {{ friends.names.length }} friends!</span>
      </span>

      <button
        type="button"
        class="active:shadow-inner active:scale-95 transition duration-150 ease-in-out cursor-pointer"
        @click="addFriend"
        :disabled="newFriend.length === 0"
      >
        Add a friend
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              style="fill: transparent"
            />
          </svg>
        </span>
      </button>
    </div>
  </form>

  <ul>
    <li
      class="entry-form margins flex-container"
      v-for="(name, index) in friends.names"
      :key="index"
    >
      <div class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            style="fill: transparent"
          />
        </svg>
      </div>
      <div>{{ name }}</div>
    </li>
  </ul>
</template>

<style scoped>
.flex-container {
  display: flex;
}
.entry-form textarea {
  height: 4rem;
}
.entry-form.margins {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
button {
  background-color: steelblue;
}
</style>
