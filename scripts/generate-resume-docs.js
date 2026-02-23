import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, WidthType, BorderStyle, VerticalAlign, UnderlineType } from 'docx';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const resumeData = {
  name: 'Joseph Penda',
  title: 'Assistant Head of Technology',
  phone: '+237655715705',
  email: 'jp.joseph.penda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joseph-penda-051a11a7/',
  location: 'Douala, Cameroon',
  profile: 'Backend & Platform Engineer with 5+ years of experience designing and maintaining complex systems in fintech and high-availability environments. Strong focus on architectural clarity, system reliability, CI/CD optimization, and engineering process improvement. Experienced in PHP and Go backend development.',
  expertise: {
    backend: 'Go (Golang), PHP, RESTful APIs, Distributed systems concepts, SQL (MySQL), MongoDB',
    architecture: 'Domain-Driven Design (DDD), CI/CD (Jenkins, GitLab CI/CD), Docker, Git flow & branching strategies, Code review standards, Testing & deployment pipelines, Environment automation',
    frontend: 'Vue.js, JavaScript, SCSS, Android (Java), Firebase'
  },
  experience: [
    {
      role: 'Software Engineer Backend',
      company: 'Maylance PLC',
      location: 'Douala, Cameroon',
      period: '02/2024 - Present',
      subtitle: 'Payment aggregator',
      highlights: [
        'Took ownership of the PRL service, resolving critical production issues and delivering performance optimizations that reduced payment latency by nearly 50% over 60+ deployments. Led the implementation of a distributed idempotency key caching system, enabling scalability improvements.',
        'Joined and later assumed ownership of the Payment Settlement Service (My Finance module) after the departure of the main developer. Successfully revitalized the module to production-readiness through optimization and documentation. The service now automates 80–90% of top-up and payout processes while significantly improving reconciliation and accounting accuracy.',
        'Core backend contributor to the SmartCash implementation, rapidly ramping up on new domains and becoming the key backend resource in Cameroon for the service ahead of production release.'
      ]
    },
    {
      role: 'Software Engineer Backend – Performance & Scalability Audit',
      company: 'Confidential Client',
      location: 'Remote',
      period: '08/2025 - 11/2025',
      subtitle: 'Messaging SaaS Platform',
      highlights: [
        'Conducted an in-depth analysis of the monolithic infrastructure.',
        'Identified critical structural risks impacting reliability, scalability, and launch readiness.',
        'Contributed to a multifaceted remediation strategy enhancing reliability, scalability vision.',
        'Led remediation of concurrency, database, and I/O bottlenecks without disrupting feature roadmap.',
        'Reduced system latency by over 90% and restored platform stability under projected production traffic.'
      ]
    },
    {
      role: 'Software Engineer Backend',
      company: 'Multi canal services',
      location: 'Douala, Cameroon',
      period: '10/2019 - 01/2024',
      subtitle: 'E-commerce & Order delivery platform',
      highlights: [
        'Led internal migration from third-party ERP (Odoo) to in-house platform (web & mobile POS system).',
        'Designed event-driven stock management integration reducing manual reconciliation.',
        'Established development standards (architecture, naming, Git workflow, review practices).',
        'Mentored junior developers through code reviews, pair programming, and feedback loops and training.',
        'Reduced production bugs by improving deployment pipeline and environment testing process.',
        'Introduced modular client-server architecture for new systems.'
      ]
    }
  ],
  education: {
    degree: 'Associate degree - Electrical engineering and industrial computing',
    school: 'University Institute of Technology',
    period: '10/2016 - 05/2018'
  }
};

