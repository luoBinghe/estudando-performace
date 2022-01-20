interface ProductItem {
  id: number,
  price: number,
  title: string
}

export const ProductItem = ({id, price, title}: ProductItem) => {
  return(
    <div>
      <span>{id}</span> - <strong>{title}</strong> - <span>{price}</span>
    </div>
  )
}