import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-4xl font-bold text-blue-900">
          Why Choose Our Student Portal?
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Everything you need to manage your learning in one place.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon="🎓"
            title="Expert Teachers"
            description="Learn from experienced and qualified faculty."
          />

          <FeatureCard
            icon="📚"
            title="Modern Courses"
            description="Industry-focused curriculum with practical learning."
          />

          <FeatureCard
            icon="💻"
            title="Online Learning"
            description="Access your courses anytime and anywhere."
          />

          <FeatureCard
            icon="🏆"
            title="Career Growth"
            description="Build skills that prepare you for your future."
          />

        </div>

      </div>

    </section>
  );
}