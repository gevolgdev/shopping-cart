interface RatingProps {
  count: number;
  rate: number;
}

export interface DataProps {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image:string;
  rating: RatingProps;
}