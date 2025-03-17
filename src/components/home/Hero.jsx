import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-700">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="relative container-custom">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24 gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Empowering Communities</span>
              <span className="block text-yellow-400">Creating Change</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl">
              Join us in our mission to create sustainable development and positive social change. 
              Together, we can build a better future for all.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/donate"
                className="btn bg-white text-primary-600 hover:bg-gray-50 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="btn bg-primary-700 text-white hover:bg-primary-800 border border-white/20 transform transition-transform duration-300 hover:scale-105"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>

          {/* Image/Illustration with hover effects */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none group">
            <div className="relative w-full aspect-[4/3] transform transition-all duration-700 group-hover:scale-105">
              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://badlaavfoundation.in/wp-content/uploads/2022/04/Badlaav-Foundation-Hero-.jpg"
                  alt="Community impact"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-secondary-700/40 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-75" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-400 rounded-full opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30" />

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 transform translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">1000+</div>
                    <div className="text-sm text-gray-200">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-sm text-gray-200">Volunteers</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/20 rounded-lg transform rotate-45 transition-transform duration-700 group-hover:rotate-90" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:opacity-0" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="text-4xl font-bold text-white">1000+</div>
            <div className="mt-2 text-sm text-gray-100">Lives Impacted</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="text-4xl font-bold text-white">50+</div>
            <div className="mt-2 text-sm text-gray-100">Active Programs</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="mt-2 text-sm text-gray-100">Volunteers</div>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="text-4xl font-bold text-white">10+</div>
            <div className="mt-2 text-sm text-gray-100">Years of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
} 