/*
 * @Date: 2023-10-06 16:20:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-13 14:52:49
 * @FilePath: /travelProject/src/components/datePicker/DatePicker.tsx
 * @Description: DatePicker
 */
import { DatePicker } from 'antd';
import { Container } from './DatePicker.module';
import { SpeedometerIcon } from '../dateSearch/DateSearch.module';
/**
 * @Description: DatePicker
 */
export const DatePickerPage = () => {
  //导入icon
  const speedometer = <SpeedometerIcon />;
  return (
    <Container>
      <DatePicker allowClear={false} suffixIcon={speedometer} />
    </Container>
  );
};
