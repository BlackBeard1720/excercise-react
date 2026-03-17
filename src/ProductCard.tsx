// Định nghĩa các Props mà Component Con mong đợi nhận được từ Cha

// Định nghĩa cấu trúc của một đối tượng Sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
  isLiked: boolean;
}
interface ProductCardProps {
  product: Product;           // Dữ liệu của một sản phẩm
  onToggleLike: (id: number) => void; // Một hàm xử lý sự kiện truyền từ Cha xuống
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: props.product.isLiked ? 'red' : '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
    }}>
      <h3>{props.product.name}</h3>
      <p>Giá: {props.product.price.toLocaleString()} VNĐ</p>
      
      <button onClick={() => props.onToggleLike(props.product.id)}>
        {props.product.isLiked ? '❤️ Đã thích' : '🤍 Yêu thích'}
      </button>
    </div>
  );
};

export default ProductCard;