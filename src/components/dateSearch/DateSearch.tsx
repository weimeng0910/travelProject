/*
 * @Date: 2023-10-03 19:53:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 14:31:19
 * @FilePath: /travelProject/src/components/dateSearch/DateSearch.tsx
 * @Description: DateSearch
 */
import { DatePickerPage } from '@/components/datePicker';
import { IdSelect } from '@/components/idSelect';
import {
  Container,
  EmojiWinkFillIcon,
  GeoAltFillIcon,
  SpeedometerIcon,
  PersonHeartsIcon,
  GoLangIcon,
} from './DateSearch.module';
/**
 * DateSearch
 */

export const DateSearch = () => {
  return (
    <Container>
      <div id="menuBox">
        <div title="float">
          <a>
            <GoLangIcon />
          </a>
        </div>
        <div title="float">
          <a>
            <IdSelect />
          </a>
        </div>
        <div title="float">
          <a>
            <IdSelect />
          </a>
        </div>
        <div title="float">
          <DatePickerPage />
        </div>

        <div id="Icon" title="float">
          <a>
            <EmojiWinkFillIcon />
          </a>
        </div>
      </div>
    </Container>
  );
};
