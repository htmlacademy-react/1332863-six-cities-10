type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: CityLocation;
};

type OfferHost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: OfferHost;
  description: string;
  location: CityLocation;
  id: number;
};
