const MyInterFace = () => {
    interface Pet {
        name: String,
        age: number,
    }
    const pets: Pet[] = [
        {
            name: "Bird",
            age: 1
        },
        {
            name: "Cat",
            age: 10
        },
        {
            name: "Dog",
            age: 5
        },
    ];
    const petsList = pets.map(pet => <li>{`${pet.name} - ${pet.age}`}</li>)
    interface Phone {
        model: string,
        brand: string,
        price: number
    }
    const phones: Phone[] = [
        {
            model: "A56",
            brand: "Samsung",
            price: 25
        },
        {
            model: "17",
            brand: "Apple",
            price: 30
        },
        {
            model: "G3",
            brand: "Nokia",
            price: 1
        }
    ];
    const phonesList = phones.map(phone => <li>{`${phone.brand} ${phone.model} - Price: ${phone.price}$`}</li>)
    interface Order {
        id: number,
        productName: string,
        isDeliverd: boolean
    }
    const products: Order[] = [
        {
            id: 1,
            productName: "Milk",
            isDeliverd: true
        },
        {
            id: 2,
            productName: "Meat",
            isDeliverd: false
        },
        {
            id: 3,
            productName: "Fruit",
            isDeliverd: false
        },
    ];
    const productList = products.map(product => {
        return (
            <li>{`${product.productName} - trạng thái: ${product.isDeliverd ? 'Đã giao' : "Chưa giao"}`}</li>
        );
    })
    return (
        <>
            <ul>
                {petsList}
            </ul>
            <ul>
                {phonesList}
            </ul>        
            <ul>
                {productList}
            </ul>        
        </>

    )
}

export default MyInterFace