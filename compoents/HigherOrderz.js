import * as React from 'react';

const UpdatedComponent = (OrginalComp) => {
  const NewComponent = () => {
    const [count, setCount] = React.useState(0);
    const incssz = () => {
      setCount(count + 1);
    };
    return <OrginalComp count={count} incssz={incssz} />;
  };
  return NewComponent;
};
export default UpdatedComponent;
