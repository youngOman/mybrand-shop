interface ValueItem {
  id: number;
  title: string;
  description: string;
  emoji: string;
  bgColor: string;
  textColor: string;
}

const brandValues: ValueItem[] = [
  {
    id: 1,
    title: "天然純淨",
    description: "嚴選天然成分，無添加人工防腐劑，確保產品純淨安全",
    emoji: "🌱",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    id: 2,
    title: "科學配方",
    description: "結合現代營養學研究，精心調配最適比例，發揮最佳效果",
    emoji: "🔬",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    id: 3,
    title: "用心服務",
    description: "專業團隊提供諮詢服務，為每位顧客量身推薦適合的產品",
    emoji: "💝",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  }
];

export default function BrandValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">品牌理念</h3>
          <p className="text-gray-600">堅持品質，守護健康</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandValues.map((value) => (
            <div key={value.id} className="text-center">
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${value.textColor} text-2xl`}>{value.emoji}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}