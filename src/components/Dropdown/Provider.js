import React, { createContext, useState, useCallback, useEffect } from 'react';

export const Context = createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const registerOption = useCallback(({
    id,
    optionDimensions,
    optionCenterX,
    WrappedContent,
    backgroundHeight,
  }) => {
    setOptions((items) => [
      ...items,
      {
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        backgroundHeight,
      },
    ]);
  }, [setOptions]);

  const updateOptionProps = useCallback((optionId, props) => {
    setOptions((items) => {
      return items.map((i) => {
        if (i.id === optionId) i = { ...i, ...props };
        return i;
      });
    });
  }, [setOptions]);

  const getOptionById = useCallback((id) => options.find((i) => i.id === id), [options]);

  const deleteOptionById = useCallback((id) => {
    setOptions((items) => items.filter((i) => i.id !== id))
  }, [setOptions]);

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
