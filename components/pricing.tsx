export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.2] text-[#0F172A] mb-20">料金</h2>
        <div className="max-w-[900px] mx-auto bg-white border-t border-[#CBD5E1] pt-12">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="mb-8">
                <div className="mb-2">
                  <span className="text-[14px] text-[#64748B] uppercase tracking-wider">初月・翌月</span>
                </div>
                <div className="mb-1">
                  <span className="font-mono text-[56px] md:text-[64px] text-[#0F172A] tabular-nums tracking-tight">
                    ¥2,500
                  </span>
                  <span className="text-[18px] text-[#64748B] ml-3">/月</span>
                </div>
                <p className="text-[14px] text-[#64748B]">半額キャンペーン</p>
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <span className="text-[14px] text-[#64748B] uppercase tracking-wider">3ヶ月目以降</span>
                </div>
                <div className="mb-1">
                  <span className="font-mono text-[40px] text-[#0F172A] tabular-nums tracking-tight">¥5,000</span>
                  <span className="text-[16px] text-[#64748B] ml-3">/月</span>
                </div>
              </div>
              <p className="text-[14px] text-[#64748B] leading-relaxed">7日間返金保証 / 最低利用期間なし</p>
            </div>
            <div>
              <h3 className="font-serif text-[20px] text-[#0F172A] mb-6">含まれるもの</h3>
              <ul className="space-y-3 text-[15px] text-[#0F172A] leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-4 text-[#CBD5E1]">—</span>
                  <span>AI学習計画(無制限更新)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-[#CBD5E1]">—</span>
                  <span>オンライン自習室</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-[#CBD5E1]">—</span>
                  <span>週1回の個別面談(30分)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-[#CBD5E1]">—</span>
                  <span>チャット質問対応(24時間以内返信)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
