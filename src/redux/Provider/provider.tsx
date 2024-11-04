'use client';
import { Provider } from 'react-redux';
import { store } from '../store';
interface Children {
  children: React.ReactNode;
}
export default function ReduxProvider({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}