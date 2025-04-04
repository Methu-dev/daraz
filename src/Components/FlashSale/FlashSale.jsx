import React from "react";
import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";
import f6 from "../../images/f6.jpg";


function FlashSale() {
  const products = [
    { id: 1, image: f1, name: "Buds Air Wireless Bluetooth Headset", price: "$99" },
    { id: 2, image: f2, name: "Vivo/Oppo/MI Earphone with Good Bass", price: "$129" },
    { id: 3, image: f3, name: "TWS i7s Dual Mini Earphone with Case", price: "$89" },
    { id: 4, image: f4, name: "Vivo In-Ear Earphone with Best Sound", price: "$149" },
    { id: 5, image: f5, name: "01 pcs Anti RFID Card Holder NFC", price: "$79" },
    { id: 6, image: f6, name: "Electric Hot Water Bag Pain Remover", price: "$199" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🔥 Flash Sale</h1>
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
  );
}

export default FlashSale;
