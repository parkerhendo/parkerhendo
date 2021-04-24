---
title: 'My First Story'
date: '2021-04-24'
excerpt: 'To use local Markdown content with Next.js, you can transform your source files (/posts/my-post.md) to HTML using remark and remark-html. These Node libraries can be used inside getStaticProps / getStaticPaths / getServerSideProps.'
author:
  name: Parker Henderson
---
To use local Markdown content with Next.js, you can transform your source files (/posts/my-post.md) to HTML using remark and remark-html. These Node libraries can be used inside getStaticProps / getStaticPaths / getServerSideProps.

To use local Markdown content with Next.js, you can transform your source files (/posts/my-post.md) to HTML using remark and remark-html. These Node libraries can be used inside getStaticProps / getStaticPaths / getServerSideProps. For example, the blog-starter example reads all the Markdown files in the _posts directory and generates a unique page for each slug. This solution works for both local and remote data. If your data is remote, you'd simply read from a CMS instead of your file system.

To use MDX with Next.js, your approach will differ based on your data source location. For local content, you can use the @next/mdx package. This allows you to create pages directly with the .mdx extension inside your pages/ folder. For remote data, one option is to use next-mdx-remote (a community project) to fetch your Markdown content inside getStaticProps / getStaticPaths.

To use local Markdown content with Next.js, you can transform your source files (/posts/my-post.md) to HTML using remark and remark-html. These Node libraries can be used inside getStaticProps / getStaticPaths / getServerSideProps. For example, the blog-starter example reads all the Markdown files in the _posts directory and generates a unique page for each slug. This solution works for both local and remote data. If your data is remote, you'd simply read from a CMS instead of your file system.

To use MDX with Next.js, your approach will differ based on your data source location. For local content, you can use the @next/mdx package. This allows you to create pages directly with the .mdx extension inside your pages/ folder. For remote data, one option is to use next-mdx-remote (a community project) to fetch your Markdown content inside getStaticProps / getStaticPaths.