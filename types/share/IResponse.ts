export interface IResponse<T> {
    statusCode?: number;
    error?: string;
    data?: T
}