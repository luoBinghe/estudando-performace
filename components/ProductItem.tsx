import { memo } from 'react'

interface ProductItem {
  id: number,
  price: number,
  title: string
}

export const ProductItem = memo(({id, price, title}: ProductItem) => {
  return(
    <div>
      <span>{id}</span> - <strong>{title}</strong> - <span>{price}</span>
    </div>
  )
}, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})