import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto p-5 md:p-10">
      <h2 className="flex mb-8 text-2xl font-bold text-gray-800">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 shadow-md rounded-lg">
          <div className="!text-[30px] font-medium text-gray-600 mb-4">
            Your cart is empty
          </div>
          <Link
            to="/"
            className="text-[#f1356d] hover:underline font-medium text-lg"
          >
            &larr; Go back to menu
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: Cart Items List */}
          <div className="w-full lg:w-2/3">
            <div className="bg-transparent overflow-hidden">
              {/* Header row */}
              <div className="hidden sm:grid sm:grid-cols-5 !text-sm !font-medium p-4 border-b ">
                <div className="col-span-2 !font-medium">Product</div>
                <div className="text-center !font-medium">Price</div>
                <div className="text-center !font-medium">Quantity</div>
                <div className="text-right pr-6 !font-medium">Total</div>
              </div>

              {/* Item Rows */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 sm:grid-cols-5 items-center p-4 border-b gap-4 sm:gap-0 pb-12 sm:pb-4"
                >
                  {/* Image and Name */}
                  <div className="col-span-2 flex items-center gap-4">
                    <img
                      src={item.srcpic}
                      alt={item.name}
                      className="w-25 h-25 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="!text-[22px] font-medium text-gray-800">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center text-gray-600 font-medium">
                    <span className="sm:hidden text-gray-400 text-sm mr-2">
                      Price:
                    </span>
                    ฿{item.price}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex justify-center items-center">
                    <div className="flex border rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="!px-3 !py-1 rounded-l-md transition hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="!px-3 !py-1 rounded-r-md transition hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="text-right flex justify-between sm:block items-center">
                    <div className="font-bold text-gray-800 text-lg sm:pr-8">
                      <span className="sm:hidden text-gray-400 text-sm mr-2 font-normal">
                        Subtotal:
                      </span>
                      ฿{item.price * item.quantity}
                    </div>
                  </div>

                  {/* Trash */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute bottom-4 right-4 rounded-md hover:text-[#f1356d] transition-colors"
                    title="Remove item"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="#F9E5C7"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#F8BFBD] rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b  pb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4 text-gray-700">
                <span>Subtotal</span>
                <span className="font-medium">฿{subtotal}</span>
              </div>

              <div className="flex justify-between mb-6 text-gray-700 border-b pb-6">
                <span>Shipping Delivery</span>
                <span className="font-medium">฿{shipping}</span>
              </div>

              <div className="flex justify-between mb-8 text-xl  ">
                <span className="!font-medium">Total</span>
                <span className="!font-medium">฿{total}</span>
              </div>

              <button className="w-full bg-[#f1356d] hover:bg-[#d82b5e] text-white font-bold py-4 rounded-lg transition-colors shadow-md text-lg">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/menus"
                  className=" hover:text-[#f1356d] hover:underline font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
