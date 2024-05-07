import { useContext } from 'react';
import { NovuContext } from '../store/teleflow-provider.context';
import { useProviderCheck } from './useProviderCheck';
import { ITeleflowProviderContext } from '../shared/interfaces';

/**
 * custom hook for accessing NovuContext
 * @returns ITeleflowProviderContext
 */
export function useTeleflowContext(): ITeleflowProviderContext {
  const novuContext = useContext<ITeleflowProviderContext>(NovuContext);
  const context = useProviderCheck<ITeleflowProviderContext>(novuContext);

  return context;
}
