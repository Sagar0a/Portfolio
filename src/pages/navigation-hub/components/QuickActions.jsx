import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
  const handleResumeDownload = () => {
    // Mock resume download functionality
    const link = document.createElement('a');
    link.href = 'public/assets/SagarFd.pdf';
    link.download = 'Sagar_Frontend_Developer_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:sagaranand182005@gmail.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/sagar0a', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sagaranand18/', '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-3">
          <Icon name="Zap" size={20} color="white" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">Fast access to key resources</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          variant="default"
          size="sm"
          iconName="Download"
          iconPosition="left"
          onClick={handleResumeDownload}
          className="bg-primary hover:bg-primary/90 justify-start"
        >
          Download Resume
        </Button>

        {/* <Button
          variant="outline"
          size="sm"
          iconName="Mail"
          iconPosition="left"
          onClick={handleContactClick}
          className="justify-start"
        >
          Send Email
        </Button> */}

        <Button
          variant="ghost"
          size="sm"
          iconName="Github"
          iconPosition="left"
          onClick={handleGitHubClick}
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          View GitHub
        </Button>

        <Button
          variant="ghost"
          size="sm"
          iconName="Linkedin"
          iconPosition="left"
          onClick={handleLinkedInClick}
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Connect LinkedIn
        </Button>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last updated</span>
          <span className="text-foreground font-medium">July 29, 2025</span>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;