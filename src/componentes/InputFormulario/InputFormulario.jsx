import React from "react";

const InputFormulario = ({name, onChange, value}) => {
  return (
    <div>
      <div class="col-md-8 position-relative">
        <label for="validationTooltip02" class="form-label">
          {name}
        </label>
        <input
          type="text"
          class="form-control"
          id="validationTooltipUsername"
          value={value}
          name={name}
          onChange={onChange}
          required
        />
        <div class="valid-tooltip">Looks good!</div>
      </div>
    </div>
  );
};

export default InputFormulario;
