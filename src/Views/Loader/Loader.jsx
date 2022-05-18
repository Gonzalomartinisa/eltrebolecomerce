import React from "react";
import { useState } from "react";

const Loader = ({ loading }) => {

    const [cargando, setCargando] = useState([])

    function spinner(loading){

    }

  return (
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
