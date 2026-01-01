// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomasmerva.github.io',
  integrations: [
    starlight({
      title: 'Tomas Merva',
      components: {
        Search: './src/components/no_search.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TomasMerva'
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/tomas-merva/'
        }
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {label: 'Example Guide', slug: 'guides/example'},
          ],
        },
        {
          label: 'Reference',
          autogenerate: {directory: 'reference'},
        },
      ],
    }),
  ],
});
