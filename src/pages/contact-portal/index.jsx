import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import QuickConnect from './components/QuickConnect';
import SocialConnect from './components/SocialConnect';
import AvailabilityStatus from './components/AvailabilityStatus';
import ContactInfo from './components/ContactInfo';
import Icon from '../../components/AppIcon';

const ContactPortal = () => {
  return (
    <>
      <Helmet>
        <title>Contact Portal </title>
        <meta name="description" content="Get in touch with Sagar for job opportunities, project collaborations, or technical discussions. Multiple contact options available." />
        <meta name="keywords" content="contact, hire frontend developer, collaboration, React developer contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="MessageCircle" size={16} />
                <span>Let's Connect</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact <span className="text-gradient-primary">Portal</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to collaborate, discuss opportunities, or just say hello? I'd love to hear from you. 
                Choose your preferred way to connect and let's start building something amazing together.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} color="var(--color-primary)" />
                  <span>Privacy-focused communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} color="var(--color-accent)" />
                  <span>Open to remote opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2 space-y-8">
                <ContactForm />
                <QuickConnect />
              </div>

              {/* Right Column - Contact Info & Status */}
              <div className="space-y-8">
                <AvailabilityStatus />
                <ContactInfo />
                <SocialConnect />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about working with me
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "I aim to respond to all inquiries within 24 hours for job opportunities and 2-3 days for general questions."
                },
                {
                  question: "Are you available for freelance projects?",
                  answer: "Yes! I'm open to interesting freelance projects, especially those involving React, Next.js, and modern frontend technologies."
                },
                {
                  question: "Do you offer mentorship or code reviews?",
                  answer: "I'm happy to help fellow developers when time permits. Feel free to reach out with specific questions or requests."
                },
                {
                  question: "What's your preferred communication method?",
                  answer: "Email is best for detailed discussions, but I'm also available for quick calls or video meetings when needed."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-start space-x-2">
                    <Icon name="HelpCircle" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={16} color="white" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">Sagar Portfolio</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Building the future of web experiences, one component at a time.
              </p>
              
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} Sagar. All rights reserved.</span>
                <span>•</span>
                <span>Made with ❤️ and React</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPortal;