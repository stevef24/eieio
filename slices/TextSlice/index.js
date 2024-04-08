import PrismicRichText from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="inline-flex flex-col items-center w-screen gap-16 py-24 text-center bg-greenGrey">
				<div className="container flex flex-col items-center gap-6">
					<PrismicRichText field={slice.primary.text_field} />
				</div>
			</div>
		</section>
	);
};

export default TextSlice;
