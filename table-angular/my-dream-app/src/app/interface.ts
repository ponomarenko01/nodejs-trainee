interface Interface {
    average: number;
  }
  export interface ShowDetail {
    id: number;
    name: string;
    language: number;
    genres: string;
    status: string;
    rating: Interface;
  }
  export interface ShowsResponse {
    show: ShowDetail;
    score: number;
  }