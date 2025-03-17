import Image from 'next/image';
import Link from 'next/link';

const opportunities = [
  {
    title: 'Teaching & Mentoring',
    description: 'Share your knowledge and skills with underprivileged children and youth.',
    commitment: '4-6 hours/week',
    location: 'Various Schools',
    image: '/images/volunteer/fsfl-program.jpg',
  },
  {
    title: 'Healthcare Support',
    description: 'Assist in medical camps and health awareness programs.',
    commitment: 'Weekend camps',
    location: 'Rural Communities',
    image: '/images/volunteer/healthcare-camp.jpg',
  },
  {
    title: 'Community Development',
    description: 'Help implement sustainable development projects in rural areas.',
    commitment: 'Project-based',
    location: 'Rural Areas',
    image: '/images/volunteer/community-work.jpg',
  },
  {
    title: 'Skill Development',
    description: 'Conduct workshops and training sessions for women and youth.',
    commitment: '2-3 hours/week',
    location: 'Training Centers',
    image: '/images/volunteer/skill-development.jpg',
  },
];

const testimonials = [
  {
    name: 'Ankur Raj',
    role: 'Education Volunteer',
    image: '/images/volunteer/ankur-testimonial.jpg',
    quote: 'Badlaav Foundation is an NGO in Dehradun which works for the underprivileged children living in shelter homes. The FSFL Project focuses on basic education that is often missed and ignored in traditional education systems.',
  },
  {
    name: 'Dr. Rahul Singh',
    role: 'Medical Camp Volunteer',
    image: '/images/volunteer/medical-volunteer.jpg',
    quote: 'The foundation\'s commitment to healthcare accessibility is remarkable. I\'m proud to be part of their medical outreach programs.',
  },
];

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              Make a Difference
            </h1>
            <p className="text-xl text-white/90">
              Join our community of passionate volunteers and help us create lasting 
              positive change in the lives of those who need it most.
            </p>
            <div className="mt-8">
              <a
                href="#volunteer-form"
                className="btn bg-white text-primary-600 hover:bg-gray-50"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
                    <p className="text-gray-600">
                      Your time and skills can directly contribute to improving lives in underserved communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Join a Community</h3>
                    <p className="text-gray-600">
                      Connect with like-minded individuals who share your passion for social change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Gain Experience</h3>
                    <p className="text-gray-600">
                      Develop new skills and gain valuable experience in social development work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/volunteer/fsfl-classroom.jpg"
                alt="Volunteers teaching children"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity) => (
              <div key={opportunity.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {opportunity.commitment}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {opportunity.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Volunteer Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-primary-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Join Our Team</h2>
            <p className="text-center text-gray-600 mb-12">
              Fill out the form below to express your interest in volunteering. Our team 
              will get back to you with more information.
            </p>
            <form className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Interest
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select an area</option>
                    <option value="teaching">Teaching & Mentoring</option>
                    <option value="healthcare">Healthcare Support</option>
                    <option value="community">Community Development</option>
                    <option value="skills">Skill Development</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about yourself and why you'd like to volunteer..."
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full btn btn-primary">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What is the minimum time commitment?</h3>
              <p className="text-gray-600">
                The minimum time commitment varies by program. Most of our opportunities 
                require at least 2-4 hours per week for a minimum of 3 months.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do I need any specific qualifications?</h3>
              <p className="text-gray-600">
                While specific qualifications depend on the role, we value enthusiasm, 
                commitment, and a passion for social change above all.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is training provided?</h3>
              <p className="text-gray-600">
                Yes, all volunteers receive comprehensive training and ongoing support 
                throughout their volunteering journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 