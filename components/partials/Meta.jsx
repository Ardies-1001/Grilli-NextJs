import React from 'react'

export default function Meta() {
  return (
    <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* - primary meta tags */}
        <title>Grilli - Amazing Delicious Food</title>
        <meta name="title" content="Grilli - Amazing & Delicious Food" />
        <meta name="description" content="This is a Restaurant html template made by codewithsadee" />
        {/* - favicon */}
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        {/* - google font link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet" />
        {/* - custom css link */}
        <link rel="stylesheet" href="./assets/css/style.css" />
        {/* - preload images */}
        <link rel="preload" as="image" href="./assets/images/hero-slider-1.jpg" />
        <link rel="preload" as="image" href="./assets/images/hero-slider-2.jpg" />
        <link rel="preload" as="image" href="./assets/images/hero-slider-3.jpg" />
    </>
  )
}
