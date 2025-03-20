import React from "react";
import Image from "next/image";
import dbConnect from "@/lib/dbConected";

export default async function Service() {
  // Connect to the "services" collection
  const servicesCollection = await dbConnect("services");
  const data = await servicesCollection.find({}).toArray();

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.img}
                layout="fill"
                objectFit="cover"
                alt={item.title}
                className="rounded-md"
              />
            </div>

            {/* Title & Price */}
            <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
            <p className="text-lg font-bold text-blue-600 mt-2">${item.price}</p>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
