        // ============================================
        // Data Dictionaries
        // ============================================
        const DATA = {
            lorem: {
                words: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'],
                sentences: []
            },
            chinese: {
                words: ['的', '一', '是', '在', '不', '了', '有', '和', '人', '这', '中', '大', '为', '上', '个', '国', '我', '以', '要', '他', '时', '来', '用', '们', '生', '到', '作', '地', '于', '出', '就', '分', '对', '成', '会', '可', '主', '发', '年', '动', '同', '工', '也', '能', '下', '过', '子', '说', '产', '种', '面', '而', '方', '后', '多', '定', '行', '学', '法', '所', '民', '得', '经', '十', '三', '之', '进', '着', '等', '部', '度', '家', '电', '力', '里', '如', '水', '化', '高', '自', '二', '理', '起', '小', '物', '现', '实', '加', '量', '都', '两', '体', '制', '机', '当', '使', '点', '从', '业', '本', '去', '把', '性', '好', '应', '开', '它', '合', '还', '因', '由', '其', '些', '然', '前', '外', '天', '政', '四', '日', '那', '社', '义', '事', '平', '形', '相', '全', '表', '间', '样', '与', '关', '各', '重', '新', '线', '内', '数', '正', '心', '反', '你', '明', '看', '原', '又', '么', '利', '比', '或', '但', '质', '气', '第', '向', '道', '命', '此', '变', '条', '只', '没', '结', '解', '问', '意', '建', '月', '公', '无', '系', '军', '很', '情', '最', '者', '立', '代', '想', '已', '通', '并', '提', '直', '题', '党', '程', '展', '五', '果', '料', '象', '员', '革', '位', '入', '常', '文', '总', '次', '品', '式', '活', '设', '及', '管', '特', '件', '长', '求', '老', '头', '基', '资', '边', '流', '路', '级', '少', '图', '山', '统', '接', '知', '较', '将', '组', '见', '计', '别', '她', '手', '角', '期', '根', '论', '运', '农', '指', '几', '九', '区', '强', '放', '决', '西', '被', '干', '做', '必', '战', '先', '回', '则', '任', '取', '完', '石', '七', '么', '九', '系', '难', '确'],
                sentences: []
            },
            code: {
                snippets: [
                    "function optimizePerformance(data) {\n  const cache = new Map();\n  return data.map(item => {\n    if (cache.has(item.id)) return cache.get(item.id);\n    const result = processItem(item);\n    cache.set(item.id, result);\n    return result;\n  });\n}",
                    "const useAsync = () => {\n  const [state, setState] = useState(null);\n  const [loading, setLoading] = useState(false);\n  \n  const execute = async (promise) => {\n    setLoading(true);\n    try {\n      const result = await promise;\n      setState(result);\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  return { state, loading, execute };\n};",
                    "class DataProcessor {\n  constructor(config) {\n    this.config = config;\n    this.cache = new Map();\n  }\n  \n  async process(input) {\n    const key = this.generateKey(input);\n    if (this.cache.has(key)) {\n      return this.cache.get(key);\n    }\n    \n    const result = await this.transform(input);\n    this.cache.set(key, result);\n    return result;\n  }\n}",
                    "SELECT u.name, COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\nGROUP BY u.id\nHAVING order_count > 5\nORDER BY order_count DESC;",
                    "from typing import Optional, List\nfrom pydantic import BaseModel\n\nclass User(BaseModel):\n    id: int\n    name: str\n    email: str\n    avatar: Optional[str] = None\n    tags: List[str] = []\n    \n    class Config:\n        orm_mode = True",
                    "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\n# 数据预处理\ndf = pd.read_csv('data.csv')\nX = df.drop('target', axis=1)\ny = df['target']\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)"
                ]
            },
            legal: {
                templates: [
                    "本合同由以下双方于{date}签订：甲方（以下简称"出让方"），统一社会信用代码：{number}，住所地：{address}；乙方（以下简称"受让方"），身份证号码：{id}，住址：{address}。",
                    "鉴于：\n1. 出让方合法拥有位于{address}的不动产一处，产权证号：{number}；\n2. 受让方愿意按照本合同约定的条件和条款受让上述不动产；\n3. 双方经友好协商，就上述不动产转让事宜达成如下协议。",
                    "第一条 定义与解释\n1.1 "关联公司"指直接或间接控制一方、受一方控制或与一方处于同一控制下的任何公司。\n1.2 "知识产权"指所有专利、商标、著作权、商业秘密及其他专有权利。\n1.3 "保密信息"指一方在本合同履行过程中向另一方披露的所有非公开信息。",
                    "第二条 陈述与保证\n2.1 出让方陈述并保证：\n(a) 其具有签订和履行本合同的完全民事权利能力和民事行为能力；\n(b) 其签署和履行本合同已获得所有必要的授权和批准；\n(c) 本合同构成其合法、有效且具有约束力的义务。",
                    "第三条 违约责任\n3.1 任何一方违反本合同的约定，应向守约方支付违约金，违约金数额为合同总价款的百分之二十。\n3.2 如违约金不足以弥补守约方损失的，违约方应赔偿守约方因此遭受的全部损失，包括但不限于直接损失、间接损失、律师费、诉讼费等。",
                    "第四条 争议解决\n4.1 因本合同引起的或与本合同有关的任何争议，双方应首先通过友好协商解决。\n4.2 协商不成的，任何一方均可向被告所在地有管辖权的人民法院提起诉讼。\n4.3 在争议解决期间，除争议事项外，双方应继续履行本合同其他条款。"
                ]
            },
            marketing: {
                templates: [
                    "🚀 {product} 全新升级！\n\n我们很高兴地宣布，经过{number}个月的精心打磨，{product} 3.0 版本正式上线！\n\n✨ 全新功能：\n• 智能推荐算法，精准匹配您的需求\n• 极速响应，性能提升{number}%\n• 全新UI设计，更简洁更优雅\n\n🎁 限时优惠：前{number}名用户享受{number}折优惠！\n\n立即体验，开启您的{adjective}之旅！",
                    "【案例分享】{company}如何通过我们的产品实现业绩翻倍\n\n{company}是一家专注于{industry}的创新企业。在使用我们的产品前，他们面临{problem}的挑战。\n\n通过我们的解决方案：\n📈 效率提升 {number}%\n💰 成本降低 {number}%\n😊 客户满意度提升 {number}分\n\n"我们的团队工作效率提升了不止一倍！"—— {company} CEO",
                    "💡 您还在为{problem}烦恼吗？\n\n{number}家企业正在使用我们的解决方案，平均节省{number}小时/周！\n\n🎯 我们能帮您：\n✓ 自动化处理繁琐任务\n✓ 实时数据洞察与决策支持\n✓ 团队协作无缝衔接\n\n📞 立即预约免费演示，获取专属解决方案！",
                    "🌟 客户评价 🌟\n\n"使用{product}后，我们的{metric}提升了{number}%。这是我用过最好的{category}工具！"\n\n—— {name}，{position} @ {company}\n\n⭐⭐⭐⭐⭐\n\n加入超过{number}家企业的行列，体验{adjective}的改变！"
                ],
                products: ['智能办公平台', '数据分析系统', '客户关系管理系统', '项目管理工具', '营销自动化平台'],
                companies: ['科技先锋', '创新未来', '智慧云', '数据魔方', '效率大师'],
                industries: ['电子商务', '金融科技', '教育培训', '医疗健康', '智能制造'],
                problems: ['数据孤岛', '效率低下', '客户流失', '成本过高', '协作困难'],
                adjectives: ['高效', '智能', '卓越', '创新', '专业']
            },
            business: {
                templates: [
                    "主题：关于{topic}的会议纪要\n\n时间：{date}\n地点：{location}\n参会人员：{names}\n\n一、会议议程\n1. {topic}现状分析\n2. 问题与挑战讨论\n3. 解决方案研讨\n4. 行动计划制定\n\n二、决议事项\n1. 成立专项小组，负责人：{name}\n2. 完成时间节点：{date}\n3. 预算审批：{amount}元\n\n三、下一步行动\n- {action}\n- {action}\n- {action}",
                    "致：全体员工\n\n关于{topic}的通知\n\n各部门：\n\n为进一步提升工作效率，经公司管理层研究决定，现将{topic}相关事宜通知如下：\n\n一、实施时间\n自{date}起正式执行。\n\n二、具体要求\n1. 各部门需在规定时间内完成{task}；\n2. 相关负责人需按时提交{document}；\n3. 如遇特殊情况，请及时与{department}联系。\n\n三、联系方式\n联系人：{name}\n电话：{phone}\n邮箱：{email}\n\n特此通知。",
                    "商业计划书摘要\n\n项目名称：{project}\n所属行业：{industry}\n融资需求：{amount}万元\n\n项目概述：\n{project}致力于解决{problem}，通过{solution}为用户提供{value}。\n\n市场分析：\n目标市场规模约{amount}亿元，年增长率{number}%。主要竞争对手包括{competitors}。\n\n商业模式：\n采用{model}模式，主要收入来源包括{revenue}。\n\n团队介绍：\n核心团队来自{background}，拥有{number}年行业经验。",
                    "项目提案\n\n提案人：{name}\n部门：{department}\n日期：{date}\n\n一、项目背景\n当前{situation}，亟需{solution}来改善现状。\n\n二、项目目标\n1. 短期目标（3个月）：{goal}\n2. 中期目标（6个月）：{goal}\n3. 长期目标（12个月）：{goal}\n\n三、预算明细\n- 人力成本：{amount}元\n- 物料采购：{amount}元\n- 其他费用：{amount}元\n合计：{amount}元\n\n四、预期收益\n预计项目完成后可带来{benefit}，ROI约为{number}%。"
                ]
            }
        };

        // ============================================
        // State Management
        // ============================================
        let state = {
            type: 'lorem',
            format: 'plain',
            paragraphs: 3,
            sentences: 5,
            wordTarget: 0,
            history: JSON.parse(localStorage.getItem('loremHistory') || '[]'),
            stats: JSON.parse(localStorage.getItem('loremStats') || '{"generated": 0, "totalWords": 0}'),
            chart: null
        };

        // ============================================
        // Initialization
        // ============================================
        document.addEventListener('DOMContentLoaded', () => {
            loadHistory();
            updateStats();
            initChart();
            updateBatchPreview();
            
            // Bind batch inputs
            ['batchCount', 'batchType', 'batchParagraphs'].forEach(id => {
                document.getElementById(id).addEventListener('input', updateBatchPreview);
            });
        });

        // ============================================
        // Type Selection
        // ============================================
        function selectType(type) {
            state.type = type;
            document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-type="${type}"]`).classList.add('active');
            showToast(`已选择: ${getTypeName(type)}`);
        }

        function getTypeName(type) {
            const names = {
                lorem: 'Lorem Ipsum',
                chinese: '中文',
                code: '代码',
                legal: '法律',
                marketing: '营销',
                business: '商务'
            };
            return names[type] || type;
        }

        // ============================================
        // Format Selection
        // ============================================
        function selectFormat(format) {
            state.format = format;
            document.querySelectorAll('.format-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-format="${format}"]`).classList.add('active');
            
            // Convert current output
            const output = document.getElementById('output');
            if (output.textContent && output.textContent !== '点击"生成文本"按钮开始...') {
                const rawText = output.dataset.rawText || output.textContent;
                output.innerHTML = formatText(rawText, format);
            }
        }

        function formatText(text, format) {
            document.getElementById('output').dataset.rawText = text;
            
            switch(format) {
                case 'html':
                    return text.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('\n');
                case 'markdown':
                    return text.split('\n\n').map(p => p.replace(/\n/g, '  \n')).join('\n\n');
                case 'json':
                    return JSON.stringify({ text: text, generatedAt: new Date().toISOString() }, null, 2);
                default:
                    return text;
            }
        }

        // ============================================
        // Slider Updates
        // ============================================
        function updateSlider(id) {
            const value = document.getElementById(id).value;
            document.getElementById(id + 'Value').textContent = value;
            state[id] = parseInt(value);
        }

        // ============================================
        // Text Generation
        // ============================================
        function generateText() {
            const paragraphs = parseInt(document.getElementById('paragraphs').value);
            const sentencesPerPara = parseInt(document.getElementById('sentences').value);
            const wordTarget = parseInt(document.getElementById('wordTarget').value);
            const includeLorem = document.getElementById('includeLorem').checked;
            
            let text = '';
            let currentWordCount = 0;
            let actualParagraphs = paragraphs;
            
            // Adjust for word target
            if (wordTarget > 0) {
                const avgWordsPerPara = 80; // rough estimate
                actualParagraphs = Math.max(1, Math.ceil(wordTarget / avgWordsPerPara));
            }
            
            for (let i = 0; i < actualParagraphs; i++) {
                if (wordTarget > 0 && currentWordCount >= wordTarget) break;
                
                let para = '';
                
                switch(state.type) {
                    case 'lorem':
                        para = generateLoremParagraph(sentencesPerPara, includeLorem && i === 0);
                        break;
                    case 'chinese':
                        para = generateChineseParagraph(sentencesPerPara);
                        break;
                    case 'code':
                        para = generateCodeSnippet();
                        break;
                    case 'legal':
                        para = generateLegalText(i);
                        break;
                    case 'marketing':
                        para = generateMarketingText();
                        break;
                    case 'business':
                        para = generateBusinessText(i);
                        break;
                }
                
                text += (i > 0 ? '\n\n' : '') + para;
                currentWordCount += para.split(/\s+/).length;
            }
            
            // Update output
            const output = document.getElementById('output');
            output.innerHTML = formatText(text, state.format);
            output.dataset.rawText = text;
            
            // Update stats
            updateTextStats(text);
            updateChart();
            
            // Update usage stats
            state.stats.generated++;
            state.stats.totalWords += currentWordCount;
            localStorage.setItem('loremStats', JSON.stringify(state.stats));
            updateStats();
            
            // Save to history
            if (document.getElementById('saveHistory').checked) {
                addToHistory(text, state.type);
            }
            
            // Auto copy
            if (document.getElementById('autoCopy').checked) {
                copyToClipboard(text);
            }
            
            showToast('✅ 文本生成成功！');
        }

        function generateLoremParagraph(sentences, startWithLorem) {
            const result = [];
            const words = DATA.lorem.words;
            
            for (let i = 0; i < sentences; i++) {
                const wordCount = 8 + Math.floor(Math.random() * 7);
                const sentenceWords = [];
                
                for (let j = 0; j < wordCount; j++) {
                    sentenceWords.push(words[Math.floor(Math.random() * words.length)]);
                }
                
                if (startWithLorem && i === 0) {
                    sentenceWords[0] = 'Lorem';
                    sentenceWords[1] = 'ipsum';
                }
                
                sentenceWords[0] = sentenceWords[0].charAt(0).toUpperCase() + sentenceWords[0].slice(1);
                result.push(sentenceWords.join(' ') + '.');
            }
            
            return result.join(' ');
        }

        function generateChineseParagraph(sentences) {
            const result = [];
            const words = DATA.chinese.words;
            
            for (let i = 0; i < sentences; i++) {
                const charCount = 15 + Math.floor(Math.random() * 15);
                let sentence = '';
                
                for (let j = 0; j < charCount; j++) {
                    sentence += words[Math.floor(Math.random() * words.length)];
                }
                
                result.push(sentence + '。');
            }
            
            return result.join('');
        }

        function generateCodeSnippet() {
            const snippets = DATA.code.snippets;
            return snippets[Math.floor(Math.random() * snippets.length)];
        }

        function generateLegalText(index) {
            const templates = DATA.legal.templates;
            let text = templates[index % templates.length];
            
            // Replace placeholders
            const date = new Date().toLocaleDateString('zh-CN');
            const number = Math.floor(Math.random() * 900000000000 + 100000000000).toString();
            const address = ['北京市朝阳区', '上海市浦东新区', '深圳市南山区', '广州市天河区'][Math.floor(Math.random() * 4)] + 
                          'xxx路' + Math.floor(Math.random() * 999) + '号';
            const id = Math.floor(Math.random() * 90000000000000000 + 10000000000000000).toString();
            
            text = text.replace(/{date}/g, date);
            text = text.replace(/{number}/g, number);
            text = text.replace(/{address}/g, address);
            text = text.replace(/{id}/g, id);
            
            return text;
        }

        function generateMarketingText() {
            const templates = DATA.marketing.templates;
            let text = templates[Math.floor(Math.random() * templates.length)];
            
            const m = DATA.marketing;
            const replacements = {
                '{product}': m.products[Math.floor(Math.random() * m.products.length)],
                '{company}': m.companies[Math.floor(Math.random() * m.companies.length)],
                '{industry}': m.industries[Math.floor(Math.random() * m.industries.length)],
                '{problem}': m.problems[Math.floor(Math.random() * m.problems.length)],
                '{adjective}': m.adjectives[Math.floor(Math.random() * m.adjectives.length)],
                '{number}': Math.floor(Math.random() * 100 + 10),
                '{date}': new Date().toLocaleDateString('zh-CN'),
                '{name}': ['张经理', '李总监', '王主管', '赵经理'][Math.floor(Math.random() * 4)],
                '{position}': ['产品经理', '技术总监', '运营经理', '市场总监'][Math.floor(Math.random() * 4)],
                '{metric}': ['转化率', '用户留存', '客户满意度', '工作效率'][Math.floor(Math.random() * 4)],
                '{category}': ['数据分析', '项目管理', '客户管理', '协作办公'][Math.floor(Math.random() * 4)]
            };
            
            Object.keys(replacements).forEach(key => {
                text = text.replace(new RegExp(key, 'g'), replacements[key]);
            });
            
            return text;
        }

        function generateBusinessText(index) {
            const templates = DATA.business.templates;
            let text = templates[index % templates.length];
            
            const date = new Date().toLocaleDateString('zh-CN');
            const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            const replacements = {
                '{topic}': ['季度规划', '系统升级', '流程优化', '团建活动', '培训计划'][Math.floor(Math.random() * 5)],
                '{date}': date,
                '{time}': time,
                '{location}': ['会议室A', '会议室B', '线上会议', '培训室'][Math.floor(Math.random() * 4)],
                '{names}': '张三、李四、王五、赵六',
                '{name}': ['张三', '李四', '王五', '赵六'][Math.floor(Math.random() * 4)],
                '{amount}': Math.floor(Math.random() * 100000 + 10000),
                '{phone}': '138' + Math.floor(Math.random() * 90000000 + 10000000),
                '{email}': 'contact@example.com',
                '{department}': ['人力资源部', '技术部', '市场部', '运营部'][Math.floor(Math.random() * 4)],
                '{action}': ['完成需求分析', '制定实施计划', '安排资源调配', '跟进项目进度'][Math.floor(Math.random() * 4)],
                '{project}': ['智能办公系统', '数据中台', '客户服务平台', '供应链管理系统'][Math.floor(Math.random() * 4)],
                '{industry}': ['SaaS', '电商', '金融科技', '企业服务'][Math.floor(Math.random() * 4)],
                '{solution}': ['AI智能分析', '云端协作', '自动化流程', '数据中台'][Math.floor(Math.random() * 4)],
                '{value}': ['降本增效', '数据驱动决策', '提升用户体验', '加速业务增长'][Math.floor(Math.random() * 4)],
                '{competitors}': ['友商A', '友商B', '友商C'],
                '{model}': ['订阅制', '按需付费', 'Freemium', '企业授权'][Math.floor(Math.random() * 4)],
                '{revenue}': ['订阅费用', '增值服务', '企业定制', '技术支持'][Math.floor(Math.random() * 4)],
                '{background}': ['一线互联网公司', '知名咨询机构', '顶尖高校', '行业龙头企业'][Math.floor(Math.random() * 4)],
                '{situation}': ['业务流程繁琐', '数据分散', '协作效率低', '客户响应慢'][Math.floor(Math.random() * 4)],
                '{goal}': ['完成产品原型', '上线试运行', '达到盈亏平衡', '获取1000+用户'][Math.floor(Math.random() * 4)],
                '{benefit}': ['年收入增长30%', '成本降低20%', '效率提升50%'][Math.floor(Math.random() * 3)],
                '{task}': ['系统培训', '数据迁移', '流程梳理'][Math.floor(Math.random() * 3)],
                '{document}': ['进度报告', '测试报告', '验收文档'][Math.floor(Math.random() * 3)]
            };
            
            Object.keys(replacements).forEach(key => {
                text = text.replace(new RegExp(key, 'g'), replacements[key]);
            });
            
            return text;
        }

        // ============================================
        // Statistics
        // ============================================
        function updateTextStats(text) {
            const wordCount = text.trim().split(/\s+/).length;
            const charCount = text.length;
            const paraCount = text.split('\n\n').filter(p => p.trim()).length;
            const readingTime = Math.ceil(wordCount / 200); // 200 wpm
            
            document.getElementById('statWords').textContent = wordCount.toLocaleString();
            document.getElementById('statChars').textContent = charCount.toLocaleString();
            document.getElementById('statParagraphs').textContent = paraCount;
            document.getElementById('statReading').textContent = readingTime + '分';
            
            // Word target progress
            const target = parseInt(document.getElementById('wordTarget').value);
            if (target > 0) {
                document.getElementById('targetProgressContainer').style.display = 'block';
                const progress = Math.min(100, Math.round((wordCount / target) * 100));
                document.getElementById('targetProgressBar').style.width = progress + '%';
                document.getElementById('targetProgressText').textContent = progress + '%';
                
                if (wordCount >= target) {
                    document.getElementById('statWords').classList.add('target-reached');
                    setTimeout(() => {
                        document.getElementById('statWords').classList.remove('target-reached');
                    }, 1000);
                }
            } else {
                document.getElementById('targetProgressContainer').style.display = 'none';
            }
        }

        function updateStats() {
            document.getElementById('totalGenerated').textContent = state.stats.generated;
            document.getElementById('totalWords').textContent = state.stats.totalWords.toLocaleString();
        }

        // ============================================
        // Chart
        // ============================================
        function initChart() {
            const ctx = document.getElementById('statsChart').getContext('2d');
            state.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['字数', '字符', '段落', '句子'],
                    datasets: [{
                        label: '文本统计',
                        data: [0, 0, 0, 0],
                        backgroundColor: [
                            'rgba(5, 150, 105, 0.8)',
                            'rgba(16, 185, 129, 0.8)',
                            'rgba(132, 204, 22, 0.8)',
                            'rgba(20, 184, 166, 0.8)'
                        ],
                        borderRadius: 6,
                        borderSkipped: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        function updateChart() {
            if (!state.chart) return;
            
            const text = document.getElementById('output').dataset.rawText || '';
            const words = text.trim().split(/\s+/).length;
            const chars = text.length;
            const paragraphs = text.split('\n\n').filter(p => p.trim()).length;
            const sentences = text.split(/[.!?。！？]+/).filter(s => s.trim()).length;
            
            state.chart.data.datasets[0].data = [words, chars, paragraphs, sentences];
            state.chart.update('active');
        }

        // ============================================
        // History
        // ============================================
        function addToHistory(text, type) {
            const item = {
                id: Date.now(),
                preview: text.substring(0, 100).replace(/\n/g, ' '),
                text: text,
                type: type,
                timestamp: new Date().toISOString(),
                words: text.trim().split(/\s+/).length
            };
            
            state.history.unshift(item);
            if (state.history.length > 20) {
                state.history = state.history.slice(0, 20);
            }
            
            localStorage.setItem('loremHistory', JSON.stringify(state.history));
            loadHistory();
        }

        function loadHistory() {
            const list = document.getElementById('historyList');
            
            if (state.history.length === 0) {
                list.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📝</div>
                        <div>暂无历史记录</div>
                    </div>
                `;
                return;
            }
            
            list.innerHTML = state.history.slice(0, 5).map(item => `
                <div class="history-item" onclick="restoreHistory(${item.id})">
                    <div class="history-preview">${escapeHtml(item.preview)}...</div>
                    <div class="history-meta">
                        <span class="history-tag">${getTypeName(item.type)}</span>
                        <span>${item.words} 字</span>
                        <span>${formatTime(item.timestamp)}</span>
                    </div>
                </div>
            `).join('');
        }

        function restoreHistory(id) {
            const item = state.history.find(h => h.id === id);
            if (item) {
                const output = document.getElementById('output');
                output.innerHTML = formatText(item.text, state.format);
                output.dataset.rawText = item.text;
                updateTextStats(item.text);
                updateChart();
                showToast('已恢复历史记录');
            }
        }

        function clearHistory() {
            if (confirm('确定要清空所有历史记录吗？')) {
                state.history = [];
                localStorage.removeItem('loremHistory');
                loadHistory();
                showToast('历史记录已清空');
            }
        }

        function exportHistory() {
            const data = JSON.stringify(state.history, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `lorem-history-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('历史记录已导出');
        }

        function showHistoryModal() {
            const modal = document.getElementById('historyModal');
            const content = document.getElementById('historyModalContent');
            
            if (state.history.length === 0) {
                content.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📋</div>
                        <div>暂无历史记录</div>
                    </div>
                `;
            } else {
                content.innerHTML = state.history.map(item => `
                    <div class="history-item" onclick="restoreHistory(${item.id}); closeModal('historyModal')">
                        <div class="history-preview">${escapeHtml(item.preview)}...</div>
                        <div class="history-meta">
                            <span class="history-tag">${getTypeName(item.type)}</span>
                            <span>${item.words} 字</span>
                            <span>${new Date(item.timestamp).toLocaleString('zh-CN')}</span>
                        </div>
                    </div>
                `).join('');
            }
            
            modal.classList.add('show');
        }

        // ============================================
        // Batch Generation
        // ============================================
        function updateBatchPreview() {
            const count = document.getElementById('batchCount').value;
            const type = document.getElementById('batchType').value;
            const paras = document.getElementById('batchParagraphs').value;
            
            document.getElementById('batchPreview').textContent = 
                `将生成 ${count} 条 ${getTypeName(type)} 文本，每条 ${paras} 段`;
        }

        function showBatchModal() {
            document.getElementById('batchModal').classList.add('show');
            document.getElementById('batchResults').style.display = 'none';
        }

        function generateBatch() {
            const count = parseInt(document.getElementById('batchCount').value);
            const type = document.getElementById('batchType').value;
            const paras = parseInt(document.getElementById('batchParagraphs').value);
            
            const results = [];
            const originalType = state.type;
            state.type = type;
            
            for (let i = 0; i < count; i++) {
                let text = '';
                for (let j = 0; j < paras; j++) {
                    switch(type) {
                        case 'lorem':
                            text += (j > 0 ? '\n\n' : '') + generateLoremParagraph(3, j === 0);
                            break;
                        case 'chinese':
                            text += (j > 0 ? '\n\n' : '') + generateChineseParagraph(3);
                            break;
                        case 'code':
                            text += (j > 0 ? '\n\n// ---\n\n' : '') + generateCodeSnippet();
                            break;
                        case 'legal':
                            text += (j > 0 ? '\n\n' : '') + generateLegalText(j);
                            break;
                        case 'marketing':
                            text += (j > 0 ? '\n\n---\n\n' : '') + generateMarketingText();
                            break;
                        case 'business':
                            text += (j > 0 ? '\n\n---\n\n' : '') + generateBusinessText(j);
                            break;
                    }
                }
                results.push({ index: i + 1, text: text });
            }
            
            state.type = originalType;
            
            // Show results
            const resultsContainer = document.getElementById('batchResults');
            const resultsList = document.getElementById('batchResultsList');
            
            resultsList.innerHTML = results.map(r => `
                <div style="margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px;">
                    <div style="font-weight: 600; color: var(--primary); margin-bottom: 8px;">#${r.index}</div>
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 0.8rem; max-height: 150px; overflow-y: auto;">${escapeHtml(r.text)}</pre>
                    <button class="output-action-btn" style="margin-top: 8px;" onclick="copyToClipboard('${escapeHtml(r.text).replace(/'/g, "\\'")}')">复制</button>
                </div>
            `).join('');
            
            resultsContainer.style.display = 'block';
            showToast(`✅ 成功生成 ${count} 条文本`);
        }

        // ============================================
        // Actions
        // ============================================
        function copyOutput() {
            const text = document.getElementById('output').dataset.rawText || document.getElementById('output').textContent;
            copyToClipboard(text);
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('✅ 已复制到剪贴板');
            }).catch(() => {
                // Fallback
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                showToast('✅ 已复制到剪贴板');
            });
        }

        function downloadOutput() {
            const text = document.getElementById('output').dataset.rawText || document.getElementById('output').textContent;
            const format = state.format;
            
            let mimeType = 'text/plain';
            let extension = 'txt';
            
            switch(format) {
                case 'html':
                    mimeType = 'text/html';
                    extension = 'html';
                    break;
                case 'markdown':
                    extension = 'md';
                    break;
                case 'json':
                    mimeType = 'application/json';
                    extension = 'json';
                    break;
            }
            
            const blob = new Blob([text], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `lorem-${state.type}-${Date.now()}.${extension}`;
            a.click();
            URL.revokeObjectURL(url);
            
            showToast('✅ 文件已下载');
        }

        function regenerate() {
            generateText();
        }

        function clearAll() {
            document.getElementById('output').innerHTML = '点击"生成文本"按钮开始...';
            document.getElementById('output').dataset.rawText = '';
            document.getElementById('statWords').textContent = '0';
            document.getElementById('statChars').textContent = '0';
            document.getElementById('statParagraphs').textContent = '0';
            document.getElementById('statReading').textContent = '0分';
            document.getElementById('targetProgressContainer').style.display = 'none';
            
            if (state.chart) {
                state.chart.data.datasets[0].data = [0, 0, 0, 0];
                state.chart.update();
            }
            
            showToast('✅ 已清空');
        }

        function insertDate() {
            const output = document.getElementById('output');
            const date = new Date().toLocaleString('zh-CN');
            const currentText = output.dataset.rawText || output.textContent;
            
            if (currentText === '点击"生成文本"按钮开始...') {
                output.textContent = date;
            } else {
                output.textContent = currentText + '\n\n' + date;
            }
            
            output.dataset.rawText = output.textContent;
            updateTextStats(output.textContent);
            showToast('✅ 日期已插入');
        }

        // ============================================
        // Modal & Utils
        // ============================================
        function closeModal(id) {
            document.getElementById(id).classList.remove('show');
        }

        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => toast.remove(), 300);
            }, 2500);
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function formatTime(isoString) {
            const date = new Date(isoString);
            const now = new Date();
            const diff = now - date;
            
            if (diff < 60000) return '刚刚';
            if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
            if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
            return date.toLocaleDateString('zh-CN');
        }

        // Close modals on backdrop click
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        });
