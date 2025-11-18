<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <form id="entry-form" class="entry-form">
      <textarea placeholder="Who is your friend?"></textarea>
      <div class="entry-form-footer">
        <span>Currenly you have no friends</span>
        <button>
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
    <ul></ul>
  </main>
</template>

<style scoped>
.entry-form textarea {
  height: 4rem;
}
button {
  background-color: steelblue;
}
</style>
