const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={76} height={46} fill="none">
    <path
      fill="#49BFBF"
      d="M0 2.421A2.417 2.417 0 0 1 2.413 0h71.174A2.417 2.417 0 0 1 76 2.421v23.605a2.417 2.417 0 0 1-2.413 2.421H2.413A2.417 2.417 0 0 1 0 26.027V2.42Z"
    />
    <path
      fill="#fff"
      d="M6.647 6.941c2.722 0 5.346 1.453 7.875 4.358.772 1.53 1.158 3.012 1.158 4.445 0 3.37-1.708 5.85-5.124 7.438-1.1.484-2.288.726-3.562.726h-.723c-.715-.02-1.072-.32-1.072-.9h-.086c0-.524.328-.795.984-.814h.666v-.174h.058c-1.197-5.094-1.795-8.88-1.795-11.36h-.087l-.724.465c-.502 0-.801-.34-.898-1.017 0-1.065.599-1.995 1.796-2.79a3.27 3.27 0 0 1 1.534-.377Zm.347 1.714h-.231v1.395c0 3.176.598 7.166 1.795 11.97h.087C12.215 21.05 14 18.96 14 15.744c0-3.447-1.998-5.752-5.993-6.914-.232-.117-.57-.175-1.014-.175ZM21.768 7.377h.116c2.335.426 3.503 1.56 3.503 3.4v.522c0 2.034-1.293 4.058-3.88 6.072v.116c4.189 3.758 7.084 5.637 8.686 5.637.29.213.434.474.434.784 0 .445-.328.726-.984.842-1.602 0-4.594-1.936-8.975-5.81l-1.245-.668h-.087c.54 2.169.81 3.844.81 5.026 0 .503-.308.862-.926 1.075-.888 0-1.448-2.18-1.68-6.537-.617-2.014-.926-3.622-.926-4.823v-.261c0-1.763.386-2.644 1.158-2.644l.55.29h.174c.927-2.014 2.017-3.021 3.272-3.021Zm-2.345 7.757-.087 1.075c1.795 0 3.242-1.491 4.343-4.474V10.66c0-.852-.58-1.366-1.737-1.54h-.174c-1.216 0-1.998 2.005-2.345 6.014ZM40.544 7.145c.348 0 .589.3.724.9 0 .349-.608.833-1.824 1.453-1.505 1.317-2.625 3.583-3.358 6.798v.523c1.679-.833 2.885-1.336 3.619-1.51.231 0 .511.203.84.61v.551c0 .213-.85.64-2.549 1.279-1.273.697-1.91 1.094-1.91 1.19v.262c0 1.085.695 2.024 2.084 2.819l.985.174c.637 0 1.582-.397 2.837-1.191h.347c.406.193.608.474.608.842v.175c-1.196 1.258-2.519 1.888-3.966 1.888-2.065 0-3.57-1.395-4.517-4.184l-1.824.378c-.887-.136-1.332-.426-1.332-.872 0-.445.261-.765.782-.958l.666.116c1.004-.29 1.506-.504 1.506-.64 0-3.292 1.245-6.342 3.734-9.15 1.255-.97 2.104-1.453 2.548-1.453ZM50.321 6.65l.724-.232c.656 0 .984.872.984 2.615l.898 6.711.116.116 3.33-1.22c.443 0 .684.34.723 1.017 0 .503-1.226 1.114-3.677 1.83l-.116.058v.117c0 .406.637 2.527 1.911 6.362v.058c0 .368-.299.678-.897.93-.56 0-.927-.668-1.1-2.005-.444-.968-.985-2.566-1.622-4.793h-.116c-2.528.523-3.792.968-3.792 1.336-1.39 3.021-2.442 4.532-3.156 4.532-.406 0-.647-.261-.724-.784 0-.465.511-1.375 1.534-2.731l.464-1.017h-.724l-.55.116c-.714-.174-1.072-.542-1.072-1.104.29-.678.715-1.017 1.274-1.017l.724.29c1.081 0 1.621-.396 1.621-1.19.985-2.325 2.066-5.656 3.243-9.994Zm.26 5.288-1.707 5.172c1.582-.31 2.374-.61 2.374-.901-.29-2.847-.512-4.27-.666-4.27ZM66.294 2.7h.087c.482.251.723.532.723.842l-.724 5.52c0 2.014.599 6.188 1.796 12.522l1.447 3.631c0 .252-.203.533-.608.843h-.55c-.386-.116-.965-1.308-1.737-3.574-.502-1.82-1.004-4.629-1.506-8.425h-.173c-1.12 3.331-1.911 5.055-2.374 5.171l-.464.117c-.405 0-.907-.795-1.505-2.383h-.203c-.231 4.784-.685 7.176-1.36 7.176h-.087c-.618 0-.956-.484-1.014-1.452.483-1.86.724-3.796.724-5.81l-.782-7.7v-.552c0-.736.26-1.104.782-1.104.753 0 1.419 1.482 1.998 4.445.849 2.692 1.37 4.145 1.563 4.358.444-.697.888-1.937 1.332-3.719.347-.91.685-2.333 1.013-4.27l-.115-.087.115-.465v-.175c.174-3.273.715-4.91 1.622-4.91ZM26.038 32.17 21.116 46H19.38l-4.922-13.83h1.815l3.107 8.872c.142.374.264.736.367 1.084.103.349.193.685.27 1.008.09.31.168.62.232.93.064-.31.135-.627.212-.95.09-.323.187-.658.29-1.007l.366-1.104 3.089-8.832h1.833ZM31.783 46h-4.98v-1.007l1.621-.368v-11.06l-1.621-.387v-1.007h4.98v1.007l-1.622.388v11.059l1.622.368V46ZM42.145 46h-7.701V32.17h7.701v1.531h-5.964v4.32h5.617v1.51H36.18v4.939h5.964V46ZM60.996 32.17 57.33 46h-1.757l-2.683-9.064a72.077 72.077 0 0 1-.231-.833 39.459 39.459 0 0 1-.212-.814 21.338 21.338 0 0 0-.174-.658 8.643 8.643 0 0 1-.077-.426c-.013.09-.039.232-.078.426-.025.18-.07.4-.135.658-.064.258-.135.536-.212.833a12.54 12.54 0 0 1-.232.872L48.933 46h-1.757l-3.648-13.83h1.815l2.142 8.446c.077.297.148.593.212.89.065.285.123.569.174.853.064.27.116.536.154.794l.116.755c.039-.258.078-.523.116-.794.052-.271.11-.549.174-.833.064-.297.135-.594.212-.89.077-.298.155-.588.232-.872l2.432-8.348h1.795l2.528 8.406c.09.297.174.6.251.91.078.297.148.588.213.872.064.284.115.561.154.833.052.258.096.497.135.716.039-.323.09-.658.154-1.007.065-.362.142-.736.232-1.123.09-.388.187-.782.29-1.182l2.123-8.425h1.814Z"
    />
  </svg>
);
export default Logo;