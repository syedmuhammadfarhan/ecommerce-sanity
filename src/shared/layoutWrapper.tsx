import { FC, ReactNode } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Wrapper;

// const Wrapper = ({ children }: { children: ReactNode }) => {
//   return <div>{children}</div>;
// };

// export default Wrapper;
