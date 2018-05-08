import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PDF from 'react-pdf-js-infinite';
import storyData from './helpers/storyData.jsx';
import Table from 'rc-table';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

var tableData =[
  {
    headline: 'Can Apple Be Out-Appled?',
    publication: 'Blouin News',
    stIndex: '2'
  },
  {
    headline: 'On Innovation: The Bone Doctor\'s Knees, The Clean Air Catalyst, and Cracking the College Code',
    publication: 'Seton Hall Magazine',
    stIndex: '3'
  },
  {
    headline: 'Commodity Beckons New TV Services From Comcast, Microsoft...',
    publication: 'Blouin News',
    stIndex: '3'
  },
  {
    headline: 'A Huge Tech Vs. Start-up Battle Simmers',
    publication: 'Blouin News',
    stIndex: '1'
  },
  {
    headline: 'Giving Physics A Good Name',
    publication: 'Seton Hall Magazine',
    stIndex: '2'
  },
  {
    headline: 'Breaking news online',
    publication: 'Seton Hall Magazine',
    stIndex: '1'
  },
  {
    headline: 'Adventures in State Bailouts',
    publication: 'The Big Money (Slate)',
    stIndex: '1'
  },
  {
    headline: 'All Things Considered Digitally',
    publication: 'Forbes',
    stIndex: '1'
  },
  {
    headline: 'Boxee Wants To Kill Your Television',
    publication: 'Forbes',
    stIndex: '2'
  },
  {
    headline: 'Charting an East/West Passage (to "ambicultural"-ism)',
    publication: 'The Darden Report (UVA)',
    stIndex: '1'
  },
  {
    headline: 'Electronic Arts standing firm on USD 26 offer for Take-Two',
    publication: 'FT.com',
    stIndex: '1'
  },
  {
    headline: 'GodTube',
    publication: 'Forbes',
    stIndex: '2'
  },
  {
    headline: 'How To Get Readers To Really Want You',
    publication: 'Forbes',
    stIndex: '11'
  },
  {
    headline: 'Is The Wine Trade Recession-Proof?',
    publication: 'The Darden Report (UVA)',
    stIndex: '2'
  },
  {
    headline: 'Live, From The Internet',
    publication: 'Forbes',
    stIndex: '5'
  },
  {
    headline: 'Owning The News',
    publication: 'Forbes',
    stIndex: '3'
  },
  {
    headline: 'Putting Newspapers On Trial',
    publication: 'Forbes',
    stIndex: '8'
  },
  {
    headline: 'Rupert Murdoch: Big Man On Campus',
    publication: 'Forbes',
    stIndex: '6'
  },
  {
    headline: 'Slowing Fast Company',
    publication: 'Forbes',
    stIndex: '9'
  }
];

class JandL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cPDF: storyData[this.props.publication][this.props.id]
    }

    this.getUpdatedStory = this.getUpdatedStory.bind(this);
  }

  getUpdatedStory(event, row) {
    var index = parseInt(row.original.stIndex) - 1;
    var routeIndex = row.original.stIndex;
    var publication = row.original.publication
      .replace(/\s/g, '-')
      .replace(/\.com/g, '')
      .replace(/-\(UVA\)/g, '')
      .replace(/The-Big-Money-\(/g, '')
      .replace(/\)/g, '')
      .toLowerCase();

    this.setState(
      {
        cPDF: storyData[publication][index]
      }
    )

    this.props.history.push(`/jnl/${publication}/${routeIndex}`);
  }

  render() {
    var columns = [
      {
        headerClassName: 'my-column-header-group',
        minWidth: 100,
        Header: 'Headline',
        accessor: 'headline'
      },
      {
        headerClassName: 'my-column-header-group',
        maxWidth: 175,
        Header: 'Publication',
        accessor: 'publication'
      }
    ];

    return (
      <div id='JnLContainer'>
        <div id='List'>
          <h1>The Story</h1>
          <div>
          <p>I was writing about digital media and technology for Forbes three years after I came to New York to be a professional writer. Here's some of my work.</p>
          <p></p>
          </div>
          <ReactTable
            data={tableData}
            columns={columns}
            defaultPageSize={12}
            showPaginationBottom={true}
            showPageSizeOptions={false}
            showPageJump={false}
            sortable={false}
            className='-highlight'
            getTdProps={(state, row) => {
              return {
                onClick: (e) => {
                  this.getUpdatedStory(e, row);
                }
              }}
            }
          />
        </div>
        <div id='PDFStory'>
          {
            <PDF
              file={this.state.cPDF}
              scale={1.3}
              key={this.state.cPDF}
            />
          }
        </div>
      </div>
    )
  }

}

export default withRouter(JandL);
