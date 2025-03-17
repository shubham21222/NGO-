import Image from 'next/image';

const stats = [
  { label: 'Lives Impacted', value: '10,000+' },
  { label: 'Active Programs', value: '50+' },
  { label: 'Volunteers', value: '500+' },
  { label: 'Communities Served', value: '100+' },
];

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/images/team/founder.jpg',
    bio: 'With over 15 years of experience in social work, Rajesh leads our mission to create lasting change.',
  },
  {
    name: 'Priya Sharma',
    role: 'Program Director',
    image: '/images/team/program-director.jpg',
    bio: 'Priya oversees all our programs and ensures they create maximum impact in communities.',
  },
  {
    name: 'Amit Patel',
    role: 'Community Outreach',
    image: '/images/team/outreach.jpg',
    bio: 'Amit builds and maintains relationships with communities and partner organizations.',
  },
  {
    name: 'Dr. Sarah Khan',
    role: 'Healthcare Programs',
    image: '/images/team/healthcare.jpg',
    bio: 'Dr. Sarah leads our healthcare initiatives and medical camps across rural areas.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Transforming Lives Through Sustainable Change
            </h1>
            <p className="text-xl text-white/90">
              At Badlaav Foundation, we believe in the power of community-driven change. 
              Our mission is to create sustainable solutions that empower communities and transform lives.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower communities through sustainable development initiatives, 
                focusing on education, healthcare, and economic empowerment. We work 
                to create lasting positive change that transforms lives and builds 
                resilient communities.
              </p>
              <h2 className="mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                A world where every individual has access to quality education, 
                healthcare, and opportunities for growth. We envision empowered 
                communities that are self-reliant and capable of driving their own 
                development.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://badlaavfoundation.in/wp-content/uploads/2022/05/1-1-scaled.jpg"
                alt="Community empowerment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-8 border-l-4 border-primary-200">
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px] top-1" />
                <h3 className="text-xl font-semibold mb-2">2015 - The Beginning</h3>
                <p className="text-gray-600">
                  Started with a small team of passionate individuals committed to creating change.
                </p>
              </div>
              <div className="relative pl-8 border-l-4 border-primary-200">
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px] top-1" />
                <h3 className="text-xl font-semibold mb-2">2017 - Expanding Horizons</h3>
                <p className="text-gray-600">
                  Launched our first major education and healthcare programs in rural areas.
                </p>
              </div>
              <div className="relative pl-8 border-l-4 border-primary-200">
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px] top-1" />
                <h3 className="text-xl font-semibold mb-2">2019 - Growing Impact</h3>
                <p className="text-gray-600">
                  Reached milestone of impacting 5,000+ lives through our various programs.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[10px] top-1" />
                <h3 className="text-xl font-semibold mb-2">2023 - Present Day</h3>
                <p className="text-gray-600">
                  Operating in multiple states with a network of 500+ volunteers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency and accountability in all our work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek innovative solutions to address community challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We believe in empowering communities to be the drivers of their own development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 