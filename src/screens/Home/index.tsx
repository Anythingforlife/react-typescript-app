import React from 'react';
import EmployeeList from '../../components/employeeList';
import Header from '../../components/Header';

export default function HomeComponent() {
  return (
    <div>
      <Header />
      <EmployeeList />
    </div>
  );
}
