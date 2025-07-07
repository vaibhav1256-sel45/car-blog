export interface CarBlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  ratings: number;
  date: string;
  thumbnail: string;
  tag: string;
  specifications: {
    make: string;
    model: string;
    year: number;
    power: string;
    range: string;
    acceleration: string;
    topSpeed: string;
    drivetrain: string;
    price: string;
  };
}