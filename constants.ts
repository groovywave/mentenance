import type { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  'ソフトウェア・プラットフォーム',
  '計画・調査',
  '施工',
  '点検',
  '機械・装置',
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'akari',
    category: 'ソフトウェア・プラットフォーム',
    companyName: '燈株式会社 (Akari Inc.)',
    productName: '光/Hikari & Digital Billder',
    description: '東京大学発のAIスタートアップ企業が提供する、建設業界特化の業務支援ソリューション。生成AIとDXツールで生産性向上と人手不足解消を目指します。',
    features: [
        '光/Hikari: 建設特化の生成AI。施工計画書作成や専門的な質問への回答を支援。',
        'Digital Billder: 建設業特有の複雑な見積・発注・請求・経費精算を一元管理するDXシステム。',
        '法令対応: インボイス制度や電子帳簿保存法に対応。',
        '技術継承支援: AIが熟練技術者の暗黙知を学習・蓄積し、若手育成をサポート。',
    ],
    urls: [
        { label: '燈株式会社 公式サイト', url: 'https://akariinc.co.jp/' },
    ],
    contact: {
        email: 'hikari@akariinc.co.jp (光/Hikari), digitalbillder@akariinc.co.jp (Digital Billder)',
        phone: '050-5474-8082 (光/Hikari), 080-4951-3100 (Digital Billder)',
    },
    tags: ['生成AI', '建設DX', '業務効率化', '請求書管理', '技術継承'],
  },
  {
    id: 'toyota',
    category: '計画・調査',
    companyName: 'トヨタ自動車株式会社',
    productName: '図面照査支援システム',
    description: 'トヨタが培ってきたノウハウを活かし、建設・土木業界における図面照査業務の効率化と品質向上を目指して開発されたシステムです。',
    features: [
      '業務効率化: 図面と関連帳票をデジタルでリンクさせ、照査作業を効率化。',
      '品質向上: 照査履歴をデータで追跡し、チェックの抜け漏れを防止。',
      'ストレス軽減: 煩雑な確認作業をシステムが支援し、技術者の作業ストレスを軽減。',
      '技術の伝承: 業務プロセスを可視化し、若手への技術伝承や業務標準化に貢献。',
    ],
    urls: [
      { label: '公式サイト', url: 'https://global.toyota/jp/newbiz/becre/waseru/' },
    ],
    contact: {
      inquiryUrl: 'https://global.toyota/jp/newbiz/becre/waseru/',
    },
    tags: ['図面照査', '品質管理', '業務効率化', '建設DX', 'トヨタ'],
  },
   {
    id: 'safie',
    category: '点検',
    companyName: 'セーフィー株式会社',
    productName: 'Safie (セーフィー)',
    description: '国内シェアNo.1のクラウド録画サービス。建設現場、店舗、工場など様々な場所の遠隔からの安全管理や業務効率化を実現します。',
    features: [
        '遠隔リアルタイム映像確認: PCやスマホからいつでもどこでも現場のライブ・録画映像を確認。',
        '簡単設置: 電源を入れるだけで使えるモデルもあり、ネットワーク環境がない場所でも導入可能。',
        'AIによる映像解析: 立ち入り検知や人数カウントなど、高度な分析も可能。',
        'ウェアラブルカメラ: 作業者目線の映像共有で、遠隔からの指示をより的確に。',
    ],
    urls: [
        { label: 'Safie 公式サイト', url: 'https://safie.co.jp/' },
    ],
    contact: {
        address: '〒141-0033 東京都品川区西品川1-1-1 住友不動産大崎ガーデンタワー',
        inquiryUrl: 'https://safie.co.jp/contact/',
    },
    tags: ['クラウドカメラ', '現場管理', '遠隔監視', '安全管理', 'AI解析'],
  },
  {
    id: 'bentley',
    category: '計画・調査',
    companyName: 'Bentley Systems 合同会社',
    productName: 'iTwin, SYNCHRO 4D, ProjectWise など',
    description: 'インフラの設計、建設、運用を支援する包括的なソフトウェアソリューション。デジタルツイン技術を活用し、プロジェクトの効率化と高度化を実現します。',
    features: [
      'iTwin プラットフォーム: インフラ資産のデジタルツインを作成、可視化、分析するための基盤。',
      'SYNCHRO 4D: 3Dモデルに時間軸（4D）を加え、建設工程を計画・管理。',
      'ProjectWise: エンジニアリングプロジェクトのコンテンツ管理と協業を促進。',
      'AutoPIPE & STAAD.Pro: 配管応力解析と構造解析・設計ソフトウェア。',
    ],
    urls: [
      { label: 'Bentley Systems Japan公式サイト', url: 'https://www.bentley.com/ja' },
      { label: '伊藤忠テクノソリューションズ（CTC）', url: 'https://www.ctc-g.co.jp/' },
    ],
    contact: {
      address: '〒171-0022 東京都豊島区南池袋一丁目16番15号 ダイヤゲート池袋5階',
      phone: '03-4570-6760',
      fax: '03-6683-3605',
      inquiryUrl: 'https://www.bentley.com/ja/contact-us',
      other: ['販売代理店: 伊藤忠テクノソリューションズ株式会社（CTC）'],
    },
    tags: ['デジタルツイン', 'BIM/CIM', '4D施工管理', 'プロジェクト管理', '構造解析'],
  },
  {
    id: 'quando',
    category: 'ソフトウェア・プラットフォーム',
    companyName: '株式会社クアンド (QUANDO)',
    productName: 'SynQ Remote (シンクリモート)',
    description: '現場とオフィスを繋ぎ、遠隔からの指示や状況確認をリアルタイムで可能にするコミュニケーションツール。建設、製造、メンテナンスなど様々な業界の現場DXを支援します。',
    features: [
      'リアルタイムコミュニケーション: 映像共有で電話では伝わりにくい状況を正確に把握。',
      'ポインタ指示・描画機能: 映像上に直感的な指示が可能。',
      '報告書作成の効率化: やり取りを録画・保存し、報告書作成の手間を削減。',
      '簡単なアクセス: QRコード読み込みだけで通話に参加可能。アプリインストール不要。',
      '高いセキュリティ: ISMS認証（JIS Q 27001）を取得。',
    ],
    urls: [
      { label: 'SynQ Remote 公式サイト', url: 'https://www.synq-platform.com/' },
      { label: '株式会社クアンド 公式サイト', url: 'https://www.quando.jp/' },
    ],
    contact: {
      address: '北九州本社: 〒802-0001 福岡県北九州市小倉北区浅野3-8-1 AIMビル6F',
      phone: '050-5050-2263',
      email: 'info@quando.jp',
      inquiryUrl: 'https://www.synq-platform.com/',
    },
    tags: ['遠隔支援', 'DX', '現場管理', 'コミュニケーション', '業務効率化'],
  },
  {
    id: 'irec',
    category: '点検',
    companyName: '株式会社 補修技術設計',
    productName: 'インフラ点検・診断ソリューション',
    description: '最新のドローン、3Dスキャナー、特殊カメラ、ソフトウェア、MR技術などを駆使し、社会インフラの点検、調査、診断を高度化・効率化するソリューションを総合的に提供します。',
    features: [
      '自律飛行ドローン (Skydio): GPSの届かない橋梁下やトンネル内でも安定して自律飛行し、3Dモデルを作成。',
      'Crack Imager™: デジタル画像からコンクリートのひび割れを自動で抽出し、計測・データ化。',
      'MR（複合現実）技術: HoloLens 2を使用し、設計図面を現実空間に重ねて表示し、施工を支援。',
      'ハンディ3Dスキャナー (Artec Leo): 複雑な形状の構造物を現場で手軽に3Dデータ化。',
    ],
    urls: [
      { label: '株式会社 補修技術設計 公式サイト', url: 'https://www.ire-c.com/' },
    ],
    contact: {
      address: '〒134-0088 東京都江戸川区西葛西6-24-8 尚伸ビル5F',
      phone: '03-3877-4642',
      email: 'ire@ire-c.com',
    },
    tags: ['ドローン点検', '3Dスキャン', 'ひび割れ', 'MR', 'インフラメンテナンス', 'DX'],
  },
  {
    id: 'nec',
    category: '計画・調査',
    companyName: 'NEC (日本電気株式会社)',
    productName: '衛星データ活用ソリューション (SAR/Tellus)',
    description: '人工衛星から取得したデータを高度に分析し、防災、インフラ維持管理、社会課題の解決に役立てるサービス。天候に左右されないSAR衛星での監視や、オープンな分析プラットフォームを提供します。',
    features: [
      'SAR衛星モニタリング: 広範囲のインフラや地盤の変動をミリ単位で継続的に監視。',
      '予防保全: 地盤沈下や土砂崩れの兆候など、災害につながる微小な変化を早期に検知。',
      'Tellusプラットフォーム: 政府衛星データや多様な地上データをクラウド上で組み合わせ、解析できるオープンプラットフォーム。',
    ],
    urls: [
      { label: 'インフラモニタリングサービス', url: 'https://jpn.nec.com/solution/space/monitoring/index.html' },
      { label: 'Tellus公式サイト', url: 'https://www.tellusxdp.com/' },
    ],
    contact: {
      email: 'pfg-inquiry@satvas.jp.nec.com (衛星利用ソリューショングループ)',
    },
    tags: ['衛星データ', 'インフラ監視', '防災', 'SAR', 'データ解析', 'Tellus'],
  },
  {
    id: 'toyo',
    category: '点検',
    companyName: '株式会社東陽テクニカ',
    productName: '状態監視・予知保全ソリューション',
    description: '各種センサーで取得した機械の振動や温度データをAIで分析し、状態変化を可視化して故障の予兆を検知。計画的なメンテナンスを可能にし、突然の設備停止リスクを低減します。',
    features: [
      'AIによる診断監視: 正常な運転状態を学習し、自動で稼働状態を分類、異常の兆候を早期発見。',
      '各種センサー: 用途に応じた工業用振動センサーや、最長5年稼働するワイヤレスセンサーなどを提供。',
      'データ可視化: 収集したデータを分析し、故障の予兆を分かりやすく表示。',
    ],
    urls: [
        { label: '東陽テクニカ 公式サイト', url: 'https://www.toyo.co.jp/' },
        { label: 'ソリューション紹介', url: 'https://www.toyo.co.jp/mecha/solution/theme/cat233/' },
    ],
    contact: {
        address: '〒103-8284 東京都中央区八重洲一丁目1番6号',
        phone: '03-3279-0771 (技術サポート)',
        inquiryUrl: 'https://www.toyo.co.jp/contact/',
    },
    tags: ['予知保全', '状態監視', 'AI', 'IoT', 'センサー', '工場DX'],
  },
  {
    id: 'furukawa',
    category: '機械・装置',
    companyName: '古河電気工業株式会社',
    productName: 'インフラレーザ',
    description: 'レーザー技術を用いてインフラ構造物の錆や塗膜を除去するシステム。特に鉄道車両メンテナンス向けの小型・軽量モデルが特徴です。',
    features: [
      '高効率な施工: 従来工具の約7倍の速さで施工可能。',
      '母材への低ダメージ: 鋼材にダメージを与えず、1種ケレン相当の塗膜除去を実現。',
      'DX機能: 施工データをクラウドで管理・分析し、「見える化」を実現。',
      '遠隔サポート: 異常検知時に迅速なサポートを提供。',
    ],
    urls: [
      { label: '古河電気工業 公式サイト', url: 'https://www.furukawa.co.jp/' },
      { label: 'インフラレーザ紹介ページ', url: 'https://www.furukawa.co.jp/solution/infralaser/' },
    ],
    contact: {
      address: '〒100-8322 東京都千代田区丸の内2丁目6番1号',
      email: 'fec.infra-laser@furukawaelectric.com',
      inquiryUrl: 'https://www.furukawa.co.jp/inquiry/',
    },
    tags: ['レーザーケレン', '錆除去', 'メンテナンス', 'DX', '鉄道'],
  },
  {
    id: 'nbk',
    category: '機械・装置',
    companyName: 'NBKマーケティング株式会社',
    productName: 'フロートアーム (Float Arm)',
    description: '人が立ち入り困難な狭い場所や危険箇所、高所のパイプラックなどの点検・補修を効率化・安全化する遠隔操作型ロボットです。',
    features: [
      '危険箇所へのアクセス: 多関節アームが狭所に入り込み、詳細な目視点検やデータ取得が可能。',
      'コストと時間の大幅削減: 足場設置が不要になり、工期と費用を大幅に削減。',
      '多様な検査に対応: アーム先端に各種カメラやセンサーを装着可能。非破壊検査も視野に。',
    ],
    urls: [
      { label: 'NBKマーケティング公式サイト', url: 'https://www.nbkmarketing.co.jp/' },
      { label: 'フロートアーム製品紹介', url: 'https://www.nbkmarketing.co.jp/services-products/floatarm/' },
    ],
    contact: {
      address: '〒105-0011 東京都港区芝公園1-3-3 NABEYAビル 2階',
      other: [
        '担当者: 佐藤 氏 (電話: 090-7289-6491, メール: shigeyuki.sato@nbk1560.com)',
        '担当者: 岡本 氏 (メール: e.okamoto@nbk1560.com)',
      ],
    },
    tags: ['遠隔操作ロボット', 'プラント点検', '狭所作業', '安全対策', '非破壊検査'],
  },
  {
    id: 'shimizu-digitri',
    category: '計画・調査',
    companyName: '清水建設株式会社',
    productName: 'デジトリ360 (Digi-Tori 360)',
    description: '建物や設備に関する書類管理・PDF管理をDX化するクラウドサービス。紙で管理されていた膨大な量の取扱説明書や図面などをデジタルで一元管理し、施設管理をスマートにします。',
    features: [
      '書類の一元管理: 建物に関するあらゆる資料をデジタル化し、クラウド上で一元管理。',
      '360度画像との連携: 取扱説明書や図面と360度画像を紐づけ、直感的に情報へアクセス。',
      '円滑な情報共有: クラウドサービスで、複数人や遠隔地からでも情報にアクセス可能。',
    ],
    urls: [
      { label: '清水建設 公式サイト', url: 'https://www.shimz.co.jp/' },
    ],
    contact: {
      address: '〒104-8350 東京都中央区京橋二丁目16番1号',
      phone: '03-3561-1111 (代表)',
      inquiryUrl: 'https://www.shimz.co.jp/inquiry/',
    },
    tags: ['書類管理', '360度画像', '施設管理', 'DX', 'PDF管理'],
  },
  {
    id: 'lifestyle-twinmaker',
    category: 'ソフトウェア・プラットフォーム',
    companyName: 'LIFE STYLE株式会社',
    productName: 'TwinMaker',
    description: '360度カメラを活用した記録・共有の効率化ツール。巡回・点検・保守業務などにおける記録と共有のムダをなくし、業務を効率化します。',
    features: [
      'AI自動マッピング: 撮影した場所を図面上で自動的にマッピングし、記録を整理します。',
      '簡単な情報共有: 記録した360度画像はURLで簡単に共有でき、アカウントを持っていない相手とも閲覧が可能です。',
      '直感的な操作: 誰でも簡単に360度空間の撮影・記録・共有ができます。',
    ],
    urls: [
      { label: 'LIFE STYLE株式会社 公式サイト', url: 'https://l-s.co.jp/' },
      { label: 'TwinMaker製品サイト', url: 'https://twinmaker.jp/' },
    ],
    contact: {
      address: '〒107-0062 東京都港区南青山6-7-14 チガー南青山ビル',
      phone: '03-4405-7433',
      email: 'info@l-s.co.jp',
      inquiryUrl: 'https://twinmaker.jp/contact/',
    },
    tags: ['360度カメラ', 'DX', '情報共有', '点検', '業務効率化'],
  },
  {
    id: 'fujimori',
    category: '施工',
    companyName: 'フジモリ産業株式会社',
    productName: 'fair-mini, AGSRシリーズ, Stronger-Neo',
    description: 'トンネルや構造物の空洞充填、裏込め注入、止水工事に関するソリューション。ICT注入機と高性能ウレタン材料で、工事の省力化、効率化、安全性向上を実現します。',
    features: [
        'fair-mini (ICT小型注入機): タブレットで遠隔操作し、安全かつ簡単に注入作業が可能。NETIS登録済。',
        'AGSRシリーズ (高性能ウレタン): コスト削減、時間短縮、負担軽減を実現する空洞充填・裏込注入材。',
        'Stronger®-Neo (止水・減水材): 流水箇所での止水対策に効果的な急結気泡配合タイプの材料。',
    ],
    urls: [
        { label: 'フジモリ産業 公式サイト', url: 'https://www.fujimori.co.jp/' },
        { label: '土木関連製品紹介', url: 'https://www.fujimori.co.jp/civil_engineering/' },
    ],
    contact: {
        address: '〒141-0032 東京都品川区大崎1-2-2 アートヴィレッジ大崎セントラルタワー',
        phone: '03-5435-8551 (土木資材事業部 東京)',
    },
    tags: ['空洞充填', '裏込め注入', 'ウレタン', '止水工事', 'ICT施工', 'NETIS'],
  },
  {
    id: 'toyokoken',
    category: '機械・装置',
    companyName: 'トーヨーコーケン株式会社',
    productName: 'ベビーウインダー, 昇降力, ウルトラ治具マン',
    description: '現場の省力化・安全性向上を目的とした荷揚げ・運搬ソリューション。小型ウインチから荷物用リフト、バランサまで幅広く提供します。',
    features: [
        'ベビーウインダー: ワイヤ長さに制限のないエンドレス式ウインチ。高揚程での作業に最適。',
        '昇降力 (荷物用リフト): 仮設階段での資材運搬を安全かつ楽に行い、身体的負担を大幅に軽減。',
        'ウルトラ治具マン: 最大150kgの荷物を無重力のように操作できるバランサ。重量物の精密な位置決めに。',
    ],
    urls: [
        { label: 'トーヨーコーケン 公式サイト', url: 'https://www.toyokoken.co.jp/' },
    ],
    contact: {
        phone: '03-5857-3161 (製品映画・デモに関する問合せ)',
        inquiryUrl: 'https://www.toyokoken.co.jp/inquiry/',
    },
    tags: ['ウインチ', 'リフト', 'バランサ', '荷揚げ', '省力化', '安全対策'],
  },
  {
    id: 'daiichi-cutter',
    category: '施工',
    companyName: '第一カッター興業株式会社',
    productName: 'GlaCon Floor, ウォータージェット工法',
    description: 'コンクリート構造物の切断・穿孔から床のメンテナンスまで、幅広いソリューションを提供する専門企業。',
    features: [
        'GlaCon Floor (床改質工法): コンクリート表面を研削・強化し、高耐久・美しい鏡面仕上げを実現。',
        'ウォータージェット工法: 超高圧水で金属やコンクリートなどあらゆる材質を切断。火気不要で安全。',
        '床研削・メンテナンス: 粉塵をほとんど出さずにスピーディーな床のタイヤ痕除去や清掃が可能。',
    ],
    urls: [
        { label: '第一カッター興業 公式サイト', url: 'https://www.daiichi-cutter.co.jp/' },
    ],
    contact: {
        address: '〒253-0071 神奈川県茅ヶ崎市萩園833番地',
        phone: '0467-82-1116',
    },
    tags: ['コンクリートカッター', '床改質', 'ウォータージェット', 'メンテナンス', '切断工事'],
  },
  {
    id: 'showa-kikai',
    category: '施工',
    companyName: '昭和機械商事株式会社',
    productName: 'GAKETORU, かご丸くん, フォレストウォール',
    description: '斜面の防災対策や擁壁工事に関する革新的なソリューション。ICT測量システムから、環境に配慮した独自の補強土壁工法まで提供します。',
    features: [
        'GAKETORU: スマホ等で撮影したデータから3D測量・自動設計を行い、作業時間を劇的に短縮。',
        'かご丸くん®: 大型円筒形ふとんかご。現地発生材を再利用でき、工期を大幅に短縮。',
        'フォレストウォール® 工法: 緑化可能な補強土壁工法。周辺環境との調和を図る。',
    ],
    urls: [
        { label: '昭和機械商事 公式サイト', url: 'https://www.showa-kikai.co.jp/' },
    ],
    contact: {
        address: '〒601-8133 京都府京都市南区上鳥羽麻ノ本25',
        phone: '075-681-8777',
    },
    tags: ['斜面防災', '補強土壁', 'ICT測量', '自動設計', '環境配慮', 'NETIS'],
  },
  {
    id: 'shinpoly',
    category: '施工',
    companyName: '信越ポリマー株式会社',
    productName: 'ポリマエース, シリンダー工法',
    description: 'コンクリート構造物の補修・補強に関する様々な資材・工法を提供。断面修復材やシーリング材など、インフラメンテナンスに貢献します。',
    features: [
        'ポリマエース: コンクリート構造物の断面修復材。',
        'シリンダー工法: ひび割れ注入などを行うコンクリート構造物補修・補強工法。',
        '各種シーリング材: 伸縮継手、防水、防食など、用途に応じたシーリング材を提供。',
    ],
    urls: [
        { label: '信越ポリマー 公式サイト', url: 'https://www.shinpoly.co.jp/' },
    ],
    contact: {
        address: '〒100-0004 東京都千代田区大手町1-1-3 大手センタービル',
        phone: '03-5288-8400',
    },
    tags: ['断面修復', 'コンクリート補修', 'ひび割れ補修', 'シーリング材', 'インフラメンテナンス'],
  },
  {
    id: 'riebo',
    category: '点検',
    companyName: 'RIEBO (睿铂科技) / 国際航業',
    productName: 'ドローン搭載用高解像度カメラ',
    description: 'ドローンに搭載する航空写真測量カメラメーカー。送電線や斜面・崩落危険地域などの点検・監視ソリューションを提案します。',
    features: [
        '高精度: 0.1mmのひび割れを検出できるほどの高解像度カメラ。',
        '送電線点検ソリューション: 3Dフォーカスや高画素センサーで送電線を効率的に点検。',
        'デジタルツインソリューション: ドローンで取得したデータからデジタルツインを生成し、斜面などを監視。',
    ],
    urls: [
        { label: 'RIEBO 公式サイト', url: 'https://www.riebotech.com/' },
        { label: '国際航業株式会社', url: 'http://www.kkc.co.jp/' },
    ],
    contact: {
        email: 'sales@riebotech.com',
        other: ['日本でのパートナー企業: 国際航業株式会社 (電話: 03-3288-5900)'],
    },
    tags: ['ドローン', '航空写真測量', '高解像度カメラ', '送電線点検', 'デジタルツイン'],
  },
  {
    id: 'toukei',
    category: 'ソフトウェア・プラットフォーム',
    companyName: '株式会社 東計電算',
    productName: 'Smart Report Cloud, ナレッジナビ',
    description: 'AIを活用した業務効率化サービス。スマホでの報告書自動作成や、社内ナレッジを学習したAIチャットボットを提供します。',
    features: [
        'Smart Report Cloud: 音声や写真からAIが内容を理解し、報告書を自動作成。',
        'クローズドAIチャットボット ナレッジナビ: 社内規定や業務マニュアルを学習し、24時間365日質問に自動回答。',
        '属人化の解消: ベテランの知識やノウハウを全社で共有可能に。',
    ],
    urls: [
        { label: '東計電算 公式サイト', url: 'https://www.toukei.co.jp/' },
    ],
    contact: {
        address: '〒211-8550 神奈川県川崎市中原区市ノ坪150',
        phone: '044-430-1313',
        email: 'skd@toukei.co.jp',
    },
    tags: ['AI', '報告書作成', 'チャットボット', 'ナレッジ共有', '業務効率化'],
  },
  {
    id: 'shinwa-kensa',
    category: '点検',
    companyName: '株式会社シンワ検査',
    productName: '非破壊検査・コンクリート診断',
    description: '非破壊検査、コンクリート診断、建物調査の専門企業。構造物の調査・診断から補強設計まで、総合的なサービスを提供し、インフラの長寿命化に貢献します。',
    features: [
        '非破壊検査全般',
        'コンクリート内部調査',
        '建築物・土木構造物調査',
        'コアボーリング',
    ],
    urls: [
        { label: 'シンワ検査 公式サイト', url: 'https://www.shinwa-kensa.jp/' },
    ],
    contact: {
        address: '〒224-0041 神奈川県横浜市都筑区仲町台1-27-2',
        phone: '045-590-0780',
    },
    tags: ['非破壊検査', 'コンクリート診断', '建物調査', 'インフラ長寿命化'],
  },
  {
    id: 'cybernetech',
    category: '点検',
    companyName: '株式会社サイバネテック',
    productName: '3Dマッピング・ドローンソリューション',
    description: '最先端のドローンマッピングや3Dモバイルレーザーマッピングなどのソリューションを提供する専門商社。海外の優れた製品を日本国内に導入・販売しています。',
    features: [
        '3Dレーザー測量サービス: SLAM技術を搭載したスキャナーで高精度な3次元データを迅速に取得。',
        '大気汚染計測システム: ドローンや車両に搭載し、大気汚染状況をリアルタイムで3Dマッピング。',
        '放射線量計モジュール: ドローンで遠隔から放射線量を計測。',
    ],
    urls: [
        { label: 'サイバネテック 公式サイト', url: 'https://www.cybernetech.co.jp/' },
    ],
    contact: {
        address: '〒104-0028 東京都中央区八重洲2-11-4',
        phone: '03-3272-8503',
        email: 'info@cybernetech.co.jp',
    },
    tags: ['3Dマッピング', 'SLAM', 'ドローン', '大気汚染', 'レーザースキャナー'],
  },
  {
    id: 'pix4d',
    category: '計画・調査',
    companyName: 'Pix4D株式会社',
    productName: 'PIX4Dfields',
    description: 'ドローンや衛星から得た画像を分析・可視化する農業向けマッピングソフトウェア。精密農業やスマート農業を支援します。',
    features: [
        '迅速なデータ処理: 現場のオフライン環境でも数分でオルソモザイク画像や植生指数マップを作成。',
        '詳細な作物分析: NDVIなどの植生指数を用いて作物の健康状態を分析。',
        '効率的な作業計画: 分析結果に基づき、肥料や農薬の散布量を調整するための処方箋マップを作成。',
    ],
    urls: [
        { label: 'Pix4D 公式サイト', url: 'https://www.pix4d.com/ja' },
    ],
    contact: {
        address: '〒150-0011 東京都渋谷区東1丁目3-10 いちご渋谷イーストビル5F',
        inquiryUrl: 'https://www.pix4d.com/ja/contact-us',
    },
    tags: ['スマート農業', '精密農業', 'ドローンマッピング', 'NDVI', '処方箋マップ'],
  },
  {
    id: 'being',
    category: 'ソフトウェア・プラットフォーム',
    companyName: '株式会社ビーイング',
    productName: 'INSHARE（インシェア）',
    description: 'クラウド型工事情報総合マネジメントシステム。スケジュール管理、書類作成、情報共有を効率化し、建設現場のDXを推進します。',
    features: [
        'スケジュール管理の効率化: 予定変更などの周知にかかる時間を短縮。',
        '書類作成・管理の負担軽減: 安全書類作成を効率化し、ペーパーレス化を促進。',
        '円滑な情報共有: 社内外の関係者間でリアルタイムに情報を共有。',
        '技術・ノウハウの蓄積: 現場の情報をデータとして蓄積し、若手育成に貢献。',
    ],
    urls: [
        { label: 'INSHARE 公式サイト', url: 'https://www.being-corp.co.jp/inshare/' },
    ],
    contact: {
        address: '〒514-0003 三重県津市桜橋 1丁目312番地',
        phone: '059-227-2932',
    },
    tags: ['建設DX', '施工管理', '情報共有', 'ペーパーレス', '工程管理'],
  },
  {
    id: 'ban-zi',
    category: '施工',
    companyName: '株式会社 BAN-ZI',
    productName: 'サビバリアー',
    description: '赤錆を無害な黒錆に転換し、その上から塗装することで鋼構造物の長寿命化とメンテナンスコスト削減を実現する画期的な錆転換工法です。',
    features: [
        '優れた防錆性能: 赤錆の進行を強力に抑制。',
        'コスト削減と工期短縮: ケレン作業を大幅に簡略化。',
        'LCC低減: 塗り替え周期を延長し、長期的なメンテナンス費用を抑制。',
        'NETIS登録技術: 公共工事などでも信頼性が認められている技術。',
    ],
    urls: [
        { label: 'BAN-ZI 公式サイト', url: 'https://www.ban-zi.jp/' },
        { label: 'サビバリアー製品ページ', url: 'https://www.ban-zi.jp/sabibarrier.html' },
    ],
    contact: {
        address: '〒262-0043 千葉県千葉市花見川区大日町 1492-3',
        phone: '043-306-6590',
    },
    tags: ['錆転換', '防錆', 'メンテナンス', 'LCC', 'NETIS', '鋼構造物'],
  },
  {
    id: 'ecoclean',
    category: '施工',
    companyName: '株式会社エコクリーン',
    productName: 'DeCK防食塗装システム, MT-BERON57',
    description: '鋼構造物の長期防食とアスベスト対策に対応する製品を提供。省工程・長期耐久型の塗装システムと、安全な石綿封じ込め剤でインフラ維持管理に貢献します。',
    features: [
        'DeCK: 錆転換プライマーを核とした省工程・長期耐久型の防食塗装システム。',
        'MT-BERON57: アスベストの飛散を防止する水系の石綿封じ込め剤。NETIS登録済。',
        '環境配慮: VOC排出量が少なく、水系塗料で安全性が高い。',
    ],
    urls: [
        { label: 'エコクリーン 公式サイト', url: 'http://www.ecoclean-japan.co.jp/' },
    ],
    contact: {
        address: '〒165-0034 東京都中野区大和町1-66-5-401',
        phone: '03-3338-3577',
    },
    tags: ['防食塗装', '錆転換', 'アスベスト', '石綿封じ込め', 'NETIS', '環境対応'],
  },
  {
    id: 'chudai-dovox',
    category: '施工',
    companyName: '中大グループ (中大/DOVOX)',
    productName: 'クワトロ・ドレーン, マルチフラップゲート',
    description: '橋梁や河川構造物向けの製品を開発。効率的な排水装置や、電源不要の自動開閉式浸水対策ゲートで、インフラの長寿命化や防災・減災に貢献します。',
    features: [
        '各種排水装置（ドレーン）: 橋梁の床版や継ぎ目からの排水を効率的に行い、構造物の耐久性を向上。',
        'マルチフラップゲート: 電源不要で水の浮力だけで自動開閉する浸水対策ゲート。NETIS登録済。',
        '簡単施工: 既存の構造物にも後付け可能。',
    ],
    urls: [
        { label: '株式会社 中大 公式サイト', url: 'https://www.chudai.co.jp/' },
        { label: '株式会社 DOVOX 公式サイト', url: 'https://dovox.jp/' },
    ],
    contact: {
        other: [
            '株式会社 中大: 03-5833-3580',
            '株式会社 DOVOX: 048-729-6556',
        ]
    },
    tags: ['排水装置', '橋梁メンテナンス', '浸水対策', '防災', 'NETIS', '無動力'],
  },
  {
    id: 'nihon-hoan',
    category: '施工',
    companyName: '日本保安工業株式会社',
    productName: '防災Fenceeee! (防災フェンス)',
    description: '災害時の避難所運営をサポートするサインシステム。誰にとっても分かりやすい案内で、混乱を防ぎ、スムーズな運営を支援します。',
    features: [
        'わかりやすい案内: ユニバーサルカラーや多言語表記（ピクトグラム含む）に対応。',
        '簡単設置・軽量コンパクト: 誰でも簡単に設置でき、保管や持ち運びも容易。',
        '環境への配慮: 環境に優しいバイオマス素材を配合。',
        'オリジナルデザイン対応: 自治体名やロゴなどを入れたデザインも製作可能。',
    ],
    urls: [
        { label: 'DanzeeeeN! FACTORY 公式サイト', url: 'https://www.nhk1390.co.jp/danzeeeen/' },
    ],
    contact: {
        address: '〒221-0013 神奈川県横浜市神奈川区新子安2-4-8',
        phone: '0120-320-204',
        email: 'info@nhk1390.co.jp',
    },
    tags: ['防災', '避難所', 'サインシステム', 'ユニバーサルデザイン', 'BCP'],
  },
];