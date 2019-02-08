import React, { Component } from 'react';
import { H2 } from '@govuk-react/header';
import Table from '@govuk-react/table';

import { Tab, TabList, TabPanel, Tabs, TabsTitle } from '.';

const arrTitles = ['Past day', 'Past week', 'Past month', 'Past year'];

const flip2dArray = (prev, next) =>
  next.map((item, i) => [...(prev[i] || []), next[i]]);

const tableHead = (
  <Table.Row>
    <Table.CellHeader>Case manager</Table.CellHeader>
    <Table.CellHeader>Cases opened</Table.CellHeader>
    <Table.CellHeader>Cases closed</Table.CellHeader>
  </Table.Row>
);

class TabsFixture extends Component {
  state = {
    tabIndex: 0,
  }


  setTabIndex = newTabIndex => this.setState({
    tabIndex: newTabIndex,
  })

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <TabsTitle>Content</TabsTitle>
        <TabList>
          {arrTitles.map((label, index) => (
            <Tab
              key={`${label}-tabHeader`}
              onClick={() => this.setTabIndex(index)}
              isActive={tabIndex === index}
            >
              {label}
            </Tab>
          ))}
        </TabList>
        {[
          {
            title: 'Past day',
            arr: [[3, 1, 2], [0, 0, 0]],
            id: 'past-day',
          },
          {
            title: 'Past week',
            arr: [[24, 16, 24], [18, 20, 27]],
            id: 'past-week',
          },
          {
            title: 'Past month',
            arr: [[98, 122, 126], [95, 131, 142]],
            id: 'past-month',
          },
          {
            title: 'Past year',
            arr: [[1380, 1129, 1539], [1472, 1083, 1265]],
            id: 'past-year',
          },
        ].map(({ arr, id, title }, index) => (
          <TabPanel isActive={tabIndex === index} key={`${title}-tabPanel`} id={id}>
            <H2>{title}</H2>
            <Table
              head={tableHead}
              body={[['David Francis', 'Paul Farmer', 'Rita Patel'], ...arr]
                .reduce(flip2dArray, [])
                .map(innerArr => (
                  <Table.Row key={`${innerArr.join()}-col`}>
                    {innerArr.map(elem => (
                      <Table.Cell key={`${elem}-row`}>{elem}</Table.Cell>
                    ))}
                  </Table.Row>
                ))}
            />
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

export default TabsFixture;
