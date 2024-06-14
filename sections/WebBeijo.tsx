import Image from "apps/website/components/Image.tsx";
import { ImageWidget as Img } from "apps/admin/widgets.ts";
import { FetchInstrumentation } from "deco/deps.ts";

interface Props {
	/** @title Imagem Esquerda*/
	imageLeft?: Img;
	/** @title Imagem Direita*/
	imageRight?: Img;
	width?: number;
	height?: number;
	cta?: CTA;
}

interface CTA {
	text: string;
	/** @format color-input */
	"primary?": string;
}

function ToogleCapibara() {
	document.getElementById("capibara")?.setAttribute("data-status", "up");
	console.log("@Jesus está entra nós");
}

function ToogleKiss() {
	console.log("Beijou");
	const randomId = Math.random();
	const kiss = `<img
                        class=" -z-[1] absolute kiss"
                        id="${randomId}"
                        style="left: ${
													Math.floor(Math.random() * 300) + 150
												}px; bottom: ${
													Math.floor(Math.random() * 300) + 250
												}px; right: 100px; "
                        src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10735/9d10feec-62bf-41c9-bf61-5491aded67c2"
                        width= "50"
                        height= "50"
                    />`;
	const daddyCapibara = document.getElementById("daddycapibara");
	daddyCapibara?.insertAdjacentHTML("beforeend", kiss);

	setTimeout(() => {
		const kisses = document.getElementById(`${randomId}`);
		kisses?.remove();
	}, 3000);
}

export default function WebBeijo({
	imageLeft,
	imageRight,
	width,
	height,
	cta,
}: Props) {
	return (
		<div className={"flex justify-center"}>
			<div class="relative" id={"daddycapibara"}>
				<button
					className="absolute bottom-[34%] left-[35%] z-20 btn btn-secondary"
					onClick={() => {
						ToogleCapibara();
						ToogleKiss();
					}}
				>
					Clique Aqui
				</button>
				<Image
					class={"z-10"}
					src={imageLeft ?? ""}
					width={width ?? 100}
					height={height}
				/>

				<Image
					id={"capibara"}
					class={
						"absolute bottom-0 left-10 -z-[1] data-[status=up]:-translate-y-[40%] transition-all"
					}
					src={
						"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10735/a89aaabd-d5d4-4373-ac88-26d7774564fd"
					}
					width={200}
					height={300}
				/>
			</div>
			<div class={"flex flex-col items-center justify-center"}>
				<h1 className={"font-bold text-lg"}> Barraca do WebBeijo 💋 </h1>
				<Image src={imageRight ?? ""} width={width ?? 100} height={height} />
			</div>
		</div>
	);
}
