export function ValueColumns() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "志望校から逆算",
      description: "入試日から今日までを自動分割。AIが科目ごとの優先度を判定し、参考書を用いた週次・日次の学習計画を生成します。",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      ),
      title: "オンライン自習室",
      description: "カメラON環境で集中を維持。学習時間は自動記録され、週次レポートで振り返りが可能です。",
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "安心のヒアリング面談",
      description: "現役 東大・早稲田・慶應生等の教師陣により、現状の志望校、進捗を確認し、計画を調整。質問・相談はチャットで24時間以内に返信します。",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white">
              <div className="text-[#0F172A] mb-6">{value.icon}</div>
              <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.3] text-[#0F172A] mb-4">{value.title}</h3>
              <p className="font-sans text-[16px] leading-[1.7] text-[#475569]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
