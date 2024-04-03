const Next = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={61}
    height={90}
    fill="none"
  >
    <path fill="url(#nextButton)" d="M0 0h61v110H0z" />
    <defs>
      <pattern
        id="nextButton"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#next" transform="matrix(.01111 0 0 .00616 0 .223)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPUlEQVR4nO3cPW5TQRTF8UFIOBUNUoRI0kcUdKnT08AKIpQ6IVvICiKxCbZADUX4kBCmp0uHoIicBoT4o1FSGEgsJ2/u8fV757cBn3s8GtvvjV8pZmZmZmZmZmZWgBXgAHgPnNFfZ8A74Dkwkr71wDrwmeEZ19mVK3mIJU+XHb+yL7aLodtXFF335KF7qyh6sugpE5goijbARYu4aBEXLeKiRVy0iIsWcdEiLlrERYu4aBEXLdKHop8B94Ej4DdJ9aHo0dRrPQa+ktDSF13+f71V4BXJ9K7oCrh1cWfnB0mUaIscANgCvpBAr4uugLvAy+gcXXN2lmUAYGeR50kGU3QFbAKfojN1zXkj2Qbg/JzJC/V37ph2/x4s5QDAE+BbdL6uOa8zUNoBgA3gdXTGrjnnHSb1AMBt4BD4lTnnPIOEKu1ybgMn2XPOGiBUaZv1HvAhe86rwocq7fM+XIaclwUPVdrnfbQMOS8LHqq03zo+Zs95VfhQpV1OfxjO0qBgf72bR4MfLG8Q6Log5hkm5QDAU+B7dL6uOa8zUKoB8EUl2WXSceP3unnOG8kyAL7wH1s0vpUVv6Lxzdl2yuzjBj9JokRTD4AP0IQZTZXsI2GBdoEHPuRo/dijl4WLFnHRIi5axEWLuGgRFy3iokVctIiLFnHRPSraj2ODU0XRfsAgmgcM1qfODt2eoujRom7xJ1H/BXYnvOipxxqPB1rymqTkf1b2ft2vev4BOQGO63YhW8lmZmZmZmZmZiW3P0GPZWzo+mSZAAAAAElFTkSuQmCC"
        id="next"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default Next;
