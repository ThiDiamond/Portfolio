import Axios from 'axios';
import Parser from 'html-react-parser';
import {
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
  MDBIcon,
} from 'mdbreact';
import React, { Component } from 'react';
import { files } from './files';

class ChallengesList extends Component {
  state = {
    collapseID: '',
    scripts: [],
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  fetchScripts = async () => {
    const scripts = [];

    for (const file of files) {
      try {
        const script = await Axios.get(
          `https://raw.githubusercontent.com/ThiDiamond/Uri/master/python/${file}`
        );
        const lines = script.data.split(' ').join('\u00a0').split('\n');

        scripts.push({ lines, file });
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({ scripts });
  };

  componentDidMount() {
    this.fetchScripts();
  }

  renderItem = (script, idx) => {
    const { lines, file } = script;
    return (
      <MDBCard key={idx} className='my-1 dark-slate-gray'>
        <MDBCollapseHeader onClick={this.toggleCollapse(file)}>
          <a
            href={`https://www.urionlinejudge.com.br/judge/pt/problems/view/${file.replace(
              '.py',
              ''
            )}`}
            className='white-text'
          >
            {file}
          </a>
          <MDBIcon
            icon={
              this.state.collapseID === 'collapse1' ? 'angle-up' : 'angle-down'
            }
            className='white-text'
            style={{ float: 'right' }}
          />
        </MDBCollapseHeader>
        <MDBCollapse id={file} isOpen={this.state.collapseID}>
          <MDBCardBody className='rgba-grey-light white-text'>
            {lines.map((line, idx) => (
              <div key={idx}>
                {Parser(line)}
                <br />
              </div>
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>
    );
  };
  render() {
    const { scripts } = this.state;
    return (
      <MDBContainer>
        <MDBContainer className='p-5'>
          {scripts.map(this.renderItem)}
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default ChallengesList;
