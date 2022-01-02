import React from 'react';
import './VideoSectionCard.css';
export default function VideoSectionCard(props) {
  return (
    <React.Fragment>
      <section className="video-section-card">
        <h1 className="video_card_count">{props.count}</h1>
        <h2 className="video_card_title">
          <span style={{ color: '#ff3300' }}>{props.title.split(' ')[0]}</span>{' '}
          {props.title.split(' ')[1]}
        </h2>
        <p className="video_card_description">{props.description}</p>
      </section>
    </React.Fragment>
  );
}
