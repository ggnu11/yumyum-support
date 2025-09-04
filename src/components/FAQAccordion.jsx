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
        "YumYum은 나만의 맛집 다이어리 앱입니다. 내가 직접 찾은 맛집을 손쉽게 기록하고, 언제든 다시 꺼내볼 수 있습니다. 위치, 방문 날짜, 평점, 사진, 메모까지 한눈에 정리하여 개인 맛집 노트를 만들 수 있습니다.",
    },
    {
      question: "맛집은 어떻게 등록하나요?",
      answer:
        "지도 화면에서 원하는 위치를 꾹 누르면 핀이 생성됩니다. 그 후 화면 오른쪽 + 버튼을 눌러 맛집을 등록할 수 있습니다. 등록 시 가게 날짜, 제목, 내용, 마커, 평점, 사진 등을 추가할 수 있습니다.",
    },
    {
      question: "등록한 맛집 정보를 수정할 수 있나요?",
      answer:
        "네, 가능합니다. 왼쪽 상단의 햄버거 메뉴를 클릭하고 '피드' 메뉴로 이동하여 수정할 맛집을 선택하세요. 오른쪽 상단의 점 세 개(⋮) 버튼을 클릭하면 수정할 수 있습니다.",
    },
    {
      question: "등록한 맛집을 검색할 수 있나요?",
      answer:
        "네, 홈 화면 오른쪽 상단에 위치한 검색 아이콘을 클릭하여 등록된 맛집을 이름으로 검색할 수 있습니다.",
    },
    {
      question: "즐겨찾기 기능은 어떻게 사용하나요?",
      answer:
        "피드에서 원하는 맛집의 상세 페이지로 이동한 후, 상세 페이지 하단에 있는 별표(★) 버튼을 클릭하면 즐겨찾기로 등록됩니다. 즐겨찾기 목록은 피드 화면 오른쪽 상단의 별표(★) 아이콘으로 확인할 수 있습니다.",
    },
    {
      question: "캘린더에서 맛집을 확인할 수 있나요?",
      answer:
        "네, 저장한 맛집 방문 일정을 캘린더에서 바로 확인할 수 있습니다. 방문 날짜별로 정리되어 언제 어느 맛집을 방문했는지 쉽게 볼 수 있습니다.",
    },
    {
      question: "다크 모드를 사용할 수 있나요?",
      answer:
        "네, 다크 모드를 지원합니다. 왼쪽 상단의 햄버거 메뉴를 클릭하고 메뉴 목록 하단에 있는 '설정' 버튼을 누르세요. 설정 화면에서 다크 모드 전환을 통해 화면 테마를 변경할 수 있습니다.",
    },
    {
      question: "프로필 정보를 수정할 수 있나요?",
      answer:
        "네, 가능합니다. 왼쪽 상단의 햄버거 메뉴를 클릭하고 '설정'으로 이동하세요. 설정 화면에서 프로필 정보를 수정할 수 있습니다.",
    },
    {
      question: "앱 이용료가 있나요?",
      answer:
        "YumYum 앱은 완전 무료로 이용하실 수 있습니다. 모든 기능을 제한 없이 사용할 수 있으며, 추가 요금이나 구독료는 없습니다.",
    },
    {
      question: "데이터가 삭제될 걱정은 없나요?",
      answer:
        "사용자의 소중한 맛집 기록은 안전하게 저장됩니다. 다만 앱을 삭제하거나 기기를 변경하실 때는 데이터 백업을 권장드립니다. 중요한 기록은 스크린샷으로 백업해두시는 것도 좋은 방법입니다.",
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
