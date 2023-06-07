import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'b4eq2tbc',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-07',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
