import { Live } from "./live.model";

export class ResponsePageble {
    content: Live[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: any[];
    size: number;
    sort: number;
    totalElements: number;
    totalPages: number;

    constructor(content: Live[], first: boolean, last: boolean, number: number, numberOfElements: number, pageable: any[], size: number, sort: number, totalElements: number, totalPages: number) {
        this.content = content;
        this.first = first;
        this.last = last;
        this.number = number;
        this.numberOfElements = numberOfElements;
        this.pageable = pageable;
        this.size = size;
        this.sort = sort;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }

}