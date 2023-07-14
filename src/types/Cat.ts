export interface Cat {
  id: string;
  url?: string;
  name: string;
  breeds?: Array<{ [key: string]: any }>;
}

export interface FavoriteCat extends Cat {
  image: {
    url: string;
  };
}
