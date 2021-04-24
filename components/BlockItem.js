import React from 'react';
import Link from 'next/link';

/**
 * Component Props
 *
 * @param   {string}  title        displays a string title
 * @param   {string}  category     displays string of the duration at job
 * @param   {string}  description  a paragraph of work experience
 * @param   {string}  link         a link to work examples
 *
 * @return  {Component}            returns a react component
 */
export default function BlockItem({ title, category, description, href, link }) {
  return (
    <div className='work-item'>
      <div className='work-header'>
        <h4 className='title-md work-title'>{title}</h4>
        <h5 className='title-sm work-date'>{category}</h5>
      </div>
      <p className='body-lg paragraph'>{description}</p>
      {href && (
        <a href={href} target='_blank' className='button work-button body-sm'>
          View work
        </a>
      )}
      {link && (
        <Link href={link.href}>
          <a className='button work-button body-sm'>
            {link.label}
          </a>
        </Link>
      )}
    </div>
  );
}
