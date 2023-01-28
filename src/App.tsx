import {useRef} from 'react';
import './App.css';
import Form from './components/forms/Form';
import Preview from './components/preview/Preview';
import { FormDataContextProvider } from './contexts/FormContext';
import {useReactToPrint} from 'react-to-print';


function App() {
  const previewRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: "CV File",
  })

  return (
    <FormDataContextProvider>
      <div className="App">
        <header>
          <h1>CV Generator</h1>
        </header>
        <div className="main-content">
          <Form
            handlePrint={handlePrint}
          />
          <Preview
            ref={previewRef}
          />
        </div>
      </div>
    </FormDataContextProvider>
  );
}

export default App;
