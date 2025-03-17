import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    id: 'education',
    title: 'Education for All',
    description: 'Providing quality education and skill development opportunities to underprivileged children and youth.',
    image: '/images/programs/education.jpg',
    features: [
      'After-school learning programs',
      'Digital literacy initiatives',
      'Vocational training for youth',
      'Teacher training programs',
    ],
    stats: {
      students: '5,000+',
      schools: '50+',
      teachers: '200+',
    },
  },
  {
    id: 'healthcare',
    title: 'Healthcare Access',
    description: 'Ensuring accessible healthcare services and promoting wellness in underserved communities.',
    image: '/images/programs/healthcare.jpg',
    features: [
      'Mobile medical camps',
      'Preventive healthcare education',
      'Maternal and child health',
      'Mental health support',
    ],
    stats: {
      patients: '10,000+',
      camps: '100+',
      healthcare: '20+',
    },
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Building sustainable communities through infrastructure development and capacity building.',
    image: '/images/programs/community.jpg',
    features: [
      'Water and sanitation projects',
      'Sustainable agriculture',
      'Women empowerment initiatives',
      'Rural infrastructure development',
    ],
    stats: {
      communities: '100+',
      projects: '75+',
      beneficiaries: '15,000+',
    },
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    description: 'Empowering women through education, skill development, and entrepreneurship opportunities.',
    image: '/images/programs/women.jpg',
    features: [
      'Skill development workshops',
      'Microfinance support',
      'Leadership training',
      'Self-help group formation',
    ],
    stats: {
      women: '3,000+',
      groups: '150+',
      enterprises: '50+',
    },
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-white/90">
              Discover how we're making a difference through our various initiatives 
              designed to create lasting impact in communities.
            </p>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <div className="py-20">
        <div className="container-custom">
          <div className="space-y-32">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className={`flex flex-col gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Initiatives</h3>
                    <ul className="space-y-3">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={`/programs/${program.id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in our mission to create positive change. There are many ways 
              you can contribute to our programs and help make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/volunteer" className="btn btn-primary">
                Volunteer With Us
              </Link>
              <Link href="/donate" className="btn btn-secondary">
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 