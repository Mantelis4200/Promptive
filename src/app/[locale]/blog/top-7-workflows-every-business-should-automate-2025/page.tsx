'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const parseMarkdown = (text: string): (string | JSX.Element)[] | string => {
  const parts: (string | JSX.Element)[] = [];
  const boldRegex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the bold part
    parts.push(
      <strong key={match.index} className="font-bold">
        {match[1]}
      </strong>
    );
    
    lastIndex = boldRegex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

export default function Top7WorkflowsEveryBusinessShouldAutomate2025Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isLithuanian = locale === 'lt';

  const post = {
    id: 2,
    title: "Top 7 Workflows Every Business Should Automate in 2025",
    excerpt: "Stop handling repetitive tasks manually. Discover the 7 essential workflows every business should automate to save time, reduce errors, and boost productivity in 2025.",
    category: "Workflow Automation",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/images/blog/top-7-workflows/top-7-workflows-hero.webp",
    slug: "top-7-workflows-every-business-should-automate-2025",
    author: "Augustas Vinikas",
    authorRole: "CEO & Founder",
    authorImage: "/images/photo.webp",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isLithuanian ? "Top 7 Svarbiausi Darbo Procesai, Kuriuos Kiekviena Įmonė Turėtų Automatizuoti 2025 m." : "Top 7 Workflows Every Business Should Automate in 2025",
    "description": isLithuanian 
      ? "Nebėra prasmės atlikti pasikartojančias užduotis ranka. Susipažinkite su 7 svarbiausiais darbo procesais, kuriuos kiekviena įmonė turėtų automatizuoti, kad sutaupytų laiko, sumažintų klaidų skaičių ir padidintų efektyvumą 2025 m."
      : "Stop handling repetitive tasks manually. Discover the 7 essential workflows every business should automate to save time, reduce errors, and boost productivity in 2025.",
    "image": "https://promptive.agency/images/blog/top-7-workflows/top-7-workflows-hero.webp",
    "author": {
      "@type": "Organization",
      "name": "Promptive Agency",
      "url": "https://promptive.agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Promptive Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://promptive.agency/images/logo.svg"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog/top-7-workflows-every-business-should-automate-2025`
    },
    "articleSection": isLithuanian ? "Darbo eigų automatizavimas" : "Workflow Automation",
    "keywords": isLithuanian 
      ? ["darbo eigų automatizavimas", "verslo automatizavimas", "DI automatizavimas", "workflow automation", "n8n", "zapier", "produktyvumas", "verslo efektyvumas", "automatizavimo įrankiai", "procesų optimizavimas", "darbo eigų valdymas", "verslo procesai", "klientų supažindinimas", "potencialių klientų rinkimas", "sąskaitų išrašymas", "susitikimų planavimas", "HR automatizavimas", "socialinių tinklų automatizavimas", "klientų palaikymas"]
      : ["workflow automation", "business automation", "n8n", "zapier", "productivity", "business efficiency", "automation tools", "process optimization", "workflow management", "business processes", "customer onboarding", "lead capture", "invoicing automation", "appointment scheduling", "HR automation", "social media automation", "customer support"],
    "wordCount": 2400,
    "timeRequired": "PT8M"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": isLithuanian ? "Kokie pagrindiniai verslo procesai turėtų būti automatizuoti pirmiausia?" : "What are the essential business processes that should be automated first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isLithuanian 
            ? "Pirmiausia automatizuokite klientų supažindinimo procesus, potencialių klientų surinkimą ir tolesnius veiksmus, sąskaitų išrašymą, susitikimų planavimą, HR procesus, socialinių tinklų rinkodarą ir klientų palaikymo bilietus. Šie procesai dažniausiai eikvoja daugiausiai laiko ir turi didžiausią ROI potencialą."
            : "Start by automating customer onboarding processes, lead capture and follow-up, invoicing and payments, appointment scheduling, HR processes, social media marketing, and customer support tickets. These processes typically waste the most time and have the highest ROI potential."
        }
      },
      {
        "@type": "Question", 
        "name": isLithuanian ? "Kokie įrankiai geriausi darbo eigų automatizavimui?" : "What are the best tools for workflow automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isLithuanian
            ? "Populiariausi automatizavimo įrankiai: n8n ir Zapier bendram automatizavimui, HubSpot ir Pipedrive CRM procesams, Calendly susitikimų planavimui, QuickBooks sąskaitoms, BambooHR personalui, Buffer socialiniams tinklams ir Zendesk klientų palaikymui. Pasirinkimas priklauso nuo jūsų specifinių poreikių ir biudžeto."
            : "Popular automation tools include n8n and Zapier for general automation, HubSpot and Pipedrive for CRM processes, Calendly for scheduling, QuickBooks for invoicing, BambooHR for HR, Buffer for social media, and Zendesk for customer support. The choice depends on your specific needs and budget."
        }
      },
      {
        "@type": "Question",
        "name": isLithuanian ? "Kiek laiko galima sutaupyti su darbo eigų automatizavimu?" : "How much time can be saved with workflow automation?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": isLithuanian
            ? "Net vienas gerai sukurtas automatizavimas gali sutaupyti 40+ valandų per mėnesį. Daugelis verslo procesų, kurie rankiniu būdu užima valandas, gali būti automatizuoti ir atlikti per minutes, dažnai sumažinant klaidas 85% ir pagerinu klientų patirtį."
            : "Even one well-designed automation can save 40+ hours per month. Many business processes that take hours manually can be automated to run in minutes, often reducing errors by 85% and improving customer experience."
        }
      },
      {
        "@type": "Question",
        "name": isLithuanian ? "Kiek kainuoja verslo procesų automatizavimas?" : "How much does business process automation cost?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isLithuanian
            ? "Automatizavimo kainos labai skiriasi priklausomai nuo sudėtingumo. Paprastos integracijos su Zapier ar n8n gali kainuoti 20-100€ per mėnesį, tuo tarpu kompleksiniai sprendimai su individualia plėtra gali kainuoti 1000-5000€. Dauguma automatizavimų atsipirksta per 2-4 mėnesius."
            : "Automation costs vary widely based on complexity. Simple integrations with Zapier or n8n can cost $20-100 per month, while complex solutions with custom development can range from $1000-5000. Most automations pay for themselves within 2-4 months."
        }
      },
      {
        "@type": "Question", 
        "name": isLithuanian ? "Kaip pradėti automatizuoti verslo procesus?" : "How do I get started with business process automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": isLithuanian
            ? "Pradėkite identifikuodami 1-2 procesus, kurie labiausiai eikvoja laiką jūsų versle. Naudokite iš anksto sukurtus šablonus Zapier ar Make platformose. Matuokite rezultatus ir palaipsniui pridėkite daugiau automatizavimų. Svarbiausia nepersistengti - pradėkite nedideliais žingsniais."
            : "Start by identifying 1-2 processes that waste the most time in your business. Use pre-built templates on platforms like Zapier or Make. Measure results and gradually add more automations. The key is not to overwhelm yourself - start small and scale up."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isLithuanian ? "Pradinis" : "Home",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isLithuanian ? "Blogas" : "Blog", 
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": isLithuanian ? "Top 7 Svarbiausi Darbo Procesai" : "Top 7 Workflows Every Business Should Automate",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog/top-7-workflows-every-business-should-automate-2025`
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = isLithuanian ? {
    title: "Top 7 Svarbiausi Darbo Procesai, Kuriuos Kiekviena Įmonė Turėtų Automatizuoti 2025 m.",
    excerpt: "Nebėra prasmės atlikti pasikartojančias užduotis ranka. Susipažinkite su 7 svarbiausiais darbo procesais, kuriuos kiekviena įmonė turėtų automatizuoti, kad sutaupytų laiko, sumažintų klaidų skaičių ir padidintų efektyvumą 2025 m.",
    category: "Darbo eigų automatizavimas",
    readTime: "8 min skaitymo",
    backToBlog: "← Atgal į blogą",
    intro: {
      p1: "Jei 2025 m. jūsų įmonė vis dar rankiniu būdu atlieka pasikartojančias užduotis, jūs atsiliekate.",
      p2: "Dirbtinis intelektas ir darbo srautų automatizavimas tapo nebe „maloniu priedu“, o „būtinybe“, nes mažos ir vidutinės įmonės susiduria su mažesniais biudžetais, mažesnėmis komandomis ir didesniais klientų lūkesčiais.",
      p3: "Gera naujiena? Norint pasinaudoti automatizavimo privalumais, nebūtina būti „ITyčniku“. Tokios priemonės kaip n8n, Zapier, Make ir HubSpot leidžia lengviau nei bet kada anksčiau sujungti programas, pašalinti pasikartojančias užduotis ir suteikti komandai laisvę sutelkti dėmesį į augimą.",
      p4: "Šiame straipsnyje aptarsime 7 praktinius darbo eigų automatizavimo pavyzdžius, kuriuos gali įdiegti bet kuri įmonė – pradedant nuo mažų, bet didelį poveikį turinčių veiksmų."
    },
    workflows: {
      1: {
        title: "1. Klientų įtraukimo automatizavimas",
        description: "Pirmasis įspūdis yra svarbus. Nepatogus įtraukimo procesas gali nuvilti naujus klientus, o sklandus procesas iš karto sukuria pasitikėjimą.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Išsiųskite sveikinimo laišką iš karto po registracijos ar pirkimo.",
          "Pateikite sąskaitos nustatymo instrukcijas ar produkto naudojimo pamokėles.",
          "Priskirkite naujam klientui specialų vadybininką."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "CRM sistemos kaip **HubSpot**, **Pipedrive**",
          "Automatizavimo platformos kaip **Zapier** ar **n8n**"
        ],
        result: "👉 Rezultatas: klientai jau nuo pirmos dienos jaučiasi palankiai sutikti, o jūsų komanda nepraleidžia valandų siųsdama pasikartojančius „sveikinimo“ laiškus."
      },
      2: {
        title: "2. Potencialių klientų surinkimas ir tolesnis bendravimas",
        description: "Rankinis potencialių klientų surinkimas = prarastos galimybės.  Automatizavimas užtikrina, kad kiekvienam potencialiam klientui būtų skiriamas dėmesys.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Surinkite potencialius klientus per svetainės pokalbių robotus, formas ar nukreipimo puslapius.",
          "Automatiškai siųskite asmeninius intro laiškus.",
          "Paskirkite potencialius klientus tinkamiems pardavimo vadybininkams pagal teritoriją ar specfinę šaką."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "Pokalbių robotai (**Intercom**, **Drift**, individualūs DI Promptive robotai)",
          "CRM integracijos su **Make** ar **Zapier**"
        ],
        result: "👉 Rezultatas: nė vienas potencialus klientas nebus praleistas, o jūsų pardavimo komanda daugiau laiko skirs sandorių sudarymui, o ne skaičiuoklių tvarkymui."
      },
      3: {
        title: "3. Sąskaitų išrašymas ir mokėjimai",
        description: "Grynųjų pinigų srautas yra svarbiausias dalykas, o niekas jo nesulėtina taip, kaip rankinis sąskaitų išrašymas.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Automatiškai generuoti sąskaitas po pardavimo ar projekto etapo.",
          "Sinchronizuoti mokėjimus su apskaitos programine įranga.",
          "Siųsti mandagius priminimus apie pradelstas sąskaitas."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "**QuickBooks**, **Xero**, **FreshBooks**, Rivile",
          "Mokėjimų integracijos su **Stripe** ar **Paysera**"
        ],
        result: "👉 Rezultatas: greitesni mokėjimai, mažiau klaidų ir buhalterės, kurios pagaliau gali atsikvėpti."
      },
      4: {
        title: "4. Susitikimų planavimas",
        description: "Vis dar keičiatės el. laiškais, kad suorganizuotumėte susitikimus? Tai laiko švaistymas.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Leiskite klientams pasirinkti laisvas vietas tiesiai iš jūsų kalendoriaus.",
          "Automatiškai siųskite priminimus, kad sumažintumėte neatvykimų skaičių.",
          "Sinchronizuokite susitikimus su CRM, kad galėtumėte stebėti klientų kontaktinius taškus."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "**Calendly**, **Google Calendar**, **Microsoft Outlook**",
          "CRM integracijos pardavimų stebėjimui"
        ],
        result: "👉 Rezultatas: Sklandus planavimas tiek jums, tiek jūsų klientams, sutaupant valandas kiekvieną savaitę."
      },
      5: {
        title: "5. HR ir darbuotojų įdarbinimas",
        description: "Naujų talentų pritraukimas neturėtų reikšti paskendimo popieriniuose dokumentuose.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Siųskite skaitmenines sutartis ir rinkite elektroninius parašus.",
          "Sukurkite darbuotojų paskyras (el. paštas, projektų įrankiai ir t.t).",
          "Pateikti pirmosios savaitės užduočių sąrašą."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "**BambooHR**, **Gusto**, **Deel**",
          "Užduočių automatizavimas su **Zapier** ar **n8n**"
        ],
        result: "👉 Rezultatas: Nauji darbuotojai jau nuo pirmos dienos jaučiasi palaikomi, o žmogiškųjų išteklių skyrius gali sutelkti dėmesį į žmones, o ne popierinius dokumentus."
      },
      6: {
        title: "6. Socialinės medijos ir rinkodaros automatizavimas",
        description: "Nuoseklumas yra svarbiausias rinkodaros aspektas, tačiau be automatizavimo tai neįmanoma.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Planuoti ir skelbti įrašus keliose platformose.",
          "Siųsti el. laiškų sekas, kad ugdytumėte potencialius klientus.",
          "Kampanijų paleidimas pagal klientų elgesį (pvz., krepšelio palikimas)."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "**Buffer**, **Hootsuite**, **Mailchimp**, **Klaviyo**",
          "DI turinio darbo eigos su **n8n** ar **Make**"
        ],
        result: "👉 Rezultatas: stipresnis prekės ženklo matomumas ir rinkodaros kampanijos, kurios vyksta, kol jūs miegate."
      },
      7: {
        title: "7. Klientų aptarnavimo užklausos",
        description: "Greita pagalba išlaiko klientų lojalumą, bet rankinis skirstymas viską sulėtina.",
        whatToAutomate: "Ką automatizuoti:",
        items: [
          "Automatiškai nukreipti užklausas į tinkamą skyrių.",
          "Nedelsiant perduoti skubius atvejus (pavyzdžiui, sąskaitų išrašymo klausimus).",
          "Naudoti pokalbių robotus, kad būtų atsakyta į dažniausiai užduodamus klausimus, kol nereikia žmogaus pagalbos."
        ],
        toolsToUse: "Naudotini įrankiai:",
        tools: [
          "Pagalbos platformos kaip **Zendesk**, **Freshdesk**",
          "Su „Slack“ arba el. paštu integruoti AI pokalbių robotai"
        ],
        result: "👉 Rezultatas: greitesni sprendimai, laimingesni klientai ir pagalbos komanda, kuri gali atlikti daugiau darbo su mažesniu stresu."
      }
    },
    howToStart: {
      title: "Kaip pradėti automatizavimą be pernelyg didelio krūvio",
      description: "Didžiausia įmonių daroma klaida? Bandymas automatizuoti viską iš karto.",
      instead: "Vietoj to:",
      steps: [
        "Pasirinkite vieną ar du darbo srautus, kurie atima daugiausia laiko.",
        "Pradėkite nuo mažų dalykų, naudodami iš anksto paruoštus automatizavimo šablonus (Zapier, Make).",
        "Įvertinkite investicijų grąžą – stebėkite sutaupytą laiką, sumažėjusį klaidų skaičių arba greitesnius mokėjimus."
      ],
      savings: "Net viena gerai suprojektuota automatizacija gali sutaupyti daugiau nei 40 valandų per mėnesį, todėl ji atsipirks beveik akimirksniu."
    },
    cta: {
      title: "Pasirengę automatizuoti 2025 m.?",
      description: "Darbo eigos automatizavimas nėra skirtas žmonėms pakeisti – jo tikslas yra suteikti jūsų komandai daugiau laiko sutelkti dėmesį į augimą, strategiją ir klientus.",
      question: "👉  Norite sužinoti, kokios automatizacijos sutaupytų jūsų įmonei daugiausia laiko?",
      button: "Rezervuoti nemokamą konsultaciją",
      finalNote: "Mes analizuosime jūsų dabartinius procesus ir sudarysime darbo eigos planą, kuris užtikrins didžiausią ROI jūsų įmonei – visiškai nemokamai ir be jokių įsipareigojimų.",
      stats: {
        hours: "40+ valandų",
        hoursDesc: "sutaupoma per mėnesį",
        errorReduction: "85%",
        errorDesc: "klaidų sumažėjimas",
        implementation: "2-4 savaitės",
        implementationDesc: "įdiegimo laikas"
      }
    }
  } : {
    title: "Top 7 Workflows Every Business Should Automate in 2025",
    excerpt: "Stop handling repetitive tasks manually. Discover the 7 essential workflows every business should automate to save time, reduce errors, and boost productivity in 2025.",
    category: "Workflow Automation",
    readTime: "8 min read",
    backToBlog: "← Back to Blog",
    intro: {
      p1: "If your business is still handling repetitive tasks manually in 2025, you're falling behind.",
      p2: "AI and workflow automation have moved from \"nice to have\" to \"must have\" as small and medium businesses face tighter budgets, leaner teams, and higher customer expectations.",
      p3: "The good news? You don't need to be a technical wizard to take advantage of automation. Tools like **n8n**, **Zapier**, **Make**, and **HubSpot** make it easier than ever to connect apps, eliminate repetitive tasks, and free your team to focus on growth.",
      p4: "In this article, we'll walk through 7 practical workflow automation examples that any business can set up — starting small but delivering a big impact."
    },
    workflows: {
      1: {
        title: "1. Customer Onboarding Automation",
        description: "First impressions matter. A clunky onboarding process can frustrate new customers, while a smooth one builds trust right away.",
        whatToAutomate: "What to Automate:",
        items: [
          "Send a welcome email immediately after sign-up or purchase.",
          "Provide account setup instructions or product tutorials.",
          "Assign the new customer to a dedicated account manager."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "CRM systems like **HubSpot**, **Pipedrive**",
          "Automation platforms like **Zapier** or **n8n**"
        ],
        result: "👉 Result: Customers feel guided from day one, and your team doesn't spend hours sending repetitive \"welcome\" emails."
      },
      2: {
        title: "2. Lead Capture & Follow-Up",
        description: "Manual lead collection = lost opportunities. Automation ensures every lead gets attention.",
        whatToAutomate: "What to Automate:",
        items: [
          "Capture leads via website chatbots, forms, or landing pages.",
          "Auto-send a personalized introduction email.",
          "Assign leads to the right sales rep based on territory or industry."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "Chatbots (**Intercom**, **Drift**, custom AI bots)",
          "CRM integrations with **Make** or **Zapier**"
        ],
        result: "👉 Result: No lead slips through the cracks, and your sales team spends more time closing deals instead of chasing spreadsheets."
      },
      3: {
        title: "3. Invoicing & Payments",
        description: "Cash flow is king — and nothing slows it down like manual invoicing.",
        whatToAutomate: "What to Automate:",
        items: [
          "Generate invoices automatically after a sale or project milestone.",
          "Sync payments with accounting software.",
          "Send polite reminders for overdue invoices."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "**QuickBooks**, **Xero**, **FreshBooks**",
          "Payment integrations with **Stripe** or **PayPal**"
        ],
        result: "👉 Result: Faster payments, fewer errors, and a finance team that can finally breathe."
      },
      4: {
        title: "4. Appointment Scheduling",
        description: "Still trading emails back and forth to book meetings? That's wasted time.",
        whatToAutomate: "What to Automate:",
        items: [
          "Allow customers to pick available slots directly from your calendar.",
          "Auto-send reminders to reduce no-shows.",
          "Sync appointments with CRM to track customer touchpoints."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "**Calendly**, **Google Calendar**, **Microsoft Outlook**",
          "CRM integrations for sales tracking"
        ],
        result: "👉 Result: Seamless scheduling for both you and your customers, saving hours each week."
      },
      5: {
        title: "5. HR & Employee Onboarding",
        description: "Bringing in new talent shouldn't mean drowning in paperwork.",
        whatToAutomate: "What to Automate:",
        items: [
          "Send digital contracts and collect e-signatures.",
          "Set up employee accounts (email, project tools, payroll).",
          "Deliver a first-week checklist of tasks and resources."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "**BambooHR**, **Gusto**, **Deel**",
          "Task automation with **Zapier** or **n8n**"
        ],
        result: "👉 Result: New hires feel supported from day one, and HR can focus on people, not paperwork."
      },
      6: {
        title: "6. Social Media & Marketing Automation",
        description: "Consistency is key in marketing — but it's impossible without automation.",
        whatToAutomate: "What to Automate:",
        items: [
          "Schedule and publish posts across multiple platforms.",
          "Launch email sequences to nurture leads.",
          "Trigger campaigns based on customer behavior (e.g., cart abandonment)."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "**Buffer**, **Hootsuite**, **Mailchimp**, **Klaviyo**",
          "AI content workflows with **n8n** or **Make**"
        ],
        result: "👉 Result: A stronger brand presence and marketing campaigns that run while you sleep."
      },
      7: {
        title: "7. Customer Support Tickets",
        description: "Fast support keeps customers loyal — but manual triage slows everything down.",
        whatToAutomate: "What to Automate:",
        items: [
          "Route tickets to the right department automatically.",
          "Escalate urgent cases (like billing issues) instantly.",
          "Use chatbots to answer FAQs before a human agent is needed."
        ],
        toolsToUse: "Tools to Use:",
        tools: [
          "Helpdesk platforms like **Zendesk**, **Freshdesk**",
          "AI chatbots integrated with **Slack** or email"
        ],
        result: "👉 Result: Quicker resolutions, happier customers, and a support team that can handle more with less stress."
      }
    },
    howToStart: {
      title: "How to Start Automating Without Overwhelm",
      description: "The biggest mistake businesses make? Trying to automate everything at once.",
      instead: "Instead:",
      steps: [
        "Pick one or two workflows that drain the most time.",
        "Start small with pre-built automation templates (Zapier, Make).",
        "Measure ROI — track time saved, errors reduced, or faster payments."
      ],
      savings: "Even one well-designed automation can save 40+ hours per month, paying for itself almost instantly."
    },
    cta: {
      title: "Ready to Automate in 2025?",
      description: "Workflow automation isn't about replacing people — it's about giving your team more time to focus on growth, strategy, and customers.",
      question: "👉 Want to see which automations would save your business the most time?",
      button: "Book Free Consultation",
      finalNote: "We'll analyze your current processes and map out the workflows that deliver the highest ROI for your business — completely free, no obligations.",
      stats: {
        hours: "40+ hours",
        hoursDesc: "saved per month",
        errorReduction: "85%",
        errorDesc: "error reduction",
        implementation: "2-4 weeks",
        implementationDesc: "implementation time"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Header />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Back to Blog */}
            <motion.a
              href={`${isLithuanian ? '/lt' : ''}/blog`}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.backToBlog}
            </motion.a>

            {/* Category Badge */}
            <motion.div
              className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.category}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {content.excerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div>{post.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <time dateTime={post.date}>January 15, 2025</time>
                <span>•</span>
                <span>{content.readTime}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-[2/1] rounded-2xl shadow-2xl overflow-hidden"
          >
            <Image
              src="/images/blog/top-7-workflows/top-7-workflows-hero.webp"
              alt="Top 7 Workflows Every Business Should Automate in 2025"
              fill
              className="object-cover"
              priority
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Article Content */}
          <article className="lg:col-span-4">
            <div className="prose prose-xl max-w-none">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  {parseMarkdown(content.intro.p1)}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {parseMarkdown(content.intro.p2)}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {parseMarkdown(content.intro.p3)}
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  {parseMarkdown(content.intro.p4)}
                </p>
              </motion.div>

              {/* Workflow 1 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 1 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/1- Customer onboarding automation.webp"
                    alt="Customer onboarding automation workflow showing welcome emails, account setup, and assignment to account managers"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[1].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[1].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[1].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[1].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[1].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[1].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[1].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 2 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 2 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/2 - Lead Capture & Follow-Up.webp"
                    alt="Lead capture and follow-up automation showing chatbot lead collection, personalized emails, and sales rep assignment"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[2].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[2].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[2].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[2].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[2].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[2].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[2].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 3 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 3 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/3 - Invoicing & Payments.webp"
                    alt="Automated invoicing and payments workflow showing invoice generation, payment syncing, and overdue reminders"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[3].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[3].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[3].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[3].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[3].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[3].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[3].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 4 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 4 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/4 -  Appointment Scheduling.webp"
                    alt="Appointment scheduling automation showing calendar availability, automatic reminders, and CRM synchronization"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[4].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[4].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[4].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[4].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[4].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[4].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[4].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 5 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 5 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/5 -  HR & Employee Onboarding.webp"
                    alt="HR and employee onboarding automation showing digital contracts, account setup, and task checklists"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[5].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[5].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[5].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[5].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[5].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[5].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[5].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 6 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 6 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/6 -  Social Media & Marketing Automation.webp"
                    alt="Social media and marketing automation showing scheduled posts, email sequences, and behavioral triggers"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[6].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[6].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[6].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[6].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[6].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[6].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[6].result)}
                  </p>
                </div>
              </motion.section>

              {/* Workflow 7 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Workflow 7 Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <Image
                    src="/images/blog/top-7-workflows/7 -  Customer Support Tickets.webp"
                    alt="Customer support ticket automation showing automatic routing, urgent case escalation, and chatbot FAQ handling"
                    width={400}
                    height={200}
                    className="w-1/2 mx-auto rounded-xl shadow-lg"
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.workflows[7].title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.workflows[7].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[7].whatToAutomate}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[7].items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.workflows[7].toolsToUse}</h3>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.workflows[7].tools.map((tool, index) => (
                    <li key={index}>• {parseMarkdown(tool)}</li>
                  ))}
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-lg text-green-700">
                    {parseMarkdown(content.workflows[7].result)}
                  </p>
                </div>
              </motion.section>

              {/* How to Start Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.howToStart.title}</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {content.howToStart.description}
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-4">{content.howToStart.instead}</p>
                <ul className="text-lg leading-relaxed text-gray-700 mb-6 space-y-2">
                  {content.howToStart.steps.map((step, index) => (
                    <li key={index}>• {step}</li>
                  ))}
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <p className="text-xl font-semibold text-blue-900 mb-2">
                    {content.howToStart.savings}
                  </p>
                </div>
              </motion.section>

              {/* Enhanced CTA Section */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-16 relative overflow-hidden"
              >
                {/* Background with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 100%)",
                        "linear-gradient(45deg, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.2) 100%)",
                        "linear-gradient(45deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 100%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-12 right-12 w-8 h-8 bg-white/10 rounded-full"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-12 w-6 h-6 bg-white/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />

                {/* Main content */}
                <div className="relative z-10 p-12 text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      {content.cta.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                      {content.cta.description}
                    </p>
                  </motion.div>

                  {/* Stats row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 mb-10"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <motion.div
                        className="text-3xl font-bold text-yellow-300 mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {content.cta.stats.hours}
                      </motion.div>
                      <div className="text-blue-100">{content.cta.stats.hoursDesc}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <motion.div
                        className="text-3xl font-bold text-green-300 mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        {content.cta.stats.errorReduction}
                      </motion.div>
                      <div className="text-blue-100">{content.cta.stats.errorDesc}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <motion.div
                        className="text-3xl font-bold text-blue-300 mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        {content.cta.stats.implementation}
                      </motion.div>
                      <div className="text-blue-100">{content.cta.stats.implementationDesc}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-6 items-center justify-center"
                  >
                    <p className="text-xl font-semibold text-white">
                      {content.cta.question}
                    </p>
                    <motion.a
                      href={`${isLithuanian ? '/lt' : ''}/contact`}
                      className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{content.cta.button}</span>
                      <motion.svg 
                        className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.a>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg text-blue-100 mt-6 max-w-3xl mx-auto"
                  >
                    {content.cta.finalNote}
                  </motion.p>
                </div>
              </motion.section>

            </div>
          </article>

          {/* Sidebar - Empty for now */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Sidebar content removed */}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}