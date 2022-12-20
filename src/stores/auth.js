import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        user:{
            name: "Sarthak",
            email: "arthak@bitfumes.com"
        }
    })
});