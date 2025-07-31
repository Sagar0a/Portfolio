import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Simulate online/offline status
    const statusTimer = setInterval(() => {
      setIsOnline(Math.random() > 0.3); // 70% chance of being online
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  const getTimeZoneInfo = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timeString = currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    return { timeZone, timeString };
  };

  const getAvailabilityStatus = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    
    // Weekend check
    if (day === 0 || day === 6) {
      return {
        status: 'limited',
        message: 'Weekend - Limited availability',
        color: 'warning',
        icon: 'Clock'
      };
    }
    
    // Working hours check (9 AM - 6 PM)
    if (hour >= 9 && hour < 18) {
      return {
        status: 'available',
        message: 'Available for immediate response',
        color: 'success',
        icon: 'CheckCircle'
      };
    }
    
    // Evening hours
    if (hour >= 18 && hour < 22) {
      return {
        status: 'limited',
        message: 'Evening hours - May respond later',
        color: 'warning',
        icon: 'Clock'
      };
    }
    
    // Night/early morning
    return {
      status: 'away',
      message: 'Outside working hours',
      color: 'error',
      icon: 'Moon'
    };
  };

  const { timeZone, timeString } = getTimeZoneInfo();
  const availability = getAvailabilityStatus();

  const statusColors = {
    success: 'bg-success text-success-foreground',
    warning: 'bg-warning text-warning-foreground',
    error: 'bg-error text-error-foreground'
  };

  const statusBgColors = {
    success: 'bg-success/10 border-success/20',
    warning: 'bg-warning/10 border-warning/20',
    error: 'bg-error/10 border-error/20'
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Activity" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Current Status</h3>
          <p className="text-sm text-muted-foreground">Real-time availability</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Online Status */}
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-success' : 'bg-error'} ${isOnline ? 'animate-pulse' : ''}`}></div>
            <span className="text-sm font-medium text-foreground">
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Last seen: {isOnline ? 'Now' : '5 minutes ago'}
          </span>
        </div>

        {/* Availability Status */}
        <div className={`p-4 rounded-lg border ${statusBgColors[availability.color]}`}>
          <div className="flex items-center space-x-3 mb-2">
            <Icon name={availability.icon} size={18} color={`var(--color-${availability.color})`} />
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${statusColors[availability.color]}`}>
              {availability.status.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-foreground">{availability.message}</p>
        </div>

        {/* Time Zone Info */}
        <div className="p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Local Time</span>
            <Icon name="Globe" size={16} color="var(--color-muted-foreground)" />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{timeString}</p>
            <p className="text-xs mt-1">Delhi, Chennai</p>
          </div>
        </div>

        {/* Current Focus */}
        <div className="p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/10">
          <div className="flex items-start space-x-3">
            <Icon name="Target" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">Currently Seeking</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Frontend Developer positions (React/Next.js)</li>
                <li>• Exciting project collaborations</li>
                <li>• Mentorship opportunities</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Time Expectations */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Expected Response Times</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Job opportunities</span>
              <span className="text-success font-medium">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Project collaborations</span>
              <span className="text-warning font-medium">2-3 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">General inquiries</span>
              <span className="text-muted-foreground font-medium">3-5 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;