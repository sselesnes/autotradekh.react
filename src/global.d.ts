declare namespace JSX {
  interface IntrinsicElements {
    img: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > & {
      fetchpriority?: "high" | "low" | "auto";
    };
  }
}
