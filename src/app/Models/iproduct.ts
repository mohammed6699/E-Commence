export interface IProduct {
    productName: string,
    id: number,
    productQuantity: number,
    productPrice: number,
    productImage: string,
    CategoryID: number,
    productDescription?: string,
    ClientName?: string,
    showImg:boolean,
    showdate:boolean
}
