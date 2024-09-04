import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

import i18n from "../services/i18n";


function configureLang(id, dir) {

    i18n.changeLanguage(id);

    const rootHtml = document.getElementById("root-html");
    localStorage.setItem("currentLngId", [id]);
    localStorage.setItem("currentLngDir", [dir]);

    if (rootHtml && dir == 'rtl')
        rootHtml.setAttribute("dir", 'rtl');

    else
        rootHtml.setAttribute("dir", 'ltr');

    return id;

}

const useAppStore = create((set) => ({

    //    Loading

    loading: false,
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

    //    language

    languageApp: '',
    setLanguageApp: (id, dir) => set({
        languageApp: configureLang(id, dir)
    }),

    //    language

}))

export default useAppStore;