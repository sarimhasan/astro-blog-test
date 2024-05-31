import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    trailingSlash: false,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.{md,mdx}')),
  });
}
// export async function GET(context) {
//   return rss({
//     title: 'Astro Learner | Blog',
//     description: 'My journey learning Astro',
//     site: context.site,
//     items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
//     customData: `<language>en-us</language>`,
//   });
// }
