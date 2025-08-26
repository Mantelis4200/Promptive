'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Blog data (in real app, this would come from API or CMS)
const createBlogPosts = () => [
  {
    id: 1,
    title: "How AI Chatbots Increased Lead Qualification by 300% for SaaS Companies",
    excerpt: "Discover how implementing AI chatbots transformed lead generation for three different SaaS companies, resulting in higher quality leads and reduced manual work.",
    category: "AI Automation",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/images/blog/ai-chatbots.jpg",
    slug: "ai-chatbots-lead-qualification-saas",
    author: "Augustas Vinikas",
    authorRole: "CEO & Founder",
    authorImage: "/images/photo.webp",
    content: `
      <p>Lead qualification has always been a bottleneck for growing SaaS companies. Sales teams spend countless hours sifting through unqualified leads, while potential customers wait days for responses. But what if there was a way to automate this process while actually improving the quality of leads that reach your sales team?</p>

      <p>Over the past year, we've implemented AI chatbots for three different SaaS companies, and the results have been remarkable. Here's exactly how we achieved a 300% increase in lead qualification efficiency.</p>

      <h2>The Problem: Traditional Lead Qualification is Broken</h2>

      <p>Most SaaS companies rely on static contact forms and manual follow-up processes. This approach has several critical flaws:</p>

      <ul>
        <li><strong>Delayed response times:</strong> Leads wait 24-48 hours for initial contact</li>
        <li><strong>Inconsistent qualification:</strong> Different sales reps ask different questions</li>
        <li><strong>Low engagement:</strong> Static forms don't engage prospects or build relationships</li>
        <li><strong>Resource intensive:</strong> Sales teams spend 60% of their time on unqualified leads</li>
      </ul>

      <p>One of our clients, a project management SaaS, was receiving 200+ leads per month but only converting 3% to demos. Their sales team was overwhelmed, and qualified prospects were slipping through the cracks.</p>

      <h2>The Solution: Intelligent Conversation-Based Qualification</h2>

      <p>We designed an AI chatbot system that doesn't just collect contact information—it has intelligent conversations that qualify leads in real-time. Here's how it works:</p>

      <h3>1. Dynamic Question Flow</h3>

      <p>Instead of static forms, the chatbot adapts its questions based on previous answers. For example:</p>

      <ul>
        <li>If a prospect mentions "team size," the bot asks about current collaboration tools</li>
        <li>If they indicate "enterprise," it focuses on security and compliance questions</li>
        <li>If they're a "startup," it emphasizes ease of use and quick setup</li>
      </ul>

      <h3>2. Real-Time Lead Scoring</h3>

      <p>The system assigns qualification scores based on responses, automatically categorizing leads as:</p>

      <ul>
        <li><strong>Hot (90-100 points):</strong> Enterprise prospects with immediate need and budget</li>
        <li><strong>Warm (70-89 points):</strong> Good fit but longer sales cycle</li>
        <li><strong>Cold (below 70):</strong> Early stage or poor fit for nurturing campaigns</li>
      </ul>

      <h3>3. Immediate Value Delivery</h3>

      <p>The chatbot doesn't just extract information—it provides immediate value by:</p>

      <ul>
        <li>Recommending relevant features based on stated needs</li>
        <li>Offering personalized demo scenarios</li>
        <li>Providing instant ROI calculations</li>
        <li>Sharing relevant case studies and resources</li>
      </ul>

      <h2>Implementation: The Technical Framework</h2>

      <p>We built the system using a combination of natural language processing and rule-based logic:</p>

      <h3>Conversation Engine</h3>

      <p>The core engine processes responses and determines the next best question or action. Key components include:</p>

      <ul>
        <li><strong>Intent Recognition:</strong> Understanding what prospects are really asking</li>
        <li><strong>Context Maintenance:</strong> Remembering previous conversation points</li>
        <li><strong>Response Generation:</strong> Creating natural, helpful responses</li>
        <li><strong>Handoff Logic:</strong> Knowing when to connect prospects with humans</li>
      </ul>

      <h3>Integration Stack</h3>

      <p>The chatbot integrates seamlessly with existing sales tools:</p>

      <ul>
        <li><strong>CRM Integration:</strong> Automatic lead creation with qualification scores</li>
        <li><strong>Calendar Booking:</strong> Direct scheduling for qualified prospects</li>
        <li><strong>Email Automation:</strong> Personalized follow-up sequences</li>
        <li><strong>Analytics Dashboard:</strong> Real-time conversation and conversion metrics</li>
      </ul>

      <h2>Results: 300% Improvement in Lead Qualification</h2>

      <p>After implementing the AI chatbot system, our three SaaS clients saw dramatic improvements:</p>

      <h3>Client 1: Project Management SaaS</h3>

      <ul>
        <li><strong>Lead volume:</strong> 200 → 280 monthly leads (+40%)</li>
        <li><strong>Qualification rate:</strong> 15% → 65% (+333%)</li>
        <li><strong>Demo booking rate:</strong> 3% → 12% (+300%)</li>
        <li><strong>Sales cycle:</strong> 45 days → 28 days (-38%)</li>
      </ul>

      <h3>Client 2: Marketing Automation Platform</h3>

      <ul>
        <li><strong>Response time:</strong> 24 hours → 30 seconds</li>
        <li><strong>Lead quality score:</strong> 42/100 → 78/100 (+86%)</li>
        <li><strong>Sales team efficiency:</strong> 40% time on qualified leads → 85%</li>
        <li><strong>Revenue attribution:</strong> 23% from chatbot-qualified leads</li>
      </ul>

      <h3>Client 3: HR Tech Startup</h3>

      <ul>
        <li><strong>Engagement rate:</strong> 8% → 34% (+325%)</li>
        <li><strong>Information capture:</strong> 3 data points → 12 data points average</li>
        <li><strong>Follow-up efficiency:</strong> 60% reduction in manual qualification calls</li>
      </ul>

      <h2>Key Success Factors</h2>

      <p>Based on these implementations, several factors were critical to success:</p>

      <h3>1. Conversation Design</h3>

      <p>The chatbot's personality and conversation flow must align with your brand and buyer's journey. We spent significant time crafting conversations that felt natural and helpful, not robotic or pushy.</p>

      <h3>2. Qualification Criteria</h3>

      <p>Clear definition of what makes a qualified lead is essential. We worked with sales teams to identify the exact questions and responses that indicate purchase intent and fit.</p>

      <h3>3. Handoff Strategy</h3>

      <p>Knowing when to transition from bot to human is crucial. We implemented smart handoff triggers based on qualification score, complexity of questions, and prospect preferences.</p>

      <h3>4. Continuous Optimization</h3>

      <p>Regular analysis of conversation data reveals optimization opportunities. We review monthly reports and continuously refine the conversation flows and qualification logic.</p>

      <h2>Getting Started: Implementation Roadmap</h2>

      <p>If you're considering implementing AI chatbots for lead qualification, here's a proven roadmap:</p>

      <h3>Week 1-2: Strategy & Planning</h3>

      <ul>
        <li>Define ideal customer profile and qualification criteria</li>
        <li>Map current lead qualification process and pain points</li>
        <li>Design conversation flows and bot personality</li>
        <li>Set success metrics and tracking requirements</li>
      </ul>

      <h3>Week 3-4: Development & Setup</h3>

      <ul>
        <li>Build chatbot logic and conversation engine</li>
        <li>Integrate with CRM and existing sales tools</li>
        <li>Create analytics dashboard and reporting</li>
        <li>Set up automated follow-up sequences</li>
      </ul>

      <h3>Week 5-6: Testing & Launch</h3>

      <ul>
        <li>Internal testing with sales team feedback</li>
        <li>A/B test different conversation approaches</li>
        <li>Soft launch with monitoring and quick iterations</li>
        <li>Full rollout with performance tracking</li>
      </ul>

      <h3>Ongoing: Optimization</h3>

      <ul>
        <li>Weekly performance reviews and adjustments</li>
        <li>Monthly conversation flow optimization</li>
        <li>Quarterly strategy review and feature updates</li>
      </ul>

      <h2>Conclusion: The Future of Lead Qualification</h2>

      <p>AI chatbots represent a fundamental shift in how SaaS companies approach lead qualification. By combining intelligent conversation design with real-time scoring and integration, companies can dramatically improve both the quantity and quality of qualified leads.</p>

      <p>The results speak for themselves: 300% improvement in qualification rates, faster sales cycles, and more efficient sales teams. But perhaps most importantly, prospects get a better experience—immediate responses, personalized interactions, and genuine value from their very first touchpoint.</p>

      <p>As AI technology continues to evolve, chatbots will become even more sophisticated, offering personalized experiences that rival human interactions while scaling to handle unlimited conversations simultaneously.</p>

      <p>The question isn't whether AI chatbots will transform lead qualification—it's whether your company will be an early adopter or play catch-up.</p>
    `
  },
  {
    id: 2,
    title: "The Complete Guide to Marketing Automation Workflows in 2024",
    excerpt: "Learn how to build effective marketing automation workflows that nurture leads, increase conversions, and save your team 20+ hours per week.",
    category: "Marketing",
    date: "2024-03-12",
    readTime: "12 min read",
    image: "/images/blog/marketing-automation.jpg",
    slug: "complete-guide-marketing-automation-workflows-2024",
    author: "Augustas Vinikas",
    authorRole: "CEO & Founder",
    authorImage: "/images/photo.webp",
    content: `
      <p>Marketing automation workflows are the invisible engine behind the most successful companies today. They work 24/7 to nurture leads, onboard customers, and drive revenue while your team focuses on strategy and creativity.</p>

      <p>In this comprehensive guide, we'll walk through everything you need to know about building marketing automation workflows that actually move the needle for your business.</p>

      <h2>What Are Marketing Automation Workflows?</h2>

      <p>Marketing automation workflows are predefined sequences of actions triggered by specific customer behaviors or data points. Think of them as "if this, then that" rules that automatically execute marketing tasks without manual intervention.</p>

      <p>For example: When someone downloads your ebook → Send welcome email → Wait 2 days → Send case study → Wait 3 days → Send demo invitation → Continue nurturing until they book a call or become a customer.</p>

      <h2>The Essential Workflows Every Business Needs</h2>

      <p>Based on our work with 50+ companies across different industries, here are the workflows that deliver the biggest impact:</p>

      <h3>1. Welcome Email Series</h3>

      <p>Your welcome series is often the first real interaction new subscribers have with your brand. A well-crafted welcome series can:</p>

      <ul>
        <li>Increase email open rates by 50%+ compared to regular campaigns</li>
        <li>Drive 20-30% of total email revenue</li>
        <li>Establish brand voice and expectations</li>
        <li>Segment subscribers based on interests and behavior</li>
      </ul>

      <h3>2. Lead Nurturing Campaigns</h3>

      <p>Not every lead is ready to buy immediately. Lead nurturing workflows gradually build trust and demonstrate value through educational content, social proof, and personalized messaging.</p>

      <h3>3. Abandoned Cart Recovery</h3>

      <p>For e-commerce businesses, abandoned cart workflows can recover 10-15% of lost sales. The key is timing and messaging that addresses common objections without being pushy.</p>

      <h3>4. Customer Onboarding</h3>

      <p>Proper onboarding reduces churn by 60% and increases feature adoption. Automated onboarding ensures every customer gets the same high-quality experience regardless of when they sign up.</p>

      <h3>5. Re-engagement Campaigns</h3>

      <p>Instead of letting inactive subscribers hurt your deliverability, re-engagement workflows attempt to win them back before automatically cleaning your list.</p>

      <h2>Building High-Converting Workflows: A Step-by-Step Process</h2>

      <p>Here's our proven process for building marketing automation workflows that actually work:</p>

      <h3>Step 1: Map the Customer Journey</h3>

      <p>Before building any workflow, understand your customer's journey from awareness to purchase. Identify:</p>

      <ul>
        <li>Key touchpoints and decision moments</li>
        <li>Common questions and objections at each stage</li>
        <li>Content and information needs</li>
        <li>Preferred communication channels</li>
      </ul>

      <h3>Step 2: Define Clear Triggers</h3>

      <p>Effective workflows start with specific, actionable triggers. Instead of vague triggers like "interested in product," use precise triggers like:</p>

      <ul>
        <li>"Downloaded pricing guide"</li>
        <li>"Visited pricing page 3+ times in 7 days"</li>
        <li>"Opened demo email but didn't book"</li>
        <li>"Trial expires in 3 days"</li>
      </ul>

      <h3>Step 3: Create Valuable Content</h3>

      <p>Each email in your workflow should provide genuine value. Mix educational content, social proof, and soft calls-to-action. The goal is to be helpful first, promotional second.</p>

      <h3>Step 4: Set Logical Timing</h3>

      <p>Timing can make or break your workflows. Consider factors like:</p>

      <ul>
        <li>Industry norms (B2B buyers need longer consideration periods)</li>
        <li>Content complexity (give time to consume before next message)</li>
        <li>Urgency level (trial endings require tighter timing)</li>
        <li>Day of week and time preferences</li>
      </ul>

      <h3>Step 5: Design Exit Conditions</h3>

      <p>Always define when people should exit workflows. Common exit conditions include:</p>

      <ul>
        <li>Completing desired action (booking demo, making purchase)</li>
        <li>Joining another relevant workflow</li>
        <li>Showing signs of disengagement</li>
        <li>Manual removal by sales team</li>
      </ul>

      <h2>Advanced Workflow Strategies</h2>

      <p>Once you master the basics, these advanced strategies can significantly improve performance:</p>

      <h3>Behavioral Branching</h3>

      <p>Create different paths based on engagement levels. For example:</p>

      <ul>
        <li>High engagement → More detailed content and faster progression</li>
        <li>Medium engagement → Educational focus with social proof</li>
        <li>Low engagement → Value-focused messaging and re-engagement tactics</li>
      </ul>

      <h3>Cross-Channel Integration</h3>

      <p>Don't limit workflows to email. Integrate multiple channels for maximum impact:</p>

      <ul>
        <li>Email + SMS for time-sensitive offers</li>
        <li>Email + Social ads for reinforcement</li>
        <li>Email + Direct mail for high-value prospects</li>
        <li>Email + Sales outreach for enterprise leads</li>
      </ul>

      <h3>Dynamic Content Personalization</h3>

      <p>Use data to personalize content within workflows:</p>

      <ul>
        <li>Industry-specific case studies</li>
        <li>Role-based content recommendations</li>
        <li>Company size-appropriate solutions</li>
        <li>Geographic location considerations</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>

      <p>After auditing hundreds of automation workflows, here are the most common mistakes we see:</p>

      <h3>1. Too Many Emails, Too Fast</h3>

      <p>Bombarding subscribers with daily emails often backfires. Focus on quality over quantity and give people time to engage with your content.</p>

      <h3>2. Generic, One-Size-Fits-All Messaging</h3>

      <p>Segmentation is crucial. A CEO's pain points are different from a marketing manager's. Tailor your messaging accordingly.</p>

      <h3>3. Forgetting Mobile Optimization</h3>

      <p>Over 60% of emails are opened on mobile devices. Ensure your emails look great and load quickly on phones.</p>

      <h3>4. No Clear Call-to-Action</h3>

      <p>Every email should have one primary call-to-action. Don't overwhelm subscribers with multiple options.</p>

      <h3>5. Not Testing and Optimizing</h3>

      <p>Set up workflows and forget about them is a missed opportunity. Regular testing and optimization can improve performance by 30-50%.</p>

      <h2>Measuring Success: Key Metrics to Track</h2>

      <p>To optimize your workflows, you need to track the right metrics:</p>

      <h3>Engagement Metrics</h3>

      <ul>
        <li><strong>Open Rate:</strong> Industry average is 15-25%</li>
        <li><strong>Click Rate:</strong> Aim for 2-5% depending on industry</li>
        <li><strong>Unsubscribe Rate:</strong> Keep below 0.5%</li>
        <li><strong>Spam Complaints:</strong> Stay under 0.1%</li>
      </ul>

      <h3>Conversion Metrics</h3>

      <ul>
        <li><strong>Workflow Conversion Rate:</strong> Percentage completing desired action</li>
        <li><strong>Revenue per Email:</strong> Total revenue divided by emails sent</li>
        <li><strong>Customer Lifetime Value:</strong> Long-term impact on business</li>
        <li><strong>Cost per Acquisition:</strong> Marketing costs vs. new customers</li>
      </ul>

      <h3>Workflow-Specific Metrics</h3>

      <ul>
        <li><strong>Completion Rate:</strong> How many finish the entire workflow</li>
        <li><strong>Drop-off Points:</strong> Where people stop engaging</li>
        <li><strong>Time to Conversion:</strong> How long from start to desired action</li>
        <li><strong>Reactivation Rate:</strong> For re-engagement campaigns</li>
      </ul>

      <h2>Tools and Platforms</h2>

      <p>The right platform depends on your needs, budget, and technical requirements. Here's our take on popular options:</p>

      <h3>For Small Businesses</h3>

      <ul>
        <li><strong>Mailchimp:</strong> User-friendly with solid automation features</li>
        <li><strong>ConvertKit:</strong> Great for creators and content businesses</li>
        <li><strong>ActiveCampaign:</strong> Advanced automation at reasonable price</li>
      </ul>

      <h3>For Growing Companies</h3>

      <ul>
        <li><strong>HubSpot:</strong> Comprehensive marketing platform</li>
        <li><strong>Klaviyo:</strong> E-commerce focused with advanced segmentation</li>
        <li><strong>Pardot:</strong> B2B focused with Salesforce integration</li>
      </ul>

      <h3>For Enterprise</h3>

      <ul>
        <li><strong>Marketo:</strong> Sophisticated automation and lead scoring</li>
        <li><strong>Eloqua:</strong> Oracle's enterprise solution</li>
        <li><strong>Adobe Campaign:</strong> Part of Adobe Experience Cloud</li>
      </ul>

      <h2>Real-World Examples</h2>

      <p>Let's look at how different companies use automation workflows effectively:</p>

      <h3>SaaS Company: Trial Onboarding</h3>

      <p>A project management SaaS uses a 14-day trial onboarding workflow:</p>

      <ul>
        <li><strong>Day 0:</strong> Welcome email with setup guide</li>
        <li><strong>Day 1:</strong> Tutorial video for core features</li>
        <li><strong>Day 3:</strong> Best practices guide with templates</li>
        <li><strong>Day 7:</strong> Case study + advanced features demo</li>
        <li><strong>Day 11:</strong> Personal check-in from customer success</li>
        <li><strong>Day 13:</strong> Upgrade reminder with special offer</li>
      </ul>

      <p><strong>Result:</strong> 35% trial-to-paid conversion rate (industry average: 15-20%)</p>

      <h3>E-commerce: Abandoned Cart Recovery</h3>

      <p>An online retailer uses a 3-email abandoned cart sequence:</p>

      <ul>
        <li><strong>2 hours later:</strong> "Forgot something?" with cart contents</li>
        <li><strong>24 hours later:</strong> Social proof + customer reviews</li>
        <li><strong>3 days later:</strong> 10% discount code + urgency</li>
      </ul>

      <p><strong>Result:</strong> 12% of abandoned carts converted to sales</p>

      <h3>B2B Service: Lead Nurturing</h3>

      <p>A consulting firm nurtures leads with educational content:</p>

      <ul>
        <li><strong>Week 1:</strong> Industry report download</li>
        <li><strong>Week 2:</strong> Webinar invitation</li>
        <li><strong>Week 3:</strong> Case study relevant to their industry</li>
        <li><strong>Week 4:</strong> Calculator tool for ROI estimation</li>
        <li><strong>Week 6:</strong> Consultation offer</li>
      </ul>

      <p><strong>Result:</strong> 18% of nurtured leads book consultations vs. 3% for cold outreach</p>

      <h2>Future of Marketing Automation</h2>

      <p>Marketing automation continues to evolve. Here are trends shaping the future:</p>

      <h3>AI-Powered Personalization</h3>

      <p>Machine learning algorithms will optimize send times, content selection, and messaging for each individual subscriber automatically.</p>

      <h3>Predictive Analytics</h3>

      <p>Advanced analytics will predict which leads are most likely to convert, allowing for more targeted automation strategies.</p>

      <h3>Omnichannel Integration</h3>

      <p>Workflows will seamlessly integrate email, SMS, social media, direct mail, and even IoT devices for truly unified experiences.</p>

      <h3>Privacy-First Automation</h3>

      <p>With increasing privacy regulations, automation platforms will need to provide powerful personalization while respecting user privacy and consent.</p>

      <h2>Getting Started: Your 30-Day Action Plan</h2>

      <p>Ready to implement marketing automation workflows? Here's your 30-day roadmap:</p>

      <h3>Week 1: Strategy and Planning</h3>

      <ul>
        <li>Audit current email marketing efforts</li>
        <li>Map customer journey and identify automation opportunities</li>
        <li>Choose automation platform based on needs and budget</li>
        <li>Set up tracking and analytics</li>
      </ul>

      <h3>Week 2: Build Your First Workflow</h3>

      <ul>
        <li>Start with welcome email series (highest impact, easiest to implement)</li>
        <li>Write 3-5 emails focusing on value and education</li>
        <li>Set up triggers and timing</li>
        <li>Design mobile-optimized email templates</li>
      </ul>

      <h3>Week 3: Test and Launch</h3>

      <ul>
        <li>Internal testing with team members</li>
        <li>A/B test subject lines and content</li>
        <li>Soft launch with small segment</li>
        <li>Monitor performance and make adjustments</li>
      </ul>

      <h3>Week 4: Optimize and Scale</h3>

      <ul>
        <li>Analyze performance data</li>
        <li>Optimize based on engagement metrics</li>
        <li>Plan second workflow (lead nurturing or re-engagement)</li>
        <li>Document processes and best practices</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Marketing automation workflows aren't just a nice-to-have anymore—they're essential for competing in today's market. When done right, they can increase conversions by 30%, reduce manual work by 80%, and provide better experiences for your customers.</p>

      <p>The key is to start simple, focus on providing value, and continuously optimize based on data. Don't try to automate everything at once. Build one solid workflow, perfect it, then expand to others.</p>

      <p>Remember: automation should enhance human relationships, not replace them. Use workflows to deliver timely, relevant value, and always be ready to hand off to a human when appropriate.</p>

      <p>The companies that master marketing automation workflows today will have a significant competitive advantage tomorrow. The question is: will you be among them?</p>
    `
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('blogPost');
  const blogPosts = createBlogPosts();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showInlineCTA, setShowInlineCTA] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);

    // Find post by slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug, blogPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight = contentRef.current.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      setScrollProgress(Math.min(scrollPercent * 100, 100));
      
      // Show inline CTA at 30% scroll
      setShowInlineCTA(scrollPercent > 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <a href="/blog" className="text-purple-600 hover:text-purple-700">
            ← Back to blog
          </a>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <a href="/blog" className="hover:text-purple-600 transition-colors">{t('backToBlog')}</a>
              <span>→</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            {/* Category Tag */}
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-600">{post.authorRole}</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-sm">
                <p>{formatDate(post.date)}</p>
                <p className="text-gray-500">{post.readTime}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Placeholder for featured image */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-purple-300">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg prose-gray max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    maxWidth: '65ch'
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Inline CTA at 30% scroll */}
              {showInlineCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="my-12 p-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white text-center"
                >
                  <h3 className="text-2xl font-bold mb-4">{t('inlineCta.title')}</h3>
                  <p className="text-lg mb-6 opacity-90">
                    {t('inlineCta.description')}
                  </p>
                  <motion.button
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('inlineCta.button')}
                  </motion.button>
                </motion.div>
              )}

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('shareTitle')}</h4>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span>{t('shareTwitter')}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>{t('shareLinkedIn')}</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Table of Contents (would be generated from content headings in real app) */}
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h4 className="font-bold text-gray-900 mb-4">{t('tableOfContents')}</h4>
                <nav className="space-y-2 text-sm">
                  <a href="#problem" className="block text-gray-600 hover:text-purple-600 transition-colors">The Problem</a>
                  <a href="#solution" className="block text-gray-600 hover:text-purple-600 transition-colors">The Solution</a>
                  <a href="#implementation" className="block text-gray-600 hover:text-purple-600 transition-colors">Implementation</a>
                  <a href="#results" className="block text-gray-600 hover:text-purple-600 transition-colors">Results</a>
                  <a href="#getting-started" className="block text-gray-600 hover:text-purple-600 transition-colors">Getting Started</a>
                </nav>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">{t('sidebar.newsletter.title')}</h4>
                <p className="text-sm mb-4 opacity-90">
                  {t('sidebar.newsletter.description')}
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={t('sidebar.newsletter.placeholder')}
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-purple-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    {t('sidebar.newsletter.button')}
                  </button>
                </div>
              </div>

              {/* Lead Magnet */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{t('sidebar.leadMagnet.title')}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {t('sidebar.leadMagnet.description')}
                </p>
                <button className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition-colors">
                  {t('sidebar.leadMagnet.button')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-purple-300">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        <a href={`/blog/${relatedPost.slug}`} className="hover:text-purple-600 transition-colors">
                          {relatedPost.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Apply These Strategies?</h3>
            <p className="text-lg mb-8 opacity-90">
              Let&apos;s discuss how we can implement these automation techniques for your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Consultation
              </motion.button>
              <motion.button
                onClick={() => window.location.href = '/services/automation'}
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Services
              </motion.button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              ⚡ 30-minute call • 🎯 Custom strategy • 💰 No commitment required
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}