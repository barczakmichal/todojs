
import { writable} from "svelte/store";

export const items = writable([
    {
        id:1,
        text: "new task",
        completed: false,
    },
    {
        id:2,
        text: "learn svelte",
        completed: true,
    }
]);