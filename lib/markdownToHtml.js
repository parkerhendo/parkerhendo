import remark from 'remark';
import html from 'remark-html';
import breaks from 'remark-breaks'

export default async function markdownToHtml(markdown) {
  const result = await remark()
                        .use(breaks)
                        .use(html)
                        .process(markdown);
  return result.toString();
}