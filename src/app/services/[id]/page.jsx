import React from 'react';
import { ObjectId } from 'mongodb';
import dbConnect, { collectionsObj } from '@/lib/dbConected';
import Image from 'next/image';

export default async function Page({ params }) {
  const { id } = params; // Extract the id from route parameters

  // Connect to the "services" collection
  const servicesCollection = await dbConnect(collectionsObj.servicesCollection);

  // Convert the string id to an ObjectId (if your _id is stored as an ObjectId)
  const service = await servicesCollection.findOne({ _id: new ObjectId(id) });

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Responsive Service Image with Hover Effect */}
        <div className="relative w-full h-64 md:h-auto group overflow-hidden">
          <Image
            src={service.img}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
            <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">
              View Details
            </span>
          </div>
        </div>
        {/* Service Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg mb-4">{service.description}</p>
            <p className="text-xl font-bold text-blue-600">
              Price: ${service.price}
            </p>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
