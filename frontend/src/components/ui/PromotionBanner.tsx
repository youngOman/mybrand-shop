import Link from "next/link";

export default function PromotionBanner() {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">限時優惠活動</h3>
        <p className="text-green-100 mb-8 text-lg">
          全館滿 NT$ 2,000 免運費，滿 NT$ 3,000 享 9 折優惠
        </p>
        <Link
          href="/products"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
        >
          立即選購
        </Link>
      </div>
    </section>
  );
}