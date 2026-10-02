import { Project, PhotographyItem, MotionItem, ExperienceItem, EducationItem } from '../types';

export const projectsData: Project[] = [
  {
    id: 'moduble',
    title: 'MODUBLE',
    japaneseTitle: 'モデュブル — 幼児教育用モジュール家具',
    category: 'Product Design / Furniture',
    japaneseCategory: 'プロダクトデザイン / 家具',
    year: '2024',
    tagline: {
      en: 'Modular furniture system engineered for early childhood education environments.',
      ja: '幼児教育環境のために設計された、安全で可変性の高いモジュール家具システム。',
    },
    shortDescription: {
      en: 'A modular furniture concept designed for early childhood education environments, focusing on stable configurations and integrated toolless locking mechanisms.',
      ja: '幼児教育施設向けに設計されたモジュール家具。工具不要の直感的なロック構造と、成長や活動に応じた自由な空間再構成を可能にします。',
    },
    featured: true,
    gridSpan: 'full',
    disciplines: ['Industrial Design', 'Furniture Engineering', 'Human Ergonomics'],
    tools: ['Fusion 360', 'Keyshot', 'Physical Prototyping', 'CNC Routing'],
    caseStudy: {
      overview: {
        en: 'MODUBLE is an adaptive classroom furniture architecture created to address rapid space-shifting needs in modern preschool environments. Developed through extensive anthropometric research on children aged 3–6, it combines birch ply warmth with mechanical interlocking confidence.',
        ja: 'MODUBLEは、現代の幼児教育施設における急激なレイアウト変更ニーズに応える適応型家具システムです。3〜6歳の身体計測データに基づき、白樺合板のぬくもりと確実な嵌合構造を両立しました。',
      },
      problem: {
        en: 'Traditional preschool furniture is either rigidly heavy—preventing dynamic spatial adjustments for storytelling, group play, or quiet resting—or too lightweight, compromising safety and physical stability during energetic child activity.',
        ja: '従来の幼稚園・保育園向け家具は重すぎて活動（絵本の読み聞かせ、グループワーク、午睡）に合わせた柔軟な配置換えが困難か、逆に軽すぎて子供たちの活発な動きに対して安全性が不足していました。',
      },
      research: {
        en: 'Field observations across early learning centers in West Java revealed educators spend over 40 minutes daily rearranging tables and dividing screens. Ergonomic measurements established a universal primary module height of 460mm with radiused tactile edges (r=12mm) to prevent pinch hazards.',
        ja: '教育現場での調査により、保育士が毎日40分以上を机の移動やパーテーション設置に費やしていることが判明。人間工学的計測に基づき、主モジュールの高さを460mmに設定し、挟み込みを防ぐ12mmの安全曲面加工を施しました。',
      },
      concept: {
        en: 'The core concept utilizes a patented dual-axis wooden dovetail key that enables two modules to lock securely with a single intuitive slide gesture, requiring zero metallic fasteners or adult tools.',
        ja: '中心概念は、金具や専用工具を使わずにスライド動作ひとつで2つのモジュールを強固に固定できる二軸木製ダブテールキー機構です。',
      },
      development: {
        en: 'Over 14 iterations of CNC-routed 18mm Russian Birch plywood were stress-tested. FEA structural simulation in Fusion 360 validated load capacities up to 120kg per joint while maintaining a module tare weight under 4.8kg for educator ease.',
        ja: 'Fusion 360での有限要素法（FEA）応力解析と18mm白樺合板のCNC試作を14回繰り返し、1ジョイントあたり120kgの耐荷重を確保しながら、保育士が片手で持ち運べる4.8kg以下の本体重量を実現しました。',
      },
      finalDesign: {
        en: 'The resolved MODUBLE kit consists of three interlocking components: Primary Bench-Table, Acoustic Low Screen, and Corner Link. It effortlessly morphs from collaborative ring clusters to partitioned individual discovery pods in under 90 seconds.',
        ja: '完成したMODUBLEキットは、ベンチ兼用テーブル、吸音ローパーテーション、コーナーリンクの3つの基幹ユニットで構成。わずか90秒で円形グループ学習から集中スペースへと変形します。',
      },
      specifications: {
        material: {
          en: '18mm FSC Birch Plywood, Plant-based Hardwax Oil, Recycled Felt',
          ja: '18mm FSC認証バーチ合板、植物性ハードワックスオイル、再生フェルト',
        },
        dimensions: 'Module: 600mm (W) × 420mm (D) × 460mm (H)',
        software: 'Autodesk Fusion 360, Blender, KeyShot Pro',
        manufacturing: {
          en: '5-Axis CNC Milling, Hand-sanded Chamfer, Mortise-Tenon Joints',
          ja: '5軸CNC切削、手仕上げ面取り、ほぞ組み',
        },
        status: {
          en: 'Degree Capstone Distinction / Prototype Validated',
          ja: '学士卒業制作優秀賞 / 実寸プロトタイプ検証済',
        },
      },
      highlights: {
        en: [
          'Toolless intuitive slide-lock mechanism rated to 120kg capacity',
          '3-minute spatial reconfiguration by a single educator',
          'Tactile 12mm chamfer edges exceeding international child safety criteria',
          'Flat-pack logistical efficiency reducing transportation carbon by 38%',
        ],
        ja: [
          '耐荷重120kgを誇る工具不要のスライドロック機構',
          '保育士1名でも3分以内で完了する教室レイアウト転換',
          '国際幼児安全基準を満たす12mmの丁寧なラウンドエッジ加工',
          '輸送時CO2排出量を38%削減するフラットパック設計',
        ],
      },
      diagramType: 'moduble',
    },
  },
  {
    id: 'l-work-desk',
    title: 'L-WORK DESK',
    japaneseTitle: 'L-ワーク デスク — 制作と造形のためのワークステーション',
    category: 'Furniture / Personal Project',
    japaneseCategory: '家具デザイン / パーソナルプロジェクト',
    year: '2024',
    tagline: {
      en: 'A dedicated workspace designed to streamline digital modeling and physical prototyping.',
      ja: '3Dデジタルモデリングと物理試作のシームレスな往復を可能にする作業机。',
    },
    shortDescription: {
      en: 'A personal workspace designed to streamline the workflow between digital modeling and physical prototyping with integrated tool docks and cable architecture.',
      ja: '3D CAD画面と物理的な手作業試作を素早く切り替えるデザイナーのために設計されたパーソナルデスク。電源・配線・手工具の完全な統合を追求しました。',
    },
    featured: true,
    gridSpan: 'col-2',
    disciplines: ['Workspace Design', 'Steel Fabrication', 'Cable Ergonomics'],
    tools: ['Fusion 360', 'Blender', 'TIG Welding', 'Hardwood Finishing'],
    caseStudy: {
      overview: {
        en: 'The L-WORK DESK addresses the cognitive and physical friction creative technologists experience when oscillating between high-precision CAD modeling and hands-on material mockups (clay, foam, 3D print finishing).',
        ja: 'L-WORK DESKは、高精度の3D CAD作業と手作業による素材モックアップ（クレイ、フォーム、3Dプリント後加工）を頻繁に行き来するデザイナーの作業動線を徹底的に分析して生まれたデスクです。',
      },
      problem: {
        en: 'Standard consumer desks fail during physical fabrication: dust enters cable troughs, cutting mats slide off, and sensitive digital displays are placed at risk of tool impacts.',
        ja: '一般的なオフィスデスクでは、物理試作時に削り粉が配線孔に入り込み、カッターマットがずれ、鋭利な工具で液晶ディスプレイを傷つけるリスクが存在していました。',
      },
      research: {
        en: 'Analyzing personal studio hours revealed a 60/40 split between screen drafting and tactile prototyping. An asymmetric layout provides a protected digital sanctuary zone alongside a sacrificial, easily replaceable cutting/working surface.',
        ja: '自身の作業ログから、画面操作60%・物理造形40%の配分を特定。繊細な電子機器を保護する一段高い「デジタル領域」と、交換可能なカッティングマットを組み込んだ「クラフト領域」の二層構造を着想しました。',
      },
      concept: {
        en: 'An asymmetric dual-plane architecture: a matte Japanese black steel structural chassis supporting a solid Ash hardwood plane on the left and a quick-clean phenolic resin work surface on the right with flush-mounted magnetic tool rails.',
        ja: '左右非対称のハイブリッド設計。マットブラックの曲げスチールフレームに、左側のホワイトアッシュ天然木天板と、右側の耐摩耗フェノール樹脂作業面、埋め込み式マグネット工具レールを統合しました。',
      },
      development: {
        en: 'Engineered custom extruded aluminum cable chases with integrated dust gaskets. Structural rigidity testing ensured under 0.8mm deflection under dynamic hand-sanding load.',
        ja: '防塵ガスケット付きの特注アルミ配線ダクトを設計。激しいやすりがけ作業でも天板のたわみが0.8mm以下に収まる高剛性フレーム構造を開発しました。',
      },
      finalDesign: {
        en: 'A disciplined, quiet furniture piece embodying Japanese industrial minimalism. Hidden underneath is an integrated 8-plug power distribution bus with USB-C PD 100W line drop and quick-release vacuum hose attachment.',
        ja: '日本の工業的ミニマリズムを体現した端正な佇まい。天板下には100W給電対応の配線ダクトと小型集塵ホースのアタッチメントを内蔵しています。',
      },
      specifications: {
        material: {
          en: 'Solid Ash Hardwood, Laser-cut Steel Plate (Matte Powdercoat), Phenolic Mat',
          ja: 'アッシュ無垢材、レーザーカットスチール（マット粉体塗装）、フェノール樹脂マット',
        },
        dimensions: '1600mm (L) × 780mm (W) × 740mm (H)',
        software: 'Autodesk Fusion 360, DaVinci Resolve (process doc)',
        manufacturing: {
          en: 'Laser Cutting, CNC Milling, Matte Powder Coating, Hand Oiling',
          ja: 'レーザー切断、CNC木工切削、粉体焼付塗装、オイル仕上げ',
        },
        status: {
          en: 'Studio Prototype in Active Daily Production',
          ja: '実稼働スタジオプロトタイプ',
        },
      },
      highlights: {
        en: [
          'Bi-zonal work split protecting digital screens from dust and tool impacts',
          'Recessed magnetic tool ledge for calipers, scalpel, and micrometers',
          'Full-width dust-sealed cable raceway with 100W integrated power delivery',
          'Modular replaceable cutting surface extending furniture lifespan indefinitely',
        ],
        ja: [
          '粉塵や衝撃から精密機器を守るゾーン分離設計',
          'ノギスやデザインナイフを整列保持する埋め込みマグネットレール',
          '防塵シャッター付きフルレングス配線ダクト（100W給電対応）',
          '長年の使用に対応する交換可能なワークトップ構造',
        ],
      },
      diagramType: 'lwork',
    },
  },
  {
    id: 'renewa',
    title: 'RENEWA',
    japaneseTitle: 'リニューワ — 廃棄プラスチックの循環型プロダクトシステム',
    category: 'Sustainable Design / Funded Project',
    japaneseCategory: 'サステナブルデザイン / 助成金採択プロジェクト',
    year: '2024',
    tagline: {
      en: 'A recycling initiative transforming post-consumer plastic waste into high-value functional objects.',
      ja: '生活廃棄プラスチックを高付加価値なインテリアプロダクトへ転生させる循環デザイン。',
    },
    shortDescription: {
      en: 'A recycling initiative focused on transforming waste into valuable resources and encouraging sustainable environmental practices through thoughtful consumer products.',
      ja: '都市から出る廃棄プラスチックを収集・粉砕・圧縮成型し、天然大理石のような表情を持つインテリアプロダクトを生み出す地域循環型プロジェクト。',
    },
    featured: true,
    gridSpan: 'col-2',
    disciplines: ['Circular Economy', 'Material Research', 'Compression Molding'],
    tools: ['Blender', 'Fusion 360', 'Custom Hydraulic Press', 'Color Grading'],
    caseStudy: {
      overview: {
        en: 'RENEWA began as an institutional funded project to redirect HDPE and PP municipal waste into bespoke architectural accessories, pairing decentralized manufacturing with minimalist Japanese product aesthetics.',
        ja: 'RENEWAは、公的助成を受けて発足した循環型デザインプロジェクトです。身の回りのHDPE・PP廃プラスチックを地域内で再資源化し、日本のミニマルな美意識を取り入れた生活用品へと昇華させました。',
      },
      problem: {
        en: 'Over 80% of sorted local plastic packaging ends up in open landfills due to lack of high-value secondary markets that incentivize careful consumer collection.',
        ja: '分別されたプラスチック包装材の80%以上が、高付加価値な再利用先の欠如により最終処分場へと流出していました。回収意欲を高める魅力的な製品開発が急務でした。',
      },
      research: {
        en: 'Tested melt flow indices and thermal degradation temperatures of collected bottle caps across 80 thermal batch cycles. Developed an aggregate color sorting protocol yielding marble-like monochrome stone finishes.',
        ja: '回収されたペットボトルキャップ等の熱流動性と分解温度を80回の焼成テストで検証。色相分類基準を確立し、人工大理石のような上質なモノトーンテクスチャを再現することに成功しました。',
      },
      concept: {
        en: '“From disposable debris to permanent heirloom.” The tactile feeling mimics polished volcanic stone rather than cheap plastic, establishing emotional longevity.',
        ja: '「使い捨てのゴミから、愛着を持って使い続ける器へ」。安価なプラスチック感を完全に排除し、研ぎ出された火山岩や陶器のような重厚な触感を追求しました。',
      },
      development: {
        en: 'Built an open-source heating mold with PID thermal controllers, enabling local craftspeople to reproduce the modular trays, pen rests, and acoustic diffusers with 0.1mm dimensional precision.',
        ja: 'PID温調器を備えた独自の熱圧縮金型を設計。地域の職人が0.1mm精度のトレイ、ペントレイ、吸音タイルを少量分散生産できるオープンな製造プロセスを確立しました。',
      },
      finalDesign: {
        en: 'A coordinated desktop vessel collection with subtle organic terrazzo patterns. Each piece is stamped with the exact GPS coordinates of the plastic collection depot.',
        ja: '静謐なデスクトップオーガナイザーコレクション。それぞれのプロダクト底面には、プラスチックが回収された地域のGPS座標が刻印されています。',
      },
      specifications: {
        material: {
          en: '100% Post-Consumer High-Density Polyethylene (HDPE), Zero Resin Binders',
          ja: '100% 回収高密度ポリエチレン（HDPE）、無添加・接着剤不使用',
        },
        dimensions: 'Tray Collection: 180mm to 320mm Modular Footprint',
        software: 'Fusion 360, Blender (Micro-texture simulation)',
        manufacturing: {
          en: 'Precision Shredding, Color Sorting, Compression Heat Molding, Lathe Polish',
          ja: '精密粉砕、色彩分別、熱圧縮成型、旋盤仕上げ研磨',
        },
        status: {
          en: 'Funded Research Grant Completed / Exhibited 2024',
          ja: '公的助成金プロジェクト完了 / 2024年企画展出品',
        },
      },
      highlights: {
        en: [
          'Diverted over 450kg of municipal plastic waste during pilot runs',
          'Zero virgin resins or toxic chemical hardeners utilized',
          'Stone-like surface texture achieved purely through controlled thermal cooling curves',
          'Open-source mold tooling blueprints shared with local makerspaces',
        ],
        ja: [
          '実証実験期間中に450kg以上の地域プラスチック廃棄物を転換',
          'バージン樹脂や有害硬化剤を一切使用しない完全単一素材設計',
          '冷却温度の厳密な制御により陶器のようなマットな質感を実現',
          '地域のメイカースペースに向けて金型設計図をオープンソース公開',
        ],
      },
      diagramType: 'renewa',
    },
  },
  {
    id: 'lens-and-lines',
    title: 'LENS&LINES',
    japaneseTitle: 'レンズ＆ラインズ — ビジュアルアイデンティティと映像制作',
    category: 'Creative Direction / Studio Identity',
    japaneseCategory: 'クリエイティブディレクション / スタジオアイデンティティ',
    year: '2024 — Present',
    tagline: {
      en: 'Co-founded creative multidisciplinary studio specializing in architectural documentation and brand films.',
      ja: '建築記録・ブランド映像・視覚設計を手がけるクリエイティブコレクティブ。',
    },
    shortDescription: {
      en: 'A collaborative multidisciplinary studio founded to explore the intersection of physical objects, spatial architecture, and cinematic storytelling.',
      ja: '空間、プロダクト、そして人の佇まいを静謐な映像とグラフィックで記録・発信するクリエイティブユニットの共同設立と総合視覚設計。',
    },
    featured: false,
    gridSpan: 'standard',
    disciplines: ['Brand Identity', 'Cinematography', 'Editorial Design'],
    tools: ['Adobe Illustrator', 'InDesign', 'DaVinci Resolve', 'Leica Systems'],
    caseStudy: {
      overview: {
        en: 'Lens&Lines represents Ari’s collaborative studio practice founded in 2024. The identity explores the delicate balance between the optical lens (organic, fluid, observant) and the grid line (geometric, precise, structural).',
        ja: 'Lens&Linesは2024年に共同設立されたクリエイティブユニットです。光学レンズ（観察、光、有機性）とグリッド線（構造、幾何学、精密性）の調和をテーマに掲げています。',
      },
      problem: {
        en: 'Most creative agencies lean either into overly commercial corporate polish or unstructured artistic chaos. Lens&Lines required a visual system reflecting architectural discipline.',
        ja: '多くの映像・デザインスタジオは商業的な過剰装飾か、あるいは秩序のない前衛表現に偏りがちです。建築的な厳密さと人間味を両立するアイデンティティが必要でした。',
      },
      research: {
        en: 'Studied Tokyo editorial journals, Swiss modernist poster typography, and technical drafting standards (JIS/ISO) to build a unified design language.',
        ja: '東京のカルチャー誌、スイス派グラフィックデザイン、日本産業規格（JIS）の製図記号を研究し、普遍的で静かなタイポグラフィ体系を構築しました。',
      },
      concept: {
        en: 'A flexible monochrome mark based on a 35mm optical viewfinder frame intersected by a single golden-ratio baseline.',
        ja: '35mmカメラのファインダーフレームと黄金比グリッドが交差する、ミニマルなモノクロームシンボルをデザイン。',
      },
      development: {
        en: 'Constructed responsive typography scales, presentation decks, camera slate tags, and custom video intro title sequences that settle gracefully in under 1.2 seconds.',
        ja: '名刺、プレゼン資料、撮影用カチンコ、そして映像冒頭で静かにフェードする1.2秒のモーショングラフィックスをトータルで設計しました。',
      },
      finalDesign: {
        en: 'A durable, confident studio identity that commands attention on large print broadsheets as well as high-resolution cinema monitors.',
        ja: '大判ポスターから4Kシネマモニターまで、あらゆる媒体で品格を保つ洗練されたスタジオアイデンティティが完成しました。',
      },
      specifications: {
        material: {
          en: 'Uncoated Cotton Paper 350gsm, Debossed Black Foil, 4K Master Video Assets',
          ja: '無塗工コットン紙 350gsm、空押し黒箔、4Kマスター映像資産',
        },
        dimensions: 'Complete Brand System across Print & Digital Cinema',
        software: 'Adobe Creative Suite, DaVinci Resolve Studio',
        manufacturing: {
          en: 'Letterpress Printing, Custom Motion Title Rendering',
          ja: '活版印刷、カスタムモーショングラフィックス生成',
        },
        status: {
          en: 'Active Creative Entity & Client Practice',
          ja: '現行稼働スタジオ',
        },
      },
      highlights: {
        en: [
          'Comprehensive visual guidelines adopted across 12 commercial productions',
          'Bilingual editorial typesetting system tuned for Japanese and Latin typography',
          'Bespoke cinematic opening title bumper deployed on commercial documentaries',
        ],
        ja: [
          '12件の商業映像・ブランディング案件で採用された総合ガイドライン',
          '日本語とラテン文字の美しい調和を実現した組版ルール',
          '長編ドキュメンタリーに使用されるオリジナルのシネマタイトル',
        ],
      },
      diagramType: 'lensandlines',
    },
  },
];

export const photographyData: PhotographyItem[] = [
  {
    id: 'photo-1',
    title: { en: 'Meiji Jingu Morning Solitude', ja: '明治神宮 — 朝の静寂' },
    category: 'tokyo',
    location: { en: 'Meiji Jingu, Shibuya, Tokyo', ja: '東京都渋谷区代々木神園町' },
    year: '2025',
    aspect: 'portrait',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '35mm F1.4 GM',
      shutter: '1/320s',
      aperture: 'f/2.0',
      iso: '100',
    },
    observation: {
      en: 'Dappled morning light piercing through towering sacred cedar canopies. A profound moment of stillness just meters from the bustling energy of Harajuku.',
      ja: '原宿の喧騒からわずか数歩。大鳥居を抜けた先、百年を超える原生林に差し込む朝の光。都市の真ん中に現れる静寂の構造。',
    },
    visualType: 'meiji-jingu',
  },
  {
    id: 'photo-2',
    title: { en: 'Reflections on Shibuya Crossing', ja: '雨の渋谷スクランブル' },
    category: 'street',
    location: { en: 'Shibuya Crossing, Tokyo', ja: '東京都渋谷区道玄坂' },
    year: '2025',
    aspect: 'landscape',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '50mm F1.2 GM',
      shutter: '1/160s',
      aperture: 'f/1.8',
      iso: '800',
    },
    observation: {
      en: 'Rain-slicked asphalt transforming the world’s busiest pedestrian crossing into a quiet mirror of neon and moving umbrellas.',
      ja: '雨で濡れたアスファルトが巨大な水鏡となり、街頭ビジョンと無数の傘を映し出す。規則正しく波打つ人の流れ。',
    },
    visualType: 'shibuya-rain',
  },
  {
    id: 'photo-3',
    title: { en: 'Omotesando Structural Cadence', ja: '表参道 — 建築の幾何学' },
    category: 'architecture',
    location: { en: 'Omotesando, Minato, Tokyo', ja: '東京都港区南青山' },
    year: '2025',
    aspect: 'portrait',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '24-70mm F2.8 GM II',
      shutter: '1/500s',
      aperture: 'f/5.6',
      iso: '125',
    },
    observation: {
      en: 'Sharp geometric shadows cast across post-tensioned architectural concrete. Observing the precision of Japanese structural engineering.',
      ja: '打ち放しコンクリートとガラスに落ちる鋭角な影。東京の現代建築が持つミリ単位の緊張感と美しさの記録。',
    },
    visualType: 'omotesando-arch',
  },
  {
    id: 'photo-4',
    title: { en: 'Koenji Awa Odori Motion', ja: '高円寺阿波おどり — 躍動の軌跡' },
    category: 'events',
    location: { en: 'Koenji, Suginami, Tokyo', ja: '東京都杉並区高円寺' },
    year: '2024',
    aspect: 'landscape',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '85mm F1.4 DG DN',
      shutter: '1/640s',
      aperture: 'f/1.6',
      iso: '1600',
    },
    observation: {
      en: 'The kinetic swirl of indigo yukata fabric and woven bamboo amigasa hats amidst the rhythmic roar of taiko drums and shamisen.',
      ja: '夜の商店街に響く鉦と太鼓。藍色の浴衣と編笠が描く放物線。何世代にもわたって受け継がれる熱気と身体性。',
    },
    visualType: 'awa-odori',
  },
  {
    id: 'photo-5',
    title: { en: 'Idol Studio Monochrome Study', ja: 'スタジオポートレート — 陰影の探求' },
    category: 'studio',
    location: { en: 'Creative Studio, Shibuya', ja: '東京都渋谷区 スタジオ' },
    year: '2024',
    aspect: 'portrait',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '85mm F1.4 GM',
      shutter: '1/200s',
      aperture: 'f/2.8',
      iso: '100',
    },
    observation: {
      en: 'Controlled single-source beauty dish study exploring expression, gaze, and pure tonal gradient on black-and-white portraiture.',
      ja: '単一光源による光と影のグラデーション研究。表情の一瞬の揺らぎと被写体の内面を引き出すスタジオ撮影。',
    },
    visualType: 'studio-portrait',
  },
  {
    id: 'photo-6',
    title: { en: 'Stage Light and Atmospheric Haze', ja: 'ライブステージ — 光芒と熱狂' },
    category: 'concerts',
    location: { en: 'Live Music Hall, Roppongi', ja: '東京都港区六本木' },
    year: '2024',
    aspect: 'landscape',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '70-200mm F2.8 GM OSS II',
      shutter: '1/400s',
      aperture: 'f/2.8',
      iso: '3200',
    },
    observation: {
      en: 'Dramatic atmospheric haze cutting through high-output tungsten stage spots, capturing performer silhouettes in peak energy.',
      ja: 'スモークを切り裂くシャープなピンスポットライト。ミュージシャンのシルエットと観客の熱気が交差する瞬間。',
    },
    visualType: 'concert-stage',
  },
  {
    id: 'photo-7',
    title: { en: 'Kamakura Coastal Engagement', ja: '鎌倉海岸 — 自然光のポートレート' },
    category: 'people',
    location: { en: 'Shichirigahama, Kamakura', ja: '神奈川県鎌倉市七里ヶ浜' },
    year: '2025',
    aspect: 'portrait',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '50mm F1.2 GM',
      shutter: '1/1250s',
      aperture: 'f/1.4',
      iso: '100',
    },
    observation: {
      en: 'Gentle Pacific Ocean breezes and golden dusk illumination across the volcanic sand dunes of Kamakura.',
      ja: '夕暮れの七里ヶ浜。柔らかな海風と西日に包まれた、作為のない自然な笑顔と二人の距離感。',
    },
    visualType: 'kamakura-coast',
  },
  {
    id: 'photo-8',
    title: { en: 'Omoide Yokocho Lanterns at 1 AM', ja: '新宿思い出横丁 — 深夜の赤提灯' },
    category: 'street',
    location: { en: 'Shinjuku, Tokyo', ja: '東京都新宿区西新宿' },
    year: '2025',
    aspect: 'portrait',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: '35mm F1.4 GM',
      shutter: '1/100s',
      aperture: 'f/1.4',
      iso: '1250',
    },
    observation: {
      en: 'Narrow alleyways steeped in smoke, steam, and amber paper lantern warmth beneath the towering modern skyscrapers of Shinjuku.',
      ja: '超高層ビル群の足元に息づく昭和の路地。炭火の煙、湯気、そして夜更けの赤提灯が灯す温もり。',
    },
    visualType: 'shinjuku-alley',
  },
];

