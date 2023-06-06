import { useState } from 'react';
import './App.css';
import explorerData from './ExplorerData/ExplorerData';
import Folder from './Components/Folder';
import useTraverseTree from './Hook/useTraverseTree';


function App() {
  const [explorer, setExplorer] = useState(explorerData);
  const {insertNode,renameNode, deleteNode} = useTraverseTree();

  const handleInsertNode = (folderId,isFolder,item) => {
    console.log(folderId,isFolder,item);
    //send tree, foldername, folder=true/false, item name
    const finalTree = insertNode(explorer,folderId,isFolder,item);
    console.log("new tree is");
    console.log(finalTree);
    setExplorer(finalTree)
  }
  const handleRenameNode = (folderId,newName)=>{
    const finalTree = renameNode(explorer, folderId, newName);
    setExplorer(finalTree)
  }

  const handleDeleteNode = (folderId)=>{
    const finalTree = deleteNode(explorer, folderId);
    setExplorer(finalTree)
  }
  return (
    <div className="App">
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} handleRenameNode={handleRenameNode} handleDeleteNode={handleDeleteNode}/>
    </div>
  );
}

export default App;
