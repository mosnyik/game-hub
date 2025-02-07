export interface FetchResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: Array<T>;
}
