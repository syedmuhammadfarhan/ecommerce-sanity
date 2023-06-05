import { FC, ReactNode } from "react";

// const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <div className="max-w-7xl mx-auto">{children}</div>;
// };

// export default Wrapper;

export default function Wrapper ({ children }: { children: React.ReactNode })  {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

