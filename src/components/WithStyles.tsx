

interface WithStylesProps {
  description: string;
  headline: string;
  image: string;
}

const WithStyles: React.FC<WithStylesProps> = ({ description, headline, image }) => {
  return (
    <div className="px-4">
      <img src={image} alt={headline} />
      <h2 className="font-bold text-center text-green-500 text-xl tracking-widest">{headline}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default WithStyles;