export const motionData: MotionItem[] = [
  {
    id: 'motion-1',
    title: {
      en: 'Kotabaru–Parahyangan: Space, Flow & Heritage',
      ja: 'コタバル・パラヒャンガン：都市空間と自然の共生',
    },
    category: 'DOCUMENTATION',
    duration: '04:18',
    year: '2024',
    clientContext: {
      en: 'Architectural & Cultural Community Documentation',
      ja: '都市環境・地域共生ドキュメンタリー映像',
    },
    synopsis: {
      en: 'A cinematic study capturing the architectural synergy between modern tropical design, pedestrian urban parkways, and native Sundanese topography in West Java.',
      ja: '西ジャワの豊かな自然地形と共鳴するトロピカルモダン建築、緑道、そしてそこに暮らす人々の呼吸を捉えたショートフィルム。',
    },
    role: {
      en: 'Cinematographer & Colorist',
      ja: '撮影監督・グレーディング',
    },
    motionVisualType: 'kotabaru',
  },
  {
    id: 'motion-2',
    title: {
      en: 'World Cleanup Day: Collective Momentum',
      ja: 'ワールドクリーンアップデー：行動の連鎖',
    },
    category: 'AFTER MOVIE',
    duration: '02:45',
    year: '2024',
    clientContext: {
      en: 'Global Environmental Action Initiative',
      ja: '世界規模環境アクション 公式アフタームービー',
    },
    synopsis: {
      en: 'High-energy, human-centered event aftermovie highlighting 1,200 volunteers revitalizing urban riverbanks and sorting collected recyclables.',
      ja: '都市河川の清掃とリサイクル分別に集まった1,200名のボランティアの熱量と笑顔を、躍動感ある編集と音楽でまとめた記録映像。',
    },
    role: {
      en: 'Lead Camera Operator & Editor',
      ja: 'チーフカメラ・編集',
    },
    motionVisualType: 'cleanup',
  },
  {
    id: 'motion-3',
    title: {
      en: 'Tokyo Nocturne: Shibuya & Shinjuku 35mm',
      ja: '東京ノクターン：35mmで綴る夜の東京',
    },
    category: 'DRONE',
    duration: '03:12',
    year: '2025',
    clientContext: {
      en: 'Personal Visual Exploration & Cinematography Archive',
      ja: '自主制作シネマティック映像アーカイブ',
    },
    synopsis: {
      en: 'A quiet visual meditation on midnight transit lines, rain reflections, and elevated skyline perspectives across the metropolitan core.',
      ja: '深夜の山手線、雨に濡れる高架下、そしてビル群の隙間を滑空するような視点で切り取った、静謐な東京の夜景詩。',
    },
    role: {
      en: 'Director, Aerial Pilot & Sound Design',
      ja: '監督・ドローン操縦・音響デザイン',
    },
    motionVisualType: 'tokyo-nocturne',
  },
  {
    id: 'motion-4',
    title: {
      en: 'Lens&Lines: The Architecture of Vision',
      ja: 'レンズ＆ラインズ：視覚の構造体',
    },
    category: 'EVENT',
    duration: '01:52',
    year: '2024',
    clientContext: {
      en: 'Studio Foundation Film & Visual Manifesto',
      ja: 'スタジオ設立マニフェスト映像',
    },
    synopsis: {
      en: 'An experimental showcase exploring the intersection of tactile industrial materials, camera optics, and precise graphic layout principles.',
      ja: 'プロダクトデザインの質感、光学ガラスの光、そしてグリッドシステムの規律が交錯するスタジオコンセプト映像。',
    },
    role: {
      en: 'Creative Director & Producer',
      ja: 'クリエイティブディレクター',
    },
    motionVisualType: 'lenslines-manifesto',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: { en: 'Co-Founder & Creative Team', ja: '共同設立者 / クリエイティブディレクター' },
    company: { en: 'Lens&Lines', ja: 'Lens&Lines' },
    period: '2024 — Present',
    location: 'Bandung / Tokyo',
    description: {
      en: 'Leading visual direction, identity design, and cinematography for architectural documentaries and creative brands.',
      ja: '建築ドキュメンタリーおよびクリエイティブブランドのための視覚ディレクション、映像制作、アイデンティティデザインを統括。',
    },
  },
  {
    role: { en: 'Co-Founder & Production Team', ja: '共同設立者 / プロダクションチーム' },
    company: { en: 'Renewa', ja: 'Renewa' },
    period: '2024',
    location: 'Bandung, Indonesia',
    description: {
      en: 'Co-developed circular product workflows transforming municipal plastic waste into modular high-end homeware accessories.',
      ja: '廃棄プラスチックを高級インテリア製品へ再資源化する循環型製造プロセスおよび製品群の共同開発。',
    },
  },
  {
    role: { en: 'Pre-Production Intern', ja: 'プリプロダクション インターン' },
    company: { en: 'Beenefit', ja: 'Beenefit' },
    period: '2023',
    location: 'Bandung, Indonesia',
    description: {
      en: 'Conducted CAD 3D modeling, technical drafting, and physical mockup assembly for consumer product lines.',
      ja: 'コンシューマー向け製品のCAD 3Dモデリング、設計製図、実寸モックアップの検証および試作サポート。',
    },
  },
  {
    role: { en: 'Documentation Team', ja: '記録映像チーム' },
    company: {
      en: 'Graduation SMK Prakarya Internasional Bandung',
      ja: 'SMK Prakarya Internasional Bandung 卒業式典',
    },
    period: '2022',
    location: 'Bandung, Indonesia',
    description: {
      en: 'Coordinated multicam video capture, live stage photography, and post-production highlight reels for 800+ attendees.',
      ja: '800名以上が参加する大型式典におけるマルチカメラ撮影、舞台スチール記録、公式ハイライト映像の制作。',
    },
  },
  {
    role: { en: 'Creative Team', ja: 'クリエイティブチーム' },
    company: { en: 'CV. Sumber Inti Prima', ja: 'CV. Sumber Inti Prima' },
    period: '2020',
    location: 'Bandung, Indonesia',
    description: {
      en: 'Executed brand collateral, product photography, and visual packaging assets across digital and print media.',
      ja: '自社ブランドのカタログ撮影、製品プロモーション用グラフィック、パッケージデザインの制作。',
    },
  },
];

