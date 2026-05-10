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
                <h2 className="vkr-chapter-title">Безопасность и экологичность</h2>
                <p className="vkr-chapter-desc">
                  Комплекс мероприятий по охране труда, производственной и экологической безопасности
                </p>
              </div>
            </div>

            <div className="vkr-safety-grid">
              {safetyItems.map((cat, i) => (
                <div key={i} className="vkr-safety-card">
                  <div className="vkr-safety-header">
                    <div className="vkr-safety-icon">
                      <Icon name={cat.icon} size={18} />
                    </div>
                    <h3 className="vkr-safety-category">{cat.category}</h3>
                  </div>
                  <ul className="vkr-safety-list">
                    {cat.items.map((item, j) => (
                      <li key={j} className="vkr-safety-item">
                        <Icon name="CheckCircle2" size={13} className="vkr-check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="vkr-compliance">
              <h3 className="vkr-compliance-title">
                <Icon name="ScrollText" size={15} />
                Нормативная база
              </h3>
              <div className="vkr-docs-grid">
                {[
                  "ГОСТ Р 51318.14.1-2006",
                  "ГОСТ 12.0.003-2015",
                  "СП 12.13130.2009",
                  "ФЗ №116 «О промышленной безопасности»",
                  "ГОСТ Р ИСО 14001-2016",
                  "СНиП 23-05-95",
                  "ПУЭ, издание 7",
                  "ГОСТ Р 54934-2012 (OHSAS 18001)",
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
