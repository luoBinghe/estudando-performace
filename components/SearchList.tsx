import { ProductItem } from './ProductItem'

interface SearchList {
  results: Array<{
    id: number,
    price: number,
    title: string
  }>
}


export const SearchList = ({ results }: SearchList) => {
  return(
    <div>
      {results.map((product) => (
        <ProductItem id={product.id} price={product.price} title={product.title} />
      ))}
    </div>
  )
}
