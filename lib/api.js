import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = join(process.cwd(), '_posts');

const PAGES_DIRECTORY = join(process.cwd(), 'pages');

export const getPageSlugs = () => {
  return fs.readdirSync(PAGES_DIRECTORY);
};

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_DIRECTORY);
};

export function getPostbySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts =slugs
                  .map(slug => getPostbySlug(slug, fields))
                  .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));
  return posts;
}
