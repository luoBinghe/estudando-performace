import { useMemo } from 'react'
import { ProductItem } from './ProductItem'

interface SearchList {
  results: Array<{
    id: number,
    price: number,
    title: string
  }>,
  onAddWithList: (id: number) => void
}


export const SearchList = ({ results, onAddWithList }: SearchList) => {
  const totalPrice = useMemo(() => {
    return results.reduce((acc, value) => {
      return acc + value.price
    }, 0)
  }, [results])

  return(
    <div>
      <span>O preço total é de: {totalPrice}</span>
      {results.map((product) => (
        <>
          <ProductItem key={product.id} id={product.id} price={product.price} title={product.title} />
          <button onClick={() => onAddWithList(product.id)}>
            Adicionar
          </button>
        </>
      ))}
    </div>
  )
}
