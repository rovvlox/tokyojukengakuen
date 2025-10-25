"use client"

import type React from "react"

import { useState } from "react"

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    agreed: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください。"
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください。"
    }

    if (!formData.agreed) {
      newErrors.agreed = "規約とポリシーへの同意が必要です。"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // シミュレーション: 実際にはStripe Checkoutへリダイレクト
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("お申し込みを受け付けました。次の手順をご案内します。")
    setIsSubmitting(false)
  }

  return (
    <section id="application" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.4] text-[#0F172A] text-center mb-12">
          申し込み
        </h2>
        <div className="max-w-[640px] mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "134.69%" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfkCTwnBXIuCpfraDGWlzq1kV15OS3TkoqNZx5MRAaKE7ysgQ/viewform?embedded=true"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="申し込みフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
