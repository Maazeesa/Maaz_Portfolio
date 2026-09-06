(() => {

  const p = window.PORTFOLIO;

  const $ = (value) =>
    String(value ?? "").replace(
      /[&<>\"']/g,
      character =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[character]
    );

  const list = (items, render) =>
    items.map(render).join("");

  const arrow =
    '<span class="arrow" aria-hidden="true">→</span>';

  const check =
    '<span class="check" aria-hidden="true">✓</span>';


  function dashboard(type) {

    if (type === "business") {

      return `
        <div class="dash mining-dash">

          <div class="dash-head">
            <b>Executive Performance</b>
            <span>Business Intelligence</span>
          </div>

          <div class="kpi-grid">

            <i>
              <b>KPI</b>
              <small>Performance</small>
            </i>

            <i>
              <b>VAR</b>
              <small>Plan vs Actual</small>
            </i>

            <i>
              <b>TREND</b>
              <small>Monthly View</small>
            </i>

          </div>

          <svg
            viewBox="0 0 500 155"
            role="img"
            aria-label="Business performance trend chart"
          >

            <path
              d="M15 125L85 108L150 115L220 76L285 84L355 51L485 31"
              fill="none"
              stroke="#b88a18"
              stroke-width="5"
            ></path>

            <path
              d="M15 138L85 127L150 121L220 102L285 94L355 79L485 68"
              fill="none"
              stroke="#222"
              stroke-width="3"
              stroke-dasharray="7 7"
            ></path>

          </svg>

        </div>
      `;
    }


    if (type === "attendance") {

      return `
        <div class="dash attendance-dash">

          <div class="dash-head">
            <b>Attendance Overview</b>
            <span>HR Operations</span>
          </div>

          <div class="kpi-grid">

            <i>
              <b>1,248</b>
              <small>Employees</small>
            </i>

            <i>
              <b>94.2%</b>
              <small>Attendance</small>
            </i>

            <i>
              <b>37</b>
              <small>Exceptions</small>
            </i>

          </div>

          <div class="mini-content">

            <div class="bars">
              <span style="height:72%"></span>
              <span style="height:88%"></span>
              <span style="height:64%"></span>
              <span style="height:92%"></span>
              <span style="height:83%"></span>
              <span style="height:95%"></span>
            </div>

            <div class="donut"></div>

          </div>

        </div>
      `;
    }


    if (type === "mining") {

      return `
        <div class="dash mining-dash">

          <div class="dash-head">
            <b>Production Control</b>
            <span>Monthly View</span>
          </div>

          <div class="kpi-grid">

            <i>
              <b>ORE</b>
              <small>Plan vs Actual</small>
            </i>

            <i>
              <b>SR</b>
              <small>Movement Ratio</small>
            </i>

            <i>
              <b>Au</b>
              <small>Gold Forecast</small>
            </i>

          </div>

          <svg
            viewBox="0 0 500 155"
            role="img"
            aria-label="Production trend chart"
          >

            <path
              d="M15 125L85 92L150 103L220 58L285 78L355 39L485 23"
              fill="none"
              stroke="#b88a18"
              stroke-width="5"
            ></path>

            <path
              d="M15 138L85 121L150 116L220 96L285 91L355 73L485 64"
              fill="none"
              stroke="#222"
              stroke-width="3"
              stroke-dasharray="7 7"
            ></path>

          </svg>

        </div>
      `;
    }


    if (type === "planning") {

      return `
        <div class="dash plan-dash">

          <div class="dash-head">
            <b>Monthly Mine Schedule</b>
            <span>Bench Sequence</span>
          </div>

          <div class="schedule">

            <div>
              <b>Pit A</b>
              <span style="margin-left:0;width:44%"></span>
            </div>

            <div>
              <b>Pit B</b>
              <span style="margin-left:12%;width:41%"></span>
            </div>

            <div>
              <b>Pit C</b>
              <span style="margin-left:24%;width:38%"></span>
            </div>

            <div>
              <b>Stockpile</b>
              <span style="margin-left:36%;width:35%"></span>
            </div>

          </div>

          <div class="plan-legend">
            <i></i>
            Active sequence
          </div>

        </div>
      `;
    }


    if (type === "finance") {

      return `
        <div class="dash mining-dash">

          <div class="dash-head">
            <b>Feasibility Review</b>
            <span>Business Planning</span>
          </div>

          <div class="kpi-grid">

            <i>
              <b>NPV</b>
              <small>Value</small>
            </i>

            <i>
              <b>IRR</b>
              <small>Return</small>
            </i>

            <i>
              <b>COST</b>
              <small>Sensitivity</small>
            </i>

          </div>

          <svg
            viewBox="0 0 500 155"
            role="img"
            aria-label="Feasibility scenario chart"
          >

            <path
              d="M15 120L85 105L150 94L220 72L285 66L355 45L485 28"
              fill="none"
              stroke="#b88a18"
              stroke-width="5"
            ></path>

            <path
              d="M15 139L85 128L150 120L220 109L285 98L355 86L485 75"
              fill="none"
              stroke="#222"
              stroke-width="3"
              stroke-dasharray="7 7"
            ></path>

          </svg>

        </div>
      `;
    }


    return `
      <div class="dash flow-dash">

        <div class="dash-head">
          <b>New Joiner Flow</b>
          <span>Automated Handoff</span>
        </div>

        <div class="flow-row">

          <div>
            <span>01</span>
            <b>Recruiter</b>
          </div>

          ${arrow}

          <div>
            <span>02</span>
            <b>HR Ops</b>
          </div>

          ${arrow}

          <div>
            <span>03</span>
            <b>IT / HSE</b>
          </div>

        </div>

        <div class="flow-status">
          ${check}
          Complete information triggers the right onboarding team
        </div>

      </div>
    `;
  }


  document.title =
    `${p.name} | ${p.title}`;


  document.getElementById("portfolio").innerHTML = `

    <header>

      <a
        class="logo"
        href="#top"
      >
        <strong>
          ${$(p.name).toUpperCase()}
        </strong>
      </a>

      <nav aria-label="Main navigation">

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#experience">
          Experience
        </a>

        <a href="#recommendations">
          References
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>

      <a
        class="nav-contact"
        href="mailto:${$(p.email)}"
      >
        Let's talk ${arrow}
      </a>

    </header>


    <main id="top">

      <section class="hero">

        <aside class="profile-card">

          <div class="photo-frame">

            <img
              src="${$(p.profileImage)}"
              alt="${$(p.name)}"
            >

          </div>

          <div class="profile-copy">

            <p>
              ${$(p.name).toUpperCase()}
            </p>

            <h2>
              ${$(p.title)}
            </h2>

            <span class="location">
              ⌖ ${$(p.location)}
            </span>

            <div class="availability">

              <i></i>

              <b>
                ${$(p.availability).toUpperCase()}
              </b>

            </div>

          </div>

        </aside>


        <div class="hero-main">

          <p class="overline">
            ${$(p.name).toUpperCase()}
            · PROFESSIONAL PORTFOLIO
          </p>

          <div class="title-badge">
            ${$(p.title).toUpperCase()}
          </div>

          <h1>

            <span>
              ${$(p.headlineLine1)}
            </span>

            <em>
              ${$(p.headlineLine2)}
            </em>

          </h1>

          <p class="hero-text">
            ${$(p.introduction)}
          </p>


          <div class="stakeholder-line">

            <span>
              EXECUTIVE REPORTING FOR
            </span>

            ${list(
              p.stakeholders,
              x => `<b>${$(x)}</b>`
            )}

          </div>


          <div class="role-targets">

            <strong>
              CAREER FOCUS
            </strong>

            ${list(
              p.careerFocus,
              x => `<span>${$(x)}</span>`
            )}

          </div>


          <div class="hero-buttons">

            <a
              class="primary"
              href="#projects"
            >
              Explore projects ${arrow}
            </a>

            <a
              class="secondary"
              href="${$(p.cvFile)}"
              download
            >
              ↓ Download CV
            </a>

            <a
              class="text-action"
              href="#experience"
            >
              Professional experience ${arrow}
            </a>

          </div>


          <div class="hero-metrics">

            ${list(
              p.metrics,
              x => `
                <div>
                  <strong>
                    ${$(x.value)}
                  </strong>

                  <span>
                    ${$(x.label)}
                  </span>
                </div>
              `
            )}

          </div>

        </div>

      </section>


      <section class="trust-strip">

        ${list(
          p.tools,
          x => `<span>${$(x).toUpperCase()}</span>`
        )}

      </section>


      <section
        class="about"
        id="about"
      >

        <div class="section-title">

          <p>
            01 · ABOUT
          </p>

          <h2>
            Analysis built around how the business and operation actually work.
          </h2>

        </div>


        <div class="about-grid">

          <div class="about-copy">

            ${list(
              p.about,
              x => `<p>${$(x)}</p>`
            )}

          </div>


          <div class="expertise-card">

            <h3>
              Core expertise
            </h3>

            <div class="expertise-list">

              ${list(
                p.expertise,
                x => `
                  <span>
                    <i></i>
                    ${$(x)}
                  </span>
                `
              )}

            </div>

          </div>

        </div>

      </section>


      <section
        class="projects"
        id="projects"
      >

        <div class="section-title centered">

          <p>
            02 · SELECTED PROJECTS
          </p>

          <h2>
            Analytics and reporting built for real business problems.
          </h2>

          <span>
            Selected examples from business intelligence,
            operations, mining, planning and workforce analytics.
            Confidential data and employee information are excluded.
          </span>

        </div>


        <div class="project-stack">

          ${list(
            p.projects,
            project => `

              <article class="case-study">

                <div class="case-number">
                  ${$(project.number)}
                </div>

                <div class="case-copy">

                  <p class="case-label">
                    ${$(project.category)}
                  </p>

                  <h3>
                    ${$(project.title)}
                  </h3>

                  <p class="case-summary">
                    ${$(project.summary)}
                  </p>


                  <div class="case-detail">

                    <div>

                      <b>
                        Challenge
                      </b>

                      <p>
                        ${$(project.challenge)}
                      </p>

                    </div>


                    <div>

                      <b>
                        Solution
                      </b>

                      <p>
                        ${$(project.solution)}
                      </p>

                    </div>

                  </div>


                  <ul>

                    ${list(
                      project.impact,
                      x => `
                        <li>
                          ${check}
                          ${$(x)}
                        </li>
                      `
                    )}

                  </ul>


                  <div class="tool-list">

                    ${list(
                      project.tools,
                      x => `<span>${$(x)}</span>`
                    )}

                  </div>

                </div>


                <div class="visual-shell">

                  ${dashboard(project.visual)}

                </div>

              </article>
            `
          )}

        </div>

      </section>


      <section class="pipeline">

        <div class="section-title centered light">

          <p>
            03 · WORKING METHOD
          </p>

          <h2>
            From disconnected data to decision support.
          </h2>

        </div>


        <div class="pipeline-row">

          <div>

            <span>
              01
            </span>

            <b>
              Collect
            </b>

            <p>
              Systems, Excel, forms and operational files
            </p>

          </div>

          ${arrow}


          <div>

            <span>
              02
            </span>

            <b>
              Transform
            </b>

            <p>
              Clean, validate, combine and model
            </p>

          </div>

          ${arrow}


          <div>

            <span>
              03
            </span>

            <b>
              Analyse
            </b>

            <p>
              KPIs, trends, exceptions and forecasts
            </p>

          </div>

          ${arrow}


          <div>

            <span>
              04
            </span>

            <b>
              Deliver
            </b>

            <p>
              Dashboards, reports and automated actions
            </p>

          </div>

        </div>

      </section>


      <section class="skills">

        <div class="section-title">

          <p>
            04 · CAPABILITIES
          </p>

          <h2>
            Analytical capability supported by business and operational understanding.
          </h2>

        </div>


        <div class="skills-layout">

          <div class="skill-bars">

            ${list(
              p.capabilities,
              capability => `

                <div class="skill">

                  <div>
                    <b>
                      ${$(capability.name)}
                    </b>
                  </div>

                  <div class="tool-list">

                    ${list(
                      String(capability.skills)
                        .split(",")
                        .map(skill => skill.trim()),
                      skill => `<span>${$(skill)}</span>`
                    )}

                  </div>

                </div>
              `
            )}

          </div>


          <div class="language-card">

            <h3>
              Languages
            </h3>

            ${list(
              p.languages,
              x => `

                <div>

                  <span>
                    ${$(x.name)}
                  </span>

                  <b>
                    ${$(x.level)}
                  </b>

                </div>
              `
            )}


            <hr>


            <h3>
              Education
            </h3>

            <p>
              <b>
                ${$(p.education)}
              </b>
            </p>

          </div>

        </div>

      </section>


      <section
        class="experience"
        id="experience"
      >

        <div class="section-title centered">

          <p>
            05 · EXPERIENCE
          </p>

          <h2>
            Career shaped by analytics, operations and improvement.
          </h2>

        </div>


        <div class="experience-summary">

          <strong>
            4+ YEARS
          </strong>

          <span>
            Professional experience across mining analytics,
            business reporting, data leadership,
            operations and project reporting.
          </span>

        </div>


        <div class="timeline">

          ${list(
            p.experience,
            job => `

              <article>

                <div class="timeline-date">
                  ${$(job.dates)}
                </div>

                <div class="timeline-dot"></div>

                <div>

                  <p>
                    ${$(job.company)}
                  </p>

                  <h3>
                    ${$(job.title)}
                  </h3>


                  ${
                    job.reporting
                      ? `
                        <div class="reporting-badge">
                          ${$(job.reporting)}
                        </div>
                      `
                      : ""
                  }


                  <ul>

                    ${list(
                      job.points,
                      x => `<li>${$(x)}</li>`
                    )}

                  </ul>

                </div>

              </article>
            `
          )}

        </div>

      </section>


      <section
        class="recommendations"
        id="recommendations"
      >

        <div class="section-title centered">

          <p>
            06 · PROFESSIONAL RECOMMENDATIONS
          </p>

          <h2>
            Trusted by senior business, finance and operational leadership.
          </h2>

          <span>
            Formal recommendations recognising analytical,
            operational and decision-support contributions.
          </span>

        </div>


        <div class="recommendation-grid">

          ${list(
            p.recommendations,
            rec => `

              <article class="recommendation-card">

                <div class="quote-mark">
                  “
                </div>

                <blockquote>
                  ${$(rec.quote)}
                </blockquote>


                <div class="recommender">

                  <strong>
                    ${$(rec.name)}
                  </strong>

                  <span>
                    ${$(rec.title)}
                  </span>

                </div>


                <p>
                  ${$(rec.context)}
                </p>


                <a
                  href="${$(rec.file)}"
                  target="_blank"
                  rel="noreferrer"
                >
                  ▣ View privacy-safe letter ${arrow}
                </a>

              </article>
            `
          )}

        </div>

      </section>


      <section
        class="contact"
        id="contact"
      >

        <div>

          <p class="overline">
            07 · CONTACT
          </p>

          <h2>
            Have a role or project where data needs to become clearer?
          </h2>

          <p>
            ${$(p.contactText)}
          </p>

        </div>


        <div class="contact-card">

          <a
            href="mailto:${$(p.email)}"
          >

            <span class="contact-icon">
              @
            </span>

            <span>

              <small>
                Email
              </small>

              <b>
                ${$(p.email)}
              </b>

            </span>

            ${arrow}

          </a>


          <a
            href="${$(p.linkedin)}"
            target="_blank"
            rel="noreferrer"
          >

            <span class="contact-icon">
              in
            </span>

            <span>

              <small>
                LinkedIn
              </small>

              <b>
                linkedin.com/in/momaaz
              </b>

            </span>

            ${arrow}

          </a>


          <div>

            <span class="contact-icon">
              ⌖
            </span>

            <span>

              <small>
                Location
              </small>

              <b>
                ${$(p.location)}
              </b>

            </span>

          </div>

        </div>

      </section>

    </main>


    <footer>

      <a
        class="logo"
        href="#top"
      >

        <strong>
          ${$(p.name).toUpperCase()}
        </strong>

      </a>

      <p>
        ${$(p.title)}
      </p>

      <span>
        © 2026 ${$(p.name)}
      </span>

    </footer>
  `;

})();
