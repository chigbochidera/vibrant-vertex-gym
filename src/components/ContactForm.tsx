
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    // Replace with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Something went wrong. Please try again.");
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-brightRed">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-brightRed">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
            I'm Interested In
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Membership">Membership Information</option>
            <option value="Personal Training">Personal Training</option>
            <option value="Group Classes">Group Classes</option>
            <option value="Corporate Wellness">Corporate Wellness</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-brightRed">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          placeholder="Tell us how we can help you..."
        ></textarea>
      </div>
      
      {/* Hidden honeypot field to prevent spam */}
      <input type="hidden" name="botcheck" style={{ display: 'none' }} />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-secondary flex justify-center items-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
      
      {result && (
        <div className={`text-center mt-2 ${result.includes("Error") ? "text-red-500" : "text-green-500"}`}>
          {result}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
