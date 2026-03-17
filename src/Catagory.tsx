import data from "./categories.json"
interface CategoryGame {
    id: number,
    name: string,
    description: string,
    totalGames: number
}
const Catagory = () => {
    console.log(data)
    const renderList = data.map((item: CategoryGame) => {
        return (
            <div key={item.id}>
                <h3>Thể loại: {item.name}</h3>
                <p>Mô tả: {item.description}</p>
                <p>Số lượng: {item.totalGames}</p>
            </div>
        );
    })
    return (
        <>
            <h1>Game list</h1>
            {renderList}
        </>
    );
}

export default Catagory