import { css } from "styled-components";

const defaultDatePickerStyles = css`
  .DateInput {
    color: #999;

    &_fang {
      display: none;
    }

    &_fangStroke {
      fill: ${({ theme }) => theme.background};
    }

    &_input {
      color: inherit;
      background-color: ${({ theme }) => theme.background};
      border-radius: 0 4px 4px 0;

      &__focused {
        border-bottom-color: transparent;
      }
    }
  }

  .DayPicker {
    box-shadow: none;
    background: ${({ theme }) => theme.background};
    border-radius: 0;
    &_transitionContainer {
      border-radius: 0;
      background: ${({ theme }) => theme.background};
    }
  }

  .CalendarMonthGrid {
    background: ${({ theme }) => theme.background};
  }

  .CalendarMonth {
    background: ${({ theme }) => theme.background};
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
      background: ${({ theme }) => theme.background};
      color: #999;
      border: 1px solid ${({ theme }) => theme.calendar.day.borderColor};
      &:hover {
        background: #ffffff;
        color: #000000;
      }
    }

    &__selected,
    &__selected_span,
    &__hovered_span:hover,
    &__hovered_span {
      background: ${({ theme }) => theme.calendar.day.selected.background};
      color: ${({ theme }) => theme.calendar.day.selected.color};
    }
  }
`;

export const SingleDatePickerStyles = css`
  .SingleDatePicker {
    color: #999;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow};

    .SingleDatePickerInput {
      background: ${({ theme }) => theme.background};
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
      background: ${({ theme }) => theme.background};
      border-radius: 4px;
      border: none;
    }
  }
  ${defaultDatePickerStyles};
`;
