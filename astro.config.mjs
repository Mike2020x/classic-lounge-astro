import { defineConfig } from 'astro/config';

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserOrOrganizationSite = repository === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'https://classiclounge.example',
  base: owner && !isUserOrOrganizationSite ? `/${repository}/` : '/',
  output: 'static'
});
