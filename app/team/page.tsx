import { TeamCard } from '@/components/team/TeamCard';
import { TEAM_MEMBERS } from '@/lib/constants';

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-wine mb-4">
          Meet Our <span className="text-orange-600">Team</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The passionate individuals who make Gloryland Good & Pub Joint special
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id}>
            <TeamCard member={member} />
          </div>
        ))}
      </div>

      {/* Team Description */}
      <div className="mt-20 bg-blue-50 rounded-xl p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Our Team Philosophy
        </h2>
        <p className="text-gray-700 mb-6">
          At Gloryland Good & Pub Joint, we believe in creating memorable experiences through
          authentic Ghanaian hospitality. Our team combines traditional culinary expertise
          with modern service standards to bring you the best dining experience.
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto" />
      </div>
    </div>
  );
}