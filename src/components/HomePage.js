import React from 'react';
import './HomePage.css';

const events = [
  {
    id: 1,
    title: 'Rock Festival 2024',
    date: 'June 15, 2024',
    location: 'Casablanca, Morocco',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Jazz Night',
    date: 'July 10, 2024',
    location: 'Marrakech, Morocco',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Pop Sensation Tour',
    date: 'August 5, 2024',
    location: 'Rabat, Morocco',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Electronic Beats',
    date: 'September 12, 2024',
    location: 'Agadir, Morocco',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Indie Rock Vibes',
    date: 'October 3, 2024',
    location: 'Fes, Morocco',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'Classical Night',
    date: 'November 20, 2024',
    location: 'Tangier, Morocco',
    image: 'https://via.placeholder.com/300',
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">🎶 Concert Vibes</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#featured">Featured</a>
          <a href="#upcoming">Upcoming</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Upcoming Events */}
      <section id="upcoming" className="upcoming">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section id="featured" className="featured">
        <h2>Featured Events</h2>
        <div className="event-list">
          {events.map((event) => (
            <div key={`featured-${event.id}`} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
