import { usePage } from "@inertiajs/react";
const { auth } = usePage().props;

export default {
    user: auth.user,
    logout: () => {
        console.log("logging out user.");
    },
};
