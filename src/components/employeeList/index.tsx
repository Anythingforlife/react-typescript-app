import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import Employee from '../../model/employee-model';

const GET_EMPLOYEE_LIST = gql`
  query($currentPage: Int!, $perPage: Int!) {
    getEmployees(currentPage: $currentPage, perPage: $perPage) {
      total
      data {
        id
        employee_name
        employee_salary
        employee_age
      }
    }
  }
`;

export default function EmployeeList() {
  const {loading, data, error} = useQuery(GET_EMPLOYEE_LIST, {
    variables: {currentPage: 1, perPage: 10},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <div className="container mt-4">
        <table className="table-sm table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.getEmployees.data.map((item: Employee, i: number) => {
              return (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_age}</td>
                  <td>{item.employee_salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>Loading Component</div>;
}
