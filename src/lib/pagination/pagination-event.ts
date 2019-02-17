export interface PaginationEvent {
    skip: number;
    limit: number;
    currentPage: number;
    totalRecords: number;
    selectedPage: number;
    selectedSkip: number;
}