export const educationData: EducationItem[] = [
  {
    institution: {
      en: 'Kudan Institute of Japanese Language & Culture',
      ja: '九段日本語学院',
    },
    degree: {
      en: 'Japanese Language & Cultural Studies',
      ja: '日本語・日本文化総合課程',
    },
    period: 'Currently Enrolled (2025 — Present)',
    location: 'Chiyoda-ku, Tokyo, Japan',
    notes: {
      en: 'Deepening linguistic proficiency, Japanese craft philosophy (monozukuri), and spatial sensibilities in Tokyo.',
      ja: '東京にて日本語運用能力の向上とともに、日本の「ものづくり」の精神、空間の美意識、素材研究を深化中。',
    },
  },
  {
    institution: {
      en: 'Telkom University',
      ja: 'テルコム大学 (Telkom University)',
    },
    degree: {
      en: 'Bachelor of Product Design (S.Ds.)',
      ja: 'プロダクトデザイン学士 (S.Ds.)',
    },
    period: '2021 — 2025',
    location: 'Bandung, Indonesia',
    notes: {
      en: 'Specialized in 3D computational modeling, ergonomics, sustainable materials, and human-centered furniture design.',
      ja: '3Dモデリング、人間工学、サステナブルマテリアル、家具設計を専攻。卒業制作にて優秀評価を獲得。',
    },
  },
];

export const skillsList = [
  'Fusion 360',
  'Blender',
  'Adobe Photoshop',
  'Adobe Lightroom',
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'CapCut',
  'Affinity',
  'Canva',
  'Photography',
  'Video',
  '3D Modeling',
  'CNC Fabrication',
  'Rapid Prototyping',
];
