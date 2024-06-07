How to Import SVGs Using the Vite Plugin for SVGR

vite-plugin-svgr is a plugin for Vite that uses svgr under the hood to transform SVGs into React components.

You can install it by running the following command:

# with npm

npm i vite-plugin-svgr

# with yarn

yarn add vite-plugin-svgr

Next, add the plugin inside your app's vite.config.js:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [svgr(), react()],
});

Now, you can import the SVG files as React components:

import { ReactComponent as Logo } from "./logo.svg";
