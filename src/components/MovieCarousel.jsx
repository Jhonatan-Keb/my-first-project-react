// src/components/MovieCarousel.jsx
// Carrusel hero estilo Cinemex: banner de pantalla completa con
// imagen de fondo, poster, título destacado y botones de acción.

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function MovieCarousel({ movies }) {
  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={movies.length >= 3}
        slidesPerView={1}
        speed={700}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="hero-slide">
              {/* Fondo difuminado — usa la misma imagen del poster */}
              <div
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${movie.image})` }}
              />
              {/* Capa de oscurecimiento sobre el fondo */}
              <div className="hero-slide-overlay" />

              {/* Contenido principal del slide */}
              <div className="hero-slide-content">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="hero-slide-poster"
                />
                <div className="hero-slide-info">
                  <span className="hero-slide-label">
                    ⭐ DESTACADA DE LA SEMANA
                  </span>
                  <h2 className="hero-slide-title">{movie.title}</h2>
                  <p className="hero-slide-genre">{movie.genre}</p>
                  <div className="hero-slide-actions">
                    <Link
                      to={`/detalle/pelicula/${movie.id}`}
                      className="btn-hero-primary"
                    >
                      Comprar boletos
                    </Link>
                    <Link
                      to={`/detalle/pelicula/${movie.id}`}
                      className="btn-hero-outline"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel
