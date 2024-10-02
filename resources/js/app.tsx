import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SettingsProvider from "./contexts/SettingsContext";
import { MatxTheme } from "./components";
import { MatxLoading } from "@/components";
import "perfect-scrollbar/css/perfect-scrollbar.css";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ App, props }) {
        const rootElement = document.getElementById("root"); // Target existing element
        const initialPage = JSON.parse(rootElement.dataset.page);
        createRoot(rootElement).render(
            <SettingsProvider settings={null}>
                <MatxTheme>
                    <CssBaseline />

                        <App {...props} initialPage={initialPage}  />

                </MatxTheme>
            </SettingsProvider>
        );
    },
});
