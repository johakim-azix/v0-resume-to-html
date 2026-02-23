export default function Resume() {
  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
          padding: 20px;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          background-color: white;
          padding: 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 20px;
        }

        .header-left h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 5px;
          color: #000;
        }

        .header-left .title {
          font-size: 14px;
          color: #555;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .contact-info {
          font-size: 12px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 5px;
        }

        .contact-info a {
          color: #0066cc;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        .header-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #e0e0e0;
          flex-shrink: 0;
        }

        .header-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .section {
          margin-bottom: 35px;
        }

        .section-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #000;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .section-content {
          font-size: 13px;
          line-height: 1.7;
          color: #555;
        }

        .profile-text {
          color: #666;
          font-size: 13px;
          line-height: 1.8;
        }

        .expertise-category {
          margin-bottom: 18px;
        }

        .expertise-category-title {
          font-weight: 600;
          color: #000;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .expertise-category-content {
          color: #666;
          font-size: 13px;
          line-height: 1.6;
          margin-left: 0;
        }

        .experience-item {
          margin-bottom: 28px;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .experience-title {
          font-weight: 600;
          color: #000;
          font-size: 13px;
        }

        .experience-company {
          color: #0066cc;
          text-decoration: none;
          font-weight: 500;
          font-size: 13px;
        }

        .experience-company:hover {
          text-decoration: underline;
        }

        .experience-role {
          font-weight: 600;
          color: #000;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .experience-meta {
          font-size: 12px;
          color: #999;
          margin-bottom: 10px;
        }

        .experience-meta-location {
          color: #666;
          font-size: 12px;
        }

        .experience-meta-date {
          color: #666;
          font-size: 12px;
        }

        .experience-subtitle {
          font-size: 13px;
          color: #666;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .experience-list {
          list-style: none;
          margin-left: 0;
        }

        .experience-list li {
          margin-bottom: 8px;
          font-size: 13px;
          color: #666;
          padding-left: 20px;
          position: relative;
          line-height: 1.6;
        }

        .experience-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #999;
        }

        .professional-experience-header {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #000;
          margin-bottom: 20px;
          text-transform: uppercase;
          line-height: 1.6;
        }

        .education-item {
          margin-bottom: 15px;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 5px;
        }

        .education-degree {
          font-weight: 600;
          color: #000;
          font-size: 13px;
        }

        .education-date {
          color: #666;
          font-size: 12px;
        }

        .education-school {
          color: #666;
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .container {
            padding: 20px;
          }

          .header {
            flex-direction: column;
          }

          .header-photo {
            margin-top: 15px;
            width: 70px;
            height: 70px;
          }

          .experience-header {
            flex-direction: column;
          }

          .education-header {
            flex-direction: column;
          }

          .experience-meta-date,
          .education-date {
            margin-top: 5px;
          }
        }

        html, body {
          width: 100%;
          background: #f9f9f9;
        }
      `}</style>

      <div style={{ background: '#f9f9f9', padding: '20px' }}>
        <div className="container">
          {/* Header */}
          <div className="header">
            <div className="header-left">
              <h1>Joseph Penda</h1>
              <div className="title">Assistant Head of Technology</div>
              <div className="contact-info">
                +237655715705 jp.joseph.penda@gmail.com
              </div>
              <div className="contact-info">
                <a href="https://www.linkedin.com/in/joseph-penda-051a11a7/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/joseph-penda-051a11a7/</a>
              </div>
              <div className="contact-info">Douala, Cameroon</div>
            </div>
            <div className="header-photo">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202026-02-23%2002-18-28-1-1kQCBO1zWrn3Tb2oavdWjtD55tAe47.png" alt="Joseph Penda" />
            </div>
          </div>

          {/* Profile */}
          <div className="section">
            <div className="section-title">Profile</div>
            <div className="profile-text">
              Backend & Platform Engineer with 5+ years of experience designing and maintaining complex systems in fintech and high-availability environments. Strong focus on architectural clarity, system reliability, CI/CD optimization, and engineering process improvement. Experienced in PHP and Go backend development.
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="section">
            <div className="section-title">Technical Expertise</div>
            
            <div className="expertise-category">
              <div className="expertise-category-title">Backend & Systems</div>
              <div className="expertise-category-content">Go (Golang), PHP, RESTful APIs, Distributed systems concepts, SQL (MySQL), MongoDB</div>
            </div>

            <div className="expertise-category">
              <div className="expertise-category-title">Architecture & Engineering Practices</div>
              <div className="expertise-category-content">Domain-Driven Design (DDD), CI/CD (Jenkins, GitLab CI/CD), Docker, Git flow & branching strategies, Code review standards, Testing & deployment pipelines, Environment automation</div>
            </div>

            <div className="expertise-category">
              <div className="expertise-category-title">Front-end & others</div>
              <div className="expertise-category-content">Vue.js, JavaScript, SCSS, Android (Java), Firebase</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="section">
            <div className="professional-experience-header">
              Professional Experience<br />
              <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>CORE BACKEND CONTRIBUTOR TO THE SMARTCASH IMPLEMENTATION, RAPIDLY RAMPING UP ON NEW DOMAINS AND BECOMING THE KEY BACKEND RESOURCE IN CAMEROON FOR THE SERVICE AHEAD OF PRODUCTION RELEASE.</span>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-role">Software Engineer Backend</div>
                  <a href="#" className="experience-company">Maylance PLC</a>
                </div>
                <div className="experience-meta-location">Douala, Cameroon</div>
              </div>
              <div className="experience-meta">
                <span className="experience-meta-date">02/2024 - Present</span>
              </div>
              <div className="experience-subtitle">Payment aggregator</div>
              <ul className="experience-list">
                <li>Took ownership of the PRL service, resolving critical production issues and delivering performance optimizations that reduced payment latency by nearly 50% over 60+ deployments. Led the implementation of a distributed idempotency key caching system, enabling scalability improvements.</li>
                <li>Joined and later assumed ownership of the Payment Settlement Service (My Finance module) after the departure of the main developer. Successfully revitalized the module to production-readiness through optimization and documentation. The service now automates 80–90% of top-up and payout processes while significantly improving reconciliation and accounting accuracy.</li>
                <li>Core backend contributor to the SmartCash implementation, rapidly ramping up on new domains and becoming the key backend resource in Cameroon for the service ahead of production release.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-role">Software Engineer Backend – Performance & Scalability Audit</div>
                  <a href="#" className="experience-company">Confidential Client</a>
                </div>
                <div className="experience-meta-location">Remote</div>
              </div>
              <div className="experience-meta">
                <span className="experience-meta-date">08/2025 - 11/2025</span>
              </div>
              <div className="experience-subtitle">Messaging SaaS Platform</div>
              <ul className="experience-list">
                <li>Conducted an in-depth analysis of the monolithic infrastructure.</li>
                <li>Identified critical structural risks impacting reliability, scalability, and launch readiness.</li>
                <li>Contributed to a multifaceted remediation strategy enhancing reliability, scalability vision.</li>
                <li>Led remediation of concurrency, database, and I/O bottlenecks without disrupting feature roadmap.</li>
                <li>Reduced system latency by over 90% and restored platform stability under projected production traffic.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-role">Software Engineer Backend</div>
                  <a href="#" className="experience-company">Multi canal services</a>
                </div>
                <div className="experience-meta-location">Douala, Cameroon</div>
              </div>
              <div className="experience-meta">
                <span className="experience-meta-date">10/2019 - 01/2024</span>
              </div>
              <div className="experience-subtitle">E-commerce & Order delivery platform</div>
              <ul className="experience-list">
                <li>Led internal migration from third-party ERP (Odoo) to in-house platform (web & mobile POS system).</li>
                <li>Designed event-driven stock management integration reducing manual reconciliation.</li>
                <li>Established development standards (architecture, naming, Git workflow, review practices).</li>
                <li>Mentored junior developers through code reviews, pair programming, and feedback loops and training.</li>
                <li>Reduced production bugs by improving deployment pipeline and environment testing process.</li>
                <li>Introduced modular client-server architecture for new systems.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="section">
            <div className="section-title">Education</div>
            <div className="education-item">
              <div className="education-header">
                <div>
                  <div className="education-degree">Associate degree - Electrical engineering and industrial computing</div>
                  <div className="education-school">University Institute of Technology</div>
                </div>
                <div className="education-date">10/2016 - 05/2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
