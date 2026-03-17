import data from "./games.json"
import cata from "./categories.json"
const Catagory = () => {
    const myStyle = {
        display: "flex",
        flexWrap: "wrap"
    }
    console.log(data)
    const renderList = data.map(item => {
        const cataName = cata.find(cata => cata.id === item.categoryId)?.name || "Chưa phân loại"
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>Giá: {item.price}</p>
                <p>Thể loại: {cataName}</p>
                <p>Nổi bật: {item.isFeatured ? "Hot trend" : "Lỗi thời"}</p>
                <p>Nền tảng: {item.platforms.join(", ")}</p>
                <p>Đánh giá: {item.rating}</p>
                <p>Ngày ra mắt: {item.releaseDate}</p>
            </div>
        );
    })
    return (
        <>
            <h1>Game list</h1>
            <div style={myStyle}>
                {renderList}
            </div>
        </>
    );
}

export default Catagory