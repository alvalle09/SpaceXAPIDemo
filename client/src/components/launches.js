import { gql, useQuery } from '@apollo/client';
import { Fragment } from 'react';
import LaunchItem from './LaunchItem';
  
const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export default function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (error) return <h4>Error!</h4>
    if (loading) return <h4>Loading...</h4>

    return (        
      <Fragment>
         <h1 className="display-4 my-3">Launches</h1>

         {
             data.launches.map(launch => (
                <LaunchItem key={launch.flight_number} launch={launch} />
             ))
         }         
      </Fragment>      
    )    
}
