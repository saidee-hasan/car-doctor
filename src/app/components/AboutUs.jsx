import Image from 'next/image'
import React from 'react'
import MainImage from "../../../public/assets/images/about_us/parts.jpg"
import ProfileImage from "../../../public/assets/images/about_us/person.jpg"

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center ">
        <h2 className="text-red-500 text-xl font-bold mb-8">About Us</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Images */}
          <div className="relative w-full md:w-1/2 p-4">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={ProfileImage}
                  alt="Mechanic"
                  width={200}
                  height={600}
                  className="w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-16 -right-4 sm:-right-8 w-[250px] sm:w-[300px] md:w-[350px] transform hover:scale-105 transition-all duration-500">
                <div className="border-8 border-white rounded-xl shadow-2xl overflow-hidden bg-white">
                  <Image
                    src={MainImage}
                    alt="Car Parts"
                    width={600}
                    height={400}
                    className="w-full h-[300px] sm:h-[250px] md:h-[300px] rounded-lg object-cover"
                    sizes="(max-width: 768px) 250px, (max-width: 1200px) 300px, 350px"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full p-5 md:w-1/2 text-left mt-20 md:mt-0">
            <h3 className="text-4xl font-bold mb-6">
              We are qualified<br />
              & of experience<br />
              in this field
            </h3>
            <p className="text-gray-600 mb-4">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
            </p>
            <p className="text-gray-600 mb-6">
              The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-colors">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs