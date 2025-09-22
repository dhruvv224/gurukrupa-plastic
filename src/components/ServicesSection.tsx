import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Shield, Zap, Settings, Award, Wrench } from "lucide-react";
import productionLineImage from "@/assets/production-line.jpg";
import precisionEquipmentImage from "@/assets/precision-equipment.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Cog,
      title: "Electroplating Tank",
      description: "Tailored electroplating solutions designed to meet your specific industrial requirements and production goals.",
      image: precisionEquipmentImage,
    },
    {
      icon: Shield,
      title: "Rectifier Unit",
      description: "Advanced monitoring and control systems ensuring consistent quality and compliance with international standards.",
      image: productionLineImage,
    },
    {
      icon: Zap,
      title: "Rectifier Unit",
      description: "Fully automated electroplating systems with robotic handling for maximum efficiency and precision.",
      image: productionLineImage,
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Data-driven optimization of your electroplating processes to reduce waste and improve output quality.",
      image: precisionEquipmentImage,
    },
    {
      icon: Award,
      title: "Zinc Plating",
      description: "Complete support for achieving industry certifications including ISO, IATF, and environmental standards.",
      image: productionLineImage,
    },
    {
      icon: Wrench,
      title: "Nikal (Nickel) Plating",
      description: "24/7 technical support and preventive maintenance programs to ensure optimal machine performance.",
      image: precisionEquipmentImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-industrial bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive electroplating solutions from design to deployment, backed by decades of 
            engineering expertise and cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full group hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-industrial rounded-xl flex items-center justify-center shadow-industrial">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 p-8 bg-gradient-metallic rounded-2xl shadow-card"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Production?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our experts design a custom electroplating solution that meets your exact specifications 
            and production requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-industrial text-primary-foreground rounded-lg font-semibold shadow-industrial hover:shadow-xl transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;