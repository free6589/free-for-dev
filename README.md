# free-for.dev

开发者与开源作者现在有大量提供免费额度的服务，但要把它们找齐、做出明智的选择，需要花不少时间。

这是一份收录软件（SaaS、PaaS、IaaS 等）以及其他提供免费开发者额度的产品的清单。

这份清单的范围仅限于基础设施开发者（系统管理员、DevOps 实践者等）可能用得上的东西。我们喜欢外面所有的免费服务，但保持主题聚焦更好。界线有时很模糊，所以这份清单是带有取舍的；如果我没有接受你的贡献，请不要觉得被冒犯。

这份清单来自 1600 多人提交的 Pull Request、评审和想法。你也可以通过向 [Pull Requests](https://github.com/ripienaar/free-for-dev) 提交贡献来帮忙，添加更多服务，或移除那些已经变更或停止提供的服务。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这份清单只收录 as-a-Service 形态的服务，不收录自托管软件。要符合条件，服务必须提供免费额度，而不只是免费试用。如果免费额度是按时间计算的，时长至少要满一年。我们也会从安全角度评估免费额度：支持 SSO 没问题，但我不会接受把 TLS 限制为仅付费套餐可用的服务。

> 本页是 [free-for-dev](https://github.com/ripienaar/free-for-dev) 的**中文翻译版**，原文由 ripienaar 与 1600 多位贡献者共同维护，内容以英文原版为准。中文译文可能滞后于上游更新，如发现翻译问题欢迎提 Issue。如果这份清单对你有帮助，欢迎给原项目点个 Star。

## 目录

  * [主要云服务商](#主要云服务商)
  * [云管理方案](#云管理方案)
  * [源代码仓库](#源代码仓库)
  * [API、数据与机器学习](#api、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [团队与协作工具](#团队与协作工具)
  * [CMS](#cms)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索与浏览](#代码搜索与浏览)
  * [CI 与 CD](#ci-与-cd)
  * [测试](#测试)
  * [安全与 PKI](#安全与-pki)
  * [认证、授权与用户管理](#认证、授权与用户管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息与流式传输](#消息与流式传输)
  * [日志管理](#日志管理)
  * [翻译管理](#翻译管理)
  * [监控](#监控)
  * [崩溃与异常处理](#崩溃与异常处理)
  * [搜索](#搜索)
  * [教育与职业发展](#教育与职业发展)
  * [邮件](#邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式 AI](#生成式-ai)
  * [CDN 与防护](#cdn-与防护)
  * [PaaS](#paas)
  * [BaaS](#baas)
  * [低代码平台](#低代码平台)
  * [Web 托管](#web-托管)
  * [DNS](#dns)
  * [域名](#域名)
  * [IaaS](#iaas)
  * [托管数据服务](#托管数据服务)
  * [隧道、WebRTC、Web Socket 服务器及其他路由器](#隧道、webrtc、web-socket-服务器及其他路由器)
  * [问题追踪与项目管理](#问题追踪与项目管理)
  * [存储与媒体处理](#存储与媒体处理)
  * [设计与 UI](#设计与-ui)
  * [地图数据可视化](#地图数据可视化)
  * [软件包构建系统](#软件包构建系统)
  * [IDE 与代码编辑](#ide-与代码编辑)
  * [分析、事件与统计](#分析、事件与统计)
  * [访客会话录制](#访客会话录制)
  * [国际手机号码验证 API 与 SDK](#国际手机号码验证-api-与-sdk)
  * [支付与计费集成](#支付与计费集成)
  * [Docker 相关](#docker-相关)
  * [开发者博客站点](#开发者博客站点)
  * [评论平台](#评论平台)
  * [截图 API](#截图-api)
  * [Flutter 相关以及无需 Mac 构建 iOS 应用](#flutter-相关以及无需-mac-构建-ios-应用)
  * [隐私管理](#隐私管理)
  * [杂项](#杂项)
  * [远程桌面工具](#远程桌面工具)
  * [其他免费资源](#其他免费资源)

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

**[⬆️ 返回顶部](#目录)**

## 云管理方案

  * [Brainboard](https://www.brainboard.co) - 以可视化方式端到端构建和管理云基础设施的协作方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（含 1 台部署服务器、1 个静态站点），Cloud 66 提供在任何云上构建、部署和扩展应用所需的一切，无需为“服务器那点事”头疼。
  * [Cloud Cost Analyzer](https://cca.dragonfractal.com/) - 通过 92 项自动检查扫描 AWS 和 Azure 的成本浪费，包括空闲 NAT 网关、gp2 卷和过度预配的实例。在只读、面向开发者的 CLI 中获取节省估算。免费额度覆盖单个 AWS 账号每次扫描最多 5,000 个资源。付费套餐增加资源 ID 和确切的修复步骤。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。在我们的免费额度下，一位开发者（单用户）可部署不限数量的静态站点、Web 服务和环境。免费额度每月提供 10 次作业执行，包含预览和自动部署。
  * [Parsivex](https://www.parsivex.com) - Parsivex 扫描你的 AWS 账号，找出空闲 EC2、未挂载 EBS、规格过大 RDS、过期快照、NAT 网关过度使用等。免费额度为单个 AWS 账号每月一次扫描，返回每月浪费总额和分类明细。付费套餐提供逐项发现和定期重扫。
  * [Pulumi](https://www.pulumi.com/) - 现代基础设施即代码平台，可使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [scalr.com](https://scalr.com/) - Scalr 是一款 Terraform 自动化与协作（TACO）产品，用于改善由 Terraform 管理的基础设施和配置的协作与自动化。完整的 Terraform CLI 支持、OPA 集成和层级配置模型。无 SSO 附加费。包含所有功能。每月最多免费使用 50 次运行。

**[⬆️ 返回顶部](#目录)**

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

**[⬆️ 返回顶部](#目录)**

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

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) - 面向 Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库的私有与公开制品仓库。公开项目免费。
  * [jitpack.io](https://jitpack.io/) - 为 GitHub 上的 JVM 和 Android 项目提供 Maven 仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) - 构建与扩展 AI 模型，开发、训练和部署 AI 应用；免费套餐：公开项目、5Gb 存储空间、基础实例。
  * [RepoFlow](https://repoflow.io) - RepoFlow 简化包管理，支持 npm、PyPI、Docker、Go、Helm 等。云端免费试用包含 10GB 存储空间、10GB 带宽、100 个包和不限用户；自托管版本仅限个人使用。
  * [RepoForge](https://repoforge.io) - 面向 Python、Debian、NPM 包和 Docker 镜像仓库的私有云端托管仓库。开源/公开项目可使用免费套餐。
  * [repsy.io](https://repsy.io) - 1 GB 免费私有/公开 Maven 仓库。

**[⬆️ 返回顶部](#目录)**

## 团队与协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人与协作代码。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的集成式书签管理器、标签页管理器和任务管理器，提供可自定义的在线桌面并支持文件夹协作。
  * [Braid](https://www.braidchat.com/) - 为团队设计的聊天应用。公开访问群组免费，不限用户数、历史记录和集成。同时提供可自托管的开源版本。
  * [Calendly](https://calendly.com) - Calendly 是用于建立联系和安排会议的工具。免费套餐为每位用户提供 1 个日历连接和不限次数的会话。同时提供桌面端和移动端应用。
  * [cally.com](https://cally.com/) - 为会议找到合适的时间和日期。使用简单，适合小团队和大群体。
  * [cDox](https://cdox.ca) - 托管在加拿大的私有文档编辑器。编写、排版、协作并发布文档，生成简洁的公开链接。数据绝不用于 AI 训练。免费套餐包含 50 MB 存储空间、最多 3 个公开链接，以及导出为 PDF、Word 和 Markdown。
  * [Chanty.com](https://chanty.com/) - Chanty 是 Slack 的又一个替代品。为小团队（最多 10 人）提供永久免费套餐，包含不限数量的公开和私密会话、可搜索的历史记录、不限次数的 1:1 语音通话、不限数量的语音消息、十个集成，以及每个团队 20 GB 存储空间。
  * [DevToolLab](https://devtoollab.com) - 在线开发者工具，免费使用全部基础工具，支持每个工具自动保存一条记录、标准处理速度和社区支持。
  * [Dexio](https://dexio.wiki) - 所有 AI 代理共同读写的共享 wiki，让每个代理都从相同的上下文开始，你可以看到它们知道什么。页面和代理数量不限，单个用户免费。
  * [Discord](https://discord.com/) - 支持公开/私密房间的聊天。具备 Markdown 文本、语音、视频和屏幕共享功能。不限用户数，免费使用。
  * [Dubble](https://dubble.so/) - 免费的分步指南创建工具。截图、记录流程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) - 与团队实时交流协作。支持 IDE 结对编程、终端共享、语音、视频和屏幕共享。小团队免费。
  * [element.io](https://element.io/) - 基于 Matrix 构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音和视频通话，并可轻松与其他服务集成。
  * [Enchant](https://www.enchant.com) - 全渠道客户沟通平台。免费额度包含聊天组件、电子邮件通讯、个人简介链接聚合页等。
  * [evernote.com](https://evernote.com/) - 用于整理信息的工具。分享笔记并与他人协作
  * [Fibery](https://fibery.io/) - 互联工作区平台。单用户免费，磁盘空间最多 2 GB。
  * [Fibo](https://fibo.dev) - 面向敏捷团队的免费在线实时 Scrum Poker 工具，成员数量不限，可估算故事点以加快规划。
  * [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理和问题跟踪平台。可创建公开看板、设置 webhook、使用卡片盖章，并跟踪不限数量的用户——最多 1000 个条目免费。
  * [flat.social](https://flat.social) - 用于团队会议和休闲社交的可交互自定义空间。会议数量不限，最多 8 个并发用户免费。
  * [flock.com](https://flock.com) - 让团队更快速沟通的方式。免费且不限消息、频道、用户、应用和集成
  * [GhostChat](https://ghostchat.dev) - 以隐私为先的网站实时聊天组件（约 15KB，无 Cookie，无追踪）。免费套餐包含 1 个站点、不限消息数、内置 AI 聊天机器人（每月 25 条回复）、30 天历史记录、Gmail 会话串接、预设回复和推送通知。无需信用卡。
  * [GitBook](https://www.gitbook.com/) - 用于沉淀和记录技术知识的平台——从产品文档到内部知识库和 API。个人开发者可使用免费套餐。
  * [GitDailies](https://gitdailies.com) - 每天生成团队在 GitHub 上的提交和 Pull Request 活动报告。包含 Push 可视化、同伴认可系统和自定义告警构建器。免费额度包含不限用户、三个仓库和 3 个告警配置。
  * [gitter.im](https://gitter.im/) - 面向 GitHub 的聊天工具。公开和私密房间不限，最多 25 人的团队免费
  * [gokanban.io](https://gokanban.io) - 基于语法的免注册看板，便于快速使用。免费且无限制。
  * [Hackmd.io](https://hackmd.io/) - 针对 markdown 格式文档/文件的实时协作与写作工具。类似 Google Docs，但面向 markdown 文件。“notes”数量免费且不限，但私密笔记与模板的协作者（被邀请者）数量[将受到限制](https://hackmd.io/pricing)。
  * [HeySpace](https://hey.space) - 集聊天、日历、时间线和视频通话于一体的任务管理工具。最多 5 个用户免费。
  * [Huly](https://huly.io/) - 一体化项目管理平台（Linear、Jira、Slack、Notion、Motion 的替代品）——不限用户，每个工作区 10GB 存储空间，10GB 视频（音频）流量。
  * [Keybase](https://keybase.io/) - Keybase 是 Slack 的 FOSS 替代品；它保障每个人的聊天和文件安全，无论是家庭、社区还是公司。
  * [Knocket](https://trtc.io/solutions/knocket) - 面向独立开发者和小型团队的永久免费联络层：网站和移动应用（iOS/Android/Flutter/React Native，通过 WebView）的实时聊天组件、可分享的联络页（Linktree 风格，含社交账号、预约链接和博客），以及统一的 Telegram/电子邮件收件箱。可直接在 Telegram 中回复（无需后台面板）。会议日程安排、多语言、明暗主题。配套的开源 AI 自动回复代理。无广告，无席位限制。
  * [Linkinize](https://linkinize.com) - 面向团队的书签管理器，支持标签、多工作区和协作。免费套餐包含 4 个工作区和 10 名团队成员。
  * [Lockitbot](https://www.lockitbot.com/) - 在 Slack 内预留并锁定共享资源，例如房间、开发环境、服务器等。最多 2 个资源免费
  * [meet.jit.si](https://meet.jit.si/) - 一键发起视频通话和屏幕共享，免费使用
  * [MergeMe](https://mergeme.dev/) - MergeMe 将 GitHub/GitLab 的 PR/MR 以一张持续更新的卡片直接带入 Slack。它会附加 CI 状态、镜像评论、@提及、提醒等。最多 5 名开发者的团队和 1 个频道映射免费。
  * [Miro](https://miro.com/) - 面向分布式团队的可扩展、安全、跨设备、企业级协作白板。提供免费增值套餐。
  * [Notion](https://www.notion.so/) - Notion 是一款支持 markdown 的笔记与协作应用，集成了任务、wiki 和数据库。公司将该应用描述为面向笔记、项目管理和任务管理的一体化工作区。除跨平台应用外，它还可通过大多数网页浏览器访问。
  * [Nuclino](https://www.nuclino.com) - 轻量级协作 wiki，承载团队的全部知识、文档和笔记。免费套餐包含所有基础功能、最多 50 个条目和 5GB 存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，内置视频聊天、画板和在线代码编辑器，可在浏览器中编译并运行代码。一键即可创建远程面试房间。
  * [paste.sh](https://paste.sh/) - 一个基于 JavaScript 和 Crypto 的简单粘贴站点。
  * [Pastefy](https://pastefy.app/) - 美观简洁的 Pastebin，可选客户端加密、多标签粘贴、API、语法高亮编辑器等。
  * [Pendulums](https://pendulums.io/) - Pendulums 是一款免费的时间追踪工具，凭借易用的界面和有价值的统计，帮助你更好地管理时间。
  * [Pin Feed](https://pinfeed.io/) - Pin Feed 是一款网站反馈工具，可直接在客户的线上网站上发表评论。最多 3 个项目、500 MB 存储空间免费。客户无需账号即可留下反馈。
  * [Proton Pass](https://proton.me/pass) - 密码管理器，内置电子邮件别名、2FA 验证器、共享和通行密钥。可在网页端、浏览器扩展、移动应用和桌面端使用。
  * [Pullflow](https://pullflow.com) - Pullflow 提供 AI 增强平台，用于跨 GitHub、Slack 和 VS Code 的代码审查协作。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用。不限用户和消息历史，永久免费。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 面向团队的简易工时表和工时追踪应用。免费套餐提供工时追踪和报告生成功能，最多 10 个用户。
  * [Raindrop.io](https://raindrop.io) - 面向 macOS、Windows、Android、iOS 和 Web 的私密安全书签应用。免费且书签与协作数量不限。
  * [Reezn.io](https://reezn.io/) - 面向团队的规格驱动开发工作流：把审查左移，让问题在写代码之前就被发现，而不是在代码审查中堆积。过程中逐步构建业务知识图谱，供 AI 代理用于后续功能。免费套餐：3 个席位、1 个项目、每月 5 个功能。
  * [Revolt.chat](https://revolt.chat/) - 尊重隐私的开源 [Discord](https://discord.com/) 替代品。它还免费提供 Discord 的大部分专有功能。Revolt 是一款安全、快速且 100% 免费的一体化应用，所有功能均免费。与大多数主流聊天应用不同，它还支持（官方与非官方）插件。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix 联邦、与其他应用的桥接、不限消息量和完整消息历史。
  * [ruttl.com](https://ruttl.com/) - 最佳一体化反馈工具，可收集数字反馈并审查网站、PDF 和图片。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费屏幕共享工具，可直接在浏览器中与协作者共享屏幕，无需下载或注册。完全免费。
  * [seafile.com](https://www.seafile.com/) - 私有或云端存储、文件共享、同步、讨论。云版本仅 1 GB
  * [Sharry](https://sharry.live/) - 通过浏览器进行屏幕共享，无需下载，无需安装。适用于结对编程、演示或远程支持。免费额度：无需账号、5 分钟会话、1 位观看者。
  * [SiteDots](https://sitedots.com/) - 直接在网站上为网站项目分享反馈，无需模拟、画布或变通方案。功能完整的免费额度。
  * [Slab](https://slab.com/) - 面向团队的现代知识管理服务。最多 10 个用户免费。
  * [slack.com](https://slack.com/) - 不限用户免费使用，但有部分功能限制
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游供应商的状态页吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作应用。最多 3 个墙面、不限用户和 1 GB 存储空间免费。
  * [MeetBackdrops](https://meetbackdrops.com) - 适用于 Zoom、Microsoft Teams 和 Google Meet 视频通话的免费高清虚拟背景。1,000+ 个工作室设计的场景，无需注册。
  * [talky.io](https://talky.io/) - 免费群组视频聊天。匿名。点对点。无需插件、注册或付费
  * [Teamcamp](https://www.teamcamp.app) - 面向软件开发公司的一体化项目管理应用。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持带泳道的看板和完整的 Scrum 实施。集成工时追踪。五个用户和三个项目组合免费。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进团队开发流程。包含面向远程优先团队的全功能休假管理。最多 5 人的小组免费。
  * [TeamSort](https://teamsort.world) - 免费工具，可对共享列表投票并共同排序条目。几秒内创建排序选择投票——无需注册。
  * [Telegram](https://telegram.org/) - Telegram 适合所有需要快速可靠消息和通话的人。商务用户和小型团队可能会喜欢其大群组、用户名、桌面应用和强大的文件共享选项。
  * [Tencent RTC](https://trtc.io/) - 腾讯实时音视频（TRTC）提供群组音视频通话解决方案。首年每月 10,000 分钟免费。
  * [TimeCamp](https://www.timecamp.com/) - 面向不限用户的免费工时追踪软件。可与 Jira、Trello、Asana 等项目管理工具轻松集成。
  * [tldraw.com](https://tldraw.com) -  免费的开源白板和绘图工具，具备智能箭头、吸附、便签和 SVG 导出功能。多人模式支持协作编辑。还提供免费的官方 VS Code 扩展。
  * [transfernow](https://www.transfernow.net/) - 最简单、最快速、最安全的文件传输与共享界面。无需强制订阅即可发送照片、视频和其他大文件。
  * [Tugboat](https://tugboat.qa) - 为每个 pull request 提供预览，自动化且可按需触发。所有人免费，非营利组织可获赠 Nano 套餐。
  * [twist.com](https://twist.com) - 适合异步协作的团队沟通应用，让对话保持有条理且切题。提供免费套餐和不限套餐。符合条件的团队可享折扣。
  * [userforge.com](https://userforge.com/) - 互联的在线人物画像、用户故事和上下文映射。帮助设计与开发保持同步，最多 3 个人物画像和两名协作者免费。
  * [UserNote](https://getusernote.com/) - 用于收集最受期待功能的用户反馈工具，免费版支持最多 50 个功能想法和不限票数。
  * [Visual Debug](https://visualdebug.com) - 用于改善客户与开发沟通的可视化反馈工具
  * [Webex](https://www.webex.com/) - 视频会议，免费套餐每次会议 40 分钟、最多 100 名参会者。
  * [Webvizio](https://webvizio.com) - 网站反馈工具、网站审查软件和缺陷报告工具，可直接在线上网站和 Web 应用、图片、PDF 及设计文件上简化 Web 开发协作。
  * [whereby.com](https://whereby.com/) - 一键发起视频通话，免费使用（原名 appear.in）
  * [windmill.dev](https://windmill.dev/) - Windmill 是一个开源开发者平台，可用最少的 Python 和 Typescript 脚本快速构建生产级多步自动化和内部应用。作为免费用户，你最多可以创建并加入三个非高级工作区。
  * [wistia.com](https://wistia.com/) - 视频托管，提供观众分析、高清视频分发和帮助了解访客的营销工具，25 个视频，以及 Wistia 品牌播放器
  * [wormhol.org](https://www.wormhol.org/) - 简单直接的文件共享服务。可与任意数量的对等方共享最大 5GB 的文件，数量不限。
  * [Wormhole](https://wormhole.app/) - 共享最大 5GB 的文件，端到端加密最长 24 小时。对于超过 5 GB 的文件，它使用点对点传输直接发送。
  * [zoom.us](https://zoom.us/) - 提供安全的视频和网络会议附加功能。免费套餐限制为 40 分钟。
  * [Zulip](https://zulip.com/) - 实时聊天，采用独特的类电子邮件会话模型。免费套餐包含 10,000 条消息的搜索历史和最多 5 GB 的文件存储空间。同时提供可自托管的开源版本。
  * [RightFeature](https://rightfeature.com/) - 轻松收集客户反馈，把客户反馈转化为产品路线图。收集、排序并交付真正对用户重要的功能。
  * [Zeitio](https://zeitio.com/) - 面向自由职业者和小型团队的工时追踪与开票。免费套餐包含 1 个用户、3 个活跃项目和每月 3 张发票。

**[⬆️ 返回顶部](#目录)**

## CMS

  * [Contentful](https://www.contentful.com/) - 无头 CMS。云端内容管理与分发 API。附带一个免费的 Community 空间，包含五个用户、25K 条记录、48 个内容类型、2 个语言区域。
  * [Cosmic](https://www.cosmicjs.com/) - 无头 CMS 和 API 工具包。为开发者提供免费个人套餐。
  * [Crystallize](https://crystallize.com) - 支持电商的无头 PIM。内置 GraphQL API。免费版包含不限用户、1000 个目录条目、每月 5 GB 带宽和每月 25k 次 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费额度。DatoCMS 是基于 GraphQL 的 CMS。在较低档位中，每月有 100k 次调用。
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费额度。GraphQL 优先的 API。从传统方案迁移到 GraphQL 原生的无头 CMS——以 API 优先交付全渠道内容。
  * [Prismic](https://www.prismic.io/) - 无头 CMS。内容管理界面搭配完全托管且可扩展的 API。Community 套餐为单个用户提供不限次数的 API 调用、文档、自定义类型、资源和语言区域。满足下一个项目所需的一切。开放内容/开源项目可申请更大的免费套餐。
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，提供开源编辑环境和实时托管数据存储。项目数量不限。每个项目免费包含不限管理员用户、三个非管理员用户、两个数据集、500K 次 API CDN 请求、10GB 带宽和 5GB 资源。
  * [Solo](https://soloist.ai) - 来自 Mozilla 的免费 AI 网站创建工具，只需几项简单输入即可为业务创建美观的网站。免费自定义域名，无需信用卡。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费额度。API / GraphQL 优先。开源，基于事件溯源（自动对每次变更进行版本记录）。
  * [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，可与所有现代框架配合使用。Community（免费）额度提供管理 API、可视化编辑器、十个源、自定义字段类型、国际化（不限语言/语言区域）、资源管理器（最多 2500 个资源）、图片优化服务、搜索查询、Webhook，并包含每月 250GB 流量。
  * [TinaCMS](https://tina.io/) - Forestry.io 的替代品。开源、以 Git 为后端的无头 CMS，支持 Markdown、MDX 和 JSON。基础方案免费，可供两个用户使用。
  * [WPJack](https://wpjack.com) - 不到 5 分钟即可在任意云上部署 WordPress！免费额度包含 1 台服务器、2 个站点、免费 SSL 证书和不限数量的定时任务。无时间限制或到期——你的网站，由你做主。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) - 免费的无代码应用构建工具。它提供对自动生成的后端源代码的完整访问权限，并支持不限数量的 API 和路由。免费套餐包含三个项目和五张表。
* [DhiWise](https://www.dhiwise.com/) - 将 Figma 设计转换为动态的 Flutter 和 React 应用。其代码生成技术旨在优化构建生产级移动和 Web 体验的工作流。
* [Metalama](https://www.postsharp.net/metalama) - 专用于 C# 的工具，在编译期间即时生成样板代码，以保持源代码整洁。对开源项目免费；其商业友好的免费额度包含最多三个方面。
* [Supermaven](https://www.supermaven.com/) - 面向 VS Code、JetBrains 和 Neovim 的高速 AI 代码补全插件。免费额度提供不限数量的行内补全，注重超低延迟。
* [v0.dev](https://v0.dev/) - 由 Vercel 打造，v0 使用 shadcn/ui 和 Tailwind CSS 生成便于复制粘贴的 React 代码。它采用额度制，提供 1,200 初始额度和每月 200 免费额度。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) - 编写、审查和部署代码的完整工作流)，一个用户的免费账户，以及一个含 100 MB 存储空间的仓库
  * [codacy.com](https://www.codacy.com/) - 面向 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动化代码审查，不限数量的公开和私有仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向 DevOps 的自动化基础设施即代码审查工具，可集成 GitHub、Bitbucket 和 GitLab（包括自托管）。除标准语言外，它还可分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费）
  * [codecov.io](https://codecov.io/) - 代码覆盖率工具（SaaS），开源项目免费，并可免费使用一个私有仓库
  * [CodeFactor](https://www.codefactor.io) - 面向 Git 的自动化代码审查。免费版包含不限用户、公开仓库和一个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) - AI 驱动的代码审查工具，可集成 GitHub/GitLab。免费额度包含每小时 200 个文件、每小时 3 次审查和每小时 50 个会话。开源项目永久免费。
  * [CodSpeed](https://codspeed.io) - 在 CI 流水线中自动化性能追踪。借助精确一致的指标，在部署前发现性能回归。开源项目永久免费。
  * [coveralls.io](https://coveralls.io/) - 展示测试覆盖率报告，开源项目免费
  * [deepscan.io](https://deepscan.io) - 高级静态分析，可自动发现 JavaScript 代码中的运行时错误，开源项目免费
  * [DeepSource](https://deepsource.io/) - DeepSource 持续分析源代码变更，发现并修复归入安全、性能、反模式、缺陷风险、文档和风格类别的问题。原生集成 GitHub、GitLab 和 Bitbucket。
  * [DiffText](https://difftext.com) - 即时找出两段代码之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/) - EverSQL——数据库优化领域的头号平台。自动获取关于数据库和 SQL 查询的关键洞察。
  * [gerrithub.io](https://review.gerrithub.io/) - 为 GitHub 仓库提供免费的 Gerrit 代码审查
  * [goreportcard.com](https://goreportcard.com/) - 面向 Go 项目的代码质量，开源项目免费
  * [gtmetrix.com](https://gtmetrix.com/) - 提供优化网站的报告和详尽建议
  * [HeyDeer](https://heydeer.ai/) - 面向 GitHub pull request 的 AI 代码审查。免费套餐首月包含 1,000 额度，此后每月 300 额度，含私有仓库。公开仓库审查在合理使用范围内免费。无需信用卡。
  * [holistic.dev](https://holistic.dev/) - Postgresql 优化领域的头号静态代码分析器。提供性能、安全和架构类数据库问题的自动检测服务
  * [houndci.com](https://houndci.com/) - 在 GitHub 提交上评论代码质量问题，开源项目免费
  * [prquorum.com](https://prquorum.com) - AI 代码审查 GitHub 应用，2 个仓库每月 50 次审查免费
  * [reviewable.io](https://reviewable.io/) - 面向 GitHub 仓库的代码审查，公开或个人仓库免费。
  * [scan.coverity.com](https://scan.coverity.com/) - 面向 Java、C/C++、C# 和 JavaScript 的静态代码分析，开源项目免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) - 持续检查平台，开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) - 面向 GitHub pull request 和提交的编程语言感知差异对比，公开仓库免费
  * [shields.io](https://shields.io) - 面向开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) - 面向 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 及更多语言的自动化源代码分析，开源项目免费
* [tomosu.ai](https://tomosu.ai/) - 以 0-100 的生产可靠性指数为仓库或 pull request 打分，并提供修复建议和合并结论。通过 VS Code/Cursor 插件、网页扫描和 GitHub App 的 PR 评论，一个仓库（公开或私有）免费。
  
**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段领域的 Google Keep。整理、发现和分享代码片段，配备强大的代码截图工具，支持预设模板和链接功能。
  * [libraries.io](https://libraries.io/) - 面向 32 种不同包管理器的搜索和依赖更新通知，开源项目免费
  * [Namae](https://namae.dev/) - 在 GitHub、Gitlab、Heroku、Netlify 等众多网站上搜索项目名称是否可用。
  * [tickgit.com](https://www.tickgit.com/) - 呈现 `TODO` 注释（及其他标记），以识别值得回头改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## CI 与 CD

  * [appcircle.io](https://appcircle.io) - 企业级移动 DevOps 平台，自动化移动应用的构建、测试和应用商店发布，实现更快更高效的发布周期。免费版每次构建最长 30 分钟、每月 20 次构建和 1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) - 面向 Windows 的 CD 服务，开源项目免费
  * [bitrise.io](https://www.bitrise.io/) - 面向原生或混合移动应用的 CI/CD。每月 200 次免费构建、10 分钟构建时间和两名团队成员。OSS 项目可获得 45 分钟构建时间、+1 并发和不限团队规模。
  * [buddy.works](https://buddy.works/) - CI/CD 服务，提供五个免费项目和一个并发运行（每月 120 次执行）
  * [Buildkite](https://buildkite.com) - CI 流水线对 3 个用户和每月 5k 作业分钟免费。测试分析免费
    开发者档位包含每月 100k 次测试执行，开源项目还有更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) - 数据库 CI/CD 与 DevOps。20 个用户和十个数据库实例以内免费
  * [CircleCI](https://circleci.com/) - 功能全面的免费套餐，包含托管式 CI/CD 服务的所有特性，支持 GitHub、GitLab 和 BitBucket 仓库。提供多种资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试拆分、Docker 层缓存及其他高级 CI/CD 功能。每月最长 6000 分钟执行时间免费、协作者不限，私有项目可 30 个并行作业，开源项目最多可获得 80,000 分钟免费构建时间。
  * [cirun.io](https://cirun.io) - 公开 GitHub 仓库免费
  * [codemagic.io](https://codemagic.io/) - 每月免费 500 构建分钟
  * [deployhq.com](https://www.deployhq.com/) - 1 个项目，每天十次部署（每月 30 构建分钟）
  * [LocalOps](https://localops.co/) - 在 30 分钟内将应用部署到 AWS/GCP/Azure。可在任意云上搭建标准化的应用环境，内置持续部署自动化和高级可观测性。免费套餐允许 1 个用户和 1 个应用环境。
  * [Make](https://www.make.com/en) - 该工作流自动化工具可通过界面连接应用并自动化工作流。它支持众多应用和最流行的 API。公开 GitHub 仓库免费，免费额度包含 100 Mb、1000 次操作和 15 分钟的最小间隔。
  * [Mergify](https://mergify.com) - 面向 GitHub 的工作流自动化和合并队列——公开 GitHub 仓库免费
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、跨机器分发任务乃至自动拆分 e2e 测试运行等功能，加速 CI 中的 monorepo。免费套餐支持最多 30 位贡献者，并包含充裕的 150k 额度。
  * [RunMyJob](https://runmyjob.io) - 借助实时伸缩的 Spike 实例，更智能地运行 GitHub Actions 和 GitLab CI 流水线。免费额度包含 400 vCPU 分钟、800 GB 分钟和 10 个并发作业，使用高性能运行器（每个作业 12 vCPU 和 32 GB 内存）。
  * [Shipfox](https://www.shipfox.io/) - 以 2 倍速度运行 GitHub Actions，每月免费 3.000 构建分钟。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费套餐功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、基于 Open Policy Agent 的持续资源合规检查、SAML 2.0 单点登录（SSO），以及访问公共工作池：每月最多 200 分钟
  * [Terramate](https://terramate.io/) - Terramate 是面向 Terraform、OpenTofu 和 Terragrunt 等基础设施即代码（IaC）工具的编排与管理平台。最多 2 个用户免费，包含全部功能。
  * [Terrateam](https://terrateam.io) - GitOps 优先的 Terraform 自动化，采用 pull request 驱动的工作流、通过自托管运行器实现项目隔离，以及用于有序操作的分层运行。最多 3 个用户免费。
  * [Trigger.dev](https://trigger.dev) - 开源后台作业和 AI 代理平台，具备持久任务、无超时和实时特性。免费套餐包含每月 $5 计算额度、20 个并发运行、不限任务、5 名团队成员、10 个定时任务和 1 天日志保留。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Appetize](https://appetize.io) - 直接在浏览器中使用这款基于云的 Android 手机/平板模拟器和 iPhone/iPad 模拟器测试你的 Android 与 iOS 应用。免费额度包含两个并发会话，每月 30 分钟使用时长。应用大小不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试。项目数量不限，每月 5,000 张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕获 CI 性能回归。所有公开项目免费。
  * [BugBug](https://bugbug.io/) - 轻量的 Web 应用测试自动化工具。易于上手，无需编写代码。可以在自己的电脑上免费运行不限次数的测试。云端监控和 CI/CD 集成需额外按月付费。
  * [checkbot.io](https://www.checkbot.io/) - 浏览器扩展，检测你的网站是否符合 50 多项 SEO、速度和安全性最佳实践。小型网站提供免费额度。
  * [Checkly](https://checklyhq.com) - 面向现代 DevOps 的代码优先合成监控。以远低于传统厂商的价格监控你的 API 和应用。由 Monitoring as Code 工作流和 Playwright 驱动。为开发者提供充裕的免费额度。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 供开发者和 API 测试人员使用的免费工具，用于检查某个 API 是否对给定域名启用了 CORS，并找出配置缺口。提供可执行的改进建议。
  * [cypress.io](https://www.cypress.io/) - 为任何在浏览器中运行的东西提供快速、简单且可靠的测试。Cypress Test Runner 始终免费且开源，没有限制和约束。Cypress Dashboard 对开源项目免费，最多 5 个用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) - 录制并回放浏览器中的全部操作步骤并生成脚本，免费但可选项较少
  * [gridlastic.com](https://www.gridlastic.com/) - Selenium Grid 测试，免费套餐最多 4 个并发 Selenium 节点/10 次 Grid 启动/每月 4,000 测试分钟
  * [katalon.com](https://katalon.com) - 提供测试平台，可帮助不同规模、处于不同测试成熟度阶段的团队，包括 Katalon Studio、TestOps（含免费视觉测试）、TestCloud 和 Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy 是面向开发者的功能测试工具集。录制 API 调用即可为 API 生成 E2E 测试（KTests）以及 mock 或 stub（KMocks）。开源项目免费。
  * [Lastest](https://lastest.cloud) - 快速交付，别把东西搞坏。AI 支持的视觉验证和你真正可以信任的测试。永久免费套餐：1 个项目，每月 500 运行分钟，1 个并发运行，无需信用卡。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建 API 测试和负载测试。每月可免费模拟最多 50 个并发用户，持续最多 60 分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 针对 Storybook、Ladle、Histoire stories 和 Web 应用的整体视觉回归测试。团队成员不限，开源项目完全免费，每月 7,000 张快照。
  * [OpenWebhook](https://openwebhook.co) - 临时 webhook URL 与实时检查器。无需注册。事件历史保留在浏览器中。自定义 slug 与远程转发为付费功能。
  * [pagegym.com](https://pagegym.com) - 负载行为与页面速度分析和优化工具。免费套餐提供每天 10 次测试、每周 5 个实验，以及每月最多 15 GB 数据接入。
  * [percy.io](https://percy.io) - 为任何 Web 应用、静态站点、样式指南或组件库添加视觉测试。团队成员不限，含演示应用，项目数量不限，每月 5,000 张快照。
  * [qase.io](https://qase.io) - 面向开发与 QA 团队的测试管理系统。管理测试用例、组织测试运行、执行测试、跟踪缺陷并衡量影响。免费额度包含全部核心功能，附件可用空间 500MB，最多 3 个用户。
  * [Repeato](https://repeato.app/) - 基于计算机视觉和 AI 构建的无代码移动应用测试自动化工具。
    适用于原生应用、flutter、react-native、web、ionic 以及更多应用框架。免费套餐限制为 iOS 10 个测试、Android 10 个测试，但包含付费套餐的大部分功能，包括不限次数的测试运行。
  * [Requestly](https://requestly.com/) - 开源 Chrome 扩展，用于拦截、重定向和 mock HTTP 请求。
    包含 [Debugger](https://requestly.com/products/web-debugger/)、[Mock Server](https://requestly.com/products/mock-server/)、[API Client](https://requestly.com/products/api-client/) 和 [Session Recording](https://requestly.com/products/session-book/)。可重定向 URL、修改 HTTP 头、mock API、注入自定义 JS、修改 GraphQL 请求、生成 mock API 端点、录制带网络与控制台日志的会话。免费额度内可创建最多 10 条规则。开源项目免费。
  * [Sample Files](https://mzeeshan.me/tools/sample-files) - 涵盖视频、音频、文档和压缩格式的免费测试文件合集，适用于测试与 QA。
  * [seotest.me](https://seotest.me/) - 免费页面内 SEO 网站检测工具。每天 10 次免费网站抓取。提供实用的 SEO 学习资源，以及针对任意技术栈网站改进页面内 SEO 结果的建议。
  * [Sherlo](https://sherlo.io) - 面向 React Native 应用的视觉回归测试。免费套餐：每月 1,000 张快照，iOS 与 Android 模拟器。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似 CodePen，但用于跨浏览器测试。UI-licious 让你像写用户故事一样编写测试，并提供一个免费平台 UI-licious Snippets，可在 Chrome 上运行不限次数的测试，无需注册，每次测试运行最长 3 分钟。发现 bug？可以复制测试的唯一 URL 给开发者，准确展示如何复现。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过将页面的服务端渲染版本与常规版本进行视觉对比，检查任意 URL 的 SSR（服务端渲染）情况。
  * [stateofpixel](https://stateofpixel.com) - 在 UI 回归合并之前捕获它们。你的 CI 使用 Playwright、Storybook 或任何能写出 PNG 的工具截图，由人在拉取请求上批准每处变更。开源且可自托管。免费额度最高 10 GB。
  * [testingbot.com](https://testingbot.com/) - Selenium 浏览器与设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表板，以及用 GitHub 以代码方式实施手动测试的框架。该服务[对开源免费](https://github.com/marketplace/testspace-com)，账户包含每月 450 条结果。
  * [tesults.com](https://www.tesults.com) - 测试结果报告、发布记录与测试用例管理，并提供面向 AI agent 的 MCP server。免费套餐用户不限，5 个 target，每次运行最多 100 个测试用例，结果历史保留 30 天。开源项目可享免费 Standard 套餐。
  * [UI Verify](https://uiverify.ai) - 面向 Storybook、Playwright 和 Vitest 的视觉回归测试，为编码 agent 打造。每月免费 10,000 张快照，无需信用卡。开源项目每月 50,000 张。
  * [UseWebhook.com](https://usewebhook.com) - 在浏览器中捕获并检查 webhook。可转发到 localhost，或从历史中重放。免费使用。
  * [Vaadin](https://vaadin.com) - 用 Java 或 TypeScript 构建可扩展的 UI，并使用集成工具链、组件和设计系统加快迭代、改善设计并简化开发流程。项目数量不限，含五年免费维护。
  * [VibeView](https://vibeview.io) - 基于浏览器的 iOS、Android、Apple TV 和 Android TV 模拟器，可根据录制的操作流程或自然语言指令进行 AI 驱动的测试自动化。免费额度包含两个并发会话，每月 30 分钟串流。自带 API key 可绕过附带的 AI 用量额度。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 webhook、出站 HTTP 请求或邮件。临时 URL 和邮箱地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 多种免费网络与服务器工具。
  * [kogiQA](https://kogiqa.com) - 无需选择器即可运行的 Web UI 自动化工具。每位开发者每月免费获得 500 次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与 PKI

  * [aikido.dev](https://www.aikido.dev) - 一体化应用安全平台，覆盖 SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描、EOL……免费套餐包含两个用户，可扫描 10 个仓库、1 个云、2 个容器和 1 个域名。
  * [CertKit](https://www.certkit.io/certificate-management) - 管理 SSL 证书的签发、续期与监控。可搜索 Certificate Transparency Logs。beta 结束后免费支持 3 张证书和 1 个用户。
  * [CertObserver CT Search](https://certobserver.com/ct-search) - 查找记录在 Certificate Transparency 日志中的公开 SSL/TLS 证书。CT 搜索免费，但 CT 监控不免费。
  * [CertPost](https://www.certpost.ai) - 在 443 端口或自定义端口（SMTP/IMAP）上进行实时 SSL/TLS 证书监控。读取链路上实际提供的证书，执行完整证书链验证，并在到期前通过邮件或 webhook 告警。免费额度包含永久监控 3 张证书。
  * [Corgea](https://corgea.com/) - 免费的自主安全平台，可在 20 多种语言和框架中发现、验证并修复不安全的代码和软件包。免费套餐包含 1 个用户和 2 个仓库。
  * [crypteron.com](https://www.crypteron.com/) - 云优先、对开发者友好的安全平台，防止 .NET 和 Java 应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) - 简单直观的 Web 应用，无需复杂工具或编程语言即可分析和编解码数据。堪称密码学与加密领域的瑞士军刀。所有功能均可免费使用，没有限制。如需自托管可获取开源版本。
  * [Datree](https://www.datree.io/) - 开源 CLI 工具，通过确保 manifest 和 Helm chart 遵循最佳实践以及组织策略，防止 Kubernetes 配置错误
  * [Dependabot](https://dependabot.com/) - 为 Ruby、JavaScript、Python、PHP、Elixir、
    Rust、Java（Maven 和 Gradle）、.NET、Go、Elm、Docker、Terraform、Git Submodules 和 GitHub Actions 提供自动化依赖更新。
  * [DJ Checkup](https://djcheckup.com) - 使用这款免费的自动化检查工具扫描 Django 站点的安全缺陷。该项目 fork 自 Pony Checkup 站点。
  * [Doppler](https://doppler.com/) - 通用的应用密钥与配置管理服务，支持同步到多种云服务商。免费支持五个用户，含基本访问控制。
  * [Dotenv](https://dotenv.org/) - 快速、安全地同步 .env 文件。不必再通过 Slack、邮件等不安全渠道共享 .env 文件，也不会再丢失重要的 .env 文件。最多 3 名团队成员免费。
  * [GitGuardian](https://www.gitguardian.com) - 通过自动化的密钥检测与修复，让密钥远离源码。扫描 git 仓库中 350 多种密钥和敏感文件 —— 个人及 25 名开发者以下的团队免费。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索公开 GitHub 仓库、gist、issue 和评论中的 2,000 万条泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) - 用于获取泄露事件信息的 REST API。
  * [HimitsuShell](https://himitsushell.com) - shell 脚本 DRM 编译器，通过内嵌 shell 解释器和反调试机制将 shell 脚本转换为混淆后的二进制文件（shc 的替代方案）。网页版免费不限量。
  * [hostedscan.com](https://hostedscan.com) - 面向 Web 应用、服务器和网络的在线漏洞扫描器。每月十次免费扫描。
  * [Infisical](https://infisical.com/) - 开源平台，可在团队和基础设施中管理开发者密钥：从本地开发到预发布/生产环境的第三方服务。最多 5 名开发者免费。
  * [inspect.software](https://inspect.software/) - 自动化开源仓库审计的公开记录：安全状况、可维护性、依赖健康状况和恶意软件包检查，配有版本化的方法论和等级徽章。免费额度：可完全访问所有已发布报告，对超过公共利益阈值的仓库自动覆盖（≥500 star、≥50 fork，或组织所有且 ≥250 star），可嵌入徽章，以及针对低于阈值仓库的 100 初始额度（5 次检查）。
  * [Internet.nl](https://internet.nl) - 检测是否支持 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE 等现代互联网标准
  * [IntoDNS.ai](https://intodns.ai) - DNS 与邮件安全分析器，检查 SPF、DKIM、DMARC、DNSSEC、BIMI、MTA-STS 以及 40 多个黑名单，并提供 AI 驱动的解释和修复建议。100% 免费，无需注册。
  * [letsencrypt.org](https://letsencrypt.org/) - 免费的 SSL 证书颁发机构，证书受所有主流浏览器信任
  * [meterian.io](https://www.meterian.io/) - 监控 Java、Javascript、.NET、Scala、Ruby 和 NodeJS 项目依赖中的安全漏洞。一个私有项目免费，开源项目不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) - 发现并修复站点中的安全漏洞。
  * [Otterwatch](https://otterwatch.dev/) - 每日 SSL/TLS 证书监控：到期告警（30/7/1 天）、证书链与 OCSP 吊销检查，以及证书透明签发历史。5 个域名永久免费，无需信用卡。
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、站点杀毒和针对 PHP 的服务器防火墙（WAF）。免费额度内的注册用户可获得邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) - 针对公有云基础设施的高置信度入侵指标（IOC），部分内容在 github 上提供(https://github.com/unknownhad/AWSAttacks)。完整列表可通过 API 获取
  * [pyup.io](https://pyup.io) - 监控 Python 依赖的安全漏洞并自动更新。一个私有项目免费，开源项目不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) - 发现 Web 应用漏洞，审计 OWASP 风险
  * [SikkerKey](https://sikkerkey.com) - 机器认证的密钥管理器，免费包含 2 个项目、2 台引导机器、20 个密钥和 7 天审计日志保留。
  * [Smart Grow Vault](https://vault.smart-grow.app/) - 用于管理环境变量和密钥的安全企业级平台。免费额度包含最多 3 个应用，每个项目 150 个密钥。
  * [Socket](https://socket.dev) - 面向个人开发者、小型团队和开源项目的免费供应链安全服务。包含免费应用和防火墙 CLI 工具，保护代码免受有漏洞和恶意依赖的影响。可检测 70 多种供应链风险指标。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) - 对任意 SSL Web 服务器的配置进行深度分析
  * [SubdomainWatch](https://www.subdomainwatch.com/) - 攻击面监控与 CI/CD 接管防护。提供免费的独立 DNS 扫描器、可导出 SARIF 的 GitHub Action，以及持续资产监控套餐。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费的网站安全检查与恶意软件扫描
  * [TestTLS.com](https://testtls.com) - 检测 SSL/TLS 服务的安全服务器配置、证书、证书链等。不限于 HTTPS。
  * [Virgil Security](https://virgilsecurity.com/) - 用于在数字解决方案中实现端到端加密、数据库保护、IoT 安全等的工具与服务。最多 250 个用户的应用免费。
  * [semgrep](https://semgrep.dev) - 使用 SAST 和 SCA 扫描代码中的安全问题和存在漏洞的依赖。免费额度包含最多 10 位贡献者和 10 个私有仓库（公开仓库不限）。
  * [SnapEnv](https://snapenv.io/) - 面向开发团队的安全环境变量管理器。静态数据采用 AES-256-GCM 加密，提供 CLI、Kubernetes operator 和审计日志。免费套餐永久包含 3 个项目、3 个成员，每个项目 3 个环境。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [360username](https://360username.com/) - 免费工具，可在 90 多个社交平台上搜索某个用户名以查找匹配的个人资料。
  * [Aserto](https://www.aserto.com) - 面向应用和 API 的细粒度授权服务。最多 1000 个 MAU 和 100 个 authorizer 实例免费。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成 SSO、MFA、无密码认证等。提供前端与后端应用的 SDK。最多 1000 个 MAU 和五个身份提供方免费。
  * [Auth0](https://auth0.com/) - 托管式单点登录（SSO）。免费套餐包含 25,000 个 MAU、不限数量的社交连接、一个自定义域名等。
  * [Authgear](https://www.authgear.com) - 几分钟内为你的应用带来无密码、OTP、2FA、SSO。前端全部内置。最多 5000 个 MAU 免费。
  * [Authress](https://authress.io/) - 认证登录与访问控制，任何项目的身份提供方数量不限。支持 Facebook、Google、Twitter 等。前 1000 次 API 调用免费。
  * [Authy](https://authy.com) - 多设备双因素认证（2FA），支持备份。可作为 Google Authenticator 的即插即用替代品。最多 100 次成功认证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权与访问控制，最多 100 个月活主体免费。
  * [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，以及登录、注册、用户资料等的预构建 UI 组件。免费套餐包含不限数量的应用、每个应用 50,000 个 MRU 上限、3 个仪表板席位等。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份与访问管理即服务。最多 100 个用户和一个 realm 免费。
  * [Descope](https://www.descope.com/) - 高度可定制的 AuthN 流程，同时提供无代码和 API/SDK 两种方式，免费每月 7,500 个活跃用户、50 个租户（最多 5 个 SAML/SSO 租户）。
  * [duo.com](https://duo.com/) - 面向网站或应用的双因素认证（2FA）。十个用户免费，支持全部认证方式，集成与硬件令牌不限。
  * [Frontegg](https://frontegg.com) - 面向 B2B SaaS 的客户身份：认证、SSO/SCIM、MFA、RBAC 和多租户用户管理。免费套餐包含 7,500 个 MAU
  * [Kinde](https://kinde.com/) - 简单、稳健的认证，几分钟内即可集成到产品中。入门所需的一切，含 7,500 个免费 MAU。
  * [logintc.com](https://www.logintc.com/) - 通过推送通知实现的双因素认证（2FA），十个用户免费，支持 VPN、网站和 SSH
  * [Logto](https://logto.io/) - 为你的产品开发、保护和管理用户身份 —— 同时覆盖认证与授权。最多 5,000 个 MAU 免费，并提供开源自托管方案。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth 让你在几分钟内轻松为 Web、移动端或任何应用实现无密码认证。
  * [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。最多 100 个月活用户免费。
  * [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任托管安全平台。开发者账户永久免费，包含全部安全功能、不限团队成员、200 个日活用户和每月 25k 次权限检查。
  * [Permit.io](https://permit.io) - 授权即服务提供商平台，为可扩展的微服务提供 RBAC、ABAC 和 ReBAC，支持实时更新和无代码策略 UI。1000 个月活用户免费额度。
  * [Phase Two](https://phasetwo.io) - Keycloak 开源身份与访问管理。免费 realm 最多 1000 个用户、最多 10 个 SSO 连接，基于 Phase Two 的 Keycloak 增强容器，其中包含 [Organization](https://phasetwo.io/product/organizations/) 扩展。
  * [PropelAuth](https://propelauth.com) - 用几行代码即可立即向任何规模的公司销售，最多 200 个用户和 10k 封事务邮件免费（带水印品牌：“Powered by PropelAuth”）。
  * [Scalekit](https://scalekit.com) - 面向 B2B SaaS 的企业级 SSO（SAML、OIDC）、SCIM 预配和社交登录。免费额度包含 100 万 MAU、100 个组织、1 个 SSO 连接和 1 个 SCIM 连接。
  * [Stack Auth](https://stack-auth.com) - 不将就的开源认证。最贴合开发者的方案，五分钟即可上手。可免费自托管，也提供托管 SaaS 版本，含 10k 免费月活用户。
  * [Stytch](https://www.stytch.com/) - 一体化平台，提供用于认证和反欺诈的 API 与 SDK。免费套餐包含 10,000 个月活用户、不限组织数量、5 个 SSO 或 SCIM 连接，以及 1,000 个 M2M 令牌。
  * [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证 —— 快速上手，同时掌控用户与开发者体验。最多 5000 个 MAU 免费。
  * [Unkey](https://www.unkey.com/) - 开源 API 密钥管理与速率限制平台。每月最多 100,000 次请求和 100 个活跃 API 密钥免费，可完整使用密钥创建、吊销和速率限制能力。
  * [WorkOS](https://workos.com/) - 最多 100 万 MAU 的免费用户管理与认证。支持邮箱 + 密码、社交登录、Magic Auth、MFA 等。
  * [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理，支持多租户（B2B）场景。最多 25,000 次认证请求免费，包含全部安全功能（OTP、无密码、策略等均不设付费墙）。


**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含五个应用、每月 50 次下载，单文件最大 100 MB。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 与 Android 应用部署到设备。免费套餐：应用上传、密码保护的链接、1 天有效期、十次安装。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用用于测试。免费套餐包含一个应用项目、三个应用版本、500 MB 存储空间和每月 100 次应用安装。
  * [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS 与 Android 应用。免费套餐：上传不限、私有链接、访客 2 天有效期、注册用户 60 天。
  * [Loadly](https://loadly.io) - iOS 与 Android 测试版应用分发服务，完全免费，下载不限、高速下载、上传不限。
  * [DistApp](https://distapp.app) - 管理与分发 Android、iOS 和桌面应用。适用于测试人员或自行分发。可免费试用，含 2 个应用、1 个组织、100 MB 存储空间，下载不限，也可自行自托管。
  * [WishKit](https://www.wishkit.io) - 面向 iOS 与 Web 应用的应用内功能请求与反馈面板，用户可提交功能并投票。永久免费套餐，无需信用卡：1 个项目、iOS 与 Web SDK、用户不限，展示前 5 条功能请求。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署预置应用。免费管理 1 个 AWS 微型实例
  * [Esper](https://esper.io) - 面向 Android 设备的 MDM 与 MAM，并支持 DevOps。一百台设备免费，含一个用户许可和 25 MB 应用存储空间。
  * [jamf.com](https://www.jamf.com/) - 面向 iPad、iPhone 和 Mac 的设备管理，三台设备免费
  * [Miradore](https://miradore.com) - 设备管理服务。免费保持设备集群信息最新并保护不限数量的设备。免费套餐提供基础功能。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理和部署服务器与站点。一台服务器免费。
  * [runcloud.io](https://runcloud.io/) - 主要面向 PHP 项目的服务器管理。最多 1 台服务器免费。
  * [serveravatar.com](https://serveravatar.com) - 通过自动化配置管理和监控基于 PHP 的 Web 服务器。一台服务器免费。
  * [xcloud.host](https://xcloud.host) - 界面友好的服务器管理与部署平台。一台服务器可享免费额度。

**[⬆️ 返回顶部](#目录)**

## 消息与流式传输

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和可靠投递的实时消息服务。免费套餐包含每月 3m 条消息、100 个峰值连接和 100 个峰值通道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ 即服务。Little Lemur 套餐：每月最多 100 万条消息、最多 20 个并发连接、最多 100 个队列、最多 10,000 条排队消息，可在不同 AZ 中部署多个节点
  * [courier.com](https://www.courier.com/) - 单一 API 覆盖推送、应用内、邮件、聊天、SMS 等消息渠道，并提供模板管理等功能。免费套餐包含每月 10,000 条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展且安全的无服务器 MQTT broker，几秒即可获得。永久免费每月 1M 会话分钟（无需信用卡）。
  * [Engage](https://engage.so/) - 面向 SaaS 的一体化客户互动与自动化工具（邮件、推送、SMS、产品引导、横幅等）。每月最多 1,000 个活跃用户免费。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将你的 MQTT 设备连接到云原生 IoT 消息 broker。永久免费连接最多 100 台设备（无需信用卡）。
  * [httpSMS](https://httpsms.com) - 用你的 Android 手机作为 SMS 网关收发短信。每月最多收发 200 条消息免费。
  * [knock.app](https://knock.app) - 面向开发者的通知基础设施。通过一次 API 调用即可发送到应用内、邮件、SMS、Slack 和推送等多个渠道。免费套餐包含每月 10,000 条消息。
  * [Novu.co](https://novu.co) - 面向开发者的开源通知基础设施。用简单的组件和 API 在一处管理所有沟通渠道：Email、SMS、Direct、In-App 和 Push。免费套餐包含每月 30,000 条通知，保留 90 天。
  * [ntail.io](https://ntail.io/) - 无服务器 Apache Kafka 流式服务。免费套餐包含 200 KiB/s 入、400 KiB/s 出、1 天保留和最多 10 个 topic。无需信用卡，无时间限制。
  * [Pingram.io](https://www.pingram.io/) - 5 分钟搭建沟通基础设施。免费额度包含：100 条 SMS 与通话、3000 封邮件、Push、Slack、MS Teams、WhatsApp 等。
  * [Pocket Alert](https://pocketalert.app) - 向你的 iOS 和 Android 设备发送推送通知。可通过 API 或 Webhook 轻松集成，并完全掌控告警。免费套餐：每天向 1 台设备和 1 个应用发送 50 条消息。
  * [pubnub.com](https://www.pubnub.com/) - 每月各 100 万次事务的 Swift、Kotlin 和 React 消息服务。每次事务可包含多条消息。
  * [pusher.com](https://pusher.com/) - 实时消息服务。最多 100 个并发连接和每天 200,000 条消息免费
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。最多 20 个并发连接和每天 100,000 个事件免费
  * [SMSGate](https://sms-gate.app) - 面向 Android™ 的 SMS 网关，通过云路由在你的设备上收发 SMS 消息。完全免费的云服务（每天超过 10,000 条消息时建议通知，以保障所有用户的质量）。
  * [SuprSend](https://www.suprsend.com/) - SuprSend 是一套通知基础设施，以 API 优先的方式简化产品通知。通过单一通知 API 在多个渠道创建并投递事务、定时和互动类通知。免费套餐每月提供 10,000 条通知，包含摘要、批量、多渠道、偏好、租户、广播等不同工作流节点。
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io) 即服务。覆盖全球、AWS、GCP 和 Azure。永久免费，含 4k 消息大小、50 个活跃连接和每月 5GB 数据。
  * [webpushr](https://www.webpushr.com/) - Web 推送通知 —— 最多 10k 订阅用户免费，推送通知不限，支持浏览器内消息
  * [vask](https://vask.dev) - 实时消息服务，兼容 Pusher。Dev 套餐仅限本地开发使用，免费含 100 个并发连接、每月 1,000,000 次广播、客户端事件不限、32kb 消息大小。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) - 每天最多 100k 行日志免费，保留 24 小时
  * [log.dog](https://log.dog/) - LogDog 是一款带 Web UI 的远程调试/日志 SDK（iOS 和 Android）。实时捕获所有日志、请求和事件，并支持拦截。每月最多 100MB 日志免费
  * [logflare.app](https://logflare.app/) - 每个应用每月最多 12,960,000 条记录免费，保留 3 天
  * [logtail.com](https://logtail.com/) - 基于 ClickHouse 的兼容 SQL 的日志管理。每月最多 1 GB 免费，保留三天。
  * [logzab.com](https://logzab.com/) - 审计轨迹管理系统。每月免费 1,000 条用户活动日志，保留 1 个月，最多 5 个项目。
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由 Manage Engine 提供的日志管理服务。免费套餐提供 50 GB 存储空间、15 天存储保留和 7 天搜索。
  * [openobserve.ai](https://openobserve.ai/) - 每月 200 GB 数据接入免费，保留 15 天
  * [Smart Grow Logs](https://logs.smart-grow.app/) - 集中式日志管理平台，提供端到端加密、实时告警和多平台 SDK。免费额度包含每天最多 3.000 条日志。

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) - 无需管理翻译文件即可即时本地化。每月最多 10,000 字符免费，语言数量不限。
  * [crowdin.com](https://crowdin.com/) - 开源项目可享不限数量的项目、字符串和协作者
  * [Free PO editor](https://pofile.net/free-po-editor) - 对所有人免费
  * [Lingo.dev](https://lingo.dev) - 面向 Web 与移动端本地化的开源 AI 命令行工具。可自带 LLM，也可通过 Lingo.dev 托管的本地化引擎每月免费使用 10,000 词。
  * [lingohub.com](https://lingohub.com/) - 最多 3 名用户免费，开源项目永久免费
  * [Localhero.ai](https://localhero.ai) - 每次拉取请求自动生成符合品牌的译文，并提供术语表和翻译记忆库。1 个项目免费，每月 250 翻译额度（约 4,000 词）。
  * [localazy.com](https://localazy.com) - 1000 条源语言字符串免费，语言数量与贡献者不限，另有创业公司与开源项目优惠
  * [Localit](https://localit.io) - 快速且对开发者友好的本地化平台，提供无缝且免费的 GitHub/GitLab 集成、AI 辅助与人工翻译，以及额度充足的免费套餐（含 2 名用户、500 个键和无限项目）。
  * [localizely.com](https://localizely.com/) - 开源项目免费
  * [Loco](https://localise.biz/) - 最多 2000 条翻译免费，译者数量不限，每个项目十种语言，每个项目 1000 个可翻译资源
  * [POEditor](https://poeditor.com/) - 最多 1000 条字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多 100 个翻译键免费，字符串与语言数量不限，另有创业公司优惠
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 提供翻译量有限的免费 SaaS，自托管版永久免费
  * [transifex.com](https://www.transifex.com/) - 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控

  * [Pingzo](https://www.pingzoapp.com) - 免费额度提供 1 个可用性/API 监控，检查间隔 15 分钟，并支持即时邮件告警。
  * [Accesserty Pulse](https://accesserty.com/en/pulse) - Accesserty Pulse 监控实时网站上的交互信号和可检测的无障碍风险。面向所有人提供免费套餐，另有 14 天 Pro 试用。
  * [AlertKick](https://www.alertkick.com) - 在一个产品中整合服务器安全（面向 Linux 的 eBPF 代理）、可用性监控、值班告警/状态页。免费额度包含 10 个可用性监控与心跳、5 分钟检查间隔、7 天数据保留。
  * [assertible.com](https://assertible.com) - 自动化 API 测试与监控。为团队和个人提供免费套餐。
  * [Better Stack](https://betterstack.com/better-uptime) - 在一个产品中整合可用性监控、事件管理、值班排班/告警和状态页。免费套餐包含十个监控，检查频率 3 分钟，并提供状态页。
  * [bleemeo.com](https://bleemeo.com) - 3 台服务器、5 个可用性监控免费，用户、仪表盘和告警规则数量不限。
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源 E2E / 合成监控与深度 API 监控。免费套餐含一名用户，10k 次 API 与网络 / 1.5k 次浏览器检查运行。
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询某个 url 或网站的 Core Web Vitals 历史记录。
  * [cronalive.com](https://cronalive.com) - 面向 cron 任务的心跳监控，外加 HTTP 可用性与 TLS 到期检查，并提供可从调度器创建检查的 Laravel 扩展包。免费额度含 10 个检查、HTTP 间隔最低 5 分钟、30 天历史、每月 50k 次 ping。
  * [cronitor.io](https://cronitor.io/) - 为 cron 任务、网站、API 等提供性能洞察与可用性监控。免费额度含五个监控。
  * [watchcron.com](https://watchcron.com) - 通过心跳 ping 和告警进行 cron 任务监控。免费额度最多 5 个监控，并提供邮件通知。
  * [datadoghq.com](https://www.datadoghq.com/) - 最多 5 个节点免费
  * [DeadBro](https://www.deadbro.com) - 按请求计价的 Rails APM：实时追踪、慢 SQL、N+1 检测和错误追踪。每月 50k 请求永久免费，含 7 天数据保留、1 个应用、1 个可用性检查和邮件告警。无需信用卡。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - 面向 cron 任务的监控。免费一个 snitch（监控），推荐他人注册可获得更多
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60 个可用性监控，间隔 5 分钟。支持邮件和 Slack 告警。
  * [drumbeats.io](https://drumbeats.io/) - cron、心跳与可用性监控，含事件管理和状态页。最多 50 个监控免费，间隔 1 分钟，团队席位不限。
  * [economize.cloud](https://economize.cloud) - Economize 通过整理云资源来优化并汇报成本，帮助厘清云基础设施开支。每月在 Google Cloud Platform 上花费不超过 $5,000 时免费。
  * [fivenines.io](https://fivenines.io/) - 带实时仪表盘和告警的 Linux 服务器监控——最多 5 台受监控服务器（间隔 60 秒）永久免费。无需信用卡。
  * [FlareWarden](https://flarewarden.com) - 可用性、内容、依赖项和 SSL 监控，支持多区域验证和状态页。免费套餐含 15 个监控、5 分钟检查、90 天历史。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是可组合的可观测性平台，将指标与日志同 Grafana 集成。免费：3 名用户、十个仪表盘、100 条告警、Prometheus 与 Graphite 中的指标存储（10,000 条序列，14 天保留）、Loki 中的日志存储（50 GB 日志，14 天保留）
  * [healthchecks.io](https://healthchecks.io) - 监控 cron 任务和后台任务。最多 20 个检查免费。
  * [incidenthub.cloud](https://incidenthub.cloud/) - 云与 SaaS 状态页聚合器——20 个监控和 2 个通知渠道（Slack 与 Discord）永久免费。
  * [inspector.dev](https://www.inspector.dev) - 不到一分钟即可搭建完整的实时监控仪表盘，并提供永久免费额度。
  * [instatus.com](https://instatus.com) - 10 秒即可获得一个漂亮的状态页。永久免费，订阅者和团队数量不限。
  * [isitdownstatus.com](https://isitdownstatus.com) – 免费的公共 JSON API，返回 500+ 个热门服务（GitHub、Stripe、AWS 等）的实时状态。无需鉴权，已启用 CORS。
  * [LastPing](https://lastping.dev) - 面向 AI 智能体、cron 任务和 CI 的死人开关。个人用户免费，监控和目标数量不限。可让 AI 智能体为一切（包括它们自己）构建监控。
  * [linkok.com](https://linkok.com) - 在线死链检查器，最多 100 页的小型网站免费，开源项目完全免费。
  * [loader.io](https://loader.io/) - 有限制条件的免费负载测试工具
  * [MarionetteOps.com](https://www.marionetteops.com/) - 服务器监控、公开状态页和服务可用性监控。
  * [Middleware.io](https://middleware.io/) -  Middleware 可观测性平台可让你的应用与整套技术栈获得完整可见性，从而大规模监控和诊断问题。面向开发者社区提供永久免费套餐，允许监控最多 1M 条日志事件，并为最多 2 台主机提供基础设施监控与 APM。
  * [Monitorable](https://monitorable.io) - 面向 Linux（裸金属、虚拟机、LXC）的服务器健康监控：主机与 Docker 指标、systemd 服务和 SMART 磁盘健康，支持告警和 OpenTelemetry Collector 代理。3 台服务器免费，无需信用卡。
  * [MonitorMonk](https://monitormonk.com) - 极简的可用性监控，配以美观的状态页。永久免费套餐为 10 个网站或 api 端点提供 HTTPS、关键词、SSL 和响应时间监控，并提供 2 个仪表盘/状态页。
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata 是用于采集实时指标的开源工具。产品持续成长，也可在 GitHub 上找到！
  * [newrelic.com](https://www.newrelic.com) - New Relic 可观测性平台旨在帮助工程师打造更完善的软件。从单体应用到无服务器，你可以为一切添加埋点，然后分析、排查并优化整套软件栈。免费额度提供每月 100GB 的免费数据摄取、一名免费全权限用户，以及不限数量的免费基础用户。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 为网站和 API 提供可用性监控，并监控 cron 任务与定时任务，同时提供状态页。前五个检查（间隔 3 分钟）免费。免费额度通过 Slack、Discord 和邮件发送告警。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 检查网站是否被防火长城在中国境内屏蔽。通过对比中国境内与美国境内服务器检测到的 DNS 结果和 ASN 信息来识别 DNS 污染。
  * [OpenUptime](https://openuptime.app) - 托管的可用性监控和状态页。免费额度含 3 个活跃监控（检查间隔 5 分钟）、每月 26,000 次检查和 100 封邮件，以及 30 天检查历史。
  * [pagecrawl.io](https://pagecrawl.io/) -  监控网站变更，最多 6 个监控（每日检查）免费。
  * [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多 5 名用户免费。
  * [phare.io](https://phare.io/) - 可用性监控最多 100,000 个事件免费，项目和状态页数量不限。
  * [pingbreak.com](https://pingbreak.com/) - 现代可用性监控服务。可检查不限数量的 URL，并通过 Discord、Slack 或邮件接收故障通知。
  * [Pingmeter.com](https://pingmeter.com/) - 5 个可用性监控，间隔 10 分钟。可监控 SSH、HTTP、HTTPS 及任意自定义 TCP 端口。
  * [pingpong.one](https://pingpong.one/) - 带监控能力的高级状态页平台。免费额度含一个带 SSL 子域名的可定制公开状态页。开源项目和非营利组织可免费获得 Pro 套餐。
  * [Prismix](https://prismix.dev) - 免费 REST API（GET /api/v1/statuses），返回 75+ 个 AI 服务（包括 OpenAI、Anthropic、Gemini、Mistral 等）的实时运行状态。无需鉴权。[提供免费额度，Pro 版 $10/月]
  * [Pulsetic](https://pulsetic.com) - 含 10 个监控、6 个月可用性/日志历史、不限数量的状态页和自定义域名！免费且时长无限，邮件告警不限量。无需信用卡。
  * [Relvato](https://www.relvato.com) - 持续网站监控——每次代码更新后，Relvato 会重新检查网站的全部关键指标（性能、关键用户路径、视觉设计、安全性、SEO、法规合规、无障碍等）。一个站点免费，无需信用卡。也提供 MCP。
  * [robusta.dev](https://home.robusta.dev/) - 基于 Prometheus 的强大 Kubernetes 监控。可自带 Prometheus，也可安装一体化套件。免费额度最多支持 20 个 Kubernetes 节点。支持通过 Slack、Microsoft Teams、Discord 等发送告警，并可与 PagerDuty、OpsGenie、VictorOps、DataDog 等众多工具集成。
  * [Runframe](https://runframe.io/) - 值班告警、事件管理以及公开/私有状态页。免费套餐最多 5 名用户、1 个团队、1 个值班排班、基础状态页、事件生命周期和 Slack 原生事件响应。
  * [Servervana](https://servervana.com) - 面向大型项目和团队的高级可用性监控。提供 HTTP 监控、基于浏览器的监控、DNS 监控、域名监控、状态页等。免费额度含 10 个 HTTP 监控、1 个 DNS 监控和 1 个状态页。
  * [Simple Observability](https://simpleobservability.com) - 在同一平台中统一进行指标与日志的强大服务器监控，无需复杂配置。一台服务器免费。
  * [sitesure.net](https://sitesure.net) - 网站与 cron 监控——2 个监控免费
  * [skylight.io](https://www.skylight.io/) - 前 100,000 次请求免费（仅限 Rails）
  * [statuscake.com](https://www.statuscake.com/) - 网站监控，不限数量的测试免费（有限制条件）
  * [statusgator.com](https://statusgator.com/) - 状态页监控，3 个监控免费
  * [supaguard.app](https://supaguard.app/) - 从 20+ 个全球区域进行合成监控。免费额度含每月 1,000 次浏览器检查，并提供 AI 驱动的自愈和自动化测试生成。
  * [superlog.sh](https://superlog.sh/) - 开源的 OpenTelemetry 可观测性（追踪、日志和指标），支持 AI 智能体事件调查。免费额度含每月 1M 个 span、5M 条日志和 10M 个指标点，保留 30 天，无需信用卡。完全开源且可自托管。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控、可用性监控、DNS 与域名监控。可免费监控 10 台服务器、10 个可用性目标和 10 个域名。
  * [syagent.com](https://syagent.com/) - 非商业用途的免费服务器监控服务，含告警和指标。
  * [UptimeObserver.com](https://uptimeobserver.com) - 获得 20 个可用性监控（间隔 5 分钟）和一个可定制状态页——即使商业使用也可以。通过邮件和 Telegram 享受不限量的实时通知。开始使用无需信用卡。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) - 五个网站免费监控，间隔 3 分钟，公开状态页。
  * [Wachete](https://www.wachete.com) - 监控五个页面，每 24 小时检查一次。
  * [Watchgoose](https://watchgoose.com) - 面向定时任务、备份和后台任务的 cron 任务与心跳监控及状态页，提供 MCP 服务器。免费额度：10 个检查、200 条 ping 日志记录、邮件/聊天/webhook 告警，无需信用卡。为符合条件的开源项目提供开源支持计划。
  * [Xitoring.com](https://xitoring.com/) - 可用性监控：20 个免费，Linux 与 Windows 服务器监控：5 个免费，状态页：1 个免费——移动应用、多个通知渠道等等！
  * [UptimeRobot](https://uptimerobot.com/) - 面向业余项目的免费可用性监控。含 50 个监控（检查间隔 5 分钟），支持 HTTP、ping、端口和关键词监控。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) - 可存储最多 0.5 TB 日志，保留 30 天。包含与 Vercel 等平台的集成，以及带邮件/Discord 通知器的高级数据查询。
  * [Bugsink](https://www.bugsink.com/) - 错误追踪，兼容 Sentry-SDK。每月最多 5,000 个错误免费，自托管时可无限使用。
  * [bugsnag.com](https://www.bugsnag.com/) - 初始试用期结束后，每月最多 2,000 个错误免费
  * [CatchJS.com](https://catchjs.com/) - 带截图和点击轨迹的 JavaScript 错误追踪。开源项目免费。
  * [elmah.io](https://elmah.io/) - 面向 Web 开发者的错误日志与可用性监控。开源项目可免费获得 Small Business 订阅。
  * [Embrace](https://embrace.io/) - 移动应用监控。每年最多 100 万用户会话的小型团队免费。
  * [Everframe](https://everframe.dev/) - Everframe 是一体化平台，将缺陷追踪、崩溃采集、AI 分诊、报告者对话和看板整合在一起——适用于移动端、Web、TV 和 Roku 应用。免费额度含每月 1000 个活跃安装，缺陷和崩溃报告、应用与席位不限，包含全部 SDK，并每月对 50 份报告提供 AI 分诊。  
  * [exceptionless](https://exceptionless.com) - 实时错误、功能与日志上报等。每月 3k 个事件/1 名用户免费。开源且易于自托管以无限使用。
  * [GlitchTip](https://glitchtip.com/) - 简洁的开源错误追踪。兼容开源 Sentry SDK。每月 1000 个事件免费，也可自托管且无限制
  * [honeybadger.io](https://www.honeybadger.io) - 异常、可用性和 cron 监控。小型团队和开源项目免费（每月 12,000 个错误）。
  * [Jam](https://jam.dev) - 一键提交对开发者友好的缺陷报告。免费套餐的 jam 数量不限。
  * [memfault.com](https://memfault.com) - 云端设备可观测性与调试平台。面向 [Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp) 和 [Laird](https://app.memfault.com/register-laird) 设备提供 100 台免费额度。
  * [rollbar.com](https://rollbar.com/) - 异常与错误监控，免费套餐含每月 5,000 个错误、用户数量不限、30 天保留
  * [Semaphr](https://semaphr.com) - 面向移动应用的免费一体化开关。
  * [sentry.io](https://sentry.io/) - Sentry 实时追踪应用异常，并提供小型免费套餐。每月 5k 个错误/1 名用户免费，自托管时可无限制使用
  * [Vinktar](https://vinktar.com/) - 将错误追踪与产品分析整合在一个工具中，可由你的编码智能体通过 MCP 配置和查询。每月 1M 个事件和 50k 个错误免费，无需信用卡。
  * [Whitespace](https://whitespace.dev) - 在浏览器中一键提交缺陷报告。免费套餐为个人使用提供不限量的录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) - 托管搜索方案，支持容错、相关性和 UI 库，可轻松构建搜索体验。免费的「Build」套餐含 1M 个文档和每月 10K 次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) - 免费 1 GB 内存和 1 GB 存储空间
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏即服务，基于 Web 的 UI 组件/插件，可让你的用户在产品内搜索内容、导航、功能等，有助于提升可发现性。最多 1,000 个月活跃用户免费，命令数量不限。
  * [searchly.com](https://www.searchly.com/) - 免费 2 个索引和 20 MB 存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [BylineCV](https://bylinecv.com/) - 基于表单的简历与求职信生成工具，可助你通过 ATS 筛选，并把所有版本集中管理。核心简历构建、导出和存储永久免费，AI 使用有每日额度限制。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供与认证对标的免费课程，涵盖网络安全、网络和 Python 等主题。
  * [CloudCertPrep](https://cloudcertprep.io) - 免费开源的 AWS 认证练习题，含 1,050+ 道 CLF-C02 题目。提供限时模拟考试、按领域练习、间隔重复和进度追踪。
  * [CodeTrain](https://codetrain.ai) - AI 编程导师，基于你自己的代码库教学，绝不代写代码。免费额度：每月 10 节浏览器内课程，Python/JS 在客户端运行，无需信用卡。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 来自业界顶尖专家的免费短课程，可在一小时或更短时间内动手体验最新的生成式 AI 工具与技术。
  * [DevOpsLesson](https://devopslesson.com/) - 免费的 DevOps 教程、速查表、故障排查指南、学习路线、面试准备和 DevOps 工具：Dockerfile Linter、K8S YAML 文件生成器、Regex Tester。
  * [DevNet Academy](https://devnet-academy.com/) - 面向 Cisco DevNet Expert / CCIE Automation 认证的免费自定进度培训。涵盖 Python Click 和 Flask-RESTx。
  * [Django-tutorial.dev](https://django-tutorial.dev) - 免费在线指南，帮助把 Django 作为第一个框架来学习，并为用户撰写的文章提供免费 dofollow 反向链接。
  * [edX](https://www.edx.org/) - 提供来自 250 家顶尖机构（包括 Harvard 和 MIT）的 4,000 多门免费在线课程，专精于计算机科学、工程和数据科学。
  * [Exercism](https://exercism.org) - 覆盖 75 种以上编程语言的免费开源编程教育，并提供人工辅导。非营利组织。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量资深专业人士的简历模板，可直接克隆、完全编辑并下载，已针对 ATS 优化。
  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web 开发等领域的免费课程和认证。
  * [Full Stack Open](https://fullstackopen.com/en/) - 免费大学水平课程，讲解使用 React、Node.js、GraphQL、TypeScript 等的现代 Web 开发。完全在线、自定进度。
  * [Interactive CV](https://interactive-cv.com) - AI 驱动的简历生成工具，支持实时编辑和 ATS 优化。免费额度含自动将简历转换为高级模板（Harvard、Europass）、PDF 导出、职位跟踪（含不限量的招聘信息洞察）以及带聊天/语音功能的简历分享。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费在线指南，学习基础与进阶的 HTML/CSS、JavaScript 和 SQL。
  * [LabEx](https://labex.io) - 通过交互式实验和真实项目，培养 Linux、DevOps、网络安全、编程、数据科学等方面的技能。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是 2,500 多门 MIT 课程材料的在线发布平台，免费与全球的学习者和教育者分享知识。YouTube 频道见 [@mitocw](https://www.youtube.com/@mitocw/featured)
  * [Reactive Resume](https://rxresu.me) - 免费开源的简历生成工具，含数十种模板。可导出 PDF、DOCX，还可提供可公开分享的简历链接（需主动开启）。
  * [Roadmap.sh](https://roadmap.sh) - 免费学习路线，涵盖从区块链到 UX 设计的开发各方面。
  * [The Odin Project](https://www.theodinproject.com/) - 免费开源平台，课程聚焦用于 Web 开发的 JavaScript 和 Ruby。
  * [W3Schools](https://www.w3schools.com/) - 提供 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。
  * [WebTerm Learn](https://learn.webterm.app) - 在浏览器内的模拟终端中学习 Linux 终端、Git 和 Vim。全部 129 节课免费；每门课程的第一课无需账号。

**[⬆️ 返回顶部](#目录)**

## 邮件

  * [Unitpost](https://www.unitpost.com/) - AI 优先的事务型与营销邮件服务。免费额度：每月 5,000 封邮件、每天 200 封邮件、10,000 个联系人、5 个域名。无需信用卡。提供 SDK、MCP 和 REST API。
  * [10minutemail](https://10minutemail.com) - 用于测试的免费临时邮箱。
  * [AhaSend](https://ahasend.com) - 事务型邮件服务，每月 1000 封邮件免费，免费套餐中域名、团队成员、webhook 和消息路由数量不限。
  * [AliasMail](https://aliasmail.space/) - 保护隐私的邮件转发与别名服务，支持 HMAC-SHA256 签名的 webhook 和自定义别名句柄。免费额度含永久邮件转发、自定义别名和 webhook 集成，无需信用卡。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，可免费创建不限数量的邮件别名
  * [anon.li Alias](https://anon.li/alias) - 开源匿名邮件别名/转发方案，支持 PGP 加密和回复功能，免费套餐含 10 个随机别名和 1 个自定义别名，并提供开发者 API 与 CLI。
  * [Antideo](https://www.antideo.com) - 免费额度中每小时 10 次 API 请求，用于邮箱验证、IP 和电话号码校验。无需信用卡。
  * [Anypost](https://anypost.com) - 事务型与群发邮件 API。每月 3,000 封邮件免费，之后低至每 1k 封 8¢
  * [Atomic Mail](https://atomicmail.ai) - 为 AI 智能体打造的邮件服务，完全免费。可通过程序创建收件箱、使用自定义域名，并基于开放的 JMAP 标准（RFC 8620/8621）完整收发邮件；提供托管 MCP 服务器。这是真正的邮箱服务，而非一次性/临时邮箱。
  * [Brevo](https://www.brevo.com/) - 免费每月 9,000 封邮件、每天 300 封邮件
  * [Bump](https://bump.email/) - 免费 10 个 Bump 邮箱地址、一个自定义域名
  * [Burnermail](https://burnermail.io/) - 免费 5 个一次性邮箱地址、1 个邮箱、7 天邮箱历史
  * [Buttondown](https://buttondown.email/) - 新闻通讯服务。最多 100 名订阅者免费
  * [Canny Pigeons](https://cannypigeons.com/) - 带 DNS 漂移告警、IP 威胁情报和不限用户的 DMARC 监控平台。首个域名免费——无需信用卡。
  * [Conduit](https://conduit.email/) - 把收到的邮件转成 webhook，从而由邮件触发你的 API。该服务完全免费。
  * [Contact.do](https://contact.do/) - 一个链接里的联系表单（联系表单版的 bitly）
  * [debugmail.io](https://debugmail.io/) - 面向开发者的易用测试邮件服务器
  * [disban.io](https://disban.io/) - 保护用户注册免受一次性邮箱影响，或仅校验某个邮箱是否为一次性服务。每月免费 2000 次检查额度，无需信用卡。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务
  * [DMARCmetric](https://dmarcmetric.com/) - DMARC 报告监控，可识别具名发信来源、SPF/DKIM 对齐情况，并提供通俗易懂的摘要。1 个域名免费：每月 10,000 封邮件、30 天历史、邮件告警，无需信用卡。
  * [DNSExit](https://dnsexit.com/) - 免费在你自己的域名下提供最多 2 个邮箱地址，含 100MB 存储空间。支持 IMAP、POP3、SMTP、SPF/DKIM。
  * [DomainCanary](https://domaincanary.com) - DMARC 强制执行服务，保护你的域名免受邮件伪造。首个域名免费，含 90 天报告详情和由你自行发布的逐步策略。
  * [eForward](https://eforward.com) - 面向自定义域名的邮件转发。免费套餐含 1 个域名、1 个邮箱、10 个别名（全收别名也计入）、全收地址，以及从你的别名回复/发信（每天最多 5 个新收件人）。无需信用卡。
  * [Email Spam Tester](https://email-spam-tester.com/) - 测试邮件的技术部分、内容、链接权威度和总分。还会测试邮件将落入何处：收件箱、垃圾邮件或推广标签。可在 Gmail、GMX、Yahoo、AOL 等邮件服务商上做收件箱测试。免费使用，无需信用卡或注册。也可通过 API 和 MCP 使用。
  * [EmailGuard](https://emailguard.lazrek.com/) - 通过简单的 API 拦截一次性邮箱、捕获拼写错误并校验 MX 记录。每月 100 次免费请求。
  * [EmailJS](https://www.emailjs.com/) - 这不是完整的邮件服务器，只是一个邮件客户端，可直接从客户端发送邮件而不暴露你的凭证。免费额度含每月 200 次请求、2 个邮件模板、请求最大 50Kb、有限的联系人历史。
  * [EmailLabs.io](https://emaillabs.io/en) - 每月可免费发送最多 9,000 封邮件，每天最多 300 封。
  * [EmailQo Email Infrastructure Grader](https://emailqo.com/email-grader) - 免费的邮件基础设施评分工具，检查 SPF、DKIM、DMARC 和邮件服务器配置。对任意域名按 100 分制打分。无需注册。
  * [EmailOctopus](https://emailoctopus.com) - 最多 2,500 名订阅者和每月 10,000 封邮件免费
  * [Emailvalidation.io](https://emailvalidation.io) - 每月 100 次免费邮箱验证
  * [Emitlo](https://emitlo.com) - 免费每月 12,000 封邮件、邮件 API 和 SMTP、支持 SPF/DKIM/DMARC，无需信用卡。
  * [EtherealMail](https://ethereal.email) - Ethereal 是一个模拟 SMTP 服务，主要面向 Nodemailer 和 EmailEngine 用户（但不限于此）。这是一个完全免费的反事务型邮件服务，邮件永远不会真正投递。
  * [forwardemail.net](https://forwardemail.net) - 面向自定义域名的免费邮件转发。可用你的域名创建并转发不限数量的邮箱地址（**注意**：由于垃圾邮件问题，使用 .casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work 等 TLD 时需付费）
  * [FrostyVerify](https://frostyverify.com) - 邮箱验证，可通过 Web 应用、REST API 和 MCP 服务器使用，每月 1,000 次免费邮箱验证，无需信用卡
  * [Imitate Email](https://imitate.email) - 用于在 build/qa 和 ci/cd 中测试邮件功能的沙箱邮件服务器。免费账号每天获得 15 封邮件，永久有效。
  * [ImprovMX](https://improvmx.com) - 免费邮件转发。
  * [Inboxes App](https://inboxesapp.com) - 每天最多创建 3 个临时邮箱，用完后可在便捷的 Chrome 扩展内删除。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性邮箱收件箱，邮件最多 3 天后自动删除。开源且可自托管。
  * [Is It Disposable](https://isitdisposable.com/) - 检测并拦截一次性邮箱地址。免费套餐每月 250 次查询，无需信用卡。
  * [KaiMail](https://kaimail.net) - 面向自定义域名的邮件转发，支持 ARC/DKIM 签名。免费套餐含 1 个域名、1 个邮箱、每月 300 封邮件，单封邮件最大 1MB。还提供收信 webhook。开源项目有专属方案。
  * [mail-tester.com](https://www.mail-tester.com) - 测试邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月 20 次免费。
  * [Maileroo](https://maileroo.com) - 面向开发者的 SMTP 中继和邮件 API。每月 5,000 封邮件、域名不限、免费邮箱验证、黑名单监控、邮件测试器等。
  * [mailcatcher.me](https://mailcatcher.me/) - 捕获邮件并通过 Web 界面提供查看。
  * [mailchannels.com](https://www.mailchannels.com) - 邮件 API，提供 REST API 和 SMTP 集成，每月最多 3,000 封邮件免费。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱地址注册，每小时 120 次请求（约每月 86,400 次）
  * [Maildroppa](https://maildroppa.com) - 最多 100 名订阅者免费，邮件和自动化流程数量不限。
  * [MailerLite.com](https://www.mailerlite.com) - 免费每月 1,000 名订阅者、每月 12,000 封邮件
  * [MailerSend.com](https://www.mailersend.com) - 邮件 API、SMTP，事务型邮件每月 500 封免费，每天 100 次 API 请求
  * [mailinator.com](https://www.mailinator.com/) - 免费的公共邮件系统，可使用任意你想要的收件箱
  * [Mailjet](https://www.mailjet.com/) - 免费每月 6,000 封邮件（每天发送上限 200 封）
  * [mailsac.com](https://mailsac.com) - 用于临时邮件测试的免费 API、免费公共邮件托管、出站邮件捕获、邮件转 Slack/WebSocket/webhook（每月 1,500 次 API 上限）
  * [Mailtrap.io](https://mailtrap.io/) - 邮件 API 和 SMTP，每月 4,000 封邮件免费，每天上限 150 封。Email Marketing 含 500 个联系人和每月 1,500 封邮件。Email Sandbox 含每月 50 封测试邮件、一个沙箱，最多存储 10 封邮件。
  * [Mutant Mail](https://www.mutantmail.com/) - 免费 10 个邮箱 ID、1 个域名、1 个邮箱。所有邮箱 ID 共用单一邮箱。
  * [OneSignal](https://onesignal.com/) - 每月 10,000 封邮件，无需信用卡。
  * [Orbisearch](https://orbisearch.com) - 免费批量邮箱校验工具，每天 100 次校验，无需注册。
  * [Parsio.io](https://parsio.io) - 免费邮件解析器（转发邮件，提取数据，再发送到你的服务器）
  * [Pharos](https://pharos.email) - 面向开发者的事务型邮件 API 和 SMTP 中继服务。每月 3,000 封邮件免费。
  * [Plunk](https://useplunk.com) - 每月 3K 封邮件免费
  * [Postmark](https://postmarkapp.com/) - 每月 100 封邮件免费，DMARC 每周摘要不限量。
  * [Proton Mail](https://proton.me/mail) -  提供内置端到端加密的安全邮箱服务。免费 1GB 存储空间。
  * [Reloop](https://reloop.sh) - 面向开发者的事务型邮件 API 和 SMTP。免费套餐：每月 3,000 封邮件、每天 200 封邮件、一个自定义域名和一个智能体收件箱。
  * [Resend](https://resend.com) - 面向开发者的事务型邮件 API。免费每月 3,000 封邮件、每天 100 封邮件、一个自定义域名。
  * [SendBridge Mail Tester](https://sendbridge.com/mail-tester) — 无需注册的免费邮件送达率测试。生成唯一收件箱地址，然后分析 SPF、DKIM、DMARC、Rspamd 垃圾邮件评分、23+ 个 RBL 黑名单、反向 DNS 和内容质量。测试次数不限，数秒出结果，报告页可分享。
  * [Sender](https://www.sender.net) - 每月最多 15,000 封邮件，最多 2,500 名订阅者
  * [Sendpulse](https://sendpulse.com) - 免费每月 500 名订阅者、每月 15,000 封邮件
  * [SendRaven](https://sendraven.ai) - SendRaven 提供用于事务型邮件和智能体驱动对话的邮件 API，包括入站回复和会话线程。免费额度含每月 3,000 封出站邮件、联系人和入站回复不限，需绑定信用卡。
  * [SendStreak](https://www.sendstreak.com/) - 邮件框架即服务，可为你的自有 SMTP 服务器（例如 AWS、Maileroo、Gmail）添加模板、自动化、历史记录等。每天最多 100 封邮件免费，无时间限制。
  * [SignupVet](https://www.signupvet.com) - 用于检查新注册用户邮箱、电话和 IP 的 API。每月 250 次免费检查，无需信用卡。
  * [SimpleLogin](https://simplelogin.io/) - 开源、可自托管的邮件别名/转发方案。免费 10 个别名、带宽不限、回复/发信不限。教育工作者（学生、研究人员等）免费。
  * [SMTPfast](https://smtpfa.st/) - SMTPfast 是面向开发者的简单邮件 API，免费额度含每月 3,000 封邮件、1 个域名和 1,000 个联系人，无需信用卡。
  * [Substack](https://substack.com) - 不限量的免费新闻通讯服务。只有当你对其收费时才开始付费。
  * [Suped](https://www.suped.com/) - 易用的 DMARC 监控平台。免费套餐覆盖一个域名，每月最多 1,000 封邮件。
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲事务型邮件 API。每天 100 封邮件免费。
  * [temp-mail.io](https://temp-mail.io) - 免费一次性临时邮箱服务，可同时拥有多个邮箱并支持转发
  * [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，使用多种域名。每次刷新页面邮箱地址都会更新。完全免费，其服务不含任何收费。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月可免费验证最多 200 个邮箱，并判断邮箱是否为临时邮箱。
  * [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和地址自动过期
  * [Tuta](https://tuta.com/) - 提供内置端到端加密的安全邮箱服务，无广告、无追踪。免费 1GB 存储空间、一个日历（Tuta 也提供[付费套餐](https://tuta.com/pricing)。）。Tuta 还部分[开源](https://github.com/tutao/tutanota)，因此你可以自托管。
  * [VaelMail](https://vaelmail.com) - 隐私优先的网页邮箱，采用确定性的 16 位账户密钥，无需手机验证。免费额度含 50 MB 仅收信邮箱存储、不限量的子地址，以及持久化的 @vael.pw 别名，无需信用卡。
  * [Verifalia](https://verifalia.com/email-verification-api) - 实时邮箱验证 API，支持邮箱确认和一次性邮箱地址检测；每天 25 次免费邮箱验证。
  * [verimail.io](https://verimail.io/) - 批量与 API 邮箱验证服务。每月 100 次免费验证
  * [Waitlio](https://waitlio.com/) - 面向产品发布的候补名单管理软件。可创建品牌化候补名单页面、收集并验证邮件订阅者、用标签和分析管理注册。免费套餐含每月 100 名订阅者、1 个候补名单和 API 访问。
  * [Wraps](https://wraps.dev) - 部署到你自己 AWS 账号（SES）的邮件基础设施，附带仪表盘。发送费用直接付给 AWS。免费套餐覆盖 1 个 AWS 账号，域名和联系人数量不限。
  * [ZeroSMTP](https://github.com/msgwing/ZeroSMTP) - msgwing.com 域名上的免费 SMTP 中继，每天最多 200 封邮件，无付费档位。仅能从共享的 @msgwing.com 地址发信（不支持自定义域名）。提供 15 种语言的即用代码示例，以及 Windows Server/Linux/网络打印机设置指南。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与 A/B 测试。配置即代码，提供完整类型化的 TypeScript SDK。与 Next.js、React 等框架深度集成。慷慨的免费额度和低成本的扩容方案。
  * [ConfigCat](https://configcat.com) - ConfigCat 是面向开发者的功能开关服务，团队人数不限，支持出色，价格合理。免费套餐最多 10 个开关、两个环境、1 个产品，每月 500 万次请求。
  * [Flagpool](https://www.flagpool.io/en/) - 功能开关管理平台，注重简洁与易用。免费套餐包括每月最多创建 10 个新开关、不限请求数和定向规则。
  * [Flagsmith](https://flagsmith.com) - 放心发布功能；跨 Web、移动端和服务端应用管理功能开关。可使用我们的托管 API，也可部署到自己的私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关与 A/B 测试服务，内置贝叶斯统计分析引擎。最多 3 名用户免费，功能开关和实验数量不限。
  * [Rollgate](https://rollgate.io) - 托管在欧盟的功能开关管理，支持定时发布、即时回滚和 A/B 测试。包含 12 个 SDK。免费套餐每月最多 500K 次 API 请求、开关数量不限、3 名团队成员，无需信用卡。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B 测试、分析和应用配置，具备 Git 风格的版本控制与同步的内存本地开关求值。最多 5 名团队成员免费，功能开关和 A/B 测试数量不限。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B 测试、分析等的稳健平台。其慷慨的免费套餐提供不限席位、开关、实验和动态配置，每月最多支持 100 万个事件。
  * [Toggled.dev](https://www.toggled.dev) - 面向企业、可扩展的多区域功能开关管理平台。免费套餐最多 10 个开关、两个环境、请求不限。SDK、分析看板、发布日历、Slack 通知及其他所有功能均包含在永久免费套餐中。


**[⬆️ 返回顶部](#目录)**

## 字体

  * [Befonts](https://befonts.com/) - 提供多款独特字体，供个人或商业使用。
  * [Bunny](https://fonts.bunny.net) - 注重隐私的 Google Fonts
  * [dafont](https://www.dafont.com/) - 本站展示的字体归其作者所有，属于免费软件、共享软件、演示版本或公有领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体 Hint 工具和字体提交工具。
  * [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其使用方式。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 可商用授权的免费字体。这些字体经手工挑选，并以易用的形式呈现。
  * [FontGet](https://www.fontget.com/) - 提供多种可下载字体，并用标签整齐分类。
  * [fonts.xz.style](https://fonts.xz.style/) - 免费开源服务，通过 CSS 向网站交付字体族。
  * [Fontsensei](https://fontsensei.com/) - 开源的 Google 字体，由用户打标签。含中日韩（CJK）字体标签。
  * [Fontshare](https://www.fontshare.com/) - 免费字体服务。一个不断扩充的专业级字体集合，个人和商业使用 100% 免费。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可通过下载或链接到 Google CDN 的方式，快速轻松地安装到网站上。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [BootForm](https://bootform.com/) - 面向构建者的表单后端。免费套餐：每月 250 次提交，表单数量不限。支持邮件和 Discord 通知、蜜罐/CAPTCHA，并提供 MCP 服务器，让 AI 编码代理可以创建、配置表单并管理提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费套餐每月允许 250 次表单提交。友好的现代 GUI。可与 Google Sheets、Airtable、Slack、Email 等集成。
  * [Feathery](https://feathery.io) - 强大且对开发者友好的表单构建器。可构建注册与登录、用户引导、支付流程、复杂金融应用等。免费套餐每月最多 250 次提交和五个活跃表单。
  * [feedback.fish](https://feedback.fish/) - 免费套餐允许收集共 25 条反馈提交。提供 React 和 Vue 组件，易于集成。
  * [FluidForms](https://fluidforms.ai/) - 具备 AI 驱动逻辑的表单构建器与后端。免费套餐包括每月 100 条响应、表单数量不限（含 AI 创建的表单）、webhook 和嵌入。
  * [Form.taxi](https://form.taxi/) - HTML 表单提交端点。具备通知、垃圾信息拦截和符合 GDPR 的数据处理。免费套餐满足基础使用。
  * [Formboost.app](https://formboost.app) - 开发者优先的表单后端，提供简单的 HTTP 端点，每月 500 次免费提交，具备垃圾信息防护、邮件通知，并内置 Slack、Discord 和 Telegram 集成。无需自建后端。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费套餐每月允许 100 次提交。
  * [Formester.com](https://formester.com) - 在网站上分享和嵌入外观独特的表单——创建的表单数量不限，功能也不受套餐限制。每月可免费获得最多 100 次提交。
  * [Formgong](https://formgong.com/) - 面向生成式网站的多语言表单后端，适用于需要联系表单或其他表单的场景。免费额度：每月 300 次提交，邮件和 Telegram 通知。
  * [Forminit](https://forminit.com/) - 面向开发者的无头表单后端。免费套餐每月允许 100 次表单提交，包含文件上传、服务端字段校验、邮件通知、垃圾信息防护和 Zapier。
  * [FormKeep.com](https://www.formkeep.com/) - 表单数量不限，每月 50 次提交，具备垃圾信息防护、邮件通知，以及可导出 HTML 的拖拽式设计器。其他功能包括自定义字段规则、团队协作，以及与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。
  * [Form Plume](https://formplume.com) - Form Plume 是面向 HTML 和 JavaScript 表单的表单后端。一个端点即可获得垃圾信息过滤、邮件通知、文件上传、webhook 和整洁的收件箱。每月 500 次提交免费。
  * [Formlane](https://smallwerk.com/formlane) - Formlane 是面向静态网站、建站工具或 AI 构建应用的表单后端。一个端点即可获得带 reply-to 的邮件通知、无需 captcha 的垃圾信息过滤和 CSV 导出。所有提交都存储在法兰克福。免费套餐：每月 250 次提交，无试用。
  * [formlets.com](https://formlets.com/) - 在线表单，每月单页表单数量不限，每月 100 次提交，邮件通知。
  * [forms.app](https://forms.app/) - 创建在线表单，具备条件逻辑、自动评分计算器和 AI 等强大功能。免费套餐最多收集 100 条响应，可将表单嵌入网站或通过链接使用。
  * [formspark.io](https://formspark.io/) - 表单转邮件服务，免费套餐允许表单数量不限、每月 250 次提交，由客户协助团队提供支持。
  * [Formspree.io](https://formspree.io/) - 通过 HTTP POST 请求发送邮件。免费额度限制每个表单每月 50 次提交。
  * [Formsubmit.co](https://formsubmit.co/) - 为 HTML 表单提供简便的表单端点。永久免费。无需注册。
  * [Formware.io](https://formware.io/) - 无需懂代码，数秒内创建完全响应式且吸引人的表单，并免费收集不限数量的响应！
  * [HeroTofu.com](https://herotofu.com/) - 具备机器人检测和加密归档的表单后端。可通过界面将提交转发到邮件、Slack 或 Zapier。使用你自己的前端。无需服务端代码。免费套餐提供不限表单和每月 100 次提交。
  * [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费额度允许创建不限数量的表单并收集不限数量的提交。附带预置模板、防垃圾信息和 100MB 文件存储空间。
  * [Jotform.com](https://jotform.com/) - 免费创建在线表单、收集提交、接收付款、自动化工作流，并通过内置电子签名完成文档签署。免费套餐包括 5 个表单、每月 100 次提交、10 份电子签名文档、10 次付款提交等。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。与静态站点配合良好。免费套餐包括最多 1 个网站和每月最多 50 次提交。
  * [Lucid Forms](https://lucidforms.co/) - 面向网站的表单端点。无需构建后端，即可为任何 HTML、JS 框架或无代码站点添加可用的联系表单。免费套餐包括每月 250 次提交、邮件通知、智能垃圾信息过滤和 Google Sheets 集成。
  * [Makeform](https://www.makeform.ai/) - 基于对话的表单构建器。免费的表单构建器，表单和提交数量不限。99% 的功能免费，包括添加 logo、条件逻辑、文件上传、支付、集成和 webhook。Pro 套餐（$19/月）可去除 Makeform 品牌标识，并支持自定义域名和团队功能。Business 套餐（$59/月）支持 RBAC、邮箱验证和单点登录（SSO）。
  * [Nisuform](https://nisuform.com) - 简单、易用且安全的表单后端，适用于任何网站，提供美观的表单模板和直观的表单构建器。通过 MCP 支持 AI。免费套餐包括 100 次免费提交、垃圾信息防护和 turnstile。
  * [Pageclip](https://pageclip.co/) - 免费套餐允许一个站点、一个表单和每月 1,000 次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站上嵌入 PDF 编辑器，将任何 PDF 变成可填写的表单。免费套餐允许 PDF 数量不限，每个 PDF 三次提交。
  * [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费套餐允许每月 50 次提交、250MB 文件存储空间、Zapier 集成、CSV/JSON 导出、自定义重定向、自定义响应页、Telegram 和 Slack 机器人、单次邮件通知。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 无需任何服务端代码即可免费轻松集成 HTML 表单。用户提交表单后，包含表单内容的邮件将发送到你注册的地址。
  * [Survicate](https://survicate.com/) - 用一个工具从所有渠道收集反馈并发送后续问卷。自动分析反馈并用 AI 提取洞察。免费提供邮件、网站、产品内或移动端问卷、AI 问卷创建器，以及每月 25 条响应。
  * [Tally.so](https://tally.so/) - 所有功能中 99% 免费。免费额度让你拥有：表单数量不限、提交数量不限、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
  * [Typeform.com](https://www.typeform.com/) - 在网站上嵌入设计精美的表单。免费套餐每个表单仅允许十个字段和每月 100 条响应。
  * [Vidhook](https://vidhook.io/) - 使用令人愉悦的高回复率问卷收集反馈。免费套餐包括 1 个活跃问卷、每个问卷 25 条响应和可自定义模板。
  * [WaiverStevie.com](https://waiverstevie.com) - 带 REST API 的电子签名平台。可通过 webhook 接收通知。免费套餐会在已签署文档上加水印，但允许不限数量的信封和签名。
  * [Web3Forms](https://web3forms.com) - 为静态和 JAMStack 网站提供联系表单，无需编写后端代码。免费套餐允许表单不限、域名不限，每月 250 次提交。
  * [Wufoo](https://www.wufoo.com/) - 可在网站上使用的快捷表单。免费套餐每月限制 100 次提交。
  * [FormNX](https://FormNX.com/) - 免费创建不限数量的表单并获得不限数量的提交。可使用 1000+ 专业制作的表单模板，或从零创建表单。具备邮件通知、表单逻辑、收款、文件上传、自定义感谢页等功能。

**[⬆️ 返回顶部](#目录)**

## 生成式 AI

  * [Arize AX](https://arize.com/) - AI 可观测性与评估平台，帮助团队理解、评估并持续改进 AI 代理和应用。免费套餐包括不限用户与评估次数、每月 25k 个 span 和 1GB 摄取量、15 天数据保留，以及 Signal（每月 10 个问题）。无需信用卡。可通过 Arize Phoenix 选择开源自托管。
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) - AI 驱动的音频增强 SaaS，可去除噪声和回声，同时保留自然人声清晰度。完全免费：一键增强次数不限，无需登录，支持 MP3/WAV/FLAC
  * [Braintrust](https://www.braintrustdata.com/) - 面向生成式 AI 的评估、提示词调试台和数据管理。免费套餐每周最多提供 1,000 行私有评估数据。
  * [Clair](https://askclair.ai/) - 临床 AI 参考。学生可免费使用专业工具套件，包括开放检索、临床摘要、药物审查、药物相互作用、ICD-10 编码和抗菌药物管理。此外还提供专业套件的免费试用。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试并交付 LLM 应用。 [#opensource](https://github.com/comet-ml/opik/)
  * [Future AGI](https://futureagi.com) - 用于评估、观测和改进 LLM 与 AI 代理应用的开源平台，具备追踪、评估、模拟和护栏能力。免费额度包括 50GB 存储空间、2K 评估额度、每月 100K 次 AI 网关请求、100 万 token 的文本代理模拟和 60 分钟语音模拟，另有不限项目与席位，以及 $0 平台成本的 BYOK LLM-as-judge。 [#opensource](https://github.com/future-agi/future-agi)
  * [Gonka Broker](https://gonkabroker.com/) - 兼容 OpenAI 的 API，通过去中心化的 Gonka.ai GPU 网络提供开源模型服务。每月 100 万+ 免费 token。可轻松集成到多种 AI 工具。
  * [Keywords AI](https://keywordsai.co) - 优秀的 LLM 监控平台。用一种格式、两行代码即可调用 200+ 个 LLM。每月 10,000 次免费请求，平台功能 $0！
  * [Langfuse](https://langfuse.com/) - 开源 LLM 工程平台，帮助团队协作调试、分析并迭代其 LLM 应用。永久免费套餐包括每月 50k 条观测和全部平台功能。 [#opensource](https://github.com/langfuse/langfuse)
  * [LangWatch](https://langwatch.ai) - 一个 LLMOps 平台，帮助 AI 团队衡量、监控并优化 LLM 应用的可靠性、成本效益和性能。借助强大的 DSPy 组件，让工程师与非技术团队无缝协作，对生成式 AI 产品进行微调并投入生产。免费套餐包括全部平台功能、每月 1k 条追踪和 1 个工作流 DSPy 优化器。 [#opensource](https://github.com/langwatch/langwatch)
  * [Latitude](https://latitude.so) - 开源（MIT）LLM 可观测性与评估平台，用于在生产环境中追踪、监控和评估 AI 代理。免费 Starter 套餐包括每月 20K 额度、30 天数据保留和不限席位。 [#opensource](https://github.com/latitude-dev/latitude-llm)
  * [Lumenfall.ai](https://lumenfall.ai/) - AI 媒体网关，通过兼容 OpenAI 的 API 统一访问领先的图像生成模型。平台本身免费使用，零加价且无订阅费。大多数模型的推理成本按供应商价格计费，但 FLUX.1 [schnell] FP8 对注册用户永久免费且用量不限。内置故障转移和供应商容错。
  * [Maxim](https://www.getmaxim.ai) - LLM 评估与可观测性平台，具备代理模拟和提示词调试台。免费额度提供每月 10k 条日志，并可通过 BYOK 使用提示词调试台、模拟和评估。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai 为 Azure OpenAI、DeepSeek 和 Google Gemini 模型提供 100,000 免费字数，让用户使用代码生成、深度研究和图像创作的强大工具。
  * [onomeo](https://onomeo.com/) - Onomeo 用一个密钥即可接入数十个 AI 模型。使用标准 OpenAI 格式即可直接接入 Cline、SillyTavern 或 Open WebUI 等工具。35 个模型完全免费（每用户每 5 小时 60 次请求，全体用户合并计为每 5 小时 450 次）。每日签到额度可用于 Claude 和 GPT 等大模型，有每日上限。额外额度起价 $5/月。我们处于公开测试阶段，可能偶有不稳定。适合日常随意使用，但还不适合作为主力工具。欢迎随时反馈。
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费 AI 模型，包括 DeepSeek R1、V3、Llama 和 Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样的开发需求。请注意，这些模型虽可免费使用，但受速率限制约束。此外，OpenRouter 还提供付费模型以满足更高要求，例如 Claude、OpenAI、Grok、Gemini 和 Nova。
  * [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成 AI，提供免费 API。无需注册或 API 密钥，并有多种方式集成到网站或工作流中。 [#opensource](https://github.com/pollinations/pollinations)
  * [Portkey](https://portkey.ai/) - 面向生成式 AI 应用的控制面板，具备可观测性套件和 AI 网关。每月可免费发送并记录最多 10,000 次请求。
  * [ReportGPT](https://ReportGPT.app) - AI 驱动的写作助手。只要自带 API 密钥，整个平台免费。
  * [telemetry.dev](https://telemetry.dev) - 基于 OpenTelemetry 构建的 AI/LLM 应用可观测性。追踪模型调用和工具步骤的 token、成本、延迟和错误；可用任何语言通过 HTTP 发送 OTLP，或使用 TypeScript SDK。免费套餐包括每月 10,000 个 span、7 天数据保留、1 个项目和 2 个席位，无需信用卡。
  * [Transcript LOL](https://transcript.lol/) - 使用 AI 将音频或视频转换为文本。通过 LLM 生成摘要和其他洞察。免费额度包括每天 2 次转写。可上传文件、录制语音笔记，或使用来自 YouTube、Instagram 等平台的链接。免费版还支持 WhatsApp、Telegram，并可从 Google Drive、Dropbox、Box 和 OneDrive 等云存储直接导入文件。无需 API 密钥。注册即可使用。还提供移动端、桌面端和 Chromebook 应用。
  * [Zenable](https://zenable.io) - 使用以 Policy as Code 构建的护栏，即时自动修复 Cursor、Windsurf 和 Copilot 等工具的输出，使其符合公司的质量与合规标准。免费额度包括每天 100 次对 MCP 服务器的工具调用，以及通过 GitHub App 每天 25 次免费自动拉取请求审查。

**[⬆️ 返回顶部](#目录)**

## CDN 与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - 为 bootstrap、bootswatch 和 fontawesome.io 提供 CDN
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最多 5 TB 免费 CDN 流量、19 个核心 PoP、1 个域名和通用 SSL。
  * [cdnjs.com](https://cdnjs.com/) - 简单。快速。可靠。内容交付的极致。cdnjs 是免费开源的 CDN 服务，由 Cloudflare 提供支持，为超过 11% 的网站所信赖。
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Google 托管库是为最流行的开源 JavaScript 库提供的内容分发网络
  * [Gcore](https://gcorelabs.com/) - 全球内容分发网络，每月 1 TB 和 100 万次请求免费，
    并提供免费 DNS 托管
  * [jsdelivr.com](https://www.jsdelivr.com/) - 免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview) - Microsoft Ajax CDN 托管 jQuery 等流行的第三方 JavaScript 库，让你能轻松将其添加到 Web 应用中
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) - 免费 DDoS 防护
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 免费 DDoS 防护和 SSL 证书
  * [PromoProxy](https://promoproxy.net/) - 免费云端安全 Web 网关。免费套餐包括最多 5 名用户和每天 1 GB。
  * [raw.githack.com](https://raw.githack.com/) - **rawgit.com** 的现代替代品，简单地使用 Cloudflare 托管文件
  * [Skypack](https://www.skypack.dev/) - 100% 原生 ES 模块 JavaScript CDN。每个域名每月 100 万次请求免费。
  * [statically.io](https://statically.io/) - 为 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片提供 CDN
  * [Stellate](https://stellate.co/) - Stellate 是为你的 GraphQL API 提供极速可靠 CDN 的服务，两个服务免费。
  * [toranproxy.com](https://toranproxy.com/) - Packagist 和 GitHub 的代理。CD 永不失败。个人使用免费，限一名开发者，无支持
  * [UNPKG](https://unpkg.com/) - 为 npm 上的一切提供 CDN
  * [weserv](https://images.weserv.nl/) - 图像缓存与缩放服务。借助全球缓存即时处理图像。

**[⬆️ 返回顶部](#目录)**

## PaaS

  * [ampt.dev](https://getampt.com/) - Ampt 让团队在 AWS 上构建、部署和扩展 JavaScript 应用，无需复杂配置或管理基础设施。免费 Preview 套餐包括每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费套餐中允许。
  * [anvil.works](https://anvil.works) - 只用 Python 进行 Web 应用开发。免费额度提供不限应用和 30 秒超时。
  * [Apply.build](https://apply.build/) - 免费构建并部署你的 GitHub 应用，配置 0.5 vCPU / 512 MiB RAM、欧洲服务器、自动防火墙和实时性能指标。可运行 Node.js、Python、Go、Java、静态站点、微服务等。
  * [appwrite](https://appwrite.io) - 项目数量不限且不会暂停项目（支持 websocket），并提供认证服务。免费额度中每个项目 1 个数据库、3 个存储桶、5 个函数。
  * [Clever Cloud](https://clever.cloud) - 欧洲 PaaS，具备自动部署、自动扩缩容、托管数据库和基于 Git 的工作流。注册时包含 €20 免费额度、带免费 MySQL 和 PostgreSQL 数据库的受限 DEV 套餐，以及 Heptapod 和 FS Buckets 等服务的免费额度。
  * [Choreo](https://wso2.com/choreo/) - AI 原生的内部开发者平台即服务。免费额度包括最多 5 个组件和每月 $100 额度。
  * [codenameone.com](https://www.codenameone.com/) - 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业使用免费，项目数量不限
  * [Cohesivity](https://cohesivity.ai) - 专为 AI 代理构建的无头后端与服务。包含托管、数据库、存储空间、LLM 和第三方 API。支持代理式注册。免费额度包括 10 个项目、100K 次边缘请求、10 GB 对象存储、100 封邮件，以及每月 5 美元用于 AI 和搜索的额度。
  * [Daestro](https://daestro.com) - 跨云服务商和本地环境运行计算任务。免费额度包括最多 10 个并发任务运行、2 个计算实例、自托管计算、1 个云服务商、1 个容器镜像仓库和 1 个 cron 任务。
  * [Deno Deploy](https://deno.com/deploy) - 在全球边缘运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费额度包括每天 100,000 次请求和每月 100 GiB 数据传输。
  * [Deplexo](https://deplexo.com/) - 面向开发者的 PaaS，用于部署和托管应用，支持基于 Git 的部署、自定义域名、自动 HTTPS 和 Dockerfile。可运行 Node.js、Python、Go、Java、Rust、PHP、静态站点等。免费额度包括 1 个应用，配置 0.25 vCPU、128 MB RAM、250 MB 磁盘和 100 GB 带宽。
  * [domcloud.co](https://domcloud.co) - Linux 托管服务，提供与 GitHub 的 CI/CD、SSH 以及 MariaDB/Postgres 数据库。免费版有 1 GB 存储空间和每月 1 GB 网络流量限制，且仅限使用免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供自动基础设施、无样板代码等的后端框架。包含面向业余项目的免费云托管。
  * [faable.com](https://faable.com/) - 部署应用并自动检测 Python 和 Node.js 框架。免费额度包括每个项目一个 0.5 CPU / 1 GB RAM 实例、10 GB 带宽、每天 10 次成功部署、自动 SSL 和内置 WAF，另有 OAuth 2.0 / OIDC 认证。应用在无流量 2 小时后休眠。欧洲服务器。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 使用类似 git push 的工作流，在你自己的 AWS 账户上部署 Web 服务、数据库等。免费额度面向使用个人 GitHub 仓库的 1 名开发者。AWS 费用通过 AWS 计费，但你可以使用额度和 AWS 免费额度。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供一个永不休眠的免费实例，以及一个限制为 2 个连接、10, 000 行且无备份的免费额度 PostgreSQL 数据库。
  * [Northflank](https://northflank.com) - 通过强大的 UI、API 和 CLI 构建部署微服务、任务和托管数据库。可从版本控制和外部 Docker 镜像仓库无缝扩缩容器。免费额度包括两个服务、两个 cron 任务和 1 个数据库。
  * [Ownkube](https://ownkube.io) - 个人软件的云。用你的编码代理部署应用、worker、任务和托管数据库，使用 $5 起、永不过期的预付额度。免费额度：Starter 套餐在你自己的 AWS 账户中的一个实例上运行所有内容，无需信用卡（实例费用由你付给 AWS）。
  * [pipedream.com](https://pipedream.com) - 为开发者构建的集成平台。基于任意触发器开发任意工作流。工作流就是代码，可以[免费](https://docs.pipedream.com/pricing/)运行。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) - 云端 Python 应用托管。初学者账户免费，1 个 Python Web 应用（位于 your-username.pythonanywhere.com 域名）、512 MB 私有文件存储空间、一个 MySQL 数据库
  * [Runsite](https://runsite.app/) - 欧洲 PaaS，支持从 GitHub 自动部署 Web 服务或静态站点（1 个 Web 应用 0.1 vCPU/256 MB 免费）、托管 PostgreSQL 和 Valkey（Redis）（免费 30 天）、事务邮件（每月 3,000 封免费）、兼容 S3 的存储空间（5 GB 免费），具备启动网站所需的全部。服务器位于德国。
  * [SnapDeploy](https://snapdeploy.dev/) - Docker 容器或 GitHub 仓库，托管在 AWS。免费额度：最多 4 个容器、每月 100 运行小时、每天 10 次部署。空闲 15 分钟后休眠，下次请求时唤醒。无需信用卡。
  * [Staxa](https://staxa.dev/) - 多租户应用托管：每个租户通过 Web 应用或 API 集成，在隔离的 Kubernetes 命名空间中拥有自己的应用、数据库、子域名和 TLS。免费额度包括 2 个租户，每个租户最多 2 个服务（0.5 vCPU、512 MB），免费应用空闲 24 小时后休眠。
  * [The Vibe Hosting](https://thevibehosting.com/) - 为编码代理提供无摩擦的 vibe 托管。一条 curl 命令即可让代理在数秒内获得一台位于 HTTPS 子域名下的 root Linux 机器。免费额度：验证手机号后可获得 2 核、512 MB 的 24/7 服务器，无需信用卡。
  * [Val Town](https://www.val.town) - 面向脚本、HTTP 端点和 cron 任务的协作式 TypeScript/JavaScript 无服务器平台。免费套餐包括不限公开 val、15 分钟 cron 间隔、每次运行 1 分钟实际耗时上限和 3 天日志保留。免费版不支持自定义域名。
  * [velixir](https://velixir.net/) - 托管在欧盟的 PaaS，可从源码构建任何语言的 Web 应用（Node.js、Python、Go、Ruby、PHP、Java、Elixir、Rust、.NET 等），无需 Dockerfile。免费额度包括一个空闲时休眠的应用（0.25 vCPU、256 MB RAM）、带 TLS 的自定义域名，无需信用卡。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，让你快速构建、交付和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费套餐](https://wundergraph.com/pricing)中最多 3 个项目、1GB 出站流量、每月 300 分钟构建时间
  * [YepCode](https://yepcode.io) - 在无服务器环境中连接 API 和服务的一体化平台。它带来无代码工具的全部敏捷性与优势，同时具备使用编程语言的完整能力。免费额度包括[1.000 yeps](https://yepcode.io/pricing/)。

**[⬆️ 返回顶部](#目录)**

## BaaS

  * [Activepieces](https://www.activepieces.com) - 在你的应用后端构建自动化流程，将多个应用连接起来。例如，当应用中有事件触发时发送 Slack 消息或添加一行 Google Sheet。每月最多 5,000 个任务免费。
  * [back4app.com](https://www.back4app.com) - Back4App 是基于 Parse Platform 的易用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) - 移动端和 Web BaaS，提供 1 GB 免费文件存储空间、每月 50,000 条推送通知，以及表中 1000 个数据对象。
  * [connectycube.com](https://connectycube.com) - 不限聊天消息、点对点语音和视频通话、文件附件和推送通知。用户数不超过 1000 的应用免费。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管你的数据（带关系的文档和可串行化的 ACID 事务）、无服务器函数，以及向各类客户端推送更新的 WebSocket。小型项目免费——最多 1M 条记录、每月 5M 次函数调用。
  * [ETLR](https://etlr.io) - 使用 YAML 定义、版本化并部署自动化脚本。面向开发者、可替代拖拽式工具的选择。可用于定时任务、AI 代理和基础设施监控。免费额度包括每月 100 额度。
  * [Flutter Flow](https://flutterflow.io) - 无需编写一行代码即可构建 Flutter 应用 UI。还支持 Firebase 集成。免费套餐包括 UI Builder 和免费模板的完整访问权限。
  * [getstream.io](https://getstream.io/) - 在几小时内而非数周内构建可扩展的应用内聊天、消息、音视频和信息流
  * [IFTTT](https://ifttt.com) - 自动化你喜爱的应用和设备。免费 2 个 Applet
  * [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费 100 个任务，15 分钟
  * [LeanCloud](https://leancloud.app/) - 移动端后端。免费提供 1GB 数据存储空间、256MB 实例、每天 3K 次 API 请求和每天 10K 次推送。（API 与 Parse Platform 非常相似）
  * [nhost.io](https://nhost.io) - 面向 Web 和移动应用的无服务器后端。免费套餐包括 PostgreSQL、GraphQL（Hasura）、认证、存储空间和无服务器函数。
  * [onesignal.com](https://onesignal.com/) - 不限数量的免费推送通知。每月 10,000 封邮件发送，联系人不限，并可使用 Auto Warm Up。
  * [paraio.com](https://paraio.com) - 具备灵活认证、全文搜索和缓存的后端服务 API。一个应用免费，1GB 应用数据。
  * [pubnub.com](https://www.pubnub.com/) - 每月最多 100 万条消息和每天 100 台活跃设备的免费推送通知
  * [pusher.com](https://pusher.com/beams) - 为 2000 名月活用户提供免费且不限数量的推送通知。面向 iOS 和 Android 设备的单一 API。
  * [simperium.com](https://simperium.com/) - 即时自动地将数据同步到各处，多平台，结构化数据的发送和存储不限，每月最多 2,500 名用户
  * [snill.ai](https://snill.ai) - AI 无代码平台，可将自然语言描述转换为完整的业务系统，包含关系数据库、看板、工作流、REST API 和 webhook。面向个人运营者的免费套餐包括 2 个应用、1,000 条记录和每天 10 次 AI 请求。
  * [Supabase](https://supabase.com) - 构建后端的开源 Firebase 替代方案。免费套餐提供认证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) - 具备认证、配额、监控和分析的 API 管理。免费云服务
  * [zapier.com](https://zapier.com/) - 连接你使用的应用以自动化任务。每 15 分钟五个 zap，每月 100 个任务
更新时间，五个活跃自动化，webhook。


**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) - 用于构建管理面板、内部工具和仪表板的低代码项目。可集成 15 种以上数据库和任意 API。
  * [BudiBase](https://budibase.com/) - Budibase 是开源低代码平台，可在数分钟内创建内部应用。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
  * [Clappia](https://www.clappia.com) - 面向业务流程应用构建的低代码平台，可自定义移动端和 Web 应用。提供拖拽式界面，具备离线支持、实时位置追踪以及与多种第三方服务集成等特性
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，可使用 OpenAI、Anthropic、Firecrawl 等内置免费 API。适合构建 AI 智能体／内部工具并与团队共享。免费额度包含 API 的完整访问权限、AI 编程助手和每月 10,000 次执行额度。
  * [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。单个用户免费，每月 100 万次工作流活动（[另有德语版](https://www.manubes.de)）。
  * [Mendix](https://www.mendix.com/) - 面向企业的快速应用开发平台，可访问的沙箱环境不限数量，支持全部用户，每个应用 0.5 GB 存储空间和 1 GB 内存。此外，免费额度中也允许使用 Studio 和 Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) - 面向本地部署或云端的企业级 Web 开发 PaaS，免费的“个人环境”方案提供不限量的代码和最多 1 GB 数据库
  * [ReTool](https://retool.com/) - 用于构建内部应用的低代码平台。Retool 高度可改造。只要能以 JavaScript 和 API 写出来，就能在 Retool 中做出来。免费额度允许每月最多五名用户、不限数量的应用和 API 连接。
  * [ToolJet](https://www.tooljet.com/) - 用于构建业务应用的可扩展低代码框架。可连接数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖拽式应用构建器搭建应用。
  * [UI Bakery](https://uibakery.io) - 低代码平台，可更快速地构建自定义 Web 应用。支持通过拖拽构建 UI，并可用 JavaScript、Python 和 SQL 做高度定制。提供云端和自托管两种方案。最多 5 名用户免费。

**[⬆️ 返回顶部](#目录)**

## Web 托管

  * [Alwaysdata](https://www.alwaysdata.com/) - 1 GB 免费虚拟主机，支持 MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。可使用自定义 Web 服务器，通过 FTP、WebDAV 和 SSH 访问。包含邮箱、邮件列表和应用安装器。免费套餐不含自定义域名。
  * [Awardspace.com](https://www.awardspace.com) - 免费虚拟主机，另附一个免费短域名，支持 PHP、MySQL、应用安装器、邮件发送，且无广告。
  * [boomurl](https://boomurl.com) - 无需账号即可将静态站点（HTML／Markdown／图片／PDF 或整个文件夹）发布到即时生成的 HTTPS 网址；免费额度会显示一个小横幅。支持自定义域名。
  * [Bubble](https://bubble.io/) - 可视化编程，无需代码即可构建 Web 和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 面向 Web3 前端的去中心化 Web 托管平台，致力于提升可用性和安全性，并为用户提供额外的访问入口。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform 入门套餐上免费构建和部署三个静态站点。
  * [FreeFlarum](https://freeflarum.com/) - 由社区驱动的免费 Flarum 托管，最多 250 名用户（捐赠可去除页脚水印）。
  * [Harvis.dev](https://harvis.dev) - 通过 CLI（`npx harvis`）托管静态站点，无需配置文件或构建步骤。包含免费子域名、免费表单提交收集、GitHub Actions 集成、CloudFlare CDN、免费 SSL。
  * [Koyeb](https://www.koyeb.com/) - 无服务器平台，免费的 Hobby 套餐提供每月 550 小时免费计算时长（免费额度 512 MB 内存）、1 个免费 PostgreSQL 数据库，以及自定义域名 SSL。
  * [MDB GO](https://mdbgo.com/) - 单个项目免费托管，容器存活期两周，每个项目 500 MB 内存，SFTP 访问、1G 磁盘空间。
  * [Mirin](https://mirin.com) - 面向开发者构建 React、Vue 或 Svelte 组件站点的建站平台，提供可视化编辑、表单、分析和全球 CDN 托管。免费额度包含 1 个站点，页面和提交数量不限。
  * [Neocities](https://neocities.org) - 静态站点，1 GB 免费存储空间，200 GB 带宽。
  * [Netlify](https://www.netlify.com/) - 每月 300 额度内免费构建、部署和托管静态站点／应用（相当于 30 GB 带宽）。
  * [Pagehaus](https://pagehaus.app) - 纯 HTML 站点托管，可通过 SFTP 或在浏览器中上传。免费套餐：1 个站点、250 MB 存储空间、每月 20 GB 流量、pagehaus.site 子域名上的 HTTPS、联系表单、服务端包含（SSI）和无 Cookie 分析。不过期，无需信用卡。
  * [PandaStack](https://www.pandastack.io/) - 面向开发者的生态体系，提供多种形式的 Web 托管（静态 Web 托管、基于容器的 Web 托管、WordPress 以及许多几次点击即可部署的其他托管应用）。一个免费 Web 托管（静态或容器化）和一个免费数据库，含 100GB 带宽和每月 300 分钟构建时长。
  * [pantheon.io](https://pantheon.io/) - Drupal 和 WordPress 托管、自动化 DevOps 以及可扩展的基础设施。对开发者和代理机构免费。不含自定义域名。
  * [Qoddi](https://qoddi.com) - 类似 Heroku 的 PaaS 服务，以开发者为导向，功能一应俱全。免费额度可用于静态资源、预发布环境和开发者应用。
  * [readthedocs.org](https://readthedocs.org/) - 免费文档托管，支持版本管理、PDF 生成等功能
  * [render.com](https://render.com) - 统一的云平台，用于构建和运行应用与站点，提供免费 SSL、全球 CDN、私有网络、从 Git 自动部署，以及针对 Web 服务、数据库和静态网页的完全免费套餐。
  * [Revdoku](https://revdoku.com/) — 可直接从 ChatGPT、Claude、Codex 及其他 AI 智能体发布文件、报告和自定义微型站点，作为公开或受密码保护的网站。免费额度：2GB 存储空间、2 个在线站点／应用、1 个数据库（25 MB）、3 个 AI 连接、每个存储桶 1k 个文件（单文件 100 MB）、基础分析。
  * [ShipStatic](https://shipstatic.com) - 你的 AI 智能体可以自行驱动的静态托管：执行 `npx @shipstatic/ship ./dist` 站点即上线，无需安装、无需注册、无需仓库、无需构建。还提供 MCP、SDK 和 API。免费账号可永久保留站点，并含自动 HTTPS、全球边缘分发和不计流量的带宽；自定义域名需付费。
  * [SourceForge](https://sourceforge.net/) - 免费查找、创建和发布开源软件
  * [surge.sh](https://surge.sh/) - 面向前端开发者的静态网页发布服务。站点数量不限，支持自定义域名
  * [tilda.cc](https://tilda.cc/) - 一个站点、50 个页面、50 MB 存储空间，仅可使用 170 多个可用区块中的主要预定义区块，不含字体、不含网站图标，也不含自定义域名
  * [Vercel](https://vercel.com/) - 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN，每次 `git push` 都会生成唯一的预览网址。非常适合 Next.js 及其他静态站点生成器。
  * [Versoly](https://versoly.com/) - 面向 SaaS 的建站工具：站点数量不限、70 多个区块、五个模板、自定义 CSS、网站图标、SEO 和表单。不含自定义域名。
* [Stormkit](https://www.stormkit.io) - 可自托管的 Vercel 替代方案，用于构建、托管和部署现代前端与 JavaScript 应用。免费套餐包含 1 个应用、50 GB 带宽、不限数量的自定义域名和免费 SSL。

**[⬆️ 返回顶部](#目录)**

## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由 Cloudflare 提供的免费公共 DNS 解析器，快速且安全（加密你的 DNS 查询）。可用于绕过网络运营商的 DNS 封锁、防止 DNS 查询被窃听，以及[拦截成人内容和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可[通过 API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests) 使用。注意：它只是 DNS 解析器，不是 DNS 托管商。
  * [1984.is](https://www.1984.is/product/freedns/) - 免费 DNS 服务，包含 API 以及许多其他免费 DNS 功能。
  * [cloudns.net](https://www.cloudns.net/) - 免费 DNS 托管，最多 1 个域名、50 条记录
  * [deSEC](https://desec.io) - 支持 API 的免费 DNS 托管，以安全为设计出发点。运行于开源软件之上，并由 [SSE](https://www.securesystems.de/) 提供支持。
  * [dns.he.net](https://dns.he.net/) - 免费 DNS 托管服务，支持动态 DNS
  * [dnspod.com](https://www.dnspod.com/) - 免费 DNS 托管。
  * [duckdns.org](https://www.duckdns.org/) - 免费 DDNS，免费额度下最多 5 个域名。附带各种场景的配置指南。
  * [Dynv6.com](https://dynv6.com/) - 免费 DDNS 服务，支持 [API](https://dynv6.com/docs/apis)，可管理多种 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费 DNS 托管。还基于大量公共用户[贡献的域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后可从“Subdomains”菜单获取免费子域名。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 免费 DNS 托管，最多 3 个域名，支持 DNSSEC
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner 提供的免费 DNS 托管，支持 API。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为提供的免费 DNS 托管
  * [LocalCert](https://localcert.net) - 免费的 `.localcert.net` 子域名，与公共 CA 兼容，可用于私有网络内部
  * [luadns.com](https://www.luadns.com/) - 免费 DNS 托管，三个域名，全部功能并有合理限额
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费 DNS。域名数量不限
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月 300K 次免费查询
  * [noip.at](https://noip.at/) - 免费 DDNS 服务，无需注册，不做追踪、日志记录和广告。域名数量不限。
  * [noip](https://www.noip.com/) - 动态 DNS 服务，免费提供最多 3 个主机名，每 30 天需确认一次
  * [sslip.io](https://sslip.io/) - 免费 DNS 服务，当以包含内嵌 IP 地址的主机名查询时返回该 IP 地址。
  * [zilore.com](https://zilore.com/en/dns) - 免费 DNS 托管，支持 5 个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 免费 DNS 托管，支持动态 DNS。
  * [Zonomi](https://zonomi.com/) - 免费 DNS 托管服务，DNS 即时生效。免费套餐：1 个 DNS 区域（域名），最多 10 条 DNS 记录。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [DigitalPlat](https://domain.digitalplat.org) - 免费子域名。
  * [DNSHE](https://www.dnshe.com/) - 可在多个域名后缀下免费注册子域名，支持自定义名称服务器。
  * [isroot.in](https://isroot.in) - 免费 isroot.in 子域名。
  * [pp.ua](https://nic.ua/) - 免费 pp.ua 子域名。

**[⬆️ 返回顶部](#目录)**

## IaaS

  * [4EVERLAND](https://www.4everland.org/) - 兼容 AWS S3——API、界面操作、CLI 及其他上传方式，可安全、便捷、高效地上传和存储来自 IPFS 与 Arweave 网络的文件。注册用户可免费获得 6 GB IPFS 存储空间和 300MB Arweave 存储空间。小于 150 KB 的 Arweave 文件上传免费。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。免费 10 GB（类似 Amazon S3）对象存储，时长不限
  * [filebase.com](https://filebase.com/) - 由区块链驱动的 S3 兼容对象存储。5 GB 免费存储空间，时长不限。
  * [Modal](https://modal.com) - AI 驱动的 IaaS，提供充裕的计算和存储资源；每月提供 30 美元免费额度（部分账号可能限制为 5 美元）

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是面向 JavaScript 开发者的全栈低代码开发平台，构建在 MySQL、GraphQL 和无服务器后端即服务之上。可通过 UI 应用构建器快速开始构建 Web 应用并快速扩展。免费额度包含行数：2,500、存储空间：500、无服务器计算：1Gb/h、客户端应用用户：5。
  * [airtable.com](https://airtable.com/) - 看起来像电子表格，实为关系型数据库；数据库数量不限，每个数据库 1,200 行，每月 1,000 次 API 请求
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）套餐。单节点、1 CPU、1GB 内存，PostgreSQL 和 MySQL 另有 1GB 存储空间。可轻松迁移到更高规格套餐或跨云迁移。
  * [BackupDrill](https://backupdrill.com) - 将 Supabase 项目备份到你自己的 S3/R2/B2 存储桶，然后按计划执行恢复演练，以验证备份确实可恢复。提供免费套餐：一个项目每周备份，首次备份可做一次恢复演练。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费额度每月提供 5,000 万 RU 和 10 GiB 存储空间（相当于价值 15 美元）。([什么是 Request Units](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
  * [codehooks.io](https://codehooks.io/) - 易用的 JavaScript 无服务器 API／后端与 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查询、任务系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费套餐有 5GB 存储空间，每分钟 60 次 API 调用。包含 2 名开发者。无需信用卡。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，1 个节点、8GB 存储空间，为开发者打造从 IoT 到 AI 的下一代应用而构建
  * [CrateDB](https://crate.io/) - 用于实时分析的分布式开源 SQL 数据库。[免费额度 CRFREE](https://crate.io/lp-crfree)：单节点、2 CPU、2 GiB 内存、8 GiB 存储空间。每个组织一个集群，无需付款方式。
  * [filess.io](https://filess.io) - filess.io 是一个平台，可免费创建两个数据库，每个数据库最大 10 MB，支持以下 DBMS：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [InfluxDB](https://www.influxdata.com/) - 时序数据库，免费额度为每 5 分钟 3MB 写入、每 5 分钟 30MB 读取，以及 10,000 个基数序列
  * [Layerbase](https://layerbase.com/) - 2 个免费托管数据库，可从 Postgres、MariaDB、Redis、Valkey、DuckDB、SQLite、libSQL 和 TypeDB 中选择。全部启用 TLS。8 个免费引擎中有 7 个可创建分支，每个数据库 1 个分支——免费额度下的吞吐上限为每天 10 GB、每周 50 GB、每月 150 GB。更高套餐另提供 10 个引擎，且不计流量。
  * [MemCachier](https://www.memcachier.com/) - 托管 Memcache 服务。免费额度为 25MB、1 个代理服务器和基础分析
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费额度提供 512 MB
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管原生图数据库／分析平台，提供 Cypher 查询语言和 REST API。图规模有限制（20 万个节点、40 万条关系）。
  * [Neon](https://neon.com) - 托管 Postgres，每个项目 0.5 GB 存储空间，100 个项目，每个项目 10 个分支，每个项目每月 100 CU 小时计算量，自动扩缩容最高 2 CU，闲置 5 分钟后缩容至零。包含 S3 兼容对象存储，每个项目 5 GB，并随数据库一起分支。每个项目 5 GB 网络流量，在所有产品间共享。
  * [Nile](https://www.thenile.dev/) - 面向 B2B 应用的 Postgres 平台。数据库数量不限，始终可用、不会停机，1GB 存储空间（总量），5,000 万查询令牌，自动扩缩容，向量嵌入数量不限
  * [Prisma Postgres](https://prisma.io/postgres) - 极速的托管 Postgres（PostgreSQL 17），基于 unikernel 构建并在裸金属上运行，没有冷启动。免费套餐包含 1.01 GB 存储空间、每月 20 万次操作和 50 个数据库，无需信用卡。可与任何 Postgres 客户端或 ORM 配合使用。
  * [Qdrant](https://qdrant.tech/) - 用于嵌入数据的向量数据库，单节点集群，0.5 vCPU、1GB 内存、4GB 磁盘。
  * [restdb.io](https://restdb.io/) - 快速直接的 NoSQL 云数据库服务。使用 restdb.io 可获得模式、关系、自动生成的 REST API（支持类 MongoDB 查询），以及高效的多用户数据管理界面。免费套餐允许 3 名用户、2500 条记录，每秒 1 次 API 请求。
  * [ReviveDB](https://revivedb.dev/) - 为你的 Supabase 应用留一条回退之路。ReviveDB 保存数据库以及 Auth、Storage 文件、Edge Functions 和受支持项目配置的恢复点，并且只有在数据库已从备份恢复并比对之后，才会将备份标记为就绪。免费套餐覆盖一个项目，每周备份，三个恢复点。
  * [SeaTable](https://seatable.io/) - 由 Seafile 团队打造的灵活类电子表格数据库。表数量不限、2,000 行、1 个月版本历史、最多 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) - 云数据平台提供免费额度，且在公测期间所有套餐完全免费
  * [StackBy](https://stackby.com/) - 一款兼具电子表格的灵活性、数据库的能力，并内置与常用业务应用集成的工具。免费套餐包含不限用户数、十个 stack，每个 stack 2GB 附件。
  * [Tinybird](https://tinybird.co) - 无服务器托管的 ClickHouse，通过 HTTP 进行无连接数据摄入，并可将 SQL 查询发布为托管 HTTP API。免费额度没有时间限制，10GB 存储空间，每天 1000 次 API 请求。
  * [Turso by ChiselStrike](https://turso.tech/) - Turso 是在边缘数据库中提供 SQLite 开发者体验。Turso 提供永久免费的入门套餐：9 GB 总存储空间、最多 500 个数据库、最多 3 个位置、每月 10 亿次行读取，并支持使用 SQLite 进行本地开发。
  * [Upstash](https://upstash.com/) - 无服务器 Redis，免费额度为每月最多 500K 条命令、数据库最大 256MB、20 个并发连接

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、Web Socket 服务器及其他路由器

  * [cname.dev](https://cname.dev/) - 免费且安全的动态反向代理服务。
  * [conveyor.cloud](https://conveyor.cloud/) - Visual Studio 扩展，可将 IIS Express 暴露到本地网络，或通过隧道暴露到公共网址。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费套餐包含一个欧盟服务器、随机子域名和单用户。
  * [Hamachi](https://www.vpn.net/) - LogMeIn Hamachi 是托管 VPN 服务，可将类局域网安全地扩展到分散的团队；免费套餐允许创建不限数量的网络，每个网络最多 5 人
  * [Hookdeck](https://hookdeck.com/pricing) - 随时随地开发、测试和监控你的 webhook。每月 100K 次请求和 100K 次尝试，数据保留三天。
  * [localhost.run](https://localhost.run/) - 通过隧道将本地运行的服务器暴露到公共网址。
  * [localtonet](https://localtonet.com/) - 多协议隧道，支持 HTTP、TLS、TCP、UDP、文件服务器（Default、SFTP、WebDAV）和代理隧道（HTTP、SOCKS5、Shadowsocks、VLESS）。免费套餐：1 条隧道、每月 1GB 带宽、30 分钟超时（HTTP 隧道除外）。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) - 通过隧道将本地运行的服务器暴露到公共网址。提供免费托管版本，且为[开源](https://github.com/localtunnel/localtunnel)。
  * [LocalXpose](https://localxpose.io) - 反向代理，可将本地 localhost 服务器暴露到互联网。免费套餐的隧道存活时间为 15 分钟。
  * [ngrok.com](https://ngrok.com/) - 通过隧道将本地运行的服务器暴露到公共网址。
  * [Pinggy](https://pinggy.io) - 一条命令即可为 localhost 生成公共网址，无需下载。支持 HTTPS／TCP／TLS 隧道。免费套餐的隧道存活时间为 60 分钟。
  * [Radmin VPN](https://www.radmin-vpn.com/) - 通过支持 VPN 的类局域网将多台计算机连接起来。对等节点数量不限。（Hamachi 替代方案）
  * [serveo](https://serveo.net/) - 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，没有限制。
  * [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) - Twilio STUN
  * [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN
  * [Tailscale](https://tailscale.com/) - 零配置 VPN，使用开源 WireGuard 协议。可安装在 MacOS、iOS、Windows、Linux 和 Android 设备上。个人使用的免费套餐支持 100 台设备和三名用户。
  * [webhookrelay.com](https://webhookrelay.com) - 管理、调试、分发并将所有 webhook 代理到公共或内部（即 localhost）目标。还可通过获取公共 HTTP 端点 (`https://yoursubdomain.webrelay.io <----> http://localhost:8080`) 把私有网络中运行的服务器经隧道暴露出来。
  * [Xirsys](https://www.xirsys.com/pricing/) - STUN 使用不限量，另有每月 500 MB TURN 带宽，带宽有上限，单一地理区域。
  * [ZeroTier](https://www.zerotier.com) - FOSS 托管的虚拟以太网服务。免费套餐可创建不限数量的端到端加密网络，每个网络 25 个客户端。提供桌面／移动／NA 客户端；Web 界面可配置自定义路由规则，并在私有网络中审批新的客户端节点

**[⬆️ 返回顶部](#目录)**

## 问题追踪与项目管理

  * [acunote.com](https://www.acunote.com/) - 免费的项目管理和 SCRUM 软件，最多 5 名团队成员
  * [AgileHero](https://agilehero.io/) - 一体化项目管理工具。免费套餐为 2 名用户提供看板、待办列表、史诗、估算扑克、MCP 服务器、REST API 和 webhook。
  * [asana.com](https://asana.com/) - 含协作者的私有项目免费
  * [Backlog](https://backlog.com) - 在一个平台上提供团队发布优秀项目所需的一切。免费套餐提供 1 个项目、十名用户和 100MB 存储空间。
  * [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、类似论坛的消息、文件共享和时间追踪。最多 3 个项目、20 名用户和 1GB 存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) - 内网和项目管理工具。免费套餐提供 5GB 空间，用户数不限。
  * [cacoo.com](https://cacoo.com/) - 在线实时图表：流程图、UML、网络图。免费额度最多 15 名用户／图表、25 张画布
  * [clickup.com](https://clickup.com/) - 项目管理。免费版，另有带云存储的高级版。提供移动应用和 Git 集成。
  * [Clockify](https://clockify.me) - 时间追踪和工时表应用，可跨项目记录工作时长。用户数不限，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) - 使用 Cloudcraft 可视化设计器，几分钟内设计出专业的架构图，针对 AWS 优化，智能组件还能显示实时数据。免费套餐为单个用户提供不限数量的私有图表。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具，帮助团队高效协作并共享知识。免费套餐最多 10 名用户。
  * [Crosswork](https://crosswork.app/) - 多用途项目管理平台。最多 3 个项目免费，用户数不限，1 GB 存储空间。
  * [diagrams.net](https://app.diagrams.net/) - 在线图表，本地存储在 Google Drive、OneDrive 或 Dropbox 中。所有功能和存储级别均免费
  * [easyretro.io](https://www.easyretro.io/) - 简单直观的冲刺回顾工具。免费套餐提供三个公开看板，每个看板每月一次调查。
  * [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间追踪、日历、文件和密码管理器。免费套餐提供不限数量的项目、用户和文件存储。
  * [GForge](https://gforge.com) - 面向复杂项目的项目管理和问题追踪工具集，提供本地部署和 SaaS 两种方案。SaaS 免费套餐为前五名用户免费，开源项目也免费。
  * [gleek.io](https://www.gleek.io) - 面向开发者的免费“描述转图表”工具。用关键词即可创建非正式的 UML 类图、对象图或实体关系图。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector 输出两个 GraphQL schema 之间的变更列表。每处差异都有精确说明，并标记为破坏性、非破坏性或危险。
  * [Helploom](https://helploom.com) - 客户支持软件，永久免费套餐提供在线客服聊天。简单、轻量、美观。安装只需复制粘贴一段脚本。由开发者打造。
  * [HeyRetro](https://heyretro.io/) - 实时冲刺回顾平台，具备投票、计时器、调查、访客协作和破冰游戏。永久免费套餐包含每月一个看板、匿名调查和访客链接分享。
  * [Hygger](https://hygger.io) - 项目管理平台。免费套餐提供不限数量的用户、项目和看板，以及 100 MB 存储空间。
  * [Ilograph](https://www.ilograph.com/) - 交互式图表，让用户从多个视角和细节层级查看自己的基础设施。图表可以用代码表达。免费额度提供不限数量的私有图表，最多 3 名查看者。
  * [Jira](https://www.atlassian.com/software/jira) - 高级软件开发项目管理工具，广泛应用于各类企业环境。免费套餐最多 10 名用户。
  * [kan.bn](https://kan.bn/) - 强大灵活的看板应用，帮助你在同一处组织工作、跟踪进度并交付成果。免费套餐最多 1 名用户，看板、列表和卡片数量不限。
  * [kanbanflow.com](https://kanbanflow.com/) - 基于看板的项目管理。免费版，另有提供更多选项的高级版
  * [kanbantool.com](https://kanbantool.com/) - 基于看板的项目管理。免费套餐提供两个看板和两名用户，不含附件或文件。
  * [Kitemaker.co](https://kitemaker.co) - 在产品开发流程的所有阶段协作，并在 Slack、Discord、Figma 和 Github 之间跟踪工作。用户数不限、空间不限。免费套餐最多 250 个工作项。
  * [Kiter.app](https://www.kiter.app/) - 让任何人都能组织求职过程，并跟踪面试、机会和人脉。强大的 Web 应用和 Chrome 扩展。完全免费。
  * [Kumu.io](https://kumu.io/) - 关系图谱，支持动画、装饰、筛选、聚类、电子表格导入等。免费额度允许不限数量的公开项目。图规模不限。学生可免费使用私有项目。如果你不希望文件公开留在线上，可使用沙盒模式（上传、编辑、下载、丢弃）。
  * [leiga.com](https://www.leiga.com/) - Leiga 是一款利用 AI 自动管理项目的 SaaS 产品，帮助团队保持专注、释放巨大潜能，确保项目按计划推进。最多 10 名用户免费，20 个自定义字段，2GB 存储空间，AI 视频录制每段限制 5 分钟，自动化运行每月每用户 20 次。
  * [Linear](https://linear.app/) - 界面简洁的问题追踪工具。成员数不限免费使用，单个上传文件最大 10MB，250 个问题（不含归档）
  * [Lucidchart](https://www.lucidchart.com/) - 具备协作功能的在线图表工具。免费套餐提供三个可编辑文档、100 个专业模板和基础协作功能。
  * [MeisterTask](https://www.meistertask.com/) - 面向团队的在线任务管理。最多 3 个项目免费，项目成员数量不限。
  * [MeuScrum](https://www.meuscrum.com/en) - 免费的在线 scrum 工具，带看板
  * [myspec.dev](https://myspec.dev/) - 规范驱动开发（SDD）架构工具，通过访谈开发者生成结构化的四文件规范包，并集成 MCP 服务器。免费额度覆盖 20 个项目和 100 个规范文件。
  * [nTask](https://www.ntaskmanager.com/) - 项目管理软件，让团队协作、规划、分析和管理日常工作。基础套餐永久免费，含 100 MB 存储空间和五个用户／团队。工作区、会议、任务分派、工时表和问题追踪均不限数量。
  * [Plane](https://plane.so/) - Plane 是一款简单、可扩展的开源项目与产品管理工具。成员数不限免费使用，单个上传文件最大 5MB，1000 个问题。
  * [planitpoker.com](https://www.planitpoker.com/) - 免费的在线计划扑克（估算工具）
  * [point.poker](https://www.point.poker/) - 在线计划扑克（基于共识的估算工具）。用户、团队、会话、轮次和投票数量不限，免费使用。无需注册。
  * [Pulse.red](https://pulse.red) - 免费极简的项目时间追踪与工时表应用。
  * [ScrumFast](https://www.scrumfast.com) - 界面非常直观的 Scrum 看板，最多 5 名用户免费。
  * [Sflow](https://sflow.io) - sflow.io 是一款为敏捷软件开发、市场营销、销售和客户支持打造的项目管理工具，尤其适合外包和跨组织协作项目。免费套餐最多 3 个项目和五名成员。
  * [Shake](https://www.shakebugs.com/) - 面向移动应用的应用内缺陷上报与反馈工具。免费套餐，每个应用每月十份缺陷报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多 10 名用户永久免费。
  * [taiga.io](https://taiga.io/) - 面向初创公司和敏捷开发者的项目管理平台，开源项目免费
  * [taskade.com](https://www.taskade.com/) - 实时协作的任务列表和团队大纲。免费套餐提供一个工作区，任务和项目数量不限；1GB 文件存储；1 周项目历史；每场视频会议五名参与者。
  * [Teaminal](https://www.teaminal.com) - 面向远程团队的站会、回顾和冲刺规划工具。最多 15 名用户免费。
  * [teamwork.com](https://teamwork.com/) - 项目管理与团队聊天。五名用户和两个项目免费。另提供高级套餐。
  * [teleretro.com](https://www.teleretro.com/) - 简单有趣的回顾工具，带破冰环节、GIF 和表情。免费套餐包含三个回顾和不限成员数。
  * [Tenzu](https://tenzu.net/) - 面向敏捷团队的轻量项目管理工具。该 SaaS 依靠自愿付费；用户始终可以选择支付 0，且没有功能付费墙 {[更多详情](https://tenzu.net/pricing/)}
  * [titanapps.io](https://titanapps.io/) - 面向 Jira 和 monday.com 的效率工具，在问题／任务内提供结构化清单、模板和审批。小团队可使用免费套餐。
  * [todoist.com](https://todoist.com/) - 协作与个人任务管理。免费套餐包含：5 个活跃项目、项目中五名用户、上传文件最大 5MB、三个筛选器和一周活动历史。
  * [Toggl](https://toggl.com/) - 提供两款免费效率工具。[Toggl Track](https://toggl.com/track/) 是时间管理与追踪应用，其免费套餐提供无缝的时间追踪与报表，专为自由职业者设计。追踪记录、项目、客户、标签、报表等均不限数量。[Toggl Plan](https://toggl.com/plan/) 用于任务规划，其免费套餐面向独立开发者，任务、里程碑和时间线不限数量。
  * [trello.com](https://trello.com/) - 基于看板的项目管理。个人看板不限数量，团队看板 10 个。
  * [Tweek](https://tweek.so/) - 简洁的每周待办日历与任务管理。
  * [Wikifactory](https://wikifactory.com/) - 带项目、VCS 和问题跟踪的产品设计服务。免费套餐提供不限数量的项目和协作者，以及 3GB 存储空间。
  * [Yodiz](https://www.yodiz.com/) - 敏捷开发和问题追踪。最多 3 名用户免费，项目数量不限。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - 为 FOSS 项目和私有项目提供免费的托管 YouTrack（InCloud）（三名用户以内免费）。包含时间追踪和敏捷看板
  * [zenhub.com](https://www.zenhub.com) - GitHub 内唯一的项目管理方案。公开仓库、OSS 和非营利组织免费
  * [zenkit.com](https://zenkit.com) - 项目管理与协作工具。最多 5 名成员免费，5 GB 附件。
  * [Zube](https://zube.io) - 项目管理，免费套餐支持 4 个项目和 4 名用户。提供 GitHub 集成。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件分享平台，不限速度、带宽、文件数量和下载次数等。主要面向 Android 开发相关文件，如 APK 构建、定制 ROM 与修改等。但似乎也接受其他任意文件。
  * [anon.li Drop](https://anon.li/drop) - 零知识端到端加密文件分享，采用客户端 AES-256-GCM 加密，服务端不访问任何数据。通过网站、CLI 或 API 可免费上传最大 5GB 的文件，最长有效期 3 天。
  * [borgbase.com](https://www.borgbase.com/) - 为 Borg Backup 提供简单安全的异地备份托管。10 GB 免费备份空间和两个仓库。
  * [cloudinary.com](https://cloudinary.com/) - 为网站和应用提供图片上传、强大的处理、存储与分发，支持 Ruby、Python、Java、PHP、Objective-C 等库。免费额度包含每月 25 个积分。一个积分等于 1,000 次图片转换、1 GB 存储空间或 1 GB CDN 用量。
  * [degoo.com](https://degoo.com/) - 基于 AI 的云存储，免费提供最高 20 GB、三台设备、5 GB 推荐奖励（账户 90 天不活跃）。
  * [dlvr.sh](https://dlvr.sh/) - 面向智能体与自动化的临时文件投递。免费额度包含每 24 小时 10 次投递，并提供 API、MCP 和 CLI 访问。
  * [Dropshare](https://dropsha.re) - 零知识文件分享。端到端加密文件分享，采用 AES-256-GCM 加密、客户端处理，服务端不访问任何数据。免费上传最大 1GB 的文件，不收集任何数据。
  * [embed.ly](https://embed.ly/) - 提供在网页中嵌入媒体、响应式图片缩放以及从网页提取元素的 API。每月最多 5,000 个 URL 免费，速率 15 次请求/秒
  * [Ente](https://ente.io/) - Ente 是一个端到端加密的照片、视频和 2FA 密钥云服务。也可自托管，并提供慷慨的永久免费额度 10GB。免费额度用户的数据仅保留单份副本。
  * [FileShot.io](https://fileshot.io) - 零知识加密文件分享。AES-256-GCM 浏览器端加密确保文件在上传前于浏览器内完成加密。发送方和接收方均无需账户。可自托管（MIT 开源）。免费额度包含不限次数的上传，无文件大小限制。
  * [file.io](https://www.file.io) - 2 GB 文件存储空间。文件在下载一次后自动删除。提供 REST API 操作存储。速率限制为每分钟一次请求。
  * [freetools.site](https://freetools.site/) - 免费在线工具。转换或编辑文档、图片、音频、视频等。
  * [getpantry.cloud](https://getpantry.cloud/) - 简单的 JSON 数据存储 API，非常适合个人项目、黑客松和移动应用！
  * [GoFile.io](https://gofile.io/) - 免费文件分享与存储平台，可通过网页界面和 API 使用。不限文件大小、带宽、下载次数等。但文件在失去活跃度（超过十天未被下载）后会被删除。
  * [gumlet.com](https://www.gumlet.com/) - 通过 CDN 提供图片与视频的托管、处理和流式传输。提供慷慨的免费额度：视频每月 250 GB，图片每月 30 GB。
  * [hyperserve.io](https://hyperserve.io/) - 面向开发者的视频后端 API：接受用户上传的任意格式，转码为 MP4，并通过 CDN 全球分发。免费额度包含 50 个视频、每个文件 1 GB 以及每月 250 GB 带宽。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB 免费存储空间
  * [image-charts.com](https://www.image-charts.com/) - 不限次数的图片图表生成，带水印
  * [ImageEngine](https://imageengine.io/) - ImageEngine 是一个易于使用的全球图片 CDN。60 秒内完成配置。支持 AVIF 和 JPEGXL，提供 WordPress、Magento、React、Vue 插件等。在[此处](https://imageengine.io/developer-program/)领取免费开发者账户。
  * [imagekit.io](https://imagekit.io) - 图片 CDN，具备自动优化、实时转换和存储，可在几分钟内集成到现有环境。免费套餐包含每月最多 20GB 带宽。
  * [ImgBB](https://imgbb.com/) - ImgBB 是不限量的图片托管服务。可将图片拖放到屏幕任意位置。单张图片限制 32 MB。上传图片后可获得直链、BBCode 和 HTML 缩略图。登录后可查看上传历史。
  * [Imgbot](https://github.com/marketplace/imgbot) - Imgbot 是一个友好的机器人，为你优化图片并节省时间。优化后的图片意味着在不牺牲质量的前提下获得更小的文件体积。开源项目免费。
  * [imgen](https://www.jitbit.com/imgen/) - 即时图片生成 API（背景叠文字、Logo），用于 opengraph 图片，免费、无水印、CDN
  * [imgix](https://www.imgix.com/) - 图片缓存、管理与 CDN。免费套餐包含 1000 张源图、无限次转换和 100 GB 带宽
  * [imgduck.com](https://imgduck.com/) - 极简快速的图片托管服务，支持直链和 API。免费额度提供 1GB 存储空间和每月不限次数的请求
  * [internxt.com](https://internxt.com) - Internxt Drive 是基于绝对隐私和不妥协安全的零知识文件存储服务。注册即获永久免费的 10 GB！
  * [kraken.io](https://kraken.io/) - 以服务形式提供的网站性能图片优化，免费套餐支持最大 1 MB 的文件
  * [LibreQR](https://libreqr.com) - 专注于隐私且不做追踪的免费二维码生成器。免费使用，不收集任何数据。
  * [MConverter](https://mconverter.eu/) - 批量转换文件。支持多种格式，包括 [AVIF](https://mconverter.eu/convert/to/avif/) 和 JXL。可从视频中提取图像帧。压缩 PDF。每 24 小时免费 15 个文件，每个最大 100 MB，按每批八个处理。
  * [nitropack.io](https://nitropack.io/) - 通过完整的前端优化（缓存、图片与代码优化、CDN）自动加速网站速度。每月最多 5,000 次页面浏览免费
  * [npoint.io](https://www.npoint.io/) - 支持协作编辑 schema 的 JSON 存储
  * [MantleDB](https://mantledb.sh) - 面向脚本和小型应用的匿名 JSON 存储。无需注册；使用 Master AID 进行更新，使用只读 RID 进行公开获取。免费额度包含 1 个 bucket（1MB 限制），并采用 72 小时不活跃回收策略。
  * [otixo.com](https://www.otixo.com/) - 在一处加密、分享、复制和移动所有云存储文件。基础套餐提供不限次数的文件传输，单文件最大 250 MB，并允许五个加密文件
  * [packagecloud.io](https://packagecloud.io/) - 为 YUM、APT、RubyGem 和 PyPI 提供托管的软件包仓库。可通过申请获得有限的免费套餐和开源套餐
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高 10 GB 免费存储空间
  * [Pinata IPFS](https://pinata.cloud) - Pinata 是在 IPFS 上上传和管理文件的最简单方式。友好的用户界面和 IPFS API 使 Pinata 成为平台、创作者和收藏者最易用的 IPFS 固定服务。1 GB 免费存储空间，并可使用 API。
  * [plot.ly](https://plot.ly/) - 绘制并分享你的数据。免费额度包含不限数量的公开文件和十个私有文件
  * [podio.com](https://podio.com/) - 可在最多五人的团队中使用 Podio，并试用基础套餐的功能（用户管理除外）
  * [Proton Drive](https://proton.me/drive) - 为文件和重要文档提供超安全的云存储。免费套餐提供 5gb 存储空间。
  * [QRtracer](https://qrtracer.io) - 内置扫描分析、批量生成和品牌定制的免费二维码生成器，专注于可靠性，不含任何广告。
  * [QuickChart](https://quickchart.io) - 生成可嵌入的图片图表、图形和二维码
  * [redbooth.com](https://redbooth.com) - P2P 文件同步，最多 2 名用户免费
  * [resmush.it](https://resmush.it) - reSmush.it 是一个提供图片优化的免费 API。reSmush.it 已集成到 WordPress、Drupal、Magento 等最常见的 CMS 中。reSmush.it 是使用最广泛的图片优化 API，已处理超过七十亿张图片，且仍然免费。
  * [sirv.com](https://sirv.com/) - 智能图片 CDN，支持即时图片优化和缩放。免费额度包含 500 MB 存储空间和 2 GB 带宽。
  * [SlingSite](https://slingsite.github.io) - 为你的图片和视频生成所有优化版本。免费。批量处理。每张图片可获得以下格式：AVIF、WEBP 和 JPG，各三种选定分辨率（桌面、平板、移动端）。视频可获得：WebM（编解码器 VP9）、MP4（编解码器 HEVC，即 H.265）和 MP4（编解码器 AVC，即 H.264），外加首帧封面图。
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。5 GB 免费存储空间
  * [tinypng.com](https://tinypng.com/) - 压缩和缩放 PNG 与 JPEG 图片的 API，每月免费提供 500 次压缩
  * [transloadit.com](https://transloadit.com/) - 处理文件上传以及视频、音频、图片、文档的编码。通过 GitHub Student Developer Pack 对开源项目、慈善机构和学生免费。商业应用可获得 2 GB 免费试用额度
  * [twicpics.com](https://www.twicpics.com) - 以服务形式提供的响应式图片。提供图片 CDN、媒体处理 API 以及用于自动优化图片的前端库。每月最多 3GB 流量免费。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) - Uploadcare 基于前沿算法提供媒体处理流水线和完备工具集。所有功能对开发者完全免费：文件上传 API 和 UI、图片 CDN 与源站服务、自适应分发以及智能压缩。免费额度包含 3000 次上传、3 GB 流量和 3 GB 存储空间。
  * [VaocherApp QR Code Generator](https://www.vaocherapp.com/qr-code-generator) - 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo……

**[⬆️ 返回顶部](#目录)**

## 设计与 UI

  * [Beste](https://beste.co) - 基于 shadcn/ui 区块的组装优先型网站构建器。免费套餐允许绑定自己的自定义域名，并包含不限页面数、多语言支持、博客、表单和托管。
  * [BoxySVG](https://boxy-svg.com) - 免费的、可安装的 Web 应用，用于绘制 SVG 并导出为 SVG、PNG、jpeg 等格式。
  * [BrandIcons](https://brandicons.dev) - Favicon API。基于 AI 的发现能力，适用于没有图标甚至没有 Web 服务器的域名。免费额度包含每月 500,000 次请求，需标注来源。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) - 一键生成整年所需的不重复图标，完全免费
  * [Canva](https://canva.com) - 用于创建视觉内容的免费在线设计工具。
  * [CodedThemes](https://codedthemes.com/) - 提供精心制作的后台管理面板和 UI 套件，旨在简化和加速现代 Web 开发。
  * [Excalidraw](https://excalidraw.com/) - 免费的在线绘图文档网页，支持免费保存到本地和导出。
  * [figma.com](https://www.figma.com) - 面向团队的在线协作设计工具；免费额度包含不限数量的文件和查看者，最多 2 名编辑者和三个项目。
  * [Flows](https://flows.sh/) - 完全可定制的产品采用平台，用于构建新手引导和用户互动体验。每月最多 250 名受跟踪用户免费。
  * [JoyDemo](https://joydemo.com) - 为你的网站或应用创建可交互、可点击的演示。免费，不限演示数量和不限查看次数。
  * [landen.co](https://www.landen.co) - 为你的初创公司生成、编辑并发布精美的网站和落地页。全程无需代码。免费额度允许拥有一个网站，完全可定制并发布到网上。
  * [lensdump.com](https://lensdump.com/) - 免费云端图片托管。
  * [Logo.dev](https://www.logo.dev) - 覆盖 4400 万+ 品牌的公司 Logo API，调用方式简单如访问一个 URL。前 10,000 次 API 调用免费。
  * [logoapi.sh](https://logoapi.sh/) - 无需密钥或注册的公司 Logo API，是 Clearbit logo API 的理想替代方案，可为任意域名提供 SVG Logo。每个站点每月 100 万次免费请求。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型和协作，免费套餐限制为一个用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费且不限数量的思维导图，并存储在云端。你的思维导图可在任何设备上即时随处访问。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是强大的设计协作与交付工具。免费套餐包含三个用户和五个项目，所有功能均可用。
  * [photopea.com](https://www.photopea.com) - 免费的高级在线设计编辑器，界面与 Adobe Photoshop 一致，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
  * [Plasmic](https://www.plasmic.app/) - 快速、易用且稳健的网页设计工具和页面构建器，可集成到你的代码库中。构建响应式页面或复杂组件；可选择用代码扩展；并发布到生产站点和应用。
  * [Proto.io](https://www.proto.io) - 无需编码即可创建完全可交互的 UI 原型。免费试用结束后可使用免费额度。免费额度包含一个用户、一个项目、五个原型、100MB 在线存储空间以及 proto.io 应用的预览。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一个原型与设计工具。- 它完全免费，并且开源。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 在不同组件和布局中预览主题变更。
  * [smartmockups.com](https://smartmockups.com/) - 创建产品效果图，200 张免费效果图。
  * [SVGicons.com](https://svgicons.com/) - 面向 31.2 万+ 开源 SVG 图标的免费搜索引擎，提供可直接使用的 SVG、React、Vue、HTML 和 CSS 代码。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ 是协作式前端平台，可即时创建并发布无头静态网站。三个免费项目、不限协作人数以及免费代码导出。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松的落地页构建器，含托管。一个网站免费。
  * [Updrafts.app](https://updrafts.app) - 面向基于 tailwindcss 设计的所见即所得网站构建器。非商业用途免费。
  * [Webflow](https://webflow.com) - 带动画和网站托管的所见即所得网站构建器。两个项目免费。
  * [Webstudio](https://webstudio.is/) - Webflow 的开源替代方案。免费套餐在其域名下提供不限数量的网站。五个使用自定义域名的网站。每月一万次页面浏览。2 GB 资源存储空间。
  * [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便签和思维导图。最多创建 4 个免费画板。
  * [Zeplin](https://zeplin.io/) - 设计师与开发者协作平台。展示设计稿、资源和样式指南。一个项目免费。
  * [WrapPixel](https://www.wrappixel.com/) - 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 打造的高质量免费与高级后台管理面板模板！HTML 主题和 UI 套件助你更快构建应用！
  * [Themeselection](https://themeselection.com/) - 精选高质量、现代设计、专业且易用的免费后台管理面板模板，
  * [AdminMart](https://adminmart.com/) - 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 打造的高质量免费与高级后台管理面板和网站模板！

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) - 如时钟般精准运行的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）。
  * [Foursquare](https://developer.foursquare.com/) - 来自 Places API 和 Pilgrim SDK 的位置发现、场所搜索和情境感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线 API。每天三千次免费请求。
  * [geocod.io](https://www.geocod.io/) - 通过 API 或上传 CSV 进行地理编码。每天两千五百次免费查询。
  * [geocodify.com](https://geocodify.com/) - 通过 API 或上传 CSV 进行地理编码和地理解析。每月 1 万次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用的 REST/JSON/JSONP IP 地理位置查询 API。
  * [Geokeo api](https://geokeo.com) - 具备语言纠正等能力的地理编码 API。覆盖全球。每天 2,500 次免费查询
  * [graphhopper.com](https://www.graphhopper.com/) - 提供免费的开发者套餐，涵盖路径规划、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) - 用于地图和位置感知应用的 API 与 SDK。每月 25 万次事务免费。
  * [IP Geolocation](https://ipgeolocation.io/) - 提供免费的开发者套餐，每月 3 万次请求。
  * [ipstack](https://ipstack.com/) - 通过 IP 地址定位和识别网站访客
  * [LatLng](https://www.latlng.work) - 地理编码、逆地理编码、地点、静态地图和矢量地图瓦片 API。免费额度包含每天 3,000 次地理编码请求、300 次逆地理编码请求和 100 张静态地图图片。
  * [locationiq.com](https://locationiq.com/) - 地理编码、地图和路径规划 API。每天五千次免费请求。
  * [mapbox.com](https://www.mapbox.com/) - 用于展示地图数据的地图、地理空间服务和 SDK。
  * [maps.stamen.com](https://maps.stamen.com/) - 免费地图瓦片和瓦片托管。
  * [maptiler.com](https://www.maptiler.com/cloud/) - 用于地图可视化的矢量地图、地图服务和 SDK。免费矢量瓦片，每周更新，四种地图样式。
  * [nominatim.org](https://nominatim.org/) - OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和逆地理编码能力。
  * [opencagedata.com](https://opencagedata.com) - 聚合 OpenStreetMap 及其他开放地理数据源的地理编码 API。每天两千五百次免费查询。
  * [opengeocoding.com](https://opengeocoding.com) - 用 Rust 编写的源码可获取的地理编码器：在开放数据上提供地址搜索、自动补全和逆地理编码。可自托管或使用托管 API。每月五万次免费查询。
  * [osmnames](https://osmnames.org/) - 地理编码，搜索结果按相关 Wikipedia 页面的热度排序。
  * [positionstack](https://positionstack.com/) - 面向全球地点和坐标的免费地理编码。个人使用每月 25,000 次请求。
  * [stadiamaps.com](https://stadiamaps.com/) - 地图瓦片、路径规划、导航及其他地理空间 API。非商业使用和测试每月 200,000 免费积分。
  * [SqlInt](https://sqlint.com) — 浏览器内 SQL 工作台，提供免费工具，包括 JOIN 可视化器、SQL 格式化器、CSV/JSON 转 SQL 转换器和练习题，无需账户或信用卡。
  * [waymorphic.com](https://waymorphic.com/) - 矢量地图瓦片（OpenMapTiles schema）、MapLibre 样式、地理编码和逆地理编码 API。无需 API 密钥，无请求限制，遵循合理使用政策。

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) - 面向多个发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - 面向 Fedora 和 EL 的基于 Mock 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - Ubuntu 和 Debian 构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE 与代码编辑


  * [Android Studio](https://developer.android.com/studio) - Android Studio 提供为各类 Android 设备构建应用的最快工具。开源 IDE 对所有人免费，是 Android 应用开发的最佳选择。可用于 Windows、Mac、Linux 甚至 ChromeOS！
  * [Apache Netbeans](https://netbeans.apache.org/) - 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) - 协作式 API 设计，提供即时 API mock 和自动生成的文档（免费支持不限数量的 API 蓝图和不限用户数，含一个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上广受欢迎且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级到高级功能。
  * [Binder](https://mybinder.org/) - 把 Git 仓库变成一组交互式 notebook。它是一项免费的公共服务。
  * [BlueJ](https://bluej.org) - 为初学者设计的免费 Java 开发环境，全球有数百万人使用。由 Oracle 支持，简洁的 GUI 帮助初学者上手。
  * [Brackets](https://brackets.io/) - Brackets 是专为 Web 开发设计的开源文本编辑器。轻量、易用且高度可定制。
  * [cacher.io](https://www.cacher.io) - 代码片段管理器，支持标签和 100+ 种编程语言。
  * [cocalc.com](https://cocalc.com/) - 云端协作式计算。通过浏览器访问完整的 Ubuntu，内置协作能力，并预装大量用于数学、科学、数据科学的免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
  * [Code::Blocks](https://codeblocks.org) - 免费的 Fortran 与 C/C++ IDE。开源，可运行于 Windows、macOS 和 Linux。
  * [Codeground](https://codeground.ai/) - 免费的浏览器 IDE 和演练场，支持 15+ 种语言以及 Postgres、MySQL、MongoDB 和 Redis。可分享的代码片段、编程面试和云工作区。免费演练场无需安装。
  * [codiga.io](https://codiga.io/) - 编码助手，可在 IDE 中直接搜索、定义和复用代码片段。个人和小型组织免费。
  * [Components.studio](https://webcomponents.dev/) - 隔离开发代码组件，在 story 中可视化、测试它们，并发布到 npm。
  * [Eclipse Che](https://www.eclipse.org/che/) - 面向开发者团队的基于 Web 且 Kubernetes 原生的 IDE，支持多语言。开源且由社区驱动。Red Hat 托管的在线实例见 [workspaces.openshift.com](https://workspaces.openshift.com/)。
  * [ForgeCode](https://forgecode.dev/) - 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 及所有前沿模型的 AI 结对编程助手。原生适配你的 CLI，并与任何 IDE 无缝集成。免费额度包含本地处理的基础 AI 模型访问。
  * [GetVM](https://getvm.io) - 即时免费的 Linux 与 IDE Chrome 侧边栏。免费额度包含每天 5 个 VM。
  * [JDoodle](https://www.jdoodle.com) - 支持 60 多种编程语言的在线编译器和编辑器，免费套餐可通过 REST API 编译代码，每天最多 200 积分。
  * [jetbrains.com](https://jetbrains.com/products.html) - 生产力工具、IDE 和部署工具（即 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。为学生、教师、开源项目和用户组提供免费许可证。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 一些返回 JSON 格式假数据的 REST API 端点。如果想在本地运行该服务，源码也可获取。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是兼容 Delphi 的跨平台快速应用开发 IDE。
  * [LiveCodes](https://livecodes.io) - 开源客户端代码演练场，支持 90+ 种语言/框架。项目可保存、导出、分享、同步、部署（到 GitHub Pages）并嵌入网页。适配移动端。可自托管。不限次数免费使用。无需账户。
  * [MarsCode](https://www.marscode.com/) - 免费的 AI 驱动云端 IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成假 JSON 数据的微型 API mock 微服务。
  * [mockaroo](https://mockaroo.com/) - Mockaroo 可生成 CSV、JSON、SQL 和 Excel 格式的逼真测试数据。也可为后端 API 创建 mock。
  * [Mocklets](https://mocklets.com) - 基于 HTTP 的 mock API 模拟器，帮助模拟 API 以实现更快的并行开发和更全面的测试，提供终身免费额度。
  * [OneCompiler](https://onecompiler.com/) - 免费在线编译器，支持 Java、Python、C++、JavaScript 等 70+ 种语言。
  * [OnlineGDB](https://onlinegdb.com) - 免费的在线 IDE，支持 40+ 种语言并预装大量库；还提供调试选项、编译标志、教程和问答页面！
  * [pterocos](https://pterocos.eu.org) - 面向前端开发者的免费开源浏览器编码环境。用 vs code 级别的编辑器（monaco）编写 html、css 和 js，支持实时预览、scss/typeScript/babel，并提供用于调试和建议的 AI 聊天助手。所有项目保存到本地存储。永久免费 – 无需账户。
  * [Paiza](https://paiza.cloud/en/) - 在浏览器中开发 Web 应用，无需任何环境配置。免费套餐提供一个服务器，生命周期为 24 个 24 小时，每天 4 小时运行时间，配备 2 个 CPU 核心、2 GB 内存和 1 GB 存储空间。
  * [PHPSandbox](https://phpsandbox.io/) - PHP 在线开发环境
  * [Replit](https://replit.com/) - 支持多种编程语言的云端编码环境。
  * [RunMat](https://runmat.com/sandbox) - 浏览器中的 GPU 加速数值计算 IDE。编写并运行 MATLAB 语法的 .m 文件，通过 WebAssembly 和 WebGPU 自动获得 GPU 加速。无需安装、无需账户、无授权费用。开源运行时，支持 CLI、NPM 包和 Jupyter 内核。
  * [SoloLearn](https://code.sololearn.com) - 适合运行代码片段的云端编程演练场。支持多种编程语言。运行代码无需注册，但在其平台保存代码时必须注册。还为初学者和中级开发者提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) - 在线/云端代码 IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是广受欢迎、功能多样且高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义并针对构建和调试现代 Web 与云应用优化的代码编辑器。由 Microsoft 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - 功能完备的 IDE，拥有数千个扩展、跨平台应用开发（可下载适用于 iOS 和 Android 的 Microsoft 扩展）、桌面、Web 和云开发、多语言支持（C#、C++、JavaScript、Python、PHP 等）。
  * [VSCodium](https://vscodium.com/) - 由社区驱动、不含遥测/追踪且自由许可的 Microsoft 编辑器 VSCode 二进制发行版
  * [wakatime.com](https://wakatime.com/) - 通过文本编辑器插件量化你的编码活动指标，免费提供有限套餐。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是开源、跨平台的终端，带来无缝工作流。可内联渲染任何内容。保存会话和历史。由开放 Web 标准驱动。MacOS 和 Linux。

**[⬆️ 返回顶部](#目录)**

## 分析、事件与统计

  * [amplitude.com](https://amplitude.com/) - 每月 100 万个事件，最多 2 个应用
  * [AppFit](https://appfit.io) - AppFit 是全面的分析与产品管理工具，旨在实现跨平台无缝管理分析和产品更新。免费套餐包含每月 10,000 个事件、产品日志和每周洞察。
  * [Aptabase](https://aptabase.com) - 面向移动和桌面应用的开源、隐私友好且简单的分析工具。提供 Swift、Kotlin、React Native、Flutter、Electron 等多种 SDK。每月最多 20,000 个事件免费。
  * [Avo](https://avo.app/) - 简化的分析发布工作流。唯一可信来源的追踪计划、类型安全的分析追踪库、应用内调试器以及数据可观测性，可在发布前发现所有数据问题。两个工作区成员和 1 小时数据可观测性回溯免费。
  * [Beampipe.io](https://beampipe.io) - Beampipe 是简单、专注隐私的网站分析。最多 5 个域名和每月 1 万次页面浏览免费。
  * [Cabin](https://withcabin.com) - 隐私优先、无 Cookie 的网站分析，提供逐页碳排估算和面向 AI 助手的 MCP 服务器。免费套餐：1 个站点，每月 1 万次页面浏览。
  * [Census](https://www.getcensus.com/) - 反向 ETL 与运营分析平台。将数据仓库中的 10 个字段同步到 Salesforce、Zendesk 或 Amplitude 等 60+ 个 SaaS。
  * [Clicky](https://clicky.com) - 网站分析平台。免费套餐支持一个网站、3000 次浏览分析。
  * [counter.dev](https://counter.dev) - 让网站分析变得简单，因而对隐私友好。免费或按意愿捐赠付费。
  * [DevDome](https://devdome.com) - 面向 WordPress 的无 Cookie 网站分析，将真人访客与机器人和 AI 爬虫分开统计。免费套餐：不限站点数、每月 50,000 次真人页面浏览、90 天数据保留。
  * [DocBeacon](https://docbeacon.io) - 安全的文档分享，具备文档追踪和互动分析。免费套餐支持最多 20 个 PDF 文档（单个最大 10 MB）、10 个联系人，每个文档 2 次分享，并提供关于查看、下载、时长和互动的基础分析。
  * [Dwh.dev](https://dwh.dev) - Data Cloud 可观测性解决方案（Snowflake）。个人使用免费。
  * [Expensify](https://www.expensify.com/) - 费用报告，提供免费的私人报告审批工作流
  * [getinsights.io](https://getinsights.io) - 专注隐私、无 Cookie 的分析，每月最多 3 千个事件免费。
  * [Gizmo Analytics](https://gizmoanalytics.io/) - 面向管理大量站点的人的简单分析。可手动安装，或让 Claude/Cursor 替你完成。每月最多 1 万个事件免费。
  * [GoatCounter](https://www.goatcounter.com/) - GoatCounter 是开源网站分析平台，可作为托管服务（非商业用途免费）或自托管应用使用。它旨在提供易用、有意义且隐私友好的网站分析，作为 Google Analytics 或 Matomo 的替代方案。免费额度面向非商业用途，包含不限站点数、六个月数据保留和每月 10 万次页面浏览。
  * [Google Analytics](https://analytics.google.com/) - Google Analytics
  * [heap.io](https://heap.io) - 自动捕获 iOS 或 Web 应用中的每一次用户操作。每月最多 1 万次会话免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是反向 ETL 平台，帮助你将客户数据从数据仓库同步到 CRM、营销和支持工具。免费额度提供一个数据同步目标。
  * [HitKeep](https://hitkeep.com/) - 专注隐私的开源网站与产品分析平台，免费云套餐支持 3 个网站、3 名团队成员、60 天数据保留、AI 分析、目标、漏斗、事件和点击。
  * [Hotjar](https://hotjar.com) - 网站分析与报告。免费套餐允许每天 2000 次页面浏览。每天一百个快照（最大容量：300）。可存储三个快照热图 365 天。不限团队成员数。还提供应用内和独立问卷、带截图的反馈组件。免费额度允许创建 3 个问卷和 3 个反馈组件，每月收集 20 份回复。
  * [LogSpot](https://logspot.io) - 完整的统一网站与产品分析平台，包括可嵌入的分析组件和自动化机器人（slack、telegram 和 webhooks）。免费套餐包含每月 10,000 个事件。
  * [Mixpanel](https://mixpanel.com/) - 每月 100,000 名受跟踪用户，不限数据历史和席位，可选择美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com) - 面向 REST 和 GraphQL 的 API 分析。（每月最多 500,000 次 API 调用免费）
  * [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多 100 万个受跟踪事件免费。还提供不限数量的应用内问卷，每月 250 份回复。
  * [Repohistory](https://repohistory.com) - 精美的仪表盘，可追踪超过 14 天的 GitHub 仓库流量历史。免费套餐允许监控单个仓库的流量。
  * [Row Zero](https://rowzero.io) - 极速的连接式电子表格。可直接连接数据库、S3 和 API。即时导入、分析、绘图并分享数百万行数据。三个永久免费工作簿。
  * [Rybbit](https://rybbit.io) - Google Analytics 的开源无 Cookie 替代方案，直观程度提升 10 倍。免费套餐包含每月 3,000 个事件。
  * [Seline](https://seline.so) - Seline 是简单且私密的网站与产品分析。无 Cookie、轻量、独立。免费套餐包含每月 3,000 个事件，并可访问所有功能，如仪表盘、用户旅程、漏斗等。
  * [StatCounter](https://statcounter.com/) - 网站访客分析。免费套餐可分析最近 500 名访客。
  * [Stats4U](https://www.stats4u.net/) - 自 2006 年起在波兰运营的访客计数器和网站统计服务。网站主选择一个计数器样式，复制代码并粘贴到自己的站点；无需账户。免费且无付费套餐。隐私优先：Stats4U 不设置 Cookie，计数器数据在欧盟境内运营方自有服务器上处理。
  * [Statsig](https://statsig.com) - 一体化平台，涵盖分析、功能开关和 A/B 测试。每月最多 100 万个计量事件免费。
  * [TraceLog](https://tracelog.io/) - 面向电商的 AI 分析。用自然语言就你的分析数据提问，获得可执行的建议，并借助 AI 驱动的洞察提升收入。每月最多 1 万个事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，并促进无缝协作。可部署到带真实流量的生产环境，或无需编写代码就为回归测试增加分析覆盖。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - Google Analytics 的免费、轻量、专注隐私的替代方案。不限页面浏览、不限访客、不限页面热图和目标追踪。最多 3 个域名免费，每个域名 600 次会话回放。
  * [Umami](https://umami.is/) - Google Analytics 的简单、快速、专注隐私的开源替代方案。
  * [usabilityhub.com](https://usabilityhub.com/) - 在真实用户身上测试设计和效果图并追踪访客。一个用户免费，不限测试次数

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) - 每月 1,000 次会话，数据保留一个月，提供三个用户席位。更多信息见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [howuku.com](https://howuku.com) - 追踪用户互动、参与度和事件。每月最多 5,000 次访问免费
  * [inspectlet.com](https://www.inspectlet.com/) - 单个网站每月 2,500 次会话免费
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 次会话，保留 30 天，含错误追踪和实时模式
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，"无流量限制"，无项目数量限制，也不抽样
  * [mouseflow.com](https://mouseflow.com/) - 单个网站每月 500 次会话免费
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，带用于复现缺陷的开发者工具、用于实时支持的实时会话以及产品分析套件。每月一千次会话，可使用全部功能并保留 7 天。
  * [Reactflow.com](https://www.reactflow.com/) - 每个站点：每天 1,000 次页面浏览、三个热图、三个小部件，免费缺陷追踪
  * [smartlook.com](https://www.smartlook.com/) - 为网页和移动应用提供免费套餐（每月 1500 次会话）、三个热图、一个漏斗、一个月的数据历史
  * [UXtweak.com](https://www.uxtweak.com/) - 录制并观看访客如何使用你的网站或应用。小型项目可无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号码验证 API 与 SDK

  * [numverify](https://numverify.com/) - 全球电话号码验证与查询 JSON API。每月 100 次 API 请求
  * [veriphone](https://veriphone.io/) - 通过免费、快速、可靠的 JSON API 进行全球电话号码验证。每月 1000 次请求

**[⬆️ 返回顶部](#目录)**

## 支付与计费集成

  * [Adapty.io](https://adapty.io/) - 一站式方案，提供开源 SDK，可为 iOS、Android、React Native、Flutter、Unity 或网页应用集成移动应用内订阅。月收入不超过 $10k 免费。
  * [AllRatesToday](https://allratestoday.com) - 150 多种货币的实时中间市场汇率，提供官方 JavaScript、Python 和 PHP SDK。免费额度包含每月 300 次 HTTPS 请求。
  * [Churnkey](https://churnkey.co) - 面向订阅业务的取消流程（已开源）、流失指标和收入分析。永久免费。
  * [Currencyapi](https://currencyapi.com) - 免费的货币换算与汇率数据 API。个人使用每月 300 次请求、每分钟 10 次请求免费。
  * [CurrencyApi](https://currencyapi.net/) - 实物货币与加密货币的实时汇率，以 JSON 和 XML 提供。免费额度提供每月 1,250 次 API 请求。
  * [CurrencyFreaks](https://currencyfreaks.com/) - 提供当前和历史货币汇率。提供免费 DEVELOPER 套餐，每月 1000 次请求。
  * [currencylayer](https://currencylayer.com/) - 为你的业务提供可靠的汇率与货币换算，每月 100 次 API 请求免费。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易于使用的货币换算 JSON API。免费额度每天更新一次，限制为每月 1,500 次请求。
  * [Exchange Rate API](https://exchange-rateapi.com) - 160 多种货币的实时汇率，60 秒更新一次，提供官方 SDK。免费额度包含每月 300 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) - 帮助商户防范支付欺诈与拒付。提供免费 Micro 套餐，每月 500 次查询。
  * [FxRatesAPI](https://fxratesapi.com) - 提供实时和历史汇率。免费额度需标注来源。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过按使用量计费从 API 获得收入。可对接 Stripe、Chargebee 等。免费额度提供每月 30,000 个事件。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) - 根据访客所在地自动调整定价，以在全球拓展业务并触达新市场（购买力平价）。免费套餐包含每月 7,500 次 API 请求。
  * [Qonversion](https://qonversion.io/) - 一体化跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买与变现。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和网页。每月追踪收入不超过 $10k 免费。
  * [RevenueCat](https://www.revenuecat.com/) - 用于应用内购买和订阅（iOS 与 Android）的托管后端。每月追踪收入不超过 $2.5k 免费。
  * [vatlayer](https://vatlayer.com/) - 即时 VAT 号码验证与欧盟 VAT 税率 API，每月 100 次 API 请求免费

**[⬆️ 返回顶部](#目录)**

## Docker 相关

  * [Appish](https://appi.sh/) - 只需一次 docker push 即可托管用于演示的 Docker 容器。免费额度包含 1 个槽位，会话时长 2 小时。
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理方案。免费额度提供 1 GB 的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) - 一个免费私有仓库和无限公有仓库，用于构建和存储 Docker 镜像
  * [quay.io](https://quay.io/) - 以无限免费公有仓库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的 Docker 镜像仓库

**[⬆️ 返回顶部](#目录)**

## 开发者博客站点

  * [AyeDot](https://ayedot.com/) - 以现代多媒体短格式 Miniblogs 的形式，免费与世界分享你的想法、知识和故事。
  * [BearBlog](https://bearblog.dev/) - 极简的、由 Markdown 驱动的博客与网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员在此分享想法、互相帮助成长。
  * [Hashnode](https://hashnode.com/) - 面向开发者的省心博客软件！
  * [Medium](https://medium.com/) - 对你所关注的事思考得更深入。
  * [JustBlogged](https://justblogged.com) - 免费博客平台，支持自定义域名，全球访问性能快速。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助你从网站受众中建立活跃社区。
  * [IntenseDebate](https://intensedebate.com/) - 功能丰富的评论系统，适用于 WordPress、Tumblr、Blogger 以及许多其他网站平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，按能力付费即可获得"在少数域名上设一名版主，并完全控制行为与外观"
  * [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量评论小部件。用 GitHub issues 实现博客评论、wiki 页面等！

**[⬆️ 返回顶部](#目录)**

## 截图 API

  * [ApiFlash](https://apiflash.com) - 基于 Aws Lambda 和 Chrome 的截图 API。支持整页截图，可控制捕获时机和视口尺寸。
  * [microlink.io](https://microlink.io/) - 把任意网站变成数据，例如 metatags 规范化、美观的链接预览、抓取能力，或作为服务的截图。每天 50 次请求，天天免费。
  * [PhantomJsCloud](https://PhantomJsCloud.com) - 浏览器自动化与页面渲染。免费额度每天最多 500 页。自 2017 年起提供免费额度。
  * [Ironfang Render](https://ironfang.com/render) - 总部位于英国的截图、PDF、图片、二维码和片段渲染 API，支持可复用模板与签名 URL。每月 250 次免费渲染，开始使用无需填写支付信息。
  * [screenshotbase.com](https://screenshotbase.com) - 每月 300 张免费截图。可从任意 url 截图。快速、免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) - 对任意网站进行高度可定制的快照。每月 100 张快照免费
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 每月 100 张快照，支持 png、gif 和 jpg，包含整页长截图，不限于首页
  * [Screenshot Scout](https://screenshotscout.com/) - 面向开发者的截图 API。一次请求即可从任意 URL 获得干净、可直接用于生产的截图。免费套餐包含每月 200 张截图，永久有效。
  * [Shotpipe](https://shotpipe.io) - 为静态站点打造的截图与 Open Graph 图片 API。免费额度包含每月 100 次渲染，无需信用卡。缓存命中的渲染免费。
  * [SnapAPI](https://snapapi.pics) - 截图、录屏、PDF 生成与网页数据提取 API。免费套餐包含每月 200 张截图。
  * [thumbnail.ws](https://thumbnail.ws) - 用于生成网站缩略图的 API。每月 1,000 次请求免费。
  * [localscreenshot](https://localscreenshot.com) - 截图 API，可将任意公开页面转成图片或 PDF，覆盖 227 个国家，并隐藏 cookie 横幅、广告和聊天小部件。也可作为 MCP 服务器运行，让 AI agent 自行截图。免费套餐包含每月 50 张截图，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## Flutter 相关以及无需 Mac 构建 iOS 应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是面向移动应用的完全托管 CI/CD。你可以用基于 GUI 的 CI/CD 工具构建、测试和部署。免费额度提供每月 500 免费分钟，以及一台 2.3 GHz、8 GB 内存的 Mac Mini 实例。
  * [FlutLab](https://flutlab.io/) - FlutLab 是现代 Flutter 在线 IDE，也是创建、调试和构建跨平台项目的最佳场所。用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面，可用 flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计与持续工作流帮助落实隐私设计，使组织符合 GDPR 及其他法规。免费额度仅限较小团队且仅限 SaaS 版本。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSAR）和数据映射。免费额度包含核心同意管理功能，此外还为经核实的开源项目免费提供更高级的套餐。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie 横幅、审计和多语言同意管理方案。免费额度提供一次性扫描和单个横幅。
  * [Iubenda](https://www.iubenda.com/) - 隐私与 cookie 政策及同意管理。免费额度提供有限功能的隐私与 cookie 政策以及 cookie 横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费额度提供大部分功能，但访客数量有限。

**[⬆️ 返回顶部](#目录)**

## 杂项

  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可作为精美图片分享（例如用于 Twitter / Facebook 帖子），也可作为链接分享（例如用于聊天或论坛）。
  * [Blynk](https://blynk.io) - 带 API 的 SaaS，用于控制、构建和评估 IoT 设备。免费 Developer 套餐包含 5 台设备、免费云服务与数据存储。还提供移动应用。
  * [cron-job.org](https://cron-job.org) - 在线定时任务服务。不限数量的任务免费。
  * [Cronhooks](https://cronhooks.io/) - 安排准时或周期性的 webhook。免费套餐允许 5 个临时计划。
  * [datelist.io](https://datelist.io) - 在线预订 / 预约排期系统。每月最多 5 次预订免费，包含 1 个日历
  * [FOSSA](https://fossa.com/) - 对第三方代码、许可证合规和漏洞进行可扩展的端到端管理。
  * [Hook Relay](https://www.hookrelay.dev/) - 为你的应用添加 webhook 支持而无需操心：为你完成排队、带退避的重试和日志记录。免费套餐每天 100 次投递、保留 14 天，并提供 3 个 hook 端点。
  * [Hosting Checker](https://hostingchecker.co) - 查询任意域名、网站或 IP 地址的托管信息，例如 ASN、ISP、位置等。还包含多个托管和 DNS 相关工具。
  * [newreleases.io](https://newreleases.io/) - 通过邮件、Slack、Telegram、Discord 和自定义 webhook 接收 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的新版本通知。
  * [PDFMonkey](https://www.pdfmonkey.io/) - 在仪表盘中管理 PDF 模板，用动态数据调用 API 并下载 PDF。每月提供 300 份免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) - 使用该扩展从代码片段和 VSCode 创建美观、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 从 JSON、schema 和 GraphQL 快速自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速、安全地处理数据。把 JSON 转成任意语言中美观、类型安全的代码。
  * [readme.com](https://readme.com/) - 让美观的文档变得简单，对开源项目免费。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理支持 HTTPS 的重定向。免费套餐包含 10 个源和每月 100,000 次命中。
  * [redirection.io](https://redirection.io/) - 面向企业、营销和 SEO 的 HTTP 重定向管理 SaaS 工具。
  * [redirs.com](https://www.redirs.com/) — 轻松的域名重定向，支持自动 SSL、分析和 URL 路径转发。基础使用免费（最多 5 个域名）。
  * [RedirHub](https://www.redirhub.com/) - API 优先的 URL 重定向基础设施，具备自定义名称服务器、边缘网络、HTTPS 和主动链接监控。免费套餐包含 2 个主机名、每月 100K 次请求、自动 SSL、路径转发和 REST API 访问。
  * [ReqBin](https://reqbin.com/) - 在线发送 HTTP 请求。常用请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持请求头和 Token 认证。包含用于保存请求的基础登录系统。
  * [Smartcar API](https://smartcar.com) - 面向汽车的 API，可定位、获取油箱与电量水平、里程表读数、开锁/落锁等。
  * [Splainly](https://splainly.app) - 为销售和营销需求制作产品讲解视频。视频可免费创建，可下载或继续托管在 Splainly 上。会添加一个小水印，支付 $5 即可去除。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经度和纬度的日出与日落时间。
  * [superfeedr.com](https://superfeedr.com/) - 实时符合 PubSubHubbub 的 feed、导出与分析。免费版定制能力较少
  * [SurveyMonkey.com](https://www.surveymonkey.com) - 创建在线调查。在线分析结果。免费套餐每份调查仅允许 10 个问题和 100 份回复。
  * [SYNCDATE](https://syncdate.app) - Google 日历双向同步。免费额度：2 个账号、不限事件数。
  * [UUID Generator](https://newuuid.com/) - 以企业级水准即时生成 UUID v1、UUID v4、UUID v7、GUID、Nil UUIDs、CUID v1/v2、NanoID 和 ULID
  * [Versionfeeds](https://versionfeeds.com) - 为你喜爱的软件版本提供自定义 RSS feed。把编程语言、库或常用工具的最新版本集中到一个 feed 中。（前 3 个 feed 免费）
  * [Keeper.sh](https://www.keeper.sh) - 日历同步工具，让工作、个人、商务或学生日历保持同步。最多 2 个日历、3 个连接免费，并可让你的 agent 或脚本读取和修改日历，每天最多 25 次调用。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Parsec](https://parsec.app/) - 可在无限数量的设备上免费安装（供个人使用），并允许同时最多 20 个连接接入单台设备。（适合游戏/低延迟工作）
  * [AnyDesk](https://anydesk.com) - 3 台设备免费，会话数量和时长不限
  * [Getscreen.me](https://getscreen.me) - 2 台设备免费，会话数量和时长不限
  * [RemSupp](https://remsupp.com) - 按需支持和设备的长期访问（每天 2 次会话免费）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [StarDesk](https://www.stardesk.net) - 面向工作和游戏的免费远程桌面，在 Windows、macOS、iOS 和 Android 上提供 4K HDR/144fps 串流。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [get.localhost.direct](https://get.localhost.direct) - 用于 localhost 开发的更好的 `*.localhost.direct` 通配符公共 CA 签名 SSL 证书，支持子域名
  * [GitHub Education](https://education.github.com/pack) - 面向学生的免费服务合集。需要注册。
  * [Glob tester](https://globster.xyz/) - 一个可用于设计和测试 glob 模式的网站。还提供学习 glob 模式的资源。
  * [Killer Coda](https://killercoda.com/) - 浏览器中的交互式演练环境，可用于学习 Linux、Kubernetes、容器、编程、DevOps、网络
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) - 获得免费的沙盒、工具及其他构建 Microsoft 365 平台解决方案所需的资源。订阅为可续期的 90 天 [Microsoft 365 E5 Subscription](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含 Windows）。若你在开发中保持活跃（通过遥测数据和算法衡量）则会续期。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易懂且免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢查询。
  * [RedHat for Developers](https://developers.redhat.com) - 免费使用 Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等，仅限开发者。仅限个人套餐。还提供免费电子书供参考。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费发送和接收测试 SMS 消息。
  * [SimpleBackups.com](https://simplebackups.com/) - 面向服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，备份直接存入云存储服务商（AWS、DigitalOcean 和 Backblaze）。提供 1 份备份的免费套餐。
  * [SimpleRestore](https://simplerestore.io) - 省心的 MySQL 备份恢复。无需代码或服务器，即可把 MySQL 备份恢复到任意远程数据库。
  * [SnapShooter](https://snapshooter.com/) - 面向 DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份方案，支持将数据库、文件系统和应用直接备份到基于 s3 的存储。提供为一项资源每日备份的免费套餐。
  * [VPS Snaps](https://vpssnaps.com) - 跨 8 家云服务商的自动化服务器备份与快照，存放在你自己的 bucket 或 Google Drive 中。免费套餐：1 台服务器、每日备份、无需信用卡。

**[⬆️ 返回顶部](#目录)**
