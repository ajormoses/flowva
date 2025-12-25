interface Props {
  title: string;
  desc: string;
  children: React.ReactNode;
}

const FormAuth: React.FC<Props> = ({ title, desc, children }) => {
  return (
    <div className="container">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 w-full max-w-[420px] rounded-lg bg-white p-10">
          <div className="text-center flex flex-col gap-2.5 mb-3">
            <h1 className="text-2xl font-bold text-primary">{title}</h1>
            <p className="text-grey text-sm">{desc}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default FormAuth;
