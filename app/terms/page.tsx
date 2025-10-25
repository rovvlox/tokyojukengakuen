import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">利用規約</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            この利用規約（以下「本規約」）は、東京受験学苑（以下「当学苑」）が提供するすべてのサービスの利用条件を定めるものです。
            会員登録またはサービスの利用に際しては、本規約に同意したものとみなします。
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">第1条（適用）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              本規約は、当学苑と利用者との間のサービス利用に関わる一切の関係に適用されます。当学苑は必要に応じて個別規定を設けることができ、個別規定が本規約と矛盾する場合は個別規定が優先します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第2条（利用登録）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              利用希望者が当学苑の定める方法によって利用登録を申請し、当学苑が承認することによって利用登録が完了します。虚偽の情報が判明した場合には登録を取り消すことがあります。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第3条（禁止事項）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              利用者は、法令または公序良俗に違反する行為、サービスの運営を妨害する行為、他の利用者の情報を収集する行為、当学苑の知的財産権を侵害する行為などを禁止します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第4条（サービスの提供の停止）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当学苑は、システム保守や天災、その他やむを得ない事由によりサービスの提供を停止することがあります。停止によって利用者に損害が生じた場合でも、当学苑は責任を負いません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第5条（保証の否認および免責事項）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当学苑は、サービスに関して適法性・正確性・有用性を保証しません。利用者自身の判断と責任でサービスをご利用ください。利用者に損害が生じた場合でも、責任を負いません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第6条（規約の変更）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当学苑は、必要と判断した場合には利用者に通知することなく本規約を変更することができます。変更後の規約はウェブサイトに掲載された時点で効力を生じます。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第7条（未成年者の利用）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              利用者が18歳未満の未成年者である場合は、法定代理人(親権者または未成年後見人)の同意を得た上で本サービスを利用するものとします。未成年者が本サービスに登録した時点で、法定代理人の同意があったものとみなします。
            </p>
          </div> 
          <div>
            <h2 className="font-semibold text-lg">第8条（退会）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              1. 利用者は、当学苑所定の方法により、いつでも退会することができます。
              2. 退会後は、本サービスを利用することができなくなります。
              3. 既に支払われた料金は、理由の如何を問わず返金いたしません。
              4. 退会後も、本規約の関連条項は有効に存続するものとします。
            </p>
          </div> 
          <div>
            <h2 className="font-semibold text-lg">第9条（準拠法および管轄裁判所）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              1. 本規約の準拠法は日本法とし、本規約の解釈および適用については日本法に従うものとします。
              2. 本規約または本サービスに関連して当学苑と利用者との間で生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </div> 
        </section>

        <div>
          <h2 className="font-semibold text-lg">附則</h2>
          <p className="text-sm text-[#475569] leading-relaxed">2025年11月1日 制定</p>
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
