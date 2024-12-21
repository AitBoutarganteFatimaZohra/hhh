import React, { useState } from 'react';
import './HomePage.css';

const backgroundImages = [
  'https://generations.fr/media/event/672deec6f11c8-a-gazo2-1440x1440.jpg',
  'https://imgs.search.brave.com/4UVrv7CVwEqu-BAJ4wXy0N37HivWSdddxylKqn79lRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzMzU1/MDIxLmpwZw',
  'https://example.com/third-background.jpg',
];

const events = [
  {
    id: 1,
    title: 'Rock Festival 2024',
    date: 'June 15, 2024',
    location: 'Casablanca, Morocco',
    image: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/A8i6543ugr/image/gazo1719790303606-format1by1.jpg',
  },
  {
    id: 2,
    title: 'Jazz Night',
    date: 'July 10, 2024',
    location: 'Marrakech, Morocco',
    image: 'https://pbs.twimg.com/media/GeENqVFWUAENl6f?format=jpg&name=large',
  },
  {
    id: 3,
    title: 'Pop Sensation Tour',
    date: 'August 5, 2024',
    location: 'Rabat, Morocco',
    image: 'https://images-prod.dazeddigital.com/1535/azure/dazed-prod/1360/3/1363185.JPG',
  },
  {
    id: 4,
    title: 'Electronic Beats',
    date: 'September 12, 2024',
    location: 'Agadir, Morocco',
    image: 'https://imgs.search.brave.com/1e6sw4ikZ1qPamI35HGNgB0VfDeTem5pmkao4b64M68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzMwMi8xMDIv/NDc0L2RyYWtlLTRr/LWhkLXdhbGxwYXBl/ci1wcmVnaWV3Lmpw/Zw',
  },
  {
    id: 5,
    title: 'Indie Rock Vibes',
    date: 'October 3, 2024',
    location: 'Fes, Morocco',
    image: 'https://imgs.search.brave.com/_H1PbX8XcihpmwOg08Sar33n9USGW4ob7H34NwBrOpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzUx/NzgxOS5qcGc',
  },
  {
    id: 6,
    title: 'Classical Night',
    date: 'November 20, 2024',
    location: 'Tangier, Morocco',
    image: 'https://imgs.search.brave.com/LoyQLDdlFrdjeqQq0vbJN6lobsNQTFgdNcM83R767Mk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC9kLzcv/Yi8xMDA5MTQuanBn',
  },
];
const events2 = [
  {
    id: 1,
    title: 'Rock Festival 2024',
    date: 'June 15, 2024',
    location: 'Casablanca, Morocco',
    image:  'https://imgs.search.brave.com/LC_f3Jy7bsDDz0Abjcmpb07TAo64mNMxzXmvezMFYlg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmJudGltZXMuY29t/L2ltYWdlcy9OZXRf/V29ydGhfYW5kX0Zp/bmFuY2lhbF9TdWNj/ZXNzX29mX0VsX0dy/YW5kZV9Ub3RvLmpw/Zw',
  },
  {
    id: 2,
    title: 'Jazz Night',
    date: 'July 10, 2024',
    location: 'Marrakech, Morocco',
    image: 'https://imgs.search.brave.com/JPJiDEPcwzq2yeUl9CEuro9SjaGYiwnC58K6KqdG040/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/MjMwODc0Ny9waG90/by9mcmVuY2gtcmFw/cGVyLXNjaC1wb3Nl/cy1kdXJpbmctYS1w/aG90by1zZXNzaW9u/LWluLXBhcmlzLW9u/LWFwcmlsLTEzLTIw/MjEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTRVMFlaWGpj/T2FyYVQ2YUItRlFj/WkNFaV9lSkUzVVZk/djg3b0N0RjVGaVk9',
  },
  {
    id: 3,
    title: 'Pop Sensation Tour',
    date: 'August 5, 2024',
    location: 'Rabat, Morocco',
    image: 'https://imgs.search.brave.com/y5qq0YCnO28BYA2zo-f1Q1tlwVyjJtjyWwEpHmQfW6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/NzQ5MDE0MS9waG90/by91cy1yYXBwZXIt/dHJhdmlzLXNjb3R0/LWFycml2ZXMtZm9y/LXRoZS1zY3JlZW5p/bmctb2YtdGhlLWZp/bG0tdGhlLWlkb2wt/ZHVyaW5nLXRoZS03/NnRoLWVkaXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWR1NXRWQ2kxeFdH/R2wtRHVKWlRTTlUt/cV93TS1VVnd1eEN3/Yjh2NmEtaU09',
  },
  {
    id: 4,
    title: 'Electronic Beats',
    date: 'September 12, 2024',
    location: 'Agadir, Morocco',
    image: 'https://imgs.search.brave.com/kTrpFHQ_BfTb0UplESExPUQMzEMYvwNqUegwpVdUWX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bGVtZGUuZnIvMjAy/Mi8xMi8xNC8wLzAv/NzkzNy81Mjk0LzY2/NC8wLzc1LzAvZTI0/Y2Y0Ml8xNjcxMDI5/OTgyMzcyLWp1bC1j/LW9saXZpZXJtYXJ0/aW5vLmpwZw',
  },
  {
    id: 5,
    title: 'Indie Rock Vibes',
    date: 'October 3, 2024',
    location: 'Fes, Morocco',
    image: 'https://imgs.search.brave.com/JoYKxn5xFdkYS7ZU5hUvBxgyQXic4kUusny3zEynjpg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmxh/LWNyb2l4LmNvbS83/Mjl4MC9zbWFydC8y/MDIxLzExLzI3LzEz/MDExODczNzAvcmFw/cGV1ci1OaW5ob2Qt/c2VhbmNlLXBob3Rv/LTE4LW5vdmVtYnJl/LVBhcmlzXzIuanBn',
  },
  {
    id: 6,
    title: 'Classical Night',
    date: 'November 20, 2024',
    location: 'Tangier, Morocco',
    image: 'https://imgs.search.brave.com/qUIIBc4wxMHxH9tMoO-uR7TZ92g52kEDbOLIVyzK0TE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzYyMS84Mzcv/MTE0L2thbnllLXdl/c3QtbXVzaWMtc2lu/Z2VyLXJhcHBlci13/YWxscGFwZXItcHJl/dmlldy5qcGc',
  },
];


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < events.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        {/* Background Section */}
        <div 
          className="upcoming-background"
          style={{ backgroundImage: `url(${backgroundImages[currentPage]})` }}
        >
          <h2>Upcoming Events</h2>
          {/* Events */}
          <div className="event-list">
            {paginatedEvents.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            ))}
          </div>

          {/* Pagination Arrows */}
          <div className="pagination-arrows">
          <button onClick={handlePrev} disabled={currentPage === 0} className="prev-arrow">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M12 5l-7 7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg> {/* Left arrow (SVG) */}
</button>
<button onClick={handleNext} disabled={startIndex + itemsPerPage >= events.length} className="next-arrow">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg> {/* Right arrow (SVG) */}
</button>

          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="featured" className="featured">
        <h2>Featured Events</h2>
        <div className="event-list">
          {events2.map((event) => (
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
