import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickConnect = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const quickTemplates = [
//     {
//       id: 'job',
//       title: 'Job Opportunity',
//       icon: 'Briefcase',
//       color: 'primary',
//       subject: 'Job Opportunity - Frontend Developer Position',
//       message: `Hi Sagar,

// I came across your portfolio and I'm impressed with your frontend development skills. We have an exciting opportunity that might be a great fit for your background.

// Could we schedule a brief call to discuss this further?

// Best regards,`
//     },
//     {
//       id: 'collaboration',title: 'Project Collaboration',icon: 'Users',color: 'accent',subject: 'Collaboration Opportunity',message: `Hello Sagar,I'm working on an interesting project and would love to collaborate with a talented frontend developer like yourself.

// Would you be interested in discussing this opportunity?

// Looking forward to hearing from you,`
//     },
//     {
//       id: 'mentorship',
//       title: 'Mentorship Request',
//       icon: 'GraduationCap',
//       color: 'secondary',
//       subject: 'Mentorship and Guidance Request',
//       message: `Hi Sagar,

// I'm also on my journey as a frontend developer and would greatly appreciate any guidance or mentorship you could offer.

// Would you be open to a brief conversation about your experience and any advice you might have?

// Thank you for your time,`
//     },
//     {
//       id: 'technical',title: 'Technical Discussion',icon: 'Code',color: 'trust-builder',subject: 'Technical Discussion',message: `Hello Sagar,I noticed your work with React and modern frontend technologies. I'd love to discuss some technical aspects and perhaps exchange ideas.

// Are you available for a technical conversation?

// Best,`
//     }
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    
    // Create mailto link
    const mailtoLink = `mailto:sagaranand182005@gmail.com.com?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.message)}`;
    window.location.href = mailtoLink;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
      accent: 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20',
      'trust-builder': 'bg-trust-builder/10 text-trust-builder border-trust-builder/20 hover:bg-trust-builder/20'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
      {/* <div className="flex items-center space-x-3 mb-6"> */}
        {/* <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} color="var(--color-accent)" />
        </div> */}
        {/* <div>
          <h3 className="text-xl font-semibold text-foreground">Quick Connect</h3>
          <p className="text-sm text-muted-foreground">Pre-filled templates for common inquiries</p>
        </div> */}
      {/* </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {quickTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left group hover:scale-105 ${getColorClasses(template.color)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Icon name={template.icon} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm mb-1 group-hover:font-semibold transition-all duration-200">
                  {template.title}
                </h4>
                <p className="text-xs opacity-80 line-clamp-2">
                  {template.message.split('\n')[1]}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-foreground">Direct Contact Options</h4>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Clock" size={14} />
            <span>Usually responds within 24 hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Mail"
            iconPosition="left"
            onClick={() => window.location.href = "mailto:sagaranand182005@gmail.com"}
            className="justify-start"
          >
            sagaranand182005@gmail.com
          </Button>

          <Button
            variant="outline"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+91 7200839146'}
            className="justify-start"
          >
            +91 72008 39146
          </Button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Response Time Expectations</p>
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>• Job opportunities: Within 24 hours</li>
              <li>• Collaboration requests: 2-3 days</li>
              <li>• General inquiries: 3-5 days</li>
              <li>• Technical discussions: 1-2 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickConnect;