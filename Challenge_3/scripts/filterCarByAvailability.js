function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    // mengecek ketersediaan mobil
    if (cars[i].available === true) {
      result.push(cars[i]); // Add the car to the result array
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}