import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
