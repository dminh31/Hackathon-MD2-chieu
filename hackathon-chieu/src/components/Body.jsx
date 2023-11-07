import React, { useState } from 'react'
import Cart from './Cart'


function Body() {
    const [products, setProducts] = useState(
        [
            {
                id: 3,
                title: "Sprite",
                price: 50000,
                count: 5,
                image: "https://images.ofix.com/product-image/s99509_2.jpg",
            },
            {
                id: 5,
                title: "Salgam",
                price: 40000,
                count: 3,
                image: "http://esenlik.com.tr//images/prod/5704.jpg",
            },
            {
                id: 7,
                title: "Kahve",
                price: 100000,
                count: 2,
                image:
                    "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
            },
            {
                id: 8,
                title: "Soda",
                price: 40000,
                count: 10,
                image: "http://esenlik.com.tr//images/prod/2928.jpg",
            },
            {
                id: 12,
                title: "Iskender",
                price: 500000,
                count: 18,
                image:
                    "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
            },
            {
                id: 15,
                title: "Helicopter",
                price: 28750000,
                count: 5,
                image:
                    "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
            },
            {
                id: 16,
                title: "Luxury Yatch",
                price: 17500000,
                count: 2,
                image: "https://d.neoldu.com/news/57966.jpg",
            },
            {
                id: 17,
                title: "Limosine",
                price: 1000000,
                count: 10,
                image:
                    "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
            },
            {
                id: 18,
                title: "Bitcoin",
                price: 1000000,
                count: 10,
                image:
                    "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
            },
        ]
    )
    const [counts, setCounts] = useState(Array(products.length).fill(0));
    const [money, setMoney] = useState(213000000000)
    const addProduct = (index, price) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
        setMoney(money - price);
    };
    const interestCount = (index, price) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) {
            newCounts[index] -= 1;
            setCounts(newCounts);
            setMoney(money + price);
        }
    };
    return (
        <>
            <div className='header' >
                To Spend ${money} You Have A Lot Of Money
            </div>
            <div className='container'>
                {products.map((item, index) => {
                    return <div key={index} className='item' >
                        <div >
                            <img src={item.image} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div>
                            <span>{item.title}</span> <br />
                            <span> Price: {item.price}</span>
                        </div>

                        <div>
                            <span><button onClick={() => interestCount(index, item.price)}>Interest</button></span>
                            <span>{counts[index]}</span>
                            <span><button onClick={() => addProduct(index, item.price)}>Add</button></span>
                        </div>
                    </div>
                })}
            </div>
            <Cart products={products} setProducts={setProducts} count={counts}></Cart>
        </>
    )
}
export default Body;