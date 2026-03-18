export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-noise">
      <div className="container mx-auto max-w-4xl px-6">

        {/* Eyebrow */}
        <p className="font-sans font-bold uppercase tracking-[0.12em] text-[#8A8478] text-xs mb-16 pt-12">
          A note from our founder
        </p>

        {/* Identity Header */}
        <div className="flex items-start gap-6 mb-16 flex-wrap">
          <div className="w-20 h-20 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center shrink-0">
            <span className="font-heading text-2xl font-bold text-amber">ZS</span>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#F5F0E8] mb-1">Zach Schaefer</h2>
            <p className="font-sans text-sm text-[#8A8478] leading-relaxed">
              Founder & CEO, Whiskey River Media<br />
              Entrepreneur · Franchise Operator · Marketing Strategist
            </p>
          </div>
        </div>

        {/* Body — amber left border */}
        <div className="border-l-2 border-amber pl-8 md:pl-12 mb-16 space-y-6">

          {/* Pull quote */}
          <p className="font-heading text-2xl md:text-3xl italic text-[#F5F0E8] leading-snug">
            "Running a business is no different than navigating Wyoming waters — storms will come, the waves will hit. But with the right guide at the helm, you'll always make it to your destination."
          </p>

          <p className="font-sans text-base text-[#8A8478] leading-relaxed">
            The name Whiskey River comes from my father. Cub Schaefer was a serial entrepreneur in Jackson Hole, Wyoming — one of the original builders of that community. He owned a drift boat called The Whisky River, and it carried our family through some of the wildest water the Snake River had to offer. Lightning, waves, chaos — it always got us home. My dad passed in 2001, but his grit and his spirit are the foundation everything here is built on.
          </p>

          <p className="font-sans text-base text-[#8A8478] leading-relaxed">
            Before WRM, I owned and operated five Culver's franchise locations across Chicagoland and Phoenix. What I took away from that experience — more than operations or P&L — was what Craig Culver understood about hospitality: that a brand is a feeling before it's a product. That lesson has never left me.
          </p>

          <p className="font-sans text-base text-[#8A8478] leading-relaxed">
            I spent nearly a decade inside direct-to-consumer marketing, first as Director of Marketing for one of the largest online DTC brands of that era, then deep in the trenches of Facebook, Google, and native advertising from 2015 to 2019. I learned how to sell — and I learned something more important: fast money isn't good money. You can flood a funnel with volume and still be building nothing of lasting value.
          </p>

          <p className="font-sans text-base text-[#8A8478] leading-relaxed">
            When my previous partnership ended in 2020, I had a clear picture of what I wanted to build. Not another agency. A team of genuine specialists — full-stack engineers, developers, designers who had shaped the visual identities of iconic high-rises in Chicago, New York, Miami, and Austin — united around one belief: that the audience is everything. The niche doesn't matter. What matters is knowing where your people live, what they need, and how to reach them with something real.
          </p>

          <p className="font-sans text-base text-[#8A8478] leading-relaxed">
            I've been shaped by Chet Holmes, Napoleon Hill, and the category kings framework. I believe in education-based marketing — earning attention by giving value before asking for anything. And I believe that the businesses worth building are the ones that don't need you to survive.
          </p>

          <p className="font-sans text-base text-[#F5F0E8] leading-relaxed font-medium">
            That's what we build at Whiskey River Media. Systems that scale. Brands that last. Companies worth selling.
          </p>
        </div>

        {/* Credentials Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { era: "Pre-2012", desc: "Owned & operated 5 Culver's franchise locations in Chicagoland and Phoenix" },
            { era: "2013–2015", desc: "Director of Marketing, one of the largest online DTC brands of the era" },
            { era: "2015–2019", desc: "Deep specialization in Facebook, Google, and native advertising at scale" },
            { era: "2020–Present", desc: "Founded Whiskey River Media with a team of elite strategists, engineers & designers" },
          ].map((cred, i) => (
            <div key={i} className="bg-[#111110] border border-[#252420] p-6 hover:border-amber/40 transition-colors">
              <p className="font-sans font-bold uppercase tracking-[0.1em] text-amber text-xs mb-2">{cred.era}</p>
              <p className="font-sans text-sm text-[#8A8478] leading-relaxed">{cred.desc}</p>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className="pt-8 border-t border-[#252420]">
          <p className="font-heading text-2xl italic text-[#F5F0E8] mb-1">Zach Schaefer</p>
          <p className="font-sans text-sm text-[#8A8478]">Founder & CEO — Whiskey River Media</p>
        </div>

      </div>
    </div>
  );
}
