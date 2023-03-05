---
to: <%= path %>/<%= componentName %>.tsx
---
import { FC } from 'react';
import cl from './<%= componentName %>.module.scss';

interface I<%= componentName %> {

}

const <%= componentName %>: FC<I<%= componentName %>> = () => {
  return (
    <>

    </>
  );
};

export default <%= componentName %>;