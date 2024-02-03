import { useState, useEffect } from 'react';

export const Error= ({ resetError, errorMessage })=>{
    
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      resetError();
    }, 2000);

    return () => clearTimeout(timer);
  }, [resetError]);

  return (
    <>
      {isVisible && (
        <div
          style={{
            flex: 1,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: -140,
            width: 280,
            backgroundColor: 'red',
            borderRadius: 25,
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          {errorMessage}
          {'\n'}
          {'\n'} probably wrong login or password
          {'\n'}
          {'\n'} all fields must be filled in
        </div>
      )}
    </>
  );
}
