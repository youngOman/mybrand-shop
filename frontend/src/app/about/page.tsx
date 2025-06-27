import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-green-600">MyBrand Shop</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
                  首頁
                </Link>
                <Link href="/products" className="text-gray-500 hover:text-green-600 px-3 py-2 text-sm font-medium">
                  產品總覽
                </Link>
                <Link href="/about" className="text-green-600 hover:text-green-800 px-3 py-2 text-sm font-medium">
                  品牌介紹
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              關於 <span className="text-green-600">MyBrand Shop</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              我們相信健康是人生最珍貴的財富，致力於為每個人提供最純淨、最有效的保養食品
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">品牌故事</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MyBrand Shop 誕生於一個簡單而純粹的信念：每個人都應該擁有健康、活力的生活。
                  我們的創辦人在經歷了現代生活的壓力與挑戰後，深刻體會到保養身體的重要性。
                </p>
                <p>
                  在尋找優質保養食品的過程中，我們發現市面上充斥著許多品質參差不齊的產品，
                  這讓我們決定親自把關，為消費者提供真正值得信賴的健康選擇。
                </p>
                <p>
                  經過多年的研究與嚴格篩選，我們與世界各地的優質供應商建立了長期合作關係，
                  確保每一項產品都符合最高的品質標準。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">天然純淨</h3>
                <p className="text-gray-600">嚴選天然成分，拒絕人工添加</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">創辦人理念</h2>
            <p className="text-gray-600">用心守護每一位顧客的健康</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">陳醫師</h3>
              <p className="text-green-600 font-medium mb-4">營養學博士 / 創辦人</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                「營養補充不應該是複雜的事情，我們的使命是將最好的營養科學轉化為簡單易懂的產品，
                讓每個人都能輕鬆維持健康的生活方式。」
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👩‍🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">林研究員</h3>
              <p className="text-blue-600 font-medium mb-4">食品科技專家 / 共同創辦人</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                「品質是我們的第一要務。從原料採購到成品出廠，每一個環節都經過嚴格把關，
                確保顧客收到的每一份產品都是最高品質的保證。」
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">王執行長</h3>
              <p className="text-purple-600 font-medium mb-4">企業管理碩士 / 執行長</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                「我們不只是販售產品，更是在傳遞一種健康的生活態度。透過優質的服務和產品，
                我們希望成為每個家庭健康生活的最佳夥伴。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心價值</h2>
            <p className="text-gray-600">我們堅持的信念與承諾</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">天然純淨</h3>
              <p className="text-gray-600 text-sm">嚴選天然成分，無添加人工防腐劑與化學物質</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">科學配方</h3>
              <p className="text-gray-600 text-sm">基於科學研究，精心調配最適營養比例</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">品質保證</h3>
              <p className="text-gray-600 text-sm">通過國際認證，每批產品都經過嚴格檢驗</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">用心服務</h3>
              <p className="text-gray-600 text-sm">專業諮詢團隊，提供個人化健康建議</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">發展歷程</h2>
            <p className="text-gray-600">一步一腳印，堅持走向健康的未來</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200"></div>
            
            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2020 年</h3>
                    <h4 className="text-green-600 font-semibold mb-2">品牌成立</h4>
                    <p className="text-gray-600 text-sm">三位創辦人懷著共同理念，正式成立 MyBrand Shop</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2021 年</h3>
                    <h4 className="text-blue-600 font-semibold mb-2">首批產品上市</h4>
                    <p className="text-gray-600 text-sm">推出維生素 C 和膠原蛋白系列，獲得市場好評</p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2022 年</h3>
                    <h4 className="text-purple-600 font-semibold mb-2">產品線擴充</h4>
                    <p className="text-gray-600 text-sm">新增護眼、心血管、腸胃保健等多元產品線</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2023 年</h3>
                    <h4 className="text-yellow-600 font-semibold mb-2">品質認證</h4>
                    <p className="text-gray-600 text-sm">通過 ISO 22000 食品安全管理系統認證</p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2024 年</h3>
                    <h4 className="text-green-600 font-semibold mb-2">數位轉型</h4>
                    <p className="text-gray-600 text-sm">正式推出線上購物平台，提供更便利的購物體驗</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">認證與獎項</h2>
            <p className="text-gray-600">專業認證，品質保證</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl">🏅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">ISO 22000</h3>
              <p className="text-gray-600 text-sm">食品安全管理系統</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">SGS 檢驗</h3>
              <p className="text-gray-600 text-sm">國際品質認證</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-3xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">優良商店</h3>
              <p className="text-gray-600 text-sm">消費者信賴獎</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">五星評價</h3>
              <p className="text-gray-600 text-sm">顧客滿意度 98%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">加入我們的健康旅程</h2>
          <p className="text-green-100 mb-8 text-lg">
            讓 MyBrand Shop 成為您健康生活的最佳夥伴
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              探索產品
            </Link>
            <Link
              href="/"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              回到首頁
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">MyBrand Shop</h5>
              <p className="text-gray-400">
                專業的保養食品品牌，致力於提供最優質的健康產品
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">快速連結</h6>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">首頁</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white">產品總覽</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">品牌介紹</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">客戶服務</h6>
              <ul className="space-y-2">
                <li><span className="text-gray-400">客服專線：02-1234-5678</span></li>
                <li><span className="text-gray-400">服務時間：週一至週五 9:00-18:00</span></li>
                <li><span className="text-gray-400">Email：service@mybrand.com</span></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">關注我們</h6>
              <div className="flex space-x-4">
                <span className="text-2xl">📘</span>
                <span className="text-2xl">📷</span>
                <span className="text-2xl">📺</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 MyBrand Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}