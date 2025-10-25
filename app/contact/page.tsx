import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "お問い合わせ | 東京受験学苑",
  description:
    "東京受験学苑へのご質問や個別相談のご予約はこちらから。渋谷・100BANCHでの来校相談も受け付けています。",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">お問い合わせ</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            東京受験学苑へのご質問、ご相談、ご要望は以下のフォームまたは連絡先より受け付けています。
            受験戦略のご相談から資料請求まで、お気軽にお問い合わせください。
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">メールでのお問い合わせ</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              <a href="mailto:support@tokyojukengakuen.jp" className="text-[#0B6DFF] hover:underline">
                support@tokyojukengakuen.jp
              </a>
              宛に、ご氏名・ご連絡先・お問い合わせ内容をご記入のうえ送信してください。
              <br />
              通常2営業日以内にご返信いたします。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">来校でのご相談</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              〒150-0002 東京都渋谷区渋谷3-27-1 100BANCH にて個別相談を承っています。
              <br />
              事前予約制のため、メールまたはお問い合わせフォームよりご希望日時をお知らせください。
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-semibold text-lg">オンラインお問い合わせフォーム</h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            以下の項目をご記入のうえ送信してください。折り返し、担当者よりご連絡いたします。
          </p>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A]" htmlFor="name">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm focus:border-[#0B6DFF] focus:outline-none"
                placeholder="山田 太郎"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A]" htmlFor="email">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm focus:border-[#0B6DFF] focus:outline-none"
                placeholder="example@tokyojukengakuen.jp"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A]" htmlFor="message">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 rounded-md border border-[#CBD5E1] bg-white px-3 py-2 text-sm focus:border-[#0B6DFF] focus:outline-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0B6DFF] px-6 text-sm font-medium text-white transition-colors hover:bg-[#094FCC]"
            >
              送信する（デモ）
            </button>
          </form>
        </section>

        <div className="pt-8">
          <Link href="/" className="text-sm text-[#0B6DFF] hover:underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
