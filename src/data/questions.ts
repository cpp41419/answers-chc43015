
import type { FAQQuestion } from '@/types';
import { categories as allDefinedCategories } from './categories';
import { slugify } from '@/lib/utils';

const generateId = () => crypto.randomUUID();
const defaultLastUpdated = new Date().toISOString();

export const questions: FAQQuestion[] = [
  // Course Basics & Enrollment
  {
    id: generateId(),
    question: "What is CPP41419 Certificate IV in Real Estate Practice?",
    answer: "CPP41419 is Australia's nationally recognized qualification required to become a licensed real estate agent. It covers property sales, leasing, trust account management, legal compliance, and client relationship skills.^[1]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Do I need any prerequisites to enroll in CPP41419?",
    answer: "No formal prerequisites exist. However, you must be:\n- At least 18 years old (in most states)\n- Australian citizen, permanent resident, or hold appropriate visa\n- Have basic English literacy and computer skills for online study",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can international students enroll in CPP41419?",
    answer: "Yes, international students can enroll, but licensing requirements vary by state. Some states have additional visa and residency requirements for licensing.^[2]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What's the difference between CPP40307 and CPP41419?",
    answer: "CPP41419 is the current standard, replacing the expired CPP40307 in 2019. The newer qualification enhances the course with a stronger focus on ethical practice, digital marketing skills, and modern compliance knowledge, moving beyond the basic skills and limited digital focus of its predecessor.^[3]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Is CPP41419 recognized in all Australian states?",
    answer: "Yes, CPP41419 is nationally recognized. However, each state has different licensing processes, experience requirements, and additional criteria.^[4]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Study Options & Duration
  {
    id: generateId(),
    question: "How long does CPP41419 take to complete?",
    answer: "The time to complete CPP41419 varies by study mode and provider. Typically:\n- Self-Paced Online: 3-6 months\n- Structured Online: 4-8 months\n- Blended Learning: 5-9 months\n- Classroom Based: 6-12 months\nOn average, most students complete the course within 4 to 6 months.^[5]",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I study CPP41419 entirely online?",
    answer: "Yes, most providers offer 100% online study options. Online courses are fully recognized for licensing purposes across all states.^[6]",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What's the difference between online, blended, and classroom study?",
    answer: "The main differences are in flexibility and interaction:\n- **Online**: High flexibility, digital-only interaction. Best for working professionals.\n- **Blended**: Medium flexibility, a mix of digital and in-person interaction. Offers a balanced approach.\n- **Classroom**: Low flexibility, high face-to-face interaction. Best for structured learners.",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I pause my studies and resume later?",
    answer: "Most providers allow study breaks, but policies vary. Check with your chosen provider about:\n- Maximum break duration\n- Re-enrollment requirements\n- Additional fees for extended access",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "How many hours per week do I need to study?",
    answer: "Study time depends on your pace, but here are some general guidelines:\n- **Minimum**: 8-10 hours per week\n- **Average**: 12-15 hours per week\n- **Intensive**: 20+ hours per week for faster completion.",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Costs & Payment
  {
    id: generateId(),
    question: "How much does CPP41419 cost?",
    answer: "Course fees generally range from $1,495 to $2,890. Costs vary depending on the provider type:\n- **Online RTOs**: $1,495 - $1,895\n- **TAFE Institutes**: $2,200 - $2,670\n- **Industry Bodies**: $2,050 - $2,950\n- **Universities**: $2,750 - $2,890.^[7]",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Are there additional costs beyond the course fee?",
    answer: "Yes, be aware of potential additional costs such as:\n- **Learning Materials**: $50-$120 (for some providers)\n- **Assessment Retakes**: $75-$150 (if needed)\n- **Criminal History Check**: $45-$56 (for licensing)\n- **License Application Fee**: $145-$675 (varies by state)\n- **Professional Insurance**: $300-$600 per year (in most states).",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Are payment plans available?",
    answer: "Most providers offer payment plans including:\n- Weekly payments\n- Monthly installments (2-6 months)\n- Employer sponsorship options\n- Government funding programs",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I get government funding or subsidies?",
    answer: "Yes, government funding is available in many states and can significantly reduce costs. Programs include:\n- **VIC**: Skills First funding (up to 50% reduction)\n- **QLD**: Certificate 3 Guarantee (free for under 25s)\n- **WA**: Jobs and Skills Centres (up to 60% reduction)\n- **SA**: Skills for All program (up to 50% reduction)\n- **TAS**: Skills Tasmania (up to 70% reduction)\n- **ACT**: Skilled Capital program (up to 60% reduction)\n- **NT**: Territory Training Assistance (up to 75% reduction)",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Is CPP41419 tax deductible?",
    answer: "Generally yes, if you're:\n- Currently working in real estate\n- Upgrading existing qualifications\n- The course relates to your current income-earning activities\nConsult a tax professional for personal advice.",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // State Licensing Requirements
  {
    id: generateId(),
    question: "Which states require the full CPP41419 for initial licensing?",
    answer: "Some states require the full CPP41419 qualification to start, while others have a staged licensing system.\n\n**Full Qualification Required to Start**:\n- Victoria (for Agent's Representative)\n- Western Australia (for Triennial License)\n- Tasmania (for Property Agent Registration)\n- Northern Territory (for Agent Registration)\n\n**Staged Licensing Available** (entry with partial completion):\n- NSW (5 core units for Certificate of Registration)\n- QLD (7 core units for Registration Certificate)\n- SA (Core units + SA specifics)\n- ACT (Core units for Agent Registration)",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I work while completing my CPP41419?",
    answer: "Yes, in states with staged licensing:\n- **NSW**: Work as Assistant Agent with Certificate of Registration\n- **QLD**: Work with Registration Certificate\n- **SA**: Work with initial Registration\n- **ACT**: Work with Agent Registration",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "How long is the experience requirement in each state?",
    answer: "Experience requirements for a full license vary by state:\n- **NSW**: 12 months as an Assistant Agent.\n- **VIC**: 18 months for an Estate Agent upgrade.\n- **QLD**: 12 months for a Salesperson license.\n- **SA**: 12-24 months to go from Registration to a full License.\n- **TAS**: 12 months for a Property Agent upgrade.\n- **ACT**: 12 months to go from Agent Registration to a full License.\n- **NT**: 18 months.\n- **WA**: Varies by role.",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I transfer my license between states?",
    answer: "Yes, but rules vary. While there is limited mutual recognition, you often need to apply for a new license in the destination state. \n- **NSW & QLD**: Have a mutual recognition agreement.\n- **NSW & VIC**: Have some recognition, but there are additional requirements.\n- **Other states**: Generally require a new application and may require additional state-specific training.\n\nAlways check with the licensing authority in the state you plan to work in.^[8]",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Assessment & Completion
  {
    id: generateId(),
    question: "Are there exams in CPP41419?",
    answer: "No traditional exams. Assessment is through:\n- Project-based assignments\n- Case study analysis\n- Portfolio development\n- Practical demonstrations\n- Written reports",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What happens if I fail an assessment?",
    answer: "If you fail an assessment, the typical process is to review the feedback from your trainer, undertake additional study, and then retake the assessment. Most providers allow 2-3 retake attempts per unit. Additional fees may apply for further attempts.",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "How difficult is CPP41419?",
    answer: "Success rates are generally high (70-90%), depending on the provider. Key factors for successfully completing the course include maintaining a consistent study schedule, actively participating in training, applying concepts practically, and seeking help from trainers when you need it.",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What support is available during study?",
    answer: "Providers offer a range of support services, including:\n- **Trainer Access**: Via email, phone, and video calls.\n- **Study Groups**: Online forums and peer networks.\n- **Learning Materials**: A mix of videos, interactive modules, and textbooks.\n- **Technical Support**: Assistance with the learning platform.\n- **Career Guidance**: Help with job placement and career planning.",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Career & Employment
  {
    id: generateId(),
    question: "What jobs can I get with CPP41419?",
    answer: "Completing CPP41419 opens doors to several roles. Entry-level positions include:\n- **Sales Agent** (Typical OTE: $50k-$70k)\n- **Property Manager** (OTE: $45k-$65k)\n- **Leasing Consultant** (OTE: $42k-$58k)\n\nWith experience, you can progress to senior roles like Senior Sales Agent ($80k-$150k+), or specialize in areas like Commercial Real Estate or Property Development.",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "How quickly can I start earning after completing CPP41419?",
    answer: "Most agents achieve their first sale within:\n- **NSW**: 2.3 months average\n- **VIC**: 2.8 months average\n- **QLD**: 2.1 months average\n- **National Average**: 2-4 months",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What's the average salary for real estate agents?",
    answer: "Salaries (including commission) vary by experience:\n- **Entry Level (0-2 years)**: $45,000 - $70,000\n- **Experienced (3-5 years)**: $70,000 - $120,000\n- **Senior (5+ years)**: $100,000 - $300,000+\n- **Principal/Owner**: $150,000 - $500,000+",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Do I need to join a real estate agency immediately?",
    answer: "Yes, in most states you must work under a licensed agent or agency. Independent practice requires additional licensing and experience.",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Are there job placement services available?",
    answer: "Many providers offer:\n- Industry networking events\n- Job placement assistance\n- Resume and interview preparation\n- Direct connections with real estate agencies\n- Ongoing career support",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Provider Selection
  {
    id: generateId(),
    question: "How do I choose the best CPP41419 provider?",
    answer: "When choosing a provider, consider these key factors:\n- **Study Mode**: Do you prefer online, in-person, or blended learning?\n- **Budget**: Compare course fees and any potential hidden costs.\n- **Support Services**: Check the level of trainer access and quality of study materials.\n- **State Specialization**: Ensure they have strong knowledge of your state's laws.\n- **Industry Connections**: Look for providers with good job placement assistance.",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What's the difference between TAFE and private RTOs?",
    answer: "TAFE and private RTOs differ in several ways:\n- **Cost**: TAFE is often more expensive ($2,200-$2,670) than private RTOs ($1,495-$2,500).\n- **Flexibility**: Private RTOs typically offer more flexibility and self-paced options, while TAFE follows a more structured semester-based schedule.\n- **Learning Style**: TAFE often has more face-to-face options, whereas private RTOs are frequently online-focused.",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Should I choose an industry body for training?",
    answer: "Training with an industry body like REINSW (NSW) or REIQ (QLD) has several advantages:\n- **Industry Connections**: They have direct links to real estate agencies.\n- **Local Knowledge**: Their content is highly specialized for their state.\n- **Credibility**: Their qualifications are highly respected in the industry.\n- **Ongoing Support**: They offer valuable networking and continuing education opportunities.",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Are online-only providers legitimate?",
    answer: "Yes, many legitimate and reputable providers (like Open Colleges, Kaplan Professional, and Entry Education) offer nationally accredited CPP41419 courses entirely online. Always ensure the provider is registered with the Australian Skills Quality Authority (ASQA) and offers strong student support.^[9]",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Technical Requirements
  {
    id: generateId(),
    question: "What technology do I need for online study?",
    answer: "For online study, you'll need:\n- A reliable internet connection (at least 10 Mbps).\n- A computer or tablet with a webcam and microphone.\n- An up-to-date web browser (like Chrome or Firefox).\n- Basic computer skills for managing files and using email.",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can I study on my phone or tablet?",
    answer: "While possible for reading materials, most assessments require:\n- Larger screen for document creation\n- Keyboard for efficient typing\n- File upload capabilities\n- Stable internet for video content",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What if I have technical problems during study?",
    answer: "Most providers offer comprehensive technical support, including phone and email help desks, live chat, video tutorials, and step-by-step guides to help you with any platform issues.",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Do I need specific software for assessments?",
    answer: "Generally no special software required. Standard tools include:\n- Microsoft Office or Google Workspace\n- PDF reader\n- Web browser\n- Email client\n\nSome providers may require specific learning management system access.",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Advanced Questions
  {
    id: generateId(),
    question: "Can I specialize during my CPP41419 studies?",
    answer: "Yes, you can specialize by choosing specific elective units. Common specializations include:\n- **Residential Sales**: Focusing on marketing and selling properties.\n- **Property Management**: Focusing on leasing and tenancy management.\n- **Commercial Real Estate**: Including units on business broking.\n- **Auction Services**: Adding auction-specific training.",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What continuing education is required after licensing?",
    answer: "Most states require Continuing Professional Development (CPD) to maintain your license. Annual requirements are:\n- **NSW & VIC**: 12 hours\n- **QLD & TAS**: 10 hours\n- **ACT & NT**: 12 hours\n- **WA**: 10 points (equivalent to 10 hours) per year, or 30 points over 3 years.\n- **SA**: Requirements vary.",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "Can CPP41419 lead to further qualifications?",
    answer: "Yes, CPP41419 is a pathway to further qualifications, such as:\n- **CPP51122 Diploma of Property (Agency Management)**: Required to run your own agency in most states.\n- **Bachelor of Property**: For university-level studies.\n- **Specialized Certifications**: In areas like auctioneering or commercial real estate.",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What if regulations change after I complete CPP41419?",
    answer: "Your qualification remains valid, but you may be required to complete additional CPD or refresher training to stay up-to-date with significant regulatory changes. Always stay informed through your state's licensing body and industry news.^[10]",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: defaultLastUpdated,
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    id: generateId(),
    question: "What are the specific CPD requirements for a Class 2 Agent in NSW?",
    answer: "In NSW, a Class 2 Agent must complete 12 hours of Continuing Professional Development (CPD) each year. This must include 3 hours of compulsory topics set by NSW Fair Trading, with the remaining 9 hours being elective topics relevant to your role.",
    category: "State Licensing Requirements",
    keywords: ["CPD", "NSW", "Class 2"],
    state_specific: "NSW",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.6,
    ratingCount: 88,
  },
  {
    id: generateId(),
    question: "How do I upgrade from an Assistant Agent to a Class 2 Agent in NSW?",
    answer: "To upgrade to a Class 2 Agent Licence in NSW, you must complete the full CPP41419 Certificate IV in Real Estate Practice and have at least 12 months of practical experience as an Assistant Agent. You then apply to NSW Fair Trading for the licence upgrade.",
    category: "State Licensing Requirements",
    keywords: ["upgrade", "NSW", "Class 2", "Assistant Agent"],
    state_specific: "NSW",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.8,
    ratingCount: 112,
  },
  {
    id: generateId(),
    question: "What is an 'Agent's Representative' in Victoria and what can they do?",
    answer: "An Agent's Representative in Victoria is an individual who has completed the required units of competency (the full CPP41419) and can work in real estate under the supervision of a licensed estate agent. They can perform sales and property management duties but cannot operate their own agency.",
    category: "State Licensing Requirements",
    keywords: ["Agent's Representative", "VIC", "scope"],
    state_specific: "VIC",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.7,
    ratingCount: 95,
  },
  {
    id: generateId(),
    question: "How do I become a fully Licensed Estate Agent in Victoria?",
    answer: "To become a Licensed Estate Agent in Victoria, you must complete the Diploma of Property (Agency Management) - CPP51122, have at least 12 months of full-time experience as an Agent's Representative in the last 3 years, and apply to Consumer Affairs Victoria (CAV).",
    category: "State Licensing Requirements",
    keywords: ["Licensed Estate Agent", "VIC", "upgrade", "diploma"],
    state_specific: "VIC",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.9,
    ratingCount: 78,
  },
  {
    id: generateId(),
    question: "What's the difference between a Registration Certificate and a Full Licence in QLD?",
    answer: "A Registration Certificate in Queensland allows you to work as a salesperson or property manager under supervision. A Full Real Estate Agent Licence allows you to operate independently, manage a trust account, and own your own agency. You need to complete the full CPP41419 for the full licence.",
    category: "State Licensing Requirements",
    keywords: ["Registration Certificate", "QLD", "Full Licence"],
    state_specific: "QLD",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.5,
    ratingCount: 101,
  },
  {
    id: generateId(),
    question: "What are the entry requirements to start working in real estate in QLD?",
    answer: "To start as a real estate salesperson in Queensland, you need to obtain a Registration Certificate from the Office of Fair Trading (OFT). This requires completing a specific set of units from the CPP41419 qualification, rather than the full certificate.",
    category: "State Licensing Requirements",
    keywords: ["entry", "QLD", "Registration Certificate"],
    state_specific: "QLD",
    provider_specific: false,
    priority: 2,
    last_updated: defaultLastUpdated,
    averageRating: 4.6,
    ratingCount: 120,
  },
  // --- Start of new questions ---
  // NSW
  {
    id: generateId(), question: "What are the annual CPD requirements for a Class 1 Agent in NSW?",
    answer: "A Class 1 Agent in NSW must complete 9 hours of CPD annually, which includes 3 hours of compulsory topics and 6 hours of elective topics. This is different from the 12 hours required for Class 2 Agents.",
    category: "State Licensing Requirements", keywords: ["CPD", "NSW", "Class 1"], state_specific: "NSW", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can I manage a trust account as an Assistant Agent in NSW?",
    answer: "No, an Assistant Agent in NSW cannot withdraw money from a trust account. They can perform other trust account functions under the direct supervision of a Class 1 or Class 2 agent, but they cannot be a signatory.",
    category: "State Licensing Requirements", keywords: ["trust account", "NSW", "Assistant Agent"], state_specific: "NSW", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How long is a Certificate of Registration valid for in NSW?",
    answer: "A Certificate of Registration for an Assistant Agent in NSW is valid for four years and is non-renewable. You must progress to a Class 2 Licence within this period to continue working in the industry.",
    category: "State Licensing Requirements", keywords: ["validity", "NSW", "Certificate of Registration"], state_specific: "NSW", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the rules around underquoting in NSW real estate?",
    answer: "NSW has strict laws against underquoting. An agent must provide an estimated selling price in the agency agreement that is reasonable and based on market evidence. This estimate must be updated if it changes.",
    category: "State Licensing Requirements", keywords: ["underquoting", "NSW", "compliance"], state_specific: "NSW", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How do I disclose material facts about a property in NSW?",
    answer: "Agents in NSW must disclose all material facts they know or ought to reasonably know to potential buyers before they enter into a contract. This can include issues like major building defects, strata issues, or even psychological stigmas.",
    category: "State Licensing Requirements", keywords: ["material facts", "disclosure", "NSW"], state_specific: "NSW", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // VIC
  {
    id: generateId(), question: "What is the statement of information and when must it be provided in VIC?",
    answer: "In Victoria, a Statement of Information must be displayed at all open for inspections, included with any online advertising, and given to a prospective buyer within two business days of a request. It must include an indicative selling price, details of three comparable properties, and the median house price for the suburb.",
    category: "State Licensing Requirements", keywords: ["Statement of Information", "VIC", "advertising"], state_specific: "VIC", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can I conduct an auction as an Agent's Representative in VIC?",
    answer: "No, only a fully licensed estate agent who is also an accredited auctioneer can conduct public auctions in Victoria. An Agent's Representative can assist at auctions but cannot call for bids.",
    category: "State Licensing Requirements", keywords: ["auction", "VIC", "Agent's Representative"], state_specific: "VIC", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the key responsibilities of an Officer in Effective Control (OIEC) in Victoria?",
    answer: "The OIEC in a Victorian agency is responsible for supervising the agency's operations, ensuring compliance with the Estate Agents Act, and properly managing the trust account. They must be a fully licensed estate agent.",
    category: "State Licensing Requirements", keywords: ["OIEC", "Victoria", "compliance"], state_specific: "VIC", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Do I need to complete the full CPP41419 before I can start working in VIC?",
    answer: "Yes. Unlike some other states, Victoria requires you to have completed the full CPP41419 Certificate IV in Real Estate Practice before you can apply to the Business Licensing Authority (BLA) to become an Agent's Representative and start working.",
    category: "State Licensing Requirements", keywords: ["entry", "VIC", "full qualification"], state_specific: "VIC", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the rules for price advertising for residential properties in Victoria?",
    answer: "In Victoria, it is illegal to advertise a property at a price that is less than the seller's asking price, the agent's estimated selling price, or a price that has already been rejected by the seller. Price ranges must not exceed 10%.",
    category: "State Licensing Requirements", keywords: ["advertising", "price", "VIC"], state_specific: "VIC", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // QLD
  {
    id: generateId(), question: "What is a Form 6 appointment in Queensland?",
    answer: "A Form 6 (Appointment and reappointment of a property agent) is a legally required document in QLD that a client must sign to formally appoint a real estate agent to act on their behalf for selling, buying, leasing, or managing a property.",
    category: "State Licensing Requirements", keywords: ["Form 6", "QLD", "appointment"], state_specific: "QLD", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can I operate a trust account with a Registration Certificate in QLD?",
    answer: "No, a person holding a Salesperson Registration Certificate in Queensland cannot open or manage a trust account. This responsibility is reserved for fully licensed real estate agents.",
    category: "State Licensing Requirements", keywords: ["trust account", "QLD", "Registration Certificate"], state_specific: "QLD", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How does the Property Occupations Act 2014 impact daily work in QLD?",
    answer: "This Act governs all aspects of real estate practice in QLD, including licensing, appointments (Form 6), advertising, trust accounts, and conduct. Compliance is mandatory and overseen by the Office of Fair Trading (OFT).",
    category: "State Licensing Requirements", keywords: ["Property Occupations Act", "QLD", "compliance"], state_specific: "QLD", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the regulations around body corporates in QLD?",
    answer: "Queensland has extensive legislation for community titles schemes (body corporates). Agents dealing with properties in these schemes must understand disclosure requirements, by-laws, and levy structures. A Community Management Statement (CMS) is a key document.",
    category: "State Licensing Requirements", keywords: ["body corporate", "strata", "QLD"], state_specific: "QLD", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Are there specific CPD topics required by the OFT in Queensland?",
    answer: "The Office of Fair Trading (OFT) in Queensland may specify certain topics as mandatory for annual CPD. Agents should check the OFT website each year to see the current requirements for their licence or registration category.",
    category: "State Licensing Requirements", keywords: ["CPD", "OFT", "QLD"], state_specific: "QLD", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // WA
  {
    id: generateId(), question: "What is the triennial certificate system in Western Australia?",
    answer: "In WA, real estate licences and registrations are issued for a period of three years, rather than annually. This is known as a triennial certificate. Renewal requires demonstrating completion of the required CPD points over that three-year period.",
    category: "State Licensing Requirements", keywords: ["triennial certificate", "WA", "licensing"], state_specific: "WA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How many CPD points are required over the three-year licensing period in WA?",
    answer: "A total of 10 CPD points are required for each triennial period. These points must be accrued through training on mandatory and elective topics as determined by DMIRS (Department of Mines, Industry Regulation and Safety).",
    category: "State Licensing Requirements", keywords: ["CPD", "WA", "points"], state_specific: "WA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can a sales representative in WA operate their own business?",
    answer: "No, a Registered Sales Representative in WA must be employed and supervised by a licensed real estate agent (the licensee of an agency). To operate an agency, you must obtain a Real Estate and Business Agent's Licence.",
    category: "State Licensing Requirements", keywords: ["sales representative", "WA", "independent"], state_specific: "WA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the key functions of DMIRS in relation to the WA property industry?",
    answer: "DMIRS is the main regulatory body in WA. Its functions include issuing licences and registrations, setting CPD requirements, investigating complaints, and enforcing compliance with the Real Estate and Business Agents Act 1978.",
    category: "State Licensing Requirements", keywords: ["DMIRS", "regulator", "WA"], state_specific: "WA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Are there specific contracts for sale and purchase that must be used in WA?",
    answer: "Yes, it is common practice in WA to use the Contract for Sale of Land or Strata Title by Offer and Acceptance, which is a standard form document jointly published by REIWA and the Law Society of Western Australia.",
    category: "State Licensing Requirements", keywords: ["contract", "offer and acceptance", "WA"], state_specific: "WA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // SA
  {
    id: generateId(), question: "What is Form 1 (Vendor's Statement) and its importance in SA?",
    answer: "The Form 1 is a critical disclosure document in South Australia that the vendor must provide to the purchaser. It contains important information about the property, including encumbrances, council rates, and other statutory details. An error in Form 1 can give the buyer rights to withdraw from the contract.",
    category: "State Licensing Requirements", keywords: ["Form 1", "Vendor's Statement", "SA"], state_specific: "SA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How do I become a Registered Land Agent in SA?",
    answer: "To become a Registered Land Agent (the equivalent of a full licence holder) in SA, you generally need to complete a Diploma level qualification, demonstrate relevant experience, and meet probity requirements set by Consumer and Business Services (CBS).",
    category: "State Licensing Requirements", keywords: ["Land Agent", "SA", "licence"], state_specific: "SA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the rules for trust account management in South Australia?",
    answer: "In SA, trust accounts must be audited annually by a qualified auditor. The Land Agents Act 1994 sets out strict rules for handling, banking, and disbursing trust money, which are overseen by CBS.",
    category: "State Licensing Requirements", keywords: ["trust account", "audit", "SA"], state_specific: "SA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How do I handle multiple offers on a property in South Australia?",
    answer: "In SA, agents must treat all buyers fairly and ethically. This often involves informing all interested parties that multiple offers have been received and giving them an opportunity to submit their best and final offer by a deadline.",
    category: "State Licensing Requirements", keywords: ["multiple offers", "SA", "ethics"], state_specific: "SA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can I work in both sales and property management with the initial registration in SA?",
    answer: "Yes, an initial registration as a Sales Representative or Property Manager in SA allows you to work in that specific field under supervision. To work across both, you need to ensure your registration covers both activities.",
    category: "State Licensing Requirements", keywords: ["dual role", "sales", "property management", "SA"], state_specific: "SA", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // TAS
  {
    id: generateId(), question: "What body governs real estate practice in Tasmania?",
    answer: "Real estate practice in Tasmania is regulated by the Property Agents Board. The Board is responsible for licensing, setting standards, and handling complaints against agents.",
    category: "State Licensing Requirements", keywords: ["regulator", "TAS", "Property Agents Board"], state_specific: "TAS", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What qualifications do I need to be a Property Representative in Tasmania?",
    answer: "To become a Property Representative in Tasmania, you must complete the CPP41419 Certificate IV in Real Estate Practice and meet the probity requirements of the Property Agents Board.",
    category: "State Licensing Requirements", keywords: ["Property Representative", "TAS", "qualification"], state_specific: "TAS", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the key elements of the Property Agents and Land Transactions Act 2016 (TAS)?",
    answer: "This Act is the primary legislation governing Tasmanian real estate. Key elements include licensing requirements, rules of conduct for agents, trust account regulations, and disclosure requirements for property transactions.",
    category: "State Licensing Requirements", keywords: ["legislation", "TAS", "Act"], state_specific: "TAS", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Are there specific regulations for managing short-stay/holiday properties in TAS?",
    answer: "Yes, Tasmania has specific planning rules for short-stay accommodation. Agents managing these properties need to be aware of local council regulations, land use permits, and the code of conduct for the short-term accommodation sector.",
    category: "State Licensing Requirements", keywords: ["short-stay", "holiday letting", "TAS"], state_specific: "TAS", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What is the process for renewing a property agent registration in Tasmania?",
    answer: "To renew your registration in Tasmania, you must submit an application to the Property Agents Board before it expires, pay the required fee, and provide evidence of having completed the mandatory annual Continuing Professional Development (CPD).",
    category: "State Licensing Requirements", keywords: ["renewal", "TAS", "registration"], state_specific: "TAS", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // ACT
  {
    id: generateId(), question: "How does the leasehold system in the ACT affect property sales?",
    answer: "In the ACT, most property is held under a 99-year Crown lease, not freehold title. This means buyers are purchasing the rights to the land for that period. Agents must understand how this affects contracts, land use (purpose clauses), and valuations.",
    category: "State Licensing Requirements", keywords: ["leasehold", "ACT", "Crown lease"], state_specific: "ACT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What is the role of Access Canberra in regulating real estate agents?",
    answer: "Access Canberra is the ACT Government body responsible for licensing real estate agents, investigating complaints, and ensuring compliance with the Agents Act 2003 and other relevant legislation.",
    category: "State Licensing Requirements", keywords: ["Access Canberra", "regulator", "ACT"], state_specific: "ACT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the licensing tiers in the ACT?",
    answer: "The ACT has a tiered licensing system, including Registered Salespersons (who must work under supervision) and Licensed Agents (who can operate a business). Progressing requires further experience and qualifications.",
    category: "State Licensing Requirements", keywords: ["licensing tiers", "ACT", "salesperson"], state_specific: "ACT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Can I work across the border in NSW with an ACT licence?",
    answer: "Generally, no. You need to be licensed in the state where the property is located. While there are mutual recognition provisions, an agent with only an ACT licence cannot legally sell property in NSW without obtaining a NSW licence or certificate.",
    category: "State Licensing Requirements", keywords: ["mutual recognition", "ACT", "NSW"], state_specific: "ACT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How are unit titles and owners corporations managed under ACT legislation?",
    answer: "The ACT has specific legislation, the Unit Titles (Management) Act 2011, which governs the operation of owners corporations (body corporates). Agents must be familiar with its rules on levies, meetings, and disclosure requirements.",
    category: "State Licensing Requirements", keywords: ["unit titles", "owners corporation", "ACT"], state_specific: "ACT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  // NT
  {
    id: generateId(), question: "What building codes are important for properties in cyclone-prone areas like Darwin?",
    answer: "Properties in the NT, especially Darwin, must comply with specific building codes for cyclonic conditions (the 'Deemed to Comply' standards). Agents should be aware of a property's compliance rating as it significantly impacts insurance and safety.",
    category: "State Licensing Requirements", keywords: ["cyclone code", "NT", "Darwin"], state_specific: "NT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What are the specific challenges of real estate practice in remote areas of the NT?",
    answer: "Challenges include vast travel distances, limited access to services, unique market drivers (e.g., mining or government projects), and the need for high levels of cultural awareness, particularly when dealing with Indigenous communities and land.",
    category: "State Licensing Requirements", keywords: ["remote", "NT", "challenges"], state_specific: "NT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "Are there unique considerations for properties under Indigenous land tenure in the NT?",
    answer: "Yes. A significant portion of the NT is held under various forms of Indigenous land tenure (e.g., Aboriginal Land Rights Act). Transactions involving these properties are complex and require specialist knowledge and respect for traditional ownership.",
    category: "State Licensing Requirements", keywords: ["Indigenous land", "NT", "tenure"], state_specific: "NT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "What body oversees real estate licensing in the Northern Territory?",
    answer: "The Agents Licensing Board of the Northern Territory is responsible for granting licences to real estate agents and business agents, and for inquiring into the conduct of agents.",
    category: "State Licensing Requirements", keywords: ["regulator", "NT", "Agents Licensing Board"], state_specific: "NT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  },
  {
    id: generateId(), question: "How does the market in Darwin differ from Alice Springs?",
    answer: "The Darwin market is heavily influenced by government, defence, and resource projects, with a tropical climate affecting property design. The Alice Springs market is a key service hub for Central Australia, influenced by tourism, pastoral industries, and unique outback lifestyle factors.",
    category: "State Licensing Requirements", keywords: ["market difference", "Darwin", "Alice Springs", "NT"], state_specific: "NT", provider_specific: false, priority: 3, last_updated: defaultLastUpdated
  }
];

export function getQuestionBySlug(slug: string): FAQQuestion | undefined {
  return questions.find(q => slugify(q.question) === slug);
}

export function getQuestionsByCategory(categorySlug: string): (FAQQuestion & { slug: string })[] {
  const category = allDefinedCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return questions
    .filter(q => q.category === category.name)
    .map(q => ({...q, slug: slugify(q.question)}))
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
    });
}

export function getQuestionById(questionId: string): FAQQuestion | undefined {
  return questions.find(q => q.id === questionId);
}

export function getAllQuestions(): (FAQQuestion & { slug: string })[] {
  return [...questions]
    .map(q => ({...q, slug: slugify(q.question)}))
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
    });
}
