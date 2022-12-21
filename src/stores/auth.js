import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: true,
        user:{
            name: "Sarthak",
            email: "arthak@bitfumes.com"
        }
    }),
    actions: {
        logout() {
            this.$patch((state) => {
                (state.isAuthenticated = false), (state.user = {});
              });
        },
        login() {
            this.$reset();
        }
    }
});