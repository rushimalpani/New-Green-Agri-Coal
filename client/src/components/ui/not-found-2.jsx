import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
			{/* Decorative background element */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2E7D32]/5 rounded-full blur-3xl pointer-events-none" />
			
			<Empty className="relative z-10 border-none">
				<EmptyHeader>
					<EmptyTitle className="font-extrabold text-9xl tracking-tighter text-[#2E7D32]/20 select-none">
						404
					</EmptyTitle>
					<EmptyDescription className="-mt-12 text-lg font-medium text-[#1a1a1a]/80">
						The page you're looking for might have been <br />
						moved or doesn't exist.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent className="mt-8">
					<div className="flex flex-col sm:flex-row gap-4 items-center">
						<Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold px-10 h-14 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/20">
							<Link to="/" className="flex items-center">
								<HomeIcon className="size-5 mr-3" />
								<span>Go Home</span>
							</Link>
						</Button>

						<Button asChild size="lg" variant="outline" className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 font-bold px-10 h-14 rounded-full transition-all hover:scale-105 active:scale-95">
							<Link to="/" className="flex items-center">
								<CompassIcon className="size-5 mr-3" />
								<span>Explore</span>
							</Link>
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		</div>
	);
}
