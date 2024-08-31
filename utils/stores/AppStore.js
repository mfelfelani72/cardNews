import { create } from "zustand";

const useAppStore = create((set) => ({

    //    sidebar 

    sidebarLink: "news",
    setSidebarLink: (sidebarLink) => set({ sidebarLink: sidebarLink }),


    statusSidebar: "",
    setStatusSidebar: (statusSidebar) => set({ statusSidebar: statusSidebar }),

    //    sidebar 

}))

export default useAppStore;