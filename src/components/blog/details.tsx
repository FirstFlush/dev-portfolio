
interface DetailsProps {
    title: string;
    children: React.ReactNode;
};

const Details = ({ title, children }: DetailsProps) => {
    return (
      <details className="my-4">
        <summary className="cursor-pointer hover:text-teal-500">{title}</summary>
        <div className="mt-2">{children}</div>
      </details>
    );
}

export default Details;