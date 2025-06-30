"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
	currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// 滾動超過 10px 時顯示白底
			const scrolled = window.scrollY > 10;
			setIsScrolled(scrolled);
		};
		// 初始檢查
		handleScroll();
		// 滾動監聽器
		window.addEventListener("scroll", handleScroll);
		// 清理函數
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActive = (page: string) => currentPage === page;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
				${isScrolled ? "bg-white shadow-xl" : "bg-transparent"}
				`}
		>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<Link href='/'>
							<h1 className='text-2xl font-bold text-green-600'>MyBrand Shop</h1>
						</Link>
					</div>
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-8'>
							<Link href='/' className={`px-3 py-2 text-sm font-medium ${isActive("home") ? "text-green-600 hover:text-green-800" : "text-gray-500 hover:text-green-600"}`}>
								首頁
							</Link>
							<Link href='/products' className={`px-3 py-2 text-sm font-medium ${isActive("products") ? "text-green-600 hover:text-green-800" : "text-gray-500 hover:text-green-600"}`}>
								產品總覽
							</Link>
							<Link href='/about' className={`px-3 py-2 text-sm font-medium ${isActive("about") ? "text-green-600 hover:text-green-800" : "text-gray-500 hover:text-green-600"}`}>
								品牌介紹
							</Link>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button className='text-gray-500 hover:text-green-600 p-2'>
							<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
