import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "system", label: "Система управления", icon: "Settings2" },
  { id: "economics", label: "Экономическое обоснование", icon: "BarChart3" },
  { id: "safety", label: "Безопасность и экологичность", icon: "ShieldCheck" },
];

const qualityStages = [
  {
    id: "raw",
    title: "Сырьё",
    icon: "Wheat",
    description: "Контроль входящего сырья",
    params: [
      { name: "Влажность солода", value: 4.5, unit: "%", norm: "≤ 5%", ok: true },
      { name: "Белковый показатель", value: 10.8, unit: "%", norm: "10–12%", ok: true },
      { name: "Экстрактивность", value: 79.2, unit: "%", norm: "≥ 78%", ok: true },
      { name: "Засорённость", value: 1.8, unit: "%", norm: "≤ 2%", ok: true },
    ],
  },
  {
    id: "fermentation",
    title: "Брожение",
    icon: "FlaskConical",
    description: "Мониторинг процесса ферментации",
    params: [
      { name: "Температура сусла", value: 12.4, unit: "°C", norm: "12–14°C", ok: true },
      { name: "Содержание алкоголя", value: 4.8, unit: "%", norm: "4.5–5.0%", ok: true },
      { name: "pH среды", value: 4.1, unit: "", norm: "4.0–4.3", ok: true },
      { name: "Плотность", value: 1.8, unit: "°P", norm: "≤ 2.0°P", ok: true },
    ],
  },
  {
    id: "bottling",
    title: "Розлив",
    icon: "GlassWater",
    description: "Параметры линии розлива",
    params: [
      { name: "Объём наполнения", value: 500, unit: "мл", norm: "500±5 мл", ok: true },
      { name: "Давление CO₂", value: 2.6, unit: "бар", norm: "2.5–2.8 бар", ok: true },
      { name: "Кислород в бутылке", value: 0.08, unit: "мг/л", norm: "≤ 0.1 мг/л", ok: true },
      { name: "Температура розлива", value: 3.2, unit: "°C", norm: "2–4°C", ok: true },
    ],
  },
  {
    id: "packaging",
    title: "Упаковка",
    icon: "Package",
    description: "Финальный контроль качества",
    params: [
      { name: "Герметичность крышки", value: 100, unit: "%", norm: "100%", ok: true },
      { name: "Брак этикетирования", value: 0.3, unit: "%", norm: "≤ 0.5%", ok: true },
      { name: "Вес тары", value: 312, unit: "г", norm: "310–315 г", ok: true },
      { name: "Маркировка", value: 100, unit: "%", norm: "100%", ok: true },
    ],
  },
];

const economicsData = [
  { label: "Капитальные вложения", value: "12 400 000 ₽", icon: "Landmark" },
  { label: "Годовая выручка", value: "28 600 000 ₽", icon: "TrendingUp" },
  { label: "Срок окупаемости", value: "2,8 года", icon: "Clock" },
  { label: "Рентабельность", value: "31,4%", icon: "Percent" },
  { label: "Чистая прибыль / год", value: "8 980 000 ₽", icon: "Banknote" },
  { label: "NPV проекта", value: "14 200 000 ₽", icon: "Activity" },
];

const systemBlocks = [
  {
    title: "Уровень датчиков",
    icon: "Cpu",
    items: [
      "Датчики температуры PT100",
      "Расходомеры ультразвуковые",
      "Датчики давления Siemens",
      "pH-метры непрерывного контроля",
    ],
  },
  {
    title: "Уровень управления",
    icon: "Server",
    items: [
      "ПЛК Siemens S7-1500",
      "Панели оператора TP1900",
      "Система SCADA WinCC",
      "Промышленная сеть PROFINET",
    ],
  },
  {
    title: "Уровень диспетчеризации",
    icon: "Monitor",
    items: [
      "АРМ технолога",
      "Архивация данных",
      "Генерация отчётов",
      "Удалённый мониторинг",
    ],
  },
];

