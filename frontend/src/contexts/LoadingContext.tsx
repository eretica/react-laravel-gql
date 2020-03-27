import React, {useState, FC, ReactElement} from 'react';

type RenderProps = {
  loading: boolean
  setLoading: (bool: boolean) => void
}

type Props = {
  initialValue?: RenderProps['loading']
  children: (props: RenderProps) => ReactElement
}

export const LoadingProvider: FC<Props> = ({children, initialValue = false}) => {
  const [loading, setLoading] = useState(initialValue);

  return children({loading, setLoading})
};
