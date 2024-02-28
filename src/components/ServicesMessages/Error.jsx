import { useState, useEffect } from 'react';

export const Error= ({ resetError, errorMessage })=>{
    
console.log("Error : ")

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      resetError();
    }, 3000);

    return () => clearTimeout(timer);
  }, [resetError]);

  return (
    <>
      {isVisible && (
        <div
          style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
            // top: '50%',
            // left: '50%',
            // marginLeft: -140,
            maxWidth: 400,
            backgroundColor: 'red',
            borderRadius: 25,
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          {errorMessage.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      )}
    </>
  );
}
