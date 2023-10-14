// // --- Prictice Time --- \\ \\
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// Render olmasi icin bunlari burada bu sekilde atama yapmalisin yoksa render olmuyorlar
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
