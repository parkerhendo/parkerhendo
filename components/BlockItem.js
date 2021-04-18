import React from 'react';

/**
 * Component Props
 *
 * @param   {string}  title        displays a string title
 * @param   {string}  duration     displays string of the duration at job
 * @param   {string}  description  a paragraph of work experience
 * @param   {string}  link         a link to work examples
 *
 * @return  {Component}            returns a react component
 */
export default function BlockItem({ title, duration, description, link }) {
  return (
    <div className='work-item'>
      <div className='work-header'>
        <h4 className='title-md work-title'>{title}</h4>
        <h5 className='title-sm work-date'>{duration}</h5>
      </div>
      <p className='body-lg paragraph'>{description}</p>
      {link && (
        <a href={link} className='button work-button body-sm'>
          View work
        </a>
      )}
    </div>
  );
}
