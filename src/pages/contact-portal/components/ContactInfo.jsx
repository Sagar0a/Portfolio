import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: 'sagaranand182005@gmail.com',
      icon: 'Mail',
      primary: true,
      description: 'Best for detailed discussions',
      action: () => window.location.href = "mailto:sagaranand182005@gmail.com"
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+91 72008 39146',
      icon: 'Phone',
      primary: false,
      description: 'Available during business hours',
      action: () => window.location.href = 'tel:+91 7200839146'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Chennai, India',
      icon: 'MapPin',
      primary: false,
      description: 'Open to WFO and Hibrid opportunities',
      action: null
    },
    {
      type: 'calendar',
      label: 'Schedule Call',
      value: 'Book a meeting',
      icon: 'Calendar',
      primary: false,
      description: '15-30 minute slots available',
      action: () => window.open('https://calendly.com/sagar-dev', '_blank')
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', hours: 'Limited availability' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="Contact" size={20} color="var(--color-secondary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
          <p className="text-sm text-muted-foreground">Multiple ways to reach me</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {contactMethods.map((method) => (
          <div
            key={method.type}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              method.primary 
                ? 'border-primary/30 bg-primary/5' :'border-border hover:border-primary/20 hover:bg-muted/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  method.primary 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={method.icon} size={18} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-foreground">{method.label}</h4>
                    {method.primary && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground font-mono">{method.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                </div>
              </div>
              {method.action && (
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ExternalLink"
                  onClick={method.action}
                  className="opacity-70 hover:opacity-100"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <h4 className="font-medium text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Clock" size={16} />
          <span>Working Hours</span>
        </h4>
        <div className="space-y-2">
          {workingHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{schedule.day}</span>
              <span className="text-foreground font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Privacy & Communication</p>
            <p className="text-muted-foreground text-xs">
              Your contact information is kept private and secure. I respond to all genuine inquiries and maintain professional communication standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;