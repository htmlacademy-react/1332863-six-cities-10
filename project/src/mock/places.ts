type Places = {
	id: number;
	isPremium: boolean;
	imgSrc: string;
	price: number;
	rating: number;
	description: string;
	housingType: string;
};

const places: Places[] = [
  {
    id: 324123423,
    isPremium: true,
    imgSrc: 'img/apartment-01.jpg',
    price: 120,
    rating: 60,
    description: 'Beautiful &amp; luxurious apartment at great location',
    housingType: 'Apartment',
  },
  {
    id: 99324034,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 260,
    rating: 100,
    description: 'Wood and stone place',
    housingType: 'Private room',
  },
  {
    id: 90432422434,
    isPremium: true,
    imgSrc: 'img/apartment-02.jpg',
    price: 80,
    rating: 100,
    description: 'Canal View Prinsengracht',
    housingType: 'Apartment',
  },
  {
    id: 1234090094,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    price: 100,
    rating: 80,
    description: 'Wood and stone place',
    housingType: 'Private room',
  },
  {
    id: 8433223434231,
    isPremium: false,
    imgSrc: 'img/apartment-03.jpg',
    price: 220,
    rating: 40,
    description: 'Nice, cozy, warm big bed apartment',
    housingType: 'Apartment',
  },
];

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export { places, cities };
