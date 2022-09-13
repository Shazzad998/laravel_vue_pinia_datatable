import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
    state: () => ({
        posts: [],

        title: null,
        description: null,
    }),

    getters: {},
    actions: {
        getPosts() {},
        getPost() {},
        storePost() {
            console.log(this.title, this.description);
        },
        updatePost() {},
    },
});
