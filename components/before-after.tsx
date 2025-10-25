export function BeforeAfter() {
  return (
    <section id="results" className="py-32 md:py-40 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.2] text-[#0F172A] mb-20">実績</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8">
            <div className="font-mono text-[48px] md:text-[56px] text-[#0F172A] mb-3 tabular-nums tracking-tight">
              40→60
            </div>
            <div className="text-[16px] text-[#64748B] leading-relaxed">
              難関公立高校合格者
              <br />
              <span className="text-[14px]">(偏差値UP実績)</span>
            </div>
          </div>
          <div className="bg-white p-8">
            <div className="font-mono text-[48px] md:text-[56px] text-[#0F172A] mb-3 tabular-nums tracking-tight">
              10~15
            </div>
            <div className="text-[16px] text-[#64748B] leading-relaxed">
              全体平均偏差値UP
              <br />
              <span className="text-[14px]">(3ヶ月利用者)</span>
            </div>
          </div>
          <div className="bg-white p-8">
            <div className="font-mono text-[48px] md:text-[56px] text-[#0F172A] mb-3 tabular-nums tracking-tight">
              3ヶ月
            </div>
            <div className="text-[16px] text-[#64748B] leading-relaxed">
              偏差値UP期間
              <br />
              <span className="text-[14px]">(平均達成期間)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.4] text-[#64748B] mb-8">Before</h3>
            <ul className="space-y-4 text-[16px] text-[#0F172A] leading-relaxed">
              <li className="flex items-start">
                <span className="mr-4 text-[#CBD5E1]">—</span>
                <span>何から手をつければいいか分からない</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-[#CBD5E1]">—</span>
                <span>自習室では集中が続かない</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-[#CBD5E1]">—</span>
                <span>模試の結果に一喜一憂するだけ</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-[24px] md:text-[28px] leading-[1.4] text-[#0F172A] mb-8">After</h3>
            <ul className="space-y-4 text-[16px] text-[#0F172A] leading-relaxed">
              <li className="flex items-start">
                <span className="mr-4 text-[#0F172A]">—</span>
                <span>AIにより今日やるべきことが明確</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-[#0F172A]">—</span>
                <span>オンライン自習室で学習時間が2倍に</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-[#0F172A]">—</span>
                <span>現役 東大・早稲田・慶應生等教師陣による初回面談で安心設計、着実に前進</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
