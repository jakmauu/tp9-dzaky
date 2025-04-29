export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface Response {
  page: number;
  results: Post[];
}