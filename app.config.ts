import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	server: {
		preset: 'cloudflare_pages',
		rollupConfig: {
			external: ['__STATIC_CONTENT_MANIFEST'],
		},
	},
});
