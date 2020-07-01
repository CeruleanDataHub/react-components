import { css } from "styled-components";

export const SingleDatePickerStyles = css`
  .SingleDatePicker {
    color: #999;
    cursor: pointer;

    .SingleDatePickerInput {
      background: #0f181c;
      border-radius: 4px;
    }

    .DateInput {
      color: #999;

      &_fangStroke {
        fill: #0f181c;
      }

      &_input {
        color: inherit;
        background-color: #0f181c;
        border-radius: 0 4px 4px 0;

        &__focused {
          border-bottom-color: transparent;
        }
      }
    }

    .DayPicker {
      box-shadow: none;
      &_transitionContainer {
        border-radius: 0;
      }
    }

    .CalendarMonthGrid {
      background: #0f181c;
    }

    .CalendarMonth {
      background: #0f181c;
      padding: 0 13px 10px 13px;
      &_caption {
        color: #999;
        padding-bottom: 42px;
      }
    }

    .DayPickerNavigation_button {
      &__default {
        background: transparent;
        border: none;
      }
    }

    .CalendarDay {
      &__default {
        background: #0f181c;
        color: #999;
        border: 1px solid black;
        &:hover {
          background: white;
          color: black;
        }
      }

      &__selected {
        background: #90ee7e;
        color: black;
      }
    }
  }
`;
