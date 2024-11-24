// Funkcija koja prikazuje zvjezdice na osnovu ocjene
export const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // zaokruži ocjenu
  const emptyStars = totalStars - filledStars;

  return (
    <div className="flex">
      {/* Prikaz ispunjenih zvjezdica */}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.669 5.148h5.416c.97 0 1.371 1.24.588 1.81l-4.374 3.18 1.669 5.148c.3.921-.755 1.688-1.538 1.118L10 14.347l-4.374 3.184c-.783.57-1.838-.197-1.538-1.118l1.669-5.148-4.374-3.18c-.783-.57-.382-1.81.588-1.81h5.416L9.05 2.927z"></path>
          </svg>
        ))}

      {/* Prikaz praznih zvjezdica */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.669 5.148h5.416c.97 0 1.371 1.24.588 1.81l-4.374 3.18 1.669 5.148c.3.921-.755 1.688-1.538 1.118L10 14.347l-4.374 3.184c-.783.57-1.838-.197-1.538-1.118l1.669-5.148-4.374-3.18c-.783-.57-.382-1.81.588-1.81h5.416L9.05 2.927z"></path>
          </svg>
        ))}
    </div>
  );
};
