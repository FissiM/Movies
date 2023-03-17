const movies = [
  {
    name: "The Batman",
    year: 2022,
    image: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJApnr9b8RCQjrOr0YpzqMTY1xXWNrfWHgq0VvNxVNUaG9XyrV",
      width: "300px",
      height: "400px",
    },
    ratings: [2, 4, 4, 5, 3],
  },
  {
    name: "Love and Thunder",
    year: 2022,
    image: {
      src: "https://cdn.mos.cms.futurecdn.net/3bCxLPmBStyVF2ajckSfLR-1024-80.jpg.webp",
      width: "300px",
      height: "400px",
    },
    ratings: [1, 2, 3, 4, 5],
  },
  {
    name: "The Lord of The Rings",
    year: 2003,
    image: {
      src: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      width: "300px",
      height: "400px",
    },
    ratings: [4, 5, 5, 5, 4],
  },
  {
    name: "Donnie Darko",
    year: 2003,
    image: {
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSn6tPs7Ogz0dHc7Lwm8p4o0KLjfGEqt3IJW7i9bWBtp2f6OwMw",
      width: "300px",
      height: "400px",
    },
    ratings: [2, 3, 3, 4, 1],
  },
  {
    name: "Apocalypto",
    year: 2003,
    image: {
      src: "https://m.media-amazon.com/images/M/MV5BMzhmNGMzMDMtZDM0Yi00MmVmLWExYjAtZDhjZjcxZDM0MzJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      width: "300px",
      height: "400px",
    },
    ratings: [1, 1, 5, 5, 5],
  },
];
const movieContainer = document.querySelector(".movie-container");
const sceleton1 = (title, year, src, width, height, ratings) => {
  return `
    <div class ="movie">
        <h2> Title: ${title}</h2>
        <span class="year">Year: ${year}</span>
        <img src=${src} width=${width} height=${height} />
        <span class="ratings">Ratings: ${"⭐".repeat(ratings)}</span>
    </div>
    `;
};

function setRatings(num) {
  return ``;
}

movies.forEach((movie) => {
  const { name, year, image, ratings } = movie;
  const { src, width, height } = image;
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  let averageRating = Math.ceil(sum / ratings.length);
  movieContainer.innerHTML += sceleton1(
    name,
    year,
    src,
    width,
    height,
    averageRating
  );
});
