import Home from '../pages/Home.svelte';
import CreateCloud from '../pages/CreateCloud.svelte';
import { writable } from 'svelte/store';

const router = { '/': Home, '/home': Home, '/create-cloud': CreateCloud }

export default router;
export const currentRoute = writable('/home');