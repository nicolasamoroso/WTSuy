const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={45}
    height={35}
    fill="none"
    className="arrow-icon"
  >
    <path fill="url(#arrowDown)" d="M0 .308h45v34.615H0z" />
    <defs>
      <pattern
        id="arrowDown"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#arrow-down"
          transform="matrix(.00855 0 0 .01111 .115 0)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFklEQVR4nO3aQUoEMRBA0V6pN5+FON7FxVAncuHMHUoaXIiuuzpJvQdZh3xCSCDbBgAAAAAAAAAAAAAAR8rMp8y8ZuYj+3lk5tveoCL0+9mrHcC1InTHnfzXvSL0/d+0/XxVhN7PqO5eK0I/Z+Yt+7rtDQ4P/evm8ZH9RGa+lERuHDvKIzeMHadFbhQ7To/cIHYME3nh2DFc5AVjx7CRF4odw0deIHZME3ni2DFd5Aljx7SRJ4od00eeIHYsE3ng2LFc5AFjrxt5oNjrRx4gdp/IJ8buF/mE2H0jF8YWuSC2yAWxRS6ILXJBbJELYotcEFvkgtgiF8SO9o+Rgtgh8jG/WC+Z+fkzLmW/OgEAAAAAAADYpvANNxEvGQyHOyEAAAAASUVORK5CYII="
        id="arrow-down"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default ArrowDown;