const safetyItems = [
  {
    category: "Производственная безопасность",
    icon: "HardHat",
    items: [
      "Защита от поражения электрическим током",
      "Система аварийной остановки (ESD)",
      "Вентиляция рабочих зон",
      "Средства индивидуальной защиты",
    ],
  },
  {
    category: "Пожарная безопасность",
    icon: "Flame",
    items: [
      "Автоматическое пожаротушение CO₂",
      "Система раннего обнаружения дыма",
      "Планы эвакуации и учения",
      "Категория помещения — «А»",
    ],
  },
  {
    category: "Экологичность",
    icon: "Leaf",
    items: [
      "Замкнутый цикл водопользования",
      "Биологическая очистка сточных вод",
      "Утилизация дробины (80% → корм)",
      "Выбросы CO₂: норма ПДК",
    ],
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("system");
  const [activeStage, setActiveStage] = useState("raw");

  const currentStage = qualityStages.find((s) => s.id === activeStage)!;

  return (
    <div className="vkr-root">
      {/* Header */}
      <header className="vkr-header">
        <div className="vkr-header-inner">
          <div className="vkr-header-meta">
            <span>Министерство образования и науки РФ</span>
            <span className="vkr-meta-dot">·</span>
            <span>ФГБОУ ВО «ПГУ»</span>
          </div>
          <h1 className="vkr-title">
            Автоматизированная система управления
            <br />
            <em className="vkr-title-em">процессом пивоварения</em>
          </h1>
          <p className="vkr-subtitle">Выпускная квалификационная работа · 2026</p>
        </div>
        <div className="vkr-header-rule" />
      </header>

      {/* Navigation */}
      <nav className="vkr-nav">
        <div className="vkr-nav-inner">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`vkr-nav-btn${activeSection === s.id ? " active" : ""}`}
              onClick={() => setActiveSection(s.id)}
            >
              <Icon name={s.icon} size={15} />
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="vkr-main">
        {/* ── СИСТЕМА УПРАВЛЕНИЯ ── */}
        {activeSection === "system" && (
          <div className="vkr-section">
            <div className="vkr-section-header">
              <span className="vkr-chapter-num">01</span>
              <div>
                <h2 className="vkr-chapter-title">Система автоматизированного управления</h2>
                <p className="vkr-chapter-desc">
                  Трёхуровневая архитектура АСУ ТП пивоваренного производства
                </p>
              </div>
            </div>

            <div className="vkr-arch-grid">
              {systemBlocks.map((block, i) => (
                <div key={i} className="vkr-arch-card">
                  <div className="vkr-arch-card-top">
                    <div className="vkr-arch-icon-wrap">
                      <Icon name={block.icon} size={18} />
                    </div>
                    <div>
                      <div className="vkr-arch-level">Уровень {i + 1}</div>
                      <div className="vkr-arch-name">{block.title}</div>
                    </div>
                  </div>
                  <ul className="vkr-arch-list">
                    {block.items.map((item, j) => (
                      <li key={j} className="vkr-arch-item">
                        <span className="vkr-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quality control */}
            <div className="vkr-quality">
              <h3 className="vkr-quality-title">
                <Icon name="ScanLine" size={16} />
                Контроль качества по этапам производства
              </h3>

              <div className="vkr-stage-tabs">
                {qualityStages.map((stage) => (
                  <button
                    key={stage.id}
                    className={`vkr-stage-tab${activeStage === stage.id ? " active" : ""}`}
                    onClick={() => setActiveStage(stage.id)}
                  >
                    <Icon name={stage.icon} size={14} />
                    {stage.title}
                  </button>
                ))}
              </div>

              <div className="vkr-stage-content">
                <div className="vkr-stage-info">
                  <div className="vkr-stage-icon-wrap">
                    <Icon name={currentStage.icon} size={28} />
                  </div>
                  <div>
                    <div className="vkr-stage-name">{currentStage.title}</div>
                    <div className="vkr-stage-desc">{currentStage.description}</div>
                  </div>
                </div>

                <div className="vkr-params-grid">
                  {currentStage.params.map((param, i) => (
                    <div key={i} className="vkr-param-card">
                      <div className="vkr-param-top">
                        <span className="vkr-param-name">{param.name}</span>
                        <span className={`vkr-param-badge${param.ok ? " ok" : " err"}`}>
                          {param.ok ? "✓ норма" : "✗ откл."}
                        </span>
                      </div>
                      <div className="vkr-param-value">
                        {param.value}
                        <span className="vkr-param-unit"> {param.unit}</span>
                      </div>
                      <div className="vkr-param-norm">Норма: {param.norm}</div>
                      <div className="vkr-param-bar">
                        <div
                          className={`vkr-param-bar-fill${param.ok ? " ok" : " err"}`}
                          style={{ width: "87%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── ЭКОНОМИКА ── */}
        {activeSection === "economics" && (
          <div className="vkr-section">
            <div className="vkr-section-header">
              <span className="vkr-chapter-num">02</span>
              <div>
                <h2 className="vkr-chapter-title">Экономическое обоснование проекта</h2>
                <p className="vkr-chapter-desc">
                  Технико-экономический анализ внедрения АСУ ТП на пивоваренном заводе мощностью 500 000 л/год
                </p>
              </div>
            </div>

            <div className="vkr-econ-grid">
              {economicsData.map((item, i) => (
                <div key={i} className="vkr-econ-card">
                  <div className="vkr-econ-icon">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div className="vkr-econ-label">{item.label}</div>
                  <div className="vkr-econ-value">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="vkr-econ-analysis">
              <div className="vkr-analysis-block">
                <h3 className="vkr-analysis-title">
                  <Icon name="PieChart" size={15} />
                  Структура капитальных затрат
                </h3>
                <div className="vkr-cost-items">
                  {[
                    { label: "Оборудование КИПиА", share: 62, value: "7 688 000 ₽" },
                    { label: "Монтажные работы", share: 18, value: "2 232 000 ₽" },
                    { label: "Программирование и ПО", share: 12, value: "1 488 000 ₽" },
                    { label: "Пуско-наладка и обучение", share: 8, value: "992 000 ₽" },
                  ].map((c, i) => (
                    <div key={i} className="vkr-cost-item">
                      <div className="vkr-cost-row">
                        <span className="vkr-cost-label">{c.label}</span>
                        <span className="vkr-cost-val">{c.value}</span>
                      </div>
                      <div className="vkr-cost-bar-wrap">
                        <div className="vkr-cost-bar-fill" style={{ width: `${c.share}%` }} />
                        <span className="vkr-cost-share">{c.share}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="vkr-analysis-block">
                <h3 className="vkr-analysis-title">
                  <Icon name="TrendingUp" size={15} />
                  Эффект от автоматизации
                </h3>
                <div className="vkr-effect-list">
                  {[
                    { icon: "ArrowDown", text: "Снижение брака с 4.2% до 0.8%", gain: "−81%" },
                    { icon: "Users", text: "Сокращение ФОТ операторов", gain: "−35%" },
                    { icon: "Zap", text: "Экономия электроэнергии", gain: "−22%" },
                    { icon: "Timer", text: "Сокращение времени цикла", gain: "−18%" },
                    { icon: "PackageCheck", text: "Рост производительности", gain: "+40%" },
                  ].map((e, i) => (
                    <div key={i} className="vkr-effect-item">
                      <div className="vkr-effect-icon">
                        <Icon name={e.icon} size={13} />
                      </div>
                      <span className="vkr-effect-text">{e.text}</span>
                      <span className="vkr-effect-gain">{e.gain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── БЕЗОПАСНОСТЬ ── */}
        {activeSection === "safety" && (
          <div className="vkr-section">
            <div className="vkr-section-header">
              <span className="vkr-chapter-num">03</span>
              <div>
                <h2 className="vkr-chapter-title">Безопасность и экологичность производства</h2>
                <p className="vkr-chapter-desc">
                  Объект: участок брожения и дображивания пива. Идентификация опасных и вредных факторов, технические и организационные мероприятия по снижению до допустимых значений.
                </p>
              </div>
            </div>

            {/* Подразделы — вертикальный аккордеон-список */}
            <div className="sf-blocks">

              {/* 1. Общая характеристика */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">1</div>
                  <Icon name="Factory" size={16} />
                  <span>Общая характеристика объекта</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Объект исследования — участок брожения и дображивания пива на пивоваренном предприятии мощностью 500 000 л/год. Технологический процесс осуществляется в цилиндроконических танках (ЦКТ) объёмом 50 м³ при температуре 8–12 °C и давлении CO₂ до 2,8 бар. Персонал участка: 4 оператора в смену, режим работы — непрерывный, 3 смены по 8 ч.
                  </p>
                  <div className="sf-chars-grid">
                    {[
                      { label: "Площадь участка", value: "420 м²" },
                      { label: "Количество ЦКТ", value: "12 шт." },
                      { label: "Объём одного ЦКТ", value: "50 м³" },
                      { label: "Давление CO₂", value: "до 2,8 бар" },
                      { label: "Температура процесса", value: "8–12 °C" },
                      { label: "Класс помещения по ПУЭ", value: "В-Iа" },
                    ].map((c, i) => (
                      <div key={i} className="sf-char-item">
                        <div className="sf-char-label">{c.label}</div>
                        <div className="sf-char-value">{c.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Шум и вибрация */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">2</div>
                  <Icon name="AudioWaveform" size={16} />
                  <span>Шум и вибрация</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Основные источники шума: компрессоры холодильных установок (85–92 дБА), насосы перекачки сусла (78–83 дБА), вентиляторы системы кондиционирования (72–76 дБА). Допустимый уровень шума на рабочих местах — 80 дБА (ГОСТ 12.1.003-2014).
                  </p>
                  <div className="sf-calc-box">
                    <div className="sf-calc-title">
                      <Icon name="Calculator" size={14} />
                      Расчёт суммарного уровня шума от нескольких источников
                    </div>
                    <div className="sf-calc-formula">
                      L<sub>сум</sub> = L<sub>макс</sub> + ΔL = 92 + 1,5 = <strong>93,5 дБА</strong>
                    </div>
                    <p className="sf-calc-note">
                      Превышение ПДУ на 13,5 дБА. Мероприятия: виброизоляция компрессоров на резиновые амортизаторы АМ-320, звукопоглощающие облицовки стен (минеральная вата 100 мм, α = 0,7), СИЗ — противошумные наушники Peltor Optime III (SNR 35 дБ).
                    </p>
                  </div>
                  <div className="sf-measures">
                    {["Виброизоляция оборудования на амортизаторах АМ-320", "Звукопоглощающая облицовка (минвата, α=0,7)", "СИЗ: наушники Peltor Optime III (SNR 35 дБ)", "Контроль вибрации: ГОСТ 12.1.012-2004"].map((m, i) => (
                      <div key={i} className="sf-measure-item">
                        <Icon name="CheckCircle2" size={12} className="vkr-check-icon" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Микроклимат */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">3</div>
                  <Icon name="Thermometer" size={16} />
                  <span>Микроклимат</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Участок брожения относится к категории работ IIа (средней тяжести). Основной вредный фактор — пониженная температура воздуха при обслуживании ЦКТ. Нормируется по СанПиН 1.2.3685-21.
                  </p>
                  <div className="sf-table">
                    <div className="sf-table-head">
                      <span>Параметр</span>
                      <span>Факт</span>
                      <span>Норма (тёплый сезон)</span>
                      <span>Статус</span>
                    </div>
                    {[
                      { param: "Температура воздуха", fact: "14–16 °C", norm: "17–23 °C", ok: false },
                      { param: "Относительная влажность", fact: "65–75%", norm: "15–75%", ok: true },
                      { param: "Скорость движения воздуха", fact: "0,18 м/с", norm: "≤ 0,3 м/с", ok: true },
                      { param: "Тепловое излучение", fact: "< 35 Вт/м²", norm: "≤ 70 Вт/м²", ok: true },
                    ].map((r, i) => (
                      <div key={i} className="sf-table-row">
                        <span>{r.param}</span>
                        <span>{r.fact}</span>
                        <span>{r.norm}</span>
                        <span className={`vkr-param-badge ${r.ok ? "ok" : "err"}`}>{r.ok ? "✓ норма" : "✗ откл."}</span>
                      </div>
                    ))}
                  </div>
                  <p className="sf-text" style={{ marginTop: "0.75rem" }}>
                    Мероприятия по нормализации: тепловые завесы у входных ворот, тёплая спецодежда (ГОСТ Р 12.4.218-99), локальный подогрев рабочих мест операторов.
                  </p>
                </div>
              </div>

              {/* 4. Вентиляция и отопление */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">4</div>
                  <Icon name="Wind" size={16} />
                  <span>Вентиляция и отопление</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Главная опасность участка — накопление CO₂ (выделяется при брожении). При концентрации выше 0,5% об. возникает угроза здоровью. Проектируется приточно-вытяжная вентиляция с кратностью воздухообмена n = 10 ч⁻¹.
                  </p>
                  <div className="sf-calc-box">
                    <div className="sf-calc-title">
                      <Icon name="Calculator" size={14} />
                      Расчёт воздухообмена по выделению CO₂
                    </div>
                    <div className="sf-calc-formula">
                      L = G / (C<sub>пдк</sub> − C<sub>нар</sub>) = 12 / (0,5 − 0,04) = <strong>26,1 м³/ч</strong> на 1 м² пола
                    </div>
                    <div className="sf-calc-formula">
                      L<sub>общ</sub> = 26,1 × 420 = <strong>10 962 м³/ч</strong>
                    </div>
                    <p className="sf-calc-note">
                      Принято: вентиляторы ВО-6,3 (Q = 6000 м³/ч), 2 шт. Отопление — приточные агрегаты АО2-16 с водяным калорифером t<sub>теп</sub> = 70/50 °C.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Освещение */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">5</div>
                  <Icon name="Sun" size={16} />
                  <span>Освещение</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Разряд зрительной работы — IV (средней точности). Нормируемая освещённость — 200 лк (СП 52.13330.2016). Применяются светодиодные светильники IP65 во взрывозащищённом исполнении.
                  </p>
                  <div className="sf-calc-box">
                    <div className="sf-calc-title">
                      <Icon name="Calculator" size={14} />
                      Расчёт освещённости методом коэффициента использования
                    </div>
                    <div className="sf-calc-formula">
                      N = (E × S × K<sub>з</sub>) / (Ф × η × n) = (200 × 420 × 1,5) / (5000 × 0,52 × 2) = <strong>24 светильника</strong>
                    </div>
                    <p className="sf-calc-note">
                      E = 200 лк, S = 420 м², K<sub>з</sub> = 1,5 (коэф. запаса), Ф = 5000 лм (LED), η = 0,52, n = 2 лампы/светильник. Тип: ЛСП-2×36 LED IP65, шаг 3,5×4 м.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Электробезопасность */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">6</div>
                  <Icon name="Zap" size={16} />
                  <span>Электробезопасность и защита от статического электричества</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Помещение по степени опасности — особо опасное (постоянная влажность, токопроводящие полы). Питание — 3-фазная сеть 380/220 В, 50 Гц. Система заземления TN-S.
                  </p>
                  <div className="sf-measures">
                    {[
                      "Защитное заземление всего оборудования (R ≤ 4 Ом, ПУЭ 1.7.101)",
                      "УЗО на каждую линию (I утечки = 30 мА)",
                      "Оборудование в исполнении IP55 и выше",
                      "Антистатическое заземление трубопроводов и ЦКТ (R ≤ 100 Ом)",
                      "Диэлектрические ковры и боты у пультов управления",
                      "Плакаты и знаки электробезопасности по ГОСТ Р 12.4.026-2015",
                    ].map((m, i) => (
                      <div key={i} className="sf-measure-item">
                        <Icon name="CheckCircle2" size={12} className="vkr-check-icon" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 7. Молниезащита */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">7</div>
                  <Icon name="CloudLightning" size={16} />
                  <span>Молниезащита</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Здание пивоваренного завода — II категория молниезащиты (СО 153-34.21.122-2003). Применяется молниеотвод стержневого типа высотой h = 20 м, зона защиты — конус с углом α = 45°.
                  </p>
                  <div className="sf-calc-box">
                    <div className="sf-calc-title">
                      <Icon name="Calculator" size={14} />
                      Зона защиты молниеотвода (II категория)
                    </div>
                    <div className="sf-calc-formula">
                      r<sub>x</sub> = 1,5 × h × (1 − h<sub>x</sub> / h) = 1,5 × 20 × (1 − 6/20) = <strong>21 м</strong>
                    </div>
                    <p className="sf-calc-note">
                      h<sub>x</sub> = 6 м — высота защищаемого объекта. Радиус защиты 21 м перекрывает всю площадь здания (18 × 24 м). Заземлитель молниеотвода: 3 вертикальных электрода L = 3 м, R ≤ 10 Ом.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Технологическая безопасность */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">8</div>
                  <Icon name="AlertTriangle" size={16} />
                  <span>Технологическая безопасность</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Основные технологические опасности участка брожения: избыточное давление в ЦКТ, накопление CO₂, работа с агрессивными моющими растворами (CIP-мойка), скользкие поверхности пола.
                  </p>
                  <div className="sf-table">
                    <div className="sf-table-head">
                      <span>Опасный фактор</span>
                      <span>Класс по ГОСТ 12.0.003</span>
                      <span>Мероприятие</span>
                    </div>
                    {[
                      { factor: "Избыточное давление CO₂ в ЦКТ", cls: "Физический", measure: "Предохранительные клапаны СППК, манометры" },
                      { factor: "Накопление CO₂ в воздухе рабочей зоны", cls: "Химический", measure: "Газоанализаторы CO₂ (порог 0,5%), принудит. вентиляция" },
                      { factor: "Едкий натр при CIP-мойке", cls: "Химический", measure: "СИЗ: перчатки, очки, фартук; нейтрализующая станция" },
                      { factor: "Скользкие мокрые полы", cls: "Физический", measure: "Противоскользящее покрытие, спецобувь с рифлёной подошвой" },
                      { factor: "Работа на высоте (обслуживание ЦКТ)", cls: "Физический", measure: "Стационарные лестницы с ограждением h ≥ 1,1 м, страховка" },
                    ].map((r, i) => (
                      <div key={i} className="sf-table-row">
                        <span>{r.factor}</span>
                        <span>{r.cls}</span>
                        <span>{r.measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 9. Пожарная профилактика */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">9</div>
                  <Icon name="Flame" size={16} />
                  <span>Пожарная профилактика</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Категория производства по пожарной опасности — В2 (горючие вещества: этанол, зерновая пыль). Степень огнестойкости здания — II (СП 12.13130.2009). Площадь пожарного отсека не превышает нормативную.
                  </p>
                  <div className="sf-measures">
                    {[
                      "Автоматическая установка пожаротушения (АУПТ) спринклерная, водяная",
                      "Адресная АПС: датчики дыма ИПД-3.1М, t° — ИПТ-1",
                      "Система оповещения и управления эвакуацией (СОУЭ) 3-го типа",
                      "Огнетушители порошковые ОП-5 — 1 шт. на 50 м² площади",
                      "Противопожарные двери EI-60 на всех выходах из участка",
                      "Эвакуационные выходы: 2 шт., ширина 1,2 м, подсветка 5 лк",
                      "Противопожарный инструктаж персонала 2 раза в год",
                    ].map((m, i) => (
                      <div key={i} className="sf-measure-item">
                        <Icon name="CheckCircle2" size={12} className="vkr-check-icon" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 10. Охрана окружающей среды */}
              <div className="sf-block">
                <div className="sf-block-head">
                  <div className="sf-num">10</div>
                  <Icon name="Leaf" size={16} />
                  <span>Охрана окружающей среды</span>
                </div>
                <div className="sf-block-body">
                  <p className="sf-text">
                    Пивоваренное производство оказывает воздействие на все компоненты окружающей среды: атмосферу, гидросферу и литосферу. Предприятие обязано соблюдать требования ФЗ №7 «Об охране окружающей среды» и ГОСТ Р ИСО 14001-2016.
                  </p>
                  <div className="sf-eco-grid">
                    <div className="sf-eco-card">
                      <div className="sf-eco-card-title">
                        <Icon name="Wind" size={14} />
                        Атмосфера
                      </div>
                      <ul className="sf-eco-list">
                        <li>Выбросы CO₂ при брожении: улавливание и рекуперация (≥ 90%)</li>
                        <li>Зерновая пыль: рукавные фильтры ФРИ, КПД 99,5%</li>
                        <li>Паты котельной: объём выбросов ≤ ПДВ по разрешению</li>
                      </ul>
                    </div>
                    <div className="sf-eco-card">
                      <div className="sf-eco-card-title">
                        <Icon name="Droplets" size={14} />
                        Гидросфера
                      </div>
                      <ul className="sf-eco-list">
                        <li>Сточные воды: механическая + биологическая очистка</li>
                        <li>Замкнутый цикл охлаждающей воды (оборотное водоснабжение)</li>
                        <li>Сброс в горколлектор: pH 6,5–8,5, БПК₅ ≤ 300 мг/л</li>
                      </ul>
                    </div>
                    <div className="sf-eco-card">
                      <div className="sf-eco-card-title">
                        <Icon name="Recycle" size={14} />
                        Литосфера / отходы
                      </div>
                      <ul className="sf-eco-list">
                        <li>Пивная дробина (80% влажн.) → передача на корм скоту</li>
                        <li>Остаточные дрожжи → сушка и продажа в качестве добавки</li>
                        <li>Упаковочные материалы → раздельный сбор и вторсырьё</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Нормативная база */}
            <div className="vkr-compliance" style={{ marginTop: "1.5rem" }}>
              <h3 className="vkr-compliance-title">
                <Icon name="ScrollText" size={15} />
                Нормативная база раздела
              </h3>
              <div className="vkr-docs-grid">
                {[
                  "ГОСТ 12.0.003-2015 (вредные факторы)",
                  "ГОСТ 12.1.003-2014 (шум)",
                  "ГОСТ 12.1.012-2004 (вибрация)",
                  "СанПиН 1.2.3685-21 (микроклимат)",
                  "СП 52.13330.2016 (освещение)",
                  "ПУЭ, изд. 7 (электробезопасность)",
                  "СО 153-34.21.122-2003 (молниезащита)",
                  "СП 12.13130.2009 (пожарная категория)",
                  "ФЗ №7 «Об охране окружающей среды»",
                  "ГОСТ Р ИСО 14001-2016 (экоменеджмент)",
                  "ГОСТ Р 12.4.026-2015 (знаки безопасности)",
                  "ФЗ №116 «О промышленной безопасности»",
                ].map((doc, i) => (
                  <div key={i} className="vkr-doc-tag">
                    <Icon name="FileText" size={11} />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="vkr-footer">
        <span>ВКР · Автоматизация пивоваренного производства · 2026</span>
        <span className="vkr-footer-dot">·</span>
        <span>Направление 15.03.04 «Автоматизация технологических процессов»</span>
      </footer>
    </div>
  );
}