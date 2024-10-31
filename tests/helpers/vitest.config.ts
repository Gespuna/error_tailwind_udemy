import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
    },
  }),
);
// export default defineConfig({
//     test: {
//         // ...specifyOptions here.
//     }
// })

// import vue from "@vitejs/plugin-vue";

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     environment: "happy-dom",
//   },
// });
