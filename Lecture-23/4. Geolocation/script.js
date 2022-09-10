navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
});
