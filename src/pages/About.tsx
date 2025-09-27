import Header from "../components/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Lightbulb, Globe } from "lucide-react";
import factoryFloorImage from "@/assets/factory-floor.jpg";
const About = () => {
    const achievements = [
    "28+ years of electroplating expertise",
    "500+ successful installations worldwide",
    "ISO 9001:2015 certified manufacturing",
    "99.9% customer satisfaction rate",
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing electroplating technology through R&D investment and engineering excellence.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with clients through dedicated support and collaborative solutions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving industries across 50+ countries with localized support and international standards.",
    },
  ];
return (
 <>
    <Header />
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Leading the</span>{" "}
                <span className="bg-gradient-industrial bg-clip-text text-transparent">
                  Future
                </span>{" "}
                <span className="text-foreground">of Electroplating</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shree Guru Plastic, established in 1996 by Mr. Manish Boricha, has grown into a leading manufacturer and exporter of high-performance electroplating machinery. With a passion for quality and innovation, we specialize in creating cutting-edge machines that drive efficiency and reliability.

We offer a wide range of customized solutions designed to support various industrial applications. Our electroplating systems are trusted across sectors for their durability, user-friendly operation, and seamless integration into production lines.

Equipped with advanced manufacturing facilities and a team of skilled engineers and professionals, Shree Guru Plastic adheres to global standards and continuously evolves with new technologies.

With a strong commitment to excellence and on-time delivery, we export our products globally to regions like USA, UAE, Australia, Africa, Sri Lanka, and Southeast Asia, helping businesses scale with confidence.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" variant="outline" className="group">
                Learn More About Us
                <Users className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={factoryFloorImage}
                alt="Modern electroplating factory floor"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-elevated border"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 space-y-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our commitment to excellence and guide every aspect of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-industrial rounded-2xl flex items-center justify-center mx-auto shadow-industrial">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>  </>
)

 
}
;

export default About;
