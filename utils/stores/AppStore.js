import { create } from "zustand";

const useAppStore = create((set) => ({

    //    sidebar 

    sidebarLink: "news",
    setSidebarLink: (sidebarLink) => set({ sidebarLink: sidebarLink })

    //    sidebar 

}))

export default useAppStore;