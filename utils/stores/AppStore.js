import { create } from "zustand";

const useAppStore = create((set) => ({

    //    Loading

    loading: true,
    setLoading: (loading) => set({ loading: loading }),

    //    Loading

    //    sidebar 

    sidebarLink: "news",
    setSidebarLink: (sidebarLink) => set({ sidebarLink: sidebarLink }),


    statusSidebar: "",
    setStatusSidebar: (statusSidebar) => set({ statusSidebar: statusSidebar }),

    //    sidebar 

    //    header 

    progressBar: "0",
    setProgressBar: (progressBar) => set({ progressBar: progressBar }),

    //    header 

}))

export default useAppStore;