import { css } from "styled-components";

export const SingleDatePickerStyles = css`
  .SingleDatePicker {
    color: #999;

    .SingleDatePickerInput {
      background: #0f181c;
    }

    .DateInput {
      color: #999;
      &_input {
        color: inherit;
        background-color: #0f181c;

        &__focused {
          border-bottom-color: transparent;
        }
      }
    }
  }
`;
