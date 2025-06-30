"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConceptSection() {
	return (
		<section className='py-20'>
			<div className='mx-2 md:mx-12'>
				{/* 手機版布局 */}
				<div className='lg:hidden'>
					<div className='grid grid-cols-1 gap-8'>
						{/* 圖片區域 */}
						<div className='relative'>
							<div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
								<Image src='/images/landing-page/concept.png' alt='純淨美味的麵包' fill className='object-cover' sizes='100vw' />
							</div>
						</div>
						{/* 內容區域 */}
						<div className='space-y-6'>
							<div>
								<h2 className='text-5xl font-bold  mb-6 leading-tight drop-shadow-lg'>嚴選天然珍貴成分</h2>

								<div className='space-y-4 leading-relaxed drop-shadow-md'>
									<p className='text-lg'>透過先進萃取技術，保留每一份營養精華。</p>
									<p className='text-lg'>
										我們相信最好的保健，來自於<span className='font-semibold'>純淨與專業</span>的完美結合。
									</p>
									<p className='text-lg font-medium '>讓健康成為您生活中最美好的日常。</p>
								</div>
							</div>

							{/* CTA 按鈕 */}
							<div className='pt-4'>
								<Link href='/about' className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base'>
									→ 對超級成熟度的承諾
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* 電腦版布局 - 文字覆蓋在圖片上 */}
				<div className='hidden lg:block'>
					<div className='relative h-[600px] rounded-2xl overflow-hidden shadow-2xl'>
						<Image src='/images/landing-page/concept.png' alt='純淨美味的麵包' fill className='object-cover' sizes='100vw' />

						{/* 半透明遮罩 */}
						<div className='absolute inset-0 bg-black/20'></div>

						{/* 文字內容覆蓋 */}
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full max-w-2xl ml-12 space-y-8'>
								<div>
									<h2 className='text-5xl font-bold  mb-6 leading-tight drop-shadow-lg'>嚴選天然珍貴成分</h2>

									<div className='space-y-4 leading-relaxed drop-shadow-md'>
										<p className='text-lg'>透過先進萃取技術，保留每一份營養精華。</p>
										<p className='text-lg'>
											我們相信最好的保健，來自於<span className='font-semibold'>純淨與專業</span>的完美結合。
										</p>
										<p className='text-lg font-medium '>讓健康成為您生活中最美好的日常。</p>
									</div>
								</div>

								{/* CTA 按鈕 */}
								<div className='pt-6'>
									<Link href='/about' className='inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg'>
										→ 對超級成熟度的承諾
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
