// src/components/MovieCarousel.jsx
// Requiere: npm install swiper

import { Swiper, SwiperSlide } from "swiper/react"
// Módulo de navegación para habilitar flechas en el carrusel
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import MovieCard from "./MovieCard"

function MovieCarousel({ movies }) {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title}
              genre={movie.genre}
              image={movie.image}
              linkTo={`/detalle/pelicula/${movie.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel