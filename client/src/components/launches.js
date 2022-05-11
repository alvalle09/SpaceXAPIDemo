import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/client';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            missing_name
            launch_date_loca
            launch_success
        }
    }
`;

export default class Launches extends Component {
  render() {
    return (
      <div>
         <h1 className="display-4 my-3">Launches</h1>
      </div>
    )
  }
}
