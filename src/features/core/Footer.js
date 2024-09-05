import React from "react";

import { useTranslation } from "react-i18next";

export function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="bg-B-bright/30 dark:bg-DB-dim/95">
            <div className="h-16 py-2 ltr:md:ml-[12.5rem] rtl:md:mr-[12.5rem]">
                <div className="text-sm/6 text-T-bright dark:text-DT-bright text-center">
                    <p className="ltr flex-col">
                        <div>© 2024 <a href="#" className="text-color-theme dark:text-D-color-theme">AimoonHUB</a></div>
                        <div>{t('copyright')}</div>
                    </p>
                </div>
            </div>
        </footer>
    );
}