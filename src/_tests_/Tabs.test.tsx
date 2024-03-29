/*
 * @Date: 2023-11-23 14:08:56
 * @Description: Tabs Test
 */
import { render, RenderResult, fireEvent, screen, waitFor } from '@testing-library/react';
import { Tabs, Tab, TabBarList, TabPane, TabPanels } from '../common/components/Tabs/Tabs';
import { IPropsInter } from '@/types/tabs';

const testProps: IPropsInter = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
};

const generateTabs = (props: IPropsInter) => {
  return (
    <Tabs {...props}>
      <TabBarList>
        <Tab>0000001</Tab>
        <Tab>0000002</Tab>
        <Tab>0000003</Tab>
      </TabBarList>
      <TabPanels>
        <TabPane>TabContent 0</TabPane>
        <TabPane>TabContent 1</TabPane>
        <TabPane>TabContent 2</TabPane>
      </TabPanels>
    </Tabs>
  );
};
let wrapper: RenderResult,
  TabsElement: HTMLElement,
  TabBarListElement: HTMLElement,
  TabElement: HTMLElement,
  TabPanelsElement: HTMLElement,
  TabPaneElement: HTMLElement,
  TabNextElement: HTMLElement;
describe('test Tabs and TabBar and Tab and TabPanels and TabPane component', () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps));
    TabsElement = wrapper.getByTestId('test-tabs');
    TabBarListElement = wrapper.getByTestId('test-tabbar');
    TabPanelsElement = wrapper.getByTestId('test-tabpanels');
    TabElement = wrapper.getByText('0000001');
    TabNextElement = wrapper.getByText('0000002');
    TabPaneElement = wrapper.getByText('TabContent 0');
  });

  it('should render correct Tabs and Tab and TabBarList and TabPanels based on default props', () => {
    expect(TabsElement).toBeInTheDocument();
    expect(TabBarListElement).toBeInTheDocument();
    expect(TabPanelsElement).toBeInTheDocument();
    expect(TabElement).toBeInTheDocument();
    expect(TabPaneElement).toBeInTheDocument();
    expect(TabBarListElement).toHaveStyle('display: inline-block');
  });
  it('should TabItems should change active and call the right callback', async () => {
    fireEvent.click(TabElement);
    await waitFor(() => {
      expect(TabElement).toHaveStyle('background:47CF73');
      expect(TabPaneElement).toBeInTheDocument();
    });

    fireEvent.click(TabNextElement);
    await waitFor(() => {
      expect(TabNextElement).toHaveStyle('background:47CF73');
      expect(wrapper.getByText('TabContent 1')).toBeInTheDocument();
    });
  });
});
