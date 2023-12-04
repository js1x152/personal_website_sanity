import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk'
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';
const config = defineConfig({

    projectId: "s64yqfvs",

    dataset: "production",

    title: "John Secen's Personal Website",

    apiVersion: "2023-12-03",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas}

})

export default config;