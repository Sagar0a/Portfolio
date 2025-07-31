import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const KeyboardShortcuts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortcuts = [
    { key: 'H', description: 'Navigate to Hero section', action: 'Go to top' },
    { key: 'A', description: 'Navigate to About section', action: 'About me' },
    { key: 'P', description: 'Navigate to Projects section', action: 'View projects' },
    { key: 'S', description: 'Navigate to Skills section', action: 'See skills' },
    { key: 'C', description: 'Navigate to Contact section', action: 'Contact form' },
    { key: 'R', description: 'Download resume', action: 'Get resume' },
    { key: '/', description: 'Focus search (if available)', action: 'Search' },
    { key: 'Esc', description: 'Close modals/overlays', action: 'Close' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
            <Icon name="Keyboard" size={20} color="white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Keyboard Shortcuts</h3>
            <p className="text-sm text-muted-foreground">Navigate faster with keys</p>
          </div>
        </div>
        
        <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className="text-muted-foreground"
            strokeWidth={2}
          />
        </button>
      </div>

      <div className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="space-y-3">
          {shortcuts.map((shortcut, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-muted border border-border rounded-md flex items-center justify-center mr-3">
                  <span className="text-xs font-mono font-semibold text-foreground">
                    {shortcut.key}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {shortcut.action}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {shortcut.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="Info" size={14} className="mr-2" strokeWidth={2} />
            <span>Press and hold keys while browsing to activate shortcuts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;