import create from "zustand";
import axios from "../api/axiosClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useAuthStore = create()(
    (set) => ({
        id: null,
        firstName: null,
        lastName: null,
        role: null,
        username: null,
        isAdmin: null,
        login: async (username, password) => {
            const loginData = {
                username,
                password
            };
            try {
                const id = toast.loading("Logging In...", {
                    position: "top-right"
                })
                const res = await axios.post(
                    "auth/login",
                    loginData
                );
                set(() => ({
                    id: res.data.id,
                    lastName: res.data.lastName,
                    firstName: res.data.firstName,
                    role: res.data.role,
                    username: res.data.username,
                    isAdmin: res.data.role === "ADMIN" ? true : false
                }));
                toast.update(id, {
                    render: "Logged In",
                    type: "success",
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {
                throw error
            }
        },
        logout: async () => {
            try {
                await axios.post('/auth/logout')
                set(() => ({
                    id: null,
                    firstName: null,
                    lastName: null,
                    role: null,
                    username: null,
                    isAdmin: null,
                }))
            } catch (error) {
                console.log(error)
                return "Error during Logout"
            }
        },
    }),
    {
        name: "authState",
    }
);