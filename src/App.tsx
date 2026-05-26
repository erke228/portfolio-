import { useState } from "react";
import {
  Palette, PenTool, Image as ImageIcon, Video, Figma, Layers,
  Mail, Phone, ArrowRight, Sparkles, Check, Send, Monitor,
  Layout, Zap, Eye, Briefcase
} from "lucide-react";


const programs = [
  { icon: PenTool, name: "Adobe Illustrator", desc: "Работа с векторной графикой, создание и редактирование иллюстраций, элементов фирменного стиля, иконок и графических материалов." },
  { icon: Palette, name: "CorelDRAW", desc: "Работа с векторной графикой, разработка логотипов, макетов и других графических материалов для клиентов." },
  { icon: ImageIcon, name: "Adobe Photoshop", desc: "Фотомонтаж, обработка изображений, ретушь, детализация, создание постеров, баннеров и визуальных материалов." },
  { icon: Video, name: "Adobe Premiere Pro", desc: "Базовый видеомонтаж, стабилизация видео, цветокоррекция. Опыт работы с S-Log материалом и последующей обработкой." },
  { icon: Figma, name: "Figma", desc: "Создание макетов сайтов, интерфейсов и графических элементов. Опыт разработки дизайна сайта с последующей вёрсткой." },
  { icon: Layers, name: "Другие программы", desc: "Опыт работы с другими графическими программами. Быстро осваиваю новое ПО под задачу проекта." },
];

const services = [
  "Веб-дизайн", "Дизайн сайтов", "Макеты сайтов и интерфейсов",
  "Векторная графика", "Логотипы и фирменный стиль", "Иконки и графические элементы",
  "Баннеры и постеры", "Обработка и ретушь изображений", "Фотомонтаж",
  "Базовый видеомонтаж", "Цветокоррекция видео", "Визуальные материалы для клиентов",
];

const advantages = [
  { icon: Layers, title: "Разные графические программы", desc: "Уверенно работаю с пакетом Adobe, CorelDRAW и Figma." },
  { icon: Layout, title: "Опыт в веб-дизайне", desc: "Создаю макеты сайтов и интерфейсов с пониманием структуры." },
  { icon: Zap, title: "Быстрая адаптация", desc: "Подстраиваюсь под задачу клиента и сжатые сроки." },
  { icon: PenTool, title: "Вектор и растр", desc: "Работаю с векторной и растровой графикой одинаково уверенно." },
  { icon: Eye, title: "Внимание к деталям", desc: "Аккуратность в обработке и сборке макетов." },
];

const portfolio = [
  { title: "Макет сайта", tag: "Web", gradient: "from-violet-500/30 to-indigo-500/30" },
  { title: "Логотип", tag: "Brand", gradient: "from-fuchsia-500/30 to-purple-500/30" },
  { title: "Баннер", tag: "Print", gradient: "from-blue-500/30 to-cyan-500/30" },
  { title: "Постер", tag: "Print", gradient: "from-indigo-500/30 to-violet-500/30" },
  { title: "Иконки", tag: "UI", gradient: "from-purple-500/30 to-pink-500/30" },
  { title: "Обработка фото", tag: "Retouch", gradient: "from-sky-500/30 to-violet-500/30" },
];

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-3">
            <img src="/favicon.svg" alt="Логотип сайта" className="h-10 w-10" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">Обо мне</a>
            <a href="#skills" className="hover:text-foreground transition">Навыки</a>
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#portfolio" className="hover:text-foreground transition">Портфолио</a>
            <a href="#contact" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            Связаться <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Открыт для проектов
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Серик Еркебулан
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Веб-дизайнер и дизайнер. Создаю макеты сайтов, интерфейсы, баннеры, постеры, логотипы и векторную графику.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#skills" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Посмотреть навыки <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition font-medium">
              Связаться
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-primary font-medium mb-4">// Обо мне</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Дизайн — это решение,<br />а не украшение</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Меня зовут Серик Еркебулан. Я веб-дизайнер и дизайнер с опытом работы в Adobe Illustrator, CorelDRAW, Adobe Photoshop, Adobe Premiere Pro и Figma. Работаю с векторной графикой, логотипами, макетами, баннерами, постерами, обработкой изображений, базовыми интерфейсами и видеоматериалами. Умею адаптироваться под задачу клиента, работать с предоставленными исходниками и при необходимости быстро осваивать новое программное обеспечение.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-surface/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-primary font-medium mb-4">// Программы и навыки</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Инструменты, с которыми работаю</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.name} className="group p-7 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition" style={{ background: "var(--gradient-primary)" }}>
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-primary font-medium mb-4">// Что я могу делать</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Направления работы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/40 transition">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 px-6 bg-surface/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-primary font-medium mb-4">// Преимущества</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Почему со мной удобно работать</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition">
                <a.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-primary font-medium mb-4">// Портфолио</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Работы</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Здесь можно разместить примеры логотипов, баннеров, постеров, макетов сайтов, иконок и других графических работ.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((item, i) => (
              <div key={item.title} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  {i === 0 && <div className="w-3/5 h-2/5 rounded-lg bg-background/40 backdrop-blur border border-white/20" />}
                  {i === 1 && <div className="w-28 h-28 rounded-full border-4 border-white/40" />}
                  {i === 2 && <div className="w-4/5 h-1/3 rounded bg-white/20" />}
                  {i === 3 && <div className="w-2/5 h-3/5 rounded bg-white/15" />}
                  {i === 4 && (
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }).map((_, k) => (
                        <div key={k} className="w-7 h-7 rounded-md bg-white/25" />
                      ))}
                    </div>
                  )}
                  {i === 5 && <div className="w-32 h-32 rounded-2xl bg-white/15 rotate-12" />}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <div className="text-xs text-primary mb-1">{item.tag}</div>
                  <div className="font-semibold text-lg">{item.title}</div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-surface/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm text-primary font-medium mb-4">// Контакты</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Давайте обсудим проект</h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Готов обсудить проект, выполнить тестовое задание или подготовить визуальные материалы под ваши задачи.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Имя</div>
                  <div className="font-medium">Серик Еркебулан</div>
                </div>
              </div>
              <a href="mailto:yerkebuan.serik@bk.ru" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">yerkebuan.serik@bk.ru</div>
                </div>
              </a>
              <a href="tel:+77066966391" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Телефон</div>
                  <div className="font-medium">+7 706 696 6391</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setForm({ name: "", email: "", message: "" }); }}
            className="p-8 rounded-2xl bg-background border border-border space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Имя</label>
              <input
                required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Сообщение</label>
              <textarea
                required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition resize-none"
                placeholder="Расскажите о проекте..."
              />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
              {sent ? "Сообщение отправлено" : "Отправить"} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>Серик Еркебулан — веб-дизайнер и дизайнер. Figma, Photoshop, Illustrator, CorelDRAW, видеомонтаж.</div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-primary" />
            © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
