interface CardProps {
    id: number,
    productName: string,
    price: number,
    isLike: boolean
}
function Card({id, productName, price, isLike}: CardProps){
    return (
        <>
            <h1>Product information</h1>
            <p>id: {id}</p>
            <p>productName: {productName}</p>
            <p>price: {price}</p>
            <p>isLike: {isLike ? "True" : "False"}</p>
        </>
    )
}

export default Card