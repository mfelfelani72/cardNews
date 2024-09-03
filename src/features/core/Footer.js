import React from "react";

export function Footer() {

    return (
        <footer className="bg-B-bright/30 dark:bg-DB-dim/95">
            <div className="h-16 pt-5 md:ml-[12.5rem]">
                <p className="text-sm/6 text-T-bright dark:text-DT-bright text-center">
                    © 2024 <a href="#" className="text-color-theme dark:text-D-color-theme">AimoonHUB</a> Labs Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}