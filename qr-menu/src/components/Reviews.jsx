import React from 'react';

function Reviews() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Reviews from our clients
      </h2>
      <h3 className="text-2xl font-bold text-center mb-8">
        About using the service
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="James Curran"
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-800">James Curran</h4>
              <span className="text-gray-500">@BrooklynTaco</span>
            </div>
          </div>
          <p className="text-gray-700">
            We use FoodTiger to protect our visitors.
            Dirty old menus are a thing from the past. So
            far clients report no issues. And they love our
            new online menu.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Jessica Evans"
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-800">
                Jessica Evans
              </h4>
              <span className="text-gray-500">
                @AwangItalianRestaurant
              </span>
            </div>
          </div>
          <p className="text-gray-700">
            No more printing and reprinting for some
            small mistake in our menu or price change.
            We love what QR Menu Online have provided.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Amanda Smith"
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-800">
                Amanda Smith
              </h4>
              <span className="text-gray-500">@Burger2Go</span>
            </div>
          </div>
          <p className="text-gray-700">
            QR Menu Online was the perfect tool for the
            COVID situation. We should go earlier to this
            type of menu.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Jason Edwards"
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-800">
                Jason Edwards
              </h4>
              <span className="text-gray-500">
                @MalibuDiner
              </span>
            </div>
          </div>
          <p className="text-gray-700">
            Clients are happy. They can see that we are
            a responsible bar and their health is a
            priority. No more old dirty menus :D. All they
            need is their phone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;