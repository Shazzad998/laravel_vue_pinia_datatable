import axios from "axios";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
    state: () => ({
        isModalOpen: false,
        isShowModalOpen: false,
        isDeleteModalOpen: false,
        dataId: null,
        posts: [],
        post: {},
        title: null,
        description: null,
        image: null,
        is_published: false,
    }),

    getters: {},
    actions: {
        async getPosts(page = 1) {
            try {
                let response = await axios.get("/api/posts?page=" + page);
                this.posts = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getPost(id) {
            try {
                let response = await axios.get("/api/posts/" + id);
                this.post = response.data.data;
                this.openShowModal();
            } catch (error) {
                console.log(error);
            }
        },

        changeImage(event) {
            this.image = event.target.files[0];
        },
        storePost() {
            let formData = new FormData();
            formData.append("title", this.title);
            formData.append("description", this.description);
            formData.append("image", this.image);
            formData.append("is_published", this.is_published);
            let config = {
                header: {
                    "Content-Type": "image/png",
                },
            };
            axios.post("/api/posts", formData, config).then((response) => {
                console.log(response.data);
                this.closeModal();
                this.getPosts();
            });
        },

        async editPost(id) {
            try {
                let response = await axios.get("/api/posts/" + id);
                this.title = response.data.title;
                this.description = response.data.description;
                this.is_published =
                    response.data.is_published == 1 ? true : false;
                this.dataId = id;
                this.openModal();
            } catch (error) {
                console.log(error);
            }
        },
        updatePost(id) {
            let formData = new FormData();
            formData.append("title", this.title);
            formData.append("description", this.description);
            formData.append("image", this.image);
            formData.append("is_published", this.is_published);
            formData.append("_method", "put");
            let config = {
                header: {
                    "Content-Type": "image/png",
                },
            };

            axios.post("/api/posts/" + id, formData, config).then(() => {
                this.getPosts();
                this.closeModal();
            });
        },

        deletePost(id) {
            axios.delete("/api/posts/" + id).then(() => {
                this.getPosts();
                this.closeDeleteModal();
            });
        },

        openModal() {
            this.isModalOpen = true;
        },

        closeModal() {
            this.isModalOpen = false;
            this.dataId = null;
            this.title = null;
            this.description = null;
            this.is_published = false;
        },

        openDeleteModal(id) {
            this.isDeleteModalOpen = true;
            this.dataId = id;
        },

        closeDeleteModal() {
            this.isDeleteModalOpen = false;
            this.dataId = null;
        },

        openShowModal() {
            this.isShowModalOpen = true;
        },

        closeShowModal() {
            this.isShowModalOpen = false;
        },
    },
});