// Create DOCX
const createDocx = () => {
  const sections = [
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.name,
          bold: true,
          size: 32 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.title,
          size: 24 * 2,
        })
      ],
      spacing: { after: 200 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${resumeData.phone} | ${resumeData.email} | ${resumeData.location}`,
          size: 22 * 2,
        })
      ],
      spacing: { after: 200 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'PROFILE',
          bold: true,
          size: 24 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.profile,
          size: 22 * 2,
        })
      ],
      spacing: { after: 200 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'TECHNICAL EXPERTISE',
          bold: true,
          size: 24 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Backend & Systems',
          bold: true,
          size: 22 * 2,
        })
      ],
      spacing: { after: 50 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.expertise.backend,
          size: 22 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Architecture & Engineering Practices',
          bold: true,
          size: 22 * 2,
        })
      ],
      spacing: { after: 50 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.expertise.architecture,
          size: 22 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Front-end & others',
          bold: true,
          size: 22 * 2,
        })
      ],
      spacing: { after: 50 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.expertise.frontend,
          size: 22 * 2,
        })
      ],
      spacing: { after: 200 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'PROFESSIONAL EXPERIENCE',
          bold: true,
          size: 24 * 2,
        })
      ],
      spacing: { after: 150 }
    }),
    ...resumeData.experience.flatMap(exp => [
      new Paragraph({
        children: [
          new TextRun({
            text: exp.role,
            bold: true,
            size: 22 * 2,
          })
        ],
        spacing: { after: 50 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: exp.company,
            bold: true,
            size: 22 * 2,
          }),
          new TextRun({
            text: ` | ${exp.location} | ${exp.period}`,
            size: 22 * 2,
          })
        ],
        spacing: { after: 50 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: exp.subtitle,
            italic: true,
            size: 22 * 2,
          })
        ],
        spacing: { after: 100 }
      }),
      ...exp.highlights.map(highlight =>
        new Paragraph({
          children: [
            new TextRun({
              text: highlight,
              size: 22 * 2,
            })
          ],
          spacing: { after: 100 },
          bullet: { level: 0 }
        })
      ),
      new Paragraph({
        children: [new TextRun('')],
        spacing: { after: 100 }
      })
    ]),
    new Paragraph({
      children: [
        new TextRun({
          text: 'EDUCATION',
          bold: true,
          size: 24 * 2,
        })
      ],
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.education.degree,
          bold: true,
          size: 22 * 2,
        })
      ],
      spacing: { after: 50 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.education.school,
          size: 22 * 2,
        })
      ],
      spacing: { after: 50 }
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: resumeData.education.period,
          size: 22 * 2,
        })
      ],
      spacing: { after: 200 }
    })
  ];

  const doc = new Document({
    sections: [{
      children: sections
    }]
  });

  return Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('/vercel/share/v0-project/public/Joseph_Penda_Resume.docx', buffer);
    console.log('DOCX file created successfully: Joseph_Penda_Resume.docx');
  });
};

// Create PDF using Puppeteer
const createPdf = async () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          padding: 40px;
        }
        h1 {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
          font-weight: 500;
        }
        .contact {
          font-size: 12px;
          color: #666;
          margin-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 15px;
        }
        .section-title {
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 0.5px;
          color: #000;
          margin-top: 15px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .profile-text {
          font-size: 13px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 15px;
        }
        .expertise-category {
          margin-bottom: 12px;
        }
        .expertise-title {
          font-weight: 600;
          color: #000;
          font-size: 13px;
          margin-bottom: 5px;
        }
        .expertise-content {
          color: #666;
          font-size: 13px;
          line-height: 1.6;
        }
        .exp-item {
          margin-bottom: 20px;
        }
        .exp-title {
          font-weight: 600;
          color: #000;
          font-size: 13px;
        }
        .exp-company {
          color: #0066cc;
          font-weight: 500;
          font-size: 13px;
        }
        .exp-meta {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }
        .exp-subtitle {
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .exp-list {
          list-style: none;
          margin-left: 0;
        }
        .exp-list li {
          margin-bottom: 8px;
          font-size: 13px;
          color: #666;
          padding-left: 20px;
          position: relative;
          line-height: 1.6;
        }
        .exp-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #999;
        }
        .edu-item {
          margin-bottom: 10px;
        }
        .edu-degree {
          font-weight: 600;
          color: #000;
          font-size: 13px;
        }
        .edu-school {
          color: #666;
          font-size: 13px;
        }
        .edu-period {
          color: #666;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <h1>${resumeData.name}</h1>
      <div class="subtitle">${resumeData.title}</div>
      <div class="contact">
        ${resumeData.phone} | ${resumeData.email} | <a href="${resumeData.linkedin}">${resumeData.location}</a>
      </div>

      <div class="section-title">Profile</div>
      <div class="profile-text">${resumeData.profile}</div>

      <div class="section-title">Technical Expertise</div>
      <div class="expertise-category">
        <div class="expertise-title">Backend & Systems</div>
        <div class="expertise-content">${resumeData.expertise.backend}</div>
      </div>
      <div class="expertise-category">
        <div class="expertise-title">Architecture & Engineering Practices</div>
        <div class="expertise-content">${resumeData.expertise.architecture}</div>
      </div>
      <div class="expertise-category">
        <div class="expertise-title">Front-end & others</div>
        <div class="expertise-content">${resumeData.expertise.frontend}</div>
      </div>

      <div class="section-title">Professional Experience</div>
      ${resumeData.experience.map(exp => `
        <div class="exp-item">
          <div class="exp-title">${exp.role}</div>
          <div class="exp-company">${exp.company}</div>
          <div class="exp-meta">${exp.location} | ${exp.period}</div>
          <div class="exp-subtitle">${exp.subtitle}</div>
          <ul class="exp-list">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <div class="section-title">Education</div>
      <div class="edu-item">
        <div class="edu-degree">${resumeData.education.degree}</div>
        <div class="edu-school">${resumeData.education.school}</div>
        <div class="edu-period">${resumeData.education.period}</div>
      </div>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.pdf({
    path: '/vercel/share/v0-project/public/Joseph_Penda_Resume.pdf',
    format: 'A4',
    margin: { top: '40px', right: '40px', bottom: '40px', left: '40px' }
  });
  await browser.close();
  console.log('PDF file created successfully: Joseph_Penda_Resume.pdf');
};

// Main execution
const main = async () => {
  try {
    console.log('[v0] Starting document generation...');
    await createDocx();
    await createPdf();
    console.log('[v0] All documents generated successfully!');
  } catch (error) {
    console.error('[v0] Error generating documents:', error);
    process.exit(1);
  }
};

main();
