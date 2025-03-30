// components/about/OurValues.tsx
export function OurValues() {
    const values = [
      {
        title: "Authenticity",
        description: "We preserve traditional recipes and cooking methods passed down through generations.",
        icon: "🌱"
      },
      {
        title: "Community",
        description: "Our pub is more than a restaurant - it's a gathering place where stories are shared.",
        icon: "👨‍👩‍👧‍👦"
      },
      {
        title: "Quality",
        description: "Only the freshest local ingredients make it to your plate.",
        icon: "⭐"
      },
      {
        title: "Celebration",
        description: "Every meal at Gloryland is a celebration of Ghanaian culture.",
        icon: "🎉"
      }
    ];
  
    return (
      <section className="py-12 bg-blue-50 rounded-xl px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Our Core <span className="text-orange-600">Values</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-bold text-wine mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }