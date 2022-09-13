import axios from "axios";
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
            let formData = {
                title: this.title,
                description: this.description,
            };
            axios.post("/api/posts", formData).then((response) => {
                console.log(response.data);
            });
        },
        updatePost() {},
    },
});
