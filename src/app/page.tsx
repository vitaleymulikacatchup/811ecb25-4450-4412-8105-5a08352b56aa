"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { BarChart3, Zap, Brain, Shield, Users, TrendingUp, Clock, Sparkles } from "lucide-react";

export default function SaaSLandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="gradientBars"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="SaaSFlow"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Streamline Your Workflow with SaaSFlow"
          description="Powerful automation tools designed to help teams work smarter, faster, and more collaboratively. Trusted by thousands of companies worldwide."
          tag="New Release"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151006583-ms3xshpe.jpg"
          imageAlt="SaaS dashboard interface"
          textPosition="bottom-left"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", href: "#" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose SaaSFlow"
          description="We believe in building SaaS products that empower teams to achieve more with less effort. Our platform combines intelligent automation with intuitive design to deliver real business value. Every feature is built with your success in mind, backed by continuous innovation and customer-first development."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to automate, analyze, and optimize your business"
          tag="Core Capabilities"
          features={[
            {
              title: "Advanced Analytics",
              description: "Real-time dashboards with deep insights into your business metrics and performance trends",
              icon: BarChart3
            },
            {
              title: "Seamless Integration",
              description: "Connect with 500+ apps and services to create powerful automated workflows",
              icon: Zap
            },
            {
              title: "Smart Automation",
              description: "Save hours every week with intelligent automation that learns your patterns",
              icon: Brain
            },
            {
              title: "Enterprise Security",
              description: "Bank-grade encryption and compliance with GDPR, SOC 2, and industry standards",
              icon: Shield
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="See the impact SaaSFlow delivers for teams everywhere"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Users",
              value: "50K+"
            },
            {
              id: "2",
              icon: TrendingUp,
              title: "Growth",
              value: "300%"
            },
            {
              id: "3",
              icon: Clock,
              title: "Hours Saved",
              value: "2M+"
            },
            {
              id: "4",
              icon: Zap,
              title: "Automations",
              value: "10M+"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your team. All plans include a 14-day free trial."
          tag="Pricing"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              price: "$29/mo",
              subtitle: "Perfect for getting started",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Up to 5 team members",
                "100 automations per month",
                "Basic analytics dashboard",
                "Email support"
              ]
            },
            {
              id: "pro",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$99/mo",
              subtitle: "Best for growing teams",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Up to 50 team members",
                "Unlimited automations",
                "Advanced analytics & reporting",
                "Priority support",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large organizations",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Schedule Demo", href: "#" }
              ],
              features: [
                "Unlimited team members",
                "Unlimited automations",
                "White-label solution",
                "Dedicated support",
                "SLA guarantee",
                "On-premise deployment"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFour
          title="Loved by Teams Worldwide"
          description="Hear from customers who've transformed their workflows with SaaSFlow"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Operations Manager",
              company: "TechCorp Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151016513-iitadh88.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "CEO",
              company: "Growth Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151017771-cpwn3ova.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Product Lead",
              company: "InnovateLabs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151019100-1c8ta7g8.jpg",
              imageAlt: "Emily Watson"
            },
            {
              id: "4",
              name: "David Kumar",
              role: "Founder",
              company: "StartupX",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151020376-eia5oc1q.jpg",
              imageAlt: "David Kumar"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join thousands of teams using SaaSFlow to streamline their operations"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151023766-16cvpvpw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151025361-qywbrf4v.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151026577-elzn0mhb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151028057-mhy7dso6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151029557-r2usf1gf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151030781-79cj3s3q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151032136-cvbtzq4r.jpg"
          ]}
          textboxLayout="default"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about SaaSFlow"
          faqs={[
            {
              id: "1",
              title: "What is included in the free trial?",
              content: "Your 14-day free trial includes full access to all features in your selected plan, including unlimited automations, analytics, and integrations. No credit card required to get started."
            },
            {
              id: "2",
              title: "Can I cancel anytime?",
              content: "Yes, you can cancel your subscription at any time with no questions asked. Your data will be available for export for 30 days after cancellation."
            },
            {
              id: "3",
              title: "Do you offer discounts for annual plans?",
              content: "Yes! We offer 20% off when you commit to an annual plan. Contact our sales team to discuss volume discounts for enterprise customers."
            },
            {
              id: "4",
              title: "What integrations are available?",
              content: "We support 500+ integrations including Slack, Salesforce, HubSpot, Google Workspace, and more. Custom integrations are available on enterprise plans."
            },
            {
              id: "5",
              title: "How secure is my data?",
              content: "We use enterprise-grade encryption, comply with GDPR and SOC 2 Type II, and conduct regular security audits. Your data is stored on secure, redundant servers."
            },
            {
              id: "6",
              title: "Is there a free plan?",
              content: "We don't have a free plan, but our 14-day free trial gives you full access to premium features. This helps us ensure the best quality of service for all users."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Get the latest SaaSFlow updates, tips, and best practices delivered to your inbox weekly."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764151022277-f36hdwpy.jpg"
          imageAlt="Newsletter signup"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" },
                { label: "Enterprise", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Contact Support", href: "contact" },
                { label: "Status Page", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 SaaSFlow. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}