## Major Cloud Providers

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 28 frontend instance hours per day, nine backend instance hours per day
    * Cloud Firestore - 1GB storage, 50,000 reads, 20,000 writes, 20,000 deletes per day
    * Compute Engine - 1 non-preemptible e2-micro, 30GB HDD, 5GB snapshot storage (restricted to certain regions), 1 GB network egress from North America to all region destinations (excluding China and Australia) per month
    * Cloud Storage - 5GB, 1GB network egress
    * Cloud Shell - Web-based Linux shell/primary IDE with 5GB of persistent storage. 60-hour limit per week
    * Cloud Pub/Sub - 10GB of messages per month
    * Cloud Functions - 2 million invocations per month (includes both background and HTTP invocations)
    * Cloud Run - 2 million requests per month, 360,000 GB-seconds memory, 180,000 vCPU-seconds of compute time, 1 GB network egress from North America per month
    * Google Kubernetes Engine - No cluster management fee for one zonal cluster. Each user node is charged at standard Compute Engine pricing
    * BigQuery - 1 TB of querying per month, 10 GB of storage each month
    * Cloud Build - 120 build-minutes per day
    * [Google Colab](https://colab.research.google.com/) - Free Jupyter Notebooks development environment.
    * [Kaggle](https://www.kaggle.com/) - Jupyter Notebooks with 4 CPU cores and 30 GB RAM computational environment without any weekly usage limits. With Phone number verification, 1 Nvidia Tesla P100 GPU or 2x Nvidia Tesla T4 GPU can be added with a usage limit of 30 GPU hours/week for free. With Identity verification - 1 TPU v3-8 with 96 CPU cores and 330 GB RAM is available with a usage limit of 20 hours/week for free. Check [Technical Specifications](https://www.kaggle.com/docs/notebooks#technical-specifications) for more details.
    * [ChromeRemoteDesktop](https://remotedesktop.google.com/) - Free remote desktop app with practically no limit on the number of devices, owned by Google, so needs a Google account.
    * [Google AI Studio](https://aistudio.google.com/) - Get free access to Gemini 3.5 Flash, Gemini 3 Flash and Gemma 4 models. The free tier for Flash offers 5 requests per minute, 20 requests per day, and 250k input tokens per minute. Meanwhile the free tier for Gemma 4 offers 30 requests per minute, 14.4k requests per day, but (only) 16k input tokens per minute.
    * Full, detailed list - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 1TB egress/month, 10M HTTP requests, and 2M Function invocations/month
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 custom metrics and alarms, 1M API requests, 5GB of log data ingestion and 5GB of log data archive
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 100min of build time/month
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 active users, 5k repositories/account, 50GB storage/month and 10K requests/month
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 1 active pipeline/month
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL DB
    * [Lambda](https://aws.amazon.com/lambda/) - 1 million requests/month
    * [SNS](https://aws.amazon.com/sns/) - 1 million publishes/month
    * [SES](https://aws.amazon.com/ses/) - 3.000 messages/month (6mo)
    * [SQS](https://aws.amazon.com/sqs/) - 1 million messaging queue requests
    * Full, detailed list - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 web, mobile, or API apps (60 CPU minutes/day)
    * [Functions](https://azure.microsoft.com/services/functions/) - 1 million requests per month
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - Enable fast, easy, and lean dev-test environments
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 objects
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000 monthly stored users
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 active users, unlimited private Git repos
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 10 free parallel jobs with unlimited minutes for open source for Linux, macOS, and Windows
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 8,000 messages per day
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 750 hours, 15GB data processing and 5 rules (12mo)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 1 million push notifications
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB Outbound(12mo)
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB storage and 1000 RUs of provisioned throughput
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - Build, deploy, and host static apps and serverless functions with free SSL, Authentication/Authorization, and custom domains
    * [Storage](https://azure.microsoft.com/services/storage/) - 100GB LRS transactions (Azure Files), 5GB Blob storage, 10GB LRS Archive Storage, 2x64GB SSD (12mo)
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML APIs (Computer Vision, Translator, Face detection, Bots, etc) with free tier including limited transactions
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - AI-based search and indexation service, free for 10,000 documents
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - Managed Kubernetes service, free cluster management
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 100K ops/month
    * [Service Bus](https://azure.microsoft.com/products/service-bus/) - 750 hours and 13 million operations Standard tier base unit (12mo)
    * Full, detailed list - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * Compute
       - 2 AMD-based Compute VMs with 1/8 OCPU and 1 GB memory each
       - 2 Arm-based Ampere A1 cores and 12 GB of memory usable as one VM or up to 2 VMs
       - Instances will be reclaimed when [deemed idle](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)
    * Block Volume - 2 volumes, 200 GB total (used for compute)
    * Object Storage - 10 GB
    * Load balancer - 1 instance with 10 Mbps
    * Databases - 2 DBs, 20 GB each
    * Monitoring - 500 million ingestion data points, 1 billion retrieval datapoints
    * Bandwidth - 10 TB egress per month, speed limited to 50 Mbps on x64-based VM, 500 Mbps * core count on ARM-based VM
    * Public IP - 2 IPv4 for VMs, 1 IPv4 for load balancer
    * Notifications - 1 million delivery options per month, 1000 emails sent per month
    * Full, detailed list - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant database - 1 GB of data storage
    * Db2 database - 100MB of data storage
    * API Connect - 50,000 API calls per month
    * Availability Monitoring - 3 million data points per month
    * Log Analysis - 500MB of daily log
    * Full, detailed list - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [Application Services](https://www.cloudflare.com/plans/) - Free DNS for an unlimited number of domains, DDoS Protection, CDN along with free SSL, Firewall rules and page rules,  WAF, Bot Mitigation, Free Unmetered Rate Limiting - 1 rule per domain, Analytics, Email forwarding
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - Up to 50 Users, 24 hours of activity logging, three network locations
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) -  You can expose locally running HTTP port over a tunnel to a random subdomain on trycloudflare.com use [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/), No account required. More features (TCP tunnel, Load balancing, VPN) in [Zero Trust](https://www.cloudflare.com/products/zero-trust/) Free Plan.
    * [Workers](https://developers.cloudflare.com/workers/) - Deploy serverless code for free on Cloudflare's global network-100k daily requests.
    * [Workers KV](https://developers.cloudflare.com/kv) - 100k read requests per day, 1000 write requests per day, 1000 delete requests per day, 1000 list requests per day, 1 GB stored data
    * [R2](https://developers.cloudflare.com/r2/) - 10 GB per month, 1 million Class A operations per month, 10 million Class B operations per month
    * [D1](https://developers.cloudflare.com/d1/) - 5 million rows read per day, 100k rows written per day, 1 GB storage
    * [Pages](https://developers.cloudflare.com/pages/) - Develop and deploy your web apps on Cloudflare's fast, secure global network. Five hundred monthly builds, 100 custom domains, Integrated SSL, unlimited accessible seats, unlimited preview deployments, and full-stack capability via Cloudflare Workers integration.
    * [Queues](https://developers.cloudflare.com/queues/) - 1 million operations per month
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 1TB of free (outgoing) traffic per month.

  * [Zoho](https://www.zoho.com) - Started as an e-mail provider but now provides a suite of services, some of which have free plans. List of services having free plans :
    * [Catalyst by Zoho](https://catalyst.zoho.com) -  PaaS/full-stack cloud platform with a generous [free tier](https://catalyst.zoho.com/free-tier.html)
    * [Zoho Apptics](https://www.zoho.com/apptics/) - Unified and actionable product analytics to monitor performance, analyze user behavior and collect feedback for mobile, web, and desktop apps with generous Free Forever plan.
    * [Email](https://zoho.com/mail) Free for 5 users. 5GB/user & 25 MB attachment limit, one domain.
    * [Zoho Assist](https://www.zoho.com/assist) - Zoho Assist's forever free plan includes one concurrent remote support license and Access to 5 unattended computer licenses for unlimited duration available for both professional and personnel use.
    * [Sprints](https://zoho.com/sprints) Free for 5 users,5 Projects & 500MB storage.
    * [Docs](https://zoho.com/docs) - Free for 5 users with 1 GB upload limit & 5GB storage. Zoho Office Suite (Writer, Sheets & Show) comes bundled.
    * [Projects](https://zoho.com/projects) - Free for 3 users, 2 projects & 10 MB attachment limit. The same plan applies to [Bugtracker](https://zoho.com/bugtracker).
    * [Connect](https://zoho.com/connect) - Team Collaboration free for 25 users with three groups, three custom apps, 3 Boards, 3 Manuals, and 10 Integrations along with channels, events & forums.
    * [Meeting](https://zoho.com/meeting) - Meetings with upto 3 meeting participants & 10 Webinar attendees.
    * [Vault](https://zoho.com/vault) - Password Management is accessible for Individuals.
    * [Showtime](https://zoho.com/showtime) - Yet another Meeting software for training for a remote session of up to 5 attendees.
    * [Notebook](https://zoho.com/notebook) - A free alternative to Evernote.
    * [Wiki](https://zoho.com/wiki) - Free for three users with 50 MB storage, unlimited pages, zip backups, RSS & Atom feed, access controls & customizable CSS.
    * [Subscriptions](https://zoho.com/subscriptions) - Recurring Billing management free for 20 customers/subscriptions & 1 user with all the payment hosting done by Zoho. The last 40 subscription metrics are stored
    * [Checkout](https://zoho.com/checkout) - Product Billing management with 3 pages & up to 50 payments.
    * [Desk](https://zoho.com/desk) - Customer Support management with three agents, private knowledge base, and email tickets. Integrates with [Assist](https://zoho.com/assist) for one remote technician & 5 unattended computers.
    * [Cliq](https://zoho.com/cliq) - Team chat software with 100 GB storage, unlimited users, 100 users per channel & SSO.
    * [Campaigns](https://zoho.com/campaigns) - Email Marketing
    * [Forms](https://zoho.com/forms) - Form Creator
    * [Sign](https://zoho.com/sign) - Paperless Signatures
    * [Surveys](https://zoho.com/surveys) - Online Surveys
     * [Bookings](https://zoho.com/bookings) - Appointment Scheduling

**[⬆️ Back to Top](#table-of-contents)**

## Cloud management solutions

  * [Brainboard](https://www.brainboard.co) - Collaborative solution to visually build and manage cloud infrastructures from end-to-end.
  * [Cloud 66](https://www.cloud66.com/) - Free for personal projects (includes one deployment server, one static site), Cloud 66 gives you everything you need to build, deploy, and grow your applications on any cloud without the headache of the “server stuff.”.
  * [Cloud Cost Analyzer](https://cca.dragonfractal.com/) - Scan AWS and Azure for cost waste with 92 automated checks including idle NAT gateways, gp2 volumes, and over-provisioned instances. Get savings estimates in a read-only, developer-first CLI. Free tier covers up to 5,000 resources per scan on one AWS account. Paid tiers add resource IDs and exact remediation steps.
  * [deployment.io](https://deployment.io) - Deployment.io helps developers automate deployments on AWS. On our free tier, a developer (single user) can deploy unlimited static sites, web services, and environments. We provide 10 job executions free per month with previews and auto-deploys included in the free tier.
  * [Parsivex](https://www.parsivex.com) - Parsivex scans your AWS account for idle EC2, unattached EBS, oversized RDS, stale snapshots, NAT gateway overuse etc. Free tier provides a monthly scan for one AWS account and returns total monthly waste plus a category breakdown. Paid plans give access to itemized findings and scheduled re-scans.
  * [Pulumi](https://www.pulumi.com/) - Modern infrastructure as a code platform that allows you to use familiar programming languages and tools to build, deploy, and manage cloud infrastructure.
  * [scalr.com](https://scalr.com/) - Scalr is a Terraform Automation and COllaboration (TACO) product used to better collaboration and automation on infrastructure and configurations managed by Terraform. Full Terraform CLI support, OPA integration, and a hierarchical configuration model. No SSO tax. All features are included. Use up to 50 runs/month for free.

**[⬆️ Back to Top](#table-of-contents)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) - Unlimited public and private Git repos for up to 5 users with Pipelines for CI/CD
  * [Codeberg](https://codeberg.org/) - Unlimited public and private Git repos for free and open-source projects (with unlimited collaborators). Powered by [Forgejo](https://forgejo.org/). Static website hosting with [Codeberg Pages](https://codeberg.page/). CI/CD hosting with [Codeberg's CI](https://docs.codeberg.org/ci/). Translating hosting with [Codeberg Translate](https://translate.codeberg.org/). Includes Package and Container hosting, Project management, and Issue Tracking
  * [framagit.org](https://framagit.org/) - Framagit is the software forge of Framasoft based on the Gitlab software includes CI, Static Pages, Project pages and Issue tracking.
  * [GitGud](https://gitgud.io) - Unlimited private and public repositories. Free forever. Powered by GitLab & Sapphire. Includes CI/CD, Static Hosting, Container Registry, Project Management and Issue Tracking.
  * [GitHub](https://github.com/) - Unlimited public repositories and unlimited private repositories (with unlimited collaborators). Includes CI/CD, Development Environment, Static Hosting, Package and Container hosting, Project management and AI Copilot
  * [gitlab.com](https://about.gitlab.com/) - Unlimited public and private Git repos with up to 5 collaborators. Includes CI/CD, Static Hosting, Container Registry, Project Management and Issue Tracking
  * [heptapod.net](https://foss.heptapod.net/) - Heptapod is a friendly fork of GitLab Community Edition providing support for Mercurial
  * [pijul.com](https://pijul.com/) - Unlimited free and open source distributed version control system. Its distinctive feature is based on a sound theory of patches, which makes it easy to learn, use, and distribute. Solves many problems of git/hg/svn/darcs.
  * [projectlocker.com](https://projectlocker.com) - One free private project (Git and Subversion) with 50 MB of space
  * [RocketGit](https://rocketgit.com) - Repository Hosting based on Git. Unlimited Public and private repositories.
  * [savannah.gnu.org](https://savannah.gnu.org/) - Serves as a collaborative software development management system for free Software projects (for GNU Projects)
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - Serves as a collaborative software development management system for free Software projects (for non-GNU projects)

**[⬆️ Back to Top](#table-of-contents)**

## APIs, Data, and ML

  * [Abstract API](https://www.abstractapi.com) - API suite for various use cases, including IP geolocation, phone number validation, or email validation.
  * [AlphaAI](https://alphai.io/developers) - Financial news API and MCP server. Every article gets per-ticker impact analysis, a category, and a 1-10 relevance score, and SEC Form 4 insider filings are turned into scored events. The free tier includes 20 requests per minute and 100 requests per day on both REST and MCP, no card required.
  * [AnyHook](https://anyhook.net) - Inbound webhook relay: point a Stripe, GitHub or LINE bot webhook at it and it stores each event before delivering to your handler, retries automatically when your endpoint is down, and keeps a log you can replay from. Endpoints can be created from the API with no account. Free plan includes 3,000 events/month, 1 app, 3 retries and 3 days of retention, no credit card.
  * [Apify](https://www.apify.com/) - Web scraping and automation platform to create an API for any website and extract data. Ready-made scrapers, integrated proxies, and custom solutions. Free plan with $5 platform credits included every month.
  * [APITemplate.io](https://apitemplate.io) - Auto-generate images and PDF documents with a simple API or automation tools like Zapier & Airtable. No CSS/HTML is required. The free plan comes with 50 images/month and three templates.
  * [APIVerve](https://apiverve.com) - Get instant access to over 120+ APIs for free, built with quality, consistency, and reliability in mind. The free plan covers up to 50 API Tokens per month. (Possibly taken down, 2025-06-25)
  * [App AI Gateway](https://appaigateway.com/) - Gateway/proxy for calling AI providers from iOS applications without shipping provider keys or building your own backend. Only allows requests from your real app via App Attest, with rate limits and budgets per user and per app. The free plan includes 1,000 requests per month, no card required.
  * [Beeceptor](https://beeceptor.com) - No-code, cloud-based platform for mocking and debugging multi-protocol APIs (REST, SOAP, gRPC & GraphQL), providing instant servers with rules-based logic, CRUD & stateful mocking, proxying, and CORS management for faster integration and testing. The free plan includes 50 requests per day and provides a public dashboard/endpoint where anyone with the dashboard URL can view submitted requests and responses.
  * [BigDataCloud](https://www.bigdatacloud.com/) - Provides fast, accurate, and free (Unlimited or up to 10K-50K/month) APIs for modern web like IP Geolocation, Reverse Geocoding, Networking Insights, Email and Phone Validation, Client Info and more.
  * [Brave Search API](https://brave.com/search/api/) - Independent web, news, image, video search and AI/LLM context API, suitable for RAG pipelines and AI agents. Free tier includes $5 in monthly credits (credit card required for verification).
  * [Browse AI](https://www.browse.ai) - Extracting and monitoring data on the web. 1k credits per month for free, equals 1k concurrent requests.
  * [Calendarific](https://calendarific.com) - Enterprise-grade Public holiday API service for over 200 countries. The free plan includes 500 calls per month.
  * [Canopy](https://www.canopyapi.co/) - GraphQL API for Amazon.com product, search, and category data. The free plan includes 100 calls per month.
  * [CarAPI.dev](https://carapi.dev) - Comprehensive automotive data API with VIN decoding, stolen vehicle checks, vehicle valuation, inspection data, and more. Free tier includes 100 requests/month across all 9 endpoints.
  * [CatchDoms](https://catchdoms.com) - Aggregator of expired and dropping domain listings from 16 marketplaces, with SEO enrichment (backlinks, Trust Flow, Wayback history) and a quality score. Free plan: 10 unlocked listings, 5 favorites, 3 saved searches. 7-day Pro trial on signup includes full REST API and MCP server access.
  * [Cloudmersive](https://cloudmersive.com/) - Utility API platform with full access to expansive API Library including Document Conversion, Virus Scanning, and more with 600 calls/month, North America AZ only, 2.5MB maximum file size.
  * [CometML](https://www.comet.com/site/) - The MLOps platform for experiment tracking, model production management, model registry, and complete data lineage, covering your workflow from training to production. Free for individuals and academics.
  * [Commerce Layer](https://commercelayer.io) - Composable commerce API that can build, place, and manage orders from any front end. The developer plan allows 100 orders per month and up to 1,000 SKUs for free.
  * [Composio](https://composio.dev/) - Integration platform for AI Agents and LLMs. Integrate over 200+ tools across the agentic internet.
  * [Conversion Tools](https://conversiontools.io/) - Online File Converter for documents, images, video, audio, and eBooks. REST API is available. Libraries for Node.js, PHP, Python. Support files up to 50 GB (for paid plans). The free tier is limited by file size (20MB) and number of conversions (30/Day, 300/Month).
  * [cors.dev](https://cors.dev/) - CORS proxy for calling third-party APIs from frontend code: prefix any HTTPS URL with `https://proxy.cors.dev/`. Free without signup or an API key for GET and HEAD requests, 600 requests per minute per IP, responses up to 1 MiB, no monthly quota.
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - API and Microservice to provides a wide range of information including countries, regions, provinces, cities, postal codes, and much more. The free tier includes up to 100 requests per day.
  * [Coupler](https://www.coupler.io/) - Data integration tool that syncs between apps. It can create live dashboards and reports, transform and manipulate values, and collect and back up insights. The free plan is limited to one user, data connection, data source, and data destination. Also requires manual data refresh.
  * [CraftMyPDF](https://craftmypdf.com) - Auto-Generate PDF documents from reusable templates with a drop-and-drop editor and a simple API. The free plan comes with 100 PDFs/month and three templates.
  * [Cube](https://cube.dev/) - Cube helps data engineers and application developers access data from modern data stores, organize it into consistent definitions, and deliver it to every application. The fastest way to use Cube is with Cube Cloud, which has a free tier limited to 1,000 queries per day.
  * [CurlHub](https://curlhub.io) - Proxy service for inspecting and debugging API calls. The free plan includes 10,000 requests per month.
  * [CurrencyScoop](https://currencyscoop.com) - Realtime currency data API for fintech apps. The free plan includes 5,000 calls per month.
  * [CustomJS](https://www.customjs.io) - HTML to PDF or PDF to PNG/Text & PDF merging/extraction/merging APIs. Free tier has 600 calls a month.
  * [Data Fetcher](https://datafetcher.com) - Connect Airtable to any application or API with no code. Postman-like interface for running API requests in Airtable. Pre-built integrations with dozens of apps. The free plan includes 100 runs per month.
  * [Dataimporter.io](https://www.dataimporter.io) - Tool for connecting, cleaning, and importing data into Salesforce. Free Plan includes up to 20,000 records per month.
  * [Datalore](https://datalore.jetbrains.com) - Python notebooks by Jetbrains. Includes 10 GB of storage and 120 hours of runtime each month.
  * [DB Designer](https://www.dbdesigner.net/) - Cloud-based Database schema design and modeling tool with a free starter plan of 2 Database models and ten tables per model.
  * [DB-IP](https://db-ip.com/api/free) - Free IP geolocation API with 1k request per IP per day.lite database under the CC-BY 4.0 License is free too.
  * [DeepAR](https://developer.deepar.ai) - Augmented reality face filters for any platform with one SDK. The free plan provides up to 10 monthly active users (MAU) and tracks up to 4 faces
  * [Deepnote](https://deepnote.com) - A new data science notebook. Jupyter is compatible with real-time collaboration and running in the cloud. The free tier includes unlimited personal projects, unlimited basic machines with 5GB RAM and 2vCPU, and teams with up to 3 editors.
  * [Compare JSON](https://comparejson.com) - An online tool for comparing differences between two JSON data structures, helping you quickly locate the differences in JSON data.
  * [Disease.sh](https://disease.sh/) - A free API providing accurate data for building the Covid-19 related useful Apps.
  * [Doczilla](https://www.doczilla.app/) - SaaS API empowering the generation of screenshots or PDFs directly from HTML/CSS/JS code. The free plan allows 250 documents month.
  * [Doppio](https://doppio.sh/) - Managed API to generate and privately store PDFs and Screenshots using top rendering technology. The free plan allows 400 PDFs and Screenshots per month.
  * [Doqlo](https://doqlo.com/) - Bulk fill and mail merge PDF forms from CSV using the web app or Public API. The free plan includes 100 output PDFs/month.
  * [Dynamic Document API](https://dynamicdocumentapi.com/) - Turn data into pixel-perfect PDFs and images. The free plan includes 50 renders per month and access to 2 templates from the template gallery or your own.
  * [DynamicDocs](https://advicement.io) - Generate PDF documents with JSON to PDF API based on LaTeX templates. The free plan allows 50 API calls per month and access to a library of templates.
  * [Earnings Feed](https://earningsfeed.com/api) - Real-time SEC filings, insider trades, and institutional holdings API. Free tier includes 15 requests per minute.
  * [Estuary](https://estuary.dev/) - Real-time data integration platform for CDC, streaming, and batch data integration with 200+ managed connectors. Free plan includes 10 GB/month of data movement and up to 2 connector instances, with no time limit and no credit card required.
  * [Export SDK](https://exportsdk.com) - PDF generator API with drag-and-drop template editor that provides an SDK and no-code integrations. The free plan has 250 monthly pages, unlimited users, and three templates.
  * [Financial Data](https://financialdata.net/) - Stock market and financial data API. Free plan allows 300 requests per day.
  * [finlight](https://finlight.me) - Real-time financial news API with entity resolution (tickers, ISIN) and sentiment tagging, available over REST, WebSocket, webhooks and an MCP server. Free tier: 5,000 requests/month on both REST and MCP, 12-hour delayed articles, no card required.
  * [Firecrawl](https://www.firecrawl.dev/) - API that crawls websites and converts them into clean, LLM-ready markdown or structured data, handling JavaScript rendering, proxies, and rate limits. The free plan includes 1,000 credits per month with no credit card required.
  * [flaky](https://flakyapi.dev) - A mock API where you can paste your JSON and simulate API problems like delays, errors, failed requests, and malformed responses. 1,000 requests per day without a key, or 10,000 requests per day with a free key. There is no paid tier.
  * [Formfeed](https://formfeed.dev) - API for PDF and image generation from JSON with a simple API or automation tools like Zapier & Make. The free plan includes 100 free PDF conversions per month.
  * [FraudLabs Pro](https://www.fraudlabspro.com) - Screen an order transaction for credit card payment fraud. This REST API will detect all possible fraud traits based on the input parameters of an order. The Free Micro plan has 500 transactions per month.
  * [FreeIPAPI](https://freeipapi.com) - Free, Fast and Reliable IP Geolocation API for commercial and non-commercial users available in JSON
  * [Geolocated.io](https://geolocated.io) - IP Geolocation API with multi-continent servers, offering a free plan with 2,000 requests per day.
  * [Hex](https://hex.tech/) - a collaborative data platform for notebooks, data apps, and knowledge libraries. Free community tier with up to five projects.
  * [Hook0](https://www.hook0.com/) - Hook0 is an open-source Webhooks-as-a-service (WaaS) that makes it easy for online products to provide webhooks. Dispatch up to 100 events/day with seven days of history retention for free.
  * [Hoppscotch](https://hoppscotch.io) - A free, fast, and beautiful API request builder.
  * [HS Ping](https://hsping.com) - A multi-country HS (Harmonized System) and HTS (Harmonized Tariff System) code lookup API, with a free plan offering 100 lookups/day.
  * [huggingface.co](https://huggingface.co) - Build, train, and deploy NLP models for Pytorch, TensorFlow, and JAX. Free up to 30k input characters/mo.
  * [Insomnia](https://insomnia.rest) - Open-source API client for designing and testing APIs, it supports REST and GraphQL
  * [Inngest](https://www.inngest.com) - Durable execution and event-driven workflows for TypeScript, Python, and Go. Hobby plan is free with 50k executions/month, 5 concurrent steps, 500k events ingested, and no credit card required.
  * [Invantive Cloud](https://cloud.invantive.com/) - Access over 70 (cloud)platforms such as Exact Online, Twinfield, ActiveCampaign or Visma using Invantive SQL or OData4 (typically Power BI or Power Query). Includes data replication and exchange. Free plan for developers and implementation consultants. Free for specific platforms with limitations in data volumes.
  * [IP Geolocation API by ipwho.org](https://ipwho.org/) - 2,000 free requests per day. Fast, enterprise grade API at non-enterprise prices. Trusted by developers, corporate, government and education clients. Servers in 12+ regions.
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - IP Geolocation API from Abstract - Allows 1,000 free requests.
  * [IP Geolocation](https://ipgeolocation.io/) - IP Geolocation API - Forever free plan for developers with a 1,000 requests per day limit.
  * [ip-api](https://ip-api.com) - IP Geolocation API, Free for non-commercial use, no API key required, limited to 45 req/minute from the same IP address for the free plan.
  * [IP.City](https://ip.city) - 100 Free IP geolocation requests per day
  * [IP2Location.io](https://www.ip2location.io/) - Freemium, fast, and reliable IP geolocation API. Get data like city, coordinates, ISP, ASN, AS data and more. The free plan includes 50k credits per month. IP2Location.io also offers 500 free WHOIS and hosted domain lookups per month. See domain registration details and find domains hosted on a specific IP. Upgrade to a paid plan for more features.
  * [Proxmint GeoIP](https://proxmint.com/tools/ip-lookup) — Free IP → country/city/ASN JSON API, no key, CORS-open. MaxMind GeoLite2.
  * [ip2geo.dev](https://ip2geo.dev) - IP geolocation API to convert IP addresses into location data including city, country, timezone, ASN, and currency. The free plan includes 1,000 requests per month.
  * [IP99](https://ip99.com/) - IP risk and geolocation API with passive DNS and certificate transparency. Free without a key: 500 IP lookups/day; 10 domain/cert trial lookups/day.
  * [ipaddress.sh](https://ipaddress.sh) - Simple service to get a public IP address in different [formats](https://about.ipaddress.sh/).
  * [ipapi.is](https://ipapi.is/) - A reliable IP Address API from Developers for Developers with the best Hosting Detection capabilities that exist. The free plan offers 1000 lookups without signup.
  * [ipapi](https://ipapi.co/) - IP Address Location API by Kloudend, Inc - A reliable geolocation API built on AWS, trusted by Fortune 500. The free tier offers 30k lookups/month (1k/day) without signup.
  * [ipbase.com](https://ipbase.com) - IP Geolocation API - Forever free plan that spans 150 monthly requests.
  * [IPinfo](https://ipinfo.io/) - Fast, accurate, and free (up to 50k/month) IP address data API. Offers APIs with details on geolocation, companies, carriers, IP ranges, domains, abuse contacts, and more. All paid APIs can be trialed for free.
  * [IPLocate](https://www.iplocate.io) - IP Geolocation API, free up to 1,000 requests/day. Includes proxy/VPN/hosting detection, ASN data, IP to Company, and more. IPLocate also offers free downloadable IP to Country and IP to ASN databases in CSV or GeoIP-compatible MMDB formats.
  * [IPTrace](https://iptrace.io) - An embarrassingly simple API that provides your business with reliable and helpful IP geolocation data with 50,000 free lookups per month.
  * [JSON IP](https://getjsonip.com) - Returns the Public IP address of the client it is requested from. No registration is required for the free tier. Using CORS, data can be requested using client-side JS directly from the browser. Useful for services monitoring change in client and server IPs. Unlimited Requests.
  * [JSON to Table](https://jsontotable.org) - Convert JSON into an interactive table for quick viewing, editing, and sharing online.
  * [JSON2Video](https://json2video.com) - A video editing API to automate video marketing and social media videos, programmatically or with no code.
  * [JSONing](https://jsoning.com/api/) - Create a fake REST API from a JSON object, and customize HTTP status codes, headers, and response bodies.
  * [Jsonpage](https://jsonpage.com/en/) - Company data API for France and 13 other countries (SIREN, SIRET, VAT check). Free plan: 1,000 requests per day, no credit card.
  * [Labelixa](https://labelixa.com) - Zebra ZPL label rendering and validation API and browser viewer. Free tier includes an anonymous rendering quota and barcode generation with no watermark, no card required.
  * [LayerCall](https://www.layercall.com) - Fraud and trust scoring for an IP, email, phone, domain or device in one call, plus authorization and Web Bot Auth verification for AI agents. 1,000 lookups/month free, no card required.
  * [LoginLlama](https://loginllama.app) - A login security API to detect fraudulent and suspicious logins and notify your customers. Free for 1,000 logins per month.
  * [Market Data API](https://www.marketdata.app) - Provides real-time and historical financial data for stocks, options, mutual funds, and more. The Free Forever API tier allows for 100 daily API requests at no charge.
  * [Maxim AI](https://getmaxim.ai/) - Simulate, evaluate, and observe your AI agents. Maxim is an end-to-end evaluation and observability platform, helping teams ship their AI agents reliably and >5x faster. Free forever for indie developers and small teams (3 seats).
  * [microlink.io](https://microlink.io/) - It turns any website into data such as metatags normalization, beauty link previews, scraping capabilities, or screenshots as a service. 50 requests per day, every day free.
  * [Mintlify](https://mintlify.com) - Modern standard for API documentation. Beautiful and easy-to-maintain UI components, in-app search, and interactive playground. Free for 1 editor.
  * [MockAPI](https://www.mockapi.io/) - MockAPI is a simple tool that lets you quickly mock up APIs, generate custom data, and perform operations using a RESTful interface. MockAPI is meant to be a prototyping/testing/learning tool. One project/2 resources per project for free.
  * [Mockerito](https://mockerito.com/) - Free mock REST API service providing realistic data across 9 domains (e-commerce, finance, healthcare, education, recruitment, social media, stock markets, weather, and aviation). No mandatory signup, no API keys, unlimited requests. Perfect for frontend prototyping, API testing, learning and teaching web development.
  * [Mockfly](https://www.mockfly.dev/) - Mockfly is a trusted development tool for API mocking and feature flag management. Quickly generate and control mock APIs with an intuitive interface. The free tier offers 500 requests per day.
  * [Mocko.dev](https://mocko.dev/) - Proxy your API, choose which endpoints to mock in the cloud and inspect traffic, for free. Speed up your development and integration tests.
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) -  A free and simple tool to check your exit IP address across multiple nodes and understand how your IP appears to different global regions and services. Useful for testing rule-based DNS splitting tools such as Control D.
  * [NASdisks Drive Data API](https://www.nasdisks.com/data/) - Free, no-key, CORS-enabled API for NAS HDD/SSD specifications, per-model CMR/SMR classification, and annualized failure rates derived from Backblaze Drive Stats. Returns JSON or CSV, CC BY 4.0, no signup.
  * [Network Data Labs](https://www.networkdatalabs.com) - An IP geolocation API with accuracy radius and confidence level, ASN, and Tor, known VPN, privacy relay and hosting signals. The free plan includes 1,000 requests per day.
  * [News API](https://newsapi.org) - Search news on the web with code, and get JSON results. Developers get 100 queries free each day. Articles have a 24 hour delay.
  * [OCR.Space](https://ocr.space/) - An OCR API parses image and pdf files that return the text results in JSON format. 25,000 requests per month are free and a 1MB file size limit.
  * [OpenAPI3 Designer](https://openapidesigner.com/) - Visually create Open API 3 definitions for free.
  * [Orshot](https://orshot.com) - Automate Videos, PDFs and Images from templates via API, n8n, Zapier and AI Agents. Design templates in a visual editor (or import from Canva or Figma), then automate bulk generation from your data source. The free plan includes 100 render credits every month.
  * [Parseur](https://parseur.com) - 20 free pages/month: Extract data from PDFs, emails. AI powered. Full API access.
  * [PDF-API.io](https://pdf-api.io) - PDF Automation API, visual template editor or HTML to PDF, dynamic data integration, and PDF rendering with an API. The free plan comes with one template, 100 PDFs/month.
  * [PDFBolt](https://pdfbolt.com) - Developer-focused PDF generation API designed with privacy in mind. It offers Stripe-inspired documentation and includes 500 free PDF conversions per month.
  * [Pexafy](https://docs.pexafy.com) - Semantic image search API across 9 free photo sources (Unsplash, Pexels, Pixabay, Kaboompics & more), 9M+ photos under one JSON schema instead of one integration per source. Plain-language queries, reverse image search, filters on color, orientation and license. CORS is open on read endpoints, so it runs from the browser. The free plan includes 5,000 API requests/month and 1 key, no app review.
  * [Pixela](https://pixe.la/) - Free daystream database service. All operations are performed by API. Visualization with heat maps and line graphs is also possible.
  * [PolyDoc](https://polydoc.tech) - REST API for HTML to PDF and screenshot generation. Including templates, PDF/A and PDF/UA output, privacy-focused, and more features. The free plan includes 150 conversions/month.
  * [Posthook](https://posthook.io) - Schedule webhooks to fire at a future time with automatic retries, delivery tracking, and failure alerting. Free plan includes 1,000 webhooks per month.
  * [Postman](https://postman.com) - Simplify workflows and create better APIs - faster - with Postman, a collaboration platform for API development. Use the Postman App for free forever. Postman cloud features are also free forever with certain limits.
  * [PrefectCloud](https://www.prefect.io/cloud/) - A complete platform for dataflow automation. Free plan includes 5 deployed workflows and 500 minutes of serverless compute credits per month.
  * [Preset Cloud](https://preset.io/) - A hosted Apache Superset service. Forever free for teams of up to 5 users, featuring unlimited dashboards and charts, a no-code chart builder, and a collaborative SQL editor.
  * [ProxySentry](https://proxysentry.io/) - IP API that detects residential proxies and VPNs. ProxySentry.io offers a free tier with 10k requests per month on rapidapi.com.
  * [Publora](https://publora.com) - Publishing API: post or schedule to 10 social networks with one HTTPS call, or from an AI agent over MCP. Free forever: 15 posts/month, 3 connected accounts, all networks except X.
  * [Reducto](https://reducto.ai) - Turn any unstructured documents (PDF, XLSX, JPG, PPTX, etc.) into structured JSON data. Parse, extract data, and edit PDF forms. Free tier with 15k free credits and pay-as-you-go.
  * [Rendi](https://rendi.dev) - FFmpeg API - A REST API for FFmpeg, run FFmpeg online without handling the infrastructure. Free tier with monthly processing quota and 4 vCPUs available.
  * [RequestBin.com](https://requestbin.com) - Create a free endpoint to which you can send HTTP requests. Any HTTP requests sent to that endpoint will be recorded with the associated payload and headers so you can observe recommendations from webhooks and other services.
  * [ROIC.ai](https://www.roic.ai/) - Financial Data API: income statements, balance sheets and cash flows, and earnings call transcripts (with audio and slides) for 68k+ companies. Free tier: 5 requests/minute, 2 years of history, no credit card.
  * [Simplescraper](https://simplescraper.io) - Trigger your webhook after each operation. The free plan includes 100 cloud scrape credits.
  * [Geekflare API](https://geekflare.com/api/) - Geekflare API lets you scrape websites into Markdown, take screenshots, perform TLS scans and DNS lookups, test load times, and more. The free plan offers 500 API credits per month (e.g., 500 DNS lookups, 250 web scrapes, or 100 screenshots). See [credit mapping](https://docs.geekflare.com/api/api-credit-mapping).
  * [SmartParse](https://smartparse.io) - SmartParse is a data migration and CSV to API platform that offers time- and cost-saving developer tools. The Free tier includes 300 Processing Units per month, Browser uploads, Data quarantining, Circuit breakers, and Job Alerts.
  * [Sofodata](https://www.sofodata.com/) - Create secure RESTful APIs from CSV files. Upload a CSV file and instantly access the data via its API allowing faster application development. The free plan includes 2 APIs and 2,500 API calls per month. You don't need a credit card.
  * [Svix](https://www.svix.com/) - Webhooks as a Service. Send up to 50,000 messages/month for free.
  * [Tavily AI](https://tavily.com/) - API for online search and rapid insights and comprehensive research, with the capability of organization of research results. 1000 request/month for the Free tier with No credit card required.
  * [TemplateFox](https://pdftemplateapi.com) - PDF generation API with a visual template editor, dynamic data merging, and SDKs for 7 languages. Free plan includes 60 PDFs/month and 3 templates.
  * [The IP API](https://theipapi.com/) - IP Geolocation API with 1000 free requests / day. Provides information about the location of an IP address, including country, city, region, and more.
  * [timezone.io](https://www.timezone.io/docs/worldtimeapi) - Current time, UTC offset and DST for any time zone or IP address, compatible with the shut-down WorldTimeAPI (clients only change the host). Free with no API key or sign-up, 60 requests/minute per IP, over HTTPS or plain HTTP.
  * [TinyMCE](https://www.tiny.cloud) - rich text editing API. Core features are free for unlimited usage.
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - Offers free plan of weather API. Provides accurate and up-to-date weather forecasting with global coverage, historical data and weather monitoring solutions.
  * [Treblle](https://www.treblle.com) - Treblle helps teams build, ship, and govern APIs. With advanced API log aggregation, observability, docs, and debugging. You get all features for free, but there is a limit of up to 250k requests per month on the free tier.
  * [Trophy](https://trophy.so) - Trophy is the gamification layer for consumer apps. Use pre-built APIs and open-source UI components to ship achievements, streaks, points, leaderboards and more. Free for up to 1,000 monthly active users.
  * [UniRateAPI](https://unirateapi.com) - Real-time exchange rates for 590+ currencies and crypto. Unlimited API calls on the free plan, perfect for developers and finance apps.
  * [URLpipe](https://urlpipe.dev) - Read any page after its JavaScript runs: Markdown, screenshots, metadata, console errors and Lighthouse audits. Free 1000 credits per month.
  * [vatcheckapi.com](https://vatcheckapi.com) - Simple and free VAT number validation API. 150 free validations per month.
  * [vatnode](https://vatnode.dev) - EU VAT number validation REST API with VIES and national tax-registry fallback, returning the official VIES consultation number for audit records. Free tier of 100 validations/month, no credit card.
  * [WeatherXu](https://weatherxu.com/) - Global weather data including current conditions, hourly and daily forecasts, and weather alerts via our API. Integrating AI models and ML systems to analyze and combine multiple weather models to deliver improved forecast accuracy. Free tier includes 10,000 API calls/month.
  * [Webhooker](https://webhooker.eu/) - Webhook gateway hosted in Germany. Signature verification, retries, dead letter queue and replay. Free plan: 10,000 events per month.
  * [WebScraping.AI](https://webscraping.ai) - Simple Web Scraping API with built-in parsing, Chrome rendering, and proxies. Two thousand free API calls per month.
  * [Weights & Biases](https://wandb.ai) - The developer-first MLOps platform. Build better models faster with experiment tracking, dataset versioning, and model management. Free tier for personal projects only, with 100 GB of storage included.
  * [What Is My IP](https://whatismyip.help) - A free service to check your public IPv4 and IPv6 address and related request data through an API with different output formats for automation, scripts, and network troubleshooting.
  * [What The Diff](https://whatthediff.ai) - AI-powered code review assistant. The free plan has a limit of 25,000 monthly tokens (~10 PRs).
  * [XFlux](https://www.xfluxapi.com) - X/Twitter read REST API (profiles, search, timelines) plus account monitors. Free tier: 1,000 API calls/month, 1 monitor, instant API key. HTTP webhooks on paid plans from $19/mo.
  * [wolfram.com](https://wolfram.com/language/) - Built-in knowledge-based algorithms in the cloud.
  * [wrapapi.com](https://wrapapi.com/) - Turn any website into a parameterized API. 30k API calls per month.
  * [Zipcodebase](https://zipcodebase.com) - Free Zip Code API, access to Worldwide Postal Code Data. 5,000 free requests/month.
  * [Zuplo](https://zuplo.com/) - Free API Management platform to design, build, and deploy APIs to the Edge. Add API Key authentication, rate limiting, developer documentation and Monetization to any API in minutes. OpenAPI-native and fully-programmable with web standard apis & Typescript. The free plan offers up to 10 projects, unlimited production edge environments, 1M monthly requests, and 10GB egress.
  * [Metashot](https://metashot.io) — Open Graph (OG) social preview image generation API. Generate dynamic 1200×630 images for Twitter, LinkedIn and Facebook via URL params, edge-cached on Cloudflare Workers. Free tier: 1,000 renders/month. Paid plans from $12/month.
  * [Tinyfish](https://www.tinyfish.ai) - Free web search and fetch API with rate limits.

**[⬆️ Back to Top](#table-of-contents)**
