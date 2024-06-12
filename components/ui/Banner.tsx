import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Banner from "site/sections/Banner.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
	srcMobile: ImageWidget;
	srcDesktop?: ImageWidget;
	/**
	 * @description Image alt text
	 */
	alt: string;
	/**
	 * @description When you click you go to
	 */
	href: string;
	/**
	 * @title Largura Mobile
	 * @description Banner's width mobile
	 */
	widthMobile: number;
	/**
	 * @title Altura Mobile
	 * @description Banner's height mobile
	 */
	heightMobile?: number;

	/**
	 * @title Largura Desktop
	 * @description Banner's width desktop
	 */
	widthDesktop: number;
	/**
	 * @title Altura Desktop
	 * @description Banner's height desktop
	 */
	heightDesktop?: number;
}

export type BorderRadius =
	| "none"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "full";

export interface Props {
	title?: string;
	/**
	 * @description Default is 2 for mobile and all for desktop
	 */
	itemsPerLine: {
		/** @default 2 */
		mobile?: 1 | 2;
		/** @default 4 */
		desktop?: 1 | 2 | 4 | 6 | 8;
	};
	/**
	 * @description Item's border radius in px
	 */
	borderRadius: {
		/** @default none */
		mobile?: BorderRadius;
		/** @default none */
		desktop?: BorderRadius;
	};
	banners: Banner[];
}

const MOBILE_COLUMNS = {
	1: "grid-cols-1",
	2: "grid-cols-2",
};

const DESKTOP_COLUMNS = {
	1: "sm:grid-cols-1",
	2: "sm:grid-cols-2",
	4: "sm:grid-cols-4",
	6: "sm:grid-cols-6",
	8: "sm:grid-cols-8",
};

const RADIUS_MOBILE = {
	none: "rounded-none",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	"3xl": "rounded-3xl",
	full: "rounded-full",
};

const RADIUS_DESKTOP = {
	none: "sm:rounded-none",
	sm: "sm:rounded-sm",
	md: "sm:rounded-md",
	lg: "sm:rounded-lg",
	xl: "sm:rounded-xl",
	"2xl": "sm:rounded-2xl",
	"3xl": "sm:rounded-3xl",
	full: "sm:rounded-full",
};

const DEFAULT_PROPS: Props = {
	title: "Summer bags",
	banners: [
		{
			alt: "a",
			href: "a",
			srcMobile:
				"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/82727553-f670-4e7c-b9c2-9452aed1955f",
			srcDesktop:
				"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
		},
		{
			alt: "a",
			href: "a",
			srcMobile:
				"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/c5c6bdf6-5555-488c-8b14-719e4158dea6",
			srcDesktop:
				"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3e2b7824-d75c-4704-8d32-621bfc9b20cf",
		},
	],
	borderRadius: {
		mobile: "3xl",
		desktop: "3xl",
	},
	itemsPerLine: {
		mobile: 2,
		desktop: 2,
	},
};

export default function BannnerGrid(props: Props) {
	const {
		title,
		itemsPerLine,
		borderRadius,
		banners = [],
	} = { ...DEFAULT_PROPS, ...props };

	return (
		<section class="container w-full px-4 md:px-0 mx-auto">
			{title && (
				<div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
					<h2 class="text-lg leading-5 font-semibold uppercase">{title}</h2>

					<div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
				</div>
			)}
			<div
				class={`grid gap-4 md:gap-6 ${
					MOBILE_COLUMNS[itemsPerLine?.mobile ?? 2]
				} ${DESKTOP_COLUMNS[itemsPerLine?.desktop ?? 4]}`}
			>
				<a>
					<img
						class={`md:hidden`}
						media="(max-width: 767px)"
						src={props.banners[0].srcMobile}
						width={props.banners[0].widthMobile}
						height={props.banners[0].heightMobile}
					/>
					<img
						class={`hidden md:block`}
						media="(min-width: 768px)"
						src={props.banners[0].srcDesktop}
						width={props.banners[0].widthDesktop}
						height={props.banners[0].heightDesktop}
					/>
				</a>
			</div>
		</section>
	);
}
