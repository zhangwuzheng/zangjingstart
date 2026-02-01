import { ProductData, NewsItem, TravelService, TravelRoute, CulturalActivity } from './types';

export const products: ProductData[] = [
  {
    id: 'cordyceps',
    name: '那曲冬虫夏草',
    subName: 'Nagqu Cordyceps',
    description: '核心亮点：高海拔原生环境、遵循自然生长节律、营养峰值采收、区块链溯源',
    narrative: '冬藏虫灵，夏沐草华，4500米以上的雪域灵气凝结。一根虫草，承载高原亿万年生态沉淀，以醇厚质感，传递自然赋予的养生能量。',
    tags: ['雪域臻品', '溯源保真', '4500米'],
    // Macro nature shot resembling fungal growth/roots in nature
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/chongcao.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/chongcao.png',
    accentColor: 'text-[#C6A87C]',
    features: ['地理标志认证', '国企背书', '全链路溯源可查'],
    origin: '西藏那曲地区，海拔4500米以上高寒草甸',
    specs: '精选一级/特级，无断草，无穿签',
    detailedFeatures: [
      { title: '黄金产区', text: '源自那曲核心产区，独特的地理气候条件造就了色泽金黄、虫体饱满的顶级品质。' },
      { title: '营养峰值', text: '严格遵循生物钟，在孢子成熟前的营养黄金期进行人工采挖，确保腺苷等活性成分含量最高。' },
      { title: '深度洁净', text: '采用专业低温清洁技术，去除泥沙杂质的同时，完整保留虫草表面的天然菌膜。' }
    ],
    certificates: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '腺苷含量检测报告', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' },
        { title: '重金属残留检测', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'water',
    name: '7100冰川水',
    subName: '7100 Glacial Water',
    description: '核心亮点：源头直采、零污染、限量取水、全流程零排放',
    narrative: '源自念青唐古拉冰川融水，历经岩层天然过滤，清冽甘醇。每一滴都承载着雪域的纯净，恪守“取之有度、反哺有方”的承诺，让净境之水滋养生活。',
    tags: ['雪域净源', '冰川直采', '冰川活水'],
    // Clear water / Ice texture
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/7100shui.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/7100shui.png',
    accentColor: 'text-[#8FB3BF]',
    features: ['零排放生产', '权威质检认证', '季度监测'],
    origin: '念青唐古拉山脉，海拔7100米冰川融水带',
    specs: '350ml / 550ml 高端玻璃瓶装',
    detailedFeatures: [
      { title: '天然弱碱性', text: 'PH值7.3-7.8，富含多种对人体有益的微量元素，天然小分子团更易吸收。' },
      { title: '古老水源', text: '冰川形成于万年前，封存了史前的纯净记忆，未受现代工业任何污染。' },
      { title: '原产地灌装', text: '坚持在水源地直接建厂灌装，杜绝二次污染，锁住第一口鲜活。' }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '106项水质全检', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'matsutake',
    name: '林芝野生藏松茸',
    subName: 'Wild Matsutake',
    description: '核心亮点：林芝秘境野生生长、无人工干预、原生鲜香、现代品控',
    narrative: '藏地江南林芝的馈赠，在纯净空气与肥沃土壤中自然生长。拒绝人工培育，保留原生鲜香，以匠心工艺锁鲜，让雪域珍馐的本味直抵舌尖。',
    tags: ['林芝野珍', '林芝秘境', '野长天成'],
    // Mushrooms in forest
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/songrong.png',
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/songrong.png',
    accentColor: 'text-[#6B8E6B]',
    features: ['野生溯源', '新鲜度锁鲜技术', '地理标志认证'],
    origin: '西藏林芝原始森林',
    specs: '5-7cm / 7-9cm / 9cm+ 不同等级鲜品',
    detailedFeatures: [
      { title: '共生生态', text: '与50年以上树龄的青冈木共生，无法人工种植，每一朵都是大自然的馈赠。' },
      { title: '极速锁鲜', text: '采摘后6小时内完成预冷处理，全程冷链，保留刚出土时的鲜甜与浓郁香气。' },
      { title: '严苛筛选', text: '只要形状完美、无虫眼的松茸，百里挑一，只为呈现顶级品质。' }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '农残重金属检测', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'pork',
    name: '藏香猪',
    subName: 'Xizang Fragrant Pork',
    description: '核心亮点：高原散养、食野果饮山泉、低脂高蛋白、肉质细嫩',
    narrative: '高原上的奔跑精灵，生长于海拔3000米以上的林间草甸。天然散养，以野果山泉为食，经漫长生长周期沉淀出独特的鲜香风味与丰富营养。',
    tags: ['高原散养', '肉质鲜美', '低脂健康'],
    // Black pig or boar in nature
    image: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1.png', 
    detailImage: 'https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/%E6%9C%AA%E5%91%BD%E5%90%8D%E7%9A%84%E8%AE%BE%E8%AE%A1.png',
    accentColor: 'text-[#A65D57]', // Muted earthy red
    features: ['林间散养', '生长周期长', '氨基酸丰富'],
    origin: '西藏林芝/山南地区，高海拔林间散养基地',
    specs: '整猪 / 分割部位 (五花、排骨、腿肉)',
    detailedFeatures: [
      { title: '野外放养', text: '终日随性奔跑于山林之间，运动量大，体脂率极低，皮薄肉紧，口感劲道。' },
      { title: '天然食谱', text: '以林间野果、冬虫夏草、人参果等天然植物为食，饮用山涧清泉，肉质自带清香。' },
      { title: '营养宝库', text: '富含19种氨基酸，亚油酸含量高，胆固醇含量低，是真正健康的“人参猪”。' }
    ],
    certificates: [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
    ],
    reports: [
        { title: '营养成分分析报告', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop' },
        { title: '食品安全检测', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' }
    ]
  }
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: '溯源之旅：团队深入那曲核心产区考察虫草采挖',
    date: '2024-05-15',
    category: '实地考察',
    summary: '为确保2024年头期虫草品质，藏境山水团队驱车前往海拔4500米的那曲比如县，与当地牧民同吃同住，实地监控采挖与初加工流程。',
    image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4deb1?q=80&w=800&auto=format&fit=crop' // Mountains/Expedition
  },
  {
    id: '2',
    title: '守护净土：启动念青唐古拉水源地生态保护计划',
    date: '2024-06-20',
    category: '公益责任',
    summary: '我们承诺每销售一瓶冰川水，将捐赠0.1元用于水源地周边的垃圾清理与植被恢复，用实际行动践行“取之有度，反哺有方”的品牌理念。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop' // Clean nature field
  },
  {
    id: '3',
    title: '藏香猪养殖基地挂牌，标准化助力乡村振兴',
    date: '2024-08-10',
    category: '产业动态',
    summary: '藏境山水位于林芝的标准化藏香猪散养基地正式挂牌，引入现代追溯体系，既保留了藏猪的野性品质，又确保了食品安全，带动当地农户增收。',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800&auto=format&fit=crop' // Farm/Rural
  },
  {
    id: '4',
    title: '携手顺丰冷链，打造雪域臻品48小时直达专线',
    date: '2024-09-01',
    category: '物流升级',
    summary: '为了让内地消费者品尝到最鲜美的松茸与藏猪肉，我们与顺丰速运达成深度战略合作，开通拉萨/林芝直飞专线，锁住高原鲜度。',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' // Logistics/Boxes
  }
];

export const travelServices: TravelService[] = [
  {
    id: 'rental',
    title: '越野尊享',
    enTitle: 'Luxury Car Rental',
    description: '提供普拉多、坦克300、陆巡等硬派越野车型，配备专业高原老司机或提供自驾保障车队，让您的川藏线之旅安全无忧。',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop', // Offroad car
    features: ['异地还车', '24h救援', '新车保障']
  },
  {
    id: 'photo',
    title: '旅拍纪实',
    enTitle: 'Travel Photography',
    description: '专业摄影团队随行或定点拍摄，提供无人机航拍、藏装写真及星空摄影服务，记录雪山湖泊前的动人瞬间。',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', // Camera
    features: ['底片全送', '专业精修', '无人机航拍']
  },
  {
    id: 'wellness',
    title: '高原疗愈',
    enTitle: 'Highland Wellness',
    description: '在神山圣湖旁进行瑜伽冥想，体验传统藏医药浴与颂钵疗愈，净化身心，缓解高原反应，回归内心平静。',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop', // Yoga/Meditation
    features: ['藏医药浴', '冥想课程', '颂钵音疗']
  },
  {
    id: 'hotel',
    title: '云端宿集',
    enTitle: 'Boutique Hotels',
    description: '严选沿途高品质观景酒店与隐奢民宿，覆盖康定、理塘、林芝等地。全线提供弥散式供氧房间，缓解高反焦虑。',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop', // Luxury hotel
    features: ['供氧客房', '雪山景观', '管家服务']
  },
  {
    id: 'dining',
    title: '味蕾朝圣',
    enTitle: 'Gourmet Dining',
    description: '从雅安雅鱼到鲁朗石锅鸡，为您规划沿途地道美食地图，预订紧俏餐厅，品味舌尖上的川藏线。',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop', // Food
    features: ['特色藏餐', '卫生严选', '预约免排']
  },
  {
    id: 'butler',
    title: '贴身管家',
    enTitle: 'Private Butler',
    description: '为您配备专属旅行管家，从行李搬运、入住办理到紧急医疗响应，24小时在线解决旅途中的一切琐碎与意外。',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop', // Service
    features: ['全程陪同', '紧急医疗', '行李服务']
  }
];

export const culturalActivities: CulturalActivity[] = [
  {
    id: 'thangka',
    title: '唐卡绘制',
    enTitle: 'Thangka Painting',
    description: '在画师指导下，使用天然矿物颜料绘制唐卡。在一笔一画的勾勒中，体验藏族文化的庄重与信仰的力量。',
    image: 'https://qcloud.dpfile.com/pc/yW8t3BTGBecx98d3DKape2EZZ8glffsTBxkNOPztNCEP0jFeg7YUHhPm-xwln_3IY0q73sB2DyQcgmKUxZFQtw.jpg', // Art texture
    tags: ['非遗传承', '静心', '拉萨/吾屯']
  },
  {
    id: 'incense',
    title: '藏香手作',
    enTitle: 'Xizang Incense DIY',
    description: '探访尼木县或敏珠林寺，学习研磨藏药与柏木，亲手制作专属藏香，感受来自雪域的天然香氛与疗愈气息。',
    image: 'https://qcloud.dpfile.com/pc/q222ZayARpSSb6PuA4lmVqt-tPlG7VoyC4hatEE6rm6ddsqsSsc-Nlpxeueo9Ou6.jpg', // Incense/Smoke
    tags: ['药香同源', '尼木三绝', '嗅觉疗愈']
  },
  {
    id: 'pottery',
    title: '黑陶/藏纸',
    enTitle: 'Pottery & Paper',
    description: '体验已有千年历史的藏族黑陶烧制或狼毒草造纸技艺，触摸泥土与植物的温度，制作独一无二的旅行纪念品。',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop', // Pottery/Craft
    tags: ['指尖艺术', '传统工艺', '匠心']
  }
];

export const travelRoutes: TravelRoute[] = [
  {
    id: '318',
    name: 'G318 此生必驾',
    description: '中国人的景观大道。从天府之国成都出发，翻越折多山，穿越理塘草原，途径林芝桃花源，最终抵达拉萨。',
    stops: ['成都熊猫谷', '雅安', '泸定', '康定', '新都桥', '理塘', '巴塘', '林芝', '拉萨'],
    distance: '约2100公里',
    duration: '建议8-10天',
    image: 'https://images.unsplash.com/photo-1542384594-c81b9979b9b4?q=80&w=800' // Winding mountain road
  },
  {
    id: '317',
    name: 'G317 人文秘境',
    description: '更纯粹的藏文化走廊。深入色达、德格印经院，探访更原始的寺庙与村落，适合深度人文爱好者。',
    stops: ['成都熊猫谷', '汶川', '马尔康', '色达', '甘孜', '德格', '昌都', '那曲', '拉萨'],
    distance: '约2400公里',
    duration: '建议10-12天',
    image: 'https://images.unsplash.com/photo-1589809983351-149ee602b9e6?q=80&w=800' // Red houses/Monastery
  }
];