/*
 * @Date: 2023-06-13 14:21:30
 * @Description: SearchPanel
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, SearchBannerBox, SearchInputBox } from './SearchPanel.module';
import { StyledInput, PrimaryButton } from './SearchPage.module';
import { SearchOutlined } from '@ant-design/icons';
type MatchParams = {
  touristRouteId: string;
};

export const SearchPanel: React.FC = () => {
  const { touristRouteId } = useParams<MatchParams>();
  console.log(touristRouteId, 'useparams001');

  return (
    <Container>
      <SearchBannerBox>
        <h1>Explore the whole world</h1>
        <h1>and enjoy its beauty</h1>
        <SearchInputBox>
          <div>
            <div>World</div>
            <div></div>
          </div>
          <div>
            <StyledInput
              prefix={<SearchOutlined rev={undefined} />}
              placeholder="Search Destination"
              allowClear
              bordered
            />
          </div>
          <div>
            <PrimaryButton>Search</PrimaryButton>
          </div>
        </SearchInputBox>
      </SearchBannerBox>
    </Container>
  );
};
