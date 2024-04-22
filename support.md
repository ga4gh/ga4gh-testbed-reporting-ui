# <img src="https://www.ga4gh.org/wp-content/themes/ga4gh/dist/assets/svg/logos/logo-full-color.svg" alt="GA4GH Logo" style="width: 400px;"/>
<html>
    <body>
        <h1><div class="title" id="title">GA4GH Testbed Infrastructure User Manual</div>
        <hr>
        <ul>
            <li><a href="#intro">Introduction</a></li><br>
            <li><a href="#parts">Technical Components</a></li><br>
            <li><a href="#submission">Submission Process</a></li><br>
            <li><a href="#validation">Schema Validation</a></li><br>
            <li><a href="#ui">The UI - viewing reports</a></li><br>
            <li><a href="#support">Support Centre</a></li><br>
        </ul>
        <hr>
        <div class="intro" id="intro"><h2>Introduction</h2>
            The GA4GH plans to develop, deploy, and maintain a technical stack known as the GA4GH Testbed Infrastructure, through which implementers of GA4GH APIs can assess the interoperability and conformance of their web services to their respective specifications. Compliance testbeds will be developed for most (if not all) GA4GH API specifications, which will execute a series of HTTP requests against a web service, assert whether the observed responses conform to expected, and produce a final report that indicates whether the web service passed or failed compliance testing. These testbed applications should align with GA4GH approaches to workflows and batch processing: they should be packaged as dockerized workflows and published on a Tool Registry Service (TRS) and runnable on a Workflow Execution Service (WES).
            <br><br>
            The reports can be published on a compliance report aggregation service. Published reports that indicate a web service has passed all tests will yield a “Badge” from GA4GH to that service. The badge will act as an official certificate, essentially stating that GA4GH endorses the web service as having adopted the API specification correctly. The GA4GH Technical Team (and potentially other Secretariat members) will act as administrators for the publishing service. Reports and badges will be browsable to the genomics community over a browser-based user interface.
            <br><br>
            A Badge will have a limited lifecycle, and will need to be refreshed by re-running the same testbed on the web service at regular intervals. This will ensure that if a service falls out of compliance, it will be caught. To help facilitate the scheduled running of testbeds, an automation service will schedule the testbeds to run on a WES service at regular intervals, and publish the report output to the aggregation service. The automation service can pull service metadata from the GA4GH Registry, and run the appropriate testbed based on each service’s “type”. The automation service may also be configured for private services from implementers that do not wish to share all metadata about the service on the registry.
            <br><br>
            A monitoring system will alert the technical team and any relevant stakeholders of any unexpected testbed failures in the network of web services. Before failed reports are published on the public site, stakeholders will have a grace period, during which they can access a staging area to review and correct the reasons for failure without the failure becoming visible to the public.
            <br><br>
            The technical stack will be deployed on Amazon Web Services (AWS) cloud infrastructure and supported by the GA4GH Technical Team.<br><br>
        </div><b><a href="#title">Back to top</a>
        <hr>
        <div class="parts" id="parts"><h2>Technical Components</h2>
            <figure>
                <img src="/static/Connect2024-Demo-arch.png" alt="Testbed tech stack" width="1000" height="500" >
                <figcaption text-align="centre">Fig 1. Testbed Infrastructure technical stack</figcaption>
             </figure>
            The technical stack of the testbed infrastructure is deployed on AWS. The different parts of the stack are - <br>
            <ul>
                <li><b>AWS ALB</b> - The Automatic Load Balancer (ALB) accepts requests from the users who hit the URL of the testbed. </li><br>
                <li><b>AWS ECS Task</b> - The testbed UI (frontend) and the API (backend) are deployed as AWS Elastic Compute Cloud task to manage the display and the validation services running in the background. Both of these components are developed and have a integration and deployment pipeline through Docker Hub images. </li><br>
                <li><b>AWS ECS Service</b> - AWS ECS Service is responsible to run the ECS tasks defined and is standard component from AWS stack. </li><br>
                <li><b>PostgreSQL</b> - The reports submitted into the testbed and validated are stored in the database which is an AWS Relational Database Service (RDS) and running a PostgreSQL instance. This relational database ensures the data on submitted reports are persistent and available for viewing in the UI. </li><br>
                <li><b>Testbed UI (frontend)</b> - The UI of the testbed infrastructure is a ReactJS application running as an AWS ECS task. More details are covered in the <a href="#ui">UI</a> section. </li><br>
                <li><b>Testbed API (backend)</b> - The API of the testbed infrastructure is the core processing engine which intakes the reports submitted by the implementation servers and runs the validation process to mark each submission as "<i>Compliant</i>" or "<i>Non-compliant</i>". </li><br>
                <li><b>Docker Hub</b> - Docker Hub is used to implement the continuous integration and deployment pipeline. The images of the UI and API are created and deployed on Docker Hub, making it easier for developers to download and use the build images without configuration on local systems. </li><br>
            </ul>
        </div><b><a href="#title">Back to top</a>
        <hr>
        <div class="submission" id="submission"><h2>Submission Process</h2>
            Developers / implementers of GA4GH standards can submit the reports generated from their respective compliance testbeds into the testbed infrastructure for valdiation and get their implementations badged. Please note that for submitting reports into the testbed infrastructure a registration process exists. For more details on the process, please refer the <a href="#support">support</a> section. <br>
            Once the compliance testbeds are set up and registration is completed, compliance reports (payload) can be uploaded into the testbed through a simple command. Due to the online deployment instance of the testbed infrastructure, developers / implementers <i><b>do not</b></i> need to download or deploy a local version of the testbed infrastructure. The command to be used, its syntax and explanation on the command's different parameters / flags are provided below. 
            <figure>
                <img src="/static/submission-command-terminal.png" alt="Submission terminal" width="1000" height="500" >
                <figcaption text-align="centre">Fig 2. Submission terminal command output</figcaption>
             </figure>
             Below is an example of executing the submission command for a registered compliance testbed. 
             <figure>
                <img src="/static/render1713697537103.gif" alt="Submission execution" width="1000" height="500" >
                <figcaption text-align="centre">Fig 3. Submission terminal execution</figcaption>
             </figure>
             Syntax of the command. Example here considers "<i>refget compliance testbed</i>".<br><br>
             <code>refget-compliance report -s https://www.ebi.ac.uk/ena/cram/ --submit-id 1edb5213-52a2-434f-a7b8-b101fea8fb30 --submit-token K5pLbwScVu8rEoLLj8pRy5Wv7EXTVahn --submit-url http://dev-testbed.ga4gh.org:4500/reports --submit</code>
             <ul>
                <li><code>-s</code>: The server implementing the standards and submitting the report into the testbed infrastructure. Mandatory</li><br>
                <li><code>--submit-id, --submit-token</code>: The unique identifiers (UID) provided to compliance testbeds who have collaborated and registered with the testbed infrastructure. This is specific to the implementation servers. Mandatory </li><br>
                <li><code>--submit-url</code>: The testbed infrastructure server evaluating the submitted reports (payloads) for the implemented standards and generating a compliance status. Optional</li><br>
                <li><code>--submit</code>: Keyword to trigger the submission of the submitted report and generate a validation output which would report the compliance status. If this keyword isn't specified, the testbed infrastructure would accept the payload but wouldn't generate a compliance status report. Mandatory </li><br>
             </ul>
        </div><b><a href="#title">Back to top</a>
        <hr>
        <div class="validation" id="validation"><h2>Schema Validation</h2>
            The testbed infrastructure validates the submitted reports (payload) for the standards implemented on the respective implementer servers. For the validation, schemas are used. The schemas are the templates used to compare and trigger testing of the different standards implementations in the implementer servers. This process would usually take some time (few minutes) as the infrastructure validates the reports through all the phases. On a high-level, the incoming schema is validated against the defined schema in the testbed infrastructure. The payload is expected to contain certain mandatory fields to be successfully evaluated. If the fields are missing, the validation would fail. Please note that the fields in compliance testbeds are mapped during the registration process. <br>
            <figure class="left">
                <img src="/static/field-mapping.png" alt="Schema fields" width="500" height="500" >
                <figcaption text-align="centre">Fig 4. Fields mapped in schema</figcaption>
             </figure>
             <figure class="right">
                <img src="/static/schema-required-fields.png" alt="Schema mandatory" width="500" height="500" >
                <figcaption text-align="centre">Fig 5. Mandatory fields in schema</figcaption>
             </figure>
        </div><b><a href="#title">Back to top</a>
        <hr>
        <div class="ui" id="ui"><h2>The UI - viewing reports</h2>
            After a report is submitted, developers and users can view the outcome of the validation on the testbed infrastructure on the UI. The UI is hosted on AWS and can be accessed using a URL. This is publicly accessible URL and currently, there are no authentication or authorization mechanism in place although when implemented in the future the developers would be informed on how they can register for unique credentials. The UI is intuitive and provides aggregated information on the reports submitted, grouped together on the standards for which it was evaluated. All the implementer servers which implemented the standards would be listed under the respective aggregated grouping. The UI also provides links to access more information on GA4GH, the specifications validated so far from reports submitted, and a help document.<br><br>
            <figure>
                <img src="/static/the-testbed-ui.png" alt="Testbed UI" width="1000" height="500" >
                <figcaption text-align="centre"><br>Fig 6. Testbed UI</figcaption>
             </figure> 
        </div><b><a href="#title">Back to top</a>  
        <hr>
        <div class="support" id="support"><h2>Support Centre</h2>
            For any issues related to the testbed infrastructure, you can get in touch with the GA4GH Tech Team. They are reachable via email on <a href="ga4gh-tech-team@ga4gh.org">ga4gh-tech-team@ga4gh.org</a>. Additionally, note that the registration of new implementer servers and any future enhancement ideas / features can be shared to the Tech Team for consideration and collaboration. 
        </div><br><b><a href="#title">Back to top</a>
