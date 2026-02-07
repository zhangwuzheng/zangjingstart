import { ProductData, NewsItem, TravelService, TravelRoute, CulturalActivity } from './types';

export const products: ProductData[] = [
  {
    id: 'cordyceps',
    name: '那曲冬虫夏草',
    subName: 'Nagqu Cordyceps',
    description: '核心亮点：高海拔原生环境、遵循自然生长节律、营养峰值采收、区块链溯源',
    narrative: '冬藏虫灵，夏沐草华，4500米以上的雪域灵气凝结。一根虫草，承载高原亿万年生态沉淀，以醇厚质感，传递自然赋予的养生能量。',
    tags: ['雪域臻品', '溯源保真', '4500米'],
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/chongcao.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/chongcao.png',
    accentColor: 'text-[#C6A87C]',
    features: ['地理标志认证', '国企背书', '全链路溯源可查'],
    origin: '西藏那曲地区，海拔4500米以上高寒草甸',
    originImage: 'https://p5.itc.cn/q_70/images03/20220528/7593bbda8b25472283ba823f43925c7d.jpeg', // Nagqu/Namtso High Altitude Lake/Grassland
    variants: [
        '精选一级 (2根/克) - 礼盒装 10g', 
        '顶级特优 (1.6根/克) - 礼盒装 10g', 
        '至尊王草 (1根/克) - 藏木盒 20g',
        '家庭实惠装 (3根/克) - 散装 50g'
    ],
    giImages: [
        'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/ztq/ztqdlibs%20%281%29.png',
        'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/ztq/ztqdlibs%20%282%29.png',
        'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/ztq/ztqdlibs%20%283%29.png',
        'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/ztq/ztqdlibs%20%284%29.png'
    ],
    detailedFeatures: [
      { 
        title: '黄金产区 · 4500米', 
        text: '源自那曲核心产区，独特的地理气候条件造就了色泽金黄、虫体饱满的顶级品质。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '营养峰值 · 严控采收', 
        text: '严格遵循生物钟，在孢子成熟前的营养黄金期进行人工采挖，确保腺苷等活性成分含量最高。',
        image: 'https://images.unsplash.com/photo-1518182170546-0766be6f5a56?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '深度洁净 · 手工甄选', 
        text: '采用专业低温清洁技术，去除泥沙杂质的同时，完整保留虫草表面的天然菌膜。',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop'
      }
    ],
    usageMethods: [
      { 
        title: '清茶静泡', 
        description: '取1-3根洗净，放入杯中，冲入80℃左右开水，静置片刻即可饮用，可反复冲泡至味淡，最后嚼食。',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '原盅炖汤', 
        description: '与老鸭、乌鸡或乳鸽同炖，小火慢炖2小时以上，汤清味醇，最能激发其滋补功效。',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '精细打粉', 
        description: '将虫草低温烘干后研磨成极细粉末，每日早晚取0.5-1g温水送服，吸收更直接。',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
      }
    ],
    certificates: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '腺苷含量检测报告', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' },
        { title: '重金属残留检测', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' }
    ],
    detailedSpecs: [
        { label: '产地海拔', value: '4500m - 4800m' },
        { label: '虫体色泽', value: '金黄或棕黄，色泽自然' },
        { label: '干湿程度', value: '干度95%以上，脆度适中' },
        { label: '洁净度', value: '深度清洁，无泥沙，无重金属残留' },
        { label: '腺苷含量', value: '≥0.01% (优于国标)' },
        { label: '储存方式', value: '密封置于阴凉干燥处，冷藏更佳' }
    ],
    qna: [
        { question: '如何辨别那曲虫草的真伪？', answer: '正宗那曲虫草虫体色泽黄净，子座较短，虫体饱满，背部环纹清晰（三瘦一肥），闻之有浓郁的酥油香或菌香味，无腥臭味。' },
        { question: '虫草可以天天吃吗？', answer: '建议循序渐进。一般作为日常保健，每日1-3根即可；身体虚弱者可适当增加。关键在于坚持，细水长流方能见效。' },
        { question: '收到后如何保存？', answer: '建议收到后密封放置于冰箱冷冻层（-18℃以下）保存，可有效防潮防虫，锁住营养成分，保质期可达2年。' }
    ]
  },
  {
    id: 'water',
    name: '7100冰川水',
    subName: '7100 Glacial Water',
    description: '核心亮点：源头直采、零污染、限量取水、全流程零排放',
    narrative: '源自念青唐古拉冰川融水，历经岩层天然过滤，清冽甘醇。每一滴都承载着雪域的纯净，恪守“取之有度、反哺有方”的承诺，让净境之水滋养生活。',
    tags: ['雪域净源', '冰川直采', '冰川活水'],
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/7100shui.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/7100shui.png',
    accentColor: 'text-[#8FB3BF]',
    features: ['零排放生产', '权威质检认证', '季度监测'],
    origin: '念青唐古拉山脉，海拔7100米冰川融水带',
    originImage: 'https://se-feed-bucket.bj.bcebos.com/realtime-note-image-process/80b9bc53a3d80159c49a1e7cbe14d7fa', // Snow Capped Mountains / Glacier
    variants: [
        '330ml × 24瓶 / 经典箱',
        '550ml × 24瓶 / 家庭箱',
        '1L × 12瓶 / 专享箱'
    ],
    detailedFeatures: [
      { 
        title: '天然弱碱性', 
        text: 'PH值7.3-7.8，富含多种对人体有益的微量元素，天然小分子团更易吸收。',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '万年古老水源', 
        text: '冰川形成于万年前，封存了史前的纯净记忆，未受现代工业任何污染。',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '原产地灌装', 
        text: '坚持在水源地直接建厂灌装，杜绝二次污染，锁住第一口鲜活。',
        image: 'https://images.unsplash.com/photo-1616423640778-2cfd12699f59?q=80&w=800&auto=format&fit=crop'
      }
    ],
    usageMethods: [
      { 
        title: '每日悦饮', 
        description: '常温或冷藏饮用皆宜，口感甘冽清爽，快速补充身体所需水分与微量元素。',
        image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '高端茗茶', 
        description: '好水配好茶。7100冰川水为天然软水，更能激发茶叶的香气与汤色，茶汤更显醇厚。',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '母婴膳食', 
        description: '低钠弱碱，分子团小，非常适合冲泡奶粉或烹饪婴儿辅食，呵护娇嫩肠胃。',
        image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop'
      }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '106项水质全检', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' }
    ],
    detailedSpecs: [
        { label: '水源地', value: '念青唐古拉山脉南麓' },
        { label: 'PH值', value: '7.3 ± 0.5 (天然弱碱性)' },
        { label: '溶解性总固体', value: '80 - 150 mg/L' },
        { label: '锂含量', value: '0.12 - 0.28 mg/L' },
        { label: '锶含量', value: '0.20 - 0.50 mg/L' },
        { label: '包装材质', value: '高硼硅玻璃 / 环保PET' },
        { label: '储存条件', value: '常温/冷藏' }
    ],
    qna: [
        { question: '这款水适合宝宝冲奶粉吗？', answer: '非常适合。7100冰川水是天然低氘、低钠软水，分子团小，代谢负担低，且矿物质含量均衡，有助于保护婴幼儿娇嫩的肾脏。' },
        { question: '可以直接加热饮用吗？', answer: '可以。建议加热至45-60度饮用，不建议反复烧开，以免导致水中的活性氧和矿物质流失，影响口感与功效。' },
        { question: '为什么口感有点甘甜？', answer: '这是优质冰川水的自然特征。经过岩层常年过滤，富含锂、锶等微量元素，且无有机物污染，因此入口绵软甘冽。' }
    ]
  },
  {
    id: 'matsutake',
    name: '林芝野生藏松茸',
    subName: 'Wild Matsutake',
    description: '核心亮点：林芝秘境野生生长、无人工干预、原生鲜香、现代品控',
    narrative: '藏地江南林芝的馈赠，在纯净空气与肥沃土壤中自然生长。拒绝人工培育，保留原生鲜香，以匠心工艺锁鲜，让雪域珍馐的本味直抵舌尖。',
    tags: ['林芝野珍', '林芝秘境', '野长天成'],
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/songrong.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/songrong.png',
    accentColor: 'text-[#6B8E6B]',
    features: ['野生溯源', '新鲜度锁鲜技术', '地理标志认证'],
    origin: '西藏林芝原始森林',
    originImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop', // Deep Forest
    variants: [
        '5-7cm (标准装) - 1kg',
        '7-9cm (优选装) - 1kg',
        '9cm+ (出口级臻品) - 1kg'
    ],
    detailedFeatures: [
      { 
        title: '共生生态', 
        text: '与50年以上树龄的青冈木共生，无法人工种植，每一朵都是大自然的馈赠。',
        image: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '极速锁鲜', 
        text: '采摘后6小时内完成预冷处理，全程冷链，保留刚出土时的鲜甜与浓郁香气。',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '严苛筛选', 
        text: '只要形状完美、无虫眼的松茸，百里挑一，只为呈现顶级品质。',
        image: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=800&auto=format&fit=crop'
      }
    ],
    usageMethods: [
      { 
        title: '黄油香煎', 
        description: '最经典的吃法。切片后用黄油小火慢煎至两面金黄，撒少许海盐即可，奶香与菌香交织。',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '刺身生食', 
        description: '顶级品质的鲜松茸洗净切片，搭配刺身酱油与芥末，口感脆嫩，感受山野的原始鲜甜。',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd43da?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '松茸鸡汤', 
        description: '土鸡炖至八成熟时加入松茸片，继续炖煮20分钟，汤色金黄，鲜美无比。',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop'
      }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '农残重金属检测', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' }
    ],
    detailedSpecs: [
        { label: '产品等级', value: '出口级 / 特级' },
        { label: '开伞度', value: '未开伞 (营养价值最高)' },
        { label: '新鲜度', value: '采摘后48小时内发货' },
        { label: '运输方式', value: '顺丰冷链空运' },
        { label: '虫伤率', value: '严格筛选，无虫眼' }
    ],
    qna: [
        { question: '松茸表面看起来有点脏，要怎么洗？', answer: '鲜松茸极其娇贵。建议用陶瓷刀轻轻刮去根部泥土，在流水下快速冲洗（不要浸泡），用厨房纸吸干水分即可，切勿用力搓洗以免损伤香气。' },
        { question: '收到后可以放多久？', answer: '鲜松茸保鲜期极短。建议收到后立即食用，口感最佳。若需保存，用吸水纸包裹放入冰箱冷藏（0-3℃）可保存3-5天；长期保存建议切片冷冻。' },
        { question: '开伞的松茸和未开伞的有什么区别？', answer: '未开伞的松茸（童茸）营养价值和口感最好，肉质紧实脆嫩；开伞后孢子散发，香气虽浓但营养和口感略逊，价格也相对较低。我们只发未开伞的臻品。' }
    ]
  },
  {
    id: 'pork',
    name: '藏香猪',
    subName: 'Xizang Fragrant Pork',
    description: '核心亮点：高原散养、食野果饮山泉、低脂高蛋白、肉质细嫩',
    narrative: '高原上的奔跑精灵，生长于海拔3000米以上的林间草甸。天然散养，以野果山泉为食，经漫长生长周期沉淀出独特的鲜香风味与丰富营养。',
    tags: ['高原散养', '肉质鲜美', '低脂健康'],
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1.png', 
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1.png',
    accentColor: 'text-[#A65D57]', // Muted earthy red
    features: ['林间散养', '生长周期长', '氨基酸丰富'],
    origin: '西藏林芝/山南地区，高海拔林间散养基地',
    originImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop', // Meadow/Valley
    variants: [
        '五花肉 500g / 真空装',
        '排骨 500g / 真空装',
        '精瘦肉 500g / 真空装',
        '整腿 2kg / 礼盒装'
    ],
    detailedFeatures: [
      { 
        title: '野外放养', 
        text: '终日随性奔跑于山林之间，运动量大，体脂率极低，皮薄肉紧，口感劲道。',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '天然食谱', 
        text: '以林间野果、冬虫夏草、人参果等天然植物为食，饮用山涧清泉，肉质自带清香。',
        image: 'https://images.unsplash.com/photo-1595855709915-f63806967f89?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '营养宝库', 
        text: '富含19种氨基酸，亚油酸含量高，胆固醇含量低，是真正健康的“人参猪”。',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop'
      }
    ],
    usageMethods: [
      { 
        title: '白切原味', 
        description: '清水煮熟切片，蘸取秘制蘸水。最能体现藏香猪皮脆肉嫩、肥而不腻的特点。',
        image: 'https://images.unsplash.com/photo-1543362906-ac1b4526c1d0?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '藏式烧烤', 
        description: '切块腌制后炭火烤制，外皮焦香酥脆，肉质劲道多汁，风味独特。',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '红烧焖煮', 
        description: '小火慢炖，肉质紧实不柴，油脂在烹饪中化为醇香，入口即化，回味无穷。',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop'
      }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '营养成分分析报告', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' },
        { title: '食品安全检测', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' }
    ],
    detailedSpecs: [
        { label: '生长周期', value: '12 - 18 个月 (自然慢养)' },
        { label: '脂肪含量', value: '比普通猪肉低 50% 以上' },
        { label: '氨基酸', value: '富含19种氨基酸及微量元素' },
        { label: '饲养方式', value: '高海拔林间纯散养' },
        { label: '屠宰加工', value: '标准化无菌屠宰车间' },
        { label: '包装规格', value: '500g / 1000g 真空保鲜装' }
    ],
    qna: [
        { question: '藏香猪肉为什么比普通猪肉贵？', answer: '藏香猪生长在高原，生长周期长达一年半（普通猪仅3-4个月），且以天然珍贵植物为食，产量稀少，营养价值极高，被称为“高原之珍”。' },
        { question: '肉质口感有什么特点？', answer: '藏香猪皮薄（仅2mm左右），肉质紧致有弹性，肥肉晶莹剔透、爽口不腻，瘦肉鲜红、纹理清晰，煮熟后有天然的奶香味。' },
        { question: '冷冻发货会影响口感吗？', answer: '我们采用零下35度急冻锁鲜技术，配合真空包装和冷链运输，解冻后能最大程度还原鲜肉的口感与营养，与现宰差异极小。' }
    ]
  }
];

export const news: NewsItem[] = [
  {
    id: 'news-01',
    title: '藏境山水荣获“西藏自治区农业产业化龙头企业”称号',
    date: 'May 20, 2024',
    summary: '凭借在藏地特色农产品开发与产业链整合方面的卓越表现，藏境山水近日被正式认定为自治区级农业产业化龙头企业。这将进一步推动我们将西藏优质农产品推向更广阔的市场。',
    image: 'https://images.unsplash.com/photo-1551818238-76209c277636?q=80&w=800&auto=format&fit=crop',
    category: 'Corporate News'
  },
  {
    id: 'news-02',
    title: '2024那曲虫草采挖季正式开启，品质再创新高',
    date: 'May 15, 2024',
    summary: '随着雪线消融，那曲核心产区迎来了一年一度的冬虫夏草采挖季。今年气候适宜，雨水充沛，虫草个头饱满，色泽金黄，品质优于往年同期。',
    image: 'https://images.unsplash.com/photo-1627389955805-1a8315a995e9?q=80&w=800&auto=format&fit=crop',
    category: 'Product Updates'
  },
  {
    id: 'news-03',
    title: '“寻味西藏”全国巡回品鉴会首站于成都圆满落幕',
    date: 'April 10, 2024',
    summary: '藏境山水携手多家五星级酒店，在成都举办了首场高端品鉴会，邀请百余位VIP客户共赏雪域珍馐。现场展示了松茸刺身、虫草炖汤等经典菜式。',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    category: 'Events'
  },
   {
    id: 'news-04',
    title: '藏境文旅APP 2.0版本上线，新增AI行程助手功能',
    date: 'March 28, 2024',
    summary: '为了提升用户的自驾体验，藏境文旅APP发布重大更新。新增AI智能行程规划与实时路况预警功能，让进藏之旅更加安全、从容。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    category: 'Technology'
  }
];

export const travelServices: TravelService[] = [
    {
        id: 'rental',
        title: '高端自驾租赁',
        enTitle: 'Premium Car Rental',
        description: '提供路虎卫士、丰田霸道等硬派越野车租赁，车况优良，保险齐全。',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
        features: ['全险保障', '异地还车', '24h救援']
    },
    {
        id: 'photo',
        title: '旅拍纪实服务',
        enTitle: 'Travel Photography',
        description: '专业摄影师随队跟拍，用镜头记录朝圣路上的每一个动人瞬间。',
        image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?q=80&w=800&auto=format&fit=crop',
        features: ['无人机航拍', '精修底片', '相册定制']
    },
    {
        id: 'wellness',
        title: '高原康养保障',
        enTitle: 'Plateau Wellness',
        description: '配备便携式制氧机与血氧监测仪，专业随队医生提供健康咨询。',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
        features: ['供氧设备', '健康监测', '绿色通道']
    },
    {
        id: 'hotel',
        title: '奢野酒店预订',
        enTitle: 'Luxury Accommodation',
        description: '甄选沿途景观极佳的松赞系列及高端精品民宿，躺在床上看雪山。',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        features: ['景观客房', 'VIP通道', '私人管家']
    },
    {
        id: 'dining',
        title: '藏地美食品鉴',
        enTitle: 'Fine Dining',
        description: '深入当地特色餐厅与牧民家宴，品尝地道的石锅鸡、烤全羊。',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
        features: ['特色定制', '卫生保障', '文化体验']
    },
    {
        id: 'butler',
        title: '随行管家服务',
        enTitle: 'Butler Service',
        description: '资深藏地向导全程陪同，不仅是司机，更是文化的讲解者。',
        image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=800&auto=format&fit=crop',
        features: ['行程规划', '双语服务', '文化讲解']
    }
];

export const travelRoutes: TravelRoute[] = [
    {
        id: 'G318',
        name: 'G318 川藏南线 · 景观大道',
        description: '中国人的景观大道，集雪山、冰川、峡谷、草原、森林于一体的视觉盛宴。',
        stops: ['成都', '新都桥', '理塘', '林芝', '拉萨'],
        distance: '2142km',
        duration: '8-10 Days',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'G317',
        name: 'G317 川藏北线 · 人文史诗',
        description: '深入康巴腹地，寺庙林立，人文气息浓厚，探索未被商业化的隐世秘境。',
        stops: ['成都', '色达', '甘孜', '德格', '那曲', '拉萨'],
        distance: '2412km',
        duration: '10-12 Days',
        image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop'
    }
];

export const culturalActivities: CulturalActivity[] = [
    {
        id: 'thangka',
        title: '唐卡绘制体验',
        enTitle: 'Thangka Painting',
        description: '在非遗传承人的指导下，学习矿物颜料的调配与线条勾勒，亲手绘制一幅寓意吉祥的唐卡，感悟画笔下的修行。',
        image: 'https://images.unsplash.com/photo-1599577239088-724f7e268f70?q=80&w=800&auto=format&fit=crop',
        tags: ['非遗体验', '艺术修心']
    },
    {
        id: 'incense',
        title: '藏香制作技艺',
        enTitle: 'Tibetan Incense',
        description: '前往尼木县，探访千年水磨长廊，了解藏香的配方与制作工序，亲手制作一份专属的藏香，带回雪域的气息。',
        image: 'https://images.unsplash.com/photo-1603565154388-c7e466cb9515?q=80&w=800&auto=format&fit=crop',
        tags: ['手工制作', '嗅觉之旅']
    },
    {
        id: 'meditation',
        title: '寺院禅修冥想',
        enTitle: 'Meditation',
        description: '在清晨的古寺中，跟随僧人一起诵经、冥想，在辩经声中思考生命的真谛，寻找内心的宁静与力量。',
        image: 'https://images.unsplash.com/photo-1507643179173-1b94d13e9a4f?q=80&w=800&auto=format&fit=crop',
        tags: ['心灵疗愈', '宗教文化']
    }
];
