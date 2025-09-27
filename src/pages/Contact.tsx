import Header from "../components/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
   const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@ShreeguruPlastic.com", "support@ShreeguruPlastic.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [" F362+W4Q, Indira Gandhi Rd, Ranjit Nagar, Shankar Tekri, Jamnagar, Gujarat 361006"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
    },
  ];
  return(
 <>
    <Header />
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
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
            <span className="text-foreground">Get in</span>{" "}
            <span className="bg-gradient-industrial bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your electroplating needs? Our expert team is here to provide 
            custom solutions and technical support for your manufacturing requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john.doe@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your electroplating requirements, production volume, and timeline..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="w-full shadow-industrial">
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-industrial rounded-xl flex items-center justify-center flex-shrink-0 shadow-industrial">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gradient-metallic shadow-card">
                <CardContent className="p-8 text-center space-y-4">
                  <h4 className="text-xl font-bold text-foreground">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-muted-foreground">
                    Our technical support team is available 24/7 for emergency situations.
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                    Emergency Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-64 bg-gradient-hero rounded-xl overflow-hidden shadow-card"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-70" />
                  <p className="text-sm opacity-70">Interactive Map</p>
                  <p className="text-xs opacity-50">123 Industrial Blvd, MI 48201</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>  </>
  )
 
};

export default Contact;
