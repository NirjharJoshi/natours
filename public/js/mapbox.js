/* eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    //   'pk.eyJ1IjoiaGVyby0xMjMiLCJhIjoiY2xlczZ5am84MHR5bTN5cDEyOWtwdzNocyJ9.6gMvVFCZqlVKHWyJ-01q4g';
    'pk.eyJ1IjoiaGVyby0xMjMiLCJhIjoiY2xlczc3Ynd1MHUwMTNzcDF5djcxN2FoMCJ9.gMjt48KCQGGjRx1CPURdGA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hero-123/cles968mi00c801p5n1ojsde5',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 100, right: 100 }
  });
};
