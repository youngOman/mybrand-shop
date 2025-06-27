"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselItem {
	id: number;
	imageUrl: string;
}

const carouselItems: CarouselItem[] = [
	{
		id: 1,
		imageUrl: "/images/landing-page/hero-1.jpg",
	},
	{
		id: 2,
		imageUrl: "/images/hero-2.jpg",
	},
	{
		id: 3,
		imageUrl: "/images/hero-3.jpg",
	},
];

export default function HeroSwiper() {
	const [isLoading, setIsLoading] = useState(true);
	const swiperRef = useRef<SwiperClass | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='relative w-full h-screen'>
			{/* Loading overlay */}
			{isLoading && (
				<div className='absolute inset-0 bg-white z-50 flex items-center justify-center'>
					<div className='flex flex-col items-center'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-600'></div>
						<p className='mt-4 text-green-600 font-medium'>載入中...</p>
					</div>
				</div>
			)}

			<Swiper
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				navigation={{
					nextEl: ".swiper-button-next-custom",
					prevEl: ".swiper-button-prev-custom",
				}}
				pagination={{
					clickable: true,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				className='w-full h-full'
			>
				{carouselItems.map((item) => (
					<SwiperSlide key={item.id}>
						<div className='relative w-full h-full'>
							<Image src={item.imageUrl} alt={`Hero image ${item.id}`} fill className='object-cover' priority={item.id === 1} sizes='100vw' />
						</div>
					</SwiperSlide>
				))}

				{/* Custom Navigation */}
				<div className='swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
					<div className='w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300'>
						<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
						</svg>
					</div>
				</div>

				<div className='swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
					<div className='w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300'>
						<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
						</svg>
					</div>
				</div>
			</Swiper>

			{/* Custom pagination styles */}
			<style jsx global>{`
				.swiper-pagination {
					bottom: 2rem !important;
				}

				.swiper-pagination-bullet {
					width: 12px !important;
					height: 12px !important;
					background: rgba(255, 255, 255, 0.5) !important;
					opacity: 1 !important;
				}

				.swiper-pagination-bullet-active {
					background: rgb(34, 197, 94) !important;
				}
			`}</style>
		</div>
	);
}
