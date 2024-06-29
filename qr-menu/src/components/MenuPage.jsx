import React from 'react';
import { useState } from 'react';

function App() {
    const [showMore, setShowMore] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [showSimple, setShowSimple] = useState(false);
    return (
        <>
            <section className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-yellow-500">
                <div className="container mx-auto flex items-center justify-evenly">
                    {/* Right Column (Text with Orange Background) */}
                    <div className="w-full md:w-1/2 lg:w-3/5 p-8 bg-white text-orange-500 rounded-3xl flex flex-col justify-center">

                        <div className="text-4xl font-bold mb-4">Get More Orders with Easy Menu Editing</div>
                        <div className="text-5xl font-semibold mb-8">Create a Stunning Menu in Minutes</div>
                        <div className="flex space-x-8 justify-center">
                            <div className="bg-white text-orange-500 p-4 rounded-lg text-center">
                                <div className="text-6xl font-bold">3</div>
                                <div className="text-lg">Free Templates or Unique Design</div>
                            </div>
                            <div className="bg-white text-orange-500 p-4 rounded-lg text-center">
                                <div className="text-6xl font-bold">10</div>
                                <div className="text-lg">$10/month + Free Month</div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">Get Started</button>
                        </div>
                        <div className="mt-4 text-lg text-gray-600">
                            "This app has been a game-changer for my restaurant. I can update my menu in real-time and create multiple menus for different occasions." - John D.
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-8">
                    WHAT WILL YOU GET
                </h1>
                <h2 className="text-2xl font-bold text-center mb-8">
                    BY USING OUR MENU
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-48">
                    <div
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
                        onMouseEnter={() => setShowMore(true)}
                        onMouseLeave={() => setShowMore(false)}
                    >
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-8 h-8 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="ml-4 text-xl font-bold">Wow effect</h3>
                        </div>
                        {showMore && (
                            <p className="text-gray-700 text-center">
                                The moment when the waiter does not approach you causes
                                misunderstanding, but when the client realizes that the menu is
                                hidden in front of him in a QR code, it causes delight and
                                admiration.
                            </p>
                        )}
                    </div>
                    <div
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
                        onMouseEnter={() => setShowOrder(true)}
                        onMouseLeave={() => setShowOrder(false)}
                    >
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-8 h-8 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="ml-4 text-xl font-bold">More orders</h3>
                        </div>
                        {showOrder && (
                            <p className="text-gray-700 text-center">
                                Undoubtedly, a menu that is always under the client's nose, and also
                                contains photographs and prices, pushes the client to purchase,
                                which in turn increases the number and volume of orders.
                            </p>
                        )}
                    </div>
                    <div
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md cursor-pointer"
                        onMouseEnter={() => setShowSimple(true)}
                        onMouseLeave={() => setShowSimple(false)}
                    >
                        <div className="flex items-center mb-4">
                            <svg
                                className="w-8 h-8 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-9H9v-7z"
                                />
                            </svg>
                            <h3 className="ml-4 text-xl font-bold">Quick & simple</h3>
                        </div>
                        {showSimple && (
                            <p className="text-gray-700 text-center">
                                The choice for the client should be obvious, no one wants to bother
                                and imagine what their dish looks like, our menu solves this issue
                                by providing your client with an easy choice and quick order.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* services package */}
            <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        WHAT SERVICE PACKAGES DO WE OFFER
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full bg-gray-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black" />
            <div className="absolute bottom-2 right-2 w-4 h-1 bg-orange-500" />
          </div>
          <h2 className="text-2xl font-bold mt-4">FREE</h2>
          <p className="text-gray-500 mt-2">
            If you run a small restaurant or bar, or just need the basics, this plan
            is great.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
            Try it
          </button>
          <button className="text-gray-500 font-bold py-2 px-4 rounded mt-2">
            More details
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full bg-gray-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black" />
            <div className="absolute bottom-2 right-2 w-1 h-4 bg-orange-500" />
          </div>
          <h2 className="text-2xl font-bold mt-4">STARTER</h2>
          <p className="text-gray-500 mt-2">
            For bigger restaurants and bars. Offer a full menu. Limitless plan.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
            Try it
          </button>
          <button className="text-gray-500 font-bold py-2 px-4 rounded mt-2">
            More details
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="relative w-24 h-24 mx-auto rounded-full bg-gray-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black" />
            <div className="absolute bottom-2 right-2 w-4 h-1 bg-orange-500 rotate-45" />
          </div>
          <h2 className="text-2xl font-bold mt-4">PRO</h2>
          <p className="text-gray-500 mt-2">
            Accept orders directly from your customer mobile phone.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
            Try it
          </button>
          <button className="text-gray-500 font-bold py-2 px-4 rounded mt-2">
            More details
          </button>
        </div>
      </div>
    </div>
        </>
    );
}

export default App;