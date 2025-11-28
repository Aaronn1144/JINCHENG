
import { MainCategory } from './types';

export const NAVIGATION_ITEMS = [
  { id: 'home', label: '首页' },
  { id: 'drones', label: '无人机' },
  { id: 'airframes', label: '机架' },
  { id: 'leasing', label: '租赁服务' },
  { id: 'contact', label: '联系我们' },
];

export const DRONE_DATA: MainCategory = {
  id: 'drones',
  title: '无人机系统',
  type: 'catalog',
  subCategories: [
    {
      id: 'fpv',
      title: '穿越机 FPV',
      products: [
        {
          id: 'fpv-5',
          name: '5寸 FPV ',
          description: '极致灵动，专为高速穿梭与花式飞行设计。',
          image: 'https://picsum.photos/id/452/800/600',
          specs: ['轴距: 225mm', '续航: 5-8min', '极速: 180km/h']
        },
        {
          id: 'fpv-7',
          name: '7寸 FPV ',
          description: '兼顾速度与载重，适合中远距离山岳飞行。',
          image: 'https://picsum.photos/id/453/800/600',
          specs: ['轴距: 315mm', '续航: 15-20min', '最大载重: 1.5kg']
        },
        {
          id: 'fpv-11',
          name: '11寸 FPV ',
          description: '专业平台，支持搭载。',
          image: 'https://picsum.photos/id/514/800/600',
          specs: ['轴距: 500mm', '有效载荷: 3kg', '抗风等级: 6级']
        },
        {
          id: 'fpv-13',
          name: '13寸  FPV',
          description: '工业级穿越机，专为特殊任务场景打造。',
          image: 'https://picsum.photos/id/600/800/600',
          specs: ['轴距: 650mm', '双电池冗余', '全碳纤维机身']
        },
        {
          id: 'fpv-15',
          name: '15寸  FPV',
          description: '极限怪兽，突破穿越机性能边界。',
          image: 'https://picsum.photos/id/439/800/600',
          specs: ['轴距: 800mm', '最大起飞重量: 15kg', '定制动力系统']
        },
      ]
    },
    {
      id: 'multi-rotor',
      title: '多旋翼',
      products: [
        {
          id: 'tethered-light',
          name: '应急系留照明无人机',
          description: '大功率空中照明解决方案，20万流明亮度。配备专用地面电源箱实现无限续航，包含系留线缆与智能收放系统，专为应急救援与夜间作业设计。',
          image: 'https://picsum.photos/id/464/800/600',
          specs: ['滞空时间: 24h+', '照明范围: 3000㎡', '亮度: 20万流明', '防护: IP54'],
          details: {
            intro: '采用军工级碳纤维一体化成型工艺，相比市面上普通复合材料机身，强度提升40%，重量降低25%。在强风（≤12m/s）环境下仍能保持悬停稳定性，且具备IP54级防尘防水能力，适应雨雪、沙尘等复杂作业场景。',
            video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            images: [
              'https://picsum.photos/id/464/1200/800', // Main shot
              'https://picsum.photos/id/452/1200/800', // Action shot
              'https://picsum.photos/id/203/1200/800', // Detail shot
              'https://picsum.photos/id/514/1200/800', // Night shot
            ],
            features: [
              { title: '最大亮度', value: '200,000 lm' },
              { title: '抗风等级', value: '≤12 m/s' },
              { title: '地面供电', value: '无限 续航' },
              { title: '载重能力', value: '5 KG' },
            ],
            sections: [
              {
                title: '飞机参数',
                description: '高性能碳纤维机身',
                specs: [
                  { label: '机架类型', value: '四轴 X 型' },
                  { label: '材质', value: '碳纤维材质' },
                  { label: '轴距', value: '950mm' },
                  { label: '桨叶', value: '23 寸桨叶' },
                  { label: '飞行参数', value: '默认距离 2000m / 高度 120m' },
                  { label: '载重能力', value: '载重 5KG' },
                  { label: '防护等级', value: 'IP54 (防雨雪沙尘)' },
                  { label: '定位精度', value: '0.5m' },
                  { label: '电池', value: '16000mAh' },
                ]
              },
              {
                title: '系留天空端',
                description: '宽电压自适应 + 智能能效管理',
                specs: [
                  { label: '尺寸', value: '103*53*50mm' },
                  { label: '重量', value: '380±10g' },
                  { label: '功率', value: '1500W Max' },
                  { label: '输入', value: '360-420Vdc' },
                  { label: '输出', value: '22.5-26.25Vdc' },
                  { label: '变比', value: '16:1 固定比' },
                  { label: '能量转化率', value: '92% (行业平均 85%)' },
                ]
              },
              {
                title: '系留地面端',
                description: '智能变频电源系统',
                specs: [
                  { label: '类型', value: '2kW 智能变频电源' },
                  { label: '输入', value: '220Vac (2.2KW, 10A)' },
                  { label: '输出', value: '0-420Vdc 电压可调' },
                  { label: '线长', value: '50m 6A Max' },
                  { label: '保护机制', value: '过压/过流/短路 三重防护' },
                ]
              },
              {
                title: 'L800 照明灯',
                description: 'COB集成光源 + 相变散热',
                specs: [
                  { label: '光通量', value: '20万流明' },
                  { label: '散热技术', value: '相变散热 + COB' },
                  { label: '重量', value: '200g' },
                  { label: '尺寸', value: '200*35*25mm' },
                  { label: '功率', value: '80W (满载150W)' },
                  { label: '寿命', value: '50000 小时' },
                  { label: '温控', value: '60℃起保护 / >85℃熄灭' },
                ]
              },
              {
                title: '系留线',
                description: '凯夫拉纤维编织内芯',
                specs: [
                  { label: '线长', value: '50 米' },
                  { label: '内芯材质', value: '凯夫拉纤维编织' },
                  { label: '外层材质', value: '耐候性聚氨酯' },
                  { label: '特性', value: '解决低温易脆/高温软化' },
                ]
              },
              {
                title: '遥控器',
                description: 'FreeRTOS系统 + LVGL界面',
                specs: [
                  { label: '通道', value: '16 通道 (3ms 响应)' },
                  { label: '屏幕', value: '2.8寸 LCD (320*240)' },
                  { label: '主频', value: '288MHz' },
                  { label: '交互', value: '2个VR旋钮 / 2个VR开关' },
                  { label: '回传', value: '内置数传 (电压/RSSI/位置)' },
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'fixed-wing',
      title: '固定翼',
      products: [],
      isEmpty: true
    },
    {
      id: 'vtol',
      title: '垂起固定翼',
      products: [
        {
          id: 'jade-rabbit',
          name: '玉兔 (Jade Rabbit)',
          description: '垂直起降，长航时巡检利器。像兔子一样灵动，像鹰一样翱翔。',
          image: 'https://picsum.photos/id/106/800/600',
          specs: ['巡航速度: 90km/h', '航时: 120min', '翼展: 2.4m']
        }
      ]
    }
  ]
};

export const AIRFRAME_DATA = {
  title: '高性能机架',
  description: '金成航空自主研发碳纤维机架，为行业应用提供坚实骨骼。',
  features: [
    { title: '航空级碳纤维', desc: '采用T700/T800高模量碳纤维，强度提升40%。' },
    { title: '模块化设计', desc: '快拆结构，便于运输与快速维护。' },
    { title: '气动优化', desc: '经风洞测试的气动外形，降低风阻，提升续航。' }
  ]
};

export const LEASING_DATA = {
  title: '租赁与服务',
  description: '无需重资产投入，即可享受顶尖的无人机技术服务。',
  services: [
    { title: '影视航拍', icon: 'camera', desc: '提供全套FPV及航拍设备与飞手服务。' },
    { title: '电力巡检', icon: 'zap', desc: '高压线路自动化巡检方案租赁。' },
    { title: '应急救援', icon: 'life-buoy', desc: '突发事件现场的照明与侦查支持。' },
    { title: '测绘建模', icon: 'map', desc: '高精度航测无人机及后处理服务。' },
  ]
};
