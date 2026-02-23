import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, WidthType, BorderStyle, VerticalAlign } from 'docx';
import fs from 'fs';
import path from 'path';

const resumeData = {
  name: 'Joseph Penda',
  title: 'Assistant Head of Technology',
  phone: '+237655715705',
  email: 'jp.joseph.penda@gmail.com',
  linkedin: 'linkedin.com/in/joseph-penda-051a11a7/',
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
        'Took ownership of the PRL service, resolving critical production issues and delivering performance optimizations that reduced payment latency by nearly 50% over 60+ deployments.',
        'Joined and later assumed ownership of the Payment Settlement Service (My Finance module) after the departure of the main developer. Successfully revitalized the module to production-readiness through optimization and documentation.',
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
        'Contributed to a multifaceted remediation strategy enhancing reliability and scalability vision.',
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
        'Reduced production bugs by improving deployment pipeline and environment testing process.'
      ]
    }
  ],
  education: {
    degree: 'Associate degree - Electrical engineering and industrial computing',
    school: 'University Institute of Technology',
    period: '10/2016 - 05/2018'
  }
};

function createDocx() {
  const sections = [];

  // Header
  sections.push(
    new Paragraph({
      text: resumeData.name,
      style: 'Heading1',
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: resumeData.title,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `${resumeData.phone} | ${resumeData.email} | ${resumeData.linkedin}`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.location,
      spacing: { after: 300 }
    })
  );

  // Profile
  sections.push(
    new Paragraph({
      text: 'PROFILE',
      style: 'Heading2',
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: resumeData.profile,
      spacing: { after: 300 }
    })
  );

  // Technical Expertise
  sections.push(
    new Paragraph({
      text: 'TECHNICAL EXPERTISE',
      style: 'Heading2',
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: 'Backend & Systems',
      style: 'Heading3',
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.expertise.backend,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: 'Architecture & Engineering Practices',
      style: 'Heading3',
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.expertise.architecture,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: 'Front-end & others',
      style: 'Heading3',
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.expertise.frontend,
      spacing: { after: 300 }
    })
  );

  // Professional Experience
  sections.push(
    new Paragraph({
      text: 'PROFESSIONAL EXPERIENCE',
      style: 'Heading2',
      spacing: { after: 100 }
    })
  );

  resumeData.experience.forEach((exp, index) => {
    sections.push(
      new Paragraph({
        text: exp.role,
        bold: true,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `${exp.company} | ${exp.location} | ${exp.period}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: exp.subtitle,
        italics: true,
        spacing: { after: 100 }
      })
    );

    exp.highlights.forEach((highlight) => {
      sections.push(
        new Paragraph({
          text: highlight,
          spacing: { after: 75 }
        })
      );
    });

    if (index < resumeData.experience.length - 1) {
      sections.push(new Paragraph({ text: '', spacing: { after: 100 } }));
    }
  });

  // Education
  sections.push(
    new Paragraph({
      text: 'EDUCATION',
      style: 'Heading2',
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: resumeData.education.degree,
      bold: true,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.education.school,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: resumeData.education.period,
      spacing: { after: 100 }
    })
  );

  const doc = new Document({
    sections: [
      {
        children: sections
      }
    ]
  });

  return Packer.toBuffer(doc);
}

function createHtmlForPdf() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Joseph Penda - Resume</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
        }
        .header { margin-bottom: 20px; }
        .header h1 { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .header .title { font-size: 13px; margin-bottom: 10px; color: #666; }
        .header .contact { font-size: 12px; color: #666; margin-bottom: 5px; }
        .header .location { font-size: 12px; color: #666; margin-bottom: 20px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; }
        .profile-text { font-size: 13px; line-height: 1.7; color: #666; margin-bottom: 20px; }
        .expertise-category { margin-bottom: 12px; }
        .expertise-title { font-weight: 600; color: #000; font-size: 13px; margin-bottom: 5px; }
        .expertise-content { font-size: 13px; color: #666; line-height: 1.6; }
        .experience-item { margin-bottom: 20px; }
        .exp-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .exp-role { font-weight: 600; color: #000; font-size: 13px; }
        .exp-company { color: #0066cc; font-size: 13px; }
        .exp-meta { font-size: 12px; color: #666; margin-bottom: 10px; }
        .exp-subtitle { font-size: 13px; color: #666; margin-bottom: 8px; font-weight: 500; }
        .exp-list { list-style: none; padding-left: 20px; }
        .exp-list li { font-size: 13px; color: #666; margin-bottom: 8px; line-height: 1.6; }
        .exp-list li:before { content: "• "; margin-right: 8px; }
        .education-item { margin-bottom: 15px; }
        .edu-degree { font-weight: 600; color: #000; font-size: 13px; margin-bottom: 5px; }
        .edu-school { font-size: 13px; color: #666; margin-bottom: 5px; }
        .edu-period { font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${resumeData.name}</h1>
        <div class="title">${resumeData.title}</div>
        <div class="contact">${resumeData.phone} | ${resumeData.email} | ${resumeData.linkedin}</div>
        <div class="location">${resumeData.location}</div>
      </div>

      <div class="section">
        <div class="section-title">Profile</div>
        <div class="profile-text">${resumeData.profile}</div>
      </div>

      <div class="section">
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
      </div>

      <div class="section">
        <div class="section-title">Professional Experience</div>
        ${resumeData.experience.map(exp => `
          <div class="experience-item">
            <div class="exp-role">${exp.role}</div>
            <div class="exp-meta">${exp.company} | ${exp.location} | ${exp.period}</div>
            <div class="exp-subtitle">${exp.subtitle}</div>
            <ul class="exp-list">
              ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        <div class="education-item">
          <div class="edu-degree">${resumeData.education.degree}</div>
          <div class="edu-school">${resumeData.education.school}</div>
          <div class="edu-period">${resumeData.education.period}</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

async function main() {
  try {
    console.log('[v0] Starting document generation...');
    
    // Generate DOCX
    console.log('[v0] Generating DOCX...');
    const docxBuffer = await createDocx();
    const docxPath = path.join(process.cwd(), 'public', 'Joseph_Penda_Resume.docx');
    fs.mkdirSync(path.dirname(docxPath), { recursive: true });
    fs.writeFileSync(docxPath, docxBuffer);
    console.log(`[v0] DOCX created: ${docxPath}`);

    // Generate PDF using html2pdf approach
    console.log('[v0] Generating PDF...');
    const html = createHtmlForPdf();
    const pdfPath = path.join(process.cwd(), 'public', 'Joseph_Penda_Resume.pdf');
    
    // Use a simple approach - create PDF from HTML using a library
    try {
      const htmlPdf = await import('html2pdf');
      const pdf = await htmlPdf.default(html, {
        margin: 10,
        filename: pdfPath,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      });
      console.log(`[v0] PDF created: ${pdfPath}`);
    } catch (err) {
      console.log('[v0] html2pdf not available, trying alternative method...');
      // Fallback: Save HTML as is and let user convert manually
      const htmlPath = path.join(process.cwd(), 'public', 'Joseph_Penda_Resume.html');
      fs.writeFileSync(htmlPath, html);
      console.log(`[v0] HTML version created instead: ${htmlPath}`);
      console.log('[v0] You can convert this HTML to PDF using your browser (Print > Save as PDF)');
    }

    console.log('[v0] Document generation completed!');
  } catch (error) {
    console.error('[v0] Error:', error.message);
    process.exit(1);
  }
}

main();
