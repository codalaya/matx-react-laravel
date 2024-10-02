import { usePage, Link as InertiaLink } from "@inertiajs/react";
import React from "react";

export function NavLink({ children, to, ...props }) {
    return (
        <InertiaLink href={to} {...props}>
            {children}
        </InertiaLink>
    );
}

export function Link({ children, to, ...props }) {
    return (
        <InertiaLink href={to} {...props}>
            {children}
        </InertiaLink>
    );
}

export function useLocation() {
    const { url } = usePage();
    return { pathname: url };
}
