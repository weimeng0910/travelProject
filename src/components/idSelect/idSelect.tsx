/*
 * @Date: 2023-10-10 10:53:01
 * @Description:IdSelect
 */
import { StyledSelect } from './idSelect.module';

const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
];

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? '#c9cbcc' : null,
      color: '##999999',
      fontSize: '1vw',

      width: '20vw',
      textAlign: 'center',

      overflow: 'hidden',
    };
  },
};

export const IdSelect: React.FC = () => (
  <>
    <StyledSelect
      defaultValue={aquaticCreatures[1]}
      classNamePrefix="Select"
      options={aquaticCreatures}
      styles={colourStyles}
    />
  </>
);
