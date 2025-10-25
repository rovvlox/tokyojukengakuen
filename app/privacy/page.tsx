import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "プライバシーポリシー | 東京受験学苑",
  description:
    "東京受験学苑のプライバシーポリシーです。個人情報の取り扱いや安全管理についての方針をご確認いただけます。",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">プライバシーポリシー</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            東京受験学苑（以下「当学苑」）は、個人情報の重要性を認識し、以下の方針に基づいて適切な管理と保護に努めます。
            当学苑が提供するサービスをご利用いただく際は、本ポリシーに同意のうえご利用ください。
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">1. 個人情報の利用目的</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当学苑は、学習プログラムの提供、学習サポート、サービス品質向上、重要なお知らせの配信、各種問い合わせへの対応のために個人情報を利用します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">2. 個人情報の第三者提供</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              法令に基づく場合を除き、事前にご本人の同意を得ることなく第三者へ個人情報を提供することはありません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">3. 個人情報の安全管理</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              個人情報への不正アクセス、紛失、破壊、改ざんおよび漏洩を防ぐため、適切な安全対策を実施します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">4. クッキー（Cookie）について</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              ウェブサイトの利用状況を把握し、サービス改善に役立てるために Cookie を使用する場合があります。ブラウザの設定により Cookie の受け入れを拒否することも可能です。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">5. 個人情報の開示・訂正・削除</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              ご本人からの請求に応じて、保有する個人情報の開示・訂正・削除を適切に対応します。窓口は下記お問い合わせ先をご利用ください。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">6. プライバシーポリシーの改定</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              法令の改正やサービス内容の変更に応じて、本ポリシーの内容を予告なく改定する場合があります。重要な変更がある場合は、ウェブサイト上でお知らせします。
            </p>
          </div>
        </section>

        <div>
          <h2 className="font-semibold text-lg">お問い合わせ先</h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            メール: privacy@tokyojukengakuen.jp
          </p>
        </div>

        <div className="pt-8">
          <Link href="/" className="text-sm text-[#0B6DFF] hover:underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
