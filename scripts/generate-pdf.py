from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
import os

# Create output directory if it doesn't exist
os.makedirs('/home/user/public', exist_ok=True)

# Create PDF
pdf_path = '/home/user/public/Joseph_Penda_Resume.pdf'
doc = SimpleDocTemplate(pdf_path, pagesize=letter,
                       rightMargin=0.5*inch, leftMargin=0.5*inch,
                       topMargin=0.5*inch, bottomMargin=0.5*inch)

# Container for the 'Flowable' objects
elements = []

# Define styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=28,
    textColor=colors.HexColor('#000000'),
    spaceAfter=2,
    fontName='Helvetica-Bold'
)

section_style = ParagraphStyle(
    'SectionTitle',
    parent=styles['Heading2'],
    fontSize=10,
    textColor=colors.HexColor('#000000'),
    spaceAfter=8,
    spaceBefore=8,
    fontName='Helvetica-Bold',
    letterSpacing=1
)

job_title_style = ParagraphStyle(
    'JobTitle',
    parent=styles['Normal'],
    fontSize=11,
    textColor=colors.HexColor('#000000'),
    fontName='Helvetica-Bold',
    spaceAfter=2
)

company_style = ParagraphStyle(
    'Company',
    parent=styles['Normal'],
    fontSize=11,
    textColor=colors.HexColor('#0066cc'),
    fontName='Helvetica',
    spaceAfter=2
)

normal_style = ParagraphStyle(
    'CustomNormal',
    parent=styles['Normal'],
    fontSize=10,
    textColor=colors.HexColor('#555555'),
    spaceAfter=8,
    leading=14
)

meta_style = ParagraphStyle(
    'Meta',
    parent=styles['Normal'],
    fontSize=9,
    textColor=colors.HexColor('#666666'),
    spaceAfter=6
)

# Header
elements.append(Paragraph("Joseph Penda", title_style))
elements.append(Paragraph("Assistant Head of Technology", ParagraphStyle('subtitle', parent=styles['Normal'], fontSize=11, textColor=colors.HexColor('#555555'), spaceAfter=6)))

# Contact Info
contact_info = "+237655715705 | jp.joseph.penda@gmail.com | linkedin.com/in/joseph-penda-051a11a7/ | Douala, Cameroon"
elements.append(Paragraph(contact_info, ParagraphStyle('contact', parent=styles['Normal'], fontSize=9, textColor=colors.HexColor('#666666'), spaceAfter=12, alignment=TA_LEFT)))

# Profile
elements.append(Paragraph("PROFILE", section_style))
profile_text = "Backend & Platform Engineer with 5+ years of experience designing and maintaining complex systems in fintech and high-availability environments. Strong focus on architectural clarity, system reliability, CI/CD optimization, and engineering process improvement. Experienced in PHP and Go backend development."
elements.append(Paragraph(profile_text, normal_style))

# Technical Expertise
elements.append(Paragraph("TECHNICAL EXPERTISE", section_style))

expertise_items = [
    ("<b>Backend & Systems:</b> Go (Golang), PHP, RESTful APIs, Distributed systems concepts, SQL (MySQL), MongoDB", normal_style),
    ("<b>Architecture & Engineering Practices:</b> Domain-Driven Design (DDD), CI/CD (Jenkins, GitLab CI/CD), Docker, Git flow & branching strategies, Code review standards, Testing & deployment pipelines, Environment automation", normal_style),
    ("<b>Front-end & others:</b> Vue.js, JavaScript, SCSS, Android (Java), Firebase", normal_style),
]

for item, style in expertise_items:
    elements.append(Paragraph(item, style))

# Professional Experience
elements.append(Paragraph("PROFESSIONAL EXPERIENCE", section_style))

# Job 1
elements.append(Paragraph("Software Engineer Backend", job_title_style))
elements.append(Paragraph("Maylance PLC | Douala, Cameroon | 02/2024 - Present", meta_style))
elements.append(Paragraph("<i>Payment aggregator</i>", ParagraphStyle('subtitle', parent=styles['Normal'], fontSize=10, textColor=colors.HexColor('#666666'), spaceAfter=6)))

job1_bullets = [
    "Took ownership of the PRL service, resolving critical production issues and delivering performance optimizations that reduced payment latency by nearly 50% over 60+ deployments. Led the implementation of a distributed idempotency key caching system, enabling scalability improvements.",
    "Joined and later assumed ownership of the Payment Settlement Service (My Finance module) after the departure of the main developer. Successfully revitalized the module to production-readiness through optimization and documentation. The service now automates 80–90% of top-up and payout processes while significantly improving reconciliation and accounting accuracy.",
    "Core backend contributor to the SmartCash implementation, rapidly ramping up on new domains and becoming the key backend resource in Cameroon for the service ahead of production release."
]

for bullet in job1_bullets:
    elements.append(Paragraph("• " + bullet, normal_style))

elements.append(Spacer(1, 0.1*inch))

# Job 2
elements.append(Paragraph("Software Engineer Backend – Performance & Scalability Audit", job_title_style))
elements.append(Paragraph("Confidential Client | Remote | 08/2025 - 11/2025", meta_style))
elements.append(Paragraph("<i>Messaging SaaS Platform</i>", ParagraphStyle('subtitle', parent=styles['Normal'], fontSize=10, textColor=colors.HexColor('#666666'), spaceAfter=6)))

job2_bullets = [
    "Conducted an in-depth analysis of the monolithic infrastructure.",
    "Identified critical structural risks impacting reliability, scalability, and launch readiness.",
    "Contributed to a multifaceted remediation strategy enhancing reliability, scalability vision.",
    "Led remediation of concurrency, database, and I/O bottlenecks without disrupting feature roadmap.",
    "Reduced system latency by over 90% and restored platform stability under projected production traffic."
]

for bullet in job2_bullets:
    elements.append(Paragraph("• " + bullet, normal_style))

elements.append(Spacer(1, 0.1*inch))

# Job 3
elements.append(Paragraph("Software Engineer Backend", job_title_style))
elements.append(Paragraph("Multi canal services | Douala, Cameroon | 10/2019 - 01/2024", meta_style))
elements.append(Paragraph("<i>E-commerce & Order delivery platform</i>", ParagraphStyle('subtitle', parent=styles['Normal'], fontSize=10, textColor=colors.HexColor('#666666'), spaceAfter=6)))

job3_bullets = [
    "Led internal migration from third-party ERP (Odoo) to in-house platform (web & mobile POS system).",
    "Designed event-driven stock management integration reducing manual reconciliation.",
    "Established development standards (architecture, naming, Git workflow, review practices).",
    "Mentored junior developers through code reviews, pair programming, and feedback loops and training.",
    "Reduced production bugs by improving deployment pipeline and environment testing process.",
    "Introduced modular client-server architecture for new systems."
]

for bullet in job3_bullets:
    elements.append(Paragraph("• " + bullet, normal_style))

# Education
elements.append(Paragraph("EDUCATION", section_style))
elements.append(Paragraph("Associate degree - Electrical engineering and industrial computing", job_title_style))
elements.append(Paragraph("University Institute of Technology | 10/2016 - 05/2018", meta_style))

# Build PDF
doc.build(elements)

print("[v0] PDF generated successfully: " + pdf_path)
