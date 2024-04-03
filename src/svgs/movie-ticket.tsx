const MovieTicket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={62}
    height={90}
    fill="none"
  >
    <path fill="url(#movieTicket)" d="M.18 0h61v110h-61z" />
    <defs>
      <pattern
        id="movieTicket"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#movie-ticket"
          transform="matrix(.01111 0 0 .00616 0 .223)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR4nO3cTUsVUQDGcUXTkkDUpEUiUUb7WkelvVNfIcpWQRb4DapN0CeQylYtW0itiorMl2qRKbTJXhYFBWZR1i77x4Fjd7BxvDNz5szM9fnB7O7Mfc5zh3m/U1cnIiIiIiIiIiIiIlGA9cAF4BnwE1liungKnAeaU61FQBcw/W/RspKXpqs0a7JKjld2/DXbbi4knoEkRZttssQzmaTohZhfIrCQpGhJQEV7oqI9UdGeqGhPVLQntVT0azsVUq0UfQeot9NdCqhWij4eyHeCAqqFor8FL9oATcA8BVMLRQ+HZLxJwdRC0UdCMh6lYMpe9FezqQjJuA74QoGUvehrETmvUyBlL/pgRM5DlLzocYphDmiMyNloP1MEY7GLtoM4ALzNOfxQFTmHcs74BuhLVHJgEB3ARI6D6KsiY1+O+caA9lQlBwbSDsw6CPUHOAv0ANsCk/kx25ZNrQlytoYsp2PZd/XYDCZLWuaaS5uTkgOD2Ocg3Iu6grCPB6RhutiTVbiHKcPNJ37QxO04uuyxeRr3swzYT3qfzU42s5DV7eBNhrROZRlyJ24sApeBhszC/p+9wX6n+W4XdmQZtgW3HgNbMgtcyb0ZuOc4+4YsA2/EvTngWIaZzaHfpwxyt5Rh0xG2B78SdQaYIGujXaaLwzjvm44zZGsc6HaQs9vDJYTTbloNH8AjsvfR3BNMkbHeLiNrD9y2WxnAfvwYcZB1xENOs0na66bdSvAOe+HEh/6CHO9XY9bldY5N9r8aPvwGOh1k7rTL8mHSrIhpAx8G3uPPaNqSA9lHPeZ+Z25AJA2ax6XRQYdFD+aQfyJJ0Dxsr+LY+JKdIo+5zbLyGEAZip5eJc9W4Eng889XO2kAZnwPogxFX4zIchL4ETLPL/PvsYj5zJrvVRmK3rXCHZNbVcx7O2zPD+zGs6IX/WH52SDQG/MMz3y2N+Qs0Szbm6IXPbNUtH148WrC68aLdt6mQNGv8KjoRRs37LZ4ivSm7LKG8awMRdcEFe2JivZERXuioj1R0Z6oaE9UdIGL1otR4vuepGi96sfTq37M+9wknnNJim528AzxWjIV9he9OM8Rq+zqSk73sKZdswfsbXXtICsW7A3sc4nXZBEREREREREREZG6NeMvGGTIA/oYE+sAAAAASUVORK5CYII="
        id="movie-ticket"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default MovieTicket;
