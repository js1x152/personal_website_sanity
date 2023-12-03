import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk'
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';
const config = defineConfig({

    projectId: "s64yqfvs",

    dataset: "production",

    title: "My Personal Website",

<<<<<<< HEAD
    apiVersion: "2023-12-03",
=======
    apiVersion: "2023-12-01",
>>>>>>> parent of 3b1679d (Adding resume page)

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas}

})

export default config;