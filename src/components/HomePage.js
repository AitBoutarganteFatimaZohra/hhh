import React from 'react';
import Header from './Header';
import EventCard from './EventCard';
import './HomePage.css';

const events = [
  {
    title: 'Rock Festival 2024',
    date: 'June 15, 2024',
    location: 'Casablanca, Morocco',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Jazz Night',
    date: 'July 10, 2024',
    location: 'Marrakech, Morocco',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Pop Sensation Tour',
    date: 'August 5, 2024',
    location: 'Rabat, Morocco',
    image: 'https://via.placeholder.com/150',
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section id="featured" className="featured">
        <h2>Featured Event</h2>
        <EventCard 
          title="Mega Music Bash 2024" 
          date="May 20, 2024" 
          location="Tangier, Morocco" 
          image="https://via.placeholder.com/300"
        />
      </section>
      <section id="upcoming" className="upcoming">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <EventCard 
              key={index} 
              title={event.title} 
              date={event.date} 
              location={event.location} 
              image={event.image} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
