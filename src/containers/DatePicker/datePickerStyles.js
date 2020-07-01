import { css } from "styled-components";

const defaultDatePickerStyles = css`
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
    background: #0f181c;
    border-radius: 0;
    &_transitionContainer {
      border-radius: 0;
      background: #0f181c;
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

    &__selected,
    &__selected_span {
      background: #90ee7e;
      color: black;
    }
  }
`;

export const SingleDatePickerStyles = css`
  .SingleDatePicker {
    color: #999;
    cursor: pointer;

    .SingleDatePickerInput {
      background: #0f181c;
      border-radius: 4px;
      border: none;
    }
    ${defaultDatePickerStyles};
  }
`;

export const DateRangePickerStyles = css`
  .DateRangePicker {
    color: #999;
    cursor: pointer;

    .DateRangePickerInput {
      background: #0f181c;
      border-radius: 4px;
      border: none;
    }
  }
  ${defaultDatePickerStyles};
`;
