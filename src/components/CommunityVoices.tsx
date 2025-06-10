import Marquee from "react-fast-marquee"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    text: "Being part of GDG on Campus helped me connect with amazing tech enthusiasts and learn about the latest technologies through hands-on sessions and workshops.",
    course: "Community Building & Collaboration",
    role: "CAMPUS AMBASSADOR",
    bgColor: "bg-[#FFD37D]",
  },
  {
    text: "From Flutter festivals to AI bootcamps, GDG on Campus gave me a platform to explore my interests and build impactful projects. Truly a game-changer for my tech journey!",
    course: "Flutter & AI Bootcamps",
    role: "TECH LEAD",
    bgColor: "bg-[#70A2E1]",
  },
  {
    text: "Organizing events under GDG on Campus honed my leadership and public speaking skills. The experience was both empowering and humbling.",
    course: "Event Management & Leadership",
    role: "EVENT COORDINATOR",
    bgColor: "bg-[#3658D3]",
  },
  {
    text: "As a designer in GDG on Campus, I got to collaborate with developers and understand how design can shape user experience in real projects.",
    course: "UI/UX for Developers",
    role: "CREATIVE DESIGNER",
    bgColor: "bg-[#F57642]",
  },
];


const CommunityVoices = () => {
  return (
    <section className='py-24 overflow-hidden '>
      <div className='container mx-auto mb-16 h-full px-4 md:px-8 lg:px-16'>
        <h2 className='text-6xl lg:text-7xl leading-none font-bold text-black mb-8'>
          Community
          <br />
          Voices
        </h2>
      </div>

      <div className='relative '>
        <Marquee speed={20} pauseOnHover={true} className="flex" >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='mr-8 w-[300px] lg:w-[400px]'
            >
              <div className={`${testimonial.bgColor} p-12 rounded-3xl h-[380px]`}>

                <blockquote className='text-xl lg:text-2xl font-medium'>
                  {testimonial.text}
                </blockquote>
              </div>
              <div className='flex items-center gap-4 mt-6 mb-8'>
                <Avatar>
                  <AvatarFallback className='bg-black/10'>𝐎</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-bold text-lg mb-1'>
                    {testimonial.course}
                  </h4>
                  <p className='text-xs font-mono'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default CommunityVoices
