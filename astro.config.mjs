// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomasmerva.github.io',
  integrations: [
    starlight({
      title: 'Tomas Merva',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      components: {
        Search: './src/components/no_search.astro',
      },
      social: [
        {
          icon: 'email',
          label: 'Email',
          href: 'mailto:tmerva7@gmail.com',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TomasMerva',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/tomas-merva/',
        }
      ],
      sidebar: [
        {
          label: 'Menu',
          items: [
            // Each item here is one entry in the navigation menu.
            {label: 'Projects', slug: 'guides/projects'},
          ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: {directory: 'reference'},
        // },
      ],
    }),
  ],
});
