import { css } from "styled-components";

export const DatePickerStyles = css`
  .react-datepicker {
    border-color: black;
    background: #0f181c;
    padding: 1em;

    &-wrapper {
      width: 100%;
    }

    &__header {
      background: #0f181c;
      border-bottom: none;
    }

    &__navigation {
      top: 40px;
      &--previous {
        left: 15px;
      }
      &--next {
        right: 15px;
      }
    }

    &__triangle {
      display: none;
    }

    &__current-month {
      color: #999;
      margin: 0;
      border: 1px solid black;
      padding: 0.25rem;
      height: 40px;
      line-height: 40px;
    }

    &__month {
      margin: 0;
    }

    &__week {
      border-bottom: 1px solid black;
      border-left: 1px solid black;
    }

    &__day-names {
      border-bottom: 1px solid black;
    }

    &__day-name {
      color: #999;
      margin: 0;
      border-right: 1px solid black;
      padding: 0.25rem;
      &:first-child {
        border-left: 1px solid black;
      }
    }

    &__day {
      color: #999;
      border-radius: 0;
      border-right: 1px solid black;
      margin: 0;
      padding: 0.25rem;
      &--selected {
        background: #90ee7e;
        color: black;
      }
      &--keyboard-selected {
        background: none;
      }
      &:hover {
        color: black;
      }
    }

    &__day--outside-month {
      color: transparent;
      pointer-events: none;
    }
  }
`;
