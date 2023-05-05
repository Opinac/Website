import { loginAuth } from "./lib.js";
if (!loginAuth()) { window.location.replace('./login') }