import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SocialConnect = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/sagaranand18/',
      description: 'Professional network & career updates',
      color: 'bg-[#0077B5]',
      // followers: '500+ connections'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/sagar0a',
      description: 'Code repositories & open source contributions',
      color: 'bg-[#333333]',
      // followers: '150+ followers'
    },
    // {
    //   name: 'Twitter',
    //   icon: 'Twitter',
    //   url: 'https://twitter.com/sagar_codes',
    //   description: 'Tech insights & development journey',
    //   color: 'bg-[#1DA1F2]',
    //   // followers: '300+ followers'
    // },
    // {
    //   name: 'Dev.to',
    //   icon: 'FileText',
    //   url: 'https://dev.to/sagar-dev',
    //   description: 'Technical articles & tutorials',
    //   color: 'bg-[#0A0A0A]',
    //   followers: '200+ readers'
    // }
  ];

  const handleSocialClick = (url, platform) => {
    // Track social media clicks
    console.log(`Clicked ${platform} link`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-trust-builder/10 rounded-lg flex items-center justify-center">
          <Icon name="Share2" size={20} color="var(--color-trust-builder)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Social Connect</h3>
          <p className="text-sm text-muted-foreground">Follow my journey across platforms</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {socialLinks.map((social) => (
          <div
            key={social.name}
            className="group p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                  <Icon name={social.icon} size={20} color="white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {social.name}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {social.followers}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {social.description}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => handleSocialClick(social.url, social.name)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Visit
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-foreground">Quick Actions</h4>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="TrendingUp" size={14} />
            <span>Active on all platforms</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Star"
            iconPosition="left"
            onClick={() => handleSocialClick('https://github.com/sagar0a', 'GitHub Star')}
            className="justify-start"
          >
            Star on GitHub
          </Button>

          <Button
            variant="outline"
            size="sm"
            iconName="UserPlus"
            iconPosition="left"
            onClick={() => handleSocialClick('https://www.linkedin.com/in/sagaranand18/', 'LinkedIn Connect')}
            className="justify-start"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
        <div className="flex items-start space-x-3">
          <Icon name="Heart" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Let's Build Something Together</p>
            <p className="text-muted-foreground text-xs">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone passionate about creating amazing web experiences. Don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;