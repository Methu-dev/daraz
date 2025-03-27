import React from 'react'
import d1 from "../../images/d1.jpg";
import d2 from "../../images/d2.jpg";
import d3 from "../../images/d3.jpg";
import d4 from "../../images/d4.jpg";
import d5 from "../../images/d5.jpg";
import d6 from "../../images/d6.jpg";

function DarazMail() {
    const products = [
        { id: 1, image: d1, name: "Football world cup Most popular footbal", price: "$99" },
        { id: 2, image: d2, name: "Mojammel special suguar heand rice clen tha rice", price: "$129" },
        { id: 3, image: d3, name: "Cussons Baby Powder mid & losson power", price: "$89" },
        { id: 4, image: d4, name: "Lifebuoy Fights 99% bacteria And viruses", price: "$149" },
        { id: 5, image: d5, name: "Sing in creem and multimidia", price: "$79" },
        { id: 6, image: d6, name: "Electric Hot Water Bag Pain Remover", price: "$199" },
      ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">DarazMail</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition duration-300"
          >
            <img src={product.image} className="w-full h-40 object-cover rounded-lg" alt={product.name} />
            <div className="mt-4 text-center"> 
              <h2 className="text-lg font-semibold h-14 flex items-center justify-center">
                {product.name}
              </h2>
              <p className="text-blue-500 text-xl font-bold mt-2">{product.price}</p>
              <button className="w-full py-2 mt-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Buy Now
              </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DarazMail