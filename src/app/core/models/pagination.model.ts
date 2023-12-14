
export class PaginationModel {

  constructor( public pageNumber:number,
               public pageSize:number,
               public totalElements:number,
               public totalPages:number) {
  }
}
