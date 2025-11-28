
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
          name: '5寸 FPV 竞速/花飞',
          description: '极致灵动，专为高速穿梭与花式飞行设计。',
          image: '/images/fpv-5-1.jpg', // 请上传: public/images/fpv-5-1.jpg
          specs: ['轴距: 225mm', '续航: 5-8min', '极速: 180km/h'],
          details: {
            intro: '专为极限操控打造的5寸全能平台。采用高强度碳纤维机身，完美平衡重量与刚性。无论是赛道竞速还是废墟穿梭，都能提供行云流水般的飞行体验。支持模拟/数字高清图传，捕捉每一个惊心动魄的瞬间。',
            video: '/videos/fpv-5-demo.mp4', // 请上传: public/videos/fpv-5-demo.mp4
            images: [
              '/images/fpv-5-1.jpg',
              '/images/fpv-5-2.jpg',
              '/images/fpv-5-3.jpg'
            ],
            features: [
              { title: '最大速度', value: '180 km/h' },
              { title: '推重比', value: '12:1' },
              { title: '典型续航', value: '5-8 min' },
              { title: '图传延迟', value: '<28 ms' },
            ],
            sections: [
              {
                title: '动力系统',
                specs: [
                  { label: '电机', value: '2207 / 2306 无刷电机' },
                  { label: '电调', value: '45A/60A 4合1 ESC' },
                  { label: '螺旋桨', value: '5143 / 5146 三叶桨' },
                  { label: '电池支持', value: '6S 1100-1300mAh' }
                ]
              },
              {
                title: '电子设备',
                specs: [
                  { label: '飞控', value: 'F722 / F405' },
                  { label: '图传', value: 'DJI O3 / Analog 800mW' },
                  { label: '接收机', value: 'ELRS 2.4G / 915MHz' },
                  { label: '摄像头', value: '120fps 高帧率镜头' }
                ]
              }
            ]
          }
        },
        {
          id: 'fpv-7',
          name: '7寸 FPV 远航',
          description: '兼顾速度与载重，适合中远距离山岳飞行。',
          image: '/images/fpv-7-1.jpg', // 请上传: public/images/fpv-7-1.jpg
          specs: ['轴距: 315mm', '续航: 15-20min', '最大载重: 1.5kg'],
          details: {
            intro: '为远方而生。7寸机架提供了更充裕的电池空间与更高效的升力特性，是山岳冲浪与长距离追拍的理想选择。在保持灵活性的同时，大幅提升了抗风性能与续航能力。',
            video: '/videos/fpv-7-demo.mp4', // 请上传: public/videos/fpv-7-demo.mp4
            images: [
              '/images/fpv-7-1.jpg',
              '/images/fpv-7-2.jpg',
              '/images/fpv-7-3.jpg'
            ],
            features: [
              { title: '巡航速度', value: '90 km/h' },
              { title: '最大航程', value: '10 km+' },
              { title: '最大续航', value: '20 min' },
              { title: '载重能力', value: '1.5 kg' },
            ],
            sections: [
              {
                title: '机身参数',
                specs: [
                  { label: '轴距', value: '315mm (Deadcat布局)' },
                  { label: '机臂厚度', value: '6.0mm' },
                  { label: '推荐电池', value: '6S 3000-4000mAh Li-ion' },
                  { label: 'GPS', value: 'M10 高精度GPS (带罗盘)' }
                ]
              },
              {
                title: '动力配置',
                specs: [
                  { label: '电机', value: '2807 1300KV' },
                  { label: '螺旋桨', value: '7035 / 7040' },
                  { label: '电调', value: '60A BLHeli_32' },
                  { label: '挂载能力', value: 'GoPro 全系列 / Action' }
                ]
              }
            ]
          }
        },
        {
          id: 'fpv-11',
          name: '11寸 FPV 电影机',
          description: '专业影视航拍平台，支持电影机搭载。',
          image: '/images/fpv-11-1.jpg', // 请上传: public/images/fpv-11-1.jpg
          specs: ['轴距: 500mm', '有效载荷: 3kg', '抗风等级: 6级'],
          details: {
            intro: 'Cinelifter 级别的重型穿越机。专为搭载 RED Komodo、BMPCC 等小型电影机设计。X8 同轴八桨布局或大尺寸四轴布局，确保了在搭载昂贵摄影器材时的绝对安全与动力冗余。',
            video: '/videos/fpv-11-demo.mp4', 
            images: [
               '/images/fpv-11-1.jpg',
               '/images/fpv-11-2.jpg'
            ],
            features: [
              { title: '最大载重', value: '3.0 kg' },
              { title: '动力布局', value: 'X8 / Quad' },
              { title: '推荐挂载', value: 'RED Komodo' },
              { title: '最大速度', value: '140 km/h' },
            ],
            sections: [
               {
                 title: '核心规格',
                 specs: [
                   { label: '轴距', value: '500mm' },
                   { label: '结构', value: '加强型碳纤维 + 铝合金CNC' },
                   { label: '电机', value: '3115 / 3214 级无刷电机' },
                   { label: '电池', value: '6S/8S 5000mAh+' }
                 ]
               }
            ]
          }
        },
        {
          id: 'fpv-13',
          name: '13寸 工业 FPV',
          description: '工业级穿越机，专为特殊任务场景打造。',
          image: '/images/fpv-13-1.jpg',
          specs: ['轴距: 650mm', '双电池冗余', '全碳纤维机身'],
          details: {
            intro: '填补了灵活性与大载重之间的空白。13寸平台具备惊人的爆发力与稳定性，适用于复杂的工业运输、快速侦查或搭载特殊传感器进行高动态作业。',
            video: '/videos/fpv-13-demo.mp4',
            images: ['/images/fpv-13-1.jpg'],
            features: [
               { title: '最大起飞重量', value: '8 kg' },
               { title: '抗风能力', value: '7 级' },
               { title: '工作电压', value: '12S (2x6S)' },
               { title: '防护设计', value: '半封闭式塔舱' }
            ],
            sections: [
              {
                title: '配置详情',
                specs: [
                  { label: '轴距', value: '650mm' },
                  { label: '电机', value: '4214 / 5010' },
                  { label: '桨叶', value: '13寸碳纤维桨' },
                  { label: '电源管理', value: '双路冗余并联' }
                ]
              }
            ]
          }
        },
        {
          id: 'fpv-15',
          name: '15寸 重型 FPV',
          description: '极限怪兽，突破穿越机性能边界。',
          image: '/images/fpv-15-1.jpg',
          specs: ['轴距: 800mm', '最大起飞重量: 15kg', '定制动力系统'],
          details: {
            intro: '金成航空 FPV 系列的旗舰巨兽。15寸的巨大尺寸使其具备了接近传统多旋翼的载重能力，但依然保留了 FPV 的操控逻辑与飞行姿态。适合超重型影视挂载或特种投送任务。',
            video: '/videos/fpv-15-demo.mp4',
            images: ['/images/fpv-15-1.jpg'],
            features: [
               { title: '最大载重', value: '5-8 kg' },
               { title: '动力系统', value: '12S 高压' },
               { title: '极速', value: '120 km/h' },
               { title: '机臂管径', value: '30mm 碳管' }
            ],
            sections: [
              {
                title: '参数规格',
                specs: [
                  { label: '轴距', value: '800mm' },
                  { label: '电机', value: '6015 / 8008' },
                  { label: '电调', value: '200A 工业级 ESC' },
                  { label: '插头', value: 'AS150 / QS8 防打火' }
                ]
              }
            ]
          }
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
          image: '/images/l800-1.jpg',
          specs: ['滞空时间: 24h+', '照明范围: 3000㎡', '亮度: 20万流明', '防护: IP54'],
          details: {
            intro: '采用军工级碳纤维一体化成型工艺，相比市面上普通复合材料机身，强度提升40%，重量降低25%。在强风（≤12m/s）环境下仍能保持悬停稳定性，且具备IP54级防尘防水能力，适应雨雪、沙尘等复杂作业场景。',
            video: '/videos/l800-demo.mp4',
            pdf: '/pdfs/l800-specs.pdf', // PDF 下载路径配置
            images: [
              '/images/l800-1.jpg',
              '/images/l800-2.jpg',
              '/images/l800-3.jpg',
              '/images/l800-4.jpg',
              '/images/l800-top-detail.jpg',
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
          image: '/images/jade-rabbit-1.jpg', // 请上传: public/images/jade-rabbit-1.jpg
          specs: ['巡航速度: 90km/h', '航时: 120min', '翼展: 2.4m'],
          details: {
            intro: '集多旋翼的起降便利性与固定翼的长航时优势于一身。采用复合翼布局，全自动垂直起降，无需跑道，轻松应对复杂地形。高效率气动外形设计，实现超长续航与静音巡航。',
            video: '/videos/jade-rabbit-demo.mp4',
            images: ['/images/jade-rabbit-1.jpg', '/images/jade-rabbit-2.jpg'],
            features: [
              { title: '最大航时', value: '120 min' },
              { title: '任务载荷', value: '1.5 kg' },
              { title: '控制半径', value: '30 km' },
              { title: '起降方式', value: 'VTOL' },
            ],
            sections: [
              {
                title: '性能指标',
                specs: [
                  { label: '翼展', value: '2400mm' },
                  { label: '机身长度', value: '1150mm' },
                  { label: '最大起飞重量', value: '12.5 kg' },
                  { label: '巡航速度', value: '18-25 m/s' }
                ]
              },
              {
                title: '任务能力',
                specs: [
                  { label: '抗风能力', value: '6级 (起降4级)' },
                  { label: '升限', value: '4500m' },
                  { label: '环境温度', value: '-20℃ ~ 50℃' },
                  { label: '兼容吊舱', value: '可见光 / 红外 / 激光雷达' }
                ]
              }
            ]
          }
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
