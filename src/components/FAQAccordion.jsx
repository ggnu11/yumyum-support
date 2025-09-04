import { useState } from "react";

/**
 * FAQ 아코디언 컴포넌트
 * 자주 묻는 질문과 답변을 펼치고 접을 수 있는 인터랙티브 컴포넌트
 */
const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set());

  /**
   * 아코디언 아이템 토글 함수
   * @param {number} index - 토글할 아이템의 인덱스
   */
  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  /** FAQ 데이터 */
  const faqData = [
    {
      question: "YumYum 앱은 어떤 서비스인가요?",
      answer:
        "YumYum은 맛있는 음식을 찾고 공유할 수 있는 소셜 플랫폼입니다. 사용자들이 음식 사진을 업로드하고, 리뷰를 작성하며, 다른 사용자들과 맛집 정보를 공유할 수 있습니다.",
    },
    {
      question: "회원가입은 어떻게 하나요?",
      answer:
        "앱을 다운로드한 후, 이메일 또는 소셜 로그인(구글, 애플)을 통해 간단하게 회원가입할 수 있습니다. 본인 인증 절차는 필요하지 않으며, 즉시 서비스를 이용하실 수 있습니다.",
    },
    {
      question: "앱 이용료가 있나요?",
      answer:
        "YumYum 앱의 기본 기능은 모두 무료로 이용하실 수 있습니다. 향후 프리미엄 기능이 추가될 수 있지만, 현재는 모든 기능을 무료로 제공하고 있습니다.",
    },
    {
      question: "개인정보는 어떻게 관리되나요?",
      answer:
        "사용자의 개인정보는 철저하게 보호됩니다. 수집되는 정보는 서비스 제공에 필요한 최소한의 정보만 수집하며, 상세한 내용은 개인정보처리방침을 참고해 주세요.",
    },
    {
      question: "음식 사진은 어떻게 업로드하나요?",
      answer:
        "앱 하단의 '+' 버튼을 탭하면 카메라 또는 갤러리에서 사진을 선택할 수 있습니다. 사진과 함께 음식점 정보, 평점, 리뷰를 작성하여 업로드할 수 있습니다.",
    },
    {
      question: "다른 사용자를 팔로우할 수 있나요?",
      answer:
        "네, 마음에 드는 사용자를 팔로우하여 그들의 최신 음식 포스트를 피드에서 확인할 수 있습니다. 또한 팔로우한 사용자들의 맛집 추천을 우선적으로 볼 수 있습니다.",
    },
    {
      question: "리뷰를 수정하거나 삭제할 수 있나요?",
      answer:
        "네, 본인이 작성한 리뷰는 언제든지 수정하거나 삭제할 수 있습니다. 리뷰 상세 페이지에서 '수정' 또는 '삭제' 버튼을 이용해 주세요.",
    },
    {
      question: "부적절한 콘텐츠를 신고하고 싶어요.",
      answer:
        "부적절한 콘텐츠나 사용자를 발견하시면 해당 게시물의 '신고' 버튼을 눌러 신고해 주세요. 신고된 내용은 빠르게 검토하여 적절한 조치를 취하겠습니다.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
            aria-expanded={openItems.has(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-medium text-gray-900 pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                openItems.has(index) ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`transition-all duration-200 ease-in-out ${
              openItems.has(index)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
