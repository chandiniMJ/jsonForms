export type leftNavSubData = {
    id:string;
    title:string;
    serialCount:number;
}
export type leftNavData = {
    id:string;
    title:string;
    serialCount:number;
    subList:leftNavSubData[];
}