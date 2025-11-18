<script setup>
import { friendStore } from "../stores/friendsStore";
import { ref } from "vue";

const friends = friendStore();
let newFriend = ref("");

function addFriend() {
  console.log("Adding friend:", newFriend.value);
  friends.addFriend(newFriend);
}
</script>

<template>
  <form>
    <input v-model="newFriend" placeholder="Enter friend's name" />
    <button type="button" @click="addFriend">Add Friend</button>
  </form>
  <div>
    <h2>Your Friends:</h2>
    <ul>
      <li v-for="(name, index) in friends.names" :key="index">{{ name }}</li>
    </ul>
  </div>
  <form id="entry-form" class="entry-form">
    <textarea placeholder="Who is your friend?"></textarea>
    <div class="entry-form-footer">
      <!-- use the span below in another component to share global state -->
      <span>Currenly you have no friends</span>

      <button type="button">
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
</template>

<style scoped>
.entry-form textarea {
  height: 4rem;
}
button {
  background-color: steelblue;
}
</style>
