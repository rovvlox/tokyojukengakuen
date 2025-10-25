"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "返金保証の条件を教えてください。",
      answer:
        "初回申し込みから7日以内であれば、理由を問わず全額返金いたします。マイページから申請いただくだけで、3営業日以内に返金処理を行います。",
    },
    {
      question: "オンライン自習室はどのように利用しますか。",
      answer:
        "ZOOMからログインし、カメラをONにして入室します。他の利用者と一緒に学習することで集中力が高まります。カメラOFFでの利用も可能ですが、学習効果は低下する傾向があります。",
    },
    {
      question: "初回面談はどのように行われますか。",
      answer:
        "Zoomを使用し、決まった曜日・時間に30分程度実施します。現役 東大・早稲田・慶應生等教師陣が志望校や現状の成績、学習スタイルなどを伺います。",
    },
    {
      question: "途中で解約できますか。",
      answer:
        "はい、いつでも解約可能です。最低利用期間はありません。解約申請は月末までに行っていただければ、翌月から課金が停止されます。",
    },
    {
      question: "どのような生徒に向いていますか。",
      answer:
        "志望校は決まっているが学習計画が立てられない方、自習室では集中できない方、定期的なフィードバックが欲しい方に最適です。高校1年生から浪人生まで幅広く対応しています。",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.4] text-[#0F172A] text-center mb-12">
          よくある質問
        </h2>
        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#A8B0C0] py-4">
                <AccordionTrigger className="text-left font-sans text-[16px] text-[#0F172A] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[16px] leading-[1.7] text-[#616C7C] pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
