export interface IPagination {
  page: number;
  size: number;
  sort: string[];
}

export interface ISearch {
  query: string;
}

export interface ISearchWithPagination extends ISearch, IPagination {}

export class SearchWithPagination implements ISearchWithPagination {
  constructor(
    public page: number,
    public size: number,
    public sort: string[],
    public query: string
  ) {}
}
