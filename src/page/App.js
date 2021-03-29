import React from 'react';
import PermissionsTable from '../components/PermissionsTable';
import Button from '../components/Button'
import '../style/App.css';

function App() {

  
  return (
    <div className="container">
       <header>
            <h1>Tabela de Permissões</h1>
          </header>
          <main>
              <PermissionsTable />
              <Button />
          </main>
              
     
    </div>
  );
}

export default App;
