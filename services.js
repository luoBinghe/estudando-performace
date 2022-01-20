module.exports = () => {
  const data = {
    product: []
  }

  for(let i = 0; i < 100; i++){
    data.product.push({
      id: i + 1,
      price: 60,
      title: `Camiseta ${i + 1}`
    })
  }

  return data
}