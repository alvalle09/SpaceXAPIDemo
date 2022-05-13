
import { gql, useQuery } from '@apollo/client';

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

export default function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (error) return <h4>Error!</h4>
    if (loading) return <h4>Loading...</h4>

    return (
    <>
      <div>
         <h1 className="display-4 my-3">Launches</h1>
        
      </div>
      </>
    )
    
}
