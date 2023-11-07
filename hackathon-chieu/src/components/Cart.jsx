import React from 'react'

export default function Cart({ products, setProducts, count }) {
  const totalPrice = products.reduce((total, product, index) => {
    return total + product.price * count[index]
  }, 0)

  const renderProduct = products.filter((product, index) => count[index] != 0)

  
  return (
    <>
      <div>
        <div>
          <h3>Your Cart</h3>
          <div>
            {renderProduct.map((item) => {
              let total = products.findIndex((product) => product.id == item.id)
              return (
                <ul>
                  <li>Tên sản phẩm: {item.title}</li>
                  <li> Số lượng: {count[total]}</li>
                </ul>
              )
            })}
          </div>
          <div>
            <div>
              <p>Tổng tiền: ${totalPrice}</p>
            </div>
            <div>
              <button >Reset</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
