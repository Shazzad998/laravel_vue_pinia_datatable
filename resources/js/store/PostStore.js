import axios from "axios";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
    state: () => ({
        isModalOpen: false,
        posts: [],
        title: null,
        description: null,
        is_published: false,
    }),

    getters: {},
    actions: {
        async getPosts() {
            try {
                let response = await axios.get("/api/posts");
                this.posts = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        getPost() {},
        storePost() {
            let formData = {
                title: this.title,
                description: this.description,
                is_published: this.is_published,
            };
            axios.post("/api/posts", formData).then((response) => {
                console.log(response.data);
                this.closeModal();
            });
        },

        async editPost(id) {
            try {
                let response = await axios.get("/api/posts/" + id);
                this.title = response.data.title;
                this.description = response.data.description;
                this.is_published =
                    response.data.is_published == 1 ? true : false;
                this.openModal();

                console.log(this.is_published);
            } catch (error) {
                console.log(error);
            }
        },
        updatePost() {},

        openModal() {
            this.isModalOpen = true;
        },

        closeModal() {
            this.isModalOpen = false;
        },
    },
});
