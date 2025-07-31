import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiryType: '',
    message: '',
    newsletter: false,
    urgency: 'normal'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    { value: 'job', label: 'Job Opportunity' },
    { value: 'collaboration', label: 'Project Collaboration' },
    { value: 'mentorship', label: 'Mentorship/Guidance' },
    { value: 'technical', label: 'Technical Discussion' },
    { value: 'networking', label: 'General Networking' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low Priority (1-2 weeks)' },
    { value: 'normal', label: 'Normal (3-5 days)' },
    { value: 'high', label: 'High Priority (24-48 hours)' },
    { value: 'urgent', label: 'Urgent (Same day)' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          inquiryType: '',
          message: '',
          newsletter: false,
          urgency: 'normal'
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for reaching out. I'll get back to you within {formData.urgency === 'urgent' ? '24 hours' : formData.urgency === 'high' ? '48 hours' : '3-5 days'}.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>Expected response time: {formData.urgency === 'urgent' ? 'Same day' : formData.urgency === 'high' ? '1-2 days' : '3-5 days'}</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 lg:p-8 space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Send" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
          <p className="text-sm text-muted-foreground">I'd love to hear from you</p>
        </div>
      </div>

      {errors.submit && (
        <div className="bg-error/10 border border-error/20 rounded-lg p-4 flex items-center space-x-3">
          <Icon name="AlertCircle" size={20} color="var(--color-error)" />
          <span className="text-error text-sm">{errors.submit}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          error={errors.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="youremail@gmail.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company/Organization"
          type="text"
          placeholder="Your company name (optional)"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
        />

        <Input
          label="Your Role"
          type="text"
          placeholder="e.g., Hiring Manager, Developer"
          value={formData.role}
          onChange={(e) => handleInputChange('role', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Inquiry Type"
          placeholder="What's this about?"
          options={inquiryOptions}
          value={formData.inquiryType}
          onChange={(value) => handleInputChange('inquiryType', value)}
          error={errors.inquiryType}
          required
        />

        <Select
          label="Response Priority"
          placeholder="How urgent is this?"
          options={urgencyOptions}
          value={formData.urgency}
          onChange={(value) => handleInputChange('urgency', value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          placeholder="Tell me about your project, opportunity, or question..."
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none ${
            errors.message ? 'border-error' : 'border-border'
          }`}
        />
        <div className="flex justify-between items-center mt-2">
          {errors.message && (
            <span className="text-error text-sm">{errors.message}</span>
          )}
          <span className={`text-xs ml-auto ${
            formData.message.length > 1000 ? 'text-error' : 'text-muted-foreground'
          }`}>
            {formData.message.length}/1000
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <Checkbox
          label="Subscribe to my newsletter for development updates and insights"
          description="Get notified about new projects, blog posts, and career updates"
          checked={formData.newsletter}
          onChange={(e) => handleInputChange('newsletter', e.target.checked)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="flex-1 sm:flex-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => {
            setFormData({
              name: '',
              email: '',
              company: '',
              role: '',
              inquiryType: '',
              message: '',
              newsletter: false,
              urgency: 'normal'
            });
            setErrors({});
          }}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;