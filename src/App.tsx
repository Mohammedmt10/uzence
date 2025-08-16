import { useState } from "react"
import InputField from "./components/ui/inputField"
import Moon from "./icons/moon";
import Sun from "./icons/sun";
import DataTables from "./components/ui/dataTables";
function App() {

  const [darkMode , setDarkMode] = useState(false);
  const mode = darkMode ? "bg-black text-white placeholder:text-white" : ""
  
  const data = [{ id : 1, name : "Alice", age : 30 },{ id : 2, name : "Bob", age : 25 }];

  const columns = [
    { key: 'name', title: 'Name', dataIndex: 'name' },
    { key: 'age', title: 'Age', dataIndex: 'age' }
  ];

  return <div className={`${mode} p-5`}>
    {!darkMode && <div className="float-end cursor-pointer" onClick={() => {
      setDarkMode(c => !c);
    }}><Moon /></div>}
    {darkMode && <div className="float-end cursor-pointer" onClick={() => {
      setDarkMode(c => !c);
    }}><Sun /></div>}
    <DataTables data={data} columns={columns} selectable />
    <InputField label="Name" placeholder="John" size="md" />
  </div>
}

export default App
