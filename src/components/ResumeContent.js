import "./ResumeContent.css";

const ResumeContent = () => {
  return (
    <div className="resume-content">
      <h2 className="list-header">S K I L L S </h2>
      <ul id="skills">
        <li>Python</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Bash script in Linux environment</li>
        <li>SQL</li>
        <li>Microsoft Excel</li>
        <li>Power BI</li>
        <li>R</li>
      </ul>

      <h2 className="list-header">E D U C A T I O N </h2>
      <div>
        <h3>
          University of Waterloo, Honours Bachelor of Mathematics - Awarded June
          2023
        </h3>
        <ul id="work-history">
          <li>Mathematics Society Member</li>
          <li>Waterloo Outers Club Member</li>
        </ul>
        <h3>
          Wilfrid Laurier University, Honours Bachelor of Business
          Administration - Awarded June 2023
        </h3>
        <ul>
          <li>Pepsi Co Pitch Competition Semi-Finalist</li>
          <li>New Venture Competition Semi-Finalist</li>
          <li>Laurier University Charity Coucil Member</li>
          <li>Laurier Entrance Scholarship</li>
        </ul>
      </div>

      <h2 className="list-header">W O R K  H I S T O R Y</h2>
      <div id="work-history">
        <h3>
          Underwriting Associate, Chubb Insurance Company of Canada - Sept. 2019
          to June 2021
        </h3>
        <ul>
          <li>
            Was responsible for a portfolio of 10-15 accounts per month with
            individual accounts ranging in renewal premiums of up to $40K each.
          </li>
          <li>
            Underwrote risks which summarized a given company’s financial risk,
            operational risk, and macro level industry exposure.
          </li>
          <li>
            Constructed a data set of historical claims which is utilized by
            upper management to identify potential future exposures and devise
            department strategies.
          </li>
          <li>
            Identified cross-sell and new business opportunities, as well as
            increased the number of policies purchased by existing clients
            through their respective brokers.{" "}
          </li>
          <li>
            Aided in the development of a department-wide teaching training
            manual to integrate new-hires and optimize managers' time.
          </li>
        </ul>
        <h3>
          Telephone Banking Advisor, Co-op, Royal Bank of Canada - Sept. 2018 to
          Dec. 2018
        </h3>
        <ul>
          <li>
            Assisted clients with account openings, closings, and identified
            suitable products for their needs.
          </li>
          <li>
            Handled transactions between accounts, bill payments, and
            modifications to account services.
          </li>
          <li>
            Worked jointly with other co-ops to create short films that
            showcased our Halifax “hub” to management nationally.
          </li>
        </ul>
        <h3>
          Wireless Lifecycle Analyst, Co-op, Rogers Communications - Jan. 2018
          to Apr. 2018
        </h3>
        <ul>
          <li>
            Conducted detailed examination of performance data and statistical
            analysis of large-scale campaign performance data sets and presented
            substantial growth opportunities to senior management.{" "}
          </li>
          <li>
            Created an automated Excel scorecard that allowed management to
            compare current sales performance with previous years; thus,
            allowing more time to be spent on value-added analysis across the
            team.
          </li>
          <li>
            Analysed internal reporting systems to interpret and explain
            anomalies in sales performance trends.
          </li>
        </ul>
      </div>

      <h2 className="list-header">C E R T I F I C A T I O N S</h2>
        <ul>
          <li>
            French Immersion Certificate.
          </li>
          <li>
            A2 Goethe-Institute Exam for German.
          </li>
        </ul>
    </div>
  );
};

export default ResumeContent;
