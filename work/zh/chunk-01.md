## 主要云服务商

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天 28 个前端实例小时、每天 9 个后端实例小时
    * Cloud Firestore - 每天 1GB 存储空间、50,000 次读取、20,000 次写入、20,000 次删除
    * Compute Engine - 1 台非抢占式 e2-micro、30GB HDD、5GB 快照存储空间（仅限特定区域）、每月从北美到所有区域目的地的 1 GB 网络出站流量（不含中国和澳大利亚）
    * Cloud Storage - 5GB，1GB 网络出站流量
    * Cloud Shell - 基于 Web 的 Linux shell/主 IDE，含 5GB 持久存储空间。每周上限 60 小时
    * Cloud Pub/Sub - 每月 10GB 消息
    * Cloud Functions - 每月 200 万次调用（含后台调用和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求、360,000 GB-秒内存、180,000 vCPU-秒计算时间、每月从北美的 1 GB 网络出站流量
    * Google Kubernetes Engine - 一个区域级集群免收集群管理费。每个用户节点按 Compute Engine 标准价格计费
    * BigQuery - 每月 1 TB 查询量、每月 10 GB 存储空间
    * Cloud Build - 每天 120 构建分钟
    * [Google Colab](https://colab.research.google.com/) - 免费的 Jupyter Notebooks 开发环境。
    * [Kaggle](https://www.kaggle.com/) - 提供 4 个 CPU 核心和 30 GB RAM 的 Jupyter Notebooks 计算环境，无任何每周使用限制。通过手机号验证后，可免费添加 1 块 Nvidia Tesla P100 GPU 或 2 块 Nvidia Tesla T4 GPU，使用上限为每周 30 GPU 小时。通过身份验证后，可免费使用 1 个含 96 个 CPU 核心和 330 GB RAM 的 TPU v3-8，使用上限为每周 20 小时。详见 [Technical Specifications](https://www.kaggle.com/docs/notebooks#technical-specifications)。
    * [ChromeRemoteDesktop](https://remotedesktop.google.com/) - 免费远程桌面应用，设备数量几乎没有限制，由 Google 所有，因此需要 Google 账号。
    * [Google AI Studio](https://aistudio.google.com/) - 可免费使用 Gemini 3.5 Flash、Gemini 3 Flash 和 Gemma 4 模型。Flash 的免费额度为每分钟 5 次请求、每天 20 次请求、每分钟 250k 输入 token。Gemma 4 的免费额度为每分钟 30 次请求、每天 14.4k 次请求，但每分钟（仅）16k 输入 token。
    * 完整详细清单 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出站流量、10M HTTP 请求和每月 2M 次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和告警、1M API 请求、5GB 日志数据摄取和 5GB 日志数据归档
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100min 构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活跃用户、每账号 5k 个仓库、每月 50GB 存储空间和每月 10K 次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 条活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL 数据库
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月 3.000 条消息（6 个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100 万次消息队列请求
    * 完整详细清单 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动或 API 应用（每天 60 CPU 分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、精简地搭建开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月存储 50,000 个用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 个活跃用户、不限数量的私有 Git 仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 10 个免费并行作业，开源项目在 Linux、macOS 和 Windows 上不限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8,000 条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 750 小时、15GB 数据处理和 5 条规则（12 个月）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万条推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB 出站流量（12 个月）
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储空间和 1000 RU 预配吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - 构建、部署和托管静态应用与无服务器函数，含免费 SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 100GB LRS 事务（Azure Files）、5GB Blob 存储空间、10GB LRS 归档存储、2x64GB SSD（12 个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费额度包含有限事务数
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于 AI 的搜索与索引服务，10,000 个文档以内免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管 Kubernetes 服务，集群管理免费
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月 100K 操作
    * [Service Bus](https://azure.microsoft.com/products/service-bus/) - 750 小时和 1300 万次操作的 Standard 层基础单元（12 个月）
    * 完整详细清单 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2 台基于 AMD 的计算 VM，每台 1/8 OCPU 和 1 GB 内存
       - 2 个基于 Arm 的 Ampere A1 核心和 12 GB 内存，可用作 1 台 VM 或最多 2 台 VM
       - 实例在被[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时会被回收
    * 块存储卷 - 2 个卷，共 200 GB（用于计算）
    * 对象存储 - 10 GB
    * 负载均衡器 - 1 个实例，10 Mbps
    * 数据库 - 2 个数据库，每个 20 GB
    * 监控 - 5 亿个摄取数据点、10 亿个检索数据点
    * 带宽 - 每月 10 TB 出站流量，基于 x64 的 VM 速度限制为 50 Mbps，基于 ARM 的 VM 为 500 Mbps * 核心数
    * 公网 IP - VM 2 个 IPv4，负载均衡器 1 个 IPv4
    * 通知 - 每月 100 万次投递选项，每月发送 1000 封邮件
    * 完整详细清单 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant 数据库 - 1 GB 数据存储空间
    * Db2 数据库 - 100MB 数据存储空间
    * API Connect - 每月 50,000 次 API 调用
    * 可用性监控 - 每月 300 万个数据点
    * 日志分析 - 每天 500MB 日志
    * 完整详细清单 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [Application Services](https://www.cloudflare.com/plans/) - 不限数量域名的免费 DNS、DDoS 防护、CDN 以及免费 SSL、防火墙规则和页面规则、WAF、机器人缓解、免费不限量速率限制 - 每个域名 1 条规则、分析、邮件转发
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 个用户、24 小时活动日志、3 个网络位置
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) - 可通过隧道将本地运行的 HTTP 端口暴露到 trycloudflare.com 上的随机子域名，使用 [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)，无需账号。更多功能（TCP 隧道、负载均衡、VPN）见 [Zero Trust](https://www.cloudflare.com/products/zero-trust/) 免费套餐。
    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 全球网络上免费部署无服务器代码 - 每天 100k 次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 100k 次读取请求、每天 1000 次写入请求、每天 1000 次删除请求、每天 1000 次列举请求、1 GB 存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB、每月 100 万次 A 类操作、每月 1000 万次 B 类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天 500 万行读取、每天 100k 行写入、1 GB 存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署 Web 应用。每月 500 次构建、100 个自定义域名、集成 SSL、不限数量的可访问席位、不限数量的预览部署，并通过集成 Cloudflare Workers 获得全栈能力。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月 1TB 免费（出站）流量。

  * [Zoho](https://www.zoho.com) - 最初是邮件服务商，现在提供一整套服务，其中部分有免费套餐。提供免费套餐的服务清单：
    * [Catalyst by Zoho](https://catalyst.zoho.com) - PaaS/全栈云平台，提供慷慨的[免费额度](https://catalyst.zoho.com/free-tier.html)
    * [Zoho Apptics](https://www.zoho.com/apptics/) - 统一且可执行的产品分析，用于监控性能、分析用户行为并为移动、Web 和桌面应用收集反馈，提供慷慨的永久免费套餐。
    * [Email](https://zoho.com/mail) - 5 个用户免费。每用户 5GB 存储空间，附件上限 25 MB，一个域名。
    * [Zoho Assist](https://www.zoho.com/assist) - Zoho Assist 的永久免费套餐包含 1 个并发远程支持许可，以及 5 个无人值守计算机许可的访问权，时长不限，专业和个人用途均可用。
    * [Sprints](https://zoho.com/sprints) - 5 个用户免费，5 个项目 & 500MB 存储空间。
    * [Docs](https://zoho.com/docs) - 5 个用户免费，上传上限 1 GB，5GB 存储空间。附带 Zoho Office Suite（Writer、Sheets & Show）。
    * [Projects](https://zoho.com/projects) - 3 个用户免费，2 个项目，附件上限 10 MB。同样的套餐适用于 [Bugtracker](https://zoho.com/bugtracker)。
    * [Connect](https://zoho.com/connect) - 团队协作，25 个用户免费，含 3 个群组、3 个自定义应用、3 个看板、3 个手册和 10 个集成，以及频道、事件 & 论坛。
    * [Meeting](https://zoho.com/meeting) - 会议最多 3 位参会者 & 10 位网络研讨会观众。
    * [Vault](https://zoho.com/vault) - 个人可使用的密码管理。
    * [Showtime](https://zoho.com/showtime) - 又一款会议软件，用于最多 5 位参与者的远程培训。
    * [Notebook](https://zoho.com/notebook) - Evernote 的免费替代品。
    * [Wiki](https://zoho.com/wiki) - 3 个用户免费，50 MB 存储空间，页面不限，zip 备份，RSS & Atom 订阅，访问控制 & 可自定义 CSS。
    * [Subscriptions](https://zoho.com/subscriptions) - 循环账单管理，20 个客户/订阅 & 1 个用户免费，所有支付托管由 Zoho 完成。保留最近 40 条订阅指标
    * [Checkout](https://zoho.com/checkout) - 产品账单管理，3 个页面 & 最多 50 笔支付。
    * [Desk](https://zoho.com/desk) - 客户支持管理，含 3 个坐席、私有知识库和邮件工单。与 [Assist](https://zoho.com/assist) 集成可获得 1 位远程技术员 & 5 台无人值守计算机。
    * [Cliq](https://zoho.com/cliq) - 团队聊天软件，100 GB 存储空间，用户不限，每频道 100 个用户 & SSO。
    * [Campaigns](https://zoho.com/campaigns) - 邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建器
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约排程

**[⬆️ 返回顶部](#table-of-contents)**

## 云管理方案

  * [Brainboard](https://www.brainboard.co) - 以可视化方式端到端构建和管理云基础设施的协作方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（含 1 台部署服务器、1 个静态站点），Cloud 66 提供在任何云上构建、部署和扩展应用所需的一切，无需为“服务器那点事”头疼。
  * [Cloud Cost Analyzer](https://cca.dragonfractal.com/) - 通过 92 项自动检查扫描 AWS 和 Azure 的成本浪费，包括空闲 NAT 网关、gp2 卷和过度预配的实例。在只读、面向开发者的 CLI 中获取节省估算。免费额度覆盖单个 AWS 账号每次扫描最多 5,000 个资源。付费套餐增加资源 ID 和确切的修复步骤。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。在我们的免费额度下，一位开发者（单用户）可部署不限数量的静态站点、Web 服务和环境。免费额度每月提供 10 次作业执行，包含预览和自动部署。
  * [Parsivex](https://www.parsivex.com) - Parsivex 扫描你的 AWS 账号，找出空闲 EC2、未挂载 EBS、规格过大 RDS、过期快照、NAT 网关过度使用等。免费额度为单个 AWS 账号每月一次扫描，返回每月浪费总额和分类明细。付费套餐提供逐项发现和定期重扫。
  * [Pulumi](https://www.pulumi.com/) - 现代基础设施即代码平台，可使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [scalr.com](https://scalr.com/) - Scalr 是一款 Terraform 自动化与协作（TACO）产品，用于改善由 Terraform 管理的基础设施和配置的协作与自动化。完整的 Terraform CLI 支持、OPA 集成和层级配置模型。无 SSO 附加费。包含所有功能。每月最多免费使用 50 次运行。

**[⬆️ 返回顶部](#table-of-contents)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) - 最多 5 个用户的不限数量公有和私有 Git 仓库，含用于 CI/CD 的 Pipelines
  * [Codeberg](https://codeberg.org/) - 为免费和开源项目提供不限数量的公有和私有 Git 仓库（协作者不限）。由 [Forgejo](https://forgejo.org/) 驱动。使用 [Codeberg Pages](https://codeberg.page/) 提供静态网站托管。使用 [Codeberg's CI](https://docs.codeberg.org/ci/) 提供 CI/CD 托管。使用 [Codeberg Translate](https://translate.codeberg.org/) 提供翻译托管。包含软件包和容器托管、项目管理与问题跟踪
  * [framagit.org](https://framagit.org/) - Framagit 是 Framasoft 的软件托管平台，基于 Gitlab 软件，包含 CI、静态页面、项目页面和问题跟踪。
  * [GitGud](https://gitgud.io) - 不限数量的私有和公有仓库。永久免费。由 GitLab & Sapphire 驱动。包含 CI/CD、静态托管、容器镜像仓库、项目管理和问题跟踪。
  * [GitHub](https://github.com/) - 不限数量的公有仓库和不限数量的私有仓库（协作者不限）。包含 CI/CD、开发环境、静态托管、软件包和容器托管、项目管理和 AI Copilot
  * [gitlab.com](https://about.gitlab.com/) - 不限数量的公有和私有 Git 仓库，最多 5 位协作者。包含 CI/CD、静态托管、容器镜像仓库、项目管理和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) - Heptapod 是 GitLab 社区版的友好分支，提供对 Mercurial 的支持
  * [pijul.com](https://pijul.com/) - 不限量、免费且开源的分布式版本控制系统。其特色基于健全的补丁理论，易于学习、使用和分发。解决 git/hg/svn/darcs 的许多问题。
  * [projectlocker.com](https://projectlocker.com) - 1 个免费私有项目（Git 和 Subversion），50 MB 空间
  * [RocketGit](https://rocketgit.com) - 基于 Git 的仓库托管。公有和私有仓库不限数量。
  * [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目的协作软件开发管理系统（面向 GNU 项目）
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目的协作软件开发管理系统（面向非 GNU 项目）

**[⬆️ 返回顶部](#table-of-contents)**

## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) - 适用于多种场景的 API 套件，包括 IP 地理定位、电话号码验证或邮箱验证。
  * [AlphaAI](https://alphai.io/developers) - 金融新闻 API 和 MCP 服务器。每篇文章都有按股票代码的影响分析、分类和 1-10 的相关性评分，SEC Form 4 内部人申报会转化为带评分的事件。免费额度包含 REST 和 MCP 上每分钟 20 次请求、每天 100 次请求，无需信用卡。
  * [AnyHook](https://anyhook.net) - 入站 webhook 中继：把 Stripe、GitHub 或 LINE 机器人 webhook 指向它，它会在投递到你的处理程序之前存储每个事件，当你的端点宕机时自动重试，并保留可重放的日志。无需账号即可通过 API 创建端点。免费套餐包含每月 3,000 个事件、1 个应用、3 次重试和 3 天保留期，无需信用卡。
  * [Apify](https://www.apify.com/) - 网页抓取和自动化平台，可为任何网站创建 API 并提取数据。现成的抓取器、集成代理和自定义方案。免费套餐每月包含 $5 平台额度。
  * [APITemplate.io](https://apitemplate.io) - 通过简单的 API 或 Zapier & Airtable 等自动化工具自动生成图片和 PDF 文档。无需 CSS/HTML。免费套餐含每月 50 张图片和 3 个模板。
  * [APIVerve](https://apiverve.com) - 免费即刻访问 120+ 个 API，注重质量、一致性和可靠性。免费套餐每月最多 50 个 API Token。（可能已下线，2025-06-25）
  * [App AI Gateway](https://appaigateway.com/) - 用于从 iOS 应用调用 AI 服务商的网关/代理，无需随包分发服务商密钥，也无需自建后端。仅通过 App Attest 允许来自你真实应用的请求，并按用户和按应用设置速率限制与预算。免费套餐包含每月 1,000 次请求，无需信用卡。
  * [Beeceptor](https://beeceptor.com) - 无代码的云端平台，用于模拟和调试多协议 API（REST、SOAP、gRPC & GraphQL），提供带基于规则逻辑的即时服务器、CRUD & 有状态模拟、代理和 CORS 管理，加快集成与测试。免费套餐包含每天 50 次请求，并提供公开的仪表盘/端点，任何拿到仪表盘 URL 的人都能查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代 Web 提供快速、准确且免费的 API（不限量或每月最多 10K-50K），如 IP 地理定位、反向地理编码、网络洞察、邮箱和电话验证、客户端信息等。
  * [Brave Search API](https://brave.com/search/api/) - 独立的 Web、新闻、图片、视频搜索以及 AI/LLM 上下文 API，适用于 RAG 流水线和 AI 智能体。免费额度包含每月 $5 额度（验证需信用卡）。
  * [Browse AI](https://www.browse.ai) - 在 Web 上提取和监控数据。每月免费 1k 额度，相当于 1k 次并发请求。
  * [Calendarific](https://calendarific.com) - 面向 200 多个国家/地区的企业级公共假日 API 服务。免费套餐包含每月 500 次调用。
  * [Canopy](https://www.canopyapi.co/) - 用于 Amazon.com 商品、搜索和分类数据的 GraphQL API。免费套餐包含每月 100 次调用。
  * [CarAPI.dev](https://carapi.dev) - 全面的汽车数据 API，含 VIN 解码、盗抢车辆查询、车辆估值、检测数据等。免费额度包含全部 9 个端点每月 100 次请求。
  * [CatchDoms](https://catchdoms.com) - 聚合来自 16 个交易市场的过期和待删除域名清单，附 SEO 增强信息（外链、Trust Flow、Wayback 历史）和质量评分。免费套餐：10 条已解锁清单、5 个收藏、3 个已保存搜索。注册即享 7 天 Pro 试用，包含完整的 REST API 和 MCP 服务器访问。
  * [Cloudmersive](https://cloudmersive.com/) - 实用 API 平台，可完整访问庞大的 API 库，包括文档转换、病毒扫描等，每月 600 次调用，仅限北美可用区，文件最大 2.5MB。
  * [CometML](https://www.comet.com/site/) - MLOps 平台，用于实验跟踪、模型生产管理、模型注册和完整数据血缘，覆盖从训练到生产的整个工作流。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合电商 API，可从任何前端构建、下单和管理订单。开发者套餐免费支持每月 100 个订单和最多 1,000 个 SKU。
  * [Composio](https://composio.dev/) - 面向 AI 智能体和 LLM 的集成平台。可集成智能体互联网上 200+ 个工具。
  * [Conversion Tools](https://conversiontools.io/) - 文档、图片、视频、音频和电子书的在线文件转换器。提供 REST API。有 Node.js、PHP、Python 库。支持最大 50 GB 的文件（付费套餐）。免费额度受文件大小（20MB）和转换次数（每天 30 次、每月 300 次）限制。
  * [cors.dev](https://cors.dev/) - 用于从前端代码调用第三方 API 的 CORS 代理：给任意 HTTPS URL 加上前缀 `https://proxy.cors.dev/`. 无需注册或 API 密钥即可免费用于 GET 和 HEAD 请求，每 IP 每分钟 600 次请求，响应最大 1 MiB，无每月配额。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供广泛信息的 API 和微服务，包括国家、地区、省份、城市、邮政编码等。免费额度包含每天最多 100 次请求。
  * [Coupler](https://www.coupler.io/) - 在应用之间同步的数据集成工具。可创建实时仪表盘和报表，转换和处理数值，收集并备份洞察。免费套餐限于 1 个用户、1 个数据连接、1 个数据源和 1 个数据目标。还需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 使用拖拽编辑器和简单的 API 从可复用模板自动生成 PDF 文档。免费套餐含每月 100 个 PDF 和 3 个模板。
  * [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用开发者访问现代数据存储中的数据，将其整理为一致的定义，并交付给每个应用。使用 Cube 最快的方式是 Cube Cloud，其免费额度限于每天 1,000 次查询。
  * [CurlHub](https://curlhub.io) - 用于检查和调试 API 调用的代理服务。免费套餐包含每月 10,000 次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 面向金融科技应用的实时货币数据 API。免费套餐包含每月 5,000 次调用。
  * [CustomJS](https://www.customjs.io) - HTML 转 PDF 或 PDF 转 PNG/文本 & PDF 合并/提取/合并 API。免费额度每月 600 次调用。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可把 Airtable 连接到任何应用或 API。类似 Postman 的界面，可在 Airtable 中执行 API 请求。与数十个应用有预置集成。免费套餐包含每月 100 次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清洗数据并导入 Salesforce 的工具。免费套餐包含每月最多 20,000 条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains 出品的 Python notebook。每月包含 10 GB 存储空间和 120 小时运行时间。
  * [DB Designer](https://www.dbdesigner.net/) - 基于云的数据库结构设计与建模工具，免费入门套餐含 2 个数据库模型、每个模型 10 张表。
  * [DB-IP](https://db-ip.com/api/free) - 免费 IP 地理定位 API，每 IP 每天 1k 次请求。采用 CC-BY 4.0 许可的 lite 数据库也免费。
  * [DeepAR](https://developer.deepar.ai) - 一套 SDK 即可为任何平台提供增强现实面部滤镜。免费套餐提供最多 10 个月活用户（MAU），最多跟踪 4 张人脸
  * [Deepnote](https://deepnote.com) - 新型数据科学 notebook。兼容 Jupyter，支持实时协作和云端运行。免费额度包含不限数量的个人项目、不限数量的 5GB RAM 与 2vCPU 基础机器，以及最多 3 位编辑者的团队。
  * [Compare JSON](https://comparejson.com) - 用于比较两个 JSON 数据结构差异的在线工具，帮助你快速定位 JSON 数据中的差异。
  * [Disease.sh](https://disease.sh/) - 提供准确数据的免费 API，用于构建 Covid-19 相关的实用应用。
  * [Doczilla](https://www.doczilla.app/) - SaaS API，可直接从 HTML/CSS/JS 代码生成截图或 PDF。免费套餐允许每月 250 个文档。
  * [Doppio](https://doppio.sh/) - 托管 API，使用顶级渲染技术生成并私密存储 PDF 和截图。免费套餐允许每月 400 个 PDF 和截图。
  * [Doqlo](https://doqlo.com/) - 使用 Web 应用或公共 API 从 CSV 批量填充和邮件合并 PDF 表单。免费套餐包含每月 100 个输出 PDF。
  * [Dynamic Document API](https://dynamicdocumentapi.com/) - 将数据转化为像素级精确的 PDF 和图片。免费套餐包含每月 50 次渲染，并可访问模板库中的 2 个模板或使用自己的模板。
  * [DynamicDocs](https://advicement.io) - 基于 LaTeX 模板，通过 JSON 转 PDF API 生成 PDF 文档。免费套餐允许每月 50 次 API 调用，并可访问模板库。
  * [Earnings Feed](https://earningsfeed.com/api) - 实时 SEC 申报、内部人交易和机构持股 API。免费额度包含每分钟 15 次请求。
  * [Estuary](https://estuary.dev/) - 实时数据集成平台，支持 CDC、流式和批量数据集成，含 200+ 个托管连接器。免费套餐包含每月 10 GB 数据移动和最多 2 个连接器实例，无时间限制，无需信用卡。
  * [Export SDK](https://exportsdk.com) - PDF 生成器 API，配拖拽式模板编辑器，提供 SDK 和无代码集成。免费套餐有每月 250 页、用户不限和 3 个模板。
  * [Financial Data](https://financialdata.net/) - 股市和金融数据 API。免费套餐允许每天 300 次请求。
  * [finlight](https://finlight.me) - 实时金融新闻 API，带实体解析（股票代码、ISIN）和情绪标注，可通过 REST、WebSocket、webhook 和 MCP 服务器访问。免费额度：REST 和 MCP 上每月 5,000 次请求，文章延迟 12 小时，无需信用卡。
  * [Firecrawl](https://www.firecrawl.dev/) - 抓取网站并将其转换为干净、可直接供 LLM 使用的 markdown 或结构化数据的 API，可处理 JavaScript 渲染、代理和速率限制。免费套餐包含每月 1,000 额度，无需信用卡。
  * [flaky](https://flakyapi.dev) - 一个模拟 API，可粘贴你的 JSON 并模拟延迟、错误、失败请求和畸形响应等 API 问题。无密钥每天 1,000 次请求，使用免费密钥每天 10,000 次请求。没有付费套餐。
  * [Formfeed](https://formfeed.dev) - 通过简单的 API 或 Zapier & Make 等自动化工具从 JSON 生成 PDF 和图片的 API。免费套餐包含每月 100 次免费 PDF 转换。
  * [FraudLabs Pro](https://www.fraudlabspro.com) - 筛查订单交易中的信用卡支付欺诈。该 REST API 会根据订单输入参数检测所有可能的欺诈特征。免费 Micro 套餐每月 500 笔交易。
  * [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的 IP 地理定位 API，面向商业和非商业用户，以 JSON 提供
  * [Geolocated.io](https://geolocated.io) - 部署多洲服务器的 IP 地理定位 API，提供每天 2,000 次请求的免费套餐。
  * [Hex](https://hex.tech/) - 面向 notebook、数据应用和知识库的协作式数据平台。免费社区版最多 5 个项目。
  * [Hook0](https://www.hook0.com/) - Hook0 是一个开源的 Webhooks-as-a-service（WaaS），让在线产品轻松提供 webhook。免费每天最多派发 100 个事件，历史记录保留 7 天。
  * [Hoppscotch](https://hoppscotch.io) - 免费、快速且美观的 API 请求构建器。
  * [HS Ping](https://hsping.com) - 多国 HS（协调制度）和 HTS（协调关税制度）编码查询 API，免费套餐提供每天 100 次查询。
  * [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月最多 30k 输入字符免费。
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 API，支持 REST 和 GraphQL
  * [Inngest](https://www.inngest.com) - 面向 TypeScript、Python 和 Go 的持久化执行和事件驱动工作流。Hobby 套餐免费，每月 50k 次执行、5 个并发步骤、摄取 500k 个事件，无需信用卡。
  * [Invantive Cloud](https://cloud.invantive.com/) - 使用 Invantive SQL 或 OData4（通常是 Power BI 或 Power Query）访问 70 多个（云）平台，如 Exact Online、Twinfield、ActiveCampaign 或 Visma。包含数据复制和交换。面向开发者和实施顾问的免费套餐。特定平台免费，但数据量有限制。
  * [IP Geolocation API by ipwho.org](https://ipwho.org/) - 每天 2,000 次免费请求。以非企业级价格提供快速的企业级 API。深受开发者、企业、政府和教育客户信任。服务器分布于 12+ 个区域。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - Abstract 出品的 IP 地理定位 API，允许 1,000 次免费请求。
  * [IP Geolocation](https://ipgeolocation.io/) - IP 地理定位 API，面向开发者的永久免费套餐，每天 1,000 次请求上限。
  * [ip-api](https://ip-api.com) - IP 地理定位 API，非商业用途免费，无需 API 密钥，免费套餐限制同一 IP 地址每分钟 45 次请求。
  * [IP.City](https://ip.city) - 每天 100 次免费 IP 地理定位请求
  * [IP2Location.io](https://www.ip2location.io/) - 免费增值、快速且可靠的 IP 地理定位 API。可获取城市、坐标、ISP、ASN、AS 数据等信息。免费套餐包含每月 50k 额度。IP2Location.io 还每月提供 500 次免费 WHOIS 和托管域名查询。可查看域名注册详情，查找托管在特定 IP 上的域名。升级到付费套餐以获得更多功能。
  * [Proxmint GeoIP](https://proxmint.com/tools/ip-lookup) — 免费的 IP → 国家/城市/ASN JSON API，无需密钥，CORS 开放。MaxMind GeoLite2。
  * [ip2geo.dev](https://ip2geo.dev) - IP 地理定位 API，可将 IP 地址转换为位置数据，包括城市、国家、时区、ASN 和货币。免费套餐包含每月 1,000 次请求。
  * [IP99](https://ip99.com/) - IP 风险和地理定位 API，带被动 DNS 和证书透明度。无需密钥免费：每天 500 次 IP 查询；每天 10 次域名/证书试用查询。
  * [ipaddress.sh](https://ipaddress.sh) - 以不同[格式](https://about.ipaddress.sh/)获取公网 IP 地址的简单服务。
  * [ipapi.is](https://ipapi.is/) - 开发者打造、服务开发者的可靠 IP 地址 API，具备现有最强的托管检测能力。免费套餐提供 1000 次查询，无需注册。
  * [ipapi](https://ipapi.co/) - Kloudend, Inc 出品的 IP 地址定位 API，构建于 AWS 之上的可靠地理定位 API，受财富 500 强企业信任。免费额度提供每月 30k 次查询（每天 1k），无需注册。
  * [ipbase.com](https://ipbase.com) - IP 地理定位 API，永久免费套餐，每月 150 次请求。
  * [IPinfo](https://ipinfo.io/) - 快速、准确且免费（每月最多 50k）的 IP 地址数据 API。提供包含地理定位、公司、运营商、IP 段、域名、滥用联系人等详情的 API。所有付费 API 均可免费试用。
  * [IPLocate](https://www.iplocate.io) - IP 地理定位 API，每天最多 1,000 次请求免费。包含代理/VPN/托管检测、ASN 数据、IP 转公司等。IPLocate 还提供免费可下载的 IP 转国家、IP 转 ASN 数据库，格式为 CSV 或 GeoIP 兼容的 MMDB。
  * [IPTrace](https://iptrace.io) - 一个简单得令人惊讶的 API，为你的业务提供可靠有用的 IP 地理定位数据，每月 50,000 次免费查询。
  * [JSON IP](https://getjsonip.com) - 返回发起请求的客户端的公网 IP 地址。免费额度无需注册。借助 CORS，可直接在浏览器中用客户端 JS 请求数据。适用于监控客户端和服务器 IP 变化的服务。请求不限量。
  * [JSON to Table](https://jsontotable.org) - 将 JSON 转换为交互式表格，便于在线快速查看、编辑和分享。
  * [JSON2Video](https://json2video.com) - 视频编辑 API，可通过编程或无代码方式自动化视频营销和社交媒体视频。
  * [JSONing](https://jsoning.com/api/) - 从 JSON 对象创建模拟 REST API，并可自定义 HTTP 状态码、头部和响应体。
  * [Jsonpage](https://jsonpage.com/en/) - 面向法国和其他 13 个国家的公司数据 API（SIREN、SIRET、VAT 校验）。免费套餐：每天 1,000 次请求，无需信用卡。
  * [Labelixa](https://labelixa.com) - Zebra ZPL 标签渲染与校验 API 及浏览器查看器。免费额度包含匿名渲染配额和无水印条码生成，无需信用卡。
  * [LayerCall](https://www.layercall.com) - 一次调用即可为 IP、邮箱、电话、域名或设备给出欺诈与信任评分，并为 AI 智能体提供授权和 Web Bot Auth 验证。每月 1,000 次查询免费，无需信用卡。
  * [LoginLlama](https://loginllama.app) - 登录安全 API，可检测欺诈和可疑登录并通知你的客户。每月 1,000 次登录免费。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费 API 层允许每天 100 次 API 请求，不收费。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观测你的 AI 智能体。Maxim 是端到端评估与可观测性平台，帮助团队可靠且快 5 倍以上地交付 AI 智能体。独立开发者和小团队（3 个席位）永久免费。
  * [microlink.io](https://microlink.io/) - 将任何网站转化为数据，如元标签规范化、精美链接预览、抓取能力或截图即服务。每天 50 次请求，天天免费。
  * [Mintlify](https://mintlify.com) - API 文档的现代标准。美观且易于维护的 UI 组件、应用内搜索和交互式调试面板。1 位编辑者免费。
  * [MockAPI](https://www.mockapi.io/) - MockAPI 是一个简单工具，可快速模拟 API、生成自定义数据，并通过 RESTful 接口执行操作。MockAPI 定位为原型开发/测试/学习工具。免费 1 个项目，每项目 2 个资源。
  * [Mockerito](https://mockerito.com/) - 免费模拟 REST API 服务，跨 9 个领域（电商、金融、医疗、教育、招聘、社交媒体、股市、天气和航空）提供逼真数据。无需强制注册、无 API 密钥、请求不限量。非常适合前端原型开发、API 测试以及 Web 开发的教学与学习。
  * [Mockfly](https://www.mockfly.dev/) - Mockfly 是用于 API 模拟和功能开关管理的可信开发工具。通过直观界面快速生成和控制模拟 API。免费额度提供每天 500 次请求。
  * [Mocko.dev](https://mocko.dev/) - 免费代理你的 API，在云端选择要模拟的端点并检查流量。加速你的开发和集成测试。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) - 一个免费简单的工具，可跨多个节点检查你的出口 IP 地址，了解你的 IP 在不同全球区域和服务中呈现的样子。适用于测试 Control D 等基于规则的 DNS 分流工具。
  * [NASdisks Drive Data API](https://www.nasdisks.com/data/) - 免费、无需密钥、支持 CORS 的 API，提供 NAS HDD/SSD 规格、各型号 CMR/SMR 分类，以及基于 Backblaze Drive Stats 推算的年化故障率。返回 JSON 或 CSV，CC BY 4.0，无需注册。
  * [Network Data Labs](https://www.networkdatalabs.com) - IP 地理定位 API，提供精度半径和置信度、ASN，以及 Tor、已知 VPN、隐私中继和托管信号。免费套餐包含每天 1,000 次请求。
  * [News API](https://newsapi.org) - 用代码在 Web 上搜索新闻，获取 JSON 结果。开发者每天免费 100 次查询。文章有 24 小时延迟。
  * [OCR.Space](https://ocr.space/) - OCR API 解析图片和 pdf 文件，以 JSON 格式返回文本结果。每月 25,000 次请求免费，文件大小限制 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) - 免费以可视化方式创建 Open API 3 定义。
  * [Orshot](https://orshot.com) - 通过 API、n8n、Zapier 和 AI 智能体从模板自动化生成视频、PDF 和图片。在可视化编辑器中设计模板（或从 Canva、Figma 导入），再从数据源批量自动生成。免费套餐每月包含 100 次渲染额度。
  * [Parseur](https://parseur.com) - 每月 20 页免费：从 PDF、邮件中提取数据。AI 驱动。完整 API 访问。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，可视化模板编辑器或 HTML 转 PDF、动态数据集成，以及通过 API 渲染 PDF。免费套餐含 1 个模板、每月 100 个 PDF。
  * [PDFBolt](https://pdfbolt.com) - 面向开发者的 PDF 生成 API，设计时注重隐私。提供受 Stripe 启发的文档，每月包含 500 次免费 PDF 转换。
  * [Pexafy](https://docs.pexafy.com) - 跨 9 个免费图库（Unsplash、Pexels、Pixabay、Kaboompics 等）的语义图片搜索 API，9M+ 张照片统一在一个 JSON schema 下，无需为每个来源单独集成。支持自然语言查询、以图搜图，以及按颜色、方向和许可筛选。读端点开放 CORS，可直接在浏览器中运行。免费套餐包含每月 5,000 次 API 请求和 1 个密钥，无需应用审核。
  * [Pixela](https://pixe.la/) - 免费的日流数据库服务。所有操作均通过 API 完成。还可进行热力图和折线图可视化。
  * [PolyDoc](https://polydoc.tech) - 用于 HTML 转 PDF 和截图生成的 REST API。包含模板、PDF/A 和 PDF/UA 输出、注重隐私等更多功能。免费套餐包含每月 150 次转换。
  * [Posthook](https://posthook.io) - 安排 webhook 在未来某个时间触发，带自动重试、投递跟踪和失败告警。免费套餐包含每月 1,000 个 webhook。
  * [Postman](https://postman.com) - 使用 Postman 这一 API 开发协作平台，简化工作流，更快创建更好的 API。Postman 应用永久免费。Postman 云端功能也在一定限制内永久免费。
  * [PrefectCloud](https://www.prefect.io/cloud/) - 完整的数据流自动化平台。免费套餐包含 5 个已部署工作流和每月 500 分钟无服务器计算额度。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。最多 5 个用户的团队永久免费，提供不限数量的仪表盘和图表、无代码图表构建器和协作式 SQL 编辑器。
  * [ProxySentry](https://proxysentry.io/) - 可检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10k 次请求的免费额度。
  * [Publora](https://publora.com) - 发布 API：通过一次 HTTPS 调用，或从 AI 智能体经 MCP，向 10 个社交网络发布或定时发布内容。永久免费：每月 15 条帖子、3 个已连接账号、除 X 外的所有网络。
  * [Reducto](https://reducto.ai) - 将任何非结构化文档（PDF、XLSX、JPG、PPTX 等）转换为结构化 JSON 数据。解析、提取数据和编辑 PDF 表单。免费额度含 15k 免费额度，之后按量付费。
  * [Rendi](https://rendi.dev) - FFmpeg API - 面向 FFmpeg 的 REST API，在线运行 FFmpeg 而无需管理基础设施。免费额度含每月处理配额和 4 个可用 vCPU。
  * [RequestBin.com](https://requestbin.com) - 创建一个免费端点，向其发送 HTTP 请求。发送到该端点的任何 HTTP 请求都会连同负载和头部一起记录，便于你观察来自 webhook 和其他服务的请求。
  * [ROIC.ai](https://www.roic.ai/) - 金融数据 API：68k+ 家公司的利润表、资产负债表和现金流量表，以及财报电话会议记录（含音频和幻灯片）。免费额度：每分钟 5 次请求、2 年历史数据，无需信用卡。
  * [Simplescraper](https://simplescraper.io) - 每次操作后触发你的 webhook。免费套餐包含 100 次云端抓取额度。
  * [Geekflare API](https://geekflare.com/api/) - Geekflare API 可将网站抓取为 Markdown、截图、执行 TLS 扫描和 DNS 查询、测试加载时间等。免费套餐每月提供 500 个 API 额度（例如 500 次 DNS 查询、250 次网页抓取或 100 次截图）。参见[额度映射](https://docs.geekflare.com/api/api-credit-mapping)。
  * [SmartParse](https://smartparse.io) - SmartParse 是数据迁移和 CSV 转 API 平台，提供省时省钱的开发者工具。免费额度包含每月 300 个处理单元、浏览器上传、数据隔离、熔断器和作业告警。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件即可通过其 API 立即访问数据，加快应用开发。免费套餐包含 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
  * [Svix](https://www.svix.com/) - Webhooks as a Service。免费每月最多发送 50,000 条消息。
  * [Tavily AI](https://tavily.com/) - 用于在线搜索、快速洞察和全面研究的 API，具备研究结果整理能力。免费额度每月 1000 次请求，无需信用卡。
  * [TemplateFox](https://pdftemplateapi.com) - PDF 生成 API，配可视化模板编辑器、动态数据合并和 7 种语言的 SDK。免费套餐包含每月 60 个 PDF 和 3 个模板。
  * [The IP API](https://theipapi.com/) - IP 地理定位 API，每天 1000 次免费请求。提供 IP 地址位置信息，包括国家、城市、地区等。
  * [timezone.io](https://www.timezone.io/docs/worldtimeapi) - 提供任何时区或 IP 地址的当前时间、UTC 偏移和夏令时，兼容已关闭的 WorldTimeAPI（客户端只需更改主机）。免费且无需 API 密钥或注册，每 IP 每分钟 60 次请求，支持 HTTPS 或纯 HTTP。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能免费且不限使用量。
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供天气 API 的免费套餐。提供全球覆盖、历史数据和天气监控方案的准确且最新的天气预报。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、交付和治理 API。具备高级 API 日志聚合、可观测性、文档和调试能力。所有功能免费，但免费额度每月最多 250k 次请求。
  * [Trophy](https://trophy.so) - Trophy 是面向消费者应用的游戏化层。使用预构建 API 和开源 UI 组件即可上线成就、连续记录、积分、排行榜等。最多 1,000 个月活用户免费。
  * [UniRateAPI](https://unirateapi.com) - 590+ 种货币和加密货币的实时汇率。免费套餐 API 调用不限量，非常适合开发者和金融应用。
  * [URLpipe](https://urlpipe.dev) - 在页面 JavaScript 执行后读取任意页面：Markdown、截图、元数据、控制台错误和 Lighthouse 审计。每月免费 1000 额度。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的 VAT 号验证 API。每月 150 次免费验证。
  * [vatnode](https://vatnode.dev) - EU VAT 号验证 REST API，带 VIES 和各国税务登记处兜底，返回官方的 VIES 查询编号用于审计记录。免费额度每月 100 次验证，无需信用卡。
  * [WeatherXu](https://weatherxu.com/) - 通过我们的 API 提供全球天气数据，包括当前状况、逐小时和逐日预报以及天气预警。集成 AI 模型和 ML 系统，分析并组合多个天气模型以提升预报准确度。免费额度包含每月 10,000 次 API 调用。
  * [Webhooker](https://webhooker.eu/) - 托管在德国的 webhook 网关。签名验证、重试、死信队列和重放。免费套餐：每月 10,000 个事件。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取 API，内置解析、Chrome 渲染和代理。每月 2,000 次免费 API 调用。
  * [Weights & Biases](https://wandb.ai) - 开发者优先的 MLOps 平台。通过实验跟踪、数据集版本管理和模型管理更快构建更好的模型。免费额度仅限个人项目，包含 100 GB 存储空间。
  * [What Is My IP](https://whatismyip.help) - 免费服务，可通过 API 以不同输出格式查询你的公网 IPv4 和 IPv6 地址及相关请求数据，适用于自动化、脚本和网络排查。
  * [What The Diff](https://whatthediff.ai) - AI 驱动的代码审查助手。免费套餐限制每月 25,000 token（约 10 个 PR）。
  * [XFlux](https://www.xfluxapi.com) - X/Twitter 读取 REST API（资料、搜索、时间线）以及账号监控。免费额度：每月 1,000 次 API 调用、1 个监控、即时 API 密钥。付费套餐提供 HTTP webhook，$19/月起。
  * [wolfram.com](https://wolfram.com/language/) - 云端内置的基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任何网站转化为参数化 API。每月 30k 次 API 调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮政编码 API，可访问全球邮政编码数据。每月 5,000 次免费请求。
  * [Zuplo](https://zuplo.com/) - 免费的 API 管理平台，可在边缘设计、构建和部署 API。几分钟内为任何 API 添加 API Key 认证、速率限制、开发者文档和变现能力。OpenAPI 原生，可用 Web 标准 API 和 TypeScript 完全编程。免费套餐提供最多 10 个项目、不限数量的生产边缘环境、每月 1M 次请求和 10GB 出站流量。
  * [Metashot](https://metashot.io) — Open Graph（OG）社交预览图生成 API。通过 URL 参数为 Twitter、LinkedIn 和 Facebook 生成动态 1200×630 图片，在 Cloudflare Workers 上边缘缓存。免费额度：每月 1,000 次渲染。付费套餐 $12/月起。
  * [Tinyfish](https://www.tinyfish.ai) - 免费的网页搜索与抓取 API，带速率限制。

**[⬆️ 返回顶部](#table-of-contents)**
