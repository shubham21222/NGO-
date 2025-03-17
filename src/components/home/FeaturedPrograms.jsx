import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    title: 'Education',
    description: 'Providing quality education and skill development programs to underprivileged children and youth.',
    image: '/images/education.jpg',
    href: '/programs/education',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    description: 'Ensuring accessible healthcare services and promoting wellness in underserved communities.',
    image: '/images/healthcare.jpg',
    href: '/programs/healthcare',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Community Development',
    description: 'Building sustainable communities through infrastructure development and capacity building.',
    image: '/images/community.jpg',
    href: '/programs/community',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Women Empowerment',
    description: 'Empowering women through education, skill development, and entrepreneurship opportunities.',
    image: '/images/women-empowerment.jpg',
    href: '/programs/women-empowerment',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how we're making a difference in communities through our various initiatives and programs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  {program.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary-600">
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="btn btn-primary"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
} 